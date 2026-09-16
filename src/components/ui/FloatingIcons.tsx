import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/cn";
import {
  SignalBarsIcon,
  WifiIcon,
  CellTowerIcon,
  SatelliteDishIcon,
  SimCardIcon,
  RouterIcon,
  HandsetIcon,
  NetworkNodeIcon,
} from "./TelecomIcons";

const ICON_POOL: ComponentType<SVGProps<SVGSVGElement>>[] = [
  SignalBarsIcon,
  WifiIcon,
  CellTowerIcon,
  SatelliteDishIcon,
  SimCardIcon,
  RouterIcon,
  HandsetIcon,
  NetworkNodeIcon,
];

/**
 * A tiny deterministic PRNG (not Math.random!) so the "random" placement is
 * stable between the server render and the client hydration — same seed,
 * same layout, no hydration mismatch.
 */
function seededRandom(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface FloatingIconsProps {
  /** Any integer — pick a different one per section so the scatter varies. */
  seed: number;
  count?: number;
  /** "light" for icons floating on a dark band (Hero/Footer), otherwise brand blue. */
  tone?: "brand" | "light";
  className?: string;
}

/**
 * Telecom/networking "easter eggs" — signal bars, wifi, a satellite dish, a
 * SIM card, a cell tower, and friends — scattered at low opacity and
 * drifting slowly. Pure server component (the placement is a deterministic
 * function of `seed`, no client JS needed to render it).
 */
export function FloatingIcons({ seed, count = 3, tone = "brand", className }: FloatingIconsProps) {
  const rand = seededRandom(seed);

  const items = Array.from({ length: count }, (_, i) => {
    const Icon = ICON_POOL[Math.floor(rand() * ICON_POOL.length)] ?? SignalBarsIcon;
    return {
      key: `${seed}-${i}`,
      Icon,
      top: 6 + rand() * 76,
      left: 4 + rand() * 88,
      size: 26 + rand() * 28,
      duration: 10 + rand() * 8,
      delay: -1 * rand() * 12,
      rotate: rand() * 30 - 15,
    };
  });

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {items.map(({ key, Icon, top, left, size, duration, delay, rotate }) => (
        <div
          key={key}
          style={{ position: "absolute", top: `${top}%`, left: `${left}%`, transform: `rotate(${rotate}deg)` }}
        >
          <Icon
            style={{
              width: size,
              height: size,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
            className={cn("animate-drift", tone === "light" ? "text-white/15" : "text-brand-500/20")}
          />
        </div>
      ))}
    </div>
  );
}
