"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { ArrowButton, Panel, SectionHeading } from "@/components/ui/primitives";
import { useShop } from "@/context/ShopContext";

/* ------------------------------------------------------------------ #MarkYourMoment reels */
const reels = [
  { image: "/img/home/reel-center.png", title: "Gold Ring Collection", from: "₹50,000", href: "/collections?category=Rings" },
  { image: "/img/home/reel-ruby.png", title: "Ruby Duet Rings", from: "₹75,000", href: "/collections?category=Rings" },
  { image: "/img/home/reel-bands.png", title: "Everyday Gold Bands", from: "₹25,000", href: "/collections?metal=gold" },
];

export function MarkYourMoment() {
  const { showToast } = useShop();
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const at = (offset: number) => reels[(active + offset + reels.length) % reels.length];
  const current = at(0);

  async function share() {
    const url = `${window.location.origin}${current.href}`;
    try {
      if (navigator.share) await navigator.share({ title: current.title, url });
      else {
        await navigator.clipboard.writeText(url);
        showToast("Link copied");
      }
    } catch {
      /* user dismissed the share sheet */
    }
  }

  const side = "absolute top-[82px] h-[639px] w-[359px] overflow-hidden rounded-3xl blur-[5px] max-lg:hidden";

  return (
    <Panel className="flex flex-col items-center gap-2.5 px-4 py-8 sm:py-[50px] lg:px-[50px]">
      <SectionHeading
        align="center"
        title="#MarkYourMoment with Sunehriè"
        subtitle={
          <>
            Real pieces, real moments — tap a reel to shop the
            <br /> exact jewellery featured.
          </>
        }
        className="pb-8"
      />
      <div className="relative flex w-full max-w-[1315px] items-center justify-center lg:h-[803px]">
        <div className="absolute left-2.5 z-10 max-sm:hidden">
          <ArrowButton direction="left" onClick={() => setActive((a) => (a - 1 + reels.length) % reels.length)} label="Previous reel" />
        </div>
        <div className="relative h-[min(793px,140vw)] w-[min(446px,80vw)] lg:h-[803px] lg:w-[934px]">
          <button type="button" onClick={() => setActive((a) => (a - 1 + reels.length) % reels.length)} className={`${side} left-[-112px]`} aria-label="Previous reel">
            <Image src={at(-1).image} alt="" fill sizes="376px" className="object-cover" />
            <span className="absolute inset-0 bg-black/40" />
          </button>
          <button type="button" onClick={() => setActive((a) => (a + 1) % reels.length)} className={`${side} left-[687px]`} aria-label="Next reel">
            <Image src={at(1).image} alt="" fill sizes="376px" className="object-cover" />
            <span className="absolute inset-0 bg-black/40" />
          </button>

          <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-[0_0_14.3px_0_rgba(0,0,0,0.5)] lg:top-2.5 lg:left-[244px] lg:h-[793px] lg:w-[446px]">
            <Image key={current.image} src={current.image} alt={`${current.title} reel`} fill sizes="446px" className="dialog-in object-cover" />
            <div className="absolute top-5 right-5 flex flex-col gap-[5px]">
              {[
                { icon: "reel-mute", label: muted ? "Unmute" : "Mute", onClick: () => setMuted((m) => !m), pressed: muted },
                { icon: "reel-share", label: "Share", onClick: share },
                { icon: "reel-expand", label: "Open collection", href: current.href },
              ].map((b) =>
                b.href ? (
                  <Link key={b.icon} href={b.href} aria-label={b.label} className="flex size-9 items-center justify-center rounded-[50px] border border-black/20 bg-white/80 p-[5px] backdrop-blur-[2px]">
                    <Icon src={`/icons/home/${b.icon}.svg`} size={24} />
                  </Link>
                ) : (
                  <button
                    key={b.icon}
                    type="button"
                    onClick={b.onClick}
                    aria-label={b.label}
                    aria-pressed={b.pressed}
                    className="flex size-9 cursor-pointer items-center justify-center rounded-[50px] border border-black/20 bg-white/80 p-[5px] backdrop-blur-[2px]"
                  >
                    <Icon src={`/icons/home/${b.icon}.svg`} size={24} />
                  </button>
                ),
              )}
            </div>
            <Link
              href={current.href}
              className="absolute right-2 bottom-2 left-2 flex h-[70px] items-center justify-between gap-2 rounded-2xl bg-white/80 p-2 backdrop-blur-[34px] transition-colors hover:bg-white/90 sm:right-[15px] sm:bottom-[15px] sm:left-[15px] sm:h-[90px] sm:gap-[14.4px] sm:rounded-3xl sm:p-[11.52px]"
            >
              <span className="flex items-center gap-2 sm:gap-[15px]">
                <span className="relative size-[40px] shrink-0 overflow-hidden rounded-[16px] sm:size-[54px] sm:rounded-[21.6px]">
                  <Image src="/img/home/reel-product.jpg" alt="" width={112} height={112} className="absolute top-[-20px] left-[-20px] size-[80px] max-w-none object-cover sm:top-[-29px] sm:left-[-29px] sm:size-[112px]" />
                </span>
                <span className="flex flex-col gap-1 tracking-[-0.8px] sm:gap-2.5">
                  <span className="text-[13px] leading-4 font-extrabold text-ink-90 sm:text-[16px]">{current.title}</span>
                  <span className="text-[12px] leading-4 font-semibold text-[#604a6e] sm:text-[16px]">Starts From {current.from}</span>
                </span>
              </span>
              <Icon src="/icons/home/reel-open.svg" size={30} className="max-sm:!h-[24px] max-sm:!w-[24px]" />
            </Link>
          </div>
        </div>
        <div className="absolute right-2.5 z-10 max-sm:hidden">
          <ArrowButton direction="right" onClick={() => setActive((a) => (a + 1) % reels.length)} label="Next reel" />
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ Showroom */
const eyebrow = "font-jost text-[11px] leading-[17.6px] font-semibold tracking-[3.08px] text-[#a9831c] uppercase";

export function Showroom() {
  const { openModal } = useShop();
  return (
    <section className="page-x py-6 sm:py-[45px]">
      <div className="flex flex-col gap-8 py-4 sm:gap-12 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:pl-[17px]">
        <div className="relative aspect-[677/381] w-full max-w-[677px] shrink-0 lg:h-[381px]">
          <div className="absolute top-0 left-0 h-full w-[82%] overflow-hidden rounded-[22px] shadow-[0_10px_30px_0_rgba(60,20,70,0.12)]">
            <Image src="/img/home/showroom-interior.png" alt="Sunehriè showroom interior" fill sizes="556px" className="object-cover" />
          </div>
          <div className="absolute top-[21.5%] left-[48%] h-[77.6%] w-[52%] overflow-hidden rounded-[22px] border-[6px] border-white shadow-[0_24px_60px_0_rgba(60,20,70,0.18)]">
            <Image src="/img/home/showroom-counter.png" alt="Sunehriè storefront in Godhra" fill sizes="352px" className="object-cover" />
          </div>
        </div>
        <div className="flex max-w-[612.75px] flex-col gap-3 pt-[7.7px]">
          <p className="flex items-center gap-2.5">
            <span className="h-px w-[26px] bg-gold" />
            <span className={eyebrow}>Store Experience</span>
          </p>
          <h2 className="font-seasons text-[26px] leading-[1.15] font-bold text-purple sm:text-[32px] lg:text-[40px] lg:leading-[46px]">
            Two Generations of Trust, One
            <br className="max-sm:hidden" /> Warm Welcome
          </h2>
          <p className="pt-0.5 font-jost text-[15px] leading-6 text-ink-70">
            Step into a Sunehriè showroom and the jewellery does the talking — purple-toned accent walls, glass display counters and comfortable seating
            designed for unhurried choosing.
          </p>
          <p className="pt-0.5 font-jost text-[15px] leading-6 text-ink-70">
            Sit with a stylist, compare karats side by side, and see the exact certificate before you decide. Or book a private appointment and we&apos;ll
            keep the pieces ready.
          </p>
          <ul className="flex flex-wrap gap-2.5 pt-1.5">
            {[
              ["Godhra", "Main Bazaar · 10:30 AM – 8:30 PM"],
              ["Lunawada", "Station Road · 10:30 AM – 8:30 PM"],
            ].map(([city, note]) => (
              <li key={city} className="rounded-lg border border-purple-20 bg-white px-4 py-2.5 font-jost">
                <p className="text-[12.5px] leading-5 font-bold text-purple">{city}</p>
                <p className="text-[11px] leading-[17.6px] text-ink-70">{note}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={() => openModal("store")}
              className="h-[46px] cursor-pointer rounded-full border border-purple bg-purple px-[30px] font-jost text-[12.5px] leading-[18.06px] font-semibold tracking-[2px] text-white uppercase transition-colors hover:bg-purple-deep"
            >
              Find a Store
            </button>
            <button
              type="button"
              onClick={() => openModal("contact")}
              className="h-[46px] cursor-pointer rounded-full border border-purple px-[30px] font-jost text-[12.5px] leading-[18.06px] font-semibold tracking-[2px] text-purple uppercase transition-colors hover:bg-purple hover:text-white"
            >
              Book a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Testimonials */
const stories = [
  { quote: "Superb quality 😍 Amazing product! The IGI certificate came inside the box — buying real gold online finally feels secure.", name: "Joshi Devyani" },
  { quote: "Secure, tamper-proof packaging and delivery before the promised date. The weight matched the invoice exactly — that transparency matters.", name: "Verified Buyer, Rajkot" },
  { quote: "Sunehriè has been our family jeweller in Godhra for years — now the whole family shops online with the same trust.", name: "Shah Family, Godhra" },
  { quote: "Perfect size for daily wear and the transparent price breakup helped me compare karats easily.", name: "Meera P., Ahmedabad" },
];

export function Testimonials() {
  const rail = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) => rail.current?.scrollBy({ left: dir * 404.67, behavior: "smooth" });
  return (
    <Panel className="px-4 py-8 sm:py-[70px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 sm:gap-[34px] sm:px-6">
        <div className="flex items-center justify-between pt-[7.7px]">
          <div className="flex flex-col gap-[7px]">
            <p className="flex items-center gap-2.5">
              <span className={eyebrow}>Customer Stories</span>
              <span className="h-px w-[26px] bg-gold" />
            </p>
            <h2 className="font-seasons text-[26px] leading-[1.15] font-bold text-purple-deep sm:text-[32px] lg:text-[42px] lg:leading-[48.3px]">Loved Across Gujarat</h2>
          </div>
          <div className="flex gap-[22px] max-sm:hidden">
            <ArrowButton direction="left" onClick={() => scroll(-1)} label="Previous stories" />
            <ArrowButton direction="right" onClick={() => scroll(1)} label="Next stories" />
          </div>
        </div>
        <ul ref={rail} className="no-scrollbar flex snap-x gap-[22px] overflow-x-auto">
          {stories.map((s) => (
            <li
              key={s.name}
              className="relative flex min-h-[180px] w-[300px] max-w-[85vw] shrink-0 snap-start flex-col gap-2 rounded-[14px] border border-purple-20 bg-white p-4 sm:min-h-[220.81px] sm:w-[382.67px] sm:gap-3 sm:p-[29px]"
            >
              <span aria-hidden className="absolute top-[19px] right-[25px] font-cormorant text-[64px] leading-[64px] font-medium text-[#fbf5e4]">
                &quot;
              </span>
              <p className="text-[15px] leading-6 tracking-[2px] text-gold" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="flex-1 pt-3 font-jost text-[13.5px] leading-[22.95px] text-[#2c1e33] italic">{s.quote}</p>
              <div className="flex items-center gap-3">
                <span className="flex size-[42px] items-center justify-center rounded-[21px] bg-purple-deep font-cormorant text-[11px] leading-[17.6px] font-semibold tracking-[0.66px] text-blush">
                  {s.name[0]}
                </span>
                <span className="flex flex-col font-jost tracking-[0.66px]">
                  <span className="text-[13px] leading-[20.8px] font-bold text-purple-deep">{s.name}</span>
                  <span className="text-[11px] leading-[17.6px] font-semibold text-success-deep">Verified Buyer</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
