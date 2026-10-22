"use client";

import Link from "next/link";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import TrustStrip from "@/components/TrustStrip";
import { inr, priceOf } from "@/data/catalog";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, showToast } = useShop();

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative page-x pt-7 pb-10 lg:px-[72px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] leading-4 text-ink-50">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter">/</span>
          <Link href="/bag" className="hover:text-purple hover:underline">Shopping bag</Link>
          <span className="font-inter">/</span>
          <span className="text-ink font-medium">Wishlist</span>
        </nav>

        <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-seasons text-[44px] leading-[57px] font-bold tracking-[-1.6px] text-purple">
              My Wishlist
            </h1>
            <p className="mt-2.5 text-[15px] leading-[21px] text-ink-50">
              Pieces you&apos;ve saved for later — ready when you are.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[13px]">
            <span className="text-ink-50">{wishlist.length} {wishlist.length === 1 ? "piece" : "pieces"} saved</span>
          </div>
        </div>

        {/* Brand flourish */}
        <div className="pointer-events-none absolute top-[-6px] right-0 h-[312px] w-[134px] overflow-hidden opacity-[0.06]">
          <Image src="/icons/footer/bird-watermark.svg" alt="" fill className="object-contain" />
        </div>
      </section>

      {/* Wishlist grid or empty state */}
      {wishlist.length === 0 ? (
        <section className="page-x flex flex-col items-center py-24 text-center lg:px-[72px]">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-purple-10">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h2 className="font-seasons text-[28px] font-bold text-purple">Your wishlist is empty</h2>
          <p className="mt-2 max-w-md text-[15px] text-ink-50">
            Browse our collection and save your favourite pieces for later.
          </p>
          <Link
            href="/collections"
            className="mt-8 inline-flex items-center rounded-full bg-purple px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="page-x pb-12 lg:px-[50px]">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-seasons text-[28px] font-bold tracking-[-0.8px] text-purple">
              Saved Pieces <span className="text-ink-50 font-manrope text-[16px] font-normal">({wishlist.length})</span>
            </h2>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => showToast("Share link copied!")}
                className="flex items-center gap-1.5 text-[14px] font-medium text-purple hover:underline"
              >
                Share wishlist
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="text-purple">
                  <path d="M3.5 8.5h10m0 0L9 4m4.5 4.5L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-[13px] text-ink-50">Sort: Recently added</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-[14.5px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div key={product.slug} className="flex flex-col">
                <ProductCard product={product} />
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product);
                    toggleWishlist(product);
                  }}
                  className="mt-3.5 w-full rounded-full border border-purple py-3 text-[14px] font-semibold text-purple transition-colors hover:bg-purple hover:text-white"
                >
                  Move to Bag
                </button>
                <div className="mt-3 flex items-center justify-between px-1 text-[12px]">
                  <span className={`font-medium ${product.inStock ? "text-success" : "text-ink-50"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className="text-ink-50 hover:text-purple hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-[14px] leading-5 text-ink-50">
            Prices may change since items were added. Wishlist is saved to your account for 60 days.
          </p>
        </section>
      )}

      {/* Personal Assistance */}
      <section className="mx-auto my-12 flex w-[calc(100%-27px)] max-w-[1415px] flex-col items-center justify-between gap-6 rounded-[38px] bg-purple-10 px-8 py-12 sm:flex-row sm:px-[72px] sm:py-12">
        <div>
          <h2 className="font-seasons text-[28px] font-bold tracking-[-0.8px] text-purple">
            Need Personal Assistance?
          </h2>
          <p className="mt-3 text-[15px] text-ink-70">
            Our jewellery consultants are here to help you choose the perfect piece.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-purple px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
