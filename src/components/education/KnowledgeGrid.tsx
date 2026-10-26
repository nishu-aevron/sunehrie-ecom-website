"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eduX } from "@/components/education/EduBlocks";

export interface KnowledgeArticle {
  href: string;
  image: string;
  /** Label shown on the card. */
  tag: string;
  /** Filter chips the article appears under. */
  topics: string[];
  readMins: number;
  title: string;
  excerpt: string;
}

const filters = ["All Articles", "Education", "Gold", "Diamonds", "Care & Styling", "Guides"];

export default function KnowledgeGrid({ featured, articles }: { featured: KnowledgeArticle; articles: KnowledgeArticle[] }) {
  const [filter, setFilter] = useState(filters[0]);
  const matches = (a: KnowledgeArticle) => filter === filters[0] || a.topics.includes(filter);
  const list = articles.filter(matches);

  return (
    <>
      <div className={`${eduX} no-scrollbar flex gap-3 overflow-x-auto pt-8 pb-6 sm:justify-center sm:pt-[50px] sm:pb-8`} role="toolbar" aria-label="Filter articles">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`shrink-0 cursor-pointer rounded-[50px] px-5 py-2.5 text-[13px] font-semibold transition-colors ${
              filter === f ? "bg-purple text-white" : "bg-[#f8f7f9] text-[#1d1a20] hover:bg-purple-10 hover:text-purple"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {matches(featured) && (
        <section className={`${eduX} pb-12`}>
          <div className="flex flex-col-reverse gap-8 rounded-[20px] bg-[#f8f7f9] p-5 sm:p-8 lg:flex-row lg:items-start lg:gap-12 lg:p-12">
            <div className="flex flex-1 flex-col items-start gap-4">
              <span className="rounded-[50px] bg-purple px-3.5 py-1.5 text-[11px] font-semibold text-white uppercase">Featured</span>
              <h2 className="max-w-[462px] font-seasons text-[26px] leading-[1.25] font-bold text-[#1d1a20] sm:text-[34px]">{featured.title}</h2>
              <p className="text-[15px] leading-[1.6] text-[#6b6673] sm:text-[16px]">{featured.excerpt}</p>
              <p className="text-[13px] text-[#a8a3b0]">
                {featured.tag} · {featured.readMins} min read
              </p>
              <Link href={featured.href} className="rounded-[50px] bg-purple px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep">
                Read article
              </Link>
            </div>
            <Link href={featured.href} tabIndex={-1} aria-hidden className="block w-full overflow-hidden rounded-[12px] lg:w-[420px] lg:shrink-0">
              <Image src={featured.image} alt="" width={420} height={320} className="h-auto w-full" />
            </Link>
          </div>
        </section>
      )}

      <section className={`${eduX} pb-14 lg:pb-[72px]`}>
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-seasons text-[28px] font-bold text-[#1d1a20] sm:text-[36px]">More from Our Knowledge Hub</h2>
          <p className="text-[15px] leading-[1.6] text-[#6b6673] sm:text-[16px]">Guides, education, and ideas to inspire your next piece.</p>
        </div>
        {list.length === 0 ? (
          <p className="rounded-[16px] bg-[#f8f7f9] p-10 text-center text-[14px] text-[#6b6673]">No articles in this topic yet.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <article key={a.href} className="group flex flex-col items-start gap-4 rounded-[16px] bg-[#f8f7f9] px-5 py-6 sm:px-[26px] sm:py-7">
                <Link href={a.href} tabIndex={-1} aria-hidden className="relative block aspect-[376/200] w-full overflow-hidden rounded-[10px] bg-blush-light">
                  <Image src={a.image} alt="" fill sizes="(min-width: 1024px) 376px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
                <div className="flex items-center gap-2">
                  <span className="rounded-[50px] bg-white px-3 py-1 text-[11px] font-semibold text-purple">{a.tag}</span>
                  <span className="text-[11px] text-[#a8a3b0]">{a.readMins} min read</span>
                </div>
                <h3 className="font-seasons text-[22px] font-bold text-[#1d1a20]">
                  <Link href={a.href} className="hover:text-purple">
                    {a.title}
                  </Link>
                </h3>
                <p className="text-[14px] leading-[1.55] text-[#6b6673]">{a.excerpt}</p>
                <Link href={a.href} className="mt-auto py-2.5 text-[13px] font-semibold text-purple hover:underline">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
