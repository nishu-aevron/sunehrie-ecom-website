"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/Icon";
import FilterSidebar from "./FilterSidebar";
import { apply, PAGE_SIZE, parseFilters, PRICE_MAX, sortOptions, type Filters } from "@/lib/filters";

function PromoCard() {
  return (
    <div className="relative flex min-h-[417px] flex-col justify-center overflow-hidden rounded-3xl bg-linear-to-t from-ink-deep to-ink px-[25px] py-[50px] shadow-footer">
      <span className="absolute -top-[30px] left-[269px] size-[140px] rounded-full bg-purple blur-[105px]" aria-hidden />
      <div className="relative flex flex-col gap-[15px]">
        <span className="flex size-[50px] items-center justify-center rounded-[47px] border border-gold bg-gold/15 backdrop-blur-[2px]">
          <Icon src="/icons/plp/shield-gold.svg" size={30} />
        </span>
        <p className="font-seasons text-[32px] leading-[38.4px] font-bold tracking-[-0.8px] text-gold">Real Gold. Natural Diamonds. Zero Ambiguity.</p>
        <p className="max-w-[274px] text-[13.1px] leading-[19.6px] font-medium tracking-[0.24px] text-white">
          Every piece here is 9/14/18KT hallmarked gold with 100% natural diamonds — IGI certificate in the box, full price breakup on the page, 48-hour
          returns if you change your mind.
        </p>
      </div>
    </div>
  );
}

function pageList(current: number, total: number): (number | "…")[] {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current, current + 1].filter((p) => p >= 1 && p <= total));
  const sorted = [...pages].sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? (["…", p] as const) : [p]));
}

export default function CollectionView() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useMemo(() => parseFilters(new URLSearchParams(params.toString())), [params]);
  const results = useMemo(() => apply(filters), [filters]);
  const [sortOpen, setSortOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const top = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => () => setSortOpen(false), []);

  function update(patch: Partial<Record<string, string | null>>, resetPage = true) {
    const next = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(patch)) {
      if (v === null || v === "") next.delete(k);
      else next.set(k, v!);
    }
    if (resetPage) next.delete("page");
    router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false });
  }

  const toggle = <K extends "availability" | "purity" | "colour" | "size">(key: K, value: Filters[K][number]) => {
    const current = filters[key] as (string | number)[];
    const nextValues = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    update({ [key]: nextValues.join(",") || null });
  };

  const setPrice = (min: number, max: number) => update({ min: min > 0 ? String(min) : null, max: max < PRICE_MAX ? String(max) : null });

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(filters.page, pages);
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const goPage = (p: number) => {
    update({ page: p > 1 ? String(p) : null }, false);
    top.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sortLabel = sortOptions.find((o) => o.id === filters.sort)!.label;
  const activeCount = filters.availability.length + filters.purity.length + filters.colour.length + filters.size.length + (filters.min > 0 || filters.max < PRICE_MAX ? 1 : 0);

  return (
    <div ref={top} className="page-x scroll-mt-4 pt-[17px] lg:px-[53px]">
      {/* Title + sort */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[15px]">
          <h2 className="font-seasons text-[26px] leading-[34px] font-bold text-charcoal sm:text-[34px] sm:leading-[44.2px]">Filter</h2>
          <span className="text-[14px] leading-[21px] font-semibold text-charcoal">
            {results.length} item{results.length === 1 ? "" : "s"}
          </span>
          <button
            type="button"
            onClick={() => setShowFilters((s) => !s)}
            className="cursor-pointer rounded-full border border-purple/30 px-3 py-1 text-[12px] font-semibold text-purple lg:hidden"
          >
            {showFilters ? "Hide" : "Show"} filters{activeCount ? ` (${activeCount})` : ""}
          </button>
        </div>
        <div className="relative flex items-center gap-2.5">
          <span className="text-[12px] leading-[16.8px] tracking-[0.24px] text-[#232323]">Sort by:</span>
          <button
            type="button"
            onClick={() => setSortOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            className="flex cursor-pointer items-center bg-white text-[12px] leading-[16.8px] font-bold text-ink"
          >
            {sortLabel}
            <Icon src="/icons/plp/chevron-down-ink.svg" size={15} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
          </button>
          {sortOpen && (
            <ul role="listbox" className="absolute top-full right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-purple-20 bg-white py-1 shadow-dropdown">
              {sortOptions.map((o) => (
                <li key={o.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={o.id === filters.sort}
                    onClick={() => {
                      update({ sort: o.id === "best-selling" ? null : o.id });
                      setSortOpen(false);
                    }}
                    className={`w-full cursor-pointer px-4 py-2 text-left text-[12px] hover:bg-blush-light ${o.id === filters.sort ? "font-bold text-purple" : "text-ink"}`}
                  >
                    {o.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-[21px] sm:mt-6 lg:mt-[74px] lg:flex-row lg:pl-[5px]">
        <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
          <FilterSidebar filters={filters} toggle={toggle} setPrice={setPrice} />
        </div>

        <div className="flex-1">
          {results.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-purple-10 px-6 py-20 text-center">
              <p className="font-seasons text-[28px] font-bold text-purple">No pieces match these filters</p>
              <Link href={pathname} scroll={false} className="rounded-full bg-purple px-6 py-3 text-[14px] font-semibold text-white">
                Clear all filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-4 sm:gap-y-[25px] lg:grid-cols-3">
              {visible.map((p, i) => (
                <div key={p.slug} className="contents">
                  {i === 6 && page === 1 && <PromoCard />}
                  <ProductCard product={p} priority={i < 3} />
                </div>
              ))}
              {visible.length <= 6 && page === 1 && <PromoCard />}
            </div>
          )}

          {pages > 1 && (
            <nav aria-label="Pagination" className="mt-[54px] flex items-center justify-center gap-1 lg:-ml-[311px]">
              {pageList(page, pages).map((p, i) =>
                p === "…" ? (
                  <span key={`gap-${i}`} className="w-[9px] font-instrument text-[14px] text-ink">
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    type="button"
                    onClick={() => goPage(p)}
                    aria-current={p === page ? "page" : undefined}
                    className={`size-11 cursor-pointer rounded-full text-[12px] leading-[14.4px] font-semibold tracking-[0.72px] text-ink ${
                      p === page ? "border border-purple bg-blush" : "hover:bg-blush-light"
                    }`}
                  >
                    {p}
                  </button>
                ),
              )}
              {page < pages && (
                <button type="button" onClick={() => goPage(page + 1)} className="flex cursor-pointer items-center gap-1.5 px-px py-[13px] text-[12px] leading-3 font-medium tracking-[0.72px] text-ink">
                  Next
                  <Icon src="/icons/plp/chevron-right-ink.svg" size={15} />
                </button>
              )}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
