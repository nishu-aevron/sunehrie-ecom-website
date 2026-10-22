import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "The Sunehriè Journal",
  description: "Stories, style notes, and expert guides from the world of fine jewellery — curated by Sunehriè.",
};

const categories = ["All", "Jewellery Education", "Style Notes", "Care", "Gifting"];

const featured = {
  image: "/img/home/festive-banner.jpg",
  category: "JEWELLERY EDUCATION",
  title: "The Complete Guide to Choosing Your First Diamond",
  description: "Everything you need to know about the 4Cs, certification, and what makes a diamond truly exceptional — in plain language.",
  meta: "8 min read · October 2024",
};

const articles = [
  { image: "/img/home/cat-ring.jpg", badge: "JEWELLERY EDUCATION · 5 MIN", title: "Understanding Gold Purity: 9KT, 14KT & 18KT Explained", desc: "A beginner-friendly breakdown of gold karats, their composition, and which purity suits your lifestyle and budget." },
  { image: "/img/home/cat-earrings.jpg", badge: "STYLE NOTES · 4 MIN", title: "5 Ways to Style Statement Earrings for Every Occasion", desc: "From boardroom to brunch — how to pair bold earrings with outfits that let them shine without overdoing it." },
  { image: "/img/home/cat-pendant.jpg", badge: "GIFTING · 3 MIN", title: "The Art of Gifting Jewellery: A Thoughtful Guide", desc: "What to consider when choosing jewellery as a gift — from understanding preferences to picking the right metal and stone." },
  { image: "/img/home/cat-mangalsutra.jpg", badge: "DIAMOND DIARIES · 6 MIN", title: "Natural vs Lab-Grown Diamonds: What You Should Know", desc: "An honest comparison of natural and lab-grown diamonds — covering value, rarity, certification, and long-term worth." },
  { image: "/img/home/cat-necklace-set.jpg", badge: "CARE & KEEPING · 3 MIN", title: "How to Care for Your Gold Jewellery at Home", desc: "Simple, safe methods to clean and store your hallmarked gold and diamond pieces — no professional tools required." },
  { image: "/img/home/cat-pendant-earring-set.jpg", badge: "OUR STORIES · 4 MIN", title: "Behind the Craft: A Day at Our Godhra Workshop", desc: "An inside look at how our artisans handcraft each piece — from wax models to final hallmarking and quality checks." },
];

export default function BlogPage() {
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
          <span className="text-ink">Blog</span>
        </nav>
        <div className="relative mt-[38px]">
          <h1 className="font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1.6px] text-ink sm:text-[52px]">The Sunehriè Journal</h1>
          <p className="mt-[12px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
            Stories, style notes, and expert guides from the world of fine jewellery.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="page-x pb-[48px]">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-purple-20 lg:flex-row">
          <div className="relative h-[300px] w-full shrink-0 lg:h-auto lg:w-[704px]">
            <Image src={featured.image} alt={featured.title} fill sizes="704px" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-10">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">{featured.category}</p>
            <h2 className="mt-[24px] font-seasons text-[30px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px]">
              {featured.title}
            </h2>
            <p className="mt-[24px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">{featured.description}</p>
            <p className="mt-[24px] text-[11px] font-semibold tracking-[1px] uppercase text-ink-50">{featured.meta}</p>
            <Link href="/blog" className="mt-[24px] inline-flex w-fit items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep">
              Read Article
            </Link>
          </div>
        </div>
      </section>

      {/* Filters + articles */}
      <section className="page-x pb-[56px]">
        {/* Category pills + search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-[10px]">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`rounded-full border px-[18px] py-[12px] text-[13px] font-semibold transition-colors ${
                  i === 0 ? "border-purple bg-purple text-white" : "border-purple-20 bg-white text-ink hover:border-purple hover:text-purple"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-[257px]">
            <svg className="pointer-events-none absolute top-1/2 left-[16px] size-[17px] -translate-y-1/2 text-ink-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Search the journal" className="w-full rounded-xl border border-purple-20 bg-white py-[12px] pr-4 pl-[45px] text-[13px] text-ink outline-none transition-colors focus:border-purple" />
          </div>
        </div>

        <h2 className="mt-[32px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink">Latest Stories</h2>

        {/* Article grid */}
        <div className="mt-[30px] grid gap-[36px] sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group overflow-hidden rounded-2xl border border-purple-20 bg-white">
              <div className="relative h-[260px] overflow-hidden">
                <Image src={article.image} alt={article.title} fill sizes="408px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-[16px] left-[16px] rounded-full bg-white/90 px-[12px] py-[6px] text-[11px] font-semibold tracking-[1px] uppercase text-ink backdrop-blur-sm">
                  {article.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[17px] leading-[1.4] font-bold text-ink">{article.title}</h3>
                <p className="mt-[12px] text-[14px] leading-[24px] text-ink-70">{article.desc}</p>
                <Link href="/blog" className="mt-[12px] inline-flex items-center gap-2 rounded-full border border-purple-20 px-4 py-[10px] text-[13px] font-semibold text-purple transition-colors hover:border-purple hover:bg-purple hover:text-white">
                  Read story <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-[40px] flex justify-center">
          <button type="button" className="inline-flex items-center justify-center rounded-full border border-purple px-8 py-3.5 text-[15px] font-semibold text-purple transition-colors hover:bg-purple hover:text-white">
            Load More Stories
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-purple-10/50 py-[48px]">
        <div className="page-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[744px]">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Stay Connected</p>
            <h2 className="mt-[14px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink">
              Stories, tips, and new arrivals — delivered to your inbox.
            </h2>
            <p className="mt-[14px] text-[14px] leading-[22px] text-ink-70">No spam, just curated content about jewellery, style, and our latest collections.</p>
          </div>
          <div className="w-full max-w-[480px]">
            <div className="flex gap-[12px]">
              <div className="flex-1">
                <label className="text-[13px] font-semibold text-ink">Email Address</label>
                <input type="email" placeholder="you@example.com" className="mt-[9px] w-full rounded-xl border border-purple-20 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-purple" />
              </div>
              <button type="button" className="mt-auto inline-flex items-center justify-center rounded-full bg-purple px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep">
                Subscribe
              </button>
            </div>
            <p className="mt-[14px] text-[12px] text-ink-50">You can unsubscribe at any time. Read our privacy policy.</p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="py-[24px]">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
