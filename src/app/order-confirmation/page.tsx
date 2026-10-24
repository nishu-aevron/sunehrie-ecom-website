import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your Sunehriè order has been placed successfully.",
};

const orderItems = [
  { name: "Classic Gold Ring", purity: "14KT Yellow Gold", size: "11", qty: 1, price: 14350, image: "/img/products/classic-gold-ring.png" },
];

export default function OrderConfirmationPage() {
  return (
    <main className="bg-white">
      <section className="page-x py-10 sm:py-16 lg:px-[72px]">
        <div className="mx-auto max-w-[720px] text-center">
          {/* Success icon */}
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-success/10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-success">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1.6px] text-purple sm:text-[44px] sm:leading-[57px]">
            Order Confirmed!
          </h1>
          <p className="mt-3 text-[15px] leading-[22px] text-ink-50">
            Thank you for your purchase. We&apos;ve sent a confirmation email with your order details.
          </p>
        </div>

        {/* Order details card */}
        <div className="mx-auto mt-12 max-w-[720px] rounded-2xl border border-purple-20 bg-white">
          <div className="border-b border-purple-20 px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-medium tracking-[1px] text-ink-50 uppercase">Order Number</p>
                <p className="mt-1 text-[18px] font-bold text-ink">SUN-2024-001234</p>
              </div>
              <div className="text-right">
                <p className="text-[12px] font-medium tracking-[1px] text-ink-50 uppercase">Order Date</p>
                <p className="mt-1 text-[14px] font-semibold text-ink">22 October 2026</p>
              </div>
            </div>
          </div>

          {/* Order items */}
          <div className="px-5 py-5 sm:px-8 sm:py-6">
            <h2 className="text-[14px] font-bold text-ink">Order Items</h2>
            <div className="mt-4 divide-y divide-purple-10">
              {orderItems.map((item) => (
                <div key={item.name} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-purple-20 bg-purple-10">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-ink">{item.name}</p>
                    <p className="mt-0.5 text-[13px] text-ink-50">
                      {item.purity}{item.size ? ` · Size ${item.size}` : ""} · Qty: {item.qty}
                    </p>
                  </div>
                  <p className="text-[15px] font-bold text-ink">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="border-t border-purple-20 px-5 py-5 sm:px-8 sm:py-6">
            <dl className="space-y-2 text-[14px]">
              <div className="flex justify-between">
                <dt className="text-ink-50">Subtotal</dt>
                <dd className="font-semibold">₹14,350</dd>
              </div>
              <div className="flex justify-between text-success">
                <dt>Discount</dt>
                <dd className="font-semibold">−₹2,184</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-50">Shipping</dt>
                <dd className="font-semibold text-success">FREE</dd>
              </div>
              <div className="flex justify-between border-t border-purple-20 pt-3 text-[16px]">
                <dt className="font-bold">Total Paid</dt>
                <dd className="font-extrabold">₹14,350</dd>
              </div>
            </dl>
          </div>

          {/* Shipping & Payment details */}
          <div className="border-t border-purple-20 px-5 py-5 sm:px-8 sm:py-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[12px] font-medium tracking-[1px] text-ink-50 uppercase">Payment Method</p>
                <p className="mt-2 text-[14px] font-semibold text-ink">UPI / Credit Card</p>
              </div>
              <div>
                <p className="text-[12px] font-medium tracking-[1px] text-ink-50 uppercase">Shipping Address</p>
                <p className="mt-2 text-[14px] leading-[20px] text-ink">
                  123, Diamond Street<br />
                  Godhra, Gujarat 389001
                </p>
              </div>
            </div>
          </div>

          {/* Estimated delivery */}
          <div className="border-t border-purple-20 px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center gap-3 rounded-xl bg-purple-10 px-4 py-3 sm:px-5 sm:py-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-purple">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-purple">Estimated Delivery</p>
                <p className="text-[13px] text-ink-50">5–7 business days · Free insured delivery with tamper-proof packaging</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-10 flex max-w-[720px] flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-purple px-8 py-3.5 text-[14px] font-semibold text-purple transition-colors hover:bg-purple-10"
          >
            Track Your Order
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center rounded-full bg-purple px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Continue Shopping
          </Link>
        </div>
      </section>

      <div className="pb-12">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
