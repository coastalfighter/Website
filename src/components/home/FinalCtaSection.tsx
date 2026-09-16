import { Button } from "@/components/ui/Button";
import { finalCta } from "@/data/home";

export function FinalCtaSection() {
  return (
    <section className="border-t border-line bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-text-dim">
          {finalCta.body}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </section>
  );
}
