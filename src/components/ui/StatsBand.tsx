import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

interface Stat {
  icon: ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

interface StatsBandProps {
  stats: readonly Stat[];
  className?: string;
}

/**
 * A single continuous band (divided columns, not separate cards) so stats
 * read with more visual weight than a plain TiltCard grid. Column count is
 * driven by a CSS custom property so any number of stats lays out evenly.
 */
export function StatsBand({ stats, className }: StatsBandProps) {
  return (
    <Reveal
      className={cn(
        "overflow-hidden rounded-2xl border border-line/80 bg-surface/60 shadow-card",
        className
      )}
    >
      <div
        style={{ "--cols": stats.length } as React.CSSProperties}
        className="grid grid-cols-1 divide-y divide-line/70 sm:grid-cols-[repeat(var(--cols),minmax(0,1fr))] sm:divide-x sm:divide-y-0"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-3 px-6 py-10 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/10 text-brand-ink">
              {stat.icon}
            </div>
            <p className="font-mono text-4xl font-semibold tabular-nums text-paper sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-paper/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
