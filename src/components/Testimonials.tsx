"use client";

import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const reviews = [
  {
    stars: "★★★★★",
    text: "Superb quality 😍 Amazing product! The IGI certificate came inside the box — buying real gold online finally feels secure.",
    initial: "J",
    name: "Joshi Devyani",
    verified: "Verified Buyer",
  },
  {
    stars: "★★★★★",
    text: "Secure, tamper-proof packaging and delivery before the promised date. The weight matched the invoice exactly — that transparency matters.",
    initial: "R",
    name: "Verified Buyer, Rajkot",
    verified: "Verified Buyer",
  },
  {
    stars: "★★★★★",
    text: "Sunehriè has been our family jeweller in Godhra for years — now the whole family shops online with the same trust.",
    initial: "S",
    name: "Shah Family, Godhra",
    verified: "Verified Buyer",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="bg-[#f4edf8] section-padding py-16 sm:py-20" ref={ref} id="testimonials">
      <div className="container-main">
        {/* Header matching Figma Section 12 */}
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <span
            className="text-[11px] font-bold text-[#cca338] tracking-[3px] uppercase block mb-2"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            CUSTOMER STORIES
          </span>
          <h2
            className="text-[34px] sm:text-[42px] font-bold text-[#240632] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Loved Across Gujarat
          </h2>
        </div>

        {/* 3 Testimonial Cards matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`bg-white rounded-[24px] p-7 sm:p-8 relative flex flex-col justify-between border border-[#e8dcee] shadow-[0_8px_25px_rgba(43,13,62,0.06)] hover:shadow-[0_16px_40px_rgba(43,13,62,0.12)] hover:-translate-y-1.5 transition-all duration-300 animate-on-scroll delay-${i + 1}`}
            >
              {/* Big Serif Quote Watermark */}
              <span
                className="absolute top-4 right-6 text-[64px] font-serif text-[#7a3f91]/15 leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;
              </span>

              <div>
                {/* 5 Gold Stars */}
                <div className="text-[#cca338] text-[18px] tracking-[3px] mb-4">
                  {review.stars}
                </div>

                {/* Review Copy */}
                <p
                  className="text-[14px] text-[#402551] leading-relaxed italic mb-6 font-normal"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Badge */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#f4edf8]">
                <div
                  className="w-10 h-10 rounded-full bg-[#240632] text-white flex items-center justify-center font-bold text-[14px] shadow-sm flex-shrink-0"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {review.initial}
                </div>
                <div>
                  <div
                    className="text-[14px] font-bold text-[#240632]"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {review.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#079455] mt-0.5">
                    <CheckCircle size={12} className="text-[#079455]" />
                    <span>{review.verified}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
