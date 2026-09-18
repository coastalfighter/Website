import Image from "next/image";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  body?: string;
  breadcrumbs?: readonly { label: string; href?: string }[];
  image?: { src: string; alt: string };
}

/** The header band at the top of every inner page — text on the left, a
 * placeholder photo on the right when one is given, consistent with the
 * Hero's layout language rather than a plain text-only band. Falls back to
 * a plain text-only band (e.g. individual blog posts) when no image is
 * passed. */
export function PageHeader({ eyebrow, heading, body, breadcrumbs, image }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-ink-2">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-14 lg:px-8",
          image && "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16"
        )}
      >
        <Reveal direction="left">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} className="mb-4" /> : null}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
          <h1 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {heading}
          </h1>
          {body ? <p className="mt-4 max-w-xl text-base leading-relaxed text-text-dim">{body}</p> : null}
        </Reveal>
        {image ? (
          <Reveal direction="right" className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-line shadow-glow">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
