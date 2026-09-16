import Link from "next/link";
import { siteConfig } from "@/data/site";

/** A persistent mobile-only call/contact bar. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-line bg-white/95 p-3 backdrop-blur sm:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center rounded-md border border-line py-3 text-sm font-semibold text-text"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center rounded-md bg-brand-500 py-3 text-sm font-semibold text-white"
      >
        Contact Us
      </Link>
    </div>
  );
}
