import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { programTiers, teamGrowth } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build a career in the field through CMC's D2D U training and leadership program.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        heading={teamGrowth.heading}
        body="Your path to leadership starts on the doors — hands-on coaching from day one, promoted from within."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="glow-field" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Your Path to Leadership" heading="Three tiers, one growth engine" align="center" className="mx-auto" />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {programTiers.map((tier, i) => (
              <Reveal key={tier.title} delay={i * 0.08} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <span className="text-sm font-semibold text-brand-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{tier.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{tier.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Team Growth" heading="What makes it different" align="center" className="mx-auto" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {teamGrowth.points.map((point, i) => (
              <Card key={point.title} delay={i * 0.08}>
                <h3 className="text-lg font-semibold text-text">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{point.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-text sm:text-4xl">Ready to start your career on the field?</h2>
          <p className="text-base leading-relaxed text-text-dim">
            Tell us a bit about yourself and a regional leader will follow up within one business day.
          </p>
          <Button href="/contact">Apply Now</Button>
        </div>
      </section>
    </>
  );
}
