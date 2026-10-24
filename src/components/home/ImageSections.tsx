"use client";

import Image from "next/image";
import Link from "next/link";
import CroppedImage from "@/components/ui/CroppedImage";
import Icon from "@/components/ui/Icon";
import { Panel, SectionHeading } from "@/components/ui/primitives";
import { useShop } from "@/context/ShopContext";

/* ------------------------------------------------------------------ Explore Our Categories */
const categories = [
  { label: "Pendent Earring Set", href: "/collections?category=Pendants", src: "/img/home/cat-pendant-earring-set.jpg", box: [-59, -64, 253, 253] },
  { label: "Pendent", href: "/collections?category=Pendants", src: "/img/home/cat-pendant.jpg", box: [-66, -78, 305, 305] },
  { label: "Ring", href: "/collections?category=Rings", src: "/img/home/cat-ring.jpg", box: [-116, -117, 407, 407] },
  { label: "Necklace Set", href: "/collections?category=Necklaces", src: "/img/home/cat-necklace-set.jpg", box: [-7, -8, 190, 190] },
  { label: "Mangalsutra", href: "/collections?category=Mangalsutra", src: "/img/home/cat-mangalsutra.jpg", box: [-48, -56, 251, 251] },
  { label: "Earrings", href: "/collections?category=Earrings", src: "/img/home/cat-earrings.jpg", box: [-53, -70, 280, 280] },
] as const;

export function ExploreCategories() {
  return (
    <section className="page-x flex flex-col gap-2.5 py-8 sm:py-[50px]">
      <SectionHeading title="Explore Our Categories" subtitle="Crafted to celebrate beauty, confidence, and timeless golden elegance." className="pb-4 sm:pb-8" />
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-x-[50px] sm:gap-y-8">
        {categories.map((c) => (
          <li key={c.label}>
            <Link href={c.href} className="group flex w-[100px] flex-col items-center gap-[7px] sm:w-[140px] lg:w-[175px]">
              <span className="relative aspect-square w-full overflow-hidden rounded-full bg-[#f0f0f0]">
                <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <CroppedImage src={c.src} alt="" frame={[175, 175]} box={[...c.box]} sizes="420px" />
                </span>
              </span>
              <span className="text-center text-[12px] leading-[16px] font-medium tracking-[0.24px] text-[#232323] group-hover:text-purple sm:text-[15.8px] sm:leading-[22.4px]">
                {c.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ Video banner */
export function StoryBanner() {
  const { showToast } = useShop();
  const play = () => showToast("Our story film is coming soon");
  return (
    <section className="mx-auto w-full max-w-[1428px] bg-purple-10 px-2 py-3 sm:px-[37px] sm:py-[25px]">
      <div className="relative flex aspect-[1354/598] min-h-[280px] w-full items-center justify-center overflow-hidden rounded-[20px] sm:min-h-[420px] sm:rounded-[32px]">
        <Image src="/img/home/hero-portrait.png" alt="" fill sizes="(max-width: 1440px) 100vw, 1354px" className="object-cover" />
        <div className="relative flex w-full max-w-[700px] flex-col items-center px-4 text-center font-inter text-snow">
          <button
            type="button"
            onClick={play}
            aria-label="Play our story"
            className="flex size-14 cursor-pointer items-center justify-center rounded-[40px] border-2 border-purple bg-purple-50 pl-1 text-[22px] font-bold transition-transform hover:scale-105 sm:size-20 sm:text-[28px] sm:leading-[33.89px]"
          >
            ▶
          </button>
          <h2 className="mt-4 text-[22px] leading-[1.2] font-bold sm:mt-[30px] sm:text-[38px] sm:leading-[45.99px]">Crafted with Love. Worn with Pride.</h2>
          <p className="mt-2 text-[13px] leading-[18px] sm:mt-4 sm:text-[16px] sm:leading-[19.36px]">Discover the art behind every Sunherie creation — responsibly sourced, expertly crafted.</p>
          <button
            type="button"
            onClick={play}
            className="mt-4 h-[42px] w-[180px] cursor-pointer rounded-[26px] bg-[#9466cc] text-[13px] leading-[18.15px] font-medium whitespace-pre transition-colors hover:bg-purple sm:mt-6 sm:h-[52px] sm:w-[220px] sm:text-[15px]"
          >
            {"▶  Watch Our Story"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Shop by Gender */
const genders = [
  { label: "Male", href: "/collections?gender=male", src: "/img/home/gender-male.png", box: [0, 0, 389, 380] },
  { label: "Female", href: "/collections?gender=female", src: "/img/home/gender-female.png", box: [-37, -44, 464, 464] },
  { label: "Kids", href: "/collections?gender=kids", src: "/img/home/gender-kids.png", box: [-127, -153, 587, 587] },
] as const;

export function ShopByGender() {
  return (
    <section className="page-x flex flex-col gap-2.5 py-8 sm:py-[50px]">
      <SectionHeading
        title="Shop by Gender"
        subtitle="Discover jewelry crafted for every style and story, designed to celebrate your unique expression."
        className="pb-4 sm:pb-8"
      />
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-[67px] sm:gap-y-8">
        {genders.map((g) => (
          <li key={g.label} className="w-[45%] sm:w-[389px] sm:max-w-full">
            <Link
              href={g.href}
              className="group relative block aspect-[389/375] w-full overflow-hidden"
              style={{ maskImage: "url(/icons/home/arch-shape.svg)", maskSize: "100% 100%", WebkitMaskImage: "url(/icons/home/arch-shape.svg)", WebkitMaskSize: "100% 100%" }}
            >
              <span className="absolute inset-0 bg-[#261200]" />
              <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <CroppedImage src={g.src} alt="" frame={[389, 375]} box={[...g.box]} sizes="600px" />
              </span>
              <span className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(180deg, rgba(43,13,62,0) 0%, #2b0d3e 100%)" }} />
              <span className="absolute inset-x-0 top-[72.8%] text-center font-seasons text-[32px] leading-[32px] font-bold tracking-[-0.8px] text-white sm:text-[60px] sm:leading-[60px]">
                {g.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ Shop by Purity */
const purityCards = [
  { label: "9KT", href: "/collections?purity=9KT", src: "/img/mega/9kt-gold.jpg", note: "Everyday fine gold — durable, wearable, honestly priced." },
  { label: "14KT", href: "/collections?purity=14KT", src: "/img/mega/14kt-gold.png", note: "Modern classic — the sweet spot of colour and strength." },
  { label: "18KT", href: "/collections?purity=18KT", src: "/img/mega/18kt-gold.png", note: "Heirloom gold — richer colour for pieces you pass down." },
];

export function ShopByPurity() {
  return (
    <Panel className="flex flex-col gap-2.5 px-3 pt-4 pb-8 sm:px-[25px] sm:pt-[25px] sm:pb-[50px]">
      <SectionHeading
        title="Shop by Purity"
        subtitle="Every design shows the karats it's actually available in pick the purity that fits your story."
        className="pb-4 sm:pb-8"
      />
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-[25px]">
        {purityCards.map((p) => (
          <li key={p.label} className="w-full sm:w-[430px] sm:max-w-full">
            <Link href={p.href} className="group relative block aspect-[430/174.92] w-full overflow-hidden rounded-full bg-[#1c1c1c]">
              <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                <CroppedImage src={p.src} alt="" frame={[430, 174.92]} box={[-4.78, -63.62, 307, 300]} sizes="460px" />
              </span>
              <span className="absolute top-0 h-full w-[18.4%]" style={{ left: "57.4%", background: "linear-gradient(90deg, rgba(28,28,28,0) 0%, #1c1c1c 59%)" }} />
              <span className="absolute top-[35.4%] left-[72.3%] w-[86px] text-center font-seasons text-[50px] leading-[50px] font-bold tracking-[-0.8px] text-white max-sm:text-[36px]">
                {p.label}
              </span>
              <span className="absolute bottom-[10px] left-[31.4%] w-[45%] text-[13.1px] leading-[19.6px] font-medium tracking-[0.24px] text-white opacity-0 transition-opacity group-hover:opacity-100 max-sm:hidden">
                {p.note}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/* ------------------------------------------------------------------ Festive banner */
export function FestiveBanner() {
  return (
    <section className="page-x">
      <div className="relative mx-auto flex max-w-[1339px] overflow-hidden rounded-[20px] bg-ink sm:rounded-[37.19px] lg:h-[454px]">
        <span className="pointer-events-none absolute top-[-93px] left-[83.7%] size-[261px] rounded-full bg-purple opacity-50 blur-[105px]" aria-hidden />
        <div className="relative w-1/2 shrink-0 max-lg:hidden">
          <span className="absolute top-[-106px] left-[2px] size-[648px]">
            <Image src="/img/home/festive-banner.jpg" alt="Garba celebration crowd" fill sizes="648px" className="object-cover" />
          </span>
          <span className="absolute top-0 left-[358px] h-full w-[312px]" style={{ background: "linear-gradient(90deg, rgba(43,13,62,0) 0%, #2b0d3e 88%)" }} />
        </div>
        <div className="relative flex max-w-[546px] flex-col gap-5 px-4 py-8 sm:gap-9 sm:px-6 sm:py-12 lg:absolute lg:top-[98px] lg:left-[710px] lg:p-0">
          <div className="flex flex-col gap-3 sm:gap-5">
            <p className="font-inter text-[14px] leading-[22px] font-medium text-[#eae8ff] sm:text-[18px] sm:leading-[29.7px]">Festive Special</p>
            <h2 className="font-seasons text-[28px] leading-none font-bold tracking-[0.49px] text-white sm:text-[36px] lg:text-[49px]">
              25% Off <span className="text-gold-light">Making Charges</span>
            </h2>
          </div>
          <p className="-mt-1 font-inter text-[14px] leading-[22px] text-white sm:-mt-2 sm:text-[18px] sm:leading-[29.7px]">
            On all 9KT &amp; 14KT gold jewellery. Raw gold margin untouched — the discount is only on craftsmanship.
          </p>
          <Link
            href="/collections?sort=offers"
            className="flex w-fit items-center gap-1.5 rounded-full border-[0.5px] border-[#e8eaf4] bg-linear-to-b from-white to-[#fbfbfe] px-5 py-[18px] font-inter text-[16px] leading-3 font-semibold text-[#170f49] shadow-[0_3px_6px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Shop the offer
            <Icon src="/icons/home/arrow-right-small.svg" size={20.42} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Shop by Occasion */
const occasions = {
  left: [
    { label: "Office Wear", src: "/img/home/occasion-office.png", h: 379, box: [-5.5, -55, 540, 540], grad: { w: 236, h: 188, angle: 222 }, labelY: 322, labelX: 19.5 },
    { label: "Wedding Wear", src: "/img/home/occasion-wedding.png", h: 460, box: [-30.5, -102, 562, 562], grad: { w: 305, h: 231, angle: 188 }, labelY: 401, labelX: 12.5 },
  ],
  right: [
    { label: "Party Wear", src: "/img/home/occasion-party.png", h: 445, box: [-20.5, -80, 541, 542], grad: { w: 236, h: 188, angle: 222 }, labelY: 376, labelX: 25.5 },
    { label: "Daily Wear", src: "/img/mega/all-gold.png", h: 395, box: [-5.89, -84, 512, 512], grad: { w: 433, h: 188, angle: 192 }, labelY: 334, labelX: 29.5 },
  ],
};

type Occasion = (typeof occasions.left)[number];

function OccasionTile({ o }: { o: Occasion }) {
  return (
    <Link
      href={`/collections?occasion=${encodeURIComponent(o.label.toLowerCase())}`}
      className="group relative block w-full overflow-hidden rounded-3xl bg-[#ad5b5b]"
      style={{ aspectRatio: `500 / ${o.h}` }}
    >
      <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <CroppedImage src={o.src} alt="" frame={[500, o.h]} box={o.box as [number, number, number, number]} sizes="600px" />
      </span>
      <span
        className="absolute bottom-0 left-px"
        style={{
          width: `${(o.grad.w / 500) * 100}%`,
          height: `${(o.grad.h / o.h) * 100}%`,
          background: `linear-gradient(${o.grad.angle}deg, rgba(43,13,62,0) 0%, #2b0d3e 100%)`,
        }}
      />
      <span
        className="absolute font-seasons text-[18px] leading-[18px] font-bold tracking-[-0.8px] text-white sm:text-[34px] sm:leading-[34px]"
        style={{ left: o.labelX, top: `${(o.labelY / o.h) * 100}%` }}
      >
        {o.label}
      </span>
    </Link>
  );
}

export function ShopByOccasion() {
  return (
    <section className="page-x flex flex-col items-center gap-2.5 py-8 sm:py-[50px]">
      <SectionHeading
        align="center"
        title="Shop by Occasion"
        subtitle="Shop our curated collections by occasion find the perfect piece to celebrate every moment."
        className="pb-4 sm:pb-8"
      />
      <div className="grid w-full max-w-[1025px] grid-cols-2 gap-3 sm:gap-[25px]">
        <div className="flex flex-col gap-3 sm:gap-[26px]">
          {occasions.left.map((o) => (
            <OccasionTile key={o.label} o={o} />
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:gap-[25px]">
          {occasions.right.map((o) => (
            <OccasionTile key={o.label} o={o} />
          ))}
        </div>
      </div>
    </section>
  );
}
