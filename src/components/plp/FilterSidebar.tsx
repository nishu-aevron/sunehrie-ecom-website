"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { swatchGradient } from "@/components/ui/swatches";
import { catalog, colourLabel, type MetalColour, type Purity } from "@/data/catalog";
import { matches, PRICE_MAX, type Filters } from "@/lib/filters";

const purityChips: { id: Purity; label: string }[] = [
  { id: "14KT", label: "14KT — Modern Gold" },
  { id: "9KT", label: "9KT — Everyday Gold" },
  { id: "18KT", label: "18KT — Heirloom Gold" },
];
const colours: MetalColour[] = ["yellow", "rose", "white"];
const sizes = [10, 11, 12, 13, 14, 15];

const chip = (on: boolean) =>
  `flex cursor-pointer items-center gap-2.5 rounded-[99px] border border-purple/20 py-1.5 text-[10px] leading-[16.8px] transition-colors ${
    on ? "bg-[#87529c] text-blush" : "bg-blush-light text-charcoal hover:border-purple/60"
  }`;

function Group({ title, children, footer }: { title: string; children: React.ReactNode; footer?: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-2.5 border-b border-[#cac2cf] pb-2.5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex cursor-pointer items-end justify-between py-[18px] text-left"
      >
        <span className="font-seasons text-[20px] leading-5 text-charcoal">{title}</span>
        {open ? <Icon src="/icons/plp/minus.svg" size={20} /> : <Plus size={20} strokeWidth={1.5} className="text-ink" />}
      </button>
      {open && children}
      {open && footer}
    </div>
  );
}

interface Props {
  filters: Filters;
  toggle: <K extends "availability" | "purity" | "colour" | "size">(key: K, value: Filters[K][number]) => void;
  setPrice: (min: number, max: number) => void;
}

export default function FilterSidebar({ filters, toggle, setPrice }: Props) {
  const count = (pred: (p: (typeof catalog)[number]) => boolean, skip: keyof Filters) =>
    catalog.filter((p) => matches(p, filters, skip) && pred(p)).length;

  return (
    <aside aria-label="Filters" className="flex w-full flex-col gap-[7px] px-2.5 pt-5 lg:w-[290px]">
      <Group title="Availability">
        <div className="flex flex-col gap-[5px]">
          {(
            [
              ["in", "Available", (p: (typeof catalog)[number]) => p.inStock],
              ["out", "Out of stock", (p: (typeof catalog)[number]) => !p.inStock],
            ] as const
          ).map(([id, label, pred]) => (
            <label key={id} className="flex cursor-pointer items-center justify-between py-[3px] font-instrument text-[14px] leading-[16.8px] text-charcoal">
              <span className="flex items-center gap-[5px]">
                <input
                  type="checkbox"
                  checked={filters.availability.includes(id)}
                  onChange={() => toggle("availability", id)}
                  className="size-[18px] cursor-pointer appearance-none rounded-[3px] border border-charcoal/70 bg-white bg-center bg-no-repeat checked:border-purple checked:bg-purple checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><path d=%22M4 8.5l2.5 2.5L12 5.5%22 stroke=%22white%22 stroke-width=%221.8%22 fill=%22none%22/></svg>')]"
                />
                {label}
              </span>
              <span>({count(pred, "availability")})</span>
            </label>
          ))}
        </div>
      </Group>

      <Group title="Price">
        <div className="pb-[11px]">
          <div className="relative h-[22px]">
            <div className="absolute top-[9px] h-1 w-full rounded-[5px] bg-charcoal/20" />
            <div
              className="absolute top-[9px] h-1 rounded-[5px] bg-charcoal"
              style={{ left: `${(filters.min / PRICE_MAX) * 100}%`, right: `${100 - (filters.max / PRICE_MAX) * 100}%` }}
            />
            {(["min", "max"] as const).map((edge) => (
              <input
                key={edge}
                type="range"
                min={0}
                max={PRICE_MAX}
                step={500}
                value={filters[edge]}
                aria-label={edge === "min" ? "Minimum price" : "Maximum price"}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (edge === "min") setPrice(Math.min(v, filters.max - 500), filters.max);
                  else setPrice(filters.min, Math.max(v, filters.min + 500));
                }}
                className="range-thumb pointer-events-none absolute inset-0 w-full appearance-none bg-transparent"
              />
            ))}
          </div>
          <div className="mt-[13px] flex items-center justify-between">
            {(["min", "max"] as const).map((edge, i) => (
              <div key={edge} className="contents">
                {i === 1 && <span className="font-instrument text-[14px] leading-[21px] text-charcoal">to</span>}
                <label className="flex h-11 w-[118px] items-center gap-0.5 rounded-lg border border-purple/20 bg-blush-light pr-[15px] pl-[15.66px]">
                  <span className="font-seasons text-[14px] font-bold text-charcoal/60">₹</span>
                  <input
                    inputMode="numeric"
                    value={filters[edge]}
                    aria-label={edge === "min" ? "Minimum price" : "Maximum price"}
                    onChange={(e) => {
                      const v = Math.min(PRICE_MAX, Number(e.target.value.replace(/\D/g, "")) || 0);
                      if (edge === "min") setPrice(v, filters.max);
                      else setPrice(filters.min, v);
                    }}
                    className="w-full bg-transparent text-right font-inter text-[13.33px] leading-4 text-charcoal outline-none"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </Group>

      <Group title="Gold Purity">
        <div className="flex flex-wrap gap-[5px]">
          {purityChips.map((c) => (
            <button key={c.id} type="button" onClick={() => toggle("purity", c.id)} aria-pressed={filters.purity.includes(c.id)} className={`${chip(filters.purity.includes(c.id))} px-2.5 font-medium`}>
              {c.label}
            </button>
          ))}
        </div>
      </Group>

      <Group title="Metal Colour">
        <div className="flex flex-wrap gap-[5px]">
          {colours.map((c) => (
            <button key={c} type="button" onClick={() => toggle("colour", c)} aria-pressed={filters.colour.includes(c)} className={`${chip(filters.colour.includes(c))} px-2.5 font-medium`}>
              <span className="size-4 rounded-full border-[0.5px] border-black/10" style={{ backgroundImage: swatchGradient[c] }} />
              {colourLabel[c]}
            </button>
          ))}
        </div>
      </Group>

      <Group
        title="Ring Size"
        footer={
          <Link href="/products/classic-gold-ring#size-guide" className="pt-0.5 text-[12px] leading-[16.8px] font-bold text-purple hover:underline">
            View Size Guide
          </Link>
        }
      >
        <div className="flex flex-wrap gap-[5px]">
          {sizes.map((s) => (
            <button key={s} type="button" onClick={() => toggle("size", s)} aria-pressed={filters.size.includes(s)} className={`${chip(filters.size.includes(s))} px-5 font-semibold`}>
              {s}
            </button>
          ))}
        </div>
      </Group>
    </aside>
  );
}
