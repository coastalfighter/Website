import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvatarInitials } from "@/components/ui/AvatarInitials";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlowField } from "@/components/ui/GlowField";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <GlowField />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Satisfaction"
          heading="Trusted by the customers our partners serve"
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TiltCard key={testimonial.name} delay={i * 0.06} className="p-6">
              <div className="flex items-center gap-3">
                <AvatarInitials name={testimonial.name} seed={i} className="w-11 text-sm" />
                <div>
                  <p className="font-semibold text-paper">{testimonial.name}</p>
                  <p className="text-xs text-paper/50">CMC customer</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">{testimonial.detail}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
