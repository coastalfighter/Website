"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { LOADER_DURATION_MS, LOADER_DURATION_S } from "@/lib/loaderTiming";

/** Full-screen splash shown once on the initial hard load (this lives in the
 * root layout, which doesn't remount on client-side navigation, so it never
 * replays between pages). Skips straight to hidden under reduced motion. */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), reducedMotion ? 0 : LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
              <Logo className="scale-125" />
            </motion.div>
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: LOADER_DURATION_S, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full bg-linear-to-r from-brand-400 to-accent-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
