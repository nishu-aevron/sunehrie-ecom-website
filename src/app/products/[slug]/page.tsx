import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DetailAccordions from "@/components/pdp/DetailAccordions";
import ProductGallery from "@/components/pdp/ProductGallery";
import PurchasePanel from "@/components/pdp/PurchasePanel";
import Reviews from "@/components/pdp/Reviews";
import RelatedProducts from "@/components/RelatedProducts";
import TrustStrip from "@/components/TrustStrip";
import Icon from "@/components/ui/Icon";
import { catalog, getProduct } from "@/data/catalog";

export function generateStaticParams() {
  return catalog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: `${product.name} in BIS hallmarked gold with natural, IGI-certified diamonds.` } : {};
}

const assurances = [
  { icon: "assure-shield", title: "Certified: IGI + BIS Hallmark (HUID)", note: "Independent certificate ships inside the box." },
  { icon: "assure-return", title: "48-Hour Return & Exchange", note: "Touch & feel at home.", link: true },
  { icon: "assure-truck", title: "Free Insured Delivery", note: "Tamper-evident packaging, signature on handover." },
];

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const similar = catalog.filter((p) => p.slug !== product.slug && (p.category === product.category || p.diamondCt >= 0.4)).slice(0, 8);

  return (
    <main className="bg-white pb-[77px]">
      <div className="page-x lg:px-[53px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 pt-[31px] text-ink lg:pl-2.5">
          <Link href="/" className="text-[12px] leading-5 hover:underline">
            Home
          </Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">{product.name}</span>
        </nav>

        <div className="mt-0 flex flex-col gap-[35px] lg:flex-row">
          <div className="flex flex-col gap-5 pt-[15px] lg:w-[730px] lg:shrink-0">
            <ProductGallery product={product} />
            <div className="max-lg:hidden">
              <DetailAccordions product={product} />
            </div>
          </div>
          <div className="lg:w-[570px] lg:pl-2.5">
            <PurchasePanel product={product} />
          </div>
          <div className="lg:hidden">
            <DetailAccordions product={product} />
          </div>
        </div>

        <section className="relative mt-[30px] flex flex-col gap-4 overflow-hidden rounded-3xl bg-blush px-[25px] py-[15px] md:flex-row md:items-center">
          <span className="pointer-events-none absolute top-[22px] left-[-140px] size-[129px] rounded-full bg-purple blur-[105px]" aria-hidden />
          <span className="pointer-events-none absolute top-[22px] right-[-125px] size-[129px] rounded-full bg-purple blur-[105px]" aria-hidden />
          {assurances.map((a) => (
            <div key={a.title} className="relative flex flex-1 items-start justify-center gap-3.5 py-[13px]">
              <Icon src={`/icons/pdp/${a.icon}.svg`} size={20} className="mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="text-[13px] leading-[20.8px] font-bold text-ink">{a.title}</p>
                <p className="text-[12px] leading-4 font-medium text-ink-deep">
                  {a.note}
                  {a.link && (
                    <Link href="/#returns" className="ml-[5px] font-bold text-purple hover:underline">
                      See policy
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="mt-[111px]">
        <Reviews product={product} />
      </div>

      <div className="mt-[52px]">
        <TrustStrip pill={false} />
      </div>

      <div className="mt-[69px]">
        <RelatedProducts eyebrow="You May Also Like" title="Similar Pieces" products={similar} />
      </div>
    </main>
  );
}
