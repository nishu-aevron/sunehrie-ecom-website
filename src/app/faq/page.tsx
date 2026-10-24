"use client";

import Link from "next/link";
import { useState } from "react";
import TrustStrip from "@/components/TrustStrip";

const categories = ["All", "Orders & Shipping", "Payments", "Returns", "Products", "Account", "Jewellery Care"];

const faqs: { category: string; question: string; answer: string }[] = [
  { category: "Orders & Shipping", question: "How long does delivery take?", answer: "Standard delivery takes 5–7 business days across India. Metro cities may receive orders in 3–5 days. All shipments are insured and require a signature on delivery." },
  { category: "Orders & Shipping", question: "How can I track my order?", answer: "Once your order ships, you'll receive a tracking link via SMS and email. You can also track it from your My Account dashboard under 'My Orders'." },
  { category: "Orders & Shipping", question: "Do you ship internationally?", answer: "Currently, we ship within India only. International shipping is planned for the future — subscribe to our newsletter for updates." },
  { category: "Orders & Shipping", question: "Is my order insured during delivery?", answer: "Yes. Every order is fully insured from the moment it leaves our facility until you sign for it. Tamper-evident packaging ensures your piece arrives safely." },
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept UPI, credit/debit cards (Visa, Mastercard, Amex), net banking, and EMI options through select banks. Cash on delivery is not available for jewellery orders." },
  { category: "Payments", question: "Do you offer EMI?", answer: "Yes, EMI is available on select credit cards for orders above ₹10,000. EMI options are shown at checkout based on your card issuer." },
  { category: "Payments", question: "Is my payment information secure?", answer: "All transactions are processed through PCI-DSS compliant payment gateways. We never store your card details on our servers." },
  { category: "Returns", question: "What is your return policy?", answer: "We offer a 48-hour return and exchange window from the date of delivery. The piece must be in its original condition with all tags, certificates, and packaging intact." },
  { category: "Returns", question: "How do I initiate a return?", answer: "Contact us at sunehrie.care@gmail.com or call +91 93273 31963 within 48 hours of delivery. Our team will arrange a secure pickup at no extra cost." },
  { category: "Returns", question: "Can I exchange for a different design?", answer: "Yes, you can exchange for any piece of equal or greater value. If the new piece costs more, you pay the difference; if less, we issue a store credit." },
  { category: "Products", question: "Are your diamonds natural?", answer: "Yes, every diamond in our collection is 100% natural and IGI-certified. We do not use lab-grown or simulated diamonds in any of our jewellery." },
  { category: "Products", question: "What does BIS Hallmark mean?", answer: "BIS Hallmark is a certification by the Bureau of Indian Standards confirming the purity of gold. Each hallmarked piece carries a unique HUID (Hallmark Unique Identification) number that can be verified online." },
  { category: "Products", question: "What gold purities do you offer?", answer: "We offer jewellery in 9KT (37.5% gold), 14KT (58.5% gold), and 18KT (75% gold). 9KT is our most accessible option — real gold at an approachable price point." },
  { category: "Account", question: "How do I create an account?", answer: "Click on the user icon in the header and select 'Sign Up'. You can register with your email or phone number. An account lets you track orders, save wishlist items, and manage your addresses." },
  { category: "Account", question: "I forgot my password. How do I reset it?", answer: "On the sign-in page, click 'Forgot Password'. Enter your registered email or phone number, and we'll send you a reset link valid for 24 hours." },
  { category: "Jewellery Care", question: "How should I store my jewellery?", answer: "Store each piece separately in the pouch or box provided to prevent scratching. Keep away from perfumes, lotions, and moisture. Gold and diamond pieces can be gently cleaned with a soft cloth." },
  { category: "Jewellery Care", question: "Can I wear my jewellery in the shower?", answer: "We recommend removing jewellery before showering, swimming, or exercising. Prolonged exposure to water, soap, and chemicals can dull the finish over time." },
];

export default function FaqPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = faqs.filter((faq) => {
    const matchCategory = active === "All" || faq.category === active;
    const matchSearch = !search || faq.question.toLowerCase().includes(search.toLowerCase()) || faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="page-x relative pt-[30px] pb-[40px]">
        <svg className="pointer-events-none absolute top-[-6px] right-0 h-[312px] w-[134px] text-purple-10" viewBox="0 0 134 312" fill="currentColor" aria-hidden>
          <ellipse cx="134" cy="156" rx="134" ry="156" />
        </svg>
        <nav aria-label="Breadcrumb" className="relative flex items-center gap-1 text-ink-50 text-[12px] leading-5">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter text-[14px]">/</span>
          <span className="text-ink">FAQ</span>
        </nav>
        <div className="relative mt-[38px] flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1.6px] text-ink sm:text-[44px] lg:text-[52px]">Frequently Asked Questions</h1>
            <p className="mt-[12px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              Find answers to common questions about orders, payments, returns, and our jewellery.
            </p>
          </div>
          <div className="relative w-full shrink-0 sm:w-[300px]">
            <svg className="pointer-events-none absolute top-1/2 left-[16px] size-[17px] -translate-y-1/2 text-ink-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Search questions…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-purple-20 bg-white py-[12px] pr-4 pl-[45px] text-[13px] text-ink outline-none transition-colors focus:border-purple" />
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="page-x pb-[16px]">
        <div className="no-scrollbar flex gap-[10px] overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setActive(cat); setOpenIdx(null); }}
              className={`whitespace-nowrap rounded-full border px-[18px] py-[12px] text-[13px] font-semibold transition-colors ${
                active === cat ? "border-purple bg-purple text-white" : "border-purple-20 bg-white text-ink hover:border-purple hover:text-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ list */}
      <section className="page-x pb-[72px]">
        <div className="mt-[24px] flex flex-col">
          {filtered.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.question} className="border-b border-purple-20">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-[20px] text-left"
                >
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
                    <span className="w-full sm:max-w-[240px] text-[15px] font-semibold text-ink">{faq.question}</span>
                    {!isOpen && (
                      <span className="hidden text-[14px] leading-[24px] text-ink-70 sm:block sm:flex-1 truncate">{faq.answer}</span>
                    )}
                  </div>
                  <svg className={`size-5 shrink-0 text-purple transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="pb-[20px] text-[14px] leading-[24px] text-ink-70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className="py-[40px] text-center text-[15px] text-ink-50">No questions match your search. Try a different term.</p>
          )}
        </div>
      </section>

      {/* Still have questions */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-4 py-5 mb-[24px] sm:rounded-[38px] sm:px-[25px] sm:py-[25px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-seasons text-[24px] font-bold tracking-[-0.4px] text-ink sm:text-[28px]">Still Have Questions?</h2>
            <p className="mt-[12px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              Our team is here to help — reach out via email at sunehrie.care@gmail.com or call +91 93273 31963.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <div className="py-[24px]">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
