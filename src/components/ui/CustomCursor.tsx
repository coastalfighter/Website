"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

const HOVER_SELECTOR = "a, button, input, textarea, [role='button'], .link-underline";

function subscribeToPointerFine(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function usePointerIsFine(): boolean {
  return useSyncExternalStore(
    subscribeToPointerFine,
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
}

/** A two-layer custom cursor — a small dot that tracks the mouse exactly,
 * and a lagging ring that grows over anything clickable. Desktop with a
 * real mouse only: skipped on touch devices and for reduced-motion. */
export function CustomCursor() {
  const pointerFine = usePointerIsFine();
  const reducedMotion = useReducedMotion();
  const enabled = pointerFine && !reducedMotion;
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor");

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(!!target?.closest(HOVER_SELECTOR));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 rounded-full bg-brand-400"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[100] rounded-full border border-brand-400/70 transition-colors duration-200",
          hovering ? "bg-brand-400/15" : "bg-transparent"
        )}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 52 : 30, height: hovering ? 52 : 30, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
