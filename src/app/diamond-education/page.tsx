import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Diamond Education",
  description: "Learn about the 4Cs of diamonds — cut, clarity, colour and carat — plus shapes, certifications and care tips.",
};

const fourCs = [
  {
    letter: "Cut",
    grade: "Ideal → Poor",
    description:
      "Cut determines how well a diamond interacts with light. An excellent cut maximises brilliance and fire, making even a smaller stone appear larger and more vibrant. Sunehrie sources only diamonds graded Very Good or above.",
    visual: "bg-gradient-to-r from-purple to-purple-50",
  },
  {
    letter: "Clarity",
    grade: "FL → I3",
    description:
      "Clarity measures the presence of internal inclusions and surface blemishes. Most inclusions in our VS–SI range diamonds are invisible to the naked eye, offering excellent value without compromising beauty.",
    visual: "bg-gradient-to-r from-purple-10 to-white",
  },
  {
    letter: "Colour",
    grade: "D → Z",
    description:
      "Diamond colour is graded on the absence of colour — D being perfectly colourless and Z having a noticeable yellow tint. Our collection focuses on the near-colourless G–H range, ideal for gold settings.",
    visual: "bg-gradient-to-r from-gold-cream to-white",
  },
  {
    letter: "Carat",
    grade: "Weight measurement",
    description:
      "Carat refers to a diamond's weight, not its size. One carat equals 0.2 grams. Two diamonds of equal carat weight can appear different sizes depending on cut proportions and shape.",
    visual: "bg-gradient-to-r from-purple-10 to-purple-30",
  },
];

const shapes = [
  { name: "Round", description: "The most popular shape, engineered for maximum brilliance with 58 facets." },
  { name: "Princess", description: "A square shape with sharp corners, known for exceptional sparkle." },
  { name: "Oval", description: "An elongated shape that creates the illusion of greater size." },
  { name: "Emerald", description: "A step-cut rectangle prized for its hall-of-mirrors effect." },
  { name: "Pear", description: "A teardrop silhouette, elegant in pendants and earrings." },
  { name: "Marquise", description: "A boat-shaped stone that maximises carat weight." },
  { name: "Cushion", description: "Soft rounded corners with large facets for a romantic look." },
  { name: "Heart", description: "The ultimate symbol of love, skilled cutting brings the shape to life." },
];

const careTips = [
  { title: "Clean Regularly", description: "Soak in warm water with mild soap for 20 minutes, then gently brush with a soft toothbrush." },
  { title: "Store Separately", description: "Keep each diamond piece in its own soft pouch to prevent scratching other jewellery." },
  { title: "Avoid Chemicals", description: "Remove diamond jewellery before applying lotions, perfumes or household cleaners." },
  { title: "Annual Check-Up", description: "Have a professional inspect the prong settings annually to ensure stones are secure." },
];

export default function DiamondEducationPage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-8 sm:pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <Link href="/knowledge-hub" className="text-[12px] leading-5 hover:underline">Knowledge Hub</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Diamond Education</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[44px] lg:text-[52px]">Diamond Education</h1>
        <p className="mt-3 max-w-[800px] text-[15px] leading-[24px] text-ink-70">
          Every diamond tells a story of time, pressure and light. Understanding the 4Cs — cut, clarity, colour and carat — empowers you to choose a stone that is as meaningful as it is beautiful.
        </p>
      </section>

      {/* The 4Cs */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-5 py-8 sm:rounded-[38px] sm:px-10 sm:py-12 lg:px-[72px] lg:py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">The Foundation</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">The 4Cs of Diamonds</h2>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-70">
          Established by the Gemological Institute of America, the 4Cs are the universal language for describing diamond quality.
        </p>
        <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {fourCs.map((c) => (
            <div key={c.letter} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
              <div className={`mb-5 h-2 w-full rounded-full ${c.visual}`} />
              <h3 className="font-seasons text-[28px] leading-[1.15] font-bold tracking-[-0.5px] text-ink">{c.letter}</h3>
              <p className="mt-1 text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">{c.grade}</p>
              <p className="mt-4 text-[14px] leading-[22px] text-ink-70">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diamond Shapes */}
      <section className="page-x py-10 sm:py-16 lg:py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Popular Shapes</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">Diamond Shapes</h2>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-70">
          Shape is often confused with cut. While cut affects how light performs inside a diamond, shape is the overall outline when viewed from above.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {shapes.map((s) => (
            <div key={s.name} className="rounded-2xl border border-purple-20 bg-white p-4 sm:p-6">
              <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-purple-10">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 11L14 25L3 11L14 3Z" stroke="#7a3f91" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-[16px] font-bold text-ink">{s.name}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-ink-70">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certification */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-5 py-8 sm:rounded-[38px] sm:px-10 sm:py-12 lg:px-[72px] lg:py-16">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Trust &amp; Assurance</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">IGI Certification</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[15px] leading-[24px] text-ink-70">
              Every natural diamond in a Sunehrie piece is independently graded and certified by the International Gemological Institute (IGI). The certificate includes a detailed assessment of the 4Cs, fluorescence, proportions and a plotted diagram of inclusions.
            </p>
            <p className="mt-4 text-[15px] leading-[24px] text-ink-70">
              An IGI certificate ships inside the box with your jewellery, giving you a permanent record of your diamond&apos;s quality. Each certificate carries a unique report number that can be verified online.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
            <h3 className="text-[16px] font-bold text-ink sm:text-[18px]">What Your Certificate Includes</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {["Carat weight to the hundredth", "Cut, clarity and colour grade", "Fluorescence assessment", "Proportions diagram", "Plotted inclusion map", "Unique report number for verification"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[20px] text-ink-70">
                  <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="#079455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Care Tips */}
      <section className="page-x py-10 sm:py-16 lg:py-20">
        <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">Lasting Brilliance</p>
        <h2 className="mt-2 font-seasons text-[26px] leading-[1.1] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">Diamond Care Tips</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {careTips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
              <h3 className="text-[16px] font-bold text-ink">{tip.title}</h3>
              <p className="mt-3 text-[13px] leading-[20px] text-ink-70">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-x pb-10 sm:pb-16">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-purple-20 bg-purple-10 p-6 text-center sm:p-12">
          <h2 className="font-seasons text-[24px] leading-[1.1] font-bold tracking-[-0.5px] text-ink sm:text-[32px]">Explore Our Diamond Collection</h2>
          <p className="max-w-[500px] text-[15px] leading-[24px] text-ink-70">
            Every stone is natural, IGI-certified and set in BIS-hallmarked gold.
          </p>
          <Link
            href="/collections"
            className="mt-4 inline-flex h-12 items-center justify-center rounded-[50px] bg-purple px-8 text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Browse Jewellery
          </Link>
        </div>
      </section>

      <div className="pb-10 sm:pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
