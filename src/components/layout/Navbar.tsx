"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, utilityLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

const NAV_HEIGHT = 72; // matches h-18

function NavLink({ href, label, light }: { href: string; label: string; light: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative px-1 py-2 text-sm font-medium transition-colors",
        light ? "text-white/85 hover:text-white" : "text-paper/80 hover:text-paper"
      )}
    >
      {label}
      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-linear-to-r from-brand-400 to-accent-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Every page opens on a dark band (the WebGL hero on "/", a photo/plain
  // PageHeader everywhere else, each marked with data-dark-band), so "not
  // scrolled past it yet" reliably means "sitting on a dark background" —
  // that's what drives the light/dark swap. We measure the actual band
  // height per page rather than guessing a fixed pixel offset, since a
  // compact PageHeader and the full-height hero are very different sizes.
  const light = !scrolled;

  useEffect(() => {
    let darkBandHeight = 0;

    const measure = () => {
      const band = document.querySelector<HTMLElement>("[data-dark-band]");
      darkBandHeight = band?.offsetHeight ?? 0;
    };

    const onScroll = () => {
      setScrolled(window.scrollY > Math.max(darkBandHeight - NAV_HEIGHT, 12));
    };

    measure();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
    // Re-measure and re-evaluate whenever the route changes, since the App
    // Router swaps page content without remounting this shared layout.
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="relative z-10 flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <Logo light={light} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} light={light} />
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                light ? "text-white/60 hover:text-white/90" : "text-paper/55 hover:text-paper/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="relative overflow-hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-brand-400 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={cn("h-px w-6", menuOpen || !light ? "bg-paper" : "bg-white")}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={cn("h-px w-6", menuOpen || !light ? "bg-paper" : "bg-white")}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={cn("h-px w-6", menuOpen || !light ? "bg-paper" : "bg-white")}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-line bg-ink md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-paper/90 hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-paper/60 hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-brand-500 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
