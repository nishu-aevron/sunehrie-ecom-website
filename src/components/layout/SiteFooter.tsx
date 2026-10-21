/* eslint-disable @next/next/no-img-element -- UPI badge is a tiny raster crop from Figma */
import Link from "next/link";
import Icon from "@/components/ui/Icon";

const small = "text-[11.4px] leading-[16.8px] tracking-[0.24px] text-cream";
const heading = "font-seasons text-[22px] leading-[22px] font-bold tracking-[-0.44px] text-cream";

const knowUs = ["Sunehriè Promise", "Store Experience", "Jewelry Education", "48-Hour Return & Exchange", "Buyback Guarantee", "Size Guide"];
const shop = [
  { label: "9KT Gold", href: "/collections?purity=9KT" },
  { label: "14KT Gold", href: "/collections?purity=14KT" },
  { label: "18KT Gold", href: "/collections?purity=18KT" },
  { label: "Rings", href: "/collections?category=Rings" },
  { label: "Earrings", href: "/collections?category=Earrings" },
  { label: "Mangalsutra", href: "/collections?category=Mangalsutra" },
  { label: "Gifting Under ₹25,000", href: "/collections?occasion=gifting" },
];
const socials = [
  { label: "Facebook", icon: "social-facebook", href: "https://facebook.com" },
  { label: "YouTube", icon: "social-youtube", href: "https://youtube.com" },
  { label: "Instagram", icon: "social-instagram", href: "https://instagram.com" },
];
const payments = ["pay-visa", "pay-mastercard", "pay-amex", "pay-paypal"];
const policies = ["Return Policy", "Privacy Policy", "Terms of Service", "Shipping Policy"];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-t from-ink-deep to-ink shadow-footer">
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col justify-center px-4 sm:px-6 lg:min-h-[597px] lg:px-[50px]">
        <div className="flex flex-col lg:h-[401px] lg:flex-row lg:items-start">
          {/* Brand */}
          <div className="flex shrink-0 flex-col items-start gap-5 border-[#58483d] pt-[5px] pb-12 lg:w-[365px] lg:border-r lg:pr-8">
            <Link href="/" aria-label="Sunehriè home" className="flex h-[172px] w-[250px] flex-col items-center gap-[9px] p-2.5">
              <Icon src="/icons/footer/logo-bird.svg" size={[37.14, 88.35]} />
              <Icon src="/icons/footer/logo-wordmark.svg" size={[221.21, 47.95]} />
            </Link>
            <p className={`${small} max-w-[346px]`}>
              Sunehriè by Shreenathji Jewellers — two generations of trust from Godhra &amp; Lunawada, now crafted for the modern
              wearer. Real 9KT/14KT/18KT gold and 100% natural, IGI-certified diamonds with transparent pricing.
            </p>
            <ul className="flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-[20px] bg-cream/15 p-1 transition-colors hover:bg-cream/30"
                  >
                    <Icon src={`/icons/footer/${s.icon}.svg`} size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="flex flex-1 flex-wrap gap-y-10 py-12 lg:h-full lg:min-w-[400px] lg:px-[15px]">
            <div className="w-1/2 max-w-[250px] px-4 sm:flex-1">
              <h4 className={heading}>Know Us</h4>
              <ul className="mt-[28.79px] flex flex-col gap-2">
                {knowUs.map((l) => (
                  <li key={l}>
                    <Link href="/#" className={`${small} transition-colors hover:text-gold`}>
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 max-w-[250px] px-4 sm:flex-1">
              <h4 className={heading}>Shop</h4>
              <ul className="mt-[28.79px] flex flex-col gap-2">
                {shop.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={`${small} transition-colors hover:text-gold`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[30px] max-sm:w-full sm:flex-1">
              <div className="flex flex-col gap-[29px] px-4">
                <h4 className={heading}>Visit / Contact</h4>
                <ul className="flex max-w-[443px] flex-col gap-[15px] text-[14px] leading-none tracking-[-0.24px] text-white">
                  <li className="flex items-start gap-[7px]">
                    <Icon src="/icons/footer/icon-store.svg" size={15} />
                    <div className="flex flex-col gap-[5px] font-light">
                      <p>
                        <span className="font-medium">Godhra</span> - Main Bazaar, Godhra, Gujarat 388001
                      </p>
                      <p>Mon–Sun · 10:30 AM – 8:30 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-[7px]">
                    <Icon src="/icons/footer/icon-store.svg" size={15} />
                    <div className="flex flex-col gap-[5px] font-light">
                      <p>
                        <span className="font-medium">Lunawada</span> - Station Road, Lunawada, Gujarat 389230
                      </p>
                      <p>Mon–Sun · 10:30 AM – 8:30 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-[7px] font-medium">
                    <Icon src="/icons/footer/icon-phone.svg" size={15} />
                    <span>
                      <a href="tel:+919327331963">+91 93273 31963</a> · <a href="tel:18002582525">1800-258-2525</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-[7px] font-medium">
                    <Icon src="/icons/footer/icon-mail.svg" size={15} />
                    <a href="mailto:sunehrie.care@gmail.com">sunehrie.care@gmail.com</a>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-wrap items-center gap-2.5 pl-4" aria-label="Payment methods">
                <li className="relative h-[21px] w-[34px] overflow-hidden rounded-[2px]">
                  <img
                    src="/img/home/pay-upi.png"
                    alt="UPI"
                    className="absolute top-[calc(50%+0.46px)] left-1/2 h-[23px] w-[46px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                  />
                </li>
                {payments.map((p) => (
                  <li key={p}>
                    <Icon src={`/icons/footer/${p}.svg`} size={[34, 21.47]} alt={p.replace("pay-", "")} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#58483d] pt-[30px] pb-[20.8px] lg:px-[52.8px]">
          <div className="flex flex-wrap items-center justify-between gap-y-2">
            <p className={small}>© 2026 Sunehriè by Shreenathji Jewellers. All rights reserved.</p>
            <ul className="flex flex-wrap gap-[15px]">
              {policies.map((p) => (
                <li key={p}>
                  <Link href="/#" className={`${small} whitespace-nowrap transition-colors hover:text-gold`}>
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Icon
        src="/icons/footer/bird-watermark.svg"
        size={[199, 464]}
        className="pointer-events-none absolute top-[186.21px] right-[-49px] max-lg:hidden"
      />
    </footer>
  );
}
