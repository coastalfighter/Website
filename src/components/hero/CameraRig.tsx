"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, type RefObject } from "react";
import { MathUtils, Vector3 } from "three";

interface CameraRigProps {
  scrollProgress: RefObject<number>;
}

const START_RADIUS = 5.4;
const END_RADIUS = 3.1;
const ORBIT_ANGLE = Math.PI * 0.55; // ~99° swing around the core
const RISE = 1.4;

/**
 * Turns scrolling through the pinned hero into a real 3D camera move: the
 * camera orbits around the glass core on an arc (not just a straight
 * dolly-in), rising and closing in as scroll progress goes 0 -> 1, with
 * pointer parallax layered on top at all times.
 */
export function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera, pointer } = useThree();
  const lookTarget = useMemo(() => new Vector3(0, 0, 0), []);

  useFrame((_state, delta) => {
    const progress = scrollProgress.current ?? 0;
    const eased = progress * progress * (3 - 2 * progress); // smoothstep

    // Starts at angle = 90° so the orbit's initial position (x=0, z=radius)
    // exactly matches the Canvas's starting camera=[0,0,5.4] — no pop at scroll 0.
    const angle = Math.PI / 2 - eased * ORBIT_ANGLE;
    const radius = MathUtils.lerp(START_RADIUS, END_RADIUS, eased);

    const orbitX = Math.cos(angle) * radius;
    const orbitZ = Math.sin(angle) * radius;
    const orbitY = eased * RISE;

    const parallaxX = pointer.x * 0.5;
    const parallaxY = pointer.y * 0.3;

    // react-three-fiber's camera/scene objects are plain mutable Three.js
    // instances meant to be updated imperatively inside the render loop —
    // not React-owned state, so the immutability rule doesn't apply here.
    /* eslint-disable react-hooks/immutability */
    camera.position.x = MathUtils.damp(camera.position.x, orbitX + parallaxX, 4, delta);
    camera.position.y = MathUtils.damp(camera.position.y, orbitY + parallaxY, 4, delta);
    camera.position.z = MathUtils.damp(camera.position.z, orbitZ, 3, delta);
    /* eslint-enable react-hooks/immutability */

    camera.lookAt(lookTarget);
  });

  return null;
}
