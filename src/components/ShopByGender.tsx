"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";

const genders = [
  {
    label: "Male",
    image: "/figma/3809d984a3d77ed1a00892f98d709ea44c45ff18.png",
    href: "#products",
  },
  {
    label: "Female",
    image: "/figma/218be2cd2f9a00907a2f93b8a87931164fab320c.png",
    href: "#products",
  },
  {
    label: "Kids",
    image: "/figma/3ab0cd8d462f8d3f616c5e43064d7150a8e6adb9.png",
    href: "#products",
  },
];

const ARCH_PATH =
  "M389 100.948C389 86.003 379.592 73.7738 368.086 73.7738C356.584 73.7738 347.172 65.7313 347.172 55.9043C347.172 46.0774 337.76 38.0454 326.258 38.0454H302.536C291.026 38.0454 273.329 32.2451 263.204 25.1612C263.204 25.1612 227.238 0 194.502 0C161.766 0 125.8 25.1612 125.8 25.1612C115.671 32.2451 97.9704 38.0454 86.4722 38.0454H62.7421C51.2398 38.0454 41.8321 46.0827 41.8321 55.9043C41.8321 65.7366 32.4204 73.7738 20.9181 73.7738C9.41171 73.7738 0 86.003 0 100.948V274.052C0 288.997 9.41171 301.221 20.9181 301.221C32.4204 301.221 41.8321 309.263 41.8321 319.096C41.8321 328.917 51.2398 336.96 62.7421 336.96H86.4722C97.9704 336.96 115.675 342.76 125.8 349.839C125.8 349.839 161.766 375 194.502 375C227.234 375 263.204 349.839 263.204 349.839C273.329 342.76 291.03 336.96 302.536 336.96H326.258C337.76 336.96 347.172 328.917 347.172 319.096C347.172 309.258 356.584 301.221 368.086 301.221C379.592 301.221 389 288.997 389 274.052V100.948Z";

export default function ShopByGender() {
  const ref = useScrollAnimation();

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-white" ref={ref} id="shop-by-gender">
      <div className="container-main">
        {/* Left-Aligned Header strictly matching Figma Frame 152 & Frame 60 */}
        <div className="text-left mb-8 sm:mb-12 animate-on-scroll">
          <h2
            className="text-[34px] sm:text-[40px] lg:text-[44px] font-bold text-[#7a3f91] leading-[1.1] mb-2.5 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shop by Gender
          </h2>
          <p
            className="text-[14px] sm:text-[15px] text-[#333333] max-w-[640px] font-normal leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Discover jewelry crafted for every style and story, designed to
            celebrate your unique expression.
          </p>
        </div>

        {/* 3 Mughal Jharokha Scalloped Arch Cards matching Figma Vector 93:11094 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {genders.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative block cursor-pointer transition-transform duration-500 hover:-translate-y-2 animate-on-scroll delay-${i + 1}`}
            >
              <svg
                viewBox="0 0 389 375"
                className="w-full h-auto drop-shadow-[0_12px_28px_rgba(43,13,62,0.12)] group-hover:drop-shadow-[0_24px_48px_rgba(122,63,145,0.28)] transition-all duration-500 overflow-visible"
              >
                <defs>
                  <clipPath id={`arch-clip-${i}`}>
                    <path d={ARCH_PATH} />
                  </clipPath>
                  <linearGradient id={`bottom-gradient-${i}`} x1="0" y1="0.45" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2b0d3e" stopOpacity="0" />
                    <stop offset="65%" stopColor="#2b0d3e" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#2b0d3e" stopOpacity="0.98" />
                  </linearGradient>
                </defs>

                {/* Scalloped Arch Clipped Content */}
                <g clipPath={`url(#arch-clip-${i})`}>
                  {/* Photo with zoom on hover */}
                  <image
                    href={item.image}
                    x="0"
                    y="0"
                    width="389"
                    height="375"
                    preserveAspectRatio="xMidYMid slice"
                    className="transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{ transformOrigin: "50% 50%" }}
                  />

                  {/* Dark violet gradient overlay at bottom matching Figma Rectangle 50 */}
                  <rect
                    x="0"
                    y="0"
                    width="389"
                    height="375"
                    fill={`url(#bottom-gradient-${i})`}
                  />

                  {/* Title centered inside bottom curve */}
                  <text
                    x="194.5"
                    y="318"
                    textAnchor="middle"
                    fill="#ffffff"
                    style={{ fontFamily: "var(--font-display)" }}
                    fontSize="54"
                    fontWeight="700"
                    letterSpacing="-0.8"
                    className="transition-all duration-300 group-hover:fill-[#fff6e6] drop-shadow-md select-none"
                  >
                    {item.label}
                  </text>
                </g>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
