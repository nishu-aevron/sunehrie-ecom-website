import type { Metadata } from "next";
import { EduHeader, EduHero, InfoCard, NumberCard, PromiseBand, eduX } from "@/components/education/EduBlocks";

export const metadata: Metadata = {
  title: "Metal Education Guide",
  description: "Gold purity, gold colours and platinum explained — judge quality, durability and long-term value.",
};

const karats = [
  { title: "24 Karat (24K)", body: "Pure gold. Rich in colour but soft — not suited to daily-wear jewellery." },
  { title: "22 Karat (22K)", body: "91.6% pure. Traditional choice for bridal and heirloom pieces." },
  { title: "18 Karat (18K)", body: "75% pure. Balances beauty and strength — ideal for diamond jewellery." },
  { title: "14 Karat (14K)", body: "58.5% pure. More durable, suited to frequent everyday wear." },
];

const colours = [
  { title: "Yellow Gold", body: "Classic and traditional — the natural colour of gold, warm and timeless." },
  { title: "White Gold", body: "Modern and elegant. Alloyed with palladium or nickel, often rhodium-plated." },
  { title: "Rose Gold", body: "Warm and contemporary. A copper alloy gives the metal its rosy hue." },
];

const platinum = [
  { title: "95% Pure", body: "Platinum jewellery is typically 95% pure, far higher than most gold alloys." },
  { title: "Strong & Lasting", body: "Its density and strength make it resist wear over decades." },
  { title: "Hypoallergenic", body: "Ideal for sensitive skin — does not cause allergic reactions." },
  { title: "Diamond-secure", body: "Its hardness secures diamond and gemstone settings exceptionally well." },
];

const whyPurity = [
  "Long-term value and authenticity",
  "Durability suited to daily wear",
  "Pricing and resale potential",
  "Buyer confidence and trust",
  "Hallmark certification",
];

export default function MetalEducationPage() {
  return (
    <main className="bg-white">
      <EduHero
        crumb="Metal Education Guide"
        title="Metal Education Guide"
        intro="Understanding precious metals helps you judge quality, durability, and the long-term value of fine jewellery."
      />

      <section className={`${eduX} flex flex-col gap-9 pt-12 pb-10 sm:pt-20`}>
        <EduHeader
          eyebrow="Gold"
          title="Gold Jewellery & Purity"
          intro="Pure gold is soft, so it is mixed with other metals to increase strength. Purity is measured in karats (K)."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {karats.map((k, i) => (
            <NumberCard key={k.title} n={i + 1} title={k.title} body={k.body} />
          ))}
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-10 sm:pt-[60px]`}>
        <EduHeader eyebrow="Gold colour" title="Gold Colour Variations" intro="The alloy mix determines the colour of gold in a finished piece." />
        <div className="grid gap-5 md:grid-cols-3">
          {colours.map((c) => (
            <InfoCard key={c.title} title={c.title} body={<p className="text-[14px] leading-[1.55]">{c.body}</p>} />
          ))}
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-10 sm:pt-20`}>
        <EduHeader
          eyebrow="Premium metal"
          title="Platinum Jewellery"
          intro="Platinum is rare, very durable, and naturally white — it keeps its finish without fading or re-plating."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platinum.map((p, i) => (
            <NumberCard key={p.title} n={i + 1} title={p.title} body={p.body} />
          ))}
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-12 sm:pt-[60px]`}>
        <EduHeader eyebrow="Why it matters" title="Why Metal Purity Matters" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyPurity.map((t, i) => (
            <NumberCard key={t} n={i + 1} title={t} />
          ))}
        </div>
      </section>

      <PromiseBand
        eyebrow="Our promise"
        title="Sunehriè Quality Commitment"
        intro={
          <p className="mx-auto max-w-[838px]">
            We prioritise material integrity and craftsmanship, using quality precious metals to create jewellery that is elegant, comfortable, and built to last. Review purity
            details and certifications before buying.
          </p>
        }
        points={[
          { title: "Material Integrity", body: "We use verified precious metals in every piece." },
          { title: "BIS Hallmarked", body: "All gold jewellery carries BIS hallmark certification." },
          { title: "Built to Last", body: "Designed for elegance, comfort, and years of wear." },
        ]}
        cta={{ label: "Browse our jewellery", href: "/collections" }}
      />
    </main>
  );
}
