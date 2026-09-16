import Image from "next/image";
import { cn } from "@/lib/cn";
import { pressLogos } from "@/data/site";

interface PressLogosProps {
  label?: string;
  className?: string;
}

export function PressLogos({ label = "Trusted by industry leaders", className }: PressLogosProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-paper/60">
        {label}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {pressLogos.map((press) => (
          <Image
            key={press.name}
            src={press.src}
            alt={press.name}
            width={110}
            height={32}
            className="h-6 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
