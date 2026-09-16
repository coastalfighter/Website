import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AvatarInitials } from "@/components/ui/AvatarInitials";
import { TiltCard } from "@/components/ui/TiltCard";
import { StatsBand } from "@/components/ui/StatsBand";
import { PhotoMosaic } from "@/components/ui/PhotoMosaic";
import { PressLogos } from "@/components/ui/PressLogos";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { MagneticCta } from "@/components/hero/MagneticCta";
import { SignalBarsIcon, HandsetIcon, NetworkNodeIcon } from "@/components/ui/TelecomIcons";
import { whatDrivesUs, leadershipTeam, provenResults } from "@/data/about";

const galleryPhotos = [
  { src: "/images/photos/img-1845.webp", alt: "CMC Group representatives at a team event" },
  { src: "/images/photos/mes02799.webp", alt: "A CMC Group field representative at work" },
  { src: "/images/photos/img-2282.jpeg", alt: "CMC Group team members collaborating" },
  { src: "/images/photos/img-2283.jpeg", alt: "The CMC Group team celebrating a milestone" },
];

const resultIcons = [SignalBarsIcon, HandsetIcon, NetworkNodeIcon];

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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About CMC" }]}
      />

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <GlowField />
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
            <TiltCard delay={0}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-ink">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-paper/75">
                {whatDrivesUs.mission}
              </p>
            </TiltCard>
            <TiltCard delay={0.06}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-ink">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-paper/75">
                {whatDrivesUs.vision}
              </p>
            </TiltCard>
            <TiltCard delay={0.12}>
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
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Behind the Scenes" heading="Life on a CMC field team" align="center" className="mx-auto" />
          <PhotoMosaic photos={galleryPhotos} className="mt-12" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <GlowField />
        <FloatingIcons seed={8} count={4} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Leadership Team" heading="The people driving CMC forward" />
            <MagneticCta href="/careers" variant="secondary">
              Join Our Team
            </MagneticCta>
          </div>
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

      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
        <GlowField />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Results"
            heading="Numbers that back up the promise"
            align="center"
            className="mx-auto"
          />
          <StatsBand
            className="mt-16"
            stats={provenResults.map((result, i) => {
              const Icon = resultIcons[i % resultIcons.length] ?? SignalBarsIcon;
              return { icon: <Icon className="h-6 w-6" />, value: result.value, suffix: result.suffix, label: result.label };
            })}
          />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line/70 bg-ink py-16">
        <GlowField />
        <PressLogos />
      </section>
    </>
  );
}
