import { Hero } from "@/components/hero/Hero";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FoundationSection } from "@/components/home/FoundationSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <SolutionsSection />
      <FoundationSection />
      <TestimonialsSection />
      <BlogPreview />
      <FinalCtaSection />
    </>
  );
}
