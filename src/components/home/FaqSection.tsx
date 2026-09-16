import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { GlowField } from "@/components/ui/GlowField";
import { faqs } from "@/data/site";

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <GlowField />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          heading="What partners and customers ask us"
          align="center"
          className="mx-auto"
        />
        <FaqAccordion items={faqs} className="mt-12" />
        <p className="mt-8 text-center text-sm text-paper/60">
          Still have a question?{" "}
          <Link href="/contact" className="font-semibold text-brand-ink hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
