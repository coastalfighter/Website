import { cn } from "@/lib/cn";

/** Honest placeholder mark — not an attempt at the real CMC logo. Drop the
 * actual file at public/brand/logo.svg (or .png) and BrandMark renders it
 * instead automatically. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)} role="img" aria-label="CMC Group (placeholder logo)">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 3" />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.5"
        fill="currentColor"
        fontFamily="var(--font-mono), ui-monospace, monospace"
      >
        CMC
      </text>
    </svg>
  );
}
