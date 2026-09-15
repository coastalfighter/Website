import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "./Logo";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-xs font-semibold text-paper/70 transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  {social.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-paper">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-paper/60">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-paper/40 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Cerritos, California</p>
        </div>
      </div>
    </footer>
  );
}
