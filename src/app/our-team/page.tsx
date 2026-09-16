import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvatarInitials } from "@/components/ui/AvatarInitials";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlowField } from "@/components/ui/GlowField";
import { leadershipTeam } from "@/data/about";
import { teamMission, serviceAreas, teamPartners, programTiers, teamQuote } from "@/data/ourTeam";

export const metadata: Metadata = {
  title: "Our Team",
  description: teamMission.body,
};

export default function OurTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        heading={teamMission.heading}
        body={teamMission.body}
        image={{
          src: "/images/photos/mes02960.webp",
          alt: "CMC Group leadership reviewing team performance",
        }}
      />

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our People" heading="Three service areas, one growth engine" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <TiltCard key={area.title} delay={i * 0.08}>
                <h3 className="font-display text-lg font-semibold text-paper">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{area.description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" heading="Built for growth" align="center" className="mx-auto" />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {leadershipTeam.map((member, i) => (
              <TiltCard key={member.name} delay={(i % 5) * 0.05} className="text-center">
                <AvatarInitials name={member.name} seed={i} />
                <p className="mt-3 font-semibold text-paper">{member.name}</p>
                <p className="text-xs text-paper/55">{member.title}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="D2D U: Training Tomorrow's Leaders"
            heading="Your path to leadership starts here"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {programTiers.map((tier, i) => (
              <TiltCard key={tier.title} delay={i * 0.08}>
                <span className="font-display text-sm font-semibold text-accent-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-paper">{tier.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{tier.description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our Partners" heading="Independent partners across our markets" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {teamPartners.map((partner, i) => (
              <TiltCard key={partner.name} delay={(i % 4) * 0.05} className="p-5">
                <p className="text-sm font-medium text-paper/85">{partner.name}</p>
                <p className="text-xs text-paper/60">{partner.org}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-balance font-display text-2xl italic leading-snug text-paper/85 sm:text-3xl">
            &ldquo;{teamQuote.text}&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent-ink">
            &mdash; {teamQuote.author}
          </p>
        </div>
      </section>
    </>
  );
}
