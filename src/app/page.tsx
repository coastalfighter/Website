import { Hero } from "@/components/hero/Hero";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { PressLogos } from "@/components/ui/PressLogos";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FoundationSection } from "@/components/home/FoundationSection";
import { WhoWeReachSection } from "@/components/home/WhoWeReachSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <section className="relative overflow-hidden bg-ink-2 py-14">
        <PressLogos />
      </section>
      <SolutionsSection />
      <BrandsSection />
      <ProcessSection />
      <FoundationSection />
      <WhoWeReachSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <FinalCtaSection />
    </>
  );
}
