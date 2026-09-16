import { Hero } from "@/components/home/Hero";
import { BrandsStrip } from "@/components/home/BrandsStrip";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FoundationSection } from "@/components/home/FoundationSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <SolutionsSection />
      <ProcessSection />
      <FoundationSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <FinalCtaSection />
    </>
  );
}
