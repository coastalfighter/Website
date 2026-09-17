import Image from "next/image";
import { company } from "@/data/home";
import { awardsHome, pressLogos } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function FoundationSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal direction="left" className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-line lg:order-2">
          <Image
            src={company.image.src}
            alt={company.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Reveal>
        <Reveal direction="right" className="lg:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{company.eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">{company.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-dim">{company.body}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <Reveal className="border-t border-line pt-14 text-center">
          <p className="mx-auto max-w-2xl text-lg font-semibold text-text">{awardsHome.heading}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-dim">{awardsHome.body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {pressLogos.map((press) => (
              <Image
                key={press.name}
                src={press.src}
                alt={press.name}
                width={110}
                height={32}
                className="h-6 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-90 hover:grayscale-0"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
