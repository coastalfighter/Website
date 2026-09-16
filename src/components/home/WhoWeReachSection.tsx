import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlowField } from "@/components/ui/GlowField";
import { whoWeReach } from "@/data/site";

export function WhoWeReachSection() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
      <GlowField />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Reach"
          heading="Door to door, wherever the market is"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {whoWeReach.map((segment, i) => (
            <TiltCard key={segment.title} delay={i * 0.08} className="text-center">
              <h3 className="font-display text-lg font-semibold text-paper">{segment.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{segment.description}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
