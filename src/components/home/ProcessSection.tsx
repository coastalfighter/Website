import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" heading="A partnership built market by market" align="center" className="mx-auto" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <span className="text-sm font-semibold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
