"use client";

import Image from "next/image";
import { MapPin, Clock, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { useShop } from "@/context/ShopContext";

const showrooms = [
  {
    city: "Godhra",
    badge: "Flagship Showroom",
    address: "Main Bazaar · 10:30 AM – 8:30 PM",
    phone: "+91 2672 240500",
  },
  {
    city: "Lunawada",
    badge: "Boutique Experience",
    address: "Station Road · 10:30 AM – 8:30 PM",
    phone: "+91 2674 250600",
  },
];

export default function Showroom() {
  const ref = useScrollAnimation();
  const { setIsStoreModalOpen, showToast } = useShop();

  return (
    <section className="section-padding bg-white pb-16 sm:pb-24" ref={ref} id="showroom">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Real Figma Showroom Images Stack */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] animate-on-scroll animate-left">
            <div className="relative w-[85%] h-[85%] rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(43,13,62,0.15)] border-2 border-[#e8dcee]">
              <Image
                src="/figma/b050c6ed8e7e8d10db96f4a29135a59c3daabe07.png"
                alt="Sunehriè Godhra Flagship Showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 85vw, 45vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[24px] overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_24px_50px_rgba(43,13,62,0.22)]">
              <Image
                src="/figma/da82fd3c28adfac4f174e918b459460d5152780d.png"
                alt="Sunehriè Lunawada Boutique Display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 55vw, 30vw"
              />
            </div>
          </div>

          {/* Showroom Content matching Figma Section 11 */}
          <div className="animate-on-scroll animate-right">
            <span
              className="text-[11px] font-bold text-[#cca338] tracking-[3px] uppercase block mb-2"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              STORE EXPERIENCE
            </span>

            <h2
              className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-[#240632] leading-[1.12] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two Generations of Trust, One
              <br className="hidden sm:inline" />
              Warm Welcome
            </h2>

            <p
              className="text-[14px] sm:text-[15px] text-[#402551] leading-relaxed mb-4 font-normal"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Step into a Sunehriè showroom and the jewellery does the talking — purple-toned
              accent walls, glass display counters and comfortable seating designed for unhurried
              choosing.
            </p>

            <p
              className="text-[14px] sm:text-[15px] text-[#402551] leading-relaxed mb-6 font-normal"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Sit with a stylist, compare karats side by side, and see the exact certificate before you
              decide. Or book a private appointment and we&apos;ll keep the pieces ready.
            </p>

            {/* Showroom Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {showrooms.map((room) => (
                <div
                  key={room.city}
                  className="bg-[#faf6fc] border border-[#e8dcee] rounded-2xl p-4 hover:border-[#7a3f91] hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
                  onClick={() => setIsStoreModalOpen(true)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[16px] font-bold text-[#240632] group-hover:text-[#7a3f91] transition-colors"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {room.city}
                    </span>
                    <span className="text-[10px] font-bold text-[#cca338] bg-[#fbf5e4] px-2 py-0.5 rounded-full border border-[#cca338]/30">
                      {room.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#604a6e] mt-1">
                    <Clock size={12} className="text-[#7a3f91]" />
                    <span>{room.address}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={() => {
                  showToast("Appointment Booking: Our senior stylist will call you 📅");
                  setIsStoreModalOpen(true);
                }}
                className="px-8 py-3.5 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white font-bold text-[12px] sm:text-[13px] tracking-[1.5px] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => setIsStoreModalOpen(true)}
                className="px-8 py-3.5 rounded-full border-2 border-[#7a3f91] text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white font-bold text-[12px] sm:text-[13px] tracking-[1.5px] uppercase transition-all duration-300 shadow-xs hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
