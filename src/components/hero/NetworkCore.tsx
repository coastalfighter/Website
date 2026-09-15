"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Sphere } from "@react-three/drei";
import type { Mesh } from "three";

/**
 * The hero's centerpiece: a refractive "glass core" representing CMC's
 * network — it slowly rotates and breathes, bending light and color through
 * itself like liquid glass.
 */
export function NetworkCore() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.y += delta * 0.1;
    mesh.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;

    const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.03;
    mesh.scale.setScalar(breathe);
  });

  return (
    <Sphere ref={meshRef} args={[1.35, 128, 128]}>
      <MeshTransmissionMaterial
        color="#8fd8ff"
        thickness={1.2}
        roughness={0.06}
        transmission={1}
        ior={1.25}
        chromaticAberration={0.045}
        anisotropy={0.3}
        distortion={0.25}
        distortionScale={0.4}
        temporalDistortion={0.15}
        clearcoat={1}
        attenuationDistance={2.5}
        attenuationColor="#22d3c7"
        backside
      />
    </Sphere>
  );
}
