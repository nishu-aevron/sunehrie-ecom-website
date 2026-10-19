"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const occasions = [
  {
    label: "Office Wear",
    image: "/figma/6335ab280ab8fca14c043aa9755a6a7decc5d2ba.png",
    href: "#office-wear",
  },
  {
    label: "Party Wear",
    image: "/figma/bc1a998d451013443487022ea4c9ab8ff199fc05.png",
    href: "#party-wear",
  },
  {
    label: "Wedding Wear",
    image: "/figma/91db5df1bb5943afb029efc2d595fe30244511f0.png",
    href: "#wedding-wear",
  },
  {
    label: "Daily Wear",
    image: "/figma/1928c9fbd872024651ee8058356d430e2d819f0f.png",
    href: "#daily-wear",
  },
];

export default function ShopByOccasion() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-white" ref={ref} id="shop-by-occasion">
      <div className="container-main">
        {/* Header matching Figma Section 8 */}
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2
            className="text-[32px] sm:text-[38px] lg:text-[40px] font-bold text-[#7a3f91] leading-[1.1] mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shop by Occasion
          </h2>
          <p
            className="text-[13px] sm:text-[14px] text-[#402551] max-w-[550px] mx-auto font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Shop our curated collections by occasion find the perfect piece to
            celebrate every moment.
          </p>
        </div>

        {/* 2x2 Grid of Occasion Editorial Cards from Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {occasions.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative rounded-[24px] overflow-hidden h-[260px] sm:h-[320px] lg:h-[400px] block shadow-[0_12px_35px_rgba(43,13,62,0.12)] border border-[#e8dcee] hover:border-[#cca338] transition-all duration-500 animate-on-scroll delay-${(i % 2) + 1}`}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Gradient Vignette for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#240632]/85 via-black/20 to-transparent group-hover:from-[#7a3f91]/80 transition-colors duration-500" />

              {/* Title & Hover Cue */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6">
                <h3
                  className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight leading-tight group-hover:translate-x-1 transition-transform"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </h3>
                <span className="text-[12px] uppercase font-bold text-[#cca338] tracking-[2px] mt-1.5 inline-block opacity-90 group-hover:opacity-100 transition-opacity">
                  Discover Now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
