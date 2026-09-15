"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, type RefObject } from "react";
import { MathUtils, Vector3 } from "three";

interface CameraRigProps {
  scrollProgress: RefObject<number>;
}

/** Drives a subtle pointer-parallax + scroll-triggered dolly on the hero camera. */
export function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera, pointer } = useThree();
  const lookTarget = useMemo(() => new Vector3(0, 0, 0), []);

  useFrame((_state, delta) => {
    const progress = scrollProgress.current ?? 0;
    const targetX = pointer.x * 0.6;
    const targetY = pointer.y * 0.35;
    const dolly = MathUtils.lerp(5.4, 3.7, progress);
    const drift = MathUtils.lerp(0, 0.6, progress);

    // react-three-fiber's camera/scene objects are plain mutable Three.js
    // instances meant to be updated imperatively inside the render loop —
    // not React-owned state, so the immutability rule doesn't apply here.
    /* eslint-disable react-hooks/immutability */
    camera.position.x = MathUtils.damp(camera.position.x, targetX + drift, 4, delta);
    camera.position.y = MathUtils.damp(camera.position.y, targetY, 4, delta);
    camera.position.z = MathUtils.damp(camera.position.z, dolly, 3, delta);
    /* eslint-enable react-hooks/immutability */

    camera.lookAt(lookTarget);
  });

  return null;
}
