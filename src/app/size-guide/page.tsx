import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "Find your perfect ring, bracelet and necklace size with our measurement tables and at-home techniques.",
};

const ringSizes = [
  { indian: 5, us: "3", uk: "F", diameter: "14.0", circumference: "44.0" },
  { indian: 6, us: "3.5", uk: "G", diameter: "14.4", circumference: "45.2" },
  { indian: 7, us: "4", uk: "H", diameter: "14.8", circumference: "46.5" },
  { indian: 8, us: "4.5", uk: "I", diameter: "15.2", circumference: "47.8" },
  { indian: 9, us: "5", uk: "J", diameter: "15.6", circumference: "49.0" },
  { indian: 10, us: "5.5", uk: "K", diameter: "15.9", circumference: "50.0" },
  { indian: 11, us: "6", uk: "L", diameter: "16.5", circumference: "51.8" },
  { indian: 12, us: "6.5", uk: "M", diameter: "16.9", circumference: "53.1" },
  { indian: 13, us: "7", uk: "N", diameter: "17.3", circumference: "54.4" },
  { indian: 14, us: "7.5", uk: "O", diameter: "17.7", circumference: "55.6" },
  { indian: 15, us: "8", uk: "P", diameter: "18.1", circumference: "56.9" },
  { indian: 16, us: "8.5", uk: "Q", diameter: "18.5", circumference: "58.1" },
  { indian: 17, us: "9", uk: "R", diameter: "18.9", circumference: "59.3" },
  { indian: 18, us: "9.5", uk: "S", diameter: "19.4", circumference: "60.9" },
  { indian: 19, us: "10", uk: "T", diameter: "19.8", circumference: "62.2" },
  { indian: 20, us: "10.5", uk: "U", diameter: "20.2", circumference: "63.5" },
];

const measuringMethods = [
  {
    title: "The String Method",
    steps: [
      "Cut a thin strip of paper or a piece of non-stretchy string.",
      "Wrap it snugly around the base of the finger you want to measure.",
      "Mark where the paper or string overlaps.",
      "Lay it flat and measure the length in millimetres.",
      "Match the circumference to the chart above.",
    ],
  },
  {
    title: "The Existing Ring Method",
    steps: [
      "Choose a ring that fits the intended finger well.",
      "Place it on a flat ruler and measure the inside diameter in millimetres.",
      "Match the diameter to the chart above.",
      "If the measurement falls between two sizes, choose the larger size.",
    ],
  },
];

const necklaceLengths = [
  { name: "Choker", length: "35–40 cm / 14–16″", description: "Sits snugly around the neck. Ideal for pendants and collar-style necklaces." },
  { name: "Princess", length: "43–48 cm / 17–19″", description: "The most popular length. Hangs just below the collarbone and suits most necklines." },
  { name: "Matinee", length: "50–60 cm / 20–24″", description: "Falls at or above the bust line. Perfect for layering or formal occasions." },
  { name: "Opera", length: "70–90 cm / 28–36″", description: "Can be worn as a single long strand or doubled for a layered look." },
];

const braceletSizes = [
  { size: "Small", wrist: "14–15.5 cm", bracelet: "16–17.5 cm" },
  { size: "Medium", wrist: "15.5–17 cm", bracelet: "17.5–19 cm" },
  { size: "Large", wrist: "17–18.5 cm", bracelet: "19–20.5 cm" },
  { size: "X-Large", wrist: "18.5–20 cm", bracelet: "20.5–22 cm" },
];

const tips = [
  "Measure at the end of the day when fingers are at their widest.",
  "Measure in warm conditions — cold weather shrinks fingers by up to half a size.",
  "If your knuckle is significantly larger than the base, measure both and choose the middle.",
  "Wide bands (over 6 mm) need a slightly larger size than slim bands.",
  "Dominant-hand fingers are typically half a size larger than the other hand.",
];

export default function SizeGuidePage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <Link href="/knowledge-hub" className="text-[12px] leading-5 hover:underline">Knowledge Hub</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Size Guide</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[44px] lg:text-[52px]">Size Guide</h1>
        <p className="mt-3 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          The perfect fit is the difference between jewellery you wear every day and jewellery that stays in the drawer. Use our guides to find yours.
        </p>
      </section>

      {/* Ring Size Chart */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-5 py-10 sm:rounded-[38px] sm:px-[72px] sm:py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Rings</p>
        <h2 className="mt-2 font-seasons text-[28px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">Ring Size Chart</h2>
        <p className="mt-3 max-w-[600px] text-[13px] leading-[20px] text-ink-50">All measurements in millimetres. Sunehrie uses the Indian sizing system by default.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-purple-30">
                {["Indian", "US", "UK", "Diameter (mm)", "Circumference (mm)"].map((h) => (
                  <th key={h} className="py-3 pr-4 text-left text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ringSizes.map((r) => (
                <tr key={r.indian} className="border-b border-purple-20">
                  <td className="py-3 pr-4 text-[14px] font-bold text-ink">{r.indian}</td>
                  <td className="py-3 pr-4 text-[14px] text-ink-70">{r.us}</td>
                  <td className="py-3 pr-4 text-[14px] text-ink-70">{r.uk}</td>
                  <td className="py-3 pr-4 text-[14px] text-ink-70">{r.diameter}</td>
                  <td className="py-3 text-[14px] text-ink-70">{r.circumference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Measure */}
      <section className="page-x py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">At Home</p>
        <h2 className="mt-2 font-seasons text-[28px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">How to Measure Your Ring Size</h2>
        <div className="mt-6 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-2">
          {measuringMethods.map((m) => (
            <div key={m.title} className="rounded-2xl border border-purple-20 bg-white p-8">
              <h3 className="font-seasons text-[22px] leading-[1.2] font-bold tracking-[-0.3px] text-ink">{m.title}</h3>
              <ol className="mt-5 flex flex-col gap-3">
                {m.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-[22px] text-ink-70">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-purple-10 text-[12px] font-bold text-purple">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Bracelet Sizes */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[38px] bg-purple-10 px-[72px] py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Bracelets</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">Bracelet Size Guide</h2>
        <p className="mt-3 max-w-[600px] text-[15px] leading-[24px] text-ink-70">
          Wrap a measuring tape around your wrist just above the bone, then add 1.5–2 cm for a comfortable fit.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {braceletSizes.map((b) => (
            <div key={b.size} className="rounded-2xl border border-purple-20 bg-white p-6 text-center">
              <p className="text-[16px] font-bold text-ink">{b.size}</p>
              <p className="mt-2 text-[13px] text-ink-50">Wrist: {b.wrist}</p>
              <p className="mt-1 text-[14px] font-semibold text-purple">Bracelet: {b.bracelet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Necklace Lengths */}
      <section className="page-x py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Necklaces</p>
        <h2 className="mt-2 font-seasons text-[36px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[44px]">Necklace Length Guide</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {necklaceLengths.map((n) => (
            <div key={n.name} className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[16px] font-bold text-ink">{n.name}</h3>
              <p className="mt-1 text-[13px] font-semibold text-purple">{n.length}</p>
              <p className="mt-3 text-[13px] leading-[20px] text-ink-70">{n.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="page-x pb-16">
        <div className="rounded-2xl border border-purple-20 bg-purple-10 p-10 lg:p-12">
          <h2 className="font-seasons text-[28px] leading-[1.1] font-bold tracking-[-0.5px] text-ink">Tips for the Perfect Fit</h2>
          <ul className="mt-6 flex flex-col gap-3">
            {tips.map((tip) => (
              <li key={tip} className="flex items-start gap-2.5 text-[14px] leading-[22px] text-ink-70">
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="#7a3f91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {tip}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-2">
            <p className="text-[15px] font-semibold text-ink">Need professional sizing?</p>
            <p className="text-[14px] text-ink-70">Visit any Sunehrie showroom for a complimentary ring sizing session.</p>
            <Link
              href="/contact"
              className="mt-2 inline-flex h-12 w-fit items-center justify-center rounded-[50px] bg-purple px-8 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
