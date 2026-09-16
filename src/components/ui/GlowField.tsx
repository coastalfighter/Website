import { cn } from "@/lib/cn";

/**
 * Soft, blurred brand-color blobs — the same blue/teal/violet palette the
 * hero's shader is built from, echoed at low opacity through the light
 * body sections so the whole site reads as one palette instead of a dark
 * hero bolted onto an unrelated light theme. Drop into any `relative
 * overflow-hidden` section.
 */
export function GlowField({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-500/10 blur-[110px]" />
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-accent-500/10 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-signal-500/10 blur-[110px]" />
    </div>
  );
}
