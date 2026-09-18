import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { HeightMatchedRow } from "@/components/ui/HeightMatchedRow";
import { CountUp } from "@/components/ui/CountUp";
import { Button } from "@/components/ui/Button";
import { pressLogos, awardsAbout } from "@/data/site";
import { slugify } from "@/lib/slugify";
import {
  aboutIntro,
  goals,
  mission,
  vision,
  valuesBody,
  values,
  leadershipTeam,
  serviceAreas,
  provenResults,
  resultsInAction,
  teamQuote,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: mission,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutIntro.eyebrow}
        heading={aboutIntro.heading}
        body={aboutIntro.body}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={{
          src: "/images/placeholders/about-header.jpg",
          alt: "Placeholder — replace with your own photo at public/images/placeholders/about-header.jpg",
        }}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <HeightMatchedRow
            left={
              <Reveal direction="left">
                <h2 className="text-2xl font-bold tracking-tight text-text">Our Goals</h2>
                <ul className="mt-6 space-y-4">
                  {goals.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-dim">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            }
            right={
              <div className="space-y-6">
                <Card direction="right" fullHeight={false}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-400">Our Mission</h3>
                  <p className="mt-3 text-base leading-relaxed text-text-dim">{mission}</p>
                </Card>
                <Card delay={0.06} direction="right" fullHeight={false}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-400">Our Vision</h3>
                  <p className="mt-3 text-base leading-relaxed text-text-dim">{vision}</p>
                </Card>
                <Card delay={0.12} direction="right" fullHeight={false}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-400">Our Values</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">{valuesBody}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {values.map((value) => (
                      <span key={value} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-text-dim">
                        {value}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            }
          />
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our People" heading="Three service areas, one growth engine" align="center" className="mx-auto" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <Card key={area.title} delay={i * 0.08}>
                <h3 className="text-lg font-semibold text-text">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="group relative aspect-12/5 overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/placeholders/about-banner.jpg"
              alt="Placeholder — replace with your own photo at public/images/placeholders/about-banner.jpg"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="glow-field" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Leadership Team" heading="The people driving CMC forward" />
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/our-team" className="link-underline text-sm font-semibold text-brand-400">
                Meet the full team &rarr;
              </Link>
              <Button href="/careers" variant="secondary">Join Our Team</Button>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {leadershipTeam.map((member, i) => {
              const src = `/images/placeholders/team/${slugify(member.name)}.jpg`;
              return (
                <Reveal key={member.name} delay={(i % 5) * 0.05} className="text-center">
                  <div className="group relative mx-auto h-16 w-16 overflow-hidden rounded-full border border-line">
                    <Image
                      src={src}
                      alt={`Placeholder headshot for ${member.name} — replace at public${src}`}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 font-semibold text-text">{member.name}</p>
                  <p className="text-xs text-text-dim">{member.title}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Proven Results" heading="Numbers that back up the promise" align="center" className="mx-auto" />
          <div className="mt-14 overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            <div className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {provenResults.map((result) => (
                <div key={result.label} className="px-6 py-10 text-center">
                  <p className="text-4xl font-bold text-text">
                    <CountUp value={result.value} suffix={result.suffix} />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{awardsAbout.eyebrow}</p>
          <h2 className="text-2xl font-bold text-text">{awardsAbout.heading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-text-dim">{awardsAbout.body}</p>
        </div>
        <Marquee className="mx-auto mt-10 max-w-6xl">
          {pressLogos.map((press) => (
            <Image
              key={press.name}
              src={press.src}
              alt={press.name}
              width={180}
              height={52}
              className="h-10 w-auto shrink-0 object-contain opacity-50 grayscale transition-all hover:opacity-90 hover:grayscale-0 sm:h-11"
            />
          ))}
        </Marquee>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <p className="text-sm leading-relaxed text-text-dim">{resultsInAction}</p>
          <p className="mt-10 text-balance text-2xl italic leading-snug text-text/85 sm:text-3xl">&ldquo;{teamQuote.text}&rdquo;</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-400">&mdash; {teamQuote.author}</p>
        </div>
      </section>
    </>
  );
}
