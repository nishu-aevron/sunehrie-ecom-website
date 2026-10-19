"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: "fresh-finds",
    image: "/figma/e089300941138a743ced2c0d4ca081eeda604c9c.png",
    title: "Fresh Finds, Just\nDropped",
    subtitle: "Explore the latest trends with our newest arrivals.",
    cta: "SHOP NOW",
    href: "#products",
  },
  {
    id: "golden-moments",
    image: "/images/hero/right-mannequin.png",
    title: "Golden\nMoments",
    subtitle: "Celebrate every milestone with 100% certified gold jewellery.",
    cta: "SHOP NOW",
    href: "#products",
  },
  {
    id: "crafted-heritage",
    image: "/images/hero/left-mannequin.png",
    title: "Crafted with\nHeritage",
    subtitle: "Two generations of Gujarati trust in every single cut.",
    cta: "SHOP NOW",
    href: "#products",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => nextSlide(), 30000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  const leftIndex = (current - 1 + slides.length) % slides.length;
  const rightIndex = (current + 1) % slides.length;

  // Touch Swipe for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const distance = touchStartX.current - e.changedTouches[0].clientX;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="relative w-full pt-4 sm:pt-6 pb-2 bg-white select-none overflow-hidden">
      {/* Full-Display Responsive Carousel Container */}
      <div
        className="relative w-full max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Peeking Card - Layered Behind Center Card */}
        <div
          onClick={prevSlide}
          className="hidden md:block flex-shrink-0 relative w-[18vw] min-w-[200px] max-w-[320px] h-[390px] sm:h-[450px] lg:h-[500px] xl:h-[540px] rounded-[24px] lg:rounded-[32px] overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:opacity-100 opacity-65 -mr-12 lg:-mr-20 xl:-mr-24 z-10 group"
          style={{
            boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
          }}
          title="Previous slide"
          aria-label="Previous slide"
        >
          <Image
            src={slides[leftIndex].image}
            alt="Previous Collection"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="320px"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-200" />
        </div>

        {/* Center Active Main Banner Card (Full Display Scale) */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative flex-shrink-0 w-[94vw] md:w-[76vw] max-w-[1240px] 2xl:max-w-[1340px] h-[440px] sm:h-[500px] lg:h-[560px] xl:h-[610px] rounded-[24px] sm:rounded-[34px] lg:rounded-[40px] overflow-hidden z-20 group"
          style={{
            boxShadow:
              "0 28px 75px -15px rgba(24, 8, 28, 0.45), 0 14px 32px -8px rgba(0, 0, 0, 0.30)",
          }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover object-center transition-all duration-700 ease-out"
            sizes="(max-width: 1440px) 100vw, 1340px"
          />

          {/* Smooth Dark Vignette / Gradient Overlay on Left Side for Crisp Typography */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(16, 5, 23, 0.92) 0%, rgba(16, 5, 23, 0.74) 38%, rgba(16, 5, 23, 0.28) 58%, rgba(16, 5, 23, 0) 78%)",
            }}
          />

          {/* Hero Typography Content - Vertically Centered on Left */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 lg:px-18 xl:px-24 z-20 max-w-[92%] sm:max-w-[70%] lg:max-w-[620px]">
            <h1
              className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[70px] font-normal text-white leading-[1.08] tracking-[-0.5px] whitespace-pre-line drop-shadow-md"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {slides[current].title}
            </h1>

            <p
              className="text-[14px] sm:text-[15px] lg:text-[17px] xl:text-[18px] text-white/90 mt-3 sm:mt-4 lg:mt-5 leading-relaxed font-normal max-w-[480px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {slides[current].subtitle}
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8">
              <a
                href={slides[current].href}
                className="inline-flex items-center justify-center min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 py-3.5 bg-white text-[#1a0b17] hover:bg-[#cca338] hover:text-white rounded-[6px] text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[2px] uppercase shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_28px_rgba(204,163,56,0.45)] active:scale-95 transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {slides[current].cta}
              </a>
            </div>

            {/* Pagination Indicators - Placed below CTA */}
            <div className="mt-7 sm:mt-10 flex items-center gap-2.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? "bg-[#cca338] w-9 sm:w-10"
                      : "bg-white/40 w-2.5 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows in Bottom-Right Corner - Matching Figma Frame 59 */}
          <div className="absolute right-6 sm:right-10 lg:right-14 bottom-6 sm:bottom-8 lg:bottom-10 z-20 flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-black/40 hover:bg-black/65 active:scale-90 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg cursor-pointer"
            >
              <ChevronLeft size={22} strokeWidth={2.2} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-black/40 hover:bg-black/65 active:scale-90 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg cursor-pointer"
            >
              <ChevronRight size={22} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Right Peeking Card - Layered Behind Center Card */}
        <div
          onClick={nextSlide}
          className="hidden md:block flex-shrink-0 relative w-[18vw] min-w-[200px] max-w-[320px] h-[390px] sm:h-[450px] lg:h-[500px] xl:h-[540px] rounded-[24px] lg:rounded-[32px] overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:opacity-100 opacity-65 -ml-12 lg:-ml-20 xl:-ml-24 z-10 group"
          style={{
            boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
          }}
          title="Next slide"
          aria-label="Next slide"
        >
          <Image
            src={slides[rightIndex].image}
            alt="Next Collection"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="320px"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-200" />
        </div>
      </div>
    </section>
  );
}