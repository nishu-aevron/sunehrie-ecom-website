"use client";

import { Heart, ShoppingBag, Eye, X, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useShop, Product } from "@/context/ShopContext";

export interface ProductCardProps {
  id?: string;
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  purity?: string;
  specs?: string;
  tag?: string;
}

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  purity = "18KT Gold",
  specs = "0.50 ct Natural Diamond",
  tag = "BESTSELLER",
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<"yellow" | "rose" | "white">("yellow");
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { toggleWishlist, isInWishlist, addToCart } = useShop();

  const productId = id || name.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const priceNumber = parseInt(price.replace(/[^0-9]/g, ""), 10) || 125000;

  const productObj: Product = {
    id: productId,
    name,
    price,
    priceNumber,
    originalPrice,
    discount,
    image,
    purity,
    specs,
    tag,
  };

  const isLiked = isInWishlist(productId);

  return (
    <>
      <div className="bg-white rounded-[24px] border border-[#9b6fac]/25 hover:border-[#7a3f91] overflow-hidden group hover:shadow-[0_20px_45px_rgba(43,13,62,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative">
        {/* Product Image Area */}
        <div className="relative aspect-square w-full bg-[#fdfcff] p-5 flex items-center justify-center overflow-hidden border-b border-[#f4edf8]">
          {/* Badge (Figma Frame 75) */}
          {tag && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span
                className="bg-[#fcf7ee] text-[#a9831c] text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#cca338]/30 shadow-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tag}
              </span>
            </div>
          )}

          {/* Top-Right Action Buttons Stack (Figma Frame 76: Heart, Eye, Bag) */}
          <div className="absolute top-3.5 right-3.5 z-20 flex flex-col gap-2">
            {/* 1. Wishlist Heart */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(productObj);
              }}
              className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-200 ${
                isLiked
                  ? "bg-red-50 text-red-500 shadow-sm scale-105 border border-red-200"
                  : "bg-white text-[#4a2d5e] hover:text-white hover:bg-[#7a3f91] shadow-sm hover:scale-110 border border-[#e8dcee]"
              }`}
              aria-label="Wishlist"
              title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart
                size={16}
                className={`transition-transform duration-200 ${
                  isLiked ? "fill-red-500 text-red-500 scale-110" : ""
                }`}
              />
            </button>

            {/* 2. Quick View Eye (Figma Frame 73) */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuickViewOpen(true);
              }}
              className="w-[36px] h-[36px] rounded-full bg-white text-[#4a2d5e] hover:bg-[#7a3f91] hover:text-white flex items-center justify-center border border-[#e8dcee] shadow-sm hover:scale-110 transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-1 sm:group-hover:translate-x-0"
              title="Quick View"
              aria-label="Quick View"
            >
              <Eye size={16} />
            </button>

            {/* 3. Add to Bag (Figma Frame 74) */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(productObj, selectedColor);
              }}
              className="w-[36px] h-[36px] rounded-full bg-white text-[#4a2d5e] hover:bg-[#cca338] hover:text-white flex items-center justify-center border border-[#e8dcee] shadow-sm hover:scale-110 transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-x-1 sm:group-hover:translate-x-0"
              title="Add to Bag"
              aria-label="Add to Bag"
            >
              <ShoppingBag size={16} />
            </button>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain p-3 group-hover:scale-106 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>

          {/* Metal Color Swatches (Yellow, Rose, White Gold) from Figma */}
          <div className="absolute bottom-3 left-3.5 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-[#ede3f2] shadow-xs">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor("yellow");
              }}
              title="Yellow Gold"
              className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#aa8012] border transition-transform ${
                selectedColor === "yellow"
                  ? "ring-2 ring-[#cca338] scale-110 border-white shadow-xs"
                  : "border-black/10 hover:scale-110 opacity-75"
              }`}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor("rose");
              }}
              title="Rose Gold"
              className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#b76e79] via-[#f7d6d0] to-[#99525c] border transition-transform ${
                selectedColor === "rose"
                  ? "ring-2 ring-[#b76e79] scale-110 border-white shadow-xs"
                  : "border-black/10 hover:scale-110 opacity-75"
              }`}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor("white");
              }}
              title="White Gold"
              className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#cfd8dc] via-[#ffffff] to-[#90a4ae] border transition-transform ${
                selectedColor === "white"
                  ? "ring-2 ring-[#90a4ae] scale-110 border-white shadow-xs"
                  : "border-black/10 hover:scale-110 opacity-75"
              }`}
            />
          </div>
        </div>

        {/* Product Details (Figma Frame 70) */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
          <div>
            <h3
              className="text-[14px] sm:text-[15px] font-semibold text-[#2c093a] leading-snug mb-2.5 line-clamp-2 group-hover:text-[#7a3f91] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {name}
            </h3>

            {/* Pricing (Frame 66 & 65) */}
            <div className="flex items-baseline gap-2 mb-2.5 flex-wrap">
              <span
                className="text-[17px] sm:text-[18px] font-extrabold text-[#230730]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {price}
              </span>
              {originalPrice && (
                <span
                  className="text-[12px] text-[#917d9b] line-through font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {originalPrice}
                </span>
              )}
              {discount && (
                <span className="text-[11px] font-bold text-[#079455] bg-[#edfcf2] px-2 py-0.5 rounded-full border border-[#a6f4c5]">
                  {discount}
                </span>
              )}
            </div>

            {/* Purity & Diamond Specs (Figma Frame 67) */}
            <div
              className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#7a3f91] font-semibold bg-[#faf6fc] px-2.5 py-1 rounded-md border border-[#f0e6f5] w-fit"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>{purity}</span>
              <span className="text-[#cca338] text-[10px]">✧</span>
              <span className="text-[#4a2d5e]">{specs}</span>
            </div>
          </div>

          {/* Quick Add to Bag on Mobile / hover on Card */}
          <div className="mt-4 pt-3 border-t border-[#f4edf8] flex items-center justify-between">
            <span className="text-[11px] text-[#8e7a9b] font-medium">Free Express Delivery</span>
            <button
              onClick={() => addToCart(productObj, selectedColor)}
              className="text-[11px] font-bold text-[#7a3f91] hover:text-[#cca338] uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              <span>+ Add to Bag</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setQuickViewOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#ece3f0] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickViewOpen(false)}
              className="absolute top-4 right-4 text-[#8e7a9b] hover:text-[#2b0d3e] p-2 rounded-full hover:bg-[#f6eff9] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative aspect-square w-full bg-[#faf6fc] rounded-2xl overflow-hidden p-6 border border-[#eee4f2]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div>
                {tag && (
                  <span className="bg-[#fcf7ee] text-[#a9831c] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#cca338]/30 inline-block mb-2">
                    {tag}
                  </span>
                )}
                <h3
                  className="text-[20px] sm:text-[22px] font-bold text-[#240632] leading-tight mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[22px] font-black text-[#240632]">
                    {price}
                  </span>
                  {originalPrice && (
                    <span className="text-[14px] text-[#917d9b] line-through">
                      {originalPrice}
                    </span>
                  )}
                  {discount && (
                    <span className="text-[11px] font-bold text-[#079455] bg-[#edfcf2] px-2 py-0.5 rounded-full">
                      {discount}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-6 text-[13px] text-[#4a2d5e] border-y border-[#f0e6f5] py-3">
                  <p>
                    <strong>Gold Purity:</strong> {purity} (BIS Hallmarked)
                  </p>
                  <p>
                    <strong>Diamond:</strong> {specs} (IGI Certified)
                  </p>
                  <p>
                    <strong>Selected Metal:</strong>{" "}
                    <span className="capitalize">{selectedColor} Gold</span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(productObj, selectedColor);
                      setQuickViewOpen(false);
                    }}
                    className="flex-1 py-3 px-6 rounded-full bg-[#7a3f91] hover:bg-[#cca338] text-white font-bold text-[13px] uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Bag</span>
                  </button>
                  <button
                    onClick={() => {
                      toggleWishlist(productObj);
                    }}
                    className={`p-3 rounded-full border transition-colors ${
                      isLiked
                        ? "bg-red-50 border-red-200 text-red-500"
                        : "border-[#e8dcee] text-[#7a3f91] hover:bg-[#faf6fc]"
                    }`}
                    title="Wishlist"
                  >
                    <Heart size={18} className={isLiked ? "fill-red-500" : ""} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
