"use client";

import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { useShop } from "@/context/ShopContext";
import type { Product } from "@/data/catalog";

const reviews = [
  {
    name: "Joshi Devyani",
    stars: 5,
    purchased: "18KT Yellow Gold • Natural Diamond • Size 12",
    title: "Superb quality 😍",
    body: "Amazing product, super quality! The ring looks even better in person than on the website. The IGI certificate came inside the box felt completely secure buying real gold online.",
    photo: "/img/reviews/review-1.jpg",
  },
  {
    name: "Verified Buyer — Rajkot",
    stars: 5,
    purchased: "14KT Rose Gold • Natural Diamond • Size 14",
    title: "Secure packaging, fast delivery",
    body: "The tamper-proof packaging was impressive and delivery reached before the promised date. Weight matched exactly what was printed on the invoice.",
    photo: "/img/reviews/review-2.jpg",
  },
  {
    name: "Meera P. — Ahmedabad",
    stars: 4,
    purchased: "9KT Yellow Gold • Natural Diamond • Size 10",
    title: "Beautiful everyday piece",
    body: "Perfect size for daily wear and the transparent price breakup helped me compare karats easily. Would love more white gold options!",
    photo: "/img/reviews/review-3.jpg",
  },
];

const distribution = [
  [5, 88],
  [4, 10],
  [3, 2],
  [2, 0],
  [1, 0],
];

export default function Reviews({ product }: { product: Product }) {
  const { showToast } = useShop();
  return (
    <section id="reviews" className="page-x flex flex-col gap-[34px] lg:px-[77px]">
      <div className="flex flex-col items-center gap-2.5 py-2 text-center">
        <p className="text-[12px] leading-[18px] font-semibold text-[#a9831c]">Verified Buyers</p>
        <h2 className="font-seasons text-[34px] leading-[1.15] font-bold text-purple-deep sm:text-[42px] sm:leading-[48.3px]">Reviews &amp; Ratings</h2>
      </div>

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center">
        <div className="flex w-[340px] max-w-full shrink-0 flex-col items-center rounded-[14px] border border-purple-20 bg-white px-[29px] pt-[29px] pb-[29px]">
          <p className="flex items-baseline gap-[7px] font-seasons font-bold">
            <span className="text-[56px] leading-[56px] text-ink">{product.rating}</span>
            <span className="text-[20px] leading-5 text-ink-70">/ 5</span>
          </p>
          <p className="mt-2 font-jost text-[18px] leading-[28.8px] tracking-[3px] text-purple" aria-label={`${product.rating} out of 5`}>
            ★★★★★
          </p>
          <p className="mt-1 text-[12px] leading-[19.2px] font-semibold text-ink-70">Based on {product.reviews} verified reviews</p>
          <ul className="mt-4 flex w-full flex-col gap-[7px]">
            {distribution.map(([stars, pct]) => (
              <li key={stars} className="flex items-center gap-3 font-jost text-[11.5px] leading-[18.4px] text-ink-70">
                <span className="w-3">{stars}★</span>
                <span className="h-1.5 flex-1 rounded-[3px] bg-[#faf9f6]">
                  <span className="block h-full rounded-[3px] bg-purple" style={{ width: `${pct}%` }} />
                </span>
                <span className="w-7 text-right">{pct}%</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => showToast("Review form is coming soon")}
            className="mt-6 h-9 w-full cursor-pointer rounded-full border border-purple text-[11px] leading-[13.2px] font-semibold text-ink transition-colors hover:bg-purple hover:text-white"
          >
            Write a Review
          </button>
        </div>

        <div className="flex w-[812px] max-w-full flex-col items-center gap-[13px]">
          {reviews.map((r) => (
            <article key={r.name} className="flex w-full flex-col gap-2.5 rounded-[14px] border border-purple-20 bg-white p-[25px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[14px] leading-[22.4px] font-bold text-ink">{r.name}</p>
                  <span className="flex w-fit items-center gap-[5px] rounded-full bg-[#e9f7ef] px-[9px] py-[3px] text-[10px] leading-4 font-bold text-success-deep">
                    <Icon src="/icons/pdp/verified.svg" size={11} />
                    Verified Buyer
                  </span>
                </div>
                <p className="font-jost text-[14px] leading-[22.4px] tracking-[2px] text-purple" aria-label={`${r.stars} out of 5`}>
                  {"★".repeat(r.stars) + "☆".repeat(5 - r.stars)}
                </p>
              </div>
              <span className="w-fit rounded-full border border-purple-20 bg-[#faf9f6] px-3 py-1 text-[11px] leading-[17.6px] text-ink-70">Purchased: {r.purchased}</span>
              <p className="text-[14px] leading-[22.4px] font-bold text-[#2c1e33]">{r.title}</p>
              <p className="text-[13px] leading-[22.95px] font-medium text-ink-70">{r.body}</p>
              <div className="flex gap-2">
                {[1, 0.75, 0.5].map((o) => (
                  <span key={o} className="relative size-[58px] overflow-hidden rounded-lg border border-purple-20" style={{ opacity: o }}>
                    <Image src={r.photo} alt="" fill sizes="58px" className="object-cover" />
                  </span>
                ))}
              </div>
            </article>
          ))}
          <button
            type="button"
            onClick={() => showToast("All reviews are shown")}
            className="mt-[13px] cursor-pointer rounded-[50px] border border-purple bg-white/20 px-5 py-3 text-[16px] leading-[16.48px] font-medium tracking-[1px] text-purple uppercase transition-colors hover:bg-purple hover:text-white"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
