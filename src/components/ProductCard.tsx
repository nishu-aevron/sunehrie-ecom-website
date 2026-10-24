"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { useShop } from "@/context/ShopContext";
import { discountPct, inr, mrpOf, priceOf, type MetalColour, type Product } from "@/data/catalog";

const actionBtn =
  "flex size-9 cursor-pointer items-center justify-center rounded-[50px] border border-black/20 p-[5px] backdrop-blur-[2px] transition-all duration-300";

interface ProductCardProps {
  product: Product;
  /** Optional ribbon ("BESTSELLER" on the landing carousel). */
  badge?: string;
  priority?: boolean;
}

export default function ProductCard({ product, badge, priority }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, openCompare, openQuickView } = useShop();
  const [colour, setColour] = useState<MetalColour>(product.defaultColour);
  const liked = isInWishlist(product.slug);
  const href = `/products/${product.slug}`;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-purple-70/15 bg-white sm:rounded-3xl">
      {/* Media */}
      <div className="relative aspect-square overflow-hidden border-b border-purple-30">
        <Link href={href} aria-label={product.name} className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 333px"
            className={`object-cover transition-transform duration-500 ${product.hoverImage ? "" : "group-hover:scale-105"}`}
          />
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 333px"
              className="scale-[1.151] object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
            />
          )}
        </Link>

        {badge && (
          <span className="absolute top-4 left-[19px] rounded-[50px] border border-gold-deep/20 bg-white/20 px-2.5 py-[5px] text-[12px] leading-[12.72px] font-semibold text-gold-deep backdrop-blur-[2px] group-hover:bg-white/80">
            {badge}
          </span>
        )}

        {/* Metal swatches */}
        <div className="absolute bottom-2.5 left-[19px] flex items-center gap-1 rounded-[50px] border border-black/20 bg-white/20 p-[5px] backdrop-blur-[2px] transition-colors group-hover:bg-white/80">
          {product.colours.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColour(c)}
              aria-label={`${c} gold`}
              aria-pressed={colour === c}
              className={`size-5 cursor-pointer rounded-[34px] border ${colour === c ? "border-gold-light" : "border-transparent"}`}
            >
              <Icon src={`/icons/card/swatch-${c}.svg`} size={20} className="-m-px" />
            </button>
          ))}
        </div>

        {/* Actions: heart is always visible; compare + quick view fan out on hover. */}
        <div className="absolute top-2.5 right-[18px] flex w-9 flex-col">
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={liked}
            className={`${actionBtn} relative z-[3] bg-white group-hover:bg-white/80`}
          >
            {liked ? <Heart size={20} className="fill-purple text-purple" /> : <Icon src="/icons/card/icon-heart.svg" size={24} />}
          </button>
          <button
            type="button"
            onClick={() => openCompare(product)}
            aria-label="Add to compare"
            className={`${actionBtn} relative z-[2] -mt-9 bg-white/20 opacity-0 group-focus-within:mt-[5px] group-focus-within:opacity-100 group-hover:mt-[5px] group-hover:bg-white/80 group-hover:opacity-100`}
          >
            <Icon src="/icons/card/icon-compare.svg" size={24} />
          </button>
          <button
            type="button"
            onClick={() => openQuickView(product)}
            aria-label="Quick view"
            className={`${actionBtn} relative z-[1] -mt-9 bg-white/20 opacity-0 group-focus-within:mt-[5px] group-focus-within:opacity-100 group-hover:mt-[5px] group-hover:bg-white/80 group-hover:opacity-100`}
          >
            <Icon src="/icons/card/icon-quickview.svg" size={24} />
          </button>
        </div>
      </div>

      {/* Details */}
      <Link href={href} className="flex flex-col gap-1.5 px-2.5 pt-2.5 pb-3 sm:gap-2 sm:px-[19px] sm:pt-3.5 sm:pb-[18px]">
        <h3 className="truncate text-[13px] leading-none font-semibold text-black sm:text-[15px]">{product.name}</h3>
        <p className="flex items-center gap-1.5 leading-none font-extrabold tracking-[-0.8px] whitespace-nowrap sm:gap-2.5">
          <span className="flex items-center gap-1 sm:gap-2">
            <span className="text-[14px] text-ink-90 sm:text-[16px]">{inr(priceOf(product))}</span>
            <span className="text-[10px] text-ink-50 line-through sm:text-[12px]">{inr(mrpOf(product))}</span>
          </span>
          <span className="text-[10px] text-success sm:text-[12px]">{discountPct(product)}% off</span>
        </p>
        <p className="flex items-center gap-[5px] text-[11px] leading-none font-semibold whitespace-nowrap text-black sm:text-[14px]">
          <span>{product.defaultPurity} Gold</span>
          <Icon src="/icons/card/sparkle.svg" size={8} />
          <span className="truncate">
            {product.diamondCt.toFixed(2)} ct <span className="text-gold-deep">Natural Diamond</span>
          </span>
        </p>
      </Link>
    </article>
  );
}
