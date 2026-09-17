import { cn } from "@/lib/cn";
import { BrandMark } from "./BrandMark";

/** The mark plus the "CMC Group" wordmark. The whole site is dark now, so
 * this no longer needs a light/dark variant. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark className="h-8 w-8" />
      <span className="flex items-baseline gap-1.5">
        <span className="text-lg font-bold tracking-tight text-text">CMC</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim">Group</span>
      </span>
    </span>
  );
}
