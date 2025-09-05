"use client";

import Image from "next/image";

export default function BannerSection({ images }) {
  if (!images) return null;

  return (
    <section className="w-full">
      {/* Desktop banner */}
      {images.desktop?.map((img, idx) => (
        <div key={`desktop-${idx}`} className="hidden md:block w-full">
          <Image
            src={img.url}
            alt={`Desktop Banner ${idx + 1}`}
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      ))}

      {/* Mobile banner */}
      {images.mobile?.map((img, idx) => (
        <div key={`mobile-${idx}`} className="block md:hidden w-full">
          <Image
            src={img.url}
            alt={`Mobile Banner ${idx + 1}`}
            width={1080}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      ))}
    </section>
  );
}
