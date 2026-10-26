"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";
import { colourLabel, inr, priceOf, purities, type MetalColour, type Product, type Purity } from "@/data/catalog";
import { swatchGradient } from "@/components/ui/swatches";

const label = "text-[11px] leading-[17.6px] font-bold text-purple-deep";

function QuickView({ product }: { product: Product }) {
  const { closeModal, addToCart } = useShop();
  const [index, setIndex] = useState(0);
  const [purity, setPurity] = useState<Purity>(product.defaultPurity);
  const [colour, setColour] = useState<MetalColour>(product.defaultColour);
  const [size, setSize] = useState<number | undefined>();
  const [sizeError, setSizeError] = useState(false);
  const images = product.gallery;

  function add() {
    if (product.sizes && size === undefined) {
      setSizeError(true);
      return;
    }
    addToCart(product, { purity, colour, size });
    closeModal();
  }

  return (
    <div className="flex flex-col gap-2.5 md:flex-row">
      {/* Gallery */}
      <div className="flex gap-3 md:w-[627px] md:shrink-0">
        <ul className="no-scrollbar flex max-h-[535px] w-20 shrink-0 flex-col gap-2.5 overflow-y-auto max-sm:hidden">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`relative block size-20 cursor-pointer overflow-hidden border p-px ${i === index ? "border-charcoal" : "border-transparent"}`}
              >
                <span className="relative block size-[78px] border border-[#cfcfcf]">
                  <Image src={src} alt="" fill sizes="78px" className="object-cover" />
                </span>
              </button>
            </li>
          ))}
        </ul>
        <Link
          href={`/products/${product.slug}`}
          onClick={closeModal}
          className="relative aspect-square w-full bg-[#f8f8f8] md:size-[535px]"
          aria-label={`View ${product.name} details`}
        >
          <Image
            src={images[index]}
            alt={product.name}
            fill
            sizes="535px"
            className={index === 0 ? "!inset-[17%] !h-[66%] !w-[66%] object-contain mix-blend-multiply" : "object-cover"}
            priority
          />
        </Link>
      </div>

      {/* Details */}
      <div className="relative flex flex-1 flex-col gap-3.5 bg-white px-[30px] py-[26px] md:w-[430px]">
        <nav className="flex gap-[5px] text-[11.5px] leading-[18.4px] tracking-[0.92px] text-ink-70" aria-label="Breadcrumb">
          <span>{product.category}</span>
          <span className="font-jost">/</span>
          <span className="font-bold text-purple-deep">{product.name}</span>
        </nav>
        <h2 className="font-seasons text-[24px] leading-[28.8px] font-bold text-purple-deep">{product.name}</h2>
        <div className="flex items-center gap-1.5 font-jost">
          <span className="text-[15px] leading-6 text-[#2c1e33]" aria-hidden>
            ★★★★★
          </span>
          <span className="text-[12px] leading-[19.2px] text-ink-70">
            {product.rating} · {product.reviews} Reviews
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[22px] leading-[35.2px] font-bold text-purple-deep">{inr(priceOf(product, purity)).replace("₹", "₹ ")}</span>
          <span className="font-jost text-[11.5px] leading-[18.4px] text-ink-70">incl. of all taxes</span>
        </div>
        <p className="font-jost text-[12.5px] leading-5 text-ink-70">
          {purity} {colourLabel[colour]} • Net {product.netWeight.toFixed(2)} g
        </p>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-[7px]">
            <p className={label}>Gold Purity</p>
            <div className="flex gap-2">
              {purities
                .filter((p) => product.prices[p])
                .map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPurity(p)}
                    aria-pressed={purity === p}
                    className={`cursor-pointer rounded-full border px-[13px] py-2 text-[11.5px] leading-[13.8px] font-bold tracking-[0.69px] transition-colors ${
                      purity === p ? "border-purple bg-blush-light text-purple-deep" : "border-purple-20 bg-white text-black hover:border-purple-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-[7px]">
            <p className={label}>Metal Colour</p>
            <div className="flex gap-2">
              {product.colours.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColour(c)}
                  aria-label={colourLabel[c]}
                  aria-pressed={colour === c}
                  className={`size-[26px] cursor-pointer rounded-full border-[0.5px] border-black/10 ${
                    colour === c && product.colours.length > 1 ? "ring-1 ring-purple ring-offset-2" : ""
                  }`}
                  style={{ backgroundImage: swatchGradient[c] }}
                />
              ))}
            </div>
          </div>
          {product.sizes && (
            <div className="flex flex-col gap-[7px]">
              <div className="flex items-center justify-between">
                <p className={label}>Ring Size</p>
                <Link href={`/products/${product.slug}#size-guide`} onClick={closeModal} className="font-jost text-[12px] leading-[19.2px] font-semibold tracking-[0.48px] text-purple">
                  Size Guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-[7px]">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSize(s);
                      setSizeError(false);
                    }}
                    aria-pressed={size === s}
                    className={`h-[34px] w-[46px] cursor-pointer rounded-lg border font-jost text-[12.5px] leading-5 text-[#2c1e33] transition-colors ${
                      size === s ? "border-purple bg-blush-light" : "border-purple-20 bg-white hover:border-purple-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {sizeError && <p className="text-[12px] text-[#b42318]">Please choose a ring size.</p>}
            </div>
          )}
        </div>

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={add}
            disabled={!product.inStock}
            className="h-[46px] w-full cursor-pointer rounded-full border border-purple-deep bg-purple-deep font-jost text-[12.5px] leading-[15px] font-semibold tracking-[2px] text-white transition-colors hover:bg-purple disabled:cursor-not-allowed disabled:opacity-50"
          >
            {product.inStock ? "Add to Bag" : "Out of stock"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default function QuickViewModal() {
  const { closeModal, quickView } = useShop();
  if (!quickView) return null;
  return (
    <Dialog label={`Quick view: ${quickView.name}`} onClose={closeModal} className="w-[1107px] max-w-full rounded-3xl bg-white p-5 pt-14 md:pt-5">
      {/* Sits in its own strip above the image on mobile (and stays in view while the sheet scrolls), and in the panel corner on larger screens. */}
      <div className="sticky top-1 z-10 -mt-12 mb-3 flex justify-end md:absolute md:top-5 md:right-5 md:m-0">
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="flex size-9 cursor-pointer items-center justify-center rounded-[50px] border border-black/20 bg-white p-[5px] shadow-sm transition-transform hover:scale-105"
        >
          <Icon src="/icons/modal/close-24.svg" size={24} />
        </button>
      </div>
      <QuickView key={quickView.slug} product={quickView} />
    </Dialog>
  );
}
