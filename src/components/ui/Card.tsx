"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface CardProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

/** A card with a cursor-tracked spotlight and a glowing border on hover —
 * the one hover effect used for every card sitewide. */
export function Card({ children, delay = 0, direction = "up", className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, color-mix(in oklab, var(--color-brand-400) 15%, transparent), transparent 70%)`;

  return (
    <Reveal delay={delay} direction={direction} className="h-full">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative h-full overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-card transition-colors duration-300 hover:border-brand-400/50",
          className
        )}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="relative">{children}</div>
      </div>
    </Reveal>
  );
}
