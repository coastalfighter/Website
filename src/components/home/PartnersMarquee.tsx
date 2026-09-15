import Image from "next/image";
import { partners } from "@/data/site";

export function PartnersMarquee() {
  const track = [...partners, ...partners];

  return (
    <section className="border-y border-line/70 bg-ink-2 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-paper/60">
          Authorized dealer &amp; sales partner for
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-2 to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {track.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-10 w-32 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={128}
                height={40}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
