"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function Banner() {
  const ref = useScrollAnimation();

  return (
    <section className="px-4 sm:px-6 lg:px-[50px] py-8 sm:py-10" ref={ref}>
      <div className="max-w-[1340px] mx-auto relative bg-[#2b0d3e] rounded-[24px] overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-[454px] flex items-center shadow-xl animate-on-scroll">
        {/* Background Editorial Jewelry Image from Figma */}
        <div className="absolute left-0 top-0 w-full sm:w-[55%] lg:w-[650px] h-full">
          <Image
            src="/figma/80fbcea7bea59ef6f7e8f81f32030ee20e1116f3.png"
            alt="Festive Special 25% Off Making Charges"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 55vw"
          />
        </div>

        {/* Gradient Transition Overlay to ensure text readability */}
        <div
          className="absolute left-0 sm:left-[30%] lg:left-[360px] top-0 w-full sm:w-[70%] lg:w-[350px] h-full hidden sm:block pointer-events-none"
          style={{
            background: "linear-gradient(to right, transparent, #2b0d3e 90%)",
          }}
        />

        {/* Full overlay on mobile */}
        <div className="absolute inset-0 bg-[#2b0d3e]/85 sm:hidden" />

        {/* Banner Content matching Figma Section 6 */}
        <div className="relative z-10 ml-0 sm:ml-auto max-w-full sm:max-w-[500px] lg:max-w-[580px] px-6 sm:pr-10 lg:pr-[64px] py-10 sm:py-12">
          <span
            className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#eae8ff] tracking-wide block mb-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Festive Special
          </span>

          <h2
            className="text-[36px] sm:text-[44px] lg:text-[49px] font-bold text-white leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[#e5c158]">25% Off</span>
            <br />
            Making Charges
          </h2>

          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/90 leading-relaxed mt-4 sm:mt-5 font-normal max-w-[460px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            On all 9KT &amp; 14KT gold jewellery. Raw gold margin untouched — the
            discount is only on craftsmanship.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="#new-collection"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[14px] sm:text-[16px] font-semibold text-[#170f49] bg-white hover:bg-[#e5c158] hover:text-[#240632] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>Shop the offer</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
