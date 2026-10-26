import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";
import BlogGrid from "@/components/blog/BlogGrid";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "The Sunehriè Journal",
  description: "Stories, style notes, and expert guides from the world of fine jewellery — curated by Sunehriè.",
};

const featured = blogPosts[0];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="page-x relative pt-[30px] pb-[40px]">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative brand flourish */}
        <img src="/icons/brand-flourish.png" alt="" aria-hidden width={116} height={312} className="pointer-events-none absolute top-0 right-0 max-sm:hidden" />
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink-50 text-[12px] leading-5">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter text-[14px]">/</span>
          <span className="text-ink">Blog</span>
        </nav>
        <div className="mt-[38px]">
          <h1 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1.6px] text-ink sm:text-[44px] lg:text-[52px]">The Sunehriè Journal</h1>
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
          <div className="flex flex-col justify-center p-5 sm:p-10">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">{featured.category}</p>
            <h2 className="mt-4 font-seasons text-[24px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:mt-[24px] sm:text-[30px] lg:text-[36px]">
              {featured.title}
            </h2>
            <p className="mt-[24px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">{featured.excerpt}</p>
            <p className="mt-[24px] text-[11px] font-semibold tracking-[1px] uppercase text-ink-50">{featured.readMins} min read · {featured.date}</p>
            <Link href={`/blog/${featured.slug}`} className="mt-[24px] inline-flex w-fit items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep">
              Read Article
            </Link>
          </div>
        </div>
      </section>

      {/* Filters + articles */}
      <section className="page-x pb-[56px]">
        <BlogGrid posts={blogPosts.slice(1)} />
      </section>

      {/* Newsletter */}
      <section className="bg-purple-10/50 py-[48px]">
        <div className="page-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[744px]">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Stay Connected</p>
            <h2 className="mt-[14px] font-seasons text-[24px] font-bold tracking-[-0.8px] text-ink sm:text-[32px]">
              Stories, tips, and new arrivals — delivered to your inbox.
            </h2>
            <p className="mt-[14px] text-[14px] leading-[22px] text-ink-70">No spam, just curated content about jewellery, style, and our latest collections.</p>
          </div>
          <div className="w-full max-w-[480px]">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-[12px]">
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
