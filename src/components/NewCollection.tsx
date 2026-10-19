"use client";

import Image from "next/image";
import ProductCard from "./ProductCard";

const featuredProducts = [
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
  {
    image: "/figma/e54dfadbf794db896e55a8b0358a677ec4c6dba2.png",
    name: "Classic Diamond Gold Pendant",
    price: "₹1,44,538",
    originalPrice: "₹1,80,538",
    discount: "13% off",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
  },
  {
    image: "/figma/14a6a2d7a7eff6316c729a687a36e04b5558c8ba.png",
    name: "Classic Diamond Gold Ring",
    price: "₹1,25,120",
    originalPrice: "₹1,80,538",
    discount: "13% off",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
  },
];

export default function NewCollection() {
  return (
    <section className="section-padding bg-[#fcf9fd] relative" id="new-collection">
      <div className="container-main relative">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-start relative">
          {/* Left Column: Sticks smoothly while products on right scroll! */}
          <div className="lg:sticky lg:top-28 self-start pt-2 pb-4 relative overflow-visible">
            <div className="relative z-10">
              <div className="relative w-8 h-8 mb-3 text-[#7a3f91]">
                <Image src="/images/feather.svg" alt="" fill className="object-contain" />
              </div>

              <h2
                className="text-[32px] sm:text-[38px] font-bold text-[#7a3f91] tracking-tight leading-[1.1] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Featured New Collection
              </h2>

              <p
                className="text-[13px] sm:text-[14px] text-[#3d2c47] leading-relaxed mb-6 font-medium max-w-[340px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Strong enough for every day, precious enough to celebrate. Explore our
                real 9KT gold collection with natural diamonds.
              </p>

              <a
                href="#explore-new"
                className="inline-block px-8 py-2.5 rounded-full border-2 border-[#7a3f91] text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white text-[12px] sm:text-[13px] font-bold tracking-[1.5px] uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View All
              </a>
            </div>

            {/* Peacock Watermark SVG Illustration matching Figma positioning */}
            <div className="absolute -left-6 top-16 w-[340px] h-[440px] pointer-events-none opacity-[0.12] text-[#7a3f91] hidden lg:block -z-0">
              <Image src="/images/peacock.svg" alt="" fill className="object-contain object-left-top" />
            </div>
          </div>

          {/* Right Column: 2x3 Grid of 6 Product Cards that scroll alongside the sticky card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
