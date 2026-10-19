"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function SocialShowcase() {
  const [liked, setLiked] = useState(false);
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-[#faf6fc] overflow-hidden scroll-mt-20" id="social-showcase" ref={ref}>
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-10 sm:mb-14 animate-on-scroll">
          <h2
            className="text-[34px] sm:text-[40px] font-bold text-[#7a3f91] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            #MarkYourMoment with Sunehriè
          </h2>

          <p
            className="text-[13px] sm:text-[14px] text-[#402551] mt-2.5 leading-relaxed font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real pieces, real moments — tap a reel to shop the exact jewellery
            featured.
          </p>
        </div>

        {/* Carousel / Cards Area with Left & Right Arrows */}
        <div className="relative max-w-[1240px] mx-auto flex items-center justify-center animate-on-scroll">
          {/* Left Arrow Button */}
          <button
            className="hidden sm:flex absolute -left-5 lg:-left-7 z-20 w-11 h-11 rounded-full bg-white text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white shadow-[0_4px_15px_rgba(43,13,62,0.15)] border border-[#e8dcee] items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous reel"
          >
            <ChevronLeft size={22} />
          </button>

          {/* 3 Showcase Reel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center w-full">
            {/* Left Card from Figma image 144 */}
            <div className="hidden md:block relative h-[440px] sm:h-[480px] rounded-[28px] overflow-hidden shadow-[0_12px_30px_rgba(43,13,62,0.12)] border border-[#ebdff0] group hover:scale-[1.02] transition-transform duration-300 bg-[#240632]">
              <Image
                src="/figma/7a7360cd4f3f02b41bacd1a4f3675eb784e69707.png"
                alt="Sunehrie jewellery reel"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 33vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>

            {/* Center Card: Interactive Smartphone Instagram Reel Mockup from Figma */}
            <div className="relative h-[500px] sm:h-[540px] rounded-[36px] overflow-hidden shadow-[0_24px_50px_rgba(43,13,62,0.25)] border-[6px] border-[#240632] bg-[#160320] group mx-auto w-full max-w-[340px]">
              {/* Phone Top Speaker/Camera Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#240632] rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2" />
                <div className="w-8 h-1 bg-white/20 rounded-full" />
              </div>

              {/* Reel Video/Image from Figma */}
              <Image
                src="/figma/15007f4832c987cbd1320d8288dc691d5c499f65.png"
                alt="Instagram reel jewellery display"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="340px"
              />

              {/* Reel Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

              {/* Right Side Reel Icons */}
              <div className="absolute right-3.5 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex flex-col items-center gap-1 cursor-pointer"
                >
                  <div
                    className={`p-2 rounded-full backdrop-blur-md transition-all ${
                      liked ? "bg-red-500/20 text-red-500" : "bg-black/30 hover:bg-black/50"
                    }`}
                  >
                    <Heart size={20} className={liked ? "fill-red-500 text-red-500" : ""} />
                  </div>
                  <span className="text-[10px] font-semibold">2.4k</span>
                </button>

                <div className="flex flex-col items-center gap-1">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <span className="text-[10px] font-semibold">142</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors">
                    <Send size={18} />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-colors">
                    <Bookmark size={18} />
                  </div>
                </div>
              </div>

              {/* Exact Figma Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-14 z-20 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                  <span
                    className="text-[15px] sm:text-[16px] font-extrabold text-white block leading-tight"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Gold Ring Collection
                  </span>
                  <span
                    className="text-[13px] sm:text-[14px] text-[#e5c158] font-semibold block mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Starts From ₹50,000
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card from Figma image 144 */}
            <div className="hidden md:block relative h-[440px] sm:h-[480px] rounded-[28px] overflow-hidden shadow-[0_12px_30px_rgba(43,13,62,0.12)] border border-[#ebdff0] group hover:scale-[1.02] transition-transform duration-300 bg-[#240632]">
              <Image
                src="/figma/7c175e3c9e2a09f7152cf65d89135b8d0eace389.png"
                alt="Sunehrie luxury gemstone ring showcase"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 33vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            className="hidden sm:flex absolute -right-5 lg:-right-7 z-20 w-11 h-11 rounded-full bg-white text-[#7a3f91] hover:bg-[#7a3f91] hover:text-white shadow-[0_4px_15px_rgba(43,13,62,0.15)] border border-[#e8dcee] items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next reel"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
