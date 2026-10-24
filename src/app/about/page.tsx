import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Two generations of trust — real gold, natural diamonds, and a legacy of love from Godhra & Lunawada.",
};

const commitments = [
  { icon: "/icons/home/trust-shield.svg", title: "BIS Hallmark Assured", desc: "Every piece carries a unique HUID, verified by the Bureau of Indian Standards for purity and authenticity." },
  { icon: "/icons/home/trust-diamond.svg", title: "Natural Diamonds Only", desc: "We use only IGI-certified natural diamonds — never lab-grown, never simulated, never compromised." },
  { icon: "/icons/home/trust-rupee.svg", title: "Transparent Pricing", desc: "Full price breakup on every product — gold weight, diamond value, making charges and GST, all visible." },
];

const values = [
  { title: "Trust", desc: "Every piece is hallmarked, every diamond certified. We believe trust is built through transparency, not promises." },
  { title: "Craft", desc: "Two generations of jewellery-making inform every curve and setting. We honour traditional techniques while embracing modern design." },
  { title: "Accessibility", desc: "Fine jewellery should not require a fortune. Starting at 9KT, we make real gold and natural diamonds attainable for everyone." },
];

const founders = [
  { initial: "A", name: "Anil Shah", role: "Founder & Managing Director" },
  { initial: "S", name: "Sunita Anil Shah", role: "Co-Founder & Creative Head" },
  { initial: "N", name: "Nishu Shah", role: "Director of Operations" },
  { initial: "I", name: "Ilesh Shah", role: "Head of Retail Strategy" },
];

const team = [
  { initial: "M", name: "Meera Jha", role: "Lead Designer" },
  { initial: "RK", name: "Rajesh K.", role: "Lead Designer" },
  { initial: "PG", name: "Priya Gupta", role: "Lead Designer" },
];

const stores = [
  {
    name: "Sunehriè — Godhra Flagship",
    address: "2nd Floor, Besides Shreenathji Jewellers Godhrawala, Adumbar Kuva, Soniwad, Godhra, Gujarat 389001",
    hours: "Mon – Sat: 10:30 AM – 8:30 PM",
  },
  {
    name: "Sunehriè — Lunawada Showroom",
    address: "Opp Shreenathji Jewellers Godhrawala Lunawada, E-Block, Nandan Arched, Modasa Road, Lunawada, Mahisagar 389230",
    hours: "Mon – Sat: 10:30 AM – 8:30 PM",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Heritage introduction */}
      <section className="page-x pt-[30px] pb-10 sm:pb-[72px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink-50 text-[12px] leading-5">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter text-[14px]">/</span>
          <span className="text-ink">About Us</span>
        </nav>

        <div className="mt-8 flex flex-col gap-8 sm:mt-[46px] sm:gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[644px]">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Two Generations of Trust</p>
            <h1 className="mt-[26px] font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1.6px] text-ink sm:text-[44px] lg:text-[56px]">
              More Than Jewellery,{" "}
              <span className="text-purple">a Legacy of Love</span>
            </h1>
            <p className="mt-[26px] max-w-[644px] text-[15px] leading-[27px] tracking-[0.24px] text-ink-70">
              From a single store in Godhra to a trusted name across Gujarat, Sunehriè carries forward a family tradition of crafting real gold jewellery with natural diamonds — making fine jewellery accessible, honest, and personal.
            </p>
            <Link href="#our-story" className="mt-[26px] inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple hover:underline">
              Explore our story <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative h-[260px] w-full max-w-[580px] overflow-hidden rounded-2xl bg-purple-10 sm:h-[380px] sm:rounded-3xl lg:h-[490px]">
            <Image src="/img/home/hero-portrait.png" alt="Sunehriè brand portrait" fill sizes="580px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="bg-purple-10/50 py-10 sm:py-[56px] lg:py-[72px]">
        <div className="page-x flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center">
          <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl bg-purple-20 sm:h-[350px] sm:rounded-3xl lg:h-[450px] lg:w-[500px]">
            <Image src="/img/home/showroom-interior.png" alt="Jewellery craftsmanship" fill sizes="500px" className="object-cover" />
          </div>
          <div className="max-w-[620px]">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Our Story</p>
            <h2 className="mt-[24px] font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[44px]">
              A Family Tradition, Carried Forward
            </h2>
            <p className="mt-[24px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              Sunehriè was born from a simple belief — that real gold and natural diamonds should be within everyone&apos;s reach. Our founders, with over two decades in the jewellery trade, saw an industry where trust was rare and transparency rarer.
            </p>
            <p className="mt-[24px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              Starting with a flagship store in Godhra and expanding to Lunawada, they built Sunehriè on three promises: every piece hallmarked, every diamond certified, and every price fully transparent. Today, that same commitment drives everything from our 9KT daily wear to our 18KT bridal collections.
            </p>
            <p className="mt-[24px] font-seasons text-[18px] font-bold tracking-[-0.4px] text-purple sm:text-[22px]">
              — The Shah Family, Sunehriè
            </p>
          </div>
        </div>
      </section>

      {/* Brand Commitments */}
      <section className="py-10 sm:py-[48px] lg:py-[64px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">What We Stand For</p>
          <h2 className="mt-[24px] font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[40px]">
            Commitments That Define Every Piece
          </h2>
          <div className="mt-6 grid gap-5 sm:mt-[36px] sm:grid-cols-3 sm:gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="flex flex-col gap-[18px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.icon} alt="" width={32} height={32} className="block size-8" />
                <h3 className="font-seasons text-[18px] font-bold tracking-[-0.4px] text-ink sm:text-[22px]">{c.title}</h3>
                <p className="text-[14px] leading-[22px] tracking-[0.24px] text-ink-70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-purple-10/50 py-10 sm:py-[56px] lg:py-[72px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Vision</p>
          <h2 className="mt-[16px] font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[40px]">
            Making Fine Jewellery Accessible to Every Indian Family
          </h2>
          <p className="mt-[16px] max-w-[960px] text-[15px] leading-[26px] tracking-[0.24px] text-ink-70">
            We envision a future where choosing real gold and natural diamonds is no longer a privilege. Through honest pricing, starting at 9KT, and certified craftsmanship, Sunehriè is rewriting the rules of fine jewellery — one family at a time.
          </p>
          <div className="mt-6 grid gap-4 sm:mt-[48px] sm:grid-cols-3 sm:gap-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-purple-20 bg-white p-6 sm:p-8">
                <h3 className="font-seasons text-[18px] font-bold tracking-[-0.4px] text-ink sm:text-[22px]">{v.title}</h3>
                <p className="mt-[16px] text-[14px] leading-[22px] tracking-[0.24px] text-ink-70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sunehriè Vault */}
      <section className="py-10 sm:py-[56px] lg:py-[72px]">
        <div className="page-x flex flex-col gap-8 sm:gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-[796px]">
            <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">The Golden Sparrow</p>
            <h2 className="mt-[28px] font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[40px]">
              Introducing the Sunehriè Vault
            </h2>
            <p className="mt-[28px] max-w-[796px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              The Golden Sparrow Vault is our proprietary loyalty framework — a milestone-based reward of up to ₹50,000 upon the completion of a Proprietary Maturity Cycle. Unlike traditional point-based systems, this program rewards your journey with Sunehriè.
            </p>
            <p className="mt-[28px] max-w-[796px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              A single jewellery purchase of ₹15,000 or above unlocks participation. Track your progress live and redeem at maturity — it&apos;s jewellery that gives back.
            </p>
            <Link href="/special-offers" className="mt-[28px] inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple hover:underline">
              Learn about the Vault <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="w-full max-w-[420px] shrink-0">
            <div className="rounded-2xl border border-purple-20 bg-white p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/home/trust-shield.svg" alt="" width={36} height={36} className="block size-9" />
              <h3 className="mt-[20px] font-seasons text-[18px] font-bold tracking-[-0.4px] text-ink sm:text-[22px]">The Golden Sparrow Vault</h3>
              <p className="mt-[16px] text-[14px] leading-[22px] tracking-[0.24px] text-ink-70">
                A conditional deferred loyalty program that rewards your purchase journey with up to ₹50,000 on maturity.
              </p>
            </div>
            <div className="mt-[20px] grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-purple-20 bg-white p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/plp/shield-gold.svg" alt="" width={22} height={22} className="block size-[22px]" />
                <p className="mt-[10px] text-[13px] font-medium text-ink">Certified & insured</p>
              </div>
              <div className="rounded-xl border border-purple-20 bg-white p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/home/trust-history.svg" alt="" width={22} height={22} className="block size-[22px]" />
                <p className="mt-[10px] text-[13px] font-medium text-ink">Track live progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-purple-10/50 py-10 sm:py-[56px] lg:py-[72px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Meet the Team</p>
          <h2 className="mt-[16px] font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[40px]">
            The People Behind Sunehriè
          </h2>
          <p className="mt-[16px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
            A family-led team with two generations of jewellery expertise, united by a shared vision.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-[48px] sm:gap-6 lg:grid-cols-4">
            {founders.map((l) => (
              <div key={l.name} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-7">
                <div className="flex size-[52px] items-center justify-center rounded-full bg-purple-10">
                  <span className="font-seasons text-[20px] font-bold text-purple">{l.initial}</span>
                </div>
                <p className="mt-[12px] text-[16px] font-semibold text-ink">{l.name}</p>
                <p className="mt-[8px] text-[11px] font-semibold tracking-[1px] uppercase text-ink-50">{l.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-[24px] sm:gap-6 lg:grid-cols-4">
            {team.map((l) => (
              <div key={l.name} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-7">
                <div className="flex size-[52px] items-center justify-center rounded-full bg-purple-10">
                  <span className="font-seasons text-[20px] font-bold text-purple">{l.initial}</span>
                </div>
                <p className="mt-[12px] text-[16px] font-semibold text-ink">{l.name}</p>
                <p className="mt-[8px] text-[11px] font-semibold tracking-[1px] uppercase text-ink-50">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit our stores */}
      <section className="py-10 sm:py-[48px] lg:py-[64px]">
        <div className="page-x">
          <div className="flex items-center justify-between">
            <h2 className="font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[40px]">
              Visit Our Stores
            </h2>
            <Link href="/contact" className="hidden items-center gap-1.5 text-[15px] font-semibold text-purple hover:underline sm:inline-flex">
              All locations <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:mt-[32px] sm:grid-cols-2 sm:gap-8">
            {stores.map((s) => (
              <div key={s.name} className="rounded-2xl border border-purple-20 bg-white p-6 sm:p-8">
                <h3 className="font-seasons text-[20px] font-bold tracking-[-0.4px] text-ink sm:text-[24px]">{s.name}</h3>
                <p className="mt-[16px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">{s.address}</p>
                <p className="mt-[16px] text-[14px] leading-[20px] text-ink-50">{s.hours}</p>
                <Link href="#" className="mt-[16px] inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple hover:underline">
                  Get directions <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal assistance */}
      <section className="mx-auto w-[calc(100%-27px)] max-w-[1415px] rounded-[20px] bg-purple-10 px-4 py-5 mb-8 sm:rounded-[38px] sm:px-[25px] sm:py-[25px] sm:mb-[48px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-seasons text-[28px] font-bold tracking-[-0.4px] text-ink">Need Personal Assistance?</h2>
            <p className="mt-[12px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              Our jewellery consultants are here to help — whether you need guidance, custom orders, or sizing advice.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
