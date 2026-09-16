import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickyProcess } from "@/components/ui/StickyProcess";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2 py-20 sm:py-28">
      <div className="glow-field" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" heading="A partnership built market by market" align="center" className="mx-auto" />
        <StickyProcess steps={processSteps} className="mt-16" />
      </div>
    </section>
  );
}
