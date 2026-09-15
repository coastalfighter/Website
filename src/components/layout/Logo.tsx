import { cn } from "@/lib/cn";

/**
 * A typographic wordmark. The source site's exported logo asset is a
 * near-invisible 10%-opacity raster pattern (a broken Figma/Webflow export),
 * so a crisp, scalable text lockup is used instead of shipping a broken image.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 font-display", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-400 to-accent-400 text-sm font-bold text-ink">
        C
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="text-lg font-bold tracking-tight text-paper">CMC</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-paper/50">
          Group
        </span>
      </span>
    </span>
  );
}
