import Image from "next/image";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoMosaicProps {
  photos: readonly Photo[];
  className?: string;
}

export function PhotoMosaic({ photos, className }: PhotoMosaicProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", className)}>
      {photos.map((photo, i) => (
        <Reveal
          key={photo.src}
          delay={i * 0.05}
          className="relative aspect-square overflow-hidden rounded-2xl"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  );
}
