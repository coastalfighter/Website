import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { heroContent } from "@/data/home";
import { heroStats } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-line bg-ink-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl">
            {heroContent.headline}
          </h1>
          <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-text-dim">
            {heroContent.subcopy}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={heroContent.cta.href}>{heroContent.cta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-text">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-sm text-text-dim">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-4/5 animate-fade-up overflow-hidden rounded-2xl border border-line lg:aspect-square">
          <Image
            src="/images/photos/img-2281.jpeg"
            alt="The CMC Group team celebrating together"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
