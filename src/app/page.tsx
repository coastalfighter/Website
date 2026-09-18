import { Hero } from "@/components/home/Hero";
import { BrandsStrip } from "@/components/home/BrandsStrip";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FoundationSection } from "@/components/home/FoundationSection";
import { TeamGrowthSection } from "@/components/home/TeamGrowthSection";
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
      <FoundationSection />
      <TeamGrowthSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <FinalCtaSection />
    </>
  );
}
