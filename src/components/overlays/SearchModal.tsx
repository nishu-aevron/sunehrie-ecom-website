"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Icon from "@/components/ui/Icon";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";
import { catalog, inr, priceOf } from "@/data/catalog";

const suggestions = ["14kt Rings", "Diamond Mangalsutra", "Gold Chains", "Rose Gold", "Earrings"];

export default function SearchModal() {
  const { closeModal, searchQuery, setSearchQuery } = useShop();
  const results = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const words = q.split(/\s+/);
    return catalog.filter((p) => {
      const hay = `${p.name} ${p.category} ${p.sku} ${Object.keys(p.prices).join(" ")} ${p.colours.join(" ")}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [searchQuery]);

  return (
    <Dialog label="Search" onClose={closeModal} className="w-[720px] max-w-full rounded-[20px] bg-white p-6 shadow-[0_24px_60px_0_rgba(0,0,0,0.35)]">
      <label className="flex items-center gap-3 rounded-[44px] border border-purple-50 bg-purple-10 px-4 py-3">
        <Icon src="/icons/nav/icon-search.svg" size={17} />
        <input
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for 14kt Rings, Diamond Mangalsutra, Gold Chains..."
          className="w-full bg-transparent font-inter text-[14px] font-medium text-ink outline-none placeholder:text-[rgba(26,23,20,0.5)]"
        />
      </label>

      {!searchQuery.trim() ? (
        <div className="mt-5">
          <p className="text-[13px] leading-[17.76px] font-semibold tracking-[1.2px] text-purple uppercase">Popular searches</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSearchQuery(s.replace(/s$/, ""))}
                className="cursor-pointer rounded-full border border-purple-20 px-3.5 py-1.5 text-[13px] text-ink-90 transition-colors hover:border-purple"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <ul className="mt-4 max-h-[60vh] overflow-y-auto">
          {results.length === 0 && <li className="py-8 text-center text-[14px] text-ink-50">No pieces match “{searchQuery}”.</li>}
          {results.map((p) => (
            <li key={p.slug} className="border-t border-purple-20 first:border-0">
              <Link href={`/products/${p.slug}`} onClick={closeModal} className="flex items-center gap-4 py-3 hover:bg-blush-light">
                <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-[#f8f7f9]">
                  <Image src={p.image} alt="" fill sizes="56px" className="object-contain" />
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] font-semibold text-black">{p.name}</span>
                  <span className="block text-[12px] text-ink-50">
                    {p.defaultPurity} Gold · {p.sku}
                  </span>
                </span>
                <span className="text-[15px] font-extrabold text-ink-90">{inr(priceOf(p))}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Dialog>
  );
}
