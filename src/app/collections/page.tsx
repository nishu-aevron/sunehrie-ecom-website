import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CollectionView from "@/components/plp/CollectionView";
import RelatedProducts from "@/components/RelatedProducts";
import { catalog } from "@/data/catalog";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Handpicked 9KT, 14KT and 18KT gold and natural diamond jewellery, updated by our stylists every week.",
};

export default function CollectionsPage() {
  return (
    <main className="bg-white pb-[166px]">
      <section className="relative h-[299px] overflow-hidden">
        <div className="absolute top-0 left-[-10px] h-[684px] w-[calc(100%+19px)]">
          <Image src="/img/home/hero-portrait.png" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 opacity-80" style={{ background: "linear-gradient(180deg, #000 0%, rgba(0,0,0,0) 100%)" }} />
        </div>
        <div className="page-x relative flex h-full items-end pb-[31px] lg:px-[53px]">
          <div className="flex max-w-[550px] flex-col gap-[5px] py-[5px]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-snow">
              <Link href="/" className="text-[12px] leading-5 hover:underline">
                Home
              </Link>
              <span className="font-inter text-[14px] leading-5">/</span>
              <span className="text-[12px] leading-5">All Collection</span>
            </nav>
            <h1 className="font-seasons text-[44px] leading-none tracking-[-1.6px] text-white sm:text-[60px]">The Collection</h1>
            <p className="font-inter text-[15px] leading-[22.4px] tracking-[0.24px] text-white">
              Handpicked across karats and budgets updated by our stylists every week.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-[1200px]" />}>
        <CollectionView />
      </Suspense>

      <div className="mt-[166px]">
        <RelatedProducts title="You Might Also Like" products={catalog.slice(1, 9)} />
      </div>
    </main>
  );
}
