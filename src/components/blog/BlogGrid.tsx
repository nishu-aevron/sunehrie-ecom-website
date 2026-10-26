"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, type BlogPost } from "@/data/blog";

const PAGE = 6;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => (category === "All" || p.category === category) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)));
  }, [posts, category, query]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-[10px] overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => {
                setCategory(cat);
                setShown(PAGE);
              }}
              className={`shrink-0 cursor-pointer rounded-full border px-[18px] py-[12px] text-[13px] font-semibold transition-colors ${
                category === cat ? "border-purple bg-purple text-white" : "border-purple-20 bg-white text-ink hover:border-purple hover:text-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <label className="relative w-full sm:w-[257px]">
          <span className="sr-only">Search the journal</span>
          <svg className="pointer-events-none absolute top-1/2 left-[16px] size-[17px] -translate-y-1/2 text-ink-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the journal"
            className="w-full rounded-xl border border-purple-20 bg-white py-[12px] pr-4 pl-[45px] text-[13px] text-ink outline-none transition-colors focus:border-purple"
          />
        </label>
      </div>

      <h2 className="mt-6 font-seasons text-[26px] font-bold tracking-[-0.8px] text-ink sm:mt-[32px] sm:text-[32px]">Latest Stories</h2>

      {filtered.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-purple-20 p-10 text-center text-[14px] text-ink-50">No stories match your search.</p>
      ) : (
        <div className="mt-[20px] grid gap-5 sm:mt-[30px] sm:grid-cols-2 sm:gap-[36px] lg:grid-cols-3">
          {filtered.slice(0, shown).map((post) => (
            <article key={post.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-purple-20 bg-white">
              <Link href={`/blog/${post.slug}`} className="relative block h-[200px] overflow-hidden sm:h-[260px]">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 408px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-[16px] left-[16px] rounded-full bg-white/90 px-[12px] py-[6px] text-[11px] font-semibold tracking-[1px] text-ink uppercase backdrop-blur-sm">
                  {post.category} · {post.readMins} min
                </span>
              </Link>
              <div className="flex flex-1 flex-col items-start p-5">
                <h3 className="text-[17px] leading-[1.4] font-bold text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-purple">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-[12px] mb-[12px] text-[14px] leading-[24px] text-ink-70">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 rounded-full border border-purple-20 px-4 py-[10px] text-[13px] font-semibold text-purple transition-colors hover:border-purple hover:bg-purple hover:text-white"
                >
                  Read story <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {shown < filtered.length && (
        <div className="mt-[40px] flex justify-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + PAGE)}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-purple px-8 py-3.5 text-[15px] font-semibold text-purple transition-colors hover:bg-purple hover:text-white"
          >
            Load More Stories
          </button>
        </div>
      )}
    </>
  );
}
