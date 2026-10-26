"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Dialog from "./Dialog";
import { MAX_COMPARE, useShop } from "@/context/ShopContext";
import { catalog, colourLabel, inr, priceOf, type Product } from "@/data/catalog";

type Tab = "wishlist" | "recent" | "all";
const tabs: { id: Tab; label: string }[] = [
  { id: "wishlist", label: "Wishlist" },
  { id: "recent", label: "Recently viewed" },
  { id: "all", label: "All Products" },
];

export default function CompareModal() {
  const { closeModal, compare, toggleCompare, isInCompare, wishlist, recentlyViewed } = useShop();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>(recentlyViewed.length ? "recent" : "all");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const source: Product[] = tab === "wishlist" ? wishlist : tab === "recent" ? recentlyViewed : catalog;
    const q = query.trim().toLowerCase();
    return q ? source.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)) : source;
  }, [tab, wishlist, recentlyViewed, query]);

  const left = MAX_COMPARE - compare.length;
  const empty = tab === "wishlist" ? "Your wishlist is empty." : tab === "recent" ? "Pieces you view will show up here." : "No pieces match your search.";

  return (
    <Dialog
      label="Add to compare"
      onClose={closeModal}
      className="flex w-[720px] max-w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_0_rgba(0,0,0,0.35)]"
    >
      <div className="flex justify-between pt-7 pr-6 pb-5 pl-8">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-playfair text-[28px] leading-[37.32px] font-bold text-[#1d1a20]">Add to Compare</h2>
          <p className="text-[14px] leading-[19.12px] font-medium text-[#6b6673]">
            {left === 0
              ? "All slots filled. Remove a piece to swap it out."
              : `${left} slot${left === 1 ? "" : "s"} left. Choose a piece to compare with your selection.`}
          </p>
        </div>
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-[#f8f7f9] text-[22px] leading-[30px] font-medium text-[#1d1a20] transition-colors hover:bg-purple-10"
        >
          ×
        </button>
      </div>

      <div className="px-8 pb-4">
        <label className="flex items-center gap-2.5 rounded-xl border border-[#e8e5eb] bg-[#f8f7f9] px-[18px] py-3.5 focus-within:border-purple">
          <span aria-hidden className="text-[16px] leading-[21.86px] font-medium text-[#6b6673]">
            ⌕
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or SKU"
            className="w-full bg-transparent text-[14px] leading-[19.12px] font-medium text-[#1d1a20] outline-none placeholder:text-[#6b6673]"
          />
        </label>
      </div>

      <div role="tablist" className="flex gap-2 px-8 pb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`cursor-pointer rounded-[50px] px-4 py-2 text-[13px] leading-[17.76px] font-semibold transition-colors ${
              tab === t.id ? "bg-[#1d1a20] text-white" : "border border-[#e8e5eb] text-[#6b6673] hover:border-[#1d1a20]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul className="h-[485px] max-h-[50vh] overflow-y-auto px-8">
        {items.length === 0 && <li className="border-t border-[#e8e5eb] py-10 text-center text-[14px] text-[#6b6673]">{empty}</li>}
        {items.map((p) => {
          const added = isInCompare(p.slug);
          return (
            <li key={p.slug} className="flex items-center gap-4 border-t border-[#e8e5eb] py-3.5">
              <span className="relative size-[68px] shrink-0 overflow-hidden rounded-xl bg-[#f8f7f9]">
                <Image src={p.image} alt="" fill sizes="68px" className="object-contain" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-[15px] leading-[20.49px] font-semibold text-[#1d1a20]">{p.name}</span>
                <span className="text-[12px] leading-[16.39px] font-medium text-[#6b6673]">
                  {p.defaultPurity} {colourLabel[p.defaultColour]} · {p.diamondCt.toFixed(2)} ct · {p.sku}
                </span>
                <span className="text-[15px] leading-[20.49px] font-extrabold text-[#1d1a20]">{inr(priceOf(p))}</span>
              </span>
              {added ? (
                <button
                  type="button"
                  onClick={() => toggleCompare(p)}
                  aria-label={`Remove ${p.name} from compare`}
                  className="flex cursor-pointer items-center gap-1.5 rounded-[50px] border border-[#a6f4c5] bg-[#f6fef9] px-4 py-2.5 text-[13px] leading-[17.76px] text-[#067647] transition-colors hover:border-[#067647]"
                >
                  <span className="font-extrabold">✓</span>
                  <span className="font-semibold">Added</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => toggleCompare(p)}
                  disabled={left === 0}
                  className="cursor-pointer rounded-[50px] bg-purple px-[22px] py-2.5 text-[13px] leading-[17.76px] font-semibold text-white transition-colors hover:bg-purple-deep disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Add
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between border-t border-[#e8e5eb] bg-purple-10 px-8 pt-5 pb-6">
        <p className="text-[14px] leading-[19.12px] font-semibold text-[#1d1a20]">
          {compare.length} of {MAX_COMPARE} selected
        </p>
        <button
          type="button"
          onClick={() => {
            closeModal();
            if (compare.length > 0) router.push("/compare");
          }}
          className="cursor-pointer rounded-[50px] bg-purple px-8 py-[13px] text-[14px] leading-[19.12px] font-semibold text-white transition-colors hover:bg-purple-deep"
        >
          {compare.length > 0 ? "Compare now" : "Done"}
        </button>
      </div>
    </Dialog>
  );
}
