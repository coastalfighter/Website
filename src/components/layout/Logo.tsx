import { cn } from "@/lib/cn";
import { LogoMark } from "./LogoMark";

/** The shield mark plus the "CMC Group" wordmark. `dark` renders the
 * wordmark in white for use on the dark footer band. */
export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-8" />
      <span className="flex items-baseline gap-1.5">
        <span className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-text")}>
          CMC
        </span>
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.2em]",
            dark ? "text-white/55" : "text-text-dim"
          )}
        >
          Group
        </span>
      </span>
    </span>
  );
}
