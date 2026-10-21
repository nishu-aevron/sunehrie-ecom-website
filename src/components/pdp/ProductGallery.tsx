"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { useShop } from "@/context/ShopContext";
import type { Product } from "@/data/catalog";

export default function ProductGallery({ product }: { product: Product }) {
  const { showToast } = useShop();
  const images = product.gallery;
  const [index, setIndex] = useState(0);
  const go = (d: number) => setIndex((i) => Math.min(images.length - 1, Math.max(0, i + d)));

  return (
    <div className="flex flex-col gap-2.5 pt-2.5 lg:pr-[25px]">
      <div className="p-[5px]">
        <div className="relative aspect-[696/701] w-full overflow-hidden rounded-[22px] border border-black/10 bg-white">
          <Image key={images[index]} src={images[index]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 696px" className="dialog-in object-cover" />
          <div className="absolute inset-x-4 bottom-5 flex items-center justify-between gap-[13px]">
            <button
              type="button"
              onClick={() => showToast("360° view is coming soon")}
              className="flex h-8 cursor-pointer items-center gap-1.5 rounded-[18px] bg-white px-3 py-2 text-[12px] leading-[16.39px] font-extrabold text-ink-90 shadow-[0_2px_6px_0_rgba(43,13,61,0.12)]"
            >
              <Icon src="/icons/pdp/rotate-360.svg" size={16} />
              360° view
            </button>
            <div className="flex items-center gap-[13px]">
              <span className="rounded-full bg-white px-[12.8px] py-[2.6px] font-instrument text-[12px] leading-[18px] text-[#121212]" aria-live="polite">
                {index + 1} / {images.length}
              </span>
              <div className="flex gap-2">
                {([-1, 1] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => go(d)}
                    disabled={d === -1 ? index === 0 : index === images.length - 1}
                    aria-label={d === -1 ? "Previous image" : "Next image"}
                    className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-[#f1f1f1] disabled:cursor-default disabled:opacity-35"
                  >
                    <Icon src={`/icons/pdp/gallery-${d === -1 ? "prev" : "next"}.svg`} size={12} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-6 gap-2.5">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`relative block aspect-square w-full cursor-pointer overflow-hidden rounded-lg border bg-[#fbfaf7] p-px transition-shadow ${
                i === index ? "border-gold shadow-[0_0_0_2px_rgba(197,155,39,0.18)]" : "border-purple-20 hover:border-purple-50"
              }`}
            >
              <span className="relative block size-full">
                <Image src={src} alt="" fill sizes="108px" className="object-cover" />
              </span>
              {i === 1 && <span className="absolute bottom-0.5 left-px font-jost text-[8.5px] leading-[10.2px] tracking-[0.68px] text-purple-deep">360°</span>}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => showToast("Product film is coming soon")}
            aria-label="Play product video"
            className="relative block aspect-square w-full cursor-pointer overflow-hidden rounded-lg border border-purple-20 bg-[#fbfaf7] p-px"
          >
            <span className="relative block size-full">
              <Image src={images[0]} alt="" fill sizes="108px" className="object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-[#3a1240]/35">
                <Icon src="/icons/pdp/play.svg" size={20} />
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
