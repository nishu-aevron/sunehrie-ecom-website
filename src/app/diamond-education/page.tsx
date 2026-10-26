import type { Metadata } from "next";
import { DotItem, EduHeader, EduHero, NumberCard, PromiseBand, eduX } from "@/components/education/EduBlocks";

export const metadata: Metadata = {
  title: "Diamond Education",
  description: "Understand the 4Cs of diamonds, IGI certification and why certified diamonds matter.",
};

const fourCs = [
  { title: "Cut", body: "How well a diamond reflects light. A better cut means more brilliance and sparkle." },
  { title: "Color", body: "Grades run from colourless to light yellow or brown. Near-colourless stones are usually preferred." },
  { title: "Clarity", body: "Covers internal inclusions and external blemishes. Fewer imperfections mean higher value." },
  { title: "Carat weight", body: "The weight of the stone, which affects its size and rarity." },
];

const certificateCovers = [
  "Shape and cutting style",
  "Measurements",
  "Carat weight",
  "Colour grade",
  "Clarity grade",
  "Cut quality (round diamonds only)",
  "Polish and symmetry",
  "Fluorescence",
  "Proportions diagram",
];

const whyCertified = [
  "Authenticity and quality assurance",
  "Pricing transparency",
  "Long-term value protection",
  "Purchase confidence",
  "Support for resale or upgrades",
];

export default function DiamondEducationPage() {
  return (
    <main className="bg-white">
      <EduHero
        crumb="Diamond Education"
        title="Diamond Education"
        intro="A diamond purchase should feel as confident as it is meaningful. Understanding what makes a diamond special helps you appreciate its true value."
      />

      <section className={`${eduX} flex flex-col gap-9 pt-12 pb-10 sm:pt-20`}>
        <EduHeader eyebrow="The basics" title="Understanding the 4Cs of Diamonds" intro="Four qualities determine how a diamond looks and what it is worth." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fourCs.map((c, i) => (
            <NumberCard key={c.title} n={i + 1} title={c.title} body={c.body} />
          ))}
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-10 sm:pt-[60px]`}>
        <EduHeader
          eyebrow="Certification"
          title="IGI Diamond Certification"
          intro="Many diamonds are certified by the International Gemological Institute (IGI). A certificate describes the stone in detail."
        />
        <div className="flex flex-col gap-5 rounded-[16px] border border-[#e6dfeb] bg-white p-5 sm:p-8">
          <p className="text-[18px] font-extrabold text-[#1d1a20]">An IGI certificate covers</p>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {certificateCovers.map((item) => (
              <DotItem key={item}>{item}</DotItem>
            ))}
          </div>
          <p className="rounded-[12px] bg-purple-10 px-5 py-4 text-[14px] leading-5 font-semibold text-ink">
            Each certified stone has a unique report number that can be checked for authenticity.
          </p>
        </div>
      </section>

      <section className={`${eduX} flex flex-col gap-9 pt-10 pb-12 sm:pt-[60px]`}>
        <EduHeader eyebrow="Why it matters" title="Why Choose Certified Diamonds?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyCertified.map((t, i) => (
            <NumberCard key={t} n={i + 1} title={t} />
          ))}
        </div>
      </section>

      <PromiseBand
        eyebrow="Our promise"
        title="Sunehriè Diamond Assurance"
        intro={
          <>
            <p>
              At Sunehriè, we carefully select diamonds that meet our quality standards and design philosophy. Where applicable, certified diamonds are accompanied by IGI
              documentation for customer verification and peace of mind.
            </p>
            <p>Our commitment is to offer jewellery that combines timeless elegance with trusted craftsmanship.</p>
          </>
        }
        points={[
          { title: "Selected with care", body: "Diamonds are chosen against our quality and design standards." },
          { title: "IGI documentation", body: "Where applicable, IGI documentation is provided so you can verify your diamond." },
          { title: "Trusted craftsmanship", body: "Timeless elegance, combined with craftsmanship you can trust." },
        ]}
        cta={{ label: "Browse diamond jewellery", href: "/collections" }}
      />
    </main>
  );
}
