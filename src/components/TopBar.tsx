"use client";

import { Package, Phone, RotateCcw, Headset, BookOpen } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function TopBar() {
  const { setIsAccountModalOpen, showToast } = useShop();

  return (
    <div className="bg-[#402551] text-white border-b border-[#523366] text-[13px] sm:text-[14px]">
      <div className="container-main flex items-center justify-between h-[40px]">
        {/* Left Links (Figma Frame 143) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => setIsAccountModalOpen(true)}
            className="flex items-center gap-2 text-white/90 hover:text-[#c59b27] transition-colors group cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Package size={14} className="text-[#c59b27] group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-tight">Order Tracking</span>
          </button>

          <a
            href="tel:18002582525"
            className="hidden sm:flex items-center gap-2 text-white/90 hover:text-[#c59b27] transition-colors group"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Phone size={14} className="text-[#c59b27] group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-tight">Toll Free: 1800-258-2525</span>
          </a>
        </div>

        {/* Right Links (Figma Frame 142) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => showToast("48-Hour No-Questions-Asked Return & Exchange Guarantee ✨")}
            className="hidden md:flex items-center gap-2 text-white/90 hover:text-[#c59b27] transition-colors group cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <RotateCcw size={14} className="text-[#c59b27] group-hover:-rotate-45 transition-transform" />
            <span className="font-medium tracking-tight">48-Hr Return Policy</span>
          </button>

          <button
            onClick={() => showToast("Customer Care available 10:30 AM – 8:30 PM: care@sunehrie.com 📞")}
            className="flex items-center gap-2 text-white/90 hover:text-[#c59b27] transition-colors group cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Headset size={14} className="text-[#c59b27] group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-tight">Contact Us</span>
          </button>

          <a
            href="#showroom"
            className="hidden lg:flex items-center gap-2 text-white/90 hover:text-[#c59b27] transition-colors group"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <BookOpen size={14} className="text-[#c59b27] group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-tight">Blog</span>
          </a>
        </div>
      </div>
    </div>
  );
}
