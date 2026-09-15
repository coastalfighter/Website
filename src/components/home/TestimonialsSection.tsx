import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvatarInitials } from "@/components/ui/AvatarInitials";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Satisfaction"
          heading="Trusted by the customers our partners serve"
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 0.06}
              className="group rounded-2xl border border-line/80 bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <AvatarInitials name={testimonial.name} seed={i} className="w-11 text-sm" />
                <div>
                  <p className="font-semibold text-paper">{testimonial.name}</p>
                  <p className="text-xs text-paper/50">CMC customer</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">{testimonial.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
