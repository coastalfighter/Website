"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
}

const PULL_STRENGTH = 0.3;
const MAX_OFFSET = 14;

/** A button that pulls slightly toward the cursor on hover — the one
 * "magnetic" hover effect, reused everywhere a CTA appears. */
export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(Math.min(relX * PULL_STRENGTH, MAX_OFFSET), -MAX_OFFSET));
    y.set(Math.max(Math.min(relY * PULL_STRENGTH, MAX_OFFSET), -MAX_OFFSET));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors",
          variant === "primary" && "bg-brand-500 text-ink hover:bg-brand-400",
          variant === "secondary" && "border border-line text-text hover:border-brand-400 hover:text-brand-300",
          variant === "onDark" && "border border-white/20 text-white hover:border-brand-300 hover:text-brand-300",
          className
        )}
      >
        {children}
        <span aria-hidden>&rarr;</span>
      </Link>
    </motion.div>
  );
}
