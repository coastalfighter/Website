import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { MagneticCta } from "@/components/hero/MagneticCta";
import { GlowField } from "@/components/ui/GlowField";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" heading="This page took a wrong turn" compact />
      <div className="relative overflow-hidden">
        <GlowField />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-24 text-center lg:px-8">
          <p className="text-base leading-relaxed text-paper/70">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
            back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticCta href="/">Back to home</MagneticCta>
            <Link
              href="/contact"
              className="text-sm font-semibold text-paper/70 hover:text-paper"
            >
              Contact us instead &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
