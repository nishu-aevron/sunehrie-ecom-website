"use client";

import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartCount, cartSubtotal, cartDiscount, cartTotal } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#ece3f0] flex items-center justify-between bg-[#fbf8fd]">
            <div className="flex items-center gap-2.5">
              <div className="relative w-5 h-5">
                <Image src="/images/icon-cart.svg" alt="Bag" fill className="object-contain" />
              </div>
              <h3
                className="text-[18px] font-bold text-[#2e093d]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Shopping Bag ({cartCount})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-[#f4edf8] hover:bg-[#ece0f2] text-[#2e093d] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={17} />
            </button>
          </div>

          {/* Free Shipping Alert */}
          <div className="bg-[#fcf8e3] border-b border-[#f3e5ab] px-4 py-2 flex items-center gap-2 text-[12px] text-[#7d5e0a]">
            <Truck size={14} className="text-[#cca338]" />
            <span>Eligible for <strong>Free Insured Shipping</strong> &amp; 48-Hr Return!</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#f4edf8] text-[#7a3f91] flex items-center justify-center mx-auto mb-4">
                  <div className="relative w-8 h-8 opacity-80">
                    <Image src="/images/icon-cart.svg" alt="Bag" fill className="object-contain" />
                  </div>
                </div>
                <h4 className="text-[16px] font-bold text-[#2e093d] mb-1">Your bag is empty</h4>
                <p className="text-[13px] text-[#8e7a9b] max-w-[240px] mx-auto mb-6">
                  Add pieces from our 9KT/14KT gold and diamond collection to begin.
                </p>
                <a
                  href="#collection"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block px-7 py-2.5 rounded-full bg-[#7a3f91] text-white text-[13px] font-semibold tracking-wider uppercase hover:bg-[#5a2d6e] transition-colors"
                >
                  Start Shopping
                </a>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.metalColor}`}
                  className="flex gap-4 p-3.5 rounded-2xl border border-[#eee4f2] bg-white"
                >
                  <div className="relative w-20 h-20 bg-[#faf6fc] rounded-xl overflow-hidden flex-shrink-0 border border-[#f4edf8]">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-[13px] font-bold text-[#2e093d] line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#9682a2] hover:text-red-500 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] bg-[#f4edf8] text-[#7a3f91] px-2 py-0.5 rounded-full font-semibold uppercase">
                          {item.metalColor} Gold
                        </span>
                        <span className="text-[11px] text-[#8e7a9b]">{item.purity}</span>
                      </div>

                      <div className="flex items-baseline gap-2 mt-1.5">
                        <span className="text-[15px] font-black text-[#240632]">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-[11px] text-[#917d9b] line-through">{item.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#decfe5] rounded-full overflow-hidden bg-[#faf6fc]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#2e093d] hover:bg-[#ece0f2] transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-[12px] font-bold text-[#2e093d]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#2e093d] hover:bg-[#ece0f2] transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <span className="text-[13px] font-extrabold text-[#7a3f91]">
                        ₹{(item.priceNumber * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#ece3f0] bg-[#fbf8fd] space-y-3">
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between text-[#685273]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#240632]">₹{cartSubtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[#079455]">
                  <span>25% Off Making Charges</span>
                  <span className="font-semibold">-₹{cartDiscount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[#685273]">
                  <span>Estimated GST (3%)</span>
                  <span className="font-semibold text-[#240632]">₹{Math.round((cartSubtotal - cartDiscount) * 0.03).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[16px] font-black text-[#240632] pt-2 border-t border-[#decfe5]">
                  <span>Total Amount</span>
                  <span className="text-[#7a3f91]">₹{cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                onClick={() => alert("Redirecting to Secure Checkout...")}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#7a3f91] via-[#63297a] to-[#431456] text-white font-bold text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={17} />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8e7a9b] pt-1">
                <ShieldCheck size={14} className="text-[#079455]" />
                <span>100% Certified by IGI + BIS Hallmark • Insured Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
