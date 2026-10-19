"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2b0d3e] to-[#270c38] text-white pt-14 sm:pt-16 pb-8 overflow-hidden border-t border-[#cca338]/20">
      {/* Background Subtle Peacock Watermark matching Figma Vector 93:11001 */}
      <div className="absolute right-0 bottom-0 w-[240px] sm:w-[320px] lg:w-[420px] h-[480px] pointer-events-none opacity-[0.05] -z-0">
        <Image
          src="/images/peacock.svg"
          alt=""
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="container-main relative z-10">
        {/* Main Footer Grid matching Figma Main Footer Content (93:10846) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Heritage (Figma VerticalBorder 93:10847) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="/" className="inline-block mb-4 group">
                <div className="relative w-[170px] sm:w-[190px] h-[42px]">
                  <Image
                    src="/images/logo.svg"
                    alt="Sunehriè"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
                <span
                  className="text-[12px] font-bold text-[#cca338] tracking-[2px] uppercase block mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  More Than Jewelry
                </span>
              </a>

              <p className="text-[13px] sm:text-[14px] text-white/80 leading-relaxed max-w-[390px] mb-6">
                Sunehriè by Shreenathji Jewellers — two generations of trust from Godhra &amp; Lunawada, now crafted for the modern wearer. Real 9KT/14KT/18KT gold and 100% natural, IGI-certified diamonds with transparent pricing.
              </p>
            </div>

            {/* Social Media Section matching Figma 93:10857 */}
            <div>
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#cca338] block mb-3">
                SOCIAL MEDIA
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#cca338] hover:text-[#2b0d3e] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#cca338] hover:text-[#2b0d3e] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#cca338] hover:text-[#2b0d3e] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="YouTube"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Know Us (Figma Margin 93:10903) */}
          <div className="lg:col-span-2">
            <h4
              className="text-[20px] sm:text-[22px] font-bold text-[#FDECE7] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Know Us
            </h4>
            <ul className="space-y-2.5 text-[12px] sm:text-[13px] text-[#FDECE7]/85">
              {[
                { name: "Sunehriè Promise", href: "#" },
                { name: "Store Experience", href: "#showroom" },
                { name: "Jewelry Education", href: "#" },
                { name: "48-Hour Return & Exchange", href: "#" },
                { name: "Buyback Guarantee", href: "#" },
                { name: "Size Guide", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#cca338] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Shop (Figma Margin 93:10917) */}
          <div className="lg:col-span-2">
            <h4
              className="text-[20px] sm:text-[22px] font-bold text-[#FDECE7] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Shop
            </h4>
            <ul className="space-y-2.5 text-[12px] sm:text-[13px] text-[#FDECE7]/85">
              {[
                { name: "9KT Gold", href: "#products" },
                { name: "14KT Gold", href: "#purity" },
                { name: "18KT Gold", href: "#purity" },
                { name: "Rings", href: "#bestsellers" },
                { name: "Earrings", href: "#bestsellers" },
                { name: "Mangalsutra", href: "#bestsellers" },
                { name: "Gifting Under ₹25,000", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#cca338] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visit / Contact (Figma Margin 93:10936) */}
          <div className="lg:col-span-4">
            <h4
              className="text-[20px] sm:text-[22px] font-bold text-[#FDECE7] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Visit / Contact
            </h4>

            <div className="space-y-3.5 text-[12px] sm:text-[13px] text-[#FDECE7]/90 mb-6">
              {/* Godhra Showroom */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#cca338] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-normal text-white">Godhra - Main Bazaar, Godhra, Gujarat 388001</p>
                  <p className="text-[11px] text-white/70 mt-0.5">Mon–Sun · 10:30 AM – 8:30 PM</p>
                </div>
              </div>

              {/* Lunawada Showroom */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#cca338] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Lunawada - Station Road, Lunawada, Gujarat 389230</p>
                  <p className="text-[11px] text-white/70 mt-0.5">Mon–Sun · 10:30 AM – 8:30 PM</p>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-center gap-2.5 pt-1 border-t border-white/10">
                <Phone size={15} className="text-[#cca338] flex-shrink-0" />
                <a href="tel:+919327331963" className="hover:text-[#cca338] transition-colors font-medium">
                  +91 93273 31963 · 1800-258-2525
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#cca338] flex-shrink-0" />
                <a href="mailto:sunehrie.care@gmail.com" className="hover:text-[#cca338] transition-colors font-medium">
                  sunehrie.care@gmail.com
                </a>
              </div>
            </div>

            {/* Official Figma Payment Method Badges Row (93:10959 Container) */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5">
                {/* UPI */}
                <div className="relative w-[38px] h-[24px] bg-white rounded-[4px] p-0.5 shadow-xs overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                  <Image
                    src="/images/payments/pay-1.png"
                    alt="UPI"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                {/* Visa */}
                <div className="relative w-[38px] h-[24px] bg-white rounded-[4px] p-0.5 shadow-xs overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                  <Image
                    src="/images/payments/visa.svg"
                    alt="Visa"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                {/* Mastercard */}
                <div className="relative w-[38px] h-[24px] bg-[#1c1c1c] rounded-[4px] p-0.5 shadow-xs overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                  <Image
                    src="/images/payments/mastercard.svg"
                    alt="Mastercard"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                {/* AMEX */}
                <div className="relative w-[38px] h-[24px] bg-[#0071ce] rounded-[4px] p-0.5 shadow-xs overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                  <Image
                    src="/images/payments/amex.svg"
                    alt="American Express"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                {/* RuPay */}
                <div className="relative w-[38px] h-[24px] bg-white rounded-[4px] p-0.5 shadow-xs overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                  <Image
                    src="/images/payments/rupay.svg"
                    alt="RuPay"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal & Copyright matching Figma Footer Bottom (93:10990) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-[12px] text-[#FDECE7]/80">
          <p>© 2026 Sunehriè by Shreenathji Jewellers. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">
              Return Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
