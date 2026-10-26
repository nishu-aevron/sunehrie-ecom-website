"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAX_COMPARE, useShop } from "@/context/ShopContext";
import { catalog, colourLabel, discountPct, inr, mrpOf, priceOf, type Product } from "@/data/catalog";

type Row = { label: string; value: (p: Product) => string; render?: (p: Product, all: Product[]) => React.ReactNode };

const gstOf = (p: Product) => Math.round((priceOf(p) * 3) / 103);
const topRated = (p: Product, all: Product[]) => all.length > 1 && p.rating === Math.max(...all.map((x) => x.rating));

const sections: { title: string; rows: Row[] }[] = [
  {
    title: "At a glance",
    rows: [
      { label: "Price (incl. taxes)", value: (p) => inr(priceOf(p)), render: (p) => <span className="font-extrabold">{inr(priceOf(p))}</span> },
      {
        label: "Customer rating",
        value: (p) => `${p.rating} (${p.reviews})`,
        render: (p, all) => (
          <span className="flex flex-wrap items-center gap-2">
            <span>
              <span className="text-gold">★</span> {p.rating} <span className="text-[#6b6673]">({p.reviews})</span>
            </span>
            {topRated(p, all) && <span className="rounded-[50px] bg-[#f6fef9] px-2 py-0.5 text-[11px] font-semibold text-[#067647]">Top rated</span>}
          </span>
        ),
      },
      {
        label: "Availability",
        value: (p) => (p.inStock ? "In stock" : "Out of stock"),
        render: (p) => <span className={p.inStock ? "font-semibold text-[#067647]" : "text-[#6b6673]"}>{p.inStock ? "In stock" : "Out of stock"}</span>,
      },
      { label: "Delivery", value: (p) => (p.inStock ? "Ships in 3–5 days" : "Made to order · 10–14 days") },
      { label: "Returns", value: () => "48-hour return & exchange" },
    ],
  },
  {
    title: "Metal details",
    rows: [
      { label: "Metal", value: () => "Gold" },
      { label: "Karatage", value: (p) => Object.keys(p.prices).join(", ") },
      { label: "Material colour", value: (p) => p.colours.map((c) => colourLabel[c]).join(", ") },
      { label: "Net weight", value: (p) => `${p.netWeight} g` },
      { label: "Gross weight", value: (p) => `${p.grossWeight} g` },
    ],
  },
  {
    title: "Diamond details",
    rows: [
      { label: "Diamond type", value: (p) => (p.diamondCt > 0 ? "Natural diamond" : "—") },
      { label: "Total diamond weight", value: (p) => (p.diamondCt > 0 ? `${p.diamondCt.toFixed(2)} ct` : "—") },
      { label: "Certification", value: (p) => (p.diamondCt > 0 ? "IGI certified · BIS hallmark" : "BIS hallmark") },
    ],
  },
  {
    title: "General details",
    rows: [
      { label: "Jewellery type", value: (p) => p.category },
      { label: "Occasion", value: (p) => p.occasion },
      { label: "Available sizes", value: (p) => (p.sizes ? `${p.sizes[0]}–${p.sizes[p.sizes.length - 1]}` : "Free size") },
      { label: "Country of origin", value: () => "India" },
    ],
  },
  {
    title: "Price breakup",
    rows: [
      { label: "Gold, diamonds & making", value: (p) => inr(priceOf(p) - gstOf(p)) },
      { label: "GST (3%)", value: (p) => inr(gstOf(p)) },
      { label: "Total", value: (p) => inr(priceOf(p)), render: (p) => <span className="font-extrabold">{inr(priceOf(p))}</span> },
    ],
  },
];

const spec = (p: Product) => `${p.defaultPurity} ${colourLabel[p.defaultColour]}${p.diamondCt > 0 ? ` · ${p.diamondCt.toFixed(2)} ct` : ""}`;

export default function ComparePage() {
  const { compare, toggleCompare, isInCompare, addToCart, showToast, openCompare } = useShop();
  const [highlight, setHighlight] = useState(true);
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const slots = MAX_COMPARE - compare.length;
  const cols = `minmax(150px,220px) repeat(${MAX_COMPARE}, minmax(220px,1fr))`;
  const more = catalog.filter((p) => !isInCompare(p.slug)).slice(0, 4);

  const add = (p: Product) => {
    addToCart(p);
    showToast(`${p.name} added to bag`);
  };
  const toggleSection = (t: string) =>
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-purple-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-[72px] lg:py-[52px]">
          <div className="flex flex-col items-start gap-3.5">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[#6b5b75]">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Compare Products</span>
            </nav>
            <h1 className="font-seasons text-[38px] leading-[1.12] text-ink sm:text-[48px] lg:text-[60px]">Compare Products</h1>
            <p className="max-w-[620px] text-[15px] leading-[1.45] text-[#6b5b75] sm:text-[17px]">
              Add up to four pieces and review metal, diamond and pricing side by side.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <label className="flex cursor-pointer items-center gap-2.5 text-[14px] font-semibold text-ink">
              <input type="checkbox" checked={highlight} onChange={(e) => setHighlight(e.target.checked)} className="peer sr-only" />
              <span className="relative h-6 w-11 rounded-full bg-[#d6cfdc] transition-colors peer-checked:bg-purple peer-focus-visible:outline-2 peer-focus-visible:outline-purple after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
              Highlight differences
            </label>
            <span className="text-[14px] font-medium text-[#6b5b75]">
              {compare.length} of {MAX_COMPARE} products
            </span>
            {compare.length > 0 && (
              <button type="button" onClick={() => compare.forEach(toggleCompare)} className="cursor-pointer text-[14px] font-semibold text-purple underline-offset-4 hover:underline">
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 lg:px-[72px] lg:py-14">
        {compare.length === 0 && (
          <p className="mb-6 rounded-[16px] bg-[#f8f7f9] p-5 text-center text-[14px] text-[#6b6673]">
            Nothing to compare yet. Add pieces from any product card, or pick from the suggestions below.
          </p>
        )}
        <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[1020px]" role="table" aria-label="Product comparison">
            {/* Product header row */}
            <div className="grid gap-4 pb-6" style={{ gridTemplateColumns: cols }} role="row">
              <div className="flex flex-col justify-end gap-2 pb-2" role="columnheader">
                <span className="font-seasons text-[22px] text-ink">Products</span>
                {highlight && (
                  <span className="flex items-center gap-2 text-[12px] font-medium text-[#6b6673]">
                    <span className="size-2 rounded-full bg-gold" aria-hidden />
                    Differences highlighted
                  </span>
                )}
              </div>
              {compare.map((p) => (
                <div key={p.slug} className="flex flex-col gap-2" role="columnheader">
                  <div className="relative h-[230px] overflow-hidden rounded-[16px] bg-[#f8f7f9]">
                    <Link href={`/products/${p.slug}`} aria-label={p.name}>
                      <Image src={p.image} alt="" fill sizes="280px" className="object-contain p-4 mix-blend-multiply" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleCompare(p)}
                      aria-label={`Remove ${p.name} from compare`}
                      className="absolute top-3 right-3 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white text-[18px] leading-none text-ink shadow-sm transition-colors hover:text-purple"
                    >
                      ×
                    </button>
                  </div>
                  <Link href={`/products/${p.slug}`} className="mt-1 text-[15px] font-semibold text-ink hover:text-purple">
                    {p.name}
                  </Link>
                  <span className="text-[12px] font-medium text-[#6b6673]">{spec(p)}</span>
                  <span className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[19px] font-extrabold text-ink">{inr(priceOf(p))}</span>
                    <span className="text-[13px] text-[#a8a3b0] line-through">{inr(mrpOf(p))}</span>
                    <span className="text-[13px] font-semibold text-[#067647]">{discountPct(p)}% off</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => add(p)}
                    disabled={!p.inStock}
                    className="mt-1 h-11 cursor-pointer rounded-[50px] bg-purple text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Add to cart
                  </button>
                </div>
              ))}
              {Array.from({ length: slots }).map((_, i) => (
                <div key={`slot-${i}`} role="columnheader">
                  <button
                    type="button"
                    onClick={() => openCompare()}
                    className="flex h-[230px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[16px] border-[1.5px] border-dashed border-[#d6cfdc] text-center transition-colors hover:border-purple hover:bg-purple-10"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-purple-10 text-[22px] text-purple" aria-hidden>
                      +
                    </span>
                    <span className="text-[14px] font-semibold text-ink">Add a product</span>
                    <span className="text-[12px] font-semibold text-purple">Browse products</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Sections */}
            {sections.map((s) => {
              const open = !closed.has(s.title);
              return (
                <div key={s.title} className="border-t border-[#e8e5eb]" role="rowgroup">
                  <button
                    type="button"
                    onClick={() => toggleSection(s.title)}
                    aria-expanded={open}
                    className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
                  >
                    <span className="font-seasons text-[22px] text-ink">{s.title}</span>
                    <span className="w-5 text-center text-[22px] font-bold text-purple" aria-hidden>
                      {open ? "–" : "+"}
                    </span>
                  </button>
                  {open &&
                    s.rows.map((r) => {
                      const differs = compare.length > 1 && new Set(compare.map(r.value)).size > 1;
                      const marked = highlight && differs;
                      return (
                        <div
                          key={r.label}
                          role="row"
                          className={`grid min-h-[54px] items-center gap-4 border-b border-[#e8e5eb] px-4 text-[14px] text-ink ${marked ? "bg-[#fdf8ec]" : "bg-[#fcfafd]"}`}
                          style={{ gridTemplateColumns: cols }}
                        >
                          <span role="rowheader" className="flex items-center gap-2 py-3 font-medium text-[#6b6673]">
                            {marked && <span className="size-2 shrink-0 rounded-full bg-gold" aria-label="Differs" />}
                            {r.label}
                          </span>
                          {compare.map((p) => (
                            <span key={p.slug} role="cell" className="py-3">
                              {r.render ? r.render(p, compare) : r.value(p)}
                            </span>
                          ))}
                          {Array.from({ length: slots }).map((_, i) => (
                            <span key={i} role="cell" className="py-3 text-[#d6cfdc]">
                              —
                            </span>
                          ))}
                        </div>
                      );
                    })}
                </div>
              );
            })}

            {/* Action row */}
            {compare.length > 0 && (
              <div className="grid gap-4 border-t border-[#e8e5eb] pt-6" style={{ gridTemplateColumns: cols }} role="row">
                <span />
                {compare.map((p) => (
                  <div key={p.slug} className="flex flex-col gap-2" role="cell">
                    <button
                      type="button"
                      onClick={() => add(p)}
                      disabled={!p.inStock}
                      className="h-11 cursor-pointer rounded-[50px] bg-purple text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Add to cart
                    </button>
                    <Link href={`/products/${p.slug}`} className="flex h-11 items-center justify-center rounded-[50px] border border-ink text-[14px] font-semibold text-ink hover:bg-purple-10">
                      View details
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Add more */}
      {more.length > 0 && slots > 0 && (
        <section className="bg-[#f8f7f9]">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-[72px] lg:py-16">
            <div className="flex flex-wrap items-end justify-between gap-3 pb-6">
              <h2 className="font-seasons text-[28px] text-ink sm:text-[36px]">Add More to Compare</h2>
              <button type="button" onClick={() => openCompare()} className="cursor-pointer text-[14px] font-semibold text-purple hover:underline">
                Browse all products →
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {more.map((p) => (
                <div key={p.slug} className="flex flex-col gap-2 rounded-[16px] bg-white p-3 sm:p-4">
                  <Link href={`/products/${p.slug}`} className="relative aspect-square overflow-hidden rounded-[12px] bg-[#f8f7f9]">
                    <Image src={p.image} alt={p.name} fill sizes="(min-width: 1024px) 300px, 50vw" className="object-contain p-3 mix-blend-multiply" />
                  </Link>
                  <span className="text-[14px] font-semibold text-ink">{p.name}</span>
                  <span className="text-[12px] text-[#6b6673]">{spec(p)}</span>
                  <span className="text-[16px] font-extrabold text-ink">{inr(priceOf(p))}</span>
                  <button
                    type="button"
                    onClick={() => toggleCompare(p)}
                    className="mt-auto h-10 cursor-pointer rounded-[50px] border border-purple text-[13px] font-semibold text-purple transition-colors hover:bg-purple hover:text-white"
                  >
                    + Add to compare
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
