import Image from "next/image";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  body?: string;
  /** Omit for a plain dark band (e.g. blog post titles with no header photo). */
  image?: { src: string; alt: string };
  /** A shorter band, for pages with less to say up top (e.g. a blog post). */
  compact?: boolean;
  /** Wayfinding trail above the eyebrow, e.g. [{ label: "Home", href: "/" }, { label: "Blog" }]. */
  breadcrumbs?: readonly { label: string; href?: string }[];
}

/**
 * A consistent header band used at the top of every inner page. Deliberately
 * kept as a dark band (like the homepage hero) against the otherwise light
 * theme — literal colors here, not the ink/paper tokens, so it doesn't flip
 * with the rest of the site. This also matters for the Navbar: it assumes
 * "not scrolled yet" means "sitting on a dark background", which only holds
 * if every page actually opens on one of these (or the WebGL hero).
 */
export function PageHeader({
  eyebrow,
  heading,
  body,
  image,
  compact = false,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div
      data-dark-band
      className={`relative flex ${compact ? "h-[36vh] min-h-[320px]" : "h-[52vh] min-h-[420px]"} items-end overflow-hidden bg-black pt-24`}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="animate-[kenburns_18s_ease-in-out_infinite_alternate] object-cover opacity-45"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      <NoiseOverlay />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-8">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} className="mb-4" /> : null}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
          {heading}
        </h1>
        {body ? (
          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-white/70">
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
