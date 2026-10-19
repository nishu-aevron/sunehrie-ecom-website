"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Sparkles,
  Gem,
  Coins,
  CircleDot,
  Layers,
  Gift,
  Tag,
  ArrowRight,
} from "lucide-react";

interface MegaItem {
  title: string;
  items: { name: string; href: string }[];
}

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const goldCategories: MegaItem[] = [
    {
      title: "Category",
      items: [
        { name: "9KT Gold", href: "#" },
        { name: "14KT Gold", href: "#" },
        { name: "18KT Gold", href: "#" },
        { name: "All Gold Jewelry", href: "#" },
      ],
    },
    {
      title: "By Color",
      items: [
        { name: "Yellow Gold", href: "#" },
        { name: "Rose Gold", href: "#" },
        { name: "White Gold", href: "#" },
      ],
    },
    {
      title: "Occasions",
      items: [
        { name: "Bridal Wear", href: "#" },
        { name: "Gifts for Her", href: "#" },
        { name: "Vacation Vibe", href: "#" },
        { name: "Daily Wear", href: "#" },
        { name: "Party Wear", href: "#" },
      ],
    },
  ];

  const diamondCategories: MegaItem[] = [
    {
      title: "Category",
      items: [
        { name: "Diamond Rings", href: "#" },
        { name: "Diamond Earrings", href: "#" },
        { name: "Diamond Necklaces", href: "#" },
        { name: "IGI Certified Natural", href: "#" },
      ],
    },
    {
      title: "By Style",
      items: [
        { name: "Solitaires", href: "#" },
        { name: "Daily Wear Diamonds", href: "#" },
        { name: "Rose Gold Diamonds", href: "#" },
        { name: "Cocktail Jewellery", href: "#" },
      ],
    },
    {
      title: "Occasions",
      items: [
        { name: "Engagement", href: "#" },
        { name: "Anniversaries", href: "#" },
        { name: "Everyday Luxury", href: "#" },
        { name: "Red Carpet Gala", href: "#" },
      ],
    },
  ];

  const moreJewelleryCategories: MegaItem[] = [
    {
      title: "All Jewelry",
      items: [
        { name: "Mangalsutra", href: "#" },
        { name: "Pendants", href: "#" },
        { name: "Nose Pins", href: "#" },
        { name: "Gold Chains", href: "#" },
        { name: "Lucky Charms", href: "#" },
        { name: "Mangalsutra Pendant", href: "#" },
        { name: "Choker Necklace", href: "#" },
        { name: "Bridal Necklace Set", href: "#" },
        { name: "Pendant Earring Set", href: "#" },
      ],
    },
    {
      title: "Collections",
      items: [
        { name: "The Heritage Royal", href: "#" },
        { name: "Modern Minimalist", href: "#" },
        { name: "Floral Bloom 2026", href: "#" },
        { name: "Celebrity Picks", href: "#" },
      ],
    },
  ];

  return (
    <nav className="relative bg-white border-b border-[#ece3f0] hidden lg:block z-40">
      <div className="container-main">
        <ul className="flex items-center justify-between gap-1 py-1.5">
          {/* 1. Gold (Mega Menu) */}
          <li
            className="relative group"
            onMouseEnter={() => setActiveMenu("gold")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a
              href="#gold"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Coins size={16} className="text-[#cca338] transition-transform group-hover:scale-110" />
              <span>Gold</span>
              <ChevronDown
                size={14}
                className="text-[#8e7a9b] group-hover:text-[#7a3f91] group-hover:rotate-180 transition-transform duration-300"
              />
            </a>

            {/* Mega Dropdown */}
            <div className="absolute left-0 top-full pt-2 w-[780px] pointer-events-none group-hover:pointer-events-auto opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(43,13,62,0.14)] border border-[#ece3f0] grid grid-cols-4 gap-6">
                {goldCategories.map((col, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4
                      className="text-[13px] font-bold text-[#7a3f91] tracking-[1px] uppercase border-b border-[#f0e6f5] pb-1.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {col.title}
                    </h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.href}
                            className="text-[13px] text-[#4a2d5e] hover:text-[#7a3f91] hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-150"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#cca338] opacity-0 group-hover:opacity-100 transition-opacity" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Promo Card from Figma */}
                <div className="relative rounded-xl overflow-hidden bg-[#240632] p-4 flex flex-col justify-end text-white group/card min-h-[220px]">
                  <Image
                    src="/figma/e4c9bb2368fc49f7e16c5b2c4d7f415263419067.png"
                    alt="Explore New Collection"
                    fill
                    className="object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#cca338] bg-[#240632]/80 px-2 py-0.5 rounded">
                      Featured
                    </span>
                    <h5
                      className="text-[18px] font-bold mt-1 text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Explore New Collection
                    </h5>
                    <a
                      href="#new-collection"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#7a3f91] hover:bg-[#cca338] px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      <span>View All</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* 2. Diamond (Mega Menu) */}
          <li
            className="relative group"
            onMouseEnter={() => setActiveMenu("diamond")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a
              href="#diamond"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Gem size={16} className="text-[#7a3f91] transition-transform group-hover:scale-110" />
              <span>Diamond</span>
              <ChevronDown
                size={14}
                className="text-[#8e7a9b] group-hover:text-[#7a3f91] group-hover:rotate-180 transition-transform duration-300"
              />
            </a>

            {/* Mega Dropdown */}
            <div className="absolute left-0 top-full pt-2 w-[780px] pointer-events-none group-hover:pointer-events-auto opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(43,13,62,0.14)] border border-[#ece3f0] grid grid-cols-4 gap-6">
                {diamondCategories.map((col, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4
                      className="text-[13px] font-bold text-[#7a3f91] tracking-[1px] uppercase border-b border-[#f0e6f5] pb-1.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {col.title}
                    </h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.href}
                            className="text-[13px] text-[#4a2d5e] hover:text-[#7a3f91] hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-150"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Promo Card */}
                <div className="relative rounded-xl overflow-hidden bg-[#240632] p-4 flex flex-col justify-end text-white group/card min-h-[220px]">
                  <Image
                    src="/figma/e4c9bb2368fc49f7e16c5b2c4d7f415263419067.png"
                    alt="Natural Diamonds"
                    fill
                    className="object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#cca338] bg-[#240632]/80 px-2 py-0.5 rounded">
                      Certified
                    </span>
                    <h5
                      className="text-[18px] font-bold mt-1 text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Explore New Collection
                    </h5>
                    <a
                      href="#new-collection"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#7a3f91] hover:bg-[#cca338] px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      <span>View All</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* 3. Rings */}
          <li>
            <a
              href="#rings"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <CircleDot size={16} className="text-[#7a3f91]" />
              <span>Rings</span>
            </a>
          </li>

          {/* 4. Earrings */}
          <li>
            <a
              href="#earrings"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Sparkles size={16} className="text-[#cca338]" />
              <span>Earrings</span>
            </a>
          </li>

          {/* 5. Bracelets & Bangles */}
          <li>
            <a
              href="#bangles"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Layers size={16} className="text-[#7a3f91]" />
              <span>Bracelets & Bangles</span>
            </a>
          </li>

          {/* 6. More Jewellery (Mega Menu) */}
          <li
            className="relative group"
            onMouseEnter={() => setActiveMenu("more")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a
              href="#more"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Sparkles size={16} className="text-[#cca338]" />
              <span>More Jewellery</span>
              <ChevronDown
                size={14}
                className="text-[#8e7a9b] group-hover:text-[#7a3f91] group-hover:rotate-180 transition-transform duration-300"
              />
            </a>

            {/* Mega Dropdown */}
            <div className="absolute right-0 top-full pt-2 w-[720px] pointer-events-none group-hover:pointer-events-auto opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(43,13,62,0.14)] border border-[#ece3f0] grid grid-cols-3 gap-6">
                <div className="space-y-3 col-span-2">
                  <h4
                    className="text-[13px] font-bold text-[#7a3f91] tracking-[1px] uppercase border-b border-[#f0e6f5] pb-1.5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    All Jewelry Categories
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {moreJewelleryCategories[0].items.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="text-[13px] text-[#4a2d5e] hover:text-[#7a3f91] hover:translate-x-1 py-1 transition-all duration-150"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Promo Card */}
                <div className="relative rounded-xl overflow-hidden bg-[#240632] p-4 flex flex-col justify-end text-white group/card min-h-[220px]">
                  <Image
                    src="/figma/e4c9bb2368fc49f7e16c5b2c4d7f415263419067.png"
                    alt="All Jewelry"
                    fill
                    className="object-cover opacity-60 group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#cca338] bg-[#240632]/80 px-2 py-0.5 rounded">
                      Bridal & Daily
                    </span>
                    <h5
                      className="text-[18px] font-bold mt-1 text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Explore New Collection
                    </h5>
                    <a
                      href="#new-collection"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#7a3f91] hover:bg-[#cca338] px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      <span>View All</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* 7. Gifting */}
          <li>
            <a
              href="#gifting"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-medium text-[#2b0d3e] hover:text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Gift size={16} className="text-[#7a3f91]" />
              <span>Gifting</span>
            </a>
          </li>

          {/* 8. Offers */}
          <li>
            <a
              href="#offers"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-[14px] font-semibold text-[#7a3f91] hover:bg-[#f6eff9] transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Tag size={16} className="text-[#cca338]" />
              <span>Offers</span>
              <span className="bg-[#cca338] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                Sale
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
