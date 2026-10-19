"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const categoryChips = [
  {
    name: "Best Seller",
    image: "/figma/da96f0ec0b78acf333f8a1c9d41575471f236e1b.png",
  },
  {
    name: "Shop in Budget",
    image: "/figma/d6186ab54eba6bc50032a34f1c551262ff22bb02.png",
  },
  {
    name: "Stunning Earrings",
    image: "/figma/456e661d3ee8ac7ce11a0257eefbfd2312030ffc.png",
  },
  {
    name: "Diamond Necklaces",
    image: "/figma/456e661d3ee8ac7ce11a0257eefbfd2312030ffc.png",
  },
  {
    name: "Diamond Rings",
    image: "/figma/456e661d3ee8ac7ce11a0257eefbfd2312030ffc.png",
  },
  {
    name: "Book a Visit",
    image: "/figma/456e661d3ee8ac7ce11a0257eefbfd2312030ffc.png",
  },
];

const bestSellerProducts = [
  {
    image: "/figma/e54dfadbf794db896e55a8b0358a677ec4c6dba2.png",
    name: "Diamond Gold Mangalsutra Pendant",
    price: "₹1,44,538",
    originalPrice: "₹1,80,538",
    discount: "13% off",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
  },
  {
    image: "/figma/14a6a2d7a7eff6316c729a687a36e04b5558c8ba.png",
    name: "Diamond Gold Mangalsutra Pendant",
    price: "₹1,93,100",
    originalPrice: "₹2,20,538",
    discount: "13% off",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
  },
  {
    image: "/figma/42b05d433f1d5a31ce9357e86a19d2b549506694.png",
    name: "Classic Diamond Gold Pendant",
    price: "₹1,44,538",
    originalPrice: "₹1,80,538",
    discount: "13% off",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
  },
];

export default function BestSellers() {
  const [selectedChip, setSelectedChip] = useState("Best Seller");
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-white" ref={ref} id="best-sellers">
      <div className="container-main">
        {/* Top Horizontal Row: Category Chips from Figma Frame 82 */}
        <div className="mb-10 sm:mb-14 overflow-x-auto nav-scroll pb-2">
          <div className="flex items-center gap-3 sm:gap-4 min-w-max">
            {categoryChips.map((chip) => (
              <button
                key={chip.name}
                onClick={() => setSelectedChip(chip.name)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 ${
                  selectedChip === chip.name
                    ? "border-[#7a3f91] bg-[#f6eff9] shadow-sm text-[#7a3f91]"
                    : "border-[#e8dcee] bg-white hover:border-[#cca338] text-[#2b0d3e]"
                }`}
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#e8dcee] flex-shrink-0">
                  <Image src={chip.image} alt={chip.name} fill className="object-cover" />
                </div>
                <span
                  className="text-[13px] sm:text-[14px] font-semibold whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {chip.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 4 Layout: Left Heading Block + 3 Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Left Block matching Figma Container 93:11058 */}
          <div className="bg-[#2b0d3e] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between text-white relative overflow-hidden shadow-lg">
            {/* Background subtle gold/purple glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#7a3f91]/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span
                className="text-[11px] font-bold text-[#cca338] uppercase tracking-[2px] block mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Weekly Selection
              </span>
              <h3
                className="text-[44px] sm:text-[52px] font-bold leading-[1.05] tracking-tight mb-4 text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Best
                <br />
                Sellers
              </h3>
              <p
                className="text-[13px] sm:text-[14px] text-white/80 leading-relaxed font-normal max-w-[260px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Handpicked across karats and budgets — updated by our stylists every
                week.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <a
                href="#new-collection"
                className="inline-block px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#2b0d3e] text-[12px] sm:text-[13px] font-bold tracking-[1.5px] uppercase transition-all duration-300 shadow-md hover:scale-105"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View All
              </a>
            </div>
          </div>

          {/* Right: 3 Product Cards from Figma */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {bestSellerProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            className="w-10 h-10 rounded-full border-2 border-[#7a3f91]/30 flex items-center justify-center text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white hover:border-[#7a3f91] transition-all duration-300 active:scale-90"
            aria-label="Previous best sellers"
          >
            <ChevronLeft size={20} />
          </button>
          <a
            href="#new-collection"
            className="px-8 py-2.5 rounded-full border-2 border-[#7a3f91] text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white text-[12px] sm:text-[13px] font-bold tracking-[1.5px] uppercase transition-all duration-300 shadow-sm hover:scale-105"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore Collection
          </a>
          <button
            className="w-10 h-10 rounded-full border-2 border-[#7a3f91]/30 flex items-center justify-center text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white hover:border-[#7a3f91] transition-all duration-300 active:scale-90"
            aria-label="Next best sellers"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
