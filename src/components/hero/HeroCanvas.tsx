"use client";

import { Suspense, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { NetworkCore } from "./NetworkCore";
import { SignalField } from "./SignalField";
import { CameraRig } from "./CameraRig";

interface HeroCanvasProps {
  scrollProgress: RefObject<number>;
}

export function HeroCanvas({ scrollProgress }: HeroCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.4], fov: 45 }}
    >
      <color attach="background" args={["#05070d"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#60a5fa" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#22d3c7" />

      <Suspense fallback={null}>
        {/* A small, fully self-contained light-probe (no external HDRI fetch)
            that hands the glass core something believable to reflect and
            refract, art-directed to the brand palette. */}
        <Environment resolution={256}>
          <Lightformer
            form="rect"
            intensity={4}
            color="#60a5fa"
            position={[4, 3, 4]}
            scale={[6, 6, 1]}
            target={[0, 0, 0]}
          />
          <Lightformer
            form="rect"
            intensity={3}
            color="#5eead4"
            position={[-5, -2, -3]}
            scale={[5, 5, 1]}
            target={[0, 0, 0]}
          />
          <Lightformer
            form="ring"
            intensity={2.5}
            color="#a78bfa"
            position={[0, 4, -4]}
            scale={4}
            target={[0, 0, 0]}
          />
        </Environment>
        <NetworkCore scrollProgress={scrollProgress} />
        <SignalField scrollProgress={scrollProgress} />
      </Suspense>

      <CameraRig scrollProgress={scrollProgress} />

      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          intensity={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.25} darkness={0.65} />
      </EffectComposer>
    </Canvas>
  );
}
