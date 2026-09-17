import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { leadershipTeam } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind CMC Group.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        heading="The people behind CMC Group"
        body="A leadership team built almost entirely from people who started on the doors — every headshot below is a placeholder, easy to swap and easy to extend."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
        image={{
          src: "/images/placeholders/team-header.jpg",
          alt: "Placeholder — replace with your own photo at public/images/placeholders/team-header.jpg",
        }}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" heading="Meet the team" align="center" className="mx-auto" />
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {leadershipTeam.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.06}>
                <div className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-line">
                  <Image
                    src="/images/placeholders/team-headshot.jpg"
                    alt={`Placeholder headshot for ${member.name} — replace at public/images/placeholders/team-headshot.jpg`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-semibold text-text">{member.name}</p>
                <p className="text-sm text-text-dim">{member.title}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-text-dim">
            Adding a new team member is just adding an entry to <code>leadershipTeam</code> in{" "}
            <code>src/data/about.ts</code> — the grid extends automatically.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-text sm:text-4xl">Want to see your headshot here?</h2>
          <p className="text-base leading-relaxed text-text-dim">
            We&apos;re always looking for people who want to build a career, not just take a job.
          </p>
          <Button href="/careers">See Open Positions</Button>
        </div>
      </section>
    </>
  );
}
