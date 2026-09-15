import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvatarInitials } from "@/components/ui/AvatarInitials";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticCta } from "@/components/hero/MagneticCta";
import { Reveal } from "@/components/ui/Reveal";
import { whatDrivesUs, leadershipTeam, provenResults } from "@/data/about";
import { pressLogos } from "@/data/site";

export const metadata: Metadata = {
  title: "About CMC",
  description: whatDrivesUs.mission,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About CMC"
        heading="Professionalism meets performance"
        body={whatDrivesUs.goalsBody}
        image={{ src: "/images/photos/img-2281.jpeg", alt: "The CMC Group team celebrating together" }}
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="What Defines Us" heading={whatDrivesUs.goalsHeading} />
            <ul className="mt-8 space-y-4">
              {whatDrivesUs.definesUs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-line/80 bg-surface/50 p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-ink">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-paper/75">
                {whatDrivesUs.mission}
              </p>
            </div>
            <div className="rounded-2xl border border-line/80 bg-surface/50 p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-ink">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-paper/75">
                {whatDrivesUs.vision}
              </p>
            </div>
            <div className="rounded-2xl border border-line/80 bg-surface/50 p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-ink">
                Our Values
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {whatDrivesUs.values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-line/80 px-3 py-1 text-xs font-medium text-paper/70"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Leadership Team" heading="The people driving CMC forward" />
            <MagneticCta href="/contact" variant="secondary">
              Join Our Team
            </MagneticCta>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {leadershipTeam.map((member, i) => (
              <Reveal key={member.name} delay={(i % 5) * 0.05} className="group text-center">
                <AvatarInitials
                  name={member.name}
                  seed={i}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-3 font-semibold text-paper">{member.name}</p>
                <p className="text-xs text-paper/55">{member.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Results"
            heading="Numbers that back up the promise"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {provenResults.map((result, i) => (
              <Reveal
                key={result.label}
                delay={i * 0.08}
                className="rounded-2xl border border-line/80 bg-surface/40 p-10 text-center"
              >
                <p className="font-display text-5xl font-semibold text-paper">
                  <CountUp value={result.value} suffix={result.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{result.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-ink-2 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-paper/60">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {pressLogos.map((press) => (
              <Image
                key={press.name}
                src={press.src}
                alt={press.name}
                width={110}
                height={32}
                className="h-6 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
