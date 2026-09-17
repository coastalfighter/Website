import { cn } from "@/lib/cn";

/** An infinite horizontal auto-scroller for logo strips — pauses on
 * hover; prefers-reduced-motion freezes it via the site-wide
 * animation-duration override in globals.css. Duplicates its children
 * once internally for a seamless loop, so pass the logo list only once. */
export function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div className="animate-marquee flex w-max items-center gap-16 hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
