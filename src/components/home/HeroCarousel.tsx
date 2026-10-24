"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowButton } from "@/components/ui/primitives";

const slides = [
  { image: "/img/home/hero-portrait.png", alt: "Woman wearing gold hoop earrings" },
  { image: "/img/home/hero-chains.jpg", alt: "Gold chains on ivory silk" },
  { image: "/img/home/hero-rings.jpg", alt: "Gold and white-gold bands" },
];

const GAP = 25;
/** Slides are rendered three times so the track can loop without a visible jump. */
const loop = [...slides, ...slides, ...slides];

export default function HeroCarousel() {
  const [index, setIndex] = useState(slides.length);
  const [animate, setAnimate] = useState(true);

  const go = useCallback((delta: number) => {
    setAnimate(true);
    setIndex((i) => i + delta);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go, index]);

  // After sliding into a clone, snap back to the middle copy without animating.
  function onTransitionEnd() {
    if (index >= slides.length * 2 || index < slides.length) {
      setAnimate(false);
      setIndex(slides.length + (((index % slides.length) + slides.length) % slides.length));
    }
  }

  return (
    <section aria-roledescription="carousel" aria-label="Featured" className="overflow-hidden pt-1 sm:pt-2.5">
      <div className="py-4 sm:py-8 [--slide:min(1265px,calc(100vw-32px))]">
        <div
          className="ml-[50%] flex h-[clamp(320px,39.5vw,569px)]"
          style={{
            gap: GAP,
            transform: `translateX(calc(-1 * (${index} * (var(--slide) + ${GAP}px) + var(--slide) / 2)))`,
            transition: animate ? "transform 700ms cubic-bezier(.4,0,.2,1)" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loop.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                aria-hidden={!active}
                className={`relative h-full w-(--slide) shrink-0 overflow-hidden rounded-3xl transition-shadow ${
                  active ? "shadow-[0_0_35px_0_rgba(0,0,0,0.2)]" : "shadow-[0_10px_12px_0_rgba(0,0,0,0.1)]"
                }`}
              >
                <Image src={s.image} alt={s.alt} fill priority={i === slides.length} loading={i === slides.length ? undefined : "eager"} sizes="(max-width: 1300px) 100vw, 1265px" className="object-cover" />
                <div className={`absolute bottom-[8%] left-[4.4%] flex max-w-[650px] flex-col gap-2 pr-4 transition-opacity duration-500 sm:gap-[15px] sm:pr-6 ${active ? "opacity-100" : "opacity-0"}`}>
                  <h1 className="font-seasons text-[clamp(24px,5.6vw,80px)] leading-none tracking-[-1.6px] text-white">
                    Fresh Finds, Just
                    <br />
                    Dropped
                  </h1>
                  <p className="font-inter text-[12px] leading-[18px] tracking-[0.24px] text-white sm:text-[15px] sm:leading-[22.4px]">Explore the latest trends with our newest arrivals.</p>
                  <div className="pt-1 sm:pt-[11px]">
                    <Link
                      href="/collections"
                      tabIndex={active ? 0 : -1}
                      className="inline-flex h-9 items-center justify-center rounded-[5px] border border-white bg-white px-4 font-inter text-[11px] leading-[19.2px] tracking-[0.24px] text-black uppercase transition-colors hover:bg-blush sm:h-12 sm:px-[22px] sm:text-[12px]"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                {active && (
                  <div className="absolute right-0 bottom-0 h-[193px] w-[274px] rounded-br-3xl max-sm:hidden" style={{ background: "linear-gradient(156deg, rgba(0,0,0,0) 0%, #000 100%)" }}>
                    <div className="absolute right-[31px] bottom-[26px] flex gap-[15px]">
                      <ArrowButton direction="left" variant="glass" onClick={() => go(-1)} label="Previous slide" />
                      <ArrowButton direction="right" variant="glass" onClick={() => go(1)} label="Next slide" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
