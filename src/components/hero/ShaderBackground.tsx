"use client";

import { useEffect, useRef } from "react";

interface ProgramUniforms {
  resolution: WebGLUniformLocation | null;
  time: WebGLUniformLocation | null;
}

const VERTEX_SOURCE = `#version 300 es
precision highp float;
in vec4 position;
void main() {
  gl_Position = position;
}`;

// The CMC shield, rebuilt as a living background: an animated diagonal
// divide between brand blue and accent red, with a bright seam where they
// meet (echoing the shield's white crown) and a fine grain so the fields
// don't read as flat CSS gradients.
const FRAGMENT_SOURCE = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x, R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(in vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3. - 2. * f);
  float a = rnd(i), b = rnd(i + vec2(1, 0)), c = rnd(i + vec2(0, 1)), d = rnd(i + 1.);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = .0, a = 1.;
  mat2 m = mat2(1., -.5, .2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2. * m;
    a *= .5;
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - .5 * R) / MN;

  // A gently animated diagonal seam — the shield's blue/red divide.
  float d = uv.x - uv.y * 0.35 + sin(uv.y * 2.0 + T * 0.15) * 0.05;

  vec3 blue = vec3(0.086, 0.310, 0.816);
  vec3 red  = vec3(0.780, 0.114, 0.114);
  float m = smoothstep(-0.5, 0.5, d * 4.0);
  vec3 col = mix(blue, red, m);

  // A bright, gently pulsing glow along the seam itself.
  float seam = exp(-abs(d) * 12.0) * (0.75 + 0.25 * sin(T * 1.4));
  col += vec3(1.0) * seam * 0.85;

  // Fine grain so each field reads as alive, not a flat gradient.
  float grain = fbm(uv * 2.2 + T * 0.04);
  col *= 0.86 + 0.16 * grain;

  // Vignette toward the edges, receding into the section's black backdrop.
  float vig = smoothstep(1.35, 0.15, length(uv));
  col *= vig;

  O = vec4(col, 1.0);
}`;

class ShaderRenderer {
  private readonly gl: WebGL2RenderingContext;
  private readonly canvas: HTMLCanvasElement;
  private program: WebGLProgram | null = null;
  private buffer: WebGLBuffer | null = null;
  private uniforms: ProgramUniforms | null = null;

  constructor(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext) {
    this.canvas = canvas;
    this.gl = gl;
    this.setup();
  }

  private setup(): void {
    const gl = this.gl;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    gl.shaderSource(vertexShader, VERTEX_SOURCE);
    gl.compileShader(vertexShader);
    gl.shaderSource(fragmentShader, FRAGMENT_SOURCE);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(fragmentShader));
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    this.program = program;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    this.uniforms = {
      resolution: gl.getUniformLocation(program, "resolution"),
      time: gl.getUniformLocation(program, "time"),
    };
  }

  resize(): void {
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  render(elapsedSeconds: number): void {
    const { gl, program, uniforms, buffer } = this;
    if (!program || !uniforms) return;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(uniforms.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(uniforms.time, elapsedSeconds);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose(): void {
    const gl = this.gl;
    if (this.buffer) gl.deleteBuffer(this.buffer);
    if (this.program) gl.deleteProgram(this.program);
  }
}

interface ShaderBackgroundProps {
  /** When true, renders a single static frame instead of animating. */
  reducedMotion?: boolean;
  className?: string;
}

/**
 * A single lightweight WebGL2 canvas — no three.js/react-three-fiber needed.
 * This is the entire "engine": one shader, one draw call per frame.
 */
export function ShaderBackground({ reducedMotion = false, className }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false });
    if (!gl) return;

    const renderer = new ShaderRenderer(canvas, gl);
    let frameId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.max(1, Math.floor(clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(clientHeight * dpr));
      renderer.resize();
    };

    resize();

    if (reducedMotion) {
      renderer.render(0);
    } else {
      const loop = (now: number) => {
        renderer.render(now * 1e-3);
        frameId = requestAnimationFrame(loop);
      };
      frameId = requestAnimationFrame(loop);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
