"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGlowTexture } from "./glowTexture";

const NODE_COUNT = 64;
const NEIGHBORS_PER_NODE = 2;
const MIN_RADIUS = 2.3;
const MAX_RADIUS = 4.2;
const SCROLL_SWIRL = 1.1;

interface SignalFieldProps {
  /** 0-1 hero scroll progress; adds a slow swirl on top of pointer parallax. */
  scrollProgress?: RefObject<number>;
}

interface NodeSeed {
  base: THREE.Vector3;
  phase: number;
  speed: number;
  amp: number;
}

function generateSeeds(count: number): NodeSeed[] {
  const seeds: NodeSeed[] = [];
  for (let i = 0; i < count; i += 1) {
    const radius = THREE.MathUtils.lerp(MIN_RADIUS, MAX_RADIUS, Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(THREE.MathUtils.lerp(-1, 1, Math.random()));
    const base = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta) * 0.75,
      radius * Math.cos(phi)
    );
    seeds.push({
      base,
      phase: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.25,
      amp: 0.08 + Math.random() * 0.1,
    });
  }
  return seeds;
}

/** Connect each node to its nearest neighbors, once, at generation time. */
function buildEdges(seeds: NodeSeed[]): [number, number][] {
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];

  seeds.forEach((seed, i) => {
    const nearest = seeds
      .map((other, j) => ({ j, dist: i === j ? Infinity : seed.base.distanceTo(other.base) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, NEIGHBORS_PER_NODE);

    nearest.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([i, j]);
      }
    });
  });

  return edges;
}

/** A field of glowing "customer node" particles, gently drifting and linked by light-trails. */
export function SignalField({ scrollProgress }: SignalFieldProps = {}) {
  const seeds = useMemo(() => generateSeeds(NODE_COUNT), []);
  const edges = useMemo(() => buildEdges(seeds), [seeds]);
  const glowTexture = useGlowTexture();

  const pointsGeometryRef = useRef<THREE.BufferGeometry>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);
  const groupRef = useRef<THREE.Group>(null);
  const scratch = useMemo(() => new THREE.Vector3(), []);

  const nodePositions = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    seeds.forEach((seed, i) => {
      arr[i * 3] = seed.base.x;
      arr[i * 3 + 1] = seed.base.y;
      arr[i * 3 + 2] = seed.base.z;
    });
    return arr;
  }, [seeds]);

  const edgePositions = useMemo(() => {
    const arr = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], idx) => {
      const base = idx * 6;
      arr[base] = nodePositions[a * 3] ?? 0;
      arr[base + 1] = nodePositions[a * 3 + 1] ?? 0;
      arr[base + 2] = nodePositions[a * 3 + 2] ?? 0;
      arr[base + 3] = nodePositions[b * 3] ?? 0;
      arr[base + 4] = nodePositions[b * 3 + 1] ?? 0;
      arr[base + 5] = nodePositions[b * 3 + 2] ?? 0;
    });
    return arr;
  }, [edges, nodePositions]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    seeds.forEach((seed, i) => {
      const wobble = Math.sin(t * seed.speed + seed.phase) * seed.amp;
      scratch.copy(seed.base).multiplyScalar(1 + wobble * 0.05);
      scratch.y += Math.cos(t * seed.speed * 0.7 + seed.phase) * seed.amp;

      nodePositions[i * 3] = scratch.x;
      nodePositions[i * 3 + 1] = scratch.y;
      nodePositions[i * 3 + 2] = scratch.z;
    });

    edges.forEach(([a, b], idx) => {
      const base = idx * 6;
      edgePositions[base] = nodePositions[a * 3] ?? 0;
      edgePositions[base + 1] = nodePositions[a * 3 + 1] ?? 0;
      edgePositions[base + 2] = nodePositions[a * 3 + 2] ?? 0;
      edgePositions[base + 3] = nodePositions[b * 3] ?? 0;
      edgePositions[base + 4] = nodePositions[b * 3 + 1] ?? 0;
      edgePositions[base + 5] = nodePositions[b * 3 + 2] ?? 0;
    });

    const pointsAttr = pointsGeometryRef.current?.getAttribute(
      "position"
    ) as THREE.BufferAttribute | undefined;
    if (pointsAttr) pointsAttr.needsUpdate = true;

    const linesAttr = linesGeometryRef.current?.getAttribute(
      "position"
    ) as THREE.BufferAttribute | undefined;
    if (linesAttr) linesAttr.needsUpdate = true;

    if (groupRef.current) {
      const swirl = (scrollProgress?.current ?? 0) * SCROLL_SWIRL;
      const targetRotY = state.pointer.x * 0.25 + swirl;
      const targetRotX = -state.pointer.y * 0.15;
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        3,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        3,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef}>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#5eead4"
          transparent
          opacity={0.22}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <points>
        <bufferGeometry ref={pointsGeometryRef}>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          map={glowTexture}
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
          color="#93c5fd"
        />
      </points>
    </group>
  );
}
