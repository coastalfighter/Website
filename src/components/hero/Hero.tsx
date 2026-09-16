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
import { FloatingIcons } from "@/components/ui/FloatingIcons";

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
      className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
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
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const webglAvailable = useIsWebglAvailable();
  const canRenderShader = webglAvailable === true;

  // A pinned-hero scroll effect: the hero content sticks to the top of the
  // viewport while the container's extra height (80svh beyond the viewport)
  // scrolls underneath it. As that happens the background pulls back
  // (scales up, blurs, dims) and the foreground content clears out faster
  // than the background, so it reads as "pulling away from the network"
  // before the next section rises up and covers the pinned hero.
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgBlur = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const bgFilter = useTransform(bgBlur, (blur) => `blur(${blur}px)`);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} data-dark-band className="relative h-[180svh] w-full">
      <div className="sticky top-0 h-dvh min-h-[640px] w-full overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, filter: bgFilter, opacity: bgOpacity }}
        >
          {canRenderShader ? (
            <ShaderBackground reducedMotion={reducedMotion} className="h-full w-full" />
          ) : (
            <HeroFallbackBackground />
          )}
        </motion.div>

        <NoiseOverlay />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40" />
        <FloatingIcons seed={1} count={3} tone="light" className="z-[5]" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center gap-4 px-6 py-24 lg:px-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-slow" />
            {heroContent.eyebrow}
          </motion.p>

          <AnimatedHeadline />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {heroContent.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-2 flex flex-wrap items-center gap-4"
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
            className="mt-4 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-6"
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="pointer-events-none absolute inset-x-0 bottom-5 z-10 hidden flex-col items-center gap-2 text-white/50 sm:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="relative h-8 w-px overflow-hidden bg-white/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-transparent to-accent-400"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
