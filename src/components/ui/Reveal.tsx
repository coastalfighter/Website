"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const OFFSETS: Record<NonNullable<RevealProps["direction"]>, { x?: number; y?: number }> = {
  up: { y: 32 },
  left: { x: -48 },
  right: { x: 48 },
};

/** The one scroll effect used everywhere: fade + slide + a subtle 3D
 * tilt-up into place the first time an element enters the viewport, with a
 * direction knob for variety — still one system, not a pile of bespoke
 * motion effects. */
export function Reveal({ children, delay = 0, direction = "up", className }: RevealProps) {
  const offset = OFFSETS[direction];
  const reducedMotion = useReducedMotion();
  const tilt = reducedMotion ? 0 : 14;
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: tilt, ...offset }}
      whileInView={{ opacity: 1, rotateX: 0, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
