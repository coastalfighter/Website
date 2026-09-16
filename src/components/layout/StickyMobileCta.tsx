import Link from "next/link";
import { siteConfig } from "@/data/site";

/** A persistent mobile-only call/contact bar — desktop already has both CTAs within reach in the nav/hero. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-line/80 bg-ink/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line/80 py-3 text-sm font-semibold text-paper"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 py-3 text-sm font-semibold text-white"
      >
        Start a Conversation
      </Link>
    </div>
  );
}
