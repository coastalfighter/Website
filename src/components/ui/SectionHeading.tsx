import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, heading, body, align = "left", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">{heading}</h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-text-dim">{body}</p> : null}
    </Reveal>
  );
}
