import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { careerGrowth, programTiers, d2dProgram } from "@/data/careers";
import { jobOpenings } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build a career in the field through CMC's D2D U training and leadership program.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        heading={careerGrowth.heading}
        body={careerGrowth.body}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        image={{
          src: "/images/placeholders/careers-header.jpg",
          alt: "Placeholder — replace with your own photo at public/images/placeholders/careers-header.jpg",
        }}
      />

      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="glow-field" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow={careerGrowth.eyebrow} heading="Three stages, one growth engine" align="center" className="mx-auto" />
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
          <SectionHeading eyebrow={d2dProgram.eyebrow} heading={d2dProgram.heading} body={d2dProgram.body} align="center" className="mx-auto" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {d2dProgram.components.map((point, i) => (
              <Card key={point.title} delay={i * 0.08}>
                <h3 className="text-lg font-semibold text-text">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{point.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="group relative aspect-12/5 overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/placeholders/careers-banner.jpg"
              alt="Placeholder — replace with your own photo at public/images/placeholders/careers-banner.jpg"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Positions"
            heading="Current openings"
            body="Sample listings — replace with real openings in src/data/jobs.ts. The Apply button isn't wired up yet."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 space-y-4">
            {jobOpenings.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-text">{job.title}</h3>
                      <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-text-dim">{job.department}</span>
                    </div>
                    <p className="mt-1 text-sm text-text-dim">
                      {job.location} &middot; {job.type}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-dim">{job.summary}</p>
                  </div>
                  <Button href="#" variant="secondary" className="shrink-0">
                    Apply Now
                  </Button>
                </div>
              </Reveal>
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
