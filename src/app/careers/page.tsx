import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { MagneticCta } from "@/components/hero/MagneticCta";
import { programTiers } from "@/data/ourTeam";
import { teamGrowth } from "@/data/home";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build a career in the field through CMC's D2D U training and leadership program.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        heading="D2D U: training tomorrow's leaders"
        body="Your path to leadership starts on the doors — hands-on coaching from day one, promoted from within."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="relative overflow-hidden bg-ink py-24 sm:py-36">
        <GlowField />
        <FloatingIcons seed={12} count={4} />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Path to Leadership"
            heading="Three tiers, one growth engine"
            align="center"
            className="mx-auto"
          />
          <ProcessTimeline steps={programTiers} className="mt-16" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Team Growth"
            heading={teamGrowth.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {teamGrowth.points.map((point, i) => (
              <TiltCard key={point.title} delay={i * 0.08}>
                <h3 className="font-display text-lg font-semibold text-paper">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{point.body}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24">
        <GlowField />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="text-balance font-display text-3xl font-medium text-paper sm:text-4xl">
            Ready to start your career on the field?
          </h2>
          <p className="text-base leading-relaxed text-paper/65">
            Tell us a bit about yourself and a regional leader will follow up within one business day.
          </p>
          <MagneticCta href="/contact">Apply Now</MagneticCta>
        </div>
      </section>
    </>
  );
}
