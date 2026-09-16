import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandShowcase } from "@/components/ui/BrandShowcase";
import { GlowField } from "@/components/ui/GlowField";
import { brandDetails } from "@/data/site";

export function BrandsSection() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
      <GlowField />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Brands We Represent"
          heading="Six national brands, one field team you can actually reach"
          align="center"
          className="mx-auto"
        />
        <BrandShowcase brands={brandDetails} className="mt-14" />
      </div>
    </section>
  );
}
