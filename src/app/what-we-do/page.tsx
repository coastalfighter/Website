import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticCta } from "@/components/hero/MagneticCta";
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
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <SectionHeading eyebrow={whoWeAre.eyebrow} heading={whoWeAre.heading} body={whoWeAre.body} />
            <div className="rounded-2xl border border-line/80 bg-surface/50 p-10 text-center">
              <p className="font-display text-5xl font-semibold text-paper">
                <CountUp value={whoWeAre.stat.value} suffix={whoWeAre.stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-paper/60">{whoWeAre.stat.label}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Process"
            heading="The blueprint for performance"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line/80 bg-line/80 sm:grid-cols-2 lg:grid-cols-4">
            {processPillars.map((pillar, i) => (
              <div key={pillar.title} className="bg-ink-2 p-8">
                <span className="font-display text-sm font-semibold text-accent-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            heading="Our mission, in three offerings"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {missionOfferings.map((offering) => (
              <div
                key={offering.title}
                className="rounded-2xl border border-line/80 bg-surface/40 p-8 text-center"
              >
                <h3 className="font-display text-lg font-semibold text-paper">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Expert Services"
            heading="Six ways we move the needle for partner brands"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertServices.map((service) => (
              <TiltCard key={service.title}>
                <h3 className="font-display text-lg font-semibold text-paper">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{service.description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24">
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
