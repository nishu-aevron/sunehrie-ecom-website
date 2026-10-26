"use client";

import Link from "next/link";
import { useState } from "react";
import TrustStrip from "@/components/TrustStrip";

const contactChannels = [
  { label: "Phone", value: "+91 93273 31963", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { label: "Email", value: "sunehrie.care@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Visit", value: "Godhra & Lunawada Showrooms", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
];

const helpfulLinks = [
  { label: "Track your order", href: "/account" },
  { label: "Returns & exchanges", href: "/refund-exchange" },
  { label: "Shipping information", href: "/faq" },
];

const storeContacts = [
  {
    name: "Sunehriè — Godhra Flagship",
    address: "2nd Floor, Besides Shreenathji Jewellers Godhrawala, Adumbar Kuva, Soniwad, Godhra, Gujarat 389001",
    phone: "+91 93273 31963",
    hours: "Mon – Sat: 10:30 AM – 8:30 PM | Sun: By appointment",
    details: "Walk-ins welcome. Private viewing available for bridal collections.",
  },
  {
    name: "Sunehriè — Lunawada Showroom",
    address: "Opp Shreenathji Jewellers Godhrawala Lunawada, E-Block, Nandan Arched, Modasa Road, Lunawada, Mahisagar 389230",
    phone: "+91 93273 31963",
    hours: "Mon – Sat: 10:30 AM – 8:30 PM | Sun: By appointment",
    details: "Full collection available. Sizing and engraving services on-site.",
  },
];

const inputClass = "w-full rounded-xl border border-purple-20 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-purple";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "", consent: false });

  const update = (field: string, value: string | boolean) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="page-x relative pt-[30px] pb-[40px]">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative brand flourish */}
        <img src="/icons/brand-flourish.png" alt="" aria-hidden width={116} height={312} className="pointer-events-none absolute top-0 right-0 max-sm:hidden" />
        <nav aria-label="Breadcrumb" className="relative flex items-center gap-1 text-ink-50 text-[12px] leading-5">
          <Link href="/" className="hover:text-purple hover:underline">Home</Link>
          <span className="font-inter text-[14px]">/</span>
          <span className="text-ink">Contact Us</span>
        </nav>
        <div className="relative mt-[38px]">
          <h1 className="font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1.6px] text-ink sm:text-[44px] lg:text-[52px]">Get in Touch</h1>
          <p className="mt-[12px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">
            We&apos;d love to hear from you — whether it&apos;s about a purchase, a custom order, or simply to say hello.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="page-x pb-8 sm:pb-[56px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row">
          {/* Inquiry form */}
          <div className="flex-1 rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
            <h2 className="font-seasons text-[28px] font-bold tracking-[-0.4px] text-ink">Send Us a Message</h2>
            <p className="mt-[8px] text-[14px] leading-[22px] text-ink-50">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

            <form className="mt-[24px] flex flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-[20px] sm:grid-cols-2">
                <label className="flex flex-col gap-[9px]">
                  <span className="text-[13px] font-semibold text-ink">First Name</span>
                  <input type="text" placeholder="Enter first name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} />
                </label>
                <label className="flex flex-col gap-[9px]">
                  <span className="text-[13px] font-semibold text-ink">Last Name (Optional)</span>
                  <input type="text" placeholder="Enter last name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} />
                </label>
              </div>
              <div className="grid gap-[20px] sm:grid-cols-2">
                <label className="flex flex-col gap-[9px]">
                  <span className="text-[13px] font-semibold text-ink">Email Address (Required)</span>
                  <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                </label>
                <label className="flex flex-col gap-[9px]">
                  <span className="text-[13px] font-semibold text-ink">Phone Number</span>
                  <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                </label>
              </div>
              <label className="flex flex-col gap-[9px]">
                <span className="text-[13px] font-semibold text-ink">What is this regarding?</span>
                <select value={form.subject} onChange={(e) => update("subject", e.target.value)} className={inputClass}>
                  <option value="">Select a topic</option>
                  <option value="order">Order inquiry</option>
                  <option value="custom">Custom jewellery</option>
                  <option value="returns">Returns & exchange</option>
                  <option value="general">General question</option>
                  <option value="feedback">Feedback</option>
                </select>
              </label>
              <label className="flex flex-col gap-[9px]">
                <span className="text-[13px] font-semibold text-ink">Your Message</span>
                <textarea rows={5} placeholder="Tell us how we can help…" value={form.message} onChange={(e) => update("message", e.target.value)} className={inputClass} />
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-0.5 size-4 rounded border-purple-20 accent-purple" />
                <span className="text-[13px] leading-[19px] text-ink-70">
                  I agree to the processing of my personal data in accordance with the{" "}
                  <Link href="/privacy" className="text-purple underline">Privacy Policy</Link>.
                </span>
              </label>
              <button type="submit" className="inline-flex w-fit items-center justify-center rounded-full bg-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="w-full shrink-0 lg:w-[400px]">
            <div className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
              <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Reach Us</p>
              <h3 className="mt-4 font-seasons text-[24px] leading-[1.2] font-bold tracking-[-0.4px] text-ink sm:mt-[24px] sm:text-[28px]">
                Prefer to Talk{" "}
                <span className="text-purple">Directly?</span>
              </h3>
              <p className="mt-[24px] text-[14px] leading-[24px] text-ink-70">
                Our jewellery consultants are available during store hours and happy to assist with any query.
              </p>

              <div className="mt-[24px] flex flex-col gap-[24px]">
                {contactChannels.map((ch) => (
                  <div key={ch.label} className="flex items-start gap-[14px]">
                    <svg className="mt-[3px] size-[24px] shrink-0 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={ch.icon} />
                    </svg>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[1px] uppercase text-ink-50">{ch.label}</p>
                      <p className="mt-[6px] text-[14px] font-medium text-ink">{ch.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-[24px] text-[13px] leading-[19px] text-ink-50">
                Response within 24 hours on working days.
              </p>
            </div>

            <div className="mt-[24px] rounded-2xl border border-purple-20 bg-white p-7">
              <h3 className="font-seasons text-[20px] font-bold tracking-[-0.4px] text-ink">Helpful Links</h3>
              <div className="mt-[18px] flex flex-col gap-0">
                {helpfulLinks.map((lnk, i) => (
                  <div key={lnk.label}>
                    <Link href={lnk.href} className="flex items-center justify-between py-[12px] text-[15px] font-semibold text-purple hover:underline">
                      {lnk.label} <span aria-hidden>→</span>
                    </Link>
                    {i < helpfulLinks.length - 1 && <hr className="border-purple-20" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store contacts */}
      <section className="bg-purple-10/50 py-8 sm:py-[56px]">
        <div className="page-x">
          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-purple">Our Stores</p>
          <h2 className="mt-[16px] font-seasons text-[26px] leading-[1.15] font-bold tracking-[-0.8px] text-ink sm:text-[36px] lg:text-[40px]">
            Visit Us in Person
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-[32px] sm:grid-cols-2 sm:gap-8">
            {storeContacts.map((store) => (
              <div key={store.name} className="rounded-2xl border border-purple-20 bg-white p-5 sm:p-8">
                <div className="flex items-center gap-[18px]">
                  <svg className="size-8 shrink-0 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.997 2.997 0 00.177-.756L4.2 3.834A1.5 1.5 0 015.694 2.5h12.612a1.5 1.5 0 011.494 1.334l1.023 4.76a2.997 2.997 0 00.177.755" />
                  </svg>
                  <h3 className="font-seasons text-[18px] font-bold tracking-[-0.4px] text-ink sm:text-[24px]">{store.name}</h3>
                </div>
                <p className="mt-[18px] text-[15px] leading-[24px] tracking-[0.24px] text-ink-70">{store.address}</p>
                <p className="mt-[16px] text-[14px] leading-[24px] text-ink-70">{store.hours}</p>
                <p className="mt-[8px] text-[14px] leading-[20px] text-ink-50">{store.details}</p>
                <hr className="mt-[20px] border-purple-20" />
                <Link href="#" className="mt-[20px] inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple hover:underline">
                  Get directions <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
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
