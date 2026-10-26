import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).concat(blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category)).slice(0, 3);

  return (
    <main className="bg-white">
      <article>
        <header className="page-x pt-[30px]">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-[12px] leading-5 text-ink-50">
            <Link href="/" className="hover:text-purple hover:underline">Home</Link>
            <span className="font-inter text-[14px]">/</span>
            <Link href="/blog" className="hover:text-purple hover:underline">Blog</Link>
            <span className="font-inter text-[14px]">/</span>
            <span className="line-clamp-1 text-ink">{post.title}</span>
          </nav>
          <div className="mx-auto mt-8 max-w-[820px] text-center sm:mt-12">
            <p className="text-[11px] font-semibold tracking-[2px] text-purple uppercase">{post.category}</p>
            <h1 className="mt-4 font-seasons text-[30px] leading-[1.12] font-bold tracking-[-1px] text-ink sm:text-[42px] lg:text-[52px]">{post.title}</h1>
            <p className="mt-4 text-[15px] leading-[26px] text-ink-70 sm:text-[17px]">{post.excerpt}</p>
            <p className="mt-4 text-[11px] font-semibold tracking-[1px] text-ink-50 uppercase">
              {post.readMins} min read · {post.date}
            </p>
          </div>
          <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-[1100px] overflow-hidden rounded-[20px] sm:mt-12 sm:aspect-[21/9] sm:rounded-[28px]">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1100px) 1100px, 100vw" className="object-cover" />
          </div>
        </header>

        <div className="page-x py-10 sm:py-14">
          <div className="mx-auto flex max-w-[720px] flex-col gap-5 text-[16px] leading-[28px] text-ink-90">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2 key={i} className="mt-4 font-seasons text-[24px] leading-[1.2] font-bold text-ink sm:text-[28px]">
                      {block.text}
                    </h2>
                  );
                case "ul":
                  return (
                    <ul key={i} className="flex list-disc flex-col gap-2 pl-6 marker:text-purple">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote key={i} className="my-2 border-l-[3px] border-gold pl-5 font-seasons text-[20px] leading-[1.4] text-purple sm:text-[24px]">
                      {block.text}
                    </blockquote>
                  );
                default:
                  return <p key={i}>{block.text}</p>;
              }
            })}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-purple-20 pt-6">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] font-semibold text-purple hover:underline">
                <span aria-hidden>←</span> Back to the Journal
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center rounded-full bg-purple px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
              >
                Shop the collection
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-purple-10/50 py-10 sm:py-14">
        <div className="page-x">
          <h2 className="font-seasons text-[26px] font-bold tracking-[-0.8px] text-ink sm:text-[32px]">Keep reading</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-purple-20 bg-white">
                <span className="relative block h-[200px] overflow-hidden">
                  <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 408px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </span>
                <span className="block p-5">
                  <span className="text-[11px] font-semibold tracking-[1px] text-purple uppercase">
                    {p.category} · {p.readMins} min
                  </span>
                  <span className="mt-2 block text-[17px] leading-[1.4] font-bold text-ink group-hover:text-purple">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
