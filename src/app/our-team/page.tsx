import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvatarInitials } from "@/components/ui/AvatarInitials";
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

      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our People" heading="Three service areas, one growth engine" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-line/80 bg-surface/40 p-8">
                <h3 className="font-display text-lg font-semibold text-paper">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" heading="Built for growth" align="center" className="mx-auto" />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {leadershipTeam.map((member, i) => (
              <div key={member.name} className="group text-center">
                <AvatarInitials
                  name={member.name}
                  seed={i}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-3 font-semibold text-paper">{member.name}</p>
                <p className="text-xs text-paper/55">{member.title}</p>
              </div>
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
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line/80 bg-line/80 sm:grid-cols-3">
            {programTiers.map((tier, i) => (
              <div key={tier.title} className="bg-ink p-8">
                <span className="font-display text-sm font-semibold text-accent-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-paper">{tier.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our Partners" heading="Independent partners across our markets" />
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
            {teamPartners.map((partner) => (
              <div key={partner.name} className="border-b border-line/60 pb-3">
                <p className="text-sm font-medium text-paper/85">{partner.name}</p>
                <p className="text-xs text-paper/45">{partner.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-balance font-display text-2xl italic leading-snug text-paper/85 sm:text-3xl">
            &ldquo;{teamQuote.text}&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent-400">
            &mdash; {teamQuote.author}
          </p>
        </div>
      </section>
    </>
  );
}
