"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface HeightMatchedRowProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}

/** A two-column row where the left column sets the height and the right
 * column becomes an internally-scrollable panel capped to that height,
 * instead of the whole row growing to fit the taller column. Desktop
 * only (lg+) — below that, both columns stack and flow naturally. */
export function HeightMatchedRow({ left, right, className }: HeightMatchedRowProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className={cn("grid gap-16 lg:grid-cols-2 lg:items-start", className)}>
      <div ref={leftRef}>{left}</div>
      <div
        className="lg:overflow-y-auto lg:pr-2 lg:[max-height:var(--matched-height)]"
        style={height ? ({ "--matched-height": `${height}px` } as React.CSSProperties) : undefined}
      >
        {right}
      </div>
    </div>
  );
}
