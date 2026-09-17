import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StickyProcess } from "@/components/ui/StickyProcess";
import { CountUp } from "@/components/ui/CountUp";
import { Button } from "@/components/ui/Button";
import { whoWeAre, processIntro, processPillars, missionIntro, missionOfferings, expertServices } from "@/data/whatWeDo";

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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "What We Do" }]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <SectionHeading eyebrow={whoWeAre.eyebrow} heading={whoWeAre.heading} body={whoWeAre.body} />
            <Card className="text-center">
              <p className="text-5xl font-bold text-text">
                <CountUp value={whoWeAre.stat.value} suffix={whoWeAre.stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-text-dim">{whoWeAre.stat.label}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative border-y border-line bg-ink-2 py-20 sm:py-28">
        <div className="glow-field" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Process"
            heading="The blueprint for performance"
            body={processIntro}
            align="center"
            className="mx-auto"
          />
          <StickyProcess steps={processPillars} className="mt-16" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission"
            heading="Our mission, in three offerings"
            body={missionIntro}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {missionOfferings.map((offering, i) => (
              <Card key={offering.title} delay={i * 0.08} className="text-center">
                <h3 className="text-lg font-semibold text-text">{offering.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{offering.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Expert Services" heading="Six ways we move the needle for partner brands" align="center" className="mx-auto" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertServices.map((service, i) => (
              <Card key={service.title} delay={i * 0.06}>
                <h3 className="text-lg font-semibold text-text">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-text sm:text-4xl">Let&apos;s build your market plan.</h2>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </section>
    </>
  );
}
