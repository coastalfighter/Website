"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { LogoMark } from "./LogoMark";

const CANDIDATES = ["/brand/logo.svg", "/brand/logo.png"];

function probe(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

/** Renders the real logo once you drop a file at public/brand/logo.svg (or
 * .png) — probed with a detached Image() so a missing file never renders a
 * broken <img>. Starts as the placeholder mark on every render (server and
 * client) and swaps in after the probe resolves, avoiding a hydration
 * mismatch. */
export function BrandMark({ className }: { className?: string }) {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of CANDIDATES) {
        if (await probe(src)) {
          if (!cancelled) setResolvedSrc(src);
          return;
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (resolvedSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- already preloaded via probe(), next/image adds nothing here
      <img src={resolvedSrc} alt="CMC Group" className={cn("h-8 w-8 object-contain", className)} />
    );
  }

  return <LogoMark className={className} />;
}
