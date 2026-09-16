"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const OFFSETS: Record<NonNullable<RevealProps["direction"]>, { x?: number; y?: number }> = {
  up: { y: 20 },
  left: { x: -24 },
  right: { x: 24 },
};

/** The one scroll effect used everywhere: fade + slide into place the first
 * time an element enters the viewport, with a direction knob for variety —
 * still one system, not a pile of bespoke motion effects. */
export function Reveal({ children, delay = 0, direction = "up", className }: RevealProps) {
  const offset = OFFSETS[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
