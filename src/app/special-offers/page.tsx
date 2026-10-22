import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Special Offers — The Golden Sparrow Vault",
  description: "Sunehriè's proprietary loyalty program — earn up to ₹50,000 in rewards through the Golden Sparrow Vault.",
};

const steps = [
  { num: "01", title: "Qualify with one purchase", desc: "A single jewellery purchase of ₹15,000 or above unlocks participation. No entry fee, no investment and no recurring payment is required." },
  { num: "02", title: "Track live progress", desc: "Use the Sunehriè app to monitor maturity stages. Progress may advance non-linearly and is not tied to a fixed calendar." },
  { num: "03", title: "Redeem at maturity", desc: "The reward is issued as a Digital Certificate / Voucher of Maturity, redeemable at Sunehriè showrooms towards a future jewellery purchase." },
];

const rewardItems = [
  "Upon reaching 100% maturity, the customer unlocks a ₹50,000 Golden Sparrow Reward.",
  "The reward is issued as a digital certificate or voucher of maturity.",
  "The reward may be fulfilled in installments or as a purchase voucher.",
];

const taxItems = [
  "Rewards are valid for 30 days from issuance.",
  "Rewards cannot be redeemed for cash.",
  "GST applies to the net invoice value at redemption.",
  "TDS may apply under Section 194R of the Income Tax Act.",
  "A valid PAN card is required to claim the reward, according to the website's terms.",
];

const eligibility = [
  "Participation is open to individual customers making a single-item purchase of ₹15,000 or more.",
  "Only one Vault ID is generated per qualifying item.",
  "The program is valid for purchases made at Sunehriè flagship stores and authorized digital channels.",
];

const conditions = [
  "The Maturity Cycle is based on brand growth milestones and internal transaction sequences.",
  "Progress is non-linear and does not follow a fixed timeline.",
  "Sunehriè may audit Vault accounts for compliance.",
  "The program may be adjusted, paused, or terminated at the company's discretion.",
  "A qualifying purchase returned or refunded within 48 hours will result in the associated Vault ID being voided.",
];

const programFaqs = [
  { q: "What triggers maturity?", a: "Maturity is based on aggregate global sales volume, community growth milestones, and internal transaction sequences." },
  { q: "Is there a fixed duration?", a: "No. The company does not guarantee a specific maturity or reward fulfillment date." },
  { q: "What happens if I return the purchase?", a: "If the original purchase is returned or refunded within 48 hours, the associated Vault ID and accrued maturity progress are forfeited." },
  { q: "How is tax handled?", a: "The website's terms describe GST at redemption and possible TDS under Section 194R of the Income Tax Act." },
  { q: "What is the governing law?", a: "Disputes are subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat." },
];

function CheckIcon() {
  return (
    <svg className="mt-[3px] size-[18px] shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function SpecialOffersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="page-x relative pt-[30px] pb-[56px]">
        <svg className="pointer-events-none absolute top-[-6px] right-0 h-[312px] w-[134px] text-purple-10" viewBox="0 0 134 312" fill="currentColor" aria-hidden>
          <ellipse cx="134" cy="156" rx="134" ry="156" />
        </svg>
        <nav aria-label="Breadcrumb" className="relative flex items-center gap-1 text-ink-50 text-[12px] leading-5">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter text-[14px]">/</span>
          <Link href="/special-offers" className="hover:text-purple hover:underline">Special Offers</Link>
          <span className="font-inter text-[14px]">/</span>
          <span className="text-ink">The Golden Sparrow Vault</span>
        </nav>

        <div className="relative mt-[44px] flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/home/trust-shield.svg" alt="" width={18} height={18} className="block size-[18px]" />
              <span className="text-[13px] font-semibold text-purple">Special Offers</span>
            </div>
            <h1 className="mt-[24px] font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1.6px] text-ink sm:text-[52px]">
              The Golden Sparrow Vault
            </h1>
            <p className="mt-[24px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
              The Golden Sparrow is a proprietary loyalty framework designed by Sunehriè. Unlike traditional point-based systems, this program offers a milestone-based reward of up to ₹50,000 (&quot;Reward&quot;) upon the completion of a Proprietary Maturity Cycle (PMC).
            </p>
            <div className="mt-[16px] flex flex-wrap gap-3">
              <span className="rounded-full bg-purple-10 px-[14px] py-[10px] text-[13px] font-medium text-ink">₹15,000+ purchase unlocks participation</span>
              <span className="rounded-full bg-purple-10 px-[14px] py-[10px] text-[13px] font-medium text-ink">Up to ₹50,000 reward at 100% maturity</span>
            </div>
            <div className="mt-[28px] flex flex-wrap items-center gap-4">
              <Link href="/collections" className="inline-flex items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep">
                Shop & Qualify Now
              </Link>
              <Link href="#how-it-works" className="text-[11px] font-semibold tracking-[1px] uppercase text-purple hover:underline">
                How the program works →
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[628px] shrink-0">
            <div className="h-[320px] rounded-3xl bg-gradient-to-br from-purple-10 to-purple-20 sm:h-[420px]" />
            <div className="mt-[16px] grid grid-cols-3 gap-3">
              {[
                { label: "Program type", value: "Conditional deferred loyalty discount" },
                { label: "Redemption", value: "Digital certificate / showroom voucher" },
                { label: "Validity", value: "30 days from issuance" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-purple-20 bg-white p-4">
                  <p className="text-[11px] font-semibold tracking-[1px] uppercase text-ink-50">{item.label}</p>
                  <p className="mt-[6px] text-[13px] font-medium leading-[19px] text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How the program works */}
      <section id="how-it-works" className="bg-purple-10/50 py-[56px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">How the program works</p>
          <h2 className="mt-[12px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink sm:text-[36px]">
            A clear journey from purchase to maturity
          </h2>
          <p className="mt-[12px] text-[14px] leading-[24px] text-ink-70">
            The Golden Sparrow Vault is a conditional program tied to brand milestones. Progress is driven by aggregate sales, community growth and internal transaction sequences — not by personal referrals.
          </p>
          <div className="mt-[36px] grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-purple-20 bg-white p-6">
                <div className="flex size-[40px] items-center justify-center rounded-full bg-purple-10">
                  <span className="text-[14px] font-bold text-purple">{s.num}</span>
                </div>
                <h3 className="mt-[20px] text-[18px] font-bold text-ink">{s.title}</h3>
                <p className="mt-[16px] text-[14px] leading-[24px] text-ink-70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward & Tax */}
      <section className="py-[56px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Reward & Tax</p>
          <h2 className="mt-[12px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink sm:text-[36px]">
            What happens when the Vault matures
          </h2>
          <div className="mt-[32px] grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Reward issuance</h3>
              <div className="mt-[20px] flex flex-col gap-[16px]">
                {rewardItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[14px] leading-[24px] text-ink-70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Tax & redemption</h3>
              <div className="mt-[20px] flex flex-col gap-[16px]">
                {taxItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[14px] leading-[24px] text-ink-70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & conditions */}
      <section className="bg-purple-10/50 py-[56px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Eligibility & Conditions</p>
          <h2 className="mt-[12px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink sm:text-[36px]">
            Clear rules for participation and redemption
          </h2>
          <div className="mt-[32px] grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Eligibility</h3>
              <div className="mt-[20px] flex flex-col gap-[16px]">
                {eligibility.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[14px] leading-[24px] text-ink-70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Key conditions</h3>
              <div className="mt-[20px] flex flex-col gap-[16px]">
                {conditions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-[14px] leading-[24px] text-ink-70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & FAQ */}
      <section className="py-[56px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Terms & FAQ</p>
          <h2 className="mt-[12px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink sm:text-[36px]">
            Important program conditions
          </h2>
          <div className="mt-[32px] grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Program structure</h3>
              <p className="mt-[16px] text-[14px] leading-[24px] text-ink-70">
                The Golden Sparrow Vault is a conditional loyalty discount program, not a prize scheme, lottery, or money circulation scheme. Participation is a complimentary benefit for customers who purchase goods at fair market value.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Discretion & data</h3>
              <p className="mt-[16px] text-[14px] leading-[24px] text-ink-70">
                Customer data is used for tracking Vault progress and providing program updates. The website states that customer transaction data is not sold or shared with third parties.
              </p>
            </div>
          </div>

          <h2 className="mt-[40px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink">FAQs</h2>
          <div className="mt-[24px] flex flex-col">
            {programFaqs.map((faq) => (
              <div key={faq.q} className="flex flex-col gap-2 border-b border-purple-20 py-[20px] sm:flex-row sm:gap-[36px]">
                <p className="w-full max-w-[240px] shrink-0 text-[15px] font-semibold text-ink">{faq.q}</p>
                <p className="text-[14px] leading-[24px] text-ink-70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & support */}
      <section className="bg-purple-10/50 py-[56px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Contact & Support</p>
          <h2 className="mt-[12px] font-seasons text-[32px] font-bold tracking-[-0.8px] text-ink sm:text-[36px]">
            Questions about the Golden Sparrow Vault?
          </h2>
          <div className="mt-[32px] grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Godhra branch</h3>
              <p className="mt-[16px] text-[14px] leading-[24px] text-ink-70">
                2nd floor, Besides Shreenathji Jewellers Godhrawala, Adumbar kuva, Soniwad, Godhra, Gujarat 389001.
              </p>
              <p className="mt-[12px] text-[14px] font-medium text-ink">+91 93273 31963</p>
            </div>
            <div className="rounded-2xl border border-purple-20 bg-white p-6">
              <h3 className="text-[18px] font-bold text-ink">Lunawada branch</h3>
              <p className="mt-[16px] text-[14px] leading-[24px] text-ink-70">
                Opp Shreenathji Jewellers Godhrawala Lunawada, E-Block, Nandan Arched, Modasa Road, Lunawada, Mahisagar 389230.
              </p>
              <p className="mt-[12px] text-[14px] font-medium text-ink">sunehrie.care@gmail.com</p>
            </div>
          </div>

          <div className="mt-[32px] rounded-2xl border border-purple-20 bg-white p-6">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-seasons text-[24px] font-bold tracking-[-0.4px] text-ink">Need help understanding the program?</h3>
                <p className="mt-[8px] text-[14px] leading-[24px] text-ink-70">
                  For current eligibility, maturity status and redemption details, speak with the Sunehriè jewellery team.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="py-[24px]">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
