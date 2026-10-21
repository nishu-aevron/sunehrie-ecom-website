"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { colourLabel, purities, type Product } from "@/data/catalog";

function Accordion({ title, defaultOpen = true, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  const header = (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className={`flex w-full cursor-pointer items-center justify-between px-4 py-[25px] text-left ${
        open ? "rounded-t-2xl border-t border-purple" : "rounded-2xl border border-purple"
      }`}
    >
      <span className="flex items-center gap-2.5">
        <span className="size-2 rounded-full bg-gold" />
        <span className="font-inter text-[15px] leading-[15px] font-bold tracking-[-0.15px] text-purple uppercase">{title}</span>
      </span>
      <Icon src="/icons/pdp/chevron-up.svg" size={20} className={`transition-transform ${open ? "" : "rotate-180"}`} />
    </button>
  );
  if (!open) return header;
  return (
    <div className="rounded-2xl border border-[#decfe4]">
      {header}
      <div className="rounded-b-2xl bg-white px-4 pt-[25px] pb-5">{children}</div>
    </div>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-[11px] px-[15px] pb-[15px]">
      <span className="font-seasons text-[22px] leading-6 font-bold text-ink-90">{value}</span>
      <span className="text-[15px] leading-[16.8px] font-semibold text-[#969288]">{label}</span>
    </div>
  );
}

export default function DetailAccordions({ product }: { product: Product }) {
  const purity = product.defaultPurity;
  const colour = colourLabel[product.defaultColour];
  const rows: [string, string][] = [
    ["Base SKU", product.sku],
    ["Jewellery Type", product.category],
    ["Gold Purity", `${purities.filter((p) => product.prices[p]).join(" / ")} — BIS Hallmark with 6-digit HUID`],
    ["Net Gold Weight", `${product.netWeight.toFixed(2)} g`],
    ["Gross Weight", `${product.grossWeight.toFixed(2)} g (±5% for handcrafted pieces)`],
    ["Diamonds", product.diamondCt ? `${product.diamondCt.toFixed(2)} ct natural, IGI certified` : "None"],
    ["Metal Colours", product.colours.map((c) => colourLabel[c]).join(", ")],
    ["Occasion", product.occasion],
    ["Country of Origin", "India"],
  ];

  return (
    <div className="flex flex-col gap-[15px]">
      <Accordion title="Metal Details">
        <div className="grid grid-cols-2 gap-y-[15px] sm:grid-cols-3">
          <Fact value={purity.replace("KT", "K")} label="Karatage" />
          <Fact value="Gold" label="Metal" />
          <Fact value={colour} label="Material Colour" />
          {product.sizes && <Fact value="17.00 CMS" label="Size" />}
          <Fact value={`${product.netWeight.toFixed(2)} g`} label="Net Weight" />
          <Fact value={`${product.grossWeight.toFixed(2)} g`} label="Gross Weight" />
        </div>
      </Accordion>

      <Accordion title="Diamond Details" defaultOpen={false}>
        <div className="grid grid-cols-2 gap-y-[15px] sm:grid-cols-3">
          <Fact value={`${product.diamondCt.toFixed(2)} ct`} label="Total Weight" />
          <Fact value="Natural" label="Diamond Type" />
          <Fact value="IGI" label="Certification" />
        </div>
      </Accordion>

      <Accordion title="General Details">
        <dl>
          {rows.map(([k, v]) => (
            <div key={k} className="flex border-b border-[#decfe4] text-[13px] leading-[22.1px]">
              <dt className="w-[200px] shrink-0 px-1 py-2.5 font-bold text-ink-90 max-sm:w-[130px]">{k}</dt>
              <dd className="px-1 py-2.5 font-medium text-ink-50">{v}</dd>
            </div>
          ))}
        </dl>
      </Accordion>

      <Accordion title="Description">
        <p className="text-[13px] leading-[21px] text-[#604a6e]">
          The {product.name} by Sunehriè is expertly handcrafted from BIS Hallmark-certified {purity} {colour.toLowerCase()}. Its timeless silhouette
          draws from generations of Gujarati goldsmithing tradition — made to be worn every day and passed down for years. Each piece ships with an
          independent IGI + BIS Hallmark certificate, tamper-evident packaging, and a free cleaning kit.
        </p>
      </Accordion>
    </div>
  );
}
