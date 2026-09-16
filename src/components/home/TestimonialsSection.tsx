import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/site";

function initialsFor(name: string): string {
  return name.split(" ").filter(Boolean).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Satisfaction"
          heading="Trusted by the customers our partners serve"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={testimonial.name} delay={i * 0.06}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-400">
                  {initialsFor(testimonial.name)}
                </span>
                <div>
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="text-xs text-text-dim">CMC customer</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-dim">{testimonial.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
