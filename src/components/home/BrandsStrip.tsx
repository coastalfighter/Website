import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { brands } from "@/data/site";

export function BrandsStrip() {
  return (
    <section className="border-b border-line py-10">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
          Authorized dealer &amp; sales partner for
        </p>
      </Reveal>
      <Marquee className="mx-auto max-w-6xl">
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            width={200}
            height={60}
            className="h-12 w-auto shrink-0 object-contain grayscale opacity-70 transition-all hover:opacity-100 hover:grayscale-0 sm:h-14"
          />
        ))}
      </Marquee>
    </section>
  );
}
