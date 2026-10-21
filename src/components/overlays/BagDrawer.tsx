"use client";

import Image from "next/image";
import Link from "next/link";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";
import { colourLabel, inr, priceOf } from "@/data/catalog";

export function QuantityStepper({ value, onChange, label }: { value: number; onChange: (delta: number) => void; label: string }) {
  return (
    <div className="flex h-11 items-center gap-3 rounded-full border border-purple-20 bg-white px-4" role="group" aria-label={`Quantity for ${label}`}>
      <button type="button" onClick={() => onChange(-1)} aria-label="Decrease quantity" className="cursor-pointer text-[22px] leading-none text-purple">
        −
      </button>
      <span className="min-w-4 text-center text-[18px] font-semibold text-purple-deep" aria-live="polite">
        {value}
      </span>
      <button type="button" onClick={() => onChange(1)} aria-label="Increase quantity" className="cursor-pointer text-[22px] leading-none text-purple">
        +
      </button>
    </div>
  );
}

export default function BagDrawer() {
  const { closeModal, cart, updateQuantity, removeFromCart, cartSubtotal, cartCount } = useShop();
  return (
    <Dialog label="Shopping bag" onClose={closeModal} placement="right" className="flex w-[440px] max-w-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-purple-20 px-6 py-5">
        <h2 className="font-seasons text-[28px] font-bold text-ink-deep">Your Bag</h2>
        <span className="text-[13px] text-ink-50">
          {cartCount} item{cartCount === 1 ? "" : "s"}
        </span>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="font-seasons text-[24px] font-bold text-purple">Your bag is waiting</p>
          <Link href="/collections" onClick={closeModal} className="rounded-full bg-purple px-6 py-3 text-[14px] font-semibold text-white">
            Explore the collection
          </Link>
        </div>
      ) : (
        <>
          <ul className="flex-1 overflow-y-auto px-6">
            {cart.map((l) => (
              <li key={l.key} className="flex gap-4 border-b border-purple-20 py-5">
                <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-[#f8f7f9]">
                  <Image src={l.product.image} alt="" fill sizes="80px" className="object-contain" />
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <Link href={`/products/${l.product.slug}`} onClick={closeModal} className="text-[15px] font-semibold text-black hover:text-purple">
                    {l.product.name}
                  </Link>
                  <p className="text-[12px] text-ink-50">
                    {l.purity} {colourLabel[l.colour]}
                    {l.size ? ` · Size ${l.size}` : ""}
                  </p>
                  <p className="text-[16px] font-extrabold tracking-[-0.8px] text-ink-90">{inr(priceOf(l.product, l.purity) * l.quantity)}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <QuantityStepper value={l.quantity} onChange={(d) => updateQuantity(l.key, d)} label={l.product.name} />
                    <button type="button" onClick={() => removeFromCart(l.key)} className="cursor-pointer text-[12px] font-semibold text-purple hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-purple-20 bg-purple-10 px-6 py-5">
            <div className="flex justify-between text-[15px] font-semibold text-ink">
              <span>Subtotal</span>
              <span>{inr(cartSubtotal)}</span>
            </div>
            <p className="mt-1 text-[12px] text-ink-70">Inclusive of all taxes · Insured delivery on us</p>
            <Link
              href="/checkout"
              onClick={closeModal}
              className="mt-4 flex h-12 items-center justify-center rounded-full bg-purple text-[16px] font-medium text-white transition-colors hover:bg-purple-deep"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </Dialog>
  );
}
