import Image from "next/image";
import { foundation, teamGrowth } from "@/data/home";

export function FoundationSection() {
  return (
    <section className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-line/70">
          <Image
            src="/images/photos/img-2266.jpeg"
            alt="A CMC Group field sales representative at work"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            {foundation.eyebrow}
          </p>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl">
            {foundation.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/65">{foundation.body}</p>

          <div className="mt-10 border-t border-line/70 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
              {teamGrowth.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-paper">
              {teamGrowth.heading}
            </h3>
            <dl className="mt-6 space-y-5">
              {teamGrowth.points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  <div>
                    <dt className="font-semibold text-paper">{point.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-paper/60">{point.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
