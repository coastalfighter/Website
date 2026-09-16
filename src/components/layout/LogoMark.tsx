import { cn } from "@/lib/cn";

/**
 * The CMC shield: a blue/red split crest with a white crown at its center.
 * Colors are fixed (not theme tokens) — this is the literal brand mark and
 * must render the same regardless of light/dark context it's placed on.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 205"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="CMC Group"
    >
      <path
        d="M40,10 L100,30 L100,195 L20,120 L20,60 Z"
        fill="#1E6FE0"
      />
      <path
        d="M160,10 L100,30 L100,195 L180,120 L180,60 Z"
        fill="#E0272A"
      />
      <g fill="#ffffff">
        <rect x="70" y="88" width="60" height="16" rx="2" />
        <polygon points="70,90 82,90 76,58" />
        <polygon points="89,90 111,90 100,46" />
        <polygon points="118,90 130,90 124,58" />
        <circle cx="76" cy="55" r="5" />
        <circle cx="100" cy="43" r="6" />
        <circle cx="124" cy="55" r="5" />
      </g>
    </svg>
  );
}
