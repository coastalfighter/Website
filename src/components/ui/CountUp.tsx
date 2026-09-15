"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, suffix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
