"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Tracks scroll progress (0-1) through a tall "scroll-scrubbed" section so a
 * pinned canvas inside it can animate (camera dolly, etc.) as the user scrolls.
 * Returns a ref rather than state so the 60fps r3f render loop can read the
 * latest value without triggering React re-renders.
 */
export function useHeroScrollProgress(
  sectionRef: RefObject<HTMLElement | null>
): RefObject<number> {
  const progress = useRef(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        progress.current = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      }
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [sectionRef]);

  return progress;
}
