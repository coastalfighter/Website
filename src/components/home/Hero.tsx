"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { GradientText } from "@/components/ui/GradientText";
import { NetworkCanvas } from "./NetworkCanvas";
import { heroContent } from "@/data/home";
import { heroStats } from "@/data/site";

const HIGHLIGHT = "powered by people";

export function Hero() {
  const [before, after] = heroContent.headline.split(HIGHLIGHT);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 180]);
  const bgY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -90]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="glow-field" />
      <motion.div style={{ y: bgY }} className="grid-pattern absolute inset-0 -z-10" />
      <NetworkCanvas className="absolute inset-0 -z-10 h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-linear-to-b from-transparent to-ink" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-400 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
            {heroContent.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
            {before}
            <GradientText>{HIGHLIGHT}</GradientText>
            {after}
          </h1>
          <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-text-dim">{heroContent.subcopy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={heroContent.cta.href}>{heroContent.cta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="onDark">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-3xl font-bold text-text [text-shadow:0_0_24px_color-mix(in_oklab,var(--color-brand-400)_50%,transparent)]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-sm text-text-dim">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <motion.div style={{ y: photoY }} className="group relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
          <div className="relative aspect-4/5 animate-fade-up overflow-hidden rounded-2xl border border-white/10 shadow-glow lg:aspect-square">
            <Image
              src="/images/placeholders/hero-team.jpg"
              alt="Placeholder — replace with your own photo at public/images/placeholders/hero-team.jpg"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
