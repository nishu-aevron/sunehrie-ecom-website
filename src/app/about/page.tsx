import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Gem, Receipt, Repeat, ShieldCheck, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Two generations. One golden promise. Sunehriè by Shreenathji Jewellers — real gold, natural diamonds, rooted in Godhra & Lunawada.",
};

const commitments = [
  { Icon: BadgeCheck, title: "Gold you can know", desc: "Choose 9KT, 14KT or 18KT gold, with the assurance of BIS hallmarking. Precious, personal and clearly explained." },
  { Icon: Gem, title: "Naturally brilliant", desc: "Natural, IGI-certified diamonds. A little clarity about what makes every precious choice your own." },
  { Icon: Receipt, title: "Nothing hidden", desc: "Transparent pricing and a full price breakup, so you know what goes into the piece you choose." },
];

const values = [
  { title: "Equality", desc: "Every woman deserves access to jewellery that is beautiful, certified and honestly priced — regardless of occasion or budget." },
  { title: "Security", desc: "From hallmarked metals to lifetime product support, we design our relationship with you to last far beyond the moment of purchase." },
  { title: "Transparency", desc: "Detailed product pricing, certified stones and clear metal grading — so the choice you make is always an informed one." },
];

const leaders = [
  { name: "Yash Sheth", role: "Chief Executive Officer" },
  { name: "Shivam Vipul Purohit", role: "Chief Marketing Officer" },
  { name: "Prem Sheth", role: "Chief Technology Officer" },
  { name: "Jigar Sheth", role: "Chief Financial Officer" },
];

const team = ["Het Sheth", "Raj Sheth", "Dheer Parikh"];

const stores = [
  { city: "Godhra", address: "Main Bazaar, Godhra, Gujarat 388001", hours: "Mon–Sun 10:30 AM–8:30 PM" },
  { city: "Lunawada", address: "Station Road, Lunawada, Gujarat 389230", hours: "Mon–Sun 10:30 AM–8:30 PM" },
];

const x = "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[72px]";
const overline = "text-[11px] font-bold tracking-[0.5px] text-gold uppercase";

function TextLink({ href, children, gold }: { href: string; children: React.ReactNode; gold?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2.5 text-[13px] font-semibold ${gold ? "text-gold" : "text-purple"}`}>
      {children}
      <ArrowRight size={17} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Heritage introduction */}
      <section className="bg-purple-10">
        <div className={`${x} flex flex-col gap-[30px] pt-[30px] pb-12 lg:pb-16`}>
          <nav aria-label="Breadcrumb" className="text-[12px] text-ink-70">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[72px]">
            <div className="flex flex-1 flex-col items-start gap-[26px]">
              <p className={overline}>Sunehriè by Shreenathji Jewellers</p>
              <h1 className="font-seasons text-[38px] leading-[1.12] font-normal text-ink sm:text-[50px] lg:text-[62px]">Two generations. One golden promise.</h1>
              <p className="text-[15px] leading-[1.7] text-ink-70 sm:text-[16px]">
                From Godhra &amp; Lunawada to the moments you make your own. Jewellery rooted in trust, made for the modern wearer.
              </p>
              <TextLink href="#our-story">Discover our story</TextLink>
            </div>
            <div className="relative h-[360px] w-full overflow-hidden rounded-t-[140px] rounded-b-[24px] sm:h-[490px] lg:w-[580px] lg:shrink-0 lg:rounded-t-[190px]">
              <Image src="/img/home/hero-portrait.png" alt="Sunehriè brand portrait" fill priority sizes="(min-width: 1024px) 580px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section id="our-story" className="mx-auto flex w-full max-w-[1440px] scroll-mt-24 flex-col items-center gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:gap-[100px] lg:px-[110px] lg:py-[72px]">
        <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] sm:h-[450px] lg:w-[500px] lg:shrink-0">
          <Image src="/img/home/showroom-interior.png" alt="Jewellery craftsmanship" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col items-start gap-6">
          <p className={overline}>Our roots. Your stories.</p>
          <h2 className="font-seasons text-[30px] leading-[1.12] text-ink sm:text-[42px]">Some things are passed down. Trust is one of them.</h2>
          <p className="text-[14px] leading-[1.7] text-ink-70">
            At Shreenathji Jewellers, our story is a family story — two generations of trust, with roots in Godhra and Lunawada. Sunehriè carries that relationship into a new
            expression of jewellery.
          </p>
          <p className="text-[14px] leading-[1.7] text-ink-70">
            We believe the pieces you wear should feel as honest as the moments they mark. That means real gold, natural diamonds and pricing you can understand, whether you visit
            us in store or discover us online.
          </p>
          <p className="font-seasons text-[21px] text-purple sm:text-[25px]">More than jewellery. A little part of you.</p>
        </div>
      </section>

      {/* Brand commitments */}
      <section className="mx-auto flex w-[calc(100%-16px)] max-w-[1415px] flex-col gap-9 rounded-[24px] bg-[#2b0d3d] px-5 py-10 sm:w-[calc(100%-27px)] sm:rounded-[38px] sm:px-10 lg:px-[72px] lg:py-16">
        <p className={overline}>The Sunehriè promise</p>
        <h2 className="font-seasons text-[30px] leading-[1.12] text-white sm:text-[44px]">Real Gold. Natural Diamonds. Zero Ambiguity.</h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {commitments.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start gap-[18px]">
              <Icon size={32} strokeWidth={1.5} className="text-gold" aria-hidden />
              <h3 className="font-seasons text-[24px] leading-[1.12] text-white sm:text-[28px]">{title}</h3>
              <p className="text-[13px] leading-[1.7] text-cream">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and values */}
      <section className={`${x} flex flex-col gap-12 py-12 lg:py-[72px]`}>
        <div className="flex flex-col gap-4">
          <p className={overline}>Our vision</p>
          <h2 className="font-cormorant text-[32px] leading-[1.12] font-medium text-ink sm:text-[42px]">Jewellery as legacy. Expression. Milestone.</h2>
          <p className="text-[15px] leading-[1.7] text-ink-70">
            At Sunehriè, we believe jewellery is more than ornament. It is a legacy of craftsmanship, an expression of individuality and a celebration of the milestones that shape
            a life. We exist to bridge timeless heritage and modern sophistication — for the contemporary woman who knows her own worth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-4 border-l-[3px] border-gold p-6 sm:p-8">
              <h3 className="font-cormorant text-[28px] leading-[1.12] font-medium text-ink">{v.title}</h3>
              <p className="text-[13px] leading-[1.7] text-ink-70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sunehriè Vault */}
      <section className="bg-ink">
        <div className={`${x} flex flex-col gap-10 py-12 lg:flex-row lg:items-center lg:gap-20 lg:py-[72px]`}>
          <div className="flex flex-1 flex-col items-start gap-7">
            <p className={overline}>Sunehriè Vault · Chidiya Vault</p>
            <h2 className="font-cormorant text-[32px] leading-[1.12] font-medium text-white sm:text-[44px]">Empowering every woman through jewellery.</h2>
            <p className="text-[14px] leading-[1.7] text-cream">
              The Sunehriè Vault is our belief made tangible. Fine jewellery has always held value — material, emotional and cultural. The Vault blends the beauty of jewellery with
              a systematic, intentional approach to asset building, supporting long-term independence, financial confidence and a sense of ownership that is entirely your own.
            </p>
            <p className="text-[14px] leading-[1.7] text-cream">
              This is not a scheme or a promise of returns. It is an invitation to think of your jewellery as something that grows with you — in meaning, and in value.
            </p>
            <TextLink href="/special-offers" gold>
              Learn about the Vault
            </TextLink>
          </div>
          <div className="flex w-full flex-col gap-5 lg:w-[420px] lg:shrink-0">
            <div className="flex flex-col items-start gap-4 rounded-[20px] bg-[#3d1a50] p-8">
              <Wallet size={36} strokeWidth={1.5} className="text-gold" aria-hidden />
              <h3 className="font-cormorant text-[26px] leading-[1.12] font-medium text-white">Your jewellery, your asset</h3>
              <p className="text-[13px] leading-[1.7] text-cream">
                Build a collection with intention. Each certified piece is yours to wear, yours to cherish and yours to leverage — on your terms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: ShieldCheck, label: "100% certified jewellery" },
                { Icon: Repeat, label: "Lifetime product support" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2.5 rounded-[16px] bg-[#3d1a50] p-5">
                  <Icon size={22} strokeWidth={1.5} className="text-gold" aria-hidden />
                  <p className="text-[12px] leading-[1.6] text-cream">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={`${x} flex flex-col gap-12 py-12 lg:py-[72px]`}>
        <div className="flex flex-col gap-4">
          <p className={overline}>The people behind Sunehriè</p>
          <h2 className="font-cormorant text-[32px] leading-[1.12] font-medium text-ink sm:text-[42px]">Heritage-driven wisdom. Forward-thinking vision.</h2>
          <p className="text-[14px] leading-[1.7] text-ink-70">
            Our leadership team combines generations of jewellery expertise with modern business thinking — together building a brand that truly serves the contemporary woman.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {leaders.map((l) => (
              <div key={l.name} className="flex flex-col items-start gap-3 rounded-[20px] bg-purple-10 p-7">
                <span className="flex size-[52px] items-center justify-center rounded-full bg-ink font-cormorant text-[24px] text-gold">{l.name[0]}</span>
                <p className="font-cormorant text-[22px] leading-[1.2] font-medium text-ink">{l.name}</p>
                <p className="text-[11px] font-semibold text-purple uppercase">{l.role}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {team.map((name) => (
              <div key={name} className="flex flex-col items-start gap-3 rounded-[20px] bg-blush-light p-7">
                <span className="flex size-[52px] items-center justify-center rounded-full bg-purple-10 font-cormorant text-[24px] text-purple">{name[0]}</span>
                <p className="font-cormorant text-[22px] leading-[1.2] font-medium text-ink">{name}</p>
                <p className="text-[11px] font-semibold text-ink-70 uppercase">Leadership Team</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit our stores */}
      <section className={`${x} flex flex-col gap-8 pt-4 pb-12 lg:pb-16`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-seasons text-[30px] leading-[1.12] text-ink sm:text-[40px]">Our roots are close to home.</h2>
          <TextLink href="/contact">Plan your visit</TextLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {stores.map((s) => (
            <div key={s.city} className="flex flex-col items-start gap-4 rounded-[24px] bg-purple-10 p-6 sm:p-8">
              <h3 className="font-seasons text-[28px] leading-[1.12] text-ink sm:text-[34px]">{s.city}</h3>
              <p className="text-[14px] leading-[1.7] text-ink-70">{s.address}</p>
              <p className="text-[12px] leading-[1.7] text-ink-70">{s.hours}</p>
              <TextLink href="/contact">Get in touch</TextLink>
            </div>
          ))}
        </div>
      </section>

      {/* Personal assistance */}
      <section className="mx-auto mb-10 flex w-[calc(100%-16px)] max-w-[1415px] flex-col items-start justify-between gap-6 rounded-[24px] bg-blush-light p-6 sm:w-[calc(100%-27px)] sm:rounded-[38px] sm:p-[25px] md:flex-row md:items-center lg:mb-12">
        <div className="flex flex-col gap-3">
          <h2 className="font-seasons text-[26px] leading-[1.12] text-ink sm:text-[32px]">Your story deserves a little gold.</h2>
          <p className="text-[14px] leading-[1.7] text-ink-70">Discover pieces for the everyday, the once-in-a-lifetime and everything in between.</p>
        </div>
        <Link
          href="/collections"
          className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-[40px] bg-purple px-6 text-[16px] font-semibold text-white transition-colors hover:bg-purple-deep md:w-[220px]"
        >
          Explore the collection
        </Link>
      </section>
    </main>
  );
}
