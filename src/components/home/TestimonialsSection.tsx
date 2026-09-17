import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";
import { testimonials, clientStat } from "@/data/site";

function initialsFor(name: string): string {
  return name.split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <SectionHeading eyebrow="What People Think of Us" heading="Trusted by the customers our partners serve" />
          <div className="shrink-0">
            <p className="font-mono text-4xl font-bold text-text [text-shadow:0_0_24px_color-mix(in_oklab,var(--color-brand-400)_50%,transparent)]">
              <CountUp value={clientStat.value} suffix={clientStat.suffix} />
            </p>
            <p className="mt-1 text-sm text-text-dim">{clientStat.label}</p>
          </div>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={testimonial.name} delay={(i % 3) * 0.06} direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-400">
                  {initialsFor(testimonial.name)}
                </span>
                <div>
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="text-xs text-text-dim">CMC customer</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-dim">&ldquo;{testimonial.quote}&rdquo;</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
