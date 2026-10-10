"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "./Badge";
import { Button } from "./Button";

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-500/40 transition-all duration-500">
      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && <Badge variant="gold">Bestseller</Badge>}
          {product.isNew && <Badge variant="dark">New Arrival</Badge>}
          {discountPercentage > 0 && (
            <Badge variant="emerald">{discountPercentage}% OFF</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md text-zinc-700 dark:text-zinc-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors z-10"
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isWishlisted ? "fill-rose-500 text-rose-500 scale-110" : ""
            }`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <Button
            variant="secondary"
            size="sm"
            className="w-full shadow-lg backdrop-blur-md"
          >
            <ShoppingBag className="w-4 h-4 mr-1.5" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
          <span className="font-medium tracking-wider uppercase">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{product.rating}</span>
            <span className="text-zinc-400">({product.reviewsCount})</span>
          </div>
        </div>

        <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-50 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>

        {product.material && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
            {product.material}
          </p>
        )}

        {/* Price & Actions */}
        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            Free Delivery
          </span>
        </div>
      </div>
    </div>
  );
};
