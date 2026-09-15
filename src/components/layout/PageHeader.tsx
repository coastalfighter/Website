import Image from "next/image";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  body?: string;
  image: { src: string; alt: string };
}

/** A consistent, photo-backed header band used at the top of every inner page. */
export function PageHeader({ eyebrow, heading, body, image }: PageHeaderProps) {
  return (
    <div className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden bg-ink pt-24">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="animate-[kenburns_18s_ease-in-out_infinite_alternate] object-cover opacity-45"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      <NoiseOverlay />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance font-display text-4xl font-medium leading-tight tracking-tight text-paper sm:text-5xl">
          {heading}
        </h1>
        {body ? (
          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-paper/70">
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
