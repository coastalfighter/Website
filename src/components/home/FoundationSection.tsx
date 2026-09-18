"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { company } from "@/data/home";
import { awardsHome, pressLogos } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

export function FoundationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-70, 70]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal direction="left" className="lg:order-2">
          <motion.div
            style={{ y: imageY }}
            className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-line"
          >
            <Image
              src={company.image.src}
              alt={company.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </Reveal>
        <Reveal direction="right" className="lg:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{company.eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">{company.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-dim">{company.body}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6 lg:px-8">
        <Reveal className="border-t border-line pt-14 text-center">
          <p className="mx-auto max-w-2xl text-lg font-semibold text-text">{awardsHome.heading}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-dim">{awardsHome.body}</p>
        </Reveal>
        <Marquee className="mt-10">
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
      </div>
    </section>
  );
}
