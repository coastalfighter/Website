"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

interface MagneticCtaProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
}

const PULL_STRENGTH = 0.35;
const MAX_OFFSET = 18;

export function MagneticCta({
  href,
  children,
  variant = "primary",
  className,
}: MagneticCtaProps) {
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
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300",
          variant === "primary" && "bg-paper text-ink hover:bg-brand-300",
          variant === "secondary" &&
            "border border-line/80 text-paper hover:border-brand-400 hover:text-brand-ink",
          variant === "onDark" &&
            "border border-white/20 text-white hover:border-brand-300 hover:text-brand-300",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          aria-hidden
          className={cn(
            "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs",
            variant === "primary" && "border-ink/20",
            variant === "secondary" && "border-line/80",
            variant === "onDark" && "border-white/25"
          )}
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          &rarr;
        </motion.span>
      </Link>
    </motion.div>
  );
}
