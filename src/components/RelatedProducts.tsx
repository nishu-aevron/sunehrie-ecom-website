"use client";

import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { ArrowButton } from "@/components/ui/primitives";
import type { Product } from "@/data/catalog";

/** Lilac product rail — "You Might Also Like" (PLP) and "Similar Pieces" (PDP). */
export default function RelatedProducts({ products, title, eyebrow }: { products: Product[]; title: string; eyebrow?: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 338.75, behavior: "smooth" });
  const centered = Boolean(eyebrow);

  return (
    <section className="bg-purple-10">
      <div className="page-x flex flex-col gap-2.5 pt-[20px] pb-[30px] sm:pt-[25px] sm:pb-[50px]">
        <div className={`flex items-center ${centered ? "justify-center" : "justify-between py-[15px]"}`}>
          {centered ? (
            <div className="flex flex-col items-center gap-2.5 pb-8 text-center">
              <p className="text-[13.1px] leading-[19.6px] font-medium tracking-[0.24px] text-[#232323]">{eyebrow}</p>
              <h2 className="font-seasons text-[26px] leading-none font-bold tracking-[-0.8px] text-purple sm:text-[32px] lg:text-[40px]">{title}</h2>
            </div>
          ) : (
            <>
              <h2 className="font-seasons text-[26px] leading-none font-bold tracking-[-0.8px] text-purple sm:text-[32px] lg:text-[40px]">{title}</h2>
              <div className="flex gap-[15px] p-2.5">
                <ArrowButton direction="left" onClick={() => scroll(-1)} label="Previous products" />
                <ArrowButton direction="right" onClick={() => scroll(1)} label="Next products" />
              </div>
            </>
          )}
        </div>
        <div ref={rail} className="no-scrollbar flex snap-x gap-[15px] overflow-x-auto">
          {products.map((p) => (
            <div key={p.slug} className="w-[calc((100%-15px)/2)] min-w-[170px] shrink-0 snap-start sm:w-[calc((100%-45px)/4)] sm:min-w-[280px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
