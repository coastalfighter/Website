import { cn } from "@/lib/cn";
import { LogoMark } from "./LogoMark";

interface LogoProps {
  /** Use over the dark hero/page-header bands, where paper/ink text would vanish. */
  light?: boolean;
  className?: string;
}

/** The shield mark plus the "CMC Group" wordmark — the shield's blue/red/white
 * stays fixed regardless of theme; only the wordmark follows light/dark. */
export function Logo({ light = false, className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5 font-display", className)}>
      <LogoMark className="h-8 w-8" />
      <span className="flex items-baseline gap-1.5">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            light ? "text-white" : "text-paper"
          )}
        >
          CMC
        </span>
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.25em]",
            light ? "text-white/60" : "text-paper/50"
          )}
        >
          Group
        </span>
      </span>
    </span>
  );
}
