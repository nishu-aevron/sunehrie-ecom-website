"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { useShop } from "@/context/ShopContext";
import {
  goldCategories,
  goldColours,
  goldOccasions,
  diamondLinks,
  allJewellery,
  giftOccasions,
} from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

interface AccordionSectionProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}

const categoryTiles = [
  { label: "Rings", href: "/collections?category=Rings", image: "/img/mega/9kt-gold.jpg" },
  { label: "Earrings", href: "/collections?category=Earrings", image: "/img/mega/14kt-gold.png" },
  { label: "Pendants", href: "/collections?category=Pendants", image: "/img/mega/18kt-gold.png" },
  { label: "Necklaces", href: "/collections?category=Necklaces", image: "/img/mega/all-gold.png" },
  { label: "Bracelets & Bangles", href: "/collections?category=Bracelets", image: "/img/mega/necklace.png" },
  { label: "Mangalsutras", href: "/collections?category=Mangalsutra", image: "/img/mega/mangalsutra-pendant.png" },
];

function AccordionSection({ title, badge, children, open, onToggle }: AccordionSectionProps) {
  return (
    <div className="border-b border-purple-20">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="flex items-center gap-2 text-[15px] font-semibold text-ink">
          {title}
          {badge && (
            <span className="rounded-full bg-success px-2 py-0.5 text-[10px] font-bold text-white">{badge}</span>
          )}
        </span>
        <svg
          className={`size-5 shrink-0 text-purple transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
        </svg>
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { openModal } = useShop();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (key: string) => setExpanded(expanded === key ? null : key);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Full-screen menu */}
      <div className="absolute inset-0 flex flex-col bg-white">
        {/* Toll-free bar */}
        <div className="flex h-[39px] shrink-0 items-center justify-center bg-ink-90">
          <a href="tel:18002582525" className="flex items-center gap-[7px] text-[12px] font-medium text-white">
            <Icon src="/icons/nav/icon-phone.svg" size={13} />
            Toll Free: <span className="text-gold">1800-258-2525</span>
          </a>
        </div>

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gold px-4 py-3">
          <Link href="/" onClick={onClose} aria-label="Sunehriè home">
            <Icon src="/icons/nav/logo.svg" size={[130, 28]} />
          </Link>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => { onClose(); openModal("wishlist"); }} aria-label="Wishlist" className="relative cursor-pointer">
              <Icon src="/icons/nav/icon-heart.svg" size={22} />
            </button>
            <button type="button" onClick={() => { onClose(); openModal("cart"); }} aria-label="Bag" className="relative cursor-pointer">
              <Icon src="/icons/nav/icon-bag.svg" size={22} />
            </button>
            <button type="button" onClick={onClose} aria-label="Close menu" className="cursor-pointer p-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-4">
          <p className="mt-5 mb-3 text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Shop by Category</p>

          {/* 2-column category grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {categoryTiles.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl border border-purple-20 bg-purple-10 px-3 py-2.5"
              >
                <div className="size-[40px] shrink-0 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt="" className="size-full object-cover" />
                </div>
                <span className="text-[13px] font-semibold leading-tight text-ink">{c.label}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/collections"
            onClick={onClose}
            className="mt-3 flex items-center justify-center gap-1 py-2 text-[13px] font-semibold text-purple"
          >
            View all categories
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
            </svg>
          </Link>

          <AccordionSection title="Gold" open={expanded === "gold"} onToggle={() => toggle("gold")}>
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-2 text-[11px] font-semibold tracking-[1px] text-ink-50 uppercase">By Purity</p>
                <div className="grid grid-cols-4 gap-3">
                  {goldCategories.map((c) => (
                    <Link key={c.label} href={c.href} onClick={onClose} className="flex flex-col items-center gap-1.5">
                      <div className="size-[50px] overflow-hidden rounded-full bg-purple-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.image} alt="" className="size-full object-cover" />
                      </div>
                      <span className="text-center text-[11px] leading-tight text-ink-70">{c.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold tracking-[1px] text-ink-50 uppercase">By Colour</p>
                <div className="flex gap-2">
                  {goldColours.map((c) => (
                    <Link key={c.label} href={c.href} onClick={onClose} className="flex items-center gap-2 rounded-full border border-purple-20 px-3 py-1.5">
                      <span className="size-4 rounded-full" style={{ background: c.swatch }} />
                      <span className="text-[12px] text-ink-70">{c.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold tracking-[1px] text-ink-50 uppercase">Occasions</p>
                <div className="flex flex-wrap gap-2">
                  {goldOccasions.map((o) => (
                    <Link key={o.label} href={o.href} onClick={onClose} className="rounded-full border border-purple-20 px-3 py-1.5 text-[12px] text-ink-70">
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection title="Diamond" open={expanded === "diamond"} onToggle={() => toggle("diamond")}>
            <div className="flex flex-col gap-2">
              {diamondLinks.map((l) => (
                <Link key={l.label} href={l.href} onClick={onClose} className="py-1 text-[14px] text-ink-70">
                  {l.label}
                </Link>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection title="Gifting" badge="New" open={expanded === "gifting"} onToggle={() => toggle("gifting")}>
            <div className="flex flex-col gap-2">
              {giftOccasions.map((o) => (
                <Link key={o.label} href={o.href} onClick={onClose} className="py-1 text-[14px] text-ink-70">
                  {o.label}
                </Link>
              ))}
            </div>
          </AccordionSection>

          {[
            { label: "New Arrivals", href: "/collections?sort=newest" },
            { label: "Best Sellers", href: "/collections?sort=best-selling" },
            { label: "Shop by Occasion", href: "/collections?occasion=all" },
            { label: "Offers", href: "/special-offers" },
          ].map((item) => (
            <div key={item.label} className="border-b border-purple-20">
              <Link href={item.href} onClick={onClose} className="flex items-center justify-between py-4 text-[15px] font-semibold text-ink">
                {item.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="text-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}

          <AccordionSection title="More Jewellery" open={expanded === "more"} onToggle={() => toggle("more")}>
            <div className="grid grid-cols-3 gap-3">
              {allJewellery.slice(0, 6).map((j) => (
                <Link key={j.label} href={j.href} onClick={onClose} className="flex flex-col items-center gap-1.5">
                  <div className="size-[50px] overflow-hidden rounded-full bg-purple-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={j.image} alt="" className="size-full object-cover" />
                  </div>
                  <span className="text-center text-[11px] leading-tight text-ink-70">{j.label}</span>
                </Link>
              ))}
            </div>
          </AccordionSection>

          <div className="h-4" />
        </div>

        {/* Footer bar */}
        <div className="grid shrink-0 grid-cols-3 border-t border-purple-20 bg-purple-10">
          <Link
            href="/checkout"
            onClick={onClose}
            className="flex flex-col items-center gap-1.5 py-3.5 text-[11px] font-semibold tracking-[0.5px] text-purple uppercase"
          >
            <Icon src="/icons/nav/icon-order-tracking.svg" size={18} />
            Track Order
          </Link>
          <button
            type="button"
            onClick={() => { onClose(); openModal("store"); }}
            className="flex cursor-pointer flex-col items-center gap-1.5 border-x border-purple-20 py-3.5 text-[11px] font-semibold tracking-[0.5px] text-purple uppercase"
          >
            <Icon src="/icons/nav/icon-store.svg" size={18} />
            Find a Store
          </button>
          <button
            type="button"
            onClick={() => { onClose(); openModal("contact"); }}
            className="flex cursor-pointer flex-col items-center gap-1.5 py-3.5 text-[11px] font-semibold tracking-[0.5px] text-purple uppercase"
          >
            <Icon src="/icons/nav/icon-phone.svg" size={18} />
            Support
          </button>
        </div>
      </div>
    </div>
  );
}
