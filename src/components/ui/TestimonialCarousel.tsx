"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { AvatarInitials } from "./AvatarInitials";

interface Testimonial {
  name: string;
  detail: string;
}

interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[];
  className?: string;
}

export function TestimonialCarousel({ testimonials, className }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  const current = testimonials[index] ?? testimonials[0];
  if (!current) return null;

  return (
    <div
      className={cn("mx-auto max-w-2xl text-center", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="h-14 w-14">
              <AvatarInitials name={current.name} seed={index} />
            </div>
            <p className="text-balance font-display text-xl leading-snug text-paper sm:text-2xl">
              &ldquo;{current.detail}&rdquo;
            </p>
            <p className="text-sm font-semibold text-paper/60">{current.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-brand-500" : "w-1.5 bg-line"
            )}
          />
        ))}
      </div>
    </div>
  );
}
