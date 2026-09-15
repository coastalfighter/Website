import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { solutions } from "@/data/home";

const ICONS: Record<string, React.ReactNode> = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
      <path d="m3 11 5-5 4 2 4-2 5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13l3 3 2-2 2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function SolutionsSection() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Solutions"
          heading="Three ways we help brands grow"
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <TiltCard key={solution.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                {ICONS[solution.icon]}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-paper">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{solution.description}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
