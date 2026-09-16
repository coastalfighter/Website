import Image from "next/image";
import { foundation } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";

export function FoundationSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-2xl border border-line lg:order-2">
          <Image
            src={foundation.image.src}
            alt={foundation.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="lg:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{foundation.eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">{foundation.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-dim">{foundation.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
