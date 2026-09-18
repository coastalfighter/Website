import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { solutions, solutionsCta } from "@/data/home";

export function SolutionsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Our Services" heading="Three ways we help brands grow" align="center" className="mx-auto" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {solutions.map((solution, i) => (
            <Card key={solution.title} delay={i * 0.06}>
              <h3 className="text-lg font-semibold text-text">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{solution.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={solutionsCta.href} className="link-underline text-sm font-semibold text-brand-400">
            {solutionsCta.label} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
