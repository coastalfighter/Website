import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { brands } from "@/data/site";

export function BrandsStrip() {
  return (
    <section className="border-b border-line py-10">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">
          Authorized dealer &amp; sales partner for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              width={120}
              height={36}
              className="h-7 w-auto object-contain grayscale opacity-70 transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
