import { cn } from "@/lib/cn";

interface LogoProps {
  /** Use over the dark hero/page-header bands, where paper/ink text would vanish. */
  light?: boolean;
  className?: string;
}

/**
 * A typographic wordmark. The source site's exported logo asset is a
 * near-invisible 10%-opacity raster pattern (a broken Figma/Webflow export),
 * so a crisp, scalable text lockup is used instead of shipping a broken image.
 */
export function Logo({ light = false, className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2 font-display", className)}>
      {/* The badge's gradient is always a light blue/teal regardless of site
          theme, so its text stays a fixed dark shade rather than following
          the ink/paper tokens (which would turn white on white on light body sections). */}
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-400 to-accent-400 text-sm font-bold text-slate-900">
        C
      </span>
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
