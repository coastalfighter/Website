"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface ProcessStep {
  title: string;
  description: string;
}

interface StickyProcessProps {
  steps: readonly ProcessStep[];
  className?: string;
}

/** A sticky progress rail beside a scrolling step list — the one pinned
 * scroll moment on the site, used deliberately rather than everywhere. */
export function StickyProcess({ steps, className }: StickyProcessProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16", className)}>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-dim">Field Operations</p>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-accent-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              Live
            </span>
          </div>
          <ul className="divide-y divide-line">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <li
                  key={step.title}
                  className={cn(
                    "flex items-center justify-between gap-4 px-4 py-3.5 transition-colors duration-300",
                    isActive && "bg-brand-500/10"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-colors duration-300",
                        isActive ? "border-brand-400 bg-brand-500/20 text-brand-300" : "border-line text-text-dim"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("text-sm font-medium transition-colors duration-300", isActive ? "text-text" : "text-text-dim")}>
                      {step.title}
                    </span>
                  </div>
                  <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300", isActive ? "bg-brand-400" : "bg-line")} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-16 py-2">
        {steps.map((step, i) => (
          <motion.div key={step.title} onViewportEnter={() => setActive(i)} viewport={{ margin: "-45% 0px -45% 0px" }}>
            <Reveal>
              <span className="font-mono text-sm font-semibold text-brand-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl font-bold text-text">{step.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-text-dim">{step.description}</p>
            </Reveal>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
