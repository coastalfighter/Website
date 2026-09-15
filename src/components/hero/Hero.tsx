"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroContent } from "@/data/site";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useIsWebglAvailable } from "@/lib/useIsWebglAvailable";
import { CountUp } from "@/components/ui/CountUp";
import { GradientText } from "@/components/ui/GradientText";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ShaderBackground } from "./ShaderBackground";
import { MagneticCta } from "./MagneticCta";

const wordVariants = {
  hidden: { opacity: 0, y: 48, rotateX: 65 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.4 + i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function AnimatedHeadline() {
  const lines = heroContent.headline.map((line) => line.split(" "));

  return (
    <h1
      className="text-balance text-4xl font-display font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
      style={{ perspective: 800 }}
    >
      {lines.map((words, lineIdx) => {
        const lineOffset = lines.slice(0, lineIdx).reduce((sum, l) => sum + l.length, 0);

        return (
          <span key={heroContent.headline[lineIdx]} className="block overflow-hidden pb-1">
            {words.map((word, wordIdx) => {
              const globalIndex = lineOffset + wordIdx;
              const isHighlight =
                word.toLowerCase().includes("industry") || word.toLowerCase().includes("leading");

              return (
                <motion.span
                  key={`${lineIdx}-${wordIdx}`}
                  custom={globalIndex}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="mr-[0.28em] inline-block [transform-style:preserve-3d]"
                >
                  {isHighlight ? <GradientText>{word}</GradientText> : word}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

function HeroFallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[120px] animate-pulse-slow" />
      <div className="absolute right-1/4 bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-accent-500/20 blur-[110px] animate-float" />
      <div className="absolute left-1/4 bottom-1/3 h-[20rem] w-[20rem] rounded-full bg-signal-500/20 blur-[100px] animate-float [animation-delay:2s]" />
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const webglAvailable = useIsWebglAvailable();
  const canRenderShader = webglAvailable === true;

  // A cheap scroll effect for the hero itself: the background gently drifts
  // down and fades as the page scrolls past it — no scroll-jacking, just a
  // couple of transforms driven by native scroll position.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div className="absolute inset-0" style={{ y: bgY, opacity: bgOpacity }}>
        {canRenderShader ? (
          <ShaderBackground
            reducedMotion={reducedMotion}
            className="h-full w-full"
          />
        ) : (
          <HeroFallbackBackground />
        )}
      </motion.div>

      <NoiseOverlay />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-slow" />
          {heroContent.eyebrow}
        </motion.p>

        <AnimatedHeadline />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70"
        >
          {heroContent.subcopy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticCta href={heroContent.cta.href} variant="primary">
            {heroContent.cta.label}
          </MagneticCta>
          <MagneticCta href={heroContent.secondaryCta.href} variant="onDark">
            {heroContent.secondaryCta.label}
          </MagneticCta>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-8"
        >
          {heroContent.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-semibold text-white">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3 text-white/50"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-transparent to-accent-400"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
