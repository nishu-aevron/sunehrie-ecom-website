import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Metal Education",
  description: "Yellow, rose or white gold? 9KT or 18KT? Learn about alloy composition, durability and choosing the right metal.",
};

const metalTypes = [
  {
    name: "Yellow Gold",
    colour: "#c59b27",
    description: "The classic. Yellow gold is the closest to the natural colour of pure gold. It is alloyed with silver and copper to achieve the warm, sun-kissed tone that has been cherished across Indian traditions for centuries.",
    best: "Traditional designs, mangalsutras, festive pieces and those who love the classic gold look.",
    care: "Polish with a soft chamois cloth. Avoid chlorine, which can weaken yellow gold over time.",
  },
  {
    name: "Rose Gold",
    colour: "#b76e79",
    description: "Rose gold gets its blush-pink hue from a higher proportion of copper in the alloy. It has grown in popularity for its romantic, contemporary feel and pairs beautifully with both warm and cool skin tones.",
    best: "Modern everyday pieces, stackable rings, delicate pendants and pieces with a romantic aesthetic.",
    care: "Rose gold is naturally durable due to copper content. Clean with mild soap and water.",
  },
  {
    name: "White Gold",
    colour: "#e8e8e8",
    description: "White gold is created by alloying pure gold with palladium or nickel and is typically rhodium-plated for a bright, silvery finish. It provides a sleek, modern backdrop that makes diamonds appear even more brilliant.",
    best: "Diamond-forward designs, engagement rings, formal earrings and minimalist jewellery.",
    care: "Rhodium plating may wear over time. Re-plating every 12–18 months restores the bright finish.",
  },
];

const karatComparison = [
  { karat: "9KT", gold: 37.5, durability: "Excellent", colour: "Light", price: "Most affordable", suitability: "Daily wear, active lifestyles" },
  { karat: "14KT", gold: 58.3, durability: "Very good", colour: "Medium", price: "Mid-range", suitability: "Everyday diamond jewellery" },
  { karat: "18KT", gold: 75.0, durability: "Good", colour: "Rich", price: "Premium", suitability: "Bridal, statement, heirloom" },
];

const alloyComposition = [
  { metal: "Copper", role: "Adds strength and gives rose gold its pink tone. Present in all gold alloys." },
  { metal: "Silver", role: "Softens colour and improves workability. Common in yellow and green gold alloys." },
  { metal: "Zinc", role: "Improves casting properties and adds hardness to the alloy." },
  { metal: "Palladium", role: "Used in white gold alloys for a naturally white colour without nickel." },
  { metal: "Nickel", role: "An alternative white gold alloy metal. Sunehrie avoids nickel in direct-skin-contact pieces." },
];

const metalCare = [
  { title: "Daily Wear", description: "Remove jewellery before exercising, swimming or heavy manual work to prevent scratches and chemical exposure." },
  { title: "Cleaning", description: "Soak in warm water with a drop of mild dish soap for 15 minutes, then gently brush with a soft toothbrush and pat dry." },
  { title: "Storage", description: "Store each piece in its own soft pouch or lined compartment. Avoid tossing pieces together in a jewellery box." },
  { title: "Professional Service", description: "Have your jewellery professionally cleaned and inspected once a year to check for loose settings and wear." },
];

export default function MetalEducationPage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <Link href="/knowledge-hub" className="text-[12px] leading-5 hover:underline">Knowledge Hub</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Metal Education</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[52px]">Metal Education</h1>
        <p className="mt-3 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          The metal defines the character of your jewellery — its colour, durability and how it complements your skin. Understand your options so every piece feels right.
        </p>
      </section>

      {/* Types of Gold */}
      <section className="page-x pb-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Metal Colours</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">Types of Gold</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {metalTypes.map((m) => (
            <div key={m.name} className="rounded-2xl border border-purple-20 bg-white p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="size-8 rounded-full border border-black/10" style={{ background: m.colour }} />
                <h3 className="font-seasons text-[24px] leading-[1.15] font-bold tracking-[-0.3px] text-ink">{m.name}</h3>
              </div>
              <p className="text-[14px] leading-[22px] text-ink-70">{m.description}</p>
              <div className="mt-5">
                <p className="text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">Best For</p>
                <p className="mt-1 text-[13px] leading-[20px] text-ink-70">{m.best}</p>
              </div>
              <div className="mt-4">
                <p className="text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">Care Tip</p>
                <p className="mt-1 text-[13px] leading-[20px] text-ink-70">{m.care}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Karat Comparison */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[38px] bg-purple-10 px-[72px] py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Understanding Karats</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">9KT vs 14KT vs 18KT</h2>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-70">
          Karatage tells you the proportion of pure gold in a piece. Sunehrie offers 9KT, 14KT and 18KT — each suited to a different lifestyle and occasion.
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="border-b border-purple-30">
                {["Karat", "Gold %", "Durability", "Colour Intensity", "Price", "Best For"].map((h) => (
                  <th key={h} className="py-3 pr-4 text-left text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {karatComparison.map((k) => (
                <tr key={k.karat} className="border-b border-purple-20">
                  <td className="py-4 pr-4 text-[15px] font-bold text-ink">{k.karat}</td>
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-20 overflow-hidden rounded-full bg-white">
                        <div className="h-full rounded-full bg-gold" style={{ width: `${k.gold}%` }} />
                      </div>
                      <span className="text-[13px] text-ink-70">{k.gold}%</span>
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-[14px] text-ink-70">{k.durability}</td>
                  <td className="py-4 pr-4 text-[14px] text-ink-70">{k.colour}</td>
                  <td className="py-4 pr-4 text-[14px] text-ink-70">{k.price}</td>
                  <td className="py-4 text-[14px] text-ink-70">{k.suitability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Alloy Composition */}
      <section className="page-x py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Inside the Alloy</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">Gold Alloy Composition</h2>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-70">
          Pure 24KT gold is too soft for jewellery. It is alloyed with other metals to achieve the right balance of colour, strength and workability.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {alloyComposition.map((a) => (
            <div key={a.metal} className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[16px] font-bold text-ink">{a.metal}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-ink-70">{a.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[38px] bg-purple-10 px-[72px] py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Keep It Beautiful</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">Durability &amp; Care</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metalCare.map((c) => (
            <div key={c.title} className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[16px] font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-ink-70">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Guide */}
      <section className="page-x py-20">
        <div className="rounded-2xl border border-purple-20 bg-white p-10 lg:p-12">
          <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Your Choice</p>
          <h2 className="mt-2 font-seasons text-[30px] leading-[1.1] font-bold tracking-[-0.5px] text-ink sm:text-[36px]">Which Metal Is Right for You?</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div>
              <h3 className="text-[15px] font-bold text-ink">For the Active Lifestyle</h3>
              <p className="mt-2 text-[14px] leading-[22px] text-ink-70">Choose 9KT or 14KT in yellow or rose gold. Lower karats are harder and resist scratches better — perfect if you wear your jewellery every day.</p>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-ink">For Diamond-Forward Designs</h3>
              <p className="mt-2 text-[14px] leading-[22px] text-ink-70">White gold in 14KT or 18KT makes diamonds pop. The neutral tone lets the stones take centre stage, ideal for solitaires and halo settings.</p>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-ink">For Bridal &amp; Heirloom</h3>
              <p className="mt-2 text-[14px] leading-[22px] text-ink-70">18KT in any colour carries the richest gold content and the most luxurious feel — the standard for pieces that will be treasured across generations.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
