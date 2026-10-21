"use client";

import Image from "next/image";
import Link from "next/link";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";
import { inr, priceOf } from "@/data/catalog";

export default function WishlistDrawer() {
  const { closeModal, wishlist, toggleWishlist, openQuickView } = useShop();
  return (
    <Dialog label="Wishlist" onClose={closeModal} placement="right" className="flex w-[440px] max-w-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-purple-20 px-6 py-5">
        <h2 className="font-seasons text-[28px] font-bold text-ink-deep">Wishlist</h2>
        <span className="text-[13px] text-ink-50">{wishlist.length} saved</span>
      </div>
      {wishlist.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-seasons text-[24px] font-bold text-purple">Nothing saved yet</p>
          <p className="text-[13px] text-ink-70">Tap the heart on any piece to keep it here.</p>
        </div>
      ) : (
        <ul className="flex-1 overflow-y-auto px-6">
          {wishlist.map((p) => (
            <li key={p.slug} className="flex gap-4 border-b border-purple-20 py-5">
              <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-[#f8f7f9]">
                <Image src={p.image} alt="" fill sizes="80px" className="object-contain" />
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <Link href={`/products/${p.slug}`} onClick={closeModal} className="text-[15px] font-semibold text-black hover:text-purple">
                  {p.name}
                </Link>
                <p className="text-[16px] font-extrabold tracking-[-0.8px] text-ink-90">{inr(priceOf(p))}</p>
                <div className="mt-2 flex gap-4 text-[12px] font-semibold text-purple">
                  <button type="button" onClick={() => openQuickView(p)} className="cursor-pointer hover:underline">
                    Add to bag
                  </button>
                  <button type="button" onClick={() => toggleWishlist(p)} className="cursor-pointer hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Dialog>
  );
}
