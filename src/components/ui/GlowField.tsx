import { cn } from "@/lib/cn";

/**
 * The site's "gradient, major-blue" backdrop for a section: a soft
 * blue-dominant gradient wash plus a few blurred accent blobs, all sampled
 * from the same palette the hero's shader is built from. Drop into any
 * `relative overflow-hidden` section — this is what keeps every page
 * reading as one blue field instead of flat white panels.
 */
export function GlowField({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="gradient-wash" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-500/15 blur-[110px]" />
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-signal-500/8 blur-[110px]" />
    </div>
  );
}
