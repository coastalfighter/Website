import { cn } from "@/lib/cn";

const GRADIENTS = [
  "from-brand-400 to-accent-400",
  "from-accent-400 to-signal-500",
  "from-signal-500 to-brand-400",
];

function initialsFor(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** A gradient initials avatar — used where we don't have a real staff headshot. */
export function AvatarInitials({
  name,
  seed = 0,
  className,
}: {
  name: string;
  seed?: number;
  className?: string;
}) {
  const gradient = GRADIENTS[seed % GRADIENTS.length];

  return (
    <div
      className={cn(
        "flex aspect-square w-full items-center justify-center rounded-xl bg-linear-to-br text-2xl font-bold text-ink",
        gradient,
        className
      )}
      aria-hidden
    >
      {initialsFor(name)}
    </div>
  );
}
