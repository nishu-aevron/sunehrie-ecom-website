"use client";

import { useShop } from "@/context/ShopContext";

export default function Toast() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#240632] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#cca338]/40 flex items-center gap-3 backdrop-blur-md">
        <span className="w-2.5 h-2.5 rounded-full bg-[#cca338] animate-pulse" />
        <span className="text-[13px] font-semibold tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
}
