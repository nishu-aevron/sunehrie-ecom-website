"use client";

import Image from "next/image";
import { X, ShoppingBag, Trash2, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#ece3f0] flex items-center justify-between bg-[#fbf8fd]">
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-[#7a3f91] fill-[#7a3f91]" />
              <h3
                className="text-[18px] font-bold text-[#2e093d]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                My Wishlist ({wishlist.length})
              </h3>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-8 h-8 rounded-full bg-[#f4edf8] hover:bg-[#ece0f2] text-[#2e093d] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={17} />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#f4edf8] text-[#7a3f91] flex items-center justify-center mx-auto mb-4">
                  <Heart size={28} />
                </div>
                <h4 className="text-[16px] font-bold text-[#2e093d] mb-1">Your wishlist is empty</h4>
                <p className="text-[13px] text-[#8e7a9b] max-w-[240px] mx-auto mb-6">
                  Save your favourite jewellery pieces here by tapping the heart icon.
                </p>
                <a
                  href="#collection"
                  onClick={() => setIsWishlistOpen(false)}
                  className="inline-block px-7 py-2.5 rounded-full bg-[#7a3f91] text-white text-[13px] font-semibold tracking-wider uppercase hover:bg-[#5a2d6e] transition-colors"
                >
                  Explore Jewellery
                </a>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-2xl border border-[#eee4f2] bg-white hover:shadow-sm transition-shadow"
                >
                  <div className="relative w-20 h-20 bg-[#faf6fc] rounded-xl overflow-hidden flex-shrink-0 border border-[#f4edf8]">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[13px] font-bold text-[#2e093d] line-clamp-1">{item.name}</h4>
                      <div className="text-[11px] text-[#8e7a9b] mt-0.5">{item.purity} • {item.specs}</div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-[15px] font-black text-[#240632]">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-[11px] text-[#917d9b] line-through">{item.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => {
                          addToCart(item);
                          toggleWishlist(item);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white text-[11px] font-bold uppercase transition-colors"
                      >
                        <ShoppingBag size={13} />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-[#9682a2] hover:text-red-500 p-1 transition-colors"
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
