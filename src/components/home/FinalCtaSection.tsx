import { MagneticCta } from "@/components/hero/MagneticCta";
import { finalCta } from "@/data/home";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-paper/65">
          {finalCta.body}
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticCta href={finalCta.cta.href}>{finalCta.cta.label}</MagneticCta>
        </div>
      </div>
    </section>
  );
}
