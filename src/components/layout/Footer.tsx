import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "./Logo";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { SignalBarsIcon } from "@/components/ui/TelecomIcons";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "YouTube", href: siteConfig.social.youtube },
];

/**
 * Deliberately a dark navy band (literal colors, not the ink/paper tokens)
 * against the otherwise light theme — bookends the page with the same dark,
 * telecom-signal feel as the hero, rather than fading out on more flat white.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b1a]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-500/15 blur-[110px]" />
      </div>
      <FloatingIcons seed={6} count={5} tone="light" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70 transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  {social.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/50">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5" title="Network status: connected">
              <span className="flex h-2.5 items-end gap-0.5" aria-hidden>
                <span className="w-0.5 origin-bottom animate-signal-bar bg-accent-400 [animation-delay:0ms]" style={{ height: "40%" }} />
                <span className="w-0.5 origin-bottom animate-signal-bar bg-accent-400 [animation-delay:150ms]" style={{ height: "70%" }} />
                <span className="w-0.5 origin-bottom animate-signal-bar bg-accent-400 [animation-delay:300ms]" style={{ height: "100%" }} />
              </span>
              <SignalBarsIcon className="hidden h-3 w-3 text-accent-400 sm:block" aria-hidden />
              <span className="text-accent-400">All systems connected</span>
            </span>
            <span>Cerritos, California</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
