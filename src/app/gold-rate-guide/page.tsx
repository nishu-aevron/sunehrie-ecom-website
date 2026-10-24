import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Gold Rate Guide",
  description: "Today's gold rates across karats, pricing transparency and everything you need to know about gold purity.",
};

const rates = [
  { karat: "24KT", purity: "99.9%", rate: "7,450", use: "Investment bars, coins" },
  { karat: "22KT", purity: "91.6%", rate: "6,830", use: "Traditional jewellery" },
  { karat: "18KT", purity: "75.0%", rate: "5,588", use: "Diamond-set fine jewellery" },
  { karat: "14KT", purity: "58.3%", rate: "4,346", use: "Everyday diamond jewellery" },
  { karat: "9KT", purity: "37.5%", rate: "2,794", use: "Affordable daily wear" },
];

const purityGuide = [
  {
    karat: "9KT",
    gold: "37.5%",
    alloy: "62.5%",
    pros: "Most affordable, very durable, excellent for daily wear",
    cons: "Lower gold content, lighter colour",
    best: "Everyday rings, bracelets and pieces that see heavy use",
  },
  {
    karat: "14KT",
    gold: "58.3%",
    alloy: "41.7%",
    pros: "Balanced price-to-purity ratio, good durability, rich colour",
    cons: "Slightly less lustrous than 18KT",
    best: "Diamond-studded rings, earrings and pendants for regular wear",
  },
  {
    karat: "18KT",
    gold: "75.0%",
    alloy: "25.0%",
    pros: "Luxurious colour, ideal for gemstone settings, prestigious",
    cons: "Softer than lower karats, higher price point",
    best: "Statement pieces, bridal jewellery and heirloom designs",
  },
];

const pricingFactors = [
  { title: "Gold Weight", description: "The net weight of gold in your piece, measured in grams and priced at the day's rate for its karat." },
  { title: "Diamond Value", description: "Each stone is priced based on its 4C grading — carat, cut, clarity and colour — as certified by IGI." },
  { title: "Making Charges", description: "Craftsmanship cost that covers design, casting, stone-setting and finishing. Displayed as a fixed amount." },
  { title: "GST", description: "Goods and Services Tax at the prevailing rate, applied transparently on the invoice." },
];

export default function GoldRateGuidePage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-8 sm:pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <Link href="/knowledge-hub" className="text-[12px] leading-5 hover:underline">Knowledge Hub</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Gold Rate Guide</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[44px] lg:text-[52px]">Gold Rate Guide</h1>
        <p className="mt-3 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          Understand gold purity, check indicative rates and learn how Sunehrie prices every piece with full transparency.
        </p>
      </section>

      {/* Today's Rates */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-5 py-8 sm:rounded-[38px] sm:px-10 sm:py-12 lg:px-[72px] lg:py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Indicative Rates</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">Today&apos;s Gold Rates</h2>
        <p className="mt-3 text-[13px] leading-[20px] text-ink-50">
          Rates are indicative and updated daily. Actual prices may vary based on weight and design. All rates per gram.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-purple-30">
                <th className="py-4 pr-6 text-left text-[13px] font-semibold tracking-[0.5px] text-purple uppercase">Karat</th>
                <th className="py-4 pr-6 text-left text-[13px] font-semibold tracking-[0.5px] text-purple uppercase">Purity</th>
                <th className="py-4 pr-6 text-left text-[13px] font-semibold tracking-[0.5px] text-purple uppercase">Rate / gram</th>
                <th className="py-4 text-left text-[13px] font-semibold tracking-[0.5px] text-purple uppercase">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r) => (
                <tr key={r.karat} className="border-b border-purple-20">
                  <td className="py-4 pr-6 text-[15px] font-bold text-ink">{r.karat}</td>
                  <td className="py-4 pr-6 text-[15px] text-ink-70">{r.purity}</td>
                  <td className="py-4 pr-6 text-[15px] font-semibold text-gold-deep">₹{r.rate}</td>
                  <td className="py-4 text-[14px] text-ink-70">{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Purity Guide */}
      <section className="page-x py-10 sm:py-16 lg:py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Understanding Purity</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">Karatage Comparison</h2>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-70">
          Karat (KT) measures the proportion of pure gold in an alloy. Higher karatage means more gold and a warmer colour, while lower karatage offers greater durability.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
          {purityGuide.map((p) => (
            <div key={p.karat} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 items-center justify-center rounded-lg bg-gold-cream px-3 text-[16px] font-bold text-gold-deep">{p.karat}</span>
                <span className="text-[14px] text-ink-50">{p.gold} pure gold</span>
              </div>
              <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-purple-10">
                <div className="rounded-full bg-gold" style={{ width: p.gold }} />
              </div>
              <p className="mt-1 text-right text-[11px] text-ink-50">{p.alloy} alloy metals</p>
              <div className="mt-5 flex flex-col gap-3">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.5px] text-success uppercase">Strengths</p>
                  <p className="mt-1 text-[13px] leading-[20px] text-ink-70">{p.pros}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.5px] text-ink-50 uppercase">Trade-offs</p>
                  <p className="mt-1 text-[13px] leading-[20px] text-ink-70">{p.cons}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">Best For</p>
                  <p className="mt-1 text-[13px] leading-[20px] text-ink-70">{p.best}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Price */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-5 py-8 sm:rounded-[38px] sm:px-10 sm:py-12 lg:px-[72px] lg:py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Full Transparency</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">How Sunehrie Prices Gold</h2>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-70">
          Every product page shows a complete price breakup so you know exactly what you are paying for. No hidden charges, no inflated making costs.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {pricingFactors.map((f, i) => (
            <div key={f.title} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-purple-10 text-[14px] font-bold text-purple">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-[16px] font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-ink-70">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Note */}
      <section className="page-x py-10 sm:py-16 lg:py-20">
        <div className="rounded-2xl border border-purple-20 bg-white p-6 sm:p-10 lg:p-12">
          <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Market Context</p>
          <h2 className="mt-2 font-seasons text-[24px] leading-[1.1] font-bold tracking-[-0.5px] text-ink sm:text-[30px] lg:text-[36px]">Gold as a Long-Term Asset</h2>
          <p className="mt-4 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
            Gold has been a trusted store of value in Indian households for generations. Over the past two decades, gold prices in India have appreciated by an average of 10–12% per annum, outperforming several traditional asset classes. While past performance does not guarantee future returns, hallmarked gold jewellery from a trusted source combines the pleasure of wearing with the confidence of intrinsic value.
          </p>
          <p className="mt-4 text-[13px] leading-[20px] text-ink-50">
            Sunehrie does not provide financial advice. Gold rates fluctuate based on international markets, currency exchange rates and domestic demand.
          </p>
        </div>
      </section>

      <div className="pb-10 sm:pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
