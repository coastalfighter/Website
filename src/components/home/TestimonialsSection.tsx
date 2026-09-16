import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <GlowField />
      <FloatingIcons seed={4} count={4} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Satisfaction"
          heading="Trusted by the customers our partners serve"
          align="center"
          className="mx-auto"
        />
        <TestimonialCarousel testimonials={testimonials} className="mt-16" />
      </div>
    </section>
  );
}
