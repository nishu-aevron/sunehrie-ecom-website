"use client";

import { Award, Gem, ReceiptText, RotateCcw, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const badges = [
  {
    icon: Award,
    title: "100% Certified",
    subtitle: "IGI + BIS Hallmark",
  },
  {
    icon: Gem,
    title: "Natural Diamonds",
    subtitle: "Natural Diamonds only",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    subtitle: "Full price breakup",
  },
  {
    icon: RotateCcw,
    title: "48-Hour Returns",
    subtitle: "Easy Exchange",
  },
  {
    icon: ShieldCheck,
    title: "Insured Delivery",
    subtitle: "Free & tamper-proof",
  },
];

export default function TrustBadges() {
  const ref = useScrollAnimation();

  return (
    <section className="bg-[#2b0d3e] py-7 sm:py-8 border-y border-[#523366]/40" ref={ref} id="trust-badges">
      <div className="container-main">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-6 items-center justify-between animate-on-scroll">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#c59b27]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c59b27]/25 group-hover:scale-105 transition-all duration-300">
                <badge.icon
                  size={24}
                  className="text-[#c59b27]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="text-white">
                <div
                  className="text-[20px] xl:text-[22px] font-bold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {badge.title}
                </div>
                <div
                  className="text-[13px] xl:text-[14px] font-medium text-white/70 mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Horizontal Scroll */}
        <div className="lg:hidden flex items-center gap-6 overflow-x-auto nav-scroll pb-1 animate-on-scroll">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#c59b27]/15 flex items-center justify-center flex-shrink-0">
                <badge.icon
                  size={20}
                  className="text-[#c59b27]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="text-white">
                <div
                  className="text-[16px] sm:text-[18px] font-bold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {badge.title}
                </div>
                <div
                  className="text-[11px] sm:text-[12px] font-medium text-white/70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
