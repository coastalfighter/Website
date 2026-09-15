import { cn } from "@/lib/cn";

export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "noise-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay",
        className
      )}
    />
  );
}
