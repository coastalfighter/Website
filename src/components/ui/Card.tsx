"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface CardProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const TILT_DEGREES = 6;

/** A card with a cursor-tracked spotlight, a subtle 3D tilt toward the
 * cursor, and a glowing border on hover — the one hover effect used for
 * every card sitewide. */
export function Card({ children, delay = 0, direction = "up", className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;
    x.set(relX);
    y.set(relY);
    if (reducedMotion) return;
    rotateY.set(((relX / rect.width - 0.5) * TILT_DEGREES * 2));
    rotateX.set(-((relY / rect.height - 0.5) * TILT_DEGREES * 2));
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, color-mix(in oklab, var(--color-brand-400) 15%, transparent), transparent 70%)`;

  return (
    <Reveal delay={delay} direction={direction} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className={cn(
          "group relative h-full overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-card transition-colors duration-300 hover:border-brand-400/50 hover:shadow-glow",
          className
        )}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="relative">{children}</div>
      </motion.div>
    </Reveal>
  );
}
