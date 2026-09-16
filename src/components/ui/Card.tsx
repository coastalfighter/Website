import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface CardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** A plain, static card — a border, a little lift on hover. No 3D tilt. */
export function Card({ children, delay = 0, className }: CardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          "h-full rounded-xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-md",
          className
        )}
      >
        {children}
      </div>
    </Reveal>
  );
}
