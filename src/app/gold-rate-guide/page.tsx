import type { Metadata } from "next";
import { EduHeader, EduHero, NumberCard, PromiseBand, eduX } from "@/components/education/EduBlocks";

export const metadata: Metadata = {
  title: "Gold Rate Guide",
  description: "How gold purity, rates, making charges and taxes come together in your jewellery price.",
};

const purities = [
  { title: "9 Karat (9K)", body: "About 37.5% pure gold. Durable, lightweight, and the most affordable option — perfect for everyday pieces." },
  { title: "14 Karat (14K)", body: "About 58.5% pure gold. Balances strength with gold content, suited to modern and daily-wear designs." },
  { title: "18 Karat (18K)", body: "About 75% pure gold. Richer colour and a premium look, commonly used for fine diamond and statement pieces." },
];

const priceParts = [
  { title: "Gold Rate", body: "Current market rate for the chosen purity (9K, 14K or 18K)." },
  { title: "Weight", body: "The actual weight of gold used in the piece, in grams." },
  { title: "Making Charges", body: "Craftsmanship and design work that goes into creating the piece." },
  { title: "Taxes", body: "Applicable government duties and GST as required." },
];

const rateFactors = [
  { title: "International Bullion Trends", body: "Global commodity markets set the base price for gold worldwide." },
  { title: "Currency Exchange Rates", body: "Gold is priced in USD globally; a weaker rupee raises local rates." },
  { title: "Economic Conditions", body: "Uncertainty and inflation often drive demand for gold as a safe asset." },
  { title: "Seasonal & Festive Demand", body: "Wedding seasons and festivals increase demand and can push prices higher." },
  { title: "Government Policies", body: "Import duties and tax changes directly affect the local gold price." },
];

export default function GoldRateGuidePage() {
  return (
    <main className="bg-white">
      <EduHero
        crumb="Gold Rate Guide"
        title="Gold Rate Guide"
        intro="We are committed to transparent pricing. Understanding how gold rates work helps you make informed and confident jewellery choices."
      />

      <section className={`${eduX} flex flex-col gap-9 pt-12 pb-10 sm:pt-20`}>
        <EduHeader
          eyebrow="The basics"
          title="Gold Purity & Pricing"
          intro="Gold purity is measured in karats (K). We offer three grades to suit different styles and budgets."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {purities.map((p, i) => (
            <NumberCard key={p.title} n={i + 1} title={p.title} body={p.body} />
          ))}
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-10 sm:pt-[60px]`}>
        <EduHeader eyebrow="How it works" title="How Gold Rate is Calculated" intro="A jewellery price reflects more than just the metal." />
        <div className="flex flex-col gap-5 rounded-[16px] border border-[#e6dfeb] bg-white p-5 sm:p-8">
          <p className="text-[18px] font-extrabold text-[#1d1a20]">A jewellery price includes the following</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {priceParts.map((p, i) => (
              <NumberCard key={p.title} n={i + 1} title={p.title} body={p.body} />
            ))}
          </div>
          <p className="rounded-[12px] bg-purple-10 px-5 py-4 text-[14px] leading-5 font-semibold text-ink">
            Because gold prices change often, final prices may vary from those shown at the time of listing.
          </p>
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-12 sm:pt-20`}>
        <EduHeader
          eyebrow="Why it matters"
          title="Why Gold Rates Change"
          intro="Several interconnected factors influence the gold price on any given day."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {rateFactors.map((f, i) => (
            <NumberCard key={f.title} n={i + 1} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      <PromiseBand
        eyebrow="Our commitment"
        title="Sunehriè Pricing Transparency"
        intro={
          <p className="mx-auto max-w-[836px]">
            Our listed prices reflect current metal rates and craftsmanship value at the time of listing. We recommend checking updated prices when placing your order — our team
            is always here to help.
          </p>
        }
        points={[
          { title: "Listed Prices", body: "Reflect the metal rate and craftsmanship cost at the time of listing." },
          { title: "Up-to-date Pricing", body: "We advise checking prices when placing an order as rates may have changed." },
          { title: "Honest Value", body: "Our goal is to pair great design with fair, transparent pricing you can trust." },
        ]}
        cta={{ label: "Explore our jewellery", href: "/collections" }}
      />
    </main>
  );
}
