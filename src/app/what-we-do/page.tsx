import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { StatsBand } from "@/components/ui/StatsBand";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { MagneticCta } from "@/components/hero/MagneticCta";
import { NetworkNodeIcon } from "@/components/ui/TelecomIcons";
import { whoWeAre, processPillars, missionOfferings, expertServices } from "@/data/whatWeDo";

export const metadata: Metadata = {
  title: "What We Do",
  description: whoWeAre.body,
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        heading="The blueprint for performance, built market by market"
        body="Strategy, training, execution, and performance — the four pillars behind every brand CMC represents."
        image={{ src: "/images/photos/section-3.jpg", alt: "The CMC Group team at a company celebration" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "What We Do" }]}
      />

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow={whoWeAre.eyebrow} heading={whoWeAre.heading} body={whoWeAre.body} />
          <StatsBand
            className="mt-12"
            stats={[
              {
                icon: <NetworkNodeIcon className="h-6 w-6" />,
                value: whoWeAre.stat.value,
                suffix: whoWeAre.stat.suffix,
                label: whoWeAre.stat.label,
              },
            ]}
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-36">
        <GlowField />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Process"
            heading="The blueprint for performance"
            align="center"
            className="mx-auto"
          />
          <ProcessTimeline steps={processPillars} className="mt-16" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            heading="Our mission, in three offerings"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {missionOfferings.map((offering, i) => (
              <TiltCard key={offering.title} delay={i * 0.08} className="text-center">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {offering.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
        <GlowField />
        <FloatingIcons seed={7} count={4} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Expert Services"
            heading="Six ways we move the needle for partner brands"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertServices.map((service, i) => (
              <TiltCard key={service.title} delay={i * 0.06}>
                <h3 className="font-display text-lg font-semibold text-paper">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{service.description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24">
        <GlowField />
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="text-balance font-display text-3xl font-medium text-paper sm:text-4xl">
            Let&apos;s build your market plan.
          </h2>
          <MagneticCta href="/contact">Start a Conversation</MagneticCta>
        </div>
      </section>
    </>
  );
}
