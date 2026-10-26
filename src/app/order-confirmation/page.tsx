import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your Sunehriè order has been placed successfully.",
};

const order = {
  id: "SUN-84920",
  customer: "Ananya",
  email: "ananya.shah@gmail.com",
  item: { name: "Classic Gold Ring", meta: "14KT · Yellow gold · Ring size 11 · Qty 1", price: "₹14,350", image: "/img/products/classic-gold-ring.png" },
  info: [
    { label: "Delivery", value: "Insured home delivery · Arrives 20–22 October · Signature required" },
    { label: "Shipping to", value: "Ananya Shah, 24 Lotus Residency, C. G. Road, Ahmedabad, Gujarat 380006" },
    { label: "Payment", value: "Visa •••• 4242" },
  ],
  subtotal: "₹14,350",
  total: "₹14,350",
};

const nextSteps = [
  { title: "We prepare your piece", body: "Hand-checked, hallmarked and packed in tamper-proof gift packaging." },
  { title: "It ships, fully insured", body: "You will get tracking updates by SMS and email." },
  { title: "Delivered with a signature", body: "Arriving 20–22 October. Returns and exchange within 48 hours." },
];

export default function OrderConfirmationPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-4 pt-10 pb-14 sm:px-8 sm:pt-14 lg:gap-12 lg:px-[72px] lg:pb-[72px]">
        {/* Success */}
        <section className="flex w-full flex-col items-center gap-4 text-center">
          <div className="flex size-[84px] items-center justify-center rounded-full border-[1.5px] border-gold-deep bg-gold-deep/10 text-[36px] leading-none font-bold text-gold-deep" aria-hidden>
            ✓
          </div>
          <ol className="flex flex-wrap items-center justify-center gap-2.5 text-[13px] text-purple" aria-label="Checkout progress">
            <li className="font-medium">✓ Shopping Bag</li>
            <li aria-hidden className="h-px w-8 bg-[#cdbfd6] sm:w-[60px]" />
            <li className="font-medium">✓ Checkout</li>
            <li aria-hidden className="h-px w-8 bg-[#cdbfd6] sm:w-[60px]" />
            <li className="font-bold" aria-current="step">3 Confirmation</li>
          </ol>
          <p className="text-[12px] font-bold tracking-[1.2px] text-gold-deep uppercase">Order confirmed</p>
          <h1 className="font-seasons text-[40px] leading-[1.12] text-ink sm:text-[52px] lg:text-[64px]">Thank you, {order.customer}.</h1>
          <p className="max-w-[620px] text-[15px] leading-[1.45] text-[#6b5b75] sm:text-[17px]">
            Your order #{order.id} is confirmed. A receipt and tracking details have been sent to {order.email}.
          </p>
        </section>

        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
          {/* Order details */}
          <section className="flex min-w-0 flex-1 flex-col gap-[18px] rounded-[24px] border border-[#ebe3f0] bg-white p-5 sm:p-8">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-seasons text-[24px] leading-[1.12] text-ink sm:text-[30px]">Order #{order.id}</h2>
              <p className="shrink-0 text-[12.5px] text-ink-50">Placed today</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative size-[72px] shrink-0 overflow-hidden rounded-[14px] border border-[#ebe3f0] sm:size-[100px]">
                <Image src={order.item.image} alt={order.item.name} fill sizes="100px" className="object-contain" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-[3px] leading-[1.45]">
                <p className="text-[16px] font-bold text-ink sm:text-[18px]">{order.item.name}</p>
                <p className="text-[13px] text-[#6b5b75] sm:text-[14px]">{order.item.meta}</p>
              </div>
              <p className="shrink-0 text-[16px] font-bold text-ink sm:text-[18px]">{order.item.price}</p>
            </div>
            <hr className="border-[#ebe3f0]" />
            <dl className="grid gap-5 leading-[1.45] sm:grid-cols-3 sm:gap-10">
              {order.info.map((i) => (
                <div key={i.label} className="flex flex-col gap-1">
                  <dt className="text-[12px] font-bold tracking-[1.2px] text-ink-50 uppercase">{i.label}</dt>
                  <dd className="text-[14px] font-medium text-ink">{i.value}</dd>
                </div>
              ))}
            </dl>
            <hr className="border-[#ebe3f0]" />
            <dl className="flex flex-col gap-[18px] leading-[1.45]">
              <div className="flex items-center justify-between text-[15px]">
                <dt className="text-[#6b5b75]">Subtotal</dt>
                <dd className="font-semibold text-ink">{order.subtotal}</dd>
              </div>
              <div className="flex items-center justify-between text-[15px]">
                <dt className="text-[#6b5b75]">Insured delivery</dt>
                <dd className="font-semibold text-success">Complimentary</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-[15px] font-bold text-ink">Total paid</dt>
                <dd className="text-[24px] font-bold text-ink">{order.total}</dd>
              </div>
            </dl>
          </section>

          {/* What happens next */}
          <aside className="flex w-full flex-col gap-4 lg:w-[420px] lg:shrink-0">
            <section className="flex flex-col gap-4 rounded-[24px] border border-[#ebe3f0] bg-purple-10 p-6 sm:p-7">
              <h2 className="font-seasons text-[26px] leading-[1.12] text-ink sm:text-[30px]">What happens next</h2>
              <ol className="flex flex-col gap-4">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-purple text-[12.5px] font-bold text-white">{i + 1}</span>
                    <div className="flex flex-col gap-0.5 leading-[1.45]">
                      <p className="text-[15px] font-bold text-ink">{s.title}</p>
                      <p className="text-[13.5px] text-[#6b5b75]">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/account"
                className="flex h-[52px] items-center justify-center rounded-[26px] bg-purple text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep"
              >
                Track my order
              </Link>
              <Link
                href="/collections"
                className="flex h-[52px] items-center justify-center rounded-[26px] border border-purple bg-white text-[15px] font-semibold text-purple transition-colors hover:bg-purple-10"
              >
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
