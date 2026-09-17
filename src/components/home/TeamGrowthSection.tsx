import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { teamGrowthHome } from "@/data/home";

export function TeamGrowthSection() {
  return (
    <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal direction="left" className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-line">
          <Image
            src={teamGrowthHome.image.src}
            alt={teamGrowthHome.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Reveal>
        <Reveal direction="right">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{teamGrowthHome.eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">{teamGrowthHome.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-dim">{teamGrowthHome.body}</p>
          <ul className="mt-6 space-y-4">
            {teamGrowthHome.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-dim">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={teamGrowthHome.cta.href} variant="secondary">
              {teamGrowthHome.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
