"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: readonly ProcessStep[];
  className?: string;
}

/**
 * A sticky annotated panel beside a scrolling step list — the active step
 * (tracked by which one is centered in the viewport) highlights in the
 * pinned panel, echoing the "annotated product panel" pattern without
 * needing per-step visuals of our own to swap in.
 */
export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16", className)}>
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-2xl border border-line/80 bg-surface/60 shadow-card">
          <div className="flex items-center justify-between border-b border-line/70 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-paper/50">
              Field Operations
            </p>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-accent-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-slow" />
              Live
            </span>
          </div>
          <ul className="divide-y divide-line/60">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <li
                  key={step.title}
                  className={cn(
                    "flex items-center justify-between gap-4 px-4 py-3.5 transition-colors duration-300",
                    isActive && "bg-brand-500/8"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-300",
                        isActive
                          ? "border-brand-400 bg-brand-500/15 text-brand-ink"
                          : "border-line text-paper/40"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors duration-300",
                        isActive ? "text-paper" : "text-paper/50"
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300",
                      isActive ? "bg-accent-400" : "bg-line"
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-16 py-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            onViewportEnter={() => setActive(i)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
          >
            <Reveal>
              <span className="font-display text-sm font-semibold text-accent-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-paper">{step.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-paper/60">
                {step.description}
              </p>
            </Reveal>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
