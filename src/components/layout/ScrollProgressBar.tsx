"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin fixed progress bar reflecting how far down the current page the
 * reader is — the one scroll effect visible on literally every page,
 * for the cost of a single motion value (framer-motion's useScroll already
 * listens to scroll for us, no extra listener of our own).
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r from-brand-500 via-accent-500 to-signal-500"
    />
  );
}
