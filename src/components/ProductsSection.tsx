"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const products = [
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
  {
    image: "/figma/2f6c61d4e49524cbcbd73963b16080e0eee1a9eb.png",
    name: "Classic Diamond Gold Ring",
    price: "₹1,25,120",
    originalPrice: "₹1,80,538",
    discount: "13% off",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
  },
];

export default function ProductsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="relative bg-[#f4edf8] section-padding overflow-hidden" ref={ref} id="gold-collection">
      <div className="container-main relative z-10">
        {/* Header - matching Figma Section 3 */}
        <div className="text-center mb-8 sm:mb-10 animate-on-scroll">
          <h2
            className="text-[32px] sm:text-[38px] lg:text-[40px] font-bold text-[#7a3f91] leading-[1.1] mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            9KT Fine Gold
          </h2>
          <p
            className="text-[13px] sm:text-[14px] text-[#402551] max-w-[500px] mx-auto font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Strong enough for every day, precious enough to celebrate. Explore our
            real 9KT gold collection with natural diamonds.
          </p>
        </div>

        {/* 4 Product Cards Grid matching Figma Frame */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, i) => (
            <div key={i} className={`animate-on-scroll delay-${i + 1}`}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 animate-on-scroll">
          <button
            className="w-10 h-10 rounded-full border-2 border-[#7a3f91]/30 flex items-center justify-center text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white hover:border-[#7a3f91] transition-all duration-300 active:scale-90"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>
          <a
            href="#new-collection"
            className="px-8 py-2.5 rounded-full border-2 border-[#7a3f91] text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white text-[12px] sm:text-[13px] font-bold tracking-[1.5px] uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View All
          </a>
          <button
            className="w-10 h-10 rounded-full border-2 border-[#7a3f91]/30 flex items-center justify-center text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white hover:border-[#7a3f91] transition-all duration-300 active:scale-90"
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
