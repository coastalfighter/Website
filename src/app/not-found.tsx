import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">This page took a wrong turn</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-dim">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">
          Contact us instead
        </Button>
      </div>
    </section>
  );
}
