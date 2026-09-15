"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const MAX_TILT = 10;

/** A card that tilts in 3D toward the cursor and lifts a soft glow beneath it. */
export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [0, 1], [-MAX_TILT, MAX_TILT]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);
  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${glowX} ${glowY}, color-mix(in oklab, var(--color-brand-400) 18%, transparent), transparent 65%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line/80 bg-surface/60 p-8 transition-colors duration-300 hover:border-brand-400/50",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      <div className="relative" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
