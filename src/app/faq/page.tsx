"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const groups: { topic: string; id: string; faqs: { q: string; a: string }[] }[] = [
  {
    topic: "Orders & Delivery",
    id: "orders",
    faqs: [
      {
        q: "How long does delivery take?",
        a: "Most ready-to-ship pieces arrive in 3–5 working days. Made-to-order and resized pieces take 10–14 days. Every order is fully insured and needs a signature on delivery.",
      },
      {
        q: "Can I collect my order from a store?",
        a: "Yes. Choose store pickup at checkout and collect your order from our Godhra or Lunawada showroom once you receive the ready-for-pickup message. Please carry a photo ID.",
      },
      {
        q: "How do I track my order?",
        a: "We send tracking updates by SMS and email as soon as your order ships. You can also follow every step from Orders & Shipments in My Account.",
      },
    ],
  },
  {
    topic: "Returns & Exchange",
    id: "returns",
    faqs: [
      {
        q: "What is the return window?",
        a: "You can return or exchange an eligible piece within 48 hours of delivery, in its original, unworn condition with all certificates and packaging.",
      },
      {
        q: "Which pieces cannot be returned?",
        a: "Customised, engraved, resized and made-to-order pieces, as well as gold coins, cannot be returned. They can still be covered by our exchange and buy-back policy.",
      },
      {
        q: "How are refunds issued?",
        a: "Once your return passes our quality check, the refund goes back to your original payment method within 5–7 working days.",
      },
    ],
  },
  {
    topic: "Gold & Diamonds",
    id: "gold-diamonds",
    faqs: [
      {
        q: "What do 9KT, 14KT and 18KT mean?",
        a: "Karat tells you how much of the metal is pure gold: 9KT is about 37.5%, 14KT about 58.5% and 18KT about 75%. Lower karats are stronger for daily wear; higher karats have a richer colour.",
      },
      {
        q: "Are your diamonds natural and certified?",
        a: "Yes. We use only natural diamonds — never lab-grown or simulated — and certified stones come with IGI documentation you can verify online.",
      },
      {
        q: "Is your gold hallmarked?",
        a: "Every piece of Sunehriè gold jewellery is BIS hallmarked and carries a unique HUID number, which you can check on the BIS CARE app.",
      },
    ],
  },
  {
    topic: "Payments",
    id: "payments",
    faqs: [
      {
        q: "Which payment methods do you accept?",
        a: "We accept UPI, credit and debit cards, net banking and EMI on select cards. All payments go through secure, PCI-DSS compliant gateways.",
      },
      {
        q: "Are prices inclusive of tax?",
        a: "Yes. All prices shown include GST, and every product page shows a full price breakup of gold, diamonds, making charges and tax.",
      },
    ],
  },
  {
    topic: "Care & Resizing",
    id: "care",
    faqs: [
      {
        q: "Can a ring be resized?",
        a: "Most rings can be resized by up to two sizes. Your first resize within six months is complimentary; it usually takes 10–14 days.",
      },
      {
        q: "How should I care for my jewellery?",
        a: "Store each piece separately in its pouch, keep it away from perfume and lotions, and clean gently with warm soapy water and a soft brush. Visit us once a year for a free check of prongs and clasps.",
      },
    ],
  },
];

export default function FaqPage() {
  const { openModal } = useShop();
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState(groups[0].id);
  // The first answer in each group starts open, as in the design.
  const [open, setOpen] = useState<Set<string>>(() => new Set(groups.map((g) => `${g.id}-0`)));

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups.map((g) => ({ ...g, faqs: g.faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q)) })).filter((g) => g.faqs.length);
  }, [query]);

  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const goToTopic = (id: string) => {
    setActiveTopic(id);
    document.getElementById(`faq-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-purple-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[14px] px-4 py-10 sm:px-8 lg:px-[72px] lg:py-[52px]">
          <nav aria-label="Breadcrumb" className="text-[13px] leading-[1.45] text-[#6b5b75]">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>FAQs</span>
          </nav>
          <h1 className="font-seasons text-[38px] leading-[1.12] text-ink sm:text-[48px] lg:text-[60px]">Questions, answered with care.</h1>
          <p className="max-w-[680px] text-[15px] leading-[1.45] text-[#6b5b75] sm:text-[17px]">
            Everything you might want to know about orders, returns, gold purity and caring for your jewellery — in one place.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pt-8 pb-14 sm:px-8 lg:gap-12 lg:px-[72px] lg:pt-14 lg:pb-[72px]">
        {/* Search */}
        <label className="flex items-center gap-2.5 rounded-[30px] border border-[#ebe3f0] bg-white px-5 py-4 focus-within:border-purple">
          <Search size={18} className="shrink-0 text-[#6b5b75]" aria-hidden />
          <span className="sr-only">Search our FAQs</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search our FAQs…"
            className="w-full bg-transparent text-[15px] leading-[1.45] text-ink outline-none placeholder:text-ink-50"
          />
        </label>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Topics */}
          <nav aria-label="FAQ topics" className="w-full shrink-0 rounded-[24px] border border-[#ebe3f0] bg-white p-4 lg:sticky lg:top-6 lg:w-[300px]">
            <p className="text-[12px] font-bold tracking-[1.2px] text-gold-deep uppercase">Browse by topic</p>
            <ul className="no-scrollbar mt-1 flex gap-1 overflow-x-auto lg:flex-col">
              {groups.map((g) => {
                const active = activeTopic === g.id;
                return (
                  <li key={g.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => goToTopic(g.id)}
                      aria-current={active ? "true" : undefined}
                      className={`flex w-full cursor-pointer items-center gap-2 rounded-[12px] px-[14px] py-3 text-left text-[15px] leading-[1.45] whitespace-nowrap transition-colors ${
                        active ? "bg-purple-10 font-bold text-purple" : "font-medium text-ink hover:bg-blush-light"
                      }`}
                    >
                      <span className="flex-1">{g.topic}</span>
                      <span className="text-[12px] font-semibold text-ink-50">{g.faqs.length}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Questions */}
          <div className="flex min-w-0 flex-1 flex-col gap-10">
            {visible.length === 0 && (
              <p className="rounded-[24px] border border-dashed border-[#ebe3f0] p-10 text-center text-[15px] text-[#6b5b75]">
                No questions match “{query}”. Try another word, or talk to one of our experts below.
              </p>
            )}
            {visible.map((g) => (
              <section key={g.id} id={`faq-${g.id}`} className="flex scroll-mt-6 flex-col gap-[14px]" aria-labelledby={`faq-h-${g.id}`}>
                <h2 id={`faq-h-${g.id}`} className="font-seasons text-[28px] leading-[1.12] text-ink sm:text-[34px]">
                  {g.topic}
                </h2>
                {g.faqs.map((f) => {
                  const key = `${g.id}-${groups.find((x) => x.id === g.id)!.faqs.indexOf(f)}`;
                  const isOpen = open.has(key) || query.trim() !== "";
                  return (
                    <div key={f.q} className="rounded-[24px] border border-[#ebe3f0] bg-white">
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${key}`}
                        className="flex w-full cursor-pointer items-center gap-3 p-5 text-left leading-[1.45] sm:p-6"
                      >
                        <span className="flex-1 text-[16px] font-semibold text-ink sm:text-[17px]">{f.q}</span>
                        <span className="w-4 shrink-0 text-center text-[22px] font-bold text-purple" aria-hidden>
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>
                      <div id={`faq-a-${key}`} hidden={!isOpen} className="-mt-2.5 px-5 pb-5 text-[15px] leading-[1.45] text-[#6b5b75] sm:px-6 sm:pb-6">
                        {f.a}
                      </div>
                    </div>
                  );
                })}
              </section>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <section
          className="flex flex-col items-start gap-5 rounded-[20px] px-5 py-6 sm:px-[22px] md:flex-row md:items-center md:gap-[18px]"
          style={{ backgroundImage: "linear-gradient(170deg, #2b0d3e 0%, #5b2b75 100%)" }}
        >
          <div className="flex flex-1 flex-col gap-2 leading-[1.45]">
            <p className="text-[12px] font-bold tracking-[1.2px] text-gold-light uppercase">Still have a question?</p>
            <h2 className="font-seasons text-[28px] leading-[1.12] text-white sm:text-[36px]">Our jewellery experts are a call away.</h2>
            <p className="text-[15px] text-[#d9cce2]">Mon–Sun · 10:30 AM – 8:30 PM · 1800-258-2525</p>
          </div>
          <button
            type="button"
            onClick={() => openModal("contact")}
            className="flex h-[52px] w-full shrink-0 cursor-pointer items-center justify-center rounded-[26px] bg-purple text-[15px] font-semibold text-white transition-colors hover:bg-purple-70 md:w-[220px]"
          >
            Talk to an expert
          </button>
        </section>
      </div>
    </main>
  );
}
