"use client";

import Link from "next/link";
import { useState } from "react";
import TrustStrip from "@/components/TrustStrip";

const steps = [
  {
    num: "01",
    title: "Choose Your Design",
    description: "Start with one of our existing designs or share your own sketch, photograph or inspiration. Our design team will create a detailed CAD rendering for your approval.",
  },
  {
    num: "02",
    title: "Select Metal & Stones",
    description: "Pick your preferred karatage (9KT, 14KT or 18KT), metal colour (yellow, rose or white gold) and diamond specifications. We source only IGI-certified natural diamonds.",
  },
  {
    num: "03",
    title: "Approve the Mockup",
    description: "Review a 3D-rendered mockup of your piece with exact dimensions, stone placement and weight estimate. Request changes until it is exactly right.",
  },
  {
    num: "04",
    title: "Crafted & Delivered",
    description: "Our artisans handcraft your piece with the same precision as our collection. It ships with a BIS hallmark certificate and IGI diamond grading report.",
  },
];

const options = [
  {
    title: "Metal Type & Karatage",
    description: "Choose from 9KT, 14KT or 18KT in yellow, rose or white gold. Each combination affects the final colour, durability and price of your piece.",
  },
  {
    title: "Diamond Selection",
    description: "Select the carat weight, cut grade, clarity and colour of your centre stone and side stones. Our advisors help you balance brilliance with budget.",
  },
  {
    title: "Engraving",
    description: "Add a personal message, date or initials engraved on the inside of a ring or the back of a pendant. Up to 20 characters in your choice of font.",
  },
  {
    title: "Design Modifications",
    description: "Adjust band width, prong style, halo shape, chain length or any other element. Minor modifications are included; major redesigns may involve an additional design fee.",
  },
];

const faqs = [
  {
    q: "How long does a custom piece take?",
    a: "Most custom pieces take 4–6 weeks from design approval to delivery. Complex designs with multiple stones or intricate detailing may take up to 8 weeks.",
  },
  {
    q: "Is there a minimum order value?",
    a: "Custom orders start at ₹25,000. This ensures the craftsmanship and materials meet Sunehrie's quality standards.",
  },
  {
    q: "Can I customise an existing Sunehrie design?",
    a: "Absolutely. You can modify the metal colour, karatage, stone size, band width or any other element of an existing piece from our collection.",
  },
  {
    q: "What if I do not like the mockup?",
    a: "You can request up to three rounds of revisions at no additional cost. If you decide not to proceed after the mockup, there is no obligation to purchase.",
  },
  {
    q: "Do custom pieces come with the same certifications?",
    a: "Yes. Every custom piece ships with a BIS hallmark for the gold and an IGI certificate for diamonds above 0.15 carats.",
  },
  {
    q: "Can I return or exchange a custom piece?",
    a: "Custom pieces are made to your specifications and cannot be returned. However, we offer a one-time resize within 30 days for rings and bracelets.",
  },
];

export default function CustomizePage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Customize Your Jewellery</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[52px]">
          Customize Your Jewellery
        </h1>
        <p className="mt-3 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          Every great piece of jewellery starts with a vision. Our bespoke service brings yours to life — from concept to creation, crafted with the same hallmarked gold and certified diamonds as our collection.
        </p>
      </section>

      {/* Process Steps */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[38px] bg-purple-10 px-[72px] py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">The Process</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">
          From Idea to Heirloom in Four Steps
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-purple-20 bg-white p-8">
              <span className="flex size-10 items-center justify-center rounded-lg bg-purple-10 text-[14px] font-bold text-purple">{s.num}</span>
              <h3 className="mt-5 text-[16px] font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-[13px] leading-[20px] text-ink-70">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customization Options */}
      <section className="page-x py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Your Choices</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">Customization Options</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {options.map((o) => (
            <div key={o.title} className="rounded-2xl border border-purple-20 bg-white p-8">
              <h3 className="font-seasons text-[22px] leading-[1.2] font-bold tracking-[-0.3px] text-ink">{o.title}</h3>
              <p className="mt-3 text-[14px] leading-[22px] text-ink-70">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[38px] bg-purple-10 px-[72px] py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Transparent Pricing</p>
            <h2 className="mt-2 font-seasons text-[30px] leading-[1.1] font-bold tracking-[-0.5px] text-ink sm:text-[36px]">What You Pay For</h2>
            <p className="mt-4 text-[15px] leading-[24px] text-ink-70">
              Custom pieces are priced exactly like our collection — gold weight at the day&apos;s rate, IGI-certified diamond value, making charges and GST. You receive a full price breakup before confirming your order. No surprises.
            </p>
            <p className="mt-4 text-[15px] leading-[24px] text-ink-70">
              A 50% advance is collected at the time of design approval. The balance is due before shipping.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Timeline</p>
            <h2 className="mt-2 font-seasons text-[30px] leading-[1.1] font-bold tracking-[-0.5px] text-ink sm:text-[36px]">4 – 6 Weeks</h2>
            <p className="mt-4 text-[15px] leading-[24px] text-ink-70">
              From the moment you approve the final mockup, your piece enters production. You will receive progress updates at key milestones — casting, stone-setting and final polish.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {["Design consultation: 1–2 days", "CAD rendering: 3–5 days", "Production: 3–4 weeks", "Quality check & shipping: 2–3 days"].map((line) => (
                <p key={line} className="flex items-center gap-2 text-[14px] text-ink-70">
                  <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="#079455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-x py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-0.5px] text-ink">Ready to Create Something Unique?</h2>
          <p className="max-w-[500px] text-[15px] leading-[24px] text-ink-70">
            Book a complimentary design consultation with our jewellery advisors.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex h-12 items-center justify-center rounded-[50px] bg-purple px-8 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-x pb-20">
        <h2 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-0.5px] text-ink">Common Questions</h2>
        <div className="mt-8 flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-purple-20">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
              >
                <span className="pr-4 text-[15px] font-semibold text-ink">{faq.q}</span>
                <svg
                  className={`shrink-0 text-purple transition-transform ${open === i ? "rotate-180" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 pr-8 text-[14px] leading-[22px] text-ink-70">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
