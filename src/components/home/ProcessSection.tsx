import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { GlowField } from "@/components/ui/GlowField";
import { processPillars } from "@/data/whatWeDo";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-36">
      <GlowField />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          heading="A partnership built market by market"
          body="Four pillars, run the same way for every brand we represent."
        />
        <ProcessTimeline steps={processPillars} className="mt-16" />
      </div>
    </section>
  );
}
