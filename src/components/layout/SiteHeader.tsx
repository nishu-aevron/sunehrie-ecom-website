"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import MegaMenuPanel from "@/components/layout/MegaMenuPanel";
import MobileMenu from "@/components/layout/MobileMenu";
import { useShop } from "@/context/ShopContext";
import { navItems, type MegaMenu } from "@/data/navigation";

const topLink = "flex items-center gap-[7px] text-[14px] font-medium leading-none tracking-[-0.24px] text-white";

function CountBadge({ count, right }: { count: number; right: number }) {
  return (
    <span
      className="absolute top-[-6.39px] flex size-[20.8px] items-center justify-center rounded-[10.4px] bg-black pt-[1.5px] pb-[2.3px] font-inter text-[12px] leading-[16.8px] tracking-[0.24px] text-gold"
      style={{ right }}
    >
      {count}
    </span>
  );
}

export default function SiteHeader() {
  const { openModal, wishlist, cartCount, pincode } = useShop();
  const [openMenu, setOpenMenu] = useState<MegaMenu | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useLayoutEffect(() => () => setOpenMenu(null), []);

  return (
    <>
      <header className="relative z-40" onMouseLeave={() => setOpenMenu(null)}>
        {/* Top bar — desktop: full links | mobile: toll-free only, centered */}
        <div className="h-[39px] bg-ink-90 lg:h-10">
          <div className="mx-auto flex h-full max-w-[1440px] items-center px-4 lg:justify-between lg:px-5 max-lg:justify-center">
            <div className="flex items-center gap-[15px] max-lg:hidden">
              <Link href="/checkout" className={topLink}>
                <Icon src="/icons/nav/icon-order-tracking.svg" size={15} />
                Order Tracking
              </Link>
              <a href="tel:18002582525" className={topLink}>
                <Icon src="/icons/nav/icon-phone.svg" size={15} />
                <span>
                  Toll Free: <span className="text-gold">1800-258-2525</span>
                </span>
              </a>
            </div>
            {/* Mobile: centered toll-free */}
            <a href="tel:18002582525" className={`${topLink} lg:hidden`}>
              <Icon src="/icons/nav/icon-phone.svg" size={13} />
              <span className="text-[12px]">
                Toll Free: <span className="text-gold">1800-258-2525</span>
              </span>
            </a>
            <div className="flex items-center gap-[15px] max-lg:hidden">
              <Link href="/refund-exchange" className={`${topLink} max-md:hidden`}>
                <Icon src="/icons/nav/icon-return.svg" size={15} />
                48-Hr Return Policy
              </Link>
              <button type="button" onClick={() => openModal("contact")} className={`${topLink} cursor-pointer`}>
                <Icon src="/icons/nav/icon-phone.svg" size={15} />
                Contact Us
              </button>
              <Link href="/blog" className={topLink}>
                <Icon src="/icons/nav/icon-blog.svg" size={15} />
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="border-b border-gold bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 lg:gap-2.5 lg:px-[52.8px] lg:py-2.5">
            {/* Desktop header row */}
            <div className="hidden w-full items-center justify-between py-[15px] lg:flex">
              <button
                type="button"
                onClick={() => openModal("search")}
                className="flex w-[420px] cursor-text items-center gap-3 rounded-[44px] border border-purple-50 bg-purple-10 px-4 py-3 text-left"
              >
                <Icon src="/icons/nav/icon-search.svg" size={17} />
                <span className="font-inter text-[11px] font-medium leading-4 text-[rgba(26,23,20,0.5)]">
                  Search for 14kt Rings, Diamond Mangalsutra, Gold Chains...
                </span>
              </button>

              <Link href="/" className="flex flex-col items-center gap-2.5" aria-label="Sunehriè home">
                <Icon src="/icons/nav/logo.svg" size={[180, 39]} />
                <span className="font-seasons text-[14px] leading-4 font-bold whitespace-nowrap text-purple">
                  More Than Jewelry
                </span>
              </Link>

              <div className="flex w-[420px] items-start justify-end gap-[17.6px]">
                <button
                  type="button"
                  onClick={() => openModal("pincode")}
                  className="flex h-6 cursor-pointer items-center gap-[7px]"
                >
                  <Icon src="/icons/nav/icon-pincode.svg" size={23} />
                  <span className="text-[16px] leading-none font-medium tracking-[-0.24px] whitespace-nowrap text-ink">
                    {pincode ?? "Pincode"}
                  </span>
                </button>
                <button type="button" onClick={() => openModal("store")} aria-label="Find a store" className="cursor-pointer">
                  <Icon src="/icons/nav/icon-store.svg" size={24} />
                </button>
                <button type="button" onClick={() => openModal("login")} aria-label="Account" className="cursor-pointer">
                  <Icon src="/icons/nav/icon-user.svg" size={24} />
                </button>
                <button type="button" onClick={() => openModal("wishlist")} aria-label={`Wishlist, ${wishlist.length} items`} className="relative cursor-pointer">
                  <Icon src="/icons/nav/icon-heart.svg" size={24} />
                  <CountBadge count={wishlist.length} right={-7.61} />
                </button>
                <button type="button" onClick={() => openModal("cart")} aria-label={`Bag, ${cartCount} items`} className="relative cursor-pointer">
                  <Icon src="/icons/nav/icon-bag.svg" size={24} />
                  <CountBadge count={cartCount} right={-8.01} />
                </button>
              </div>
            </div>

            {/* Mobile header row — logo left, icons+hamburger right */}
            <div className="flex w-full items-center justify-between py-3 lg:hidden">
              <Link href="/" aria-label="Sunehriè home">
                <Icon src="/icons/nav/logo.svg" size={[130, 28]} />
              </Link>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => openModal("wishlist")} aria-label={`Wishlist, ${wishlist.length} items`} className="relative cursor-pointer">
                  <Icon src="/icons/nav/icon-heart.svg" size={22} />
                  {wishlist.length > 0 && <CountBadge count={wishlist.length} right={-7} />}
                </button>
                <button type="button" onClick={() => openModal("cart")} aria-label={`Bag, ${cartCount} items`} className="relative cursor-pointer">
                  <Icon src="/icons/nav/icon-bag.svg" size={22} />
                  {cartCount > 0 && <CountBadge count={cartCount} right={-7} />}
                </button>
                <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu" className="cursor-pointer p-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile search bar */}
            <div className="w-full pb-3 lg:hidden">
              <button
                type="button"
                onClick={() => openModal("search")}
                className="flex w-full cursor-text items-center gap-3 rounded-[44px] border border-purple-50 bg-purple-10 px-4 py-2.5 text-left"
              >
                <Icon src="/icons/nav/icon-search.svg" size={17} />
                <span className="font-inter text-[11px] font-medium leading-4 text-[rgba(26,23,20,0.5)]">
                  Search for Gold Rings, Diamond Pendants...
                </span>
              </button>
            </div>

            {/* Desktop category navigation */}
            <nav className="no-scrollbar w-full overflow-x-auto max-lg:hidden lg:w-[1334px] lg:max-w-full lg:overflow-visible" aria-label="Categories">
              <ul className="flex h-[53px] min-w-max items-center justify-between gap-6 lg:px-[25px]">
                {navItems.map((item) => {
                  const active = item.menu !== undefined && openMenu === item.menu;
                  return (
                    <li key={item.label} className="h-full">
                      <Link
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() => setOpenMenu(item.menu ?? null)}
                        onFocus={() => setOpenMenu(item.menu ?? null)}
                        aria-expanded={item.menu ? active : undefined}
                        className={`group flex h-full items-center gap-[7px] border-b px-2.5 transition-colors ${
                          active ? "border-gold" : "border-transparent"
                        }`}
                      >
                        <span className="relative h-5" style={{ width: item.iconWidth }}>
                          <Icon
                            src={`/icons/nav/${item.icon}.svg`}
                            size={[item.iconWidth, 20]}
                            className={`absolute inset-0 transition-opacity ${active ? "opacity-0" : "group-hover:opacity-0"}`}
                          />
                          <Icon
                            src={`/icons/nav/${item.icon}-active.svg`}
                            size={[item.iconWidth, 20]}
                            className={`absolute inset-0 transition-opacity ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                          />
                        </span>
                        <span
                          className={`text-[16px] leading-none tracking-[-0.24px] whitespace-nowrap transition-colors ${
                            active ? "text-ink-deep" : "text-ink-50 group-hover:text-ink-deep"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.menu && (
                          <span className="relative size-[15px]">
                            <Icon
                              src="/icons/nav/icon-chevron.svg"
                              size={15}
                              className={`absolute inset-0 ${active ? "opacity-0" : "group-hover:opacity-0"}`}
                            />
                            <Icon
                              src="/icons/nav/icon-chevron-active.svg"
                              size={15}
                              className={`absolute inset-0 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                            />
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {openMenu && <MegaMenuPanel menu={openMenu} onNavigate={() => setOpenMenu(null)} />}
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
