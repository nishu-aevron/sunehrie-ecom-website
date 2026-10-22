"use client";

import Image from "next/image";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import RelatedProducts from "@/components/RelatedProducts";
import TrustStrip from "@/components/TrustStrip";
import { catalog, colourLabel, inr, mrpOf, priceOf } from "@/data/catalog";

export default function BagPage() {
  const { cart, updateQuantity, removeFromCart, cartCount, cartSubtotal, cartSavings } = useShop();
  const shipping = 0;
  const total = cartSubtotal - cartSavings + shipping;

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative page-x pt-7 pb-10 lg:px-[72px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] leading-4 text-ink-50">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter">/</span>
          <span className="text-ink font-medium">Shopping Bag</span>
        </nav>
        <div className="mt-10">
          <h1 className="font-seasons text-[44px] leading-[57px] font-bold tracking-[-1.6px] text-purple">
            Shopping Bag
          </h1>
          <p className="mt-2 text-[15px] text-ink-50">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
          </p>
        </div>
        <div className="pointer-events-none absolute top-[-6px] right-0 h-[312px] w-[134px] overflow-hidden opacity-[0.06]">
          <Image src="/icons/footer/bird-watermark.svg" alt="" fill className="object-contain" />
        </div>
      </section>

      {cart.length === 0 ? (
        <section className="page-x flex flex-col items-center py-24 text-center lg:px-[72px]">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-purple-10">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h2 className="font-seasons text-[28px] font-bold text-purple">Your bag is empty</h2>
          <p className="mt-2 max-w-md text-[15px] text-ink-50">
            Explore our collection and add your favourite pieces to the bag.
          </p>
          <Link
            href="/collections"
            className="mt-8 inline-flex items-center rounded-full bg-purple px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="page-x pb-16 lg:px-[72px]">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Cart items */}
            <div className="flex-1">
              <div className="divide-y divide-purple-20">
                {cart.map((line) => (
                  <div key={line.key} className="flex gap-5 py-6 first:pt-0">
                    <Link href={`/products/${line.product.slug}`} className="relative size-[120px] shrink-0 overflow-hidden rounded-2xl border border-purple-20 bg-purple-10">
                      <Image src={line.product.image} alt={line.product.name} fill className="object-cover" sizes="120px" />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link href={`/products/${line.product.slug}`} className="text-[15px] font-semibold text-ink hover:text-purple">
                          {line.product.name}
                        </Link>
                        <div className="mt-1 flex flex-wrap gap-x-3 text-[13px] text-ink-50">
                          <span>{line.purity} {colourLabel[line.colour]}</span>
                          {line.size && <span>Size: {line.size}</span>}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-0.5 rounded-full border border-purple-20">
                          <button
                            type="button"
                            onClick={() => updateQuantity(line.key, -1)}
                            className="flex size-9 items-center justify-center rounded-full text-[18px] text-ink-50 transition-colors hover:bg-purple-10 hover:text-purple"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-[14px] font-semibold">{line.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(line.key, 1)}
                            className="flex size-9 items-center justify-center rounded-full text-[18px] text-ink-50 transition-colors hover:bg-purple-10 hover:text-purple"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-[16px] font-extrabold tracking-[-0.4px] text-ink">
                            {inr(priceOf(line.product, line.purity) * line.quantity)}
                          </p>
                          <p className="text-[12px] text-ink-50 line-through">
                            {inr(mrpOf(line.product, line.purity) * line.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(line.key)}
                      aria-label={`Remove ${line.product.name}`}
                      className="self-start p-1 text-ink-50 transition-colors hover:text-purple"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="w-full lg:w-[400px]">
              <div className="sticky top-8 rounded-2xl border border-purple-20 bg-white p-6">
                <h2 className="text-[18px] font-bold text-ink">Order Summary</h2>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex justify-between">
                    <dt className="text-ink-50">Subtotal ({cartCount} items)</dt>
                    <dd className="font-semibold">{inr(cartSubtotal)}</dd>
                  </div>
                  {cartSavings > 0 && (
                    <div className="flex justify-between text-success">
                      <dt>Discount</dt>
                      <dd className="font-semibold">−{inr(cartSavings)}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-ink-50">Shipping</dt>
                    <dd className="font-semibold text-success">FREE</dd>
                  </div>
                  <div className="border-t border-purple-20 pt-3">
                    <div className="flex justify-between text-[16px]">
                      <dt className="font-bold">Total</dt>
                      <dd className="font-extrabold">{inr(cartSubtotal)}</dd>
                    </div>
                    {cartSavings > 0 && (
                      <p className="mt-1 text-[12px] text-success">
                        You save {inr(cartSavings)} on this order
                      </p>
                    )}
                  </div>
                </dl>
                <Link
                  href="/order-confirmation"
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-purple py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/collections"
                  className="mt-3 flex w-full items-center justify-center rounded-full border border-purple py-3 text-[14px] font-semibold text-purple transition-colors hover:bg-purple-10"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="py-8">
        <TrustStrip variant="light" />
      </div>

      <div className="pb-16">
        <RelatedProducts title="You May Also Like" products={catalog.slice(0, 8)} />
      </div>
    </main>
  );
}
