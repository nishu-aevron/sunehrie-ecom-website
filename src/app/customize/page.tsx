import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CustomizeForm from "@/components/customize/CustomizeForm";

export const metadata: Metadata = {
  title: "Customize Jewellery",
  description: "Share your idea or a reference photo and our karigars will craft a one-of-a-kind piece, made to your taste and budget.",
};

const steps = [
  { title: "Share your idea", body: "Tell us what you have in mind or upload a reference image." },
  { title: "We call you", body: "Our team discusses design, metal, diamonds and budget." },
  { title: "Handcrafted", body: "Our karigars craft the piece with BIS hallmarked gold." },
  { title: "Delivered insured", body: "Certified, tamper-proof packaging, signature on handover." },
];

const x = "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[50px]";

export default function CustomizePage() {
  return (
    <main className="bg-white">
      <nav aria-label="Breadcrumb" className={`${x} flex items-center gap-2 pt-6 text-[12px] text-ink-70`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-ink">Customize Jewellery</span>
      </nav>

      <section className="mt-4 bg-[#f8f7f9]">
        <div className={`${x} flex flex-col items-center gap-3 py-12 text-center lg:py-16`}>
          <p className="text-[12px] font-extrabold tracking-[2px] text-gold uppercase">Made for you</p>
          <h1 className="font-seasons text-[34px] leading-[1.15] font-bold text-[#1d1a20] sm:text-[46px]">Customize Your Jewellery</h1>
          <p className="max-w-[720px] text-[15px] font-medium text-[#6b6673] sm:text-[16px]">
            Share your idea or a reference photo and our karigars will craft a one-of-a-kind piece, made to your taste and budget.
          </p>
        </div>
      </section>

      <section className={`${x} flex flex-col gap-7 py-12 lg:py-[72px]`}>
        <h2 className="font-seasons text-[26px] font-bold text-[#1d1a20] sm:text-[30px]">How it works</h2>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2.5 rounded-[16px] bg-[#f8f7f9] p-6">
              <span className="font-seasons text-[28px] font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[16px] font-semibold text-[#1d1a20]">{s.title}</h3>
              <p className="text-[13px] font-medium text-[#6b6673]">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="request" className={`${x} flex scroll-mt-6 flex-col gap-8 pb-14 lg:flex-row lg:items-start lg:pb-[72px]`}>
        <CustomizeForm />
        <aside className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="overflow-hidden rounded-[24px] bg-[#f8f7f9]">
            <Image src="/img/customize/customise-banner.png" alt="Customise your jewellery — choose the design, the details, and make it yours." width={613} height={360} className="h-auto w-full" />
          </div>
          <div className="flex flex-col gap-3.5 rounded-[24px] bg-[#f8f7f9] p-6">
            <h2 className="font-seasons text-[20px] font-bold text-[#1d1a20]">Prefer to talk?</h2>
            {[
              { label: "Call", value: "+91 93273 31963", href: "tel:+919327331963" },
              { label: "Email", value: "sunehrie.care@gmail.com", href: "mailto:sunehrie.care@gmail.com" },
              { label: "Showrooms", value: "Godhra  ·  Lunawada", href: "/contact" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-0.5">
                <span className="text-[11px] font-extrabold text-gold uppercase">{c.label}</span>
                <a href={c.href} className="text-[14px] font-semibold whitespace-pre text-[#1d1a20] hover:text-purple">
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
