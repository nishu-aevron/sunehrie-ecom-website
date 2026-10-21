"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/Icon";
import { ArrowButton, Panel, SectionHeading, ViewAllLink } from "@/components/ui/primitives";
import { useShop } from "@/context/ShopContext";
import { catalog, priceOf, type Product } from "@/data/catalog";

const bySlug = (...slugs: string[]) => slugs.map((s) => catalog.find((p) => p.slug === s)!);

/* ------------------------------------------------------------------ 9KT Fine Gold */
export function FineGold() {
  const items = bySlug("diamond-gold-mangalsutra-pendant", "emerald-cut-mangalsutra-pendant", "classic-diamond-gold-pendant", "classic-diamond-gold-ring");
  return (
    <section className="page-x flex flex-col items-center gap-2.5 pt-[25px] pb-[50px]">
      <SectionHeading
        sparkle
        align="center"
        title="9KT Fine Gold"
        subtitle={
          <>
            Strong enough for every day, precious enough to celebrate. Explore our
            <br className="max-sm:hidden" /> real 9KT gold collection with natural diamonds.
          </>
        }
        className="pb-8"
      />
      <div className="grid w-full max-w-[1340px] grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      <div className="pt-[25px]">
        <ViewAllLink href="/collections?purity=9KT" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Best Sellers */
const tabs = [
  { label: "Best Seller", chip: "/img/home/chip-1.jpg", filter: (p: Product) => p.rating >= 4.8 },
  { label: "Shop in Budget", chip: "/img/home/chip-2.jpg", filter: (p: Product) => priceOf(p) < 90000 },
  { label: "Stunning Earrings", chip: "/img/home/chip-3.jpg", filter: (p: Product) => p.category === "Earrings" },
  { label: "Diamond Necklaces", chip: "/img/home/chip-3.jpg", filter: (p: Product) => p.category === "Necklaces" || p.category === "Mangalsutra" },
  { label: "Diamond Rings", chip: "/img/home/chip-3.jpg", filter: (p: Product) => p.category === "Rings" },
  { label: "Book a Visit", chip: "/img/home/chip-3.jpg", filter: null },
];

export function BestSellers() {
  const { openModal } = useShop();
  const [tab, setTab] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const items = catalog.filter(tabs[tab].filter ?? (() => true));

  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 338.75, behavior: "smooth" });

  return (
    <Panel className="flex flex-col gap-2.5 px-4 pt-[25px] pb-[50px] lg:px-[50px]">
      <div className="flex items-center justify-between gap-[35px] py-[15px]">
        <div role="tablist" className="no-scrollbar flex items-center gap-[35px] overflow-x-auto">
          {tabs.map((t, i) => {
            const active = i === tab;
            return (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => (t.filter ? setTab(i) : openModal("store"))}
                className="group flex shrink-0 cursor-pointer items-center gap-2.5"
              >
                <span className={`flex size-[35px] items-center justify-center rounded-[34px] border p-1 ${active ? "border-purple" : "border-transparent"}`}>
                  <span className="relative size-[30px] overflow-hidden rounded-full">
                    <Image src={t.chip} alt="" fill sizes="30px" className="object-cover" />
                  </span>
                </span>
                <span
                  className={`text-[18px] leading-[18px] font-medium tracking-[-0.8px] whitespace-nowrap transition-colors ${
                    active ? "border-b border-purple px-2.5 py-[15px] text-purple" : "py-3 text-purple-70 group-hover:text-purple"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex shrink-0 gap-[15px] p-2.5 max-md:hidden">
          <ArrowButton direction="left" onClick={() => scroll(-1)} label="Previous products" />
          <ArrowButton direction="right" onClick={() => scroll(1)} label="Next products" />
        </div>
      </div>

      <div className="flex gap-[15px]">
        <div className="relative flex w-[298.75px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-t from-ink-deep to-ink px-[25px] py-[50px] shadow-footer max-md:hidden">
          <span className="absolute -top-0 left-[209px] size-[140px] rounded-full bg-purple blur-[105px]" aria-hidden />
          <h3 className="relative font-seasons text-[55px] leading-[55px] font-bold tracking-[-0.8px] text-white">
            Best
            <br />
            Sellers
          </h3>
          <div className="relative flex flex-col gap-2.5">
            <p className="text-[13.1px] leading-[19.6px] font-medium tracking-[0.24px] text-white">
              Handpicked across karats and budgets — updated by our stylists every week.
            </p>
            <Link
              href="/collections?sort=best-selling"
              className="w-fit rounded-full bg-linear-to-b from-[#85439f] to-[#510d6c] px-6 py-2.5 text-[14px] leading-5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              View All
            </Link>
          </div>
        </div>
        <div ref={rail} className="no-scrollbar flex min-w-0 flex-1 snap-x gap-[15px] overflow-x-auto">
          {items.map((p) => (
            <div key={p.slug} className="w-[323.75px] shrink-0 snap-start max-sm:w-[80vw]">
              <ProductCard product={p} badge="BESTSELLER" />
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ Featured New Collection */
export function FeaturedCollection() {
  const items = bySlug(
    "diamond-gold-mangalsutra-pendant",
    "emerald-cut-mangalsutra-pendant",
    "classic-diamond-gold-pendant",
    "classic-diamond-gold-ring",
    "sapphire-halo-diamond-ring",
    "solitaire-heart-diamond-pendant",
  );
  return (
    <Panel className="flex flex-col gap-2.5 overflow-hidden px-4 pt-[25px] pb-[50px] lg:flex-row lg:justify-center lg:px-[50px]">
      <div className="relative flex flex-col gap-[15px] py-8 lg:w-[616px] lg:shrink-0">
        <div className="relative z-10 flex max-w-[468px] flex-col gap-2.5">
          <Icon src="/icons/home/phoenix.svg" size={[38, 88]} />
          <h2 className="font-seasons text-[32px] leading-none font-bold tracking-[-0.8px] text-purple sm:text-[40px]">Featured New Collection</h2>
          <p className="text-[13.1px] leading-[19.6px] font-medium tracking-[0.24px] text-[#232323]">
            Strong enough for every day, precious enough to celebrate. Explore our real 9KT gold collection with natural diamonds.
          </p>
        </div>
        <div className="relative z-10 pt-[25px]">
          <ViewAllLink href="/collections?sort=new" />
        </div>
        <Icon src="/icons/home/phoenix-watermark.svg" size={[319, 743]} className="pointer-events-none absolute top-[277px] left-[-91px] max-lg:hidden" />
      </div>
      <div className="grid gap-[15px] sm:grid-cols-2 lg:w-[689px] lg:px-[13.25px]">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </Panel>
  );
}
