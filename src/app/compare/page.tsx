"use client";

import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import { catalog, colourLabel, discountPct, inr, mrpOf, priceOf, type Product } from "@/data/catalog";

const MAX_SLOTS = 4;

const attributes: { label: string; render: (p: Product) => React.ReactNode }[] = [
  { label: "Price", render: (p) => <span className="font-bold">{inr(priceOf(p))}</span> },
  { label: "MRP", render: (p) => <span className="text-ink-50 line-through">{inr(mrpOf(p))}</span> },
  { label: "Discount", render: (p) => <span className="text-success font-semibold">{discountPct(p)}% off</span> },
  { label: "Purity", render: (p) => Object.keys(p.prices).join(", ") },
  { label: "Metal Colours", render: (p) => p.colours.map((c) => colourLabel[c]).join(", ") },
  { label: "Diamond Carat", render: (p) => `${p.diamondCt.toFixed(2)} ct` },
  { label: "Net Weight", render: (p) => `${p.netWeight} g` },
  { label: "Gross Weight", render: (p) => `${p.grossWeight} g` },
  { label: "Rating", render: (p) => `${p.rating} ★ (${p.reviews})` },
  { label: "Category", render: (p) => p.category },
  { label: "Availability", render: (p) => <span className={p.inStock ? "text-success" : "text-ink-50"}>{p.inStock ? "In Stock" : "Out of Stock"}</span> },
];

export default function ComparePage() {
  const { compare, toggleCompare, addToCart, showToast } = useShop();
  const emptySlots = MAX_SLOTS - compare.length;

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="page-x pt-7 pb-10 lg:px-[72px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] leading-4 text-ink-50">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter">/</span>
          <span className="text-ink font-medium">Compare Products</span>
        </nav>
        <h1 className="mt-10 font-seasons text-[44px] leading-[57px] font-bold tracking-[-1.6px] text-purple">
          Compare Products
        </h1>
        <p className="mt-2 text-[15px] text-ink-50">
          Compare up to {MAX_SLOTS} pieces side by side to find your perfect match.
        </p>
      </section>

      {compare.length === 0 ? (
        <section className="page-x flex flex-col items-center py-24 text-center lg:px-[72px]">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-purple-10">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple">
              <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-seasons text-[28px] font-bold text-purple">No products to compare</h2>
          <p className="mt-2 max-w-md text-[15px] text-ink-50">
            Browse our collection and add products to compare by clicking the compare icon on any product card.
          </p>
          <Link
            href="/collections"
            className="mt-8 inline-flex items-center rounded-full bg-purple px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Browse Collection
          </Link>
        </section>
      ) : (
        <section className="page-x overflow-x-auto pb-16 lg:px-[72px]">
          <div className="min-w-[800px]">
            {/* Product cards row */}
            <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${MAX_SLOTS}, 1fr)` }}>
              {compare.map((product) => (
                <div key={product.slug} className="rounded-2xl border border-purple-20 bg-white p-4">
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-purple-10">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="300px" />
                    <button
                      type="button"
                      onClick={() => toggleCompare(product)}
                      className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-white/80 text-ink-50 transition-colors hover:bg-white hover:text-purple"
                      aria-label={`Remove ${product.name} from compare`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-[14px] font-semibold text-ink truncate">{product.name}</h3>
                  <p className="mt-1 text-[16px] font-extrabold tracking-[-0.4px] text-ink">{inr(priceOf(product))}</p>
                  <button
                    type="button"
                    onClick={() => { addToCart(product); showToast(`${product.name} added to bag`); }}
                    className="mt-3 w-full rounded-full bg-purple py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-purple-deep"
                  >
                    Add to Bag
                  </button>
                </div>
              ))}
              {Array.from({ length: emptySlots }).map((_, i) => (
                <Link
                  key={`empty-${i}`}
                  href="/collections"
                  className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-purple-30 bg-purple-10/50 p-4 text-center transition-colors hover:border-purple hover:bg-purple-10"
                >
                  <div className="mb-3 flex size-12 items-center justify-center rounded-full border-2 border-dashed border-purple-30">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-50">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium text-purple-50">Add Product</span>
                </Link>
              ))}
            </div>

            {/* Attributes table */}
            <div className="mt-8 rounded-2xl border border-purple-20 overflow-hidden">
              {attributes.map((attr, idx) => (
                <div
                  key={attr.label}
                  className={`grid gap-5 px-5 py-4 ${idx % 2 === 0 ? "bg-white" : "bg-purple-10/30"} ${idx < attributes.length - 1 ? "border-b border-purple-20" : ""}`}
                  style={{ gridTemplateColumns: `160px repeat(${MAX_SLOTS}, 1fr)` }}
                >
                  <div className="text-[13px] font-semibold text-ink-50">{attr.label}</div>
                  {compare.map((product) => (
                    <div key={product.slug} className="text-[14px] text-ink">
                      {attr.render(product)}
                    </div>
                  ))}
                  {Array.from({ length: emptySlots }).map((_, i) => (
                    <div key={`empty-attr-${i}`} className="text-[14px] text-purple-30">—</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
