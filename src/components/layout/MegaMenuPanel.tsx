import Image from "next/image";
import Link from "next/link";
import {
  allJewellery,
  diamondLinks,
  giftOccasions,
  goldCategories,
  goldColours,
  goldOccasions,
  type MegaMenu,
  type Thumb,
} from "@/data/navigation";

const columnTitle = "font-seasons text-[18px] leading-[21px] font-bold tracking-[0.28px] text-charcoal";
const linkText = "font-instrument text-[14px] leading-[21px] text-charcoal transition-colors group-hover/link:text-purple";

function ThumbLink({ item, onNavigate }: { item: Thumb; onNavigate: () => void }) {
  const crop = item.crop ?? { size: 50, left: 0, top: 0 };
  return (
    <Link href={item.href} onClick={onNavigate} className="group/link flex items-center gap-2.5">
      <span className="relative size-[50px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={item.image}
          alt=""
          width={crop.size}
          height={crop.size}
          sizes="132px"
          className="absolute max-w-none object-cover transition-transform duration-300 group-hover/link:scale-110"
          style={{ width: crop.size, height: crop.size, left: crop.left, top: crop.top }}
        />
      </span>
      <span className={`${linkText} whitespace-nowrap`}>{item.label}</span>
    </Link>
  );
}

function PromoCard({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="relative h-[327px] w-[491px] shrink-0 overflow-hidden max-xl:hidden">
      <div className="absolute top-[-2px] left-[-6px] h-[331px] w-[497px] overflow-hidden">
        <Image
          src="/img/mega/promo-earrings.png"
          alt="Earring collection — Grace in every pair"
          width={616}
          height={331}
          sizes="616px"
          className="absolute top-0 left-[-23.99%] h-full w-[123.99%] max-w-none"
        />
      </div>
      <div
        className="absolute top-0 left-[-6px] h-[329px] w-[497px]"
        style={{ backgroundImage: "linear-gradient(206.8deg, rgba(0,0,0,0) 48.15%, rgb(0,0,0) 91.18%)" }}
      />
      <div className="absolute bottom-0 left-0 flex w-[422px] flex-col items-start justify-end gap-[5px] px-2.5 py-[15px]">
        <p className="text-[28px] leading-[57.6px] whitespace-nowrap text-blush">Explore New Collection</p>
        <Link
          href="/collections"
          onClick={onNavigate}
          className="flex min-h-11 items-center justify-center rounded-full border border-blush bg-blush px-[23px] py-[14.5px] font-instrument text-[12px] font-medium tracking-[0.72px] text-ink uppercase transition-colors hover:bg-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

function GoldMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex w-[789px] items-start">
      <div className="flex min-w-px flex-1 flex-col gap-4 p-[15px]">
        <p className={columnTitle}>Category</p>
        <ul className="flex flex-col gap-2.5">
          {goldCategories.map((item) => (
            <li key={item.label}>
              <ThumbLink item={item} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex min-w-px flex-1 flex-col gap-4 p-[15px]">
        <p className={columnTitle}>By Color</p>
        <ul className="flex flex-col gap-2.5">
          {goldColours.map((c) => (
            <li key={c.label}>
              <Link href={c.href} onClick={onNavigate} className="group/link flex items-center gap-2.5">
                <span className="size-5 rounded-full border-[0.5px] border-black/10" style={{ backgroundImage: c.swatch }} />
                <span className={linkText}>{c.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-[263px] flex-col gap-4 p-[15px]">
        <p className={columnTitle}>Occasions</p>
        <ul className="flex flex-col gap-2.5">
          {goldOccasions.map((o) => (
            <li key={o.label}>
              <Link href={o.href} onClick={onNavigate} className="group/link block">
                <span className={linkText}>{o.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DiamondMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <ul className="flex w-[789px] flex-col gap-[35px] p-[15px]">
      {diamondLinks.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            onClick={onNavigate}
            className="font-seasons text-[36px] leading-none font-bold whitespace-nowrap text-charcoal transition-colors hover:text-purple"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MoreMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex w-[789px] flex-col gap-[25px] p-[15px]">
      <p className={columnTitle}>All Jewelry</p>
      <ul className="flex w-[596px] flex-wrap items-center gap-[25px]">
        {allJewellery.map((item) => (
          <li key={item.label}>
            <ThumbLink item={item} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function GiftingMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex w-[691px] flex-col gap-3.5">
      <p className="text-[13px] leading-[17.76px] font-semibold tracking-[1.2px] text-purple uppercase">Shop gifts by occasion</p>
      <ul className="flex flex-col gap-3">
        {giftOccasions.map((o) => (
          <li key={o.label}>
            <Link
              href={o.href}
              onClick={onNavigate}
              className="group/gift flex items-center gap-4 rounded-2xl px-2.5 py-2 transition-colors hover:bg-purple-10"
            >
              <span className="relative size-[52px] shrink-0 overflow-hidden rounded-[14px]">
                <Image src={o.image} alt="" fill sizes="52px" className="object-cover" />
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="text-[16px] leading-[21.86px] font-semibold text-[#232323] transition-colors group-hover/gift:text-purple">
                  {o.label}
                </span>
                <span className="text-[12px] leading-[16.39px] font-medium text-[#604a6e]">{o.note}</span>
              </span>
              <span className="pr-1 text-[18px] leading-[24.59px] font-medium text-purple">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MegaMenuPanel({ menu, onNavigate }: { menu: MegaMenu; onNavigate: () => void }) {
  return (
    <div className="absolute inset-x-0 top-full bg-white shadow-dropdown max-lg:hidden">
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between pr-[79px] pl-[50px] ${
          menu === "gifting" ? "pt-[45px] pb-[35px]" : "pt-[45px] pb-[57px]"
        }`}
      >
        {menu === "gold" && <GoldMenu onNavigate={onNavigate} />}
        {menu === "diamond" && <DiamondMenu onNavigate={onNavigate} />}
        {menu === "more" && <MoreMenu onNavigate={onNavigate} />}
        {menu === "gifting" && <GiftingMenu onNavigate={onNavigate} />}
        <PromoCard onNavigate={onNavigate} />
      </div>
    </div>
  );
}
