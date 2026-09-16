import Image from "next/image";
import { cn } from "@/lib/cn";
import { TiltCard } from "./TiltCard";

interface Brand {
  name: string;
  src: string;
  blurb: string;
}

interface BrandShowcaseProps {
  brands: readonly Brand[];
  className?: string;
}

export function BrandShowcase({ brands, className }: BrandShowcaseProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {brands.map((brand, i) => (
        <TiltCard key={brand.name} delay={i * 0.06}>
          <div className="flex items-center justify-between gap-3">
            <Image
              src={brand.src}
              alt={brand.name}
              width={110}
              height={36}
              className="h-8 w-auto object-contain"
            />
            {/* Literal green, not the accent token — accent is brand red
                now, and "Active" needs to read as operational, not down. */}
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              Active
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-paper/65">{brand.blurb}</p>
        </TiltCard>
      ))}
    </div>
  );
}
