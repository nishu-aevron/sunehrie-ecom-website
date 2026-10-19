"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const purities = [
  {
    karat: "9KT",
    desc: "Everyday fine gold — durable, wearable, honestly priced.",
    image: "/figma/e1d63b46fa82431edd01f50916e128ef967f35d3.png",
    href: "#products",
  },
  {
    karat: "14KT",
    desc: "The modern sweet spot — richer tone, diamond-forward designs.",
    image: "/figma/5fbe8cba70b836012c8be1b90633d9c708663631.png",
    href: "#products",
  },
  {
    karat: "18KT",
    desc: "Heirloom gold for weddings and the pieces you pass down.",
    image: "/figma/d6d4ebfc27a2645b5e935d6b78af6b2c5602482f.png",
    href: "#products",
  },
];

export default function ShopByPurity() {
  const ref = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f2ecf4]" ref={ref} id="shop-by-purity">
      <div className="container-main">
        {/* Left-Aligned Header strictly matching Figma Container 93:11117 */}
        <div className="text-left mb-8 sm:mb-12 animate-on-scroll">
          <h2
            className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-[#7a3f91] leading-[1.1] mb-2.5 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shop by Purity
          </h2>
          <p
            className="text-[14px] sm:text-[15px] text-[#333333] max-w-[620px] font-normal leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Every design shows the karats it&apos;s actually available in pick the
            purity that fits your story.
          </p>
        </div>

        {/* 3 Horizontal Editorial Purity Cards matching Figma Link 93:11123-11125 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {purities.map((item, i) => (
            <a
              key={item.karat}
              href={item.href}
              className={`group relative block rounded-[24px] overflow-hidden min-h-[175px] sm:min-h-[190px] shadow-[0_10px_25px_rgba(43,13,62,0.06)] border border-[#decfe5] hover:border-[#cca338] transition-all duration-300 hover:-translate-y-1 animate-on-scroll delay-${i + 1}`}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.karat}
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark violet / obsidian gradient for readable gold typography */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#240632]/95 via-[#240632]/80 to-transparent group-hover:from-[#240632]/90 transition-colors" />

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full min-h-[175px] sm:min-h-[190px]">
                <div className="flex items-start justify-between">
                  <h3
                    className="text-[44px] sm:text-[50px] font-normal text-white leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.karat}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#cca338] flex items-center justify-center text-white transition-colors">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <p
                  className="text-[13px] sm:text-[14px] text-white/90 leading-relaxed font-normal max-w-[270px] mt-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
