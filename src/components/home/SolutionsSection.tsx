import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { CellTowerIcon, HandsetIcon, NetworkNodeIcon } from "@/components/ui/TelecomIcons";
import { solutions } from "@/data/home";

const ICONS: Record<string, React.ReactNode> = {
  target: <CellTowerIcon className="h-6 w-6" />,
  map: <NetworkNodeIcon className="h-6 w-6" />,
  handshake: <HandsetIcon className="h-6 w-6" />,
};

export function SolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <GlowField />
      <FloatingIcons seed={2} count={3} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Solutions"
          heading="Three ways we help brands grow"
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <TiltCard key={solution.title} delay={i * 0.08}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/10 text-brand-ink">
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
