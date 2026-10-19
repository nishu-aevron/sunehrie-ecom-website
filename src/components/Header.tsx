"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Mic,
  Camera,
  Menu,
  X,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    pincode,
    setIsPincodeModalOpen,
    wishlistCount,
    setIsWishlistOpen,
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    setIsAccountModalOpen,
    setIsStoreModalOpen,
    showToast,
  } = useShop();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 border-b border-[#ece3f0] ${
          scrolled ? "shadow-[0_4px_25px_rgba(43,13,62,0.08)] py-2 sm:py-2.5" : "py-3 sm:py-3.5"
        }`}
      >
        <div className="container-main flex items-center justify-between gap-3 sm:gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-[#2b0d3e] p-1.5 hover:text-[#7a3f91] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Left: Search Bar with exact Figma placeholder and interactive trigger */}
          <div className="hidden lg:flex items-center flex-1 max-w-[420px]">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center bg-[#f4edf8] hover:bg-white focus-within:bg-white focus-within:border-[#7a3f91] focus-within:ring-2 focus-within:ring-[#7a3f91]/15 transition-all duration-300 rounded-full px-4 py-2 border border-[#e8dcee] shadow-xs hover:shadow-sm cursor-pointer group"
            >
              <div className="relative w-4 h-4 mr-2.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                <Image src="/images/icon-search.svg" alt="Search" fill className="object-contain" />
              </div>
              <input
                type="text"
                readOnly
                placeholder="Search for 14kt Rings, Diamond Mangalsutra, Gold Chains..."
                className="bg-transparent outline-none text-[12px] sm:text-[13px] text-[#2b0d3e] placeholder:text-[#8e7b99] w-full cursor-pointer select-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <div className="flex items-center gap-2 text-[#8e7b99] pl-2 border-l border-[#decfe5] ml-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showToast("Listening... Speak jewellery item now 🎙️");
                    setIsSearchOpen(true);
                  }}
                  className="hover:text-[#cca338] hover:scale-120 transition-all duration-200 p-0.5"
                  title="Voice Search"
                >
                  <Mic size={15} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showToast("Visual Image Search: Upload jewellery photo 📷");
                    setIsSearchOpen(true);
                  }}
                  className="hover:text-[#cca338] hover:scale-120 transition-all duration-200 p-0.5"
                  title="Visual Search"
                >
                  <Camera size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Center: Official Figma Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <a href="/" className="group flex flex-col items-center">
              <div className="relative w-[150px] sm:w-[170px] h-[34px] sm:h-[40px] group-hover:scale-102 transition-transform duration-300">
                <Image
                  src="/images/logo.svg"
                  alt="Sunehriè"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className="text-[12px] sm:text-[13px] font-bold text-[#7a3f91] tracking-[1.5px] group-hover:tracking-[2px] uppercase mt-0.5 transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                More Than Jewelry
              </span>
            </a>
          </div>

          {/* Right: Exactly 5 Icons from Figma: Pincode, Store, User, Wishlist, Cart */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 xl:gap-6 flex-1 max-w-[420px]">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="lg:hidden text-[#2e093d] hover:text-[#7a3f91] hover:scale-110 transition-all p-1"
              aria-label="Search"
            >
              <div className="relative w-5 h-5">
                <Image src="/images/icon-search.svg" alt="Search" fill className="object-contain" />
              </div>
            </button>

            {/* 1. Pincode with Location Pin */}
            <button
              onClick={() => setIsPincodeModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] sm:text-[14px] font-medium text-[#2e093d] hover:text-[#7a3f91] hover:bg-[#f6eff9] group transition-all duration-200"
              title="Select Delivery Pincode"
            >
              <div className="relative w-[18px] h-[18px] group-hover:-translate-y-0.5 transition-transform duration-200">
                <Image src="/images/icon-pincode.svg" alt="" fill className="object-contain" />
              </div>
              <span className="border-b border-[#cca338]/60 group-hover:border-[#7a3f91] pb-0.5 transition-colors font-medium">
                {pincode}
              </span>
            </button>

            {/* 2. Store Locator Icon (Directly from Figma) */}
            <button
              onClick={() => setIsStoreModalOpen(true)}
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#2e093d] hover:text-[#7a3f91] hover:bg-[#f6eff9] hover:scale-108 transition-all duration-200"
              title="Our Showrooms"
              aria-label="Showroom Locations"
            >
              <div className="relative w-[22px] h-[22px]">
                <Image src="/images/icon-store.svg" alt="Stores" fill className="object-contain" />
              </div>
            </button>

            {/* 3. User Profile Icon (Directly from Figma - Clean Vector) */}
            <button
              onClick={() => setIsAccountModalOpen(true)}
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#2e093d] hover:text-[#7a3f91] hover:bg-[#f6eff9] hover:scale-108 transition-all duration-200"
              title="My Account & Track Orders"
              aria-label="My Account"
            >
              <div className="relative w-[22px] h-[22px]">
                <Image src="/images/icon-user.svg" alt="Account" fill className="object-contain" />
              </div>
            </button>

            {/* 4. Wishlist Icon with Dynamic Badge */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="group relative w-9 h-9 rounded-full flex items-center justify-center text-[#2e093d] hover:text-[#7a3f91] hover:bg-[#f6eff9] hover:scale-108 transition-all duration-200"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <div className="relative w-[22px] h-[22px] group-hover:scale-105 transition-transform">
                <Image src="/images/icon-heart.svg" alt="Wishlist" fill className="object-contain" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 bg-[#7a3f91] text-white font-bold text-[9px] rounded-full flex items-center justify-center transition-transform shadow-xs group-hover:scale-110">
                {wishlistCount}
              </span>
            </button>

            {/* 5. Luxury Shopping Tote Bag Icon with Dynamic Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="group relative w-9 h-9 rounded-full flex items-center justify-center text-[#2e093d] hover:text-[#cca338] hover:bg-[#fcf8ee] hover:scale-108 transition-all duration-200"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <div className="relative w-[22px] h-[22px] group-hover:scale-105 transition-transform">
                <Image src="/images/icon-cart.svg" alt="Cart" fill className="object-contain" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 bg-[#cca338] text-white font-bold text-[9px] rounded-full flex items-center justify-center transition-transform shadow-xs group-hover:scale-110">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 mobile-menu-overlay ${
          mobileMenuOpen ? "open" : ""
        } lg:hidden`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`mobile-menu-panel ${
            mobileMenuOpen ? "open" : ""
          } w-[300px] h-full bg-white shadow-2xl overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 border-b border-[#e8dcee]">
            <div className="relative w-[130px] h-[32px]">
              <Image src="/images/logo.svg" alt="Sunehriè" fill className="object-contain" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2b0d3e] hover:text-[#7a3f91] p-1"
            >
              <X size={22} />
            </button>
          </div>

          <div className="p-4">
            <div
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center bg-[#f4edf8] rounded-full px-4 py-2.5 border border-[#e8dcee] cursor-pointer"
            >
              <Search size={16} className="text-[#8e7b99] mr-2" />
              <input
                type="text"
                readOnly
                placeholder="Search jewellery..."
                className="bg-transparent outline-none text-[13px] w-full cursor-pointer"
              />
            </div>
          </div>

          <div className="px-4 py-2 space-y-1">
            {[
              "Gold",
              "Diamond",
              "Rings",
              "Earrings",
              "Bracelets & Bangles",
              "More Jewellery",
              "Gifting",
              "Offers",
            ].map((cat) => (
              <a
                key={cat}
                href="#"
                className="block py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#2e093d] hover:bg-[#f4edf8] hover:text-[#7a3f91] transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
