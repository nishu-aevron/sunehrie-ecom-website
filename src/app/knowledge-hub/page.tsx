import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Your guide to understanding jewellery — from diamonds and gold to sizing and metal education.",
};

const guides = [
  {
    href: "/diamond-education",
    title: "Diamond Education",
    description: "Understand the 4Cs — cut, clarity, colour and carat — and learn how to choose a diamond that truly shines.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4L36 16L20 36L4 16L20 4Z" stroke="#7a3f91" strokeWidth="2" strokeLinejoin="round" /><path d="M4 16H36" stroke="#7a3f91" strokeWidth="2" /><path d="M20 4L14 16L20 36L26 16L20 4Z" stroke="#7a3f91" strokeWidth="2" strokeLinejoin="round" /></svg>
    ),
  },
  {
    href: "/gold-rate-guide",
    title: "Gold Rate Guide",
    description: "Check today's gold rates across karats, understand pricing and see how Sunehrie keeps pricing transparent.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#c59b27" strokeWidth="2" /><text x="20" y="25" textAnchor="middle" fill="#c59b27" fontSize="16" fontWeight="700" fontFamily="serif">₹</text></svg>
    ),
  },
  {
    href: "/metal-education",
    title: "Metal Education",
    description: "Yellow, rose or white gold? 9KT or 18KT? Learn about alloy composition, durability and choosing the right metal.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="14" width="28" height="18" rx="3" stroke="#7a3f91" strokeWidth="2" /><path d="M6 20H34" stroke="#7a3f91" strokeWidth="2" /><path d="M14 14V8a6 6 0 0112 0v6" stroke="#7a3f91" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
  {
    href: "/size-guide",
    title: "Size Guide",
    description: "Find your perfect ring, bracelet and necklace size with our measurement tables and at-home techniques.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="#7a3f91" strokeWidth="2" /><circle cx="20" cy="20" r="8" stroke="#7a3f91" strokeWidth="1.5" strokeDasharray="3 3" /><line x1="20" y1="6" x2="20" y2="12" stroke="#7a3f91" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
  },
];

const reasons = [
  { title: "Confident Choices", description: "When you understand what you are buying, every piece becomes a considered investment, not an impulse." },
  { title: "Transparent Value", description: "Knowledge of karats, certifications and diamond grades helps you appreciate the true worth of fine jewellery." },
  { title: "Lasting Satisfaction", description: "An informed purchase means fewer regrets — your jewellery will match your expectations for years to come." },
];

export default function KnowledgeHubPage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Knowledge Hub</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[52px]">Knowledge Hub</h1>
        <p className="mt-3 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          Your guide to understanding jewellery — from diamonds and gold purity to finding the perfect fit. Browse our curated guides to make every purchase with confidence.
        </p>
      </section>

      <section className="page-x pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col gap-5 rounded-2xl border border-purple-20 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-[72px] items-center justify-center rounded-2xl bg-purple-10">{g.icon}</span>
              <h2 className="font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.5px] text-ink">{g.title}</h2>
              <p className="text-[15px] leading-[24px] text-ink-70">{g.description}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-purple transition-colors group-hover:text-purple-deep">
                Explore guide
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M6.5 4L11.5 8.5L6.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[38px] bg-purple-10 px-[72px] py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Why It Matters</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">
          An Informed Purchase Is a Beautiful Purchase
        </h2>
        <p className="mt-4 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          At Sunehrie, we believe that the more you know about your jewellery, the more meaningful it becomes. Every piece in our collection is crafted with BIS-hallmarked gold and IGI-certified natural diamonds — and understanding what those standards mean helps you appreciate the artistry and value behind each creation.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-purple-20 bg-white p-8">
              <h3 className="font-seasons text-[22px] leading-[1.2] font-bold tracking-[-0.3px] text-ink">{r.title}</h3>
              <p className="mt-3 text-[14px] leading-[22px] text-ink-70">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-x py-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-0.5px] text-ink">Still Have Questions?</h2>
          <p className="max-w-[500px] text-[15px] leading-[24px] text-ink-70">
            Our jewellery advisors are here to help you understand every detail.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex h-12 items-center justify-center rounded-[50px] bg-purple px-8 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Speak to an Advisor
          </Link>
        </div>
      </section>

      <div className="pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
