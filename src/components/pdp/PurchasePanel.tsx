"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { swatchGradient } from "@/components/ui/swatches";
import { useShop } from "@/context/ShopContext";
import { colourLabel, inr, mrpOf, priceOf, purities, type MetalColour, type Product, type Purity } from "@/data/catalog";

const purityNote: Record<Purity, string> = { "9KT": "Everyday gold", "14KT": "Modern classic", "18KT": "Heirloom gold" };
const section = "flex flex-col gap-[15px] border-t border-purple-20 pt-[15px]";
const label = "text-[12px] leading-3 font-extrabold text-purple-deep";
const hint = "text-[12px] leading-3 text-ink-70";
const spaced = (n: number) => inr(n).replace("₹", "₹ ");

function deliveryWindow() {
  const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "long" });
  const from = new Date();
  from.setDate(from.getDate() + 3);
  const to = new Date(from);
  to.setDate(to.getDate() + 2);
  return `${fmt(from)} – ${fmt(to)}`;
}

export default function PurchasePanel({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isInWishlist, openModal, markViewed, setPincode, pincode, showToast } = useShop();
  const [purity, setPurity] = useState<Purity>(product.defaultPurity);
  const [colour, setColour] = useState<MetalColour>(product.defaultColour);
  const [size, setSize] = useState<number | undefined>();
  const [qty, setQty] = useState(1);
  const [pin, setPin] = useState(pincode ?? "");
  const [delivery, setDelivery] = useState<string | null>(null);
  const [breakup, setBreakup] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const liked = isInWishlist(product.slug);

  useEffect(() => markViewed(product), [product, markViewed]);

  const price = priceOf(product, purity);
  const mrp = mrpOf(product, purity);
  const gst = Math.round((price * 3) / 103);

  function add() {
    if (product.sizes && size === undefined) {
      setSizeError(true);
      document.getElementById("ring-size")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    addToCart(product, { purity, colour, size, quantity: qty });
  }

  async function share() {
    try {
      if (navigator.share) await navigator.share({ title: product.name, url: location.href });
      else {
        await navigator.clipboard.writeText(location.href);
        showToast("Link copied");
      }
    } catch {
      /* dismissed */
    }
  }

  return (
    <div className="flex flex-col gap-[23px]">
      <span className="w-fit rounded-full bg-[#f8f8f8] px-2.5 py-[5px] text-[12px] leading-[18px] font-medium text-[#121212]">{product.name}</span>
      <h1 className="font-seasons text-[28px] leading-none font-bold tracking-[-0.45px] text-black sm:text-[36px] lg:text-[45px]">{product.name}</h1>
      <p className="text-[16px] leading-6 font-medium text-[#121212]">
        SKU {product.sku} · {product.category}
      </p>
      <p className="flex flex-wrap items-center gap-[7px] text-[13px] leading-[20.8px]">
        <span className="font-jost text-[15px] leading-6 tracking-[2px] text-gold" aria-hidden>
          ★★★★★
        </span>
        <span className="font-extrabold text-[#2c1e33]">{product.rating}</span>
        <span className="font-medium text-ink-70">{product.reviews} Reviews</span>
        <span className="font-jost text-[#2c1e33]">·</span>
        <span className="font-semibold text-success-deep">94% would recommend</span>
      </p>

      <div className="flex flex-col gap-[15px]">
        <div>
          <p className="flex flex-wrap items-center gap-3.5">
            <span className="text-[30px] leading-[48px] font-extrabold text-purple-deep">{spaced(price)}</span>
            <span className="text-[16px] leading-[25.6px] font-bold text-ink-70 line-through">{spaced(mrp)}</span>
            <span className="rounded-full bg-[#e9f7ef] px-2.5 py-1 text-[11px] leading-[17.6px] font-bold text-success-deep">Save {spaced(mrp - price)}</span>
          </p>
          <p className="text-[11.5px] leading-[18.4px] font-semibold text-ink-70">Price incl. of all taxes · Live-rate locked at checkout</p>
        </div>
        <button
          type="button"
          onClick={() => setBreakup((b) => !b)}
          aria-expanded={breakup}
          className="flex w-fit cursor-pointer items-center gap-[22px] border-b border-purple pb-[5px] text-[12.5px] leading-[15px] font-bold tracking-[0.75px] text-purple"
        >
          View Full Price Breakup
          <Icon src="/icons/pdp/arrow-right.svg" size={13} className={`transition-transform ${breakup ? "rotate-90" : ""}`} />
        </button>
        {breakup && (
          <dl className="grid max-w-[340px] grid-cols-[1fr_auto] gap-y-1.5 rounded-xl bg-blush-light p-4 text-[12.5px] text-ink-90">
            <dt>{purity} gold, diamonds &amp; making</dt>
            <dd className="text-right font-semibold">{inr(price - gst)}</dd>
            <dt>GST (3%)</dt>
            <dd className="text-right font-semibold">{inr(gst)}</dd>
            <dt className="border-t border-purple-20 pt-1.5 font-bold">Total</dt>
            <dd className="border-t border-purple-20 pt-1.5 text-right font-extrabold">{inr(price)}</dd>
            <dd className="col-span-2 pt-1 text-[11px] text-ink-70">Metal, diamond and making charges are itemised on your invoice.</dd>
          </dl>
        )}
      </div>

      <div className={`${section} gap-2.5 pt-0`}>
        <div className="flex items-center justify-between py-[5px]">
          <span className={label}>Gold Purity</span>
          <span className={hint}>Karat is the primary choice</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {purities.map((p) => {
            const available = product.prices[p] !== undefined;
            const on = p === purity;
            return (
              <button
                key={p}
                type="button"
                disabled={!available}
                onClick={() => setPurity(p)}
                aria-pressed={on}
                className={`flex min-w-[152px] cursor-pointer flex-col items-center gap-[3px] rounded-[14px] border px-4 py-[11px] transition-colors disabled:cursor-not-allowed disabled:opacity-45 ${
                  on ? "border-purple bg-ink-90" : "border-purple-20 bg-white hover:border-purple-50"
                }`}
              >
                <span className={`text-[13px] leading-[15.6px] font-extrabold tracking-[0.52px] ${on ? "text-gold-light" : "text-[#2c1e33]"}`}>{p}</span>
                <span className={`text-[10px] leading-3 font-medium tracking-[0.2px] ${on ? "text-[#cbb4d4]" : "text-ink-70"}`}>
                  {purityNote[p]} · {available ? spaced(product.prices[p]!) : "Not available"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={section}>
        <div className="flex items-center justify-between pt-px">
          <span className={label}>Diamond Origin</span>
          <span className={hint}>100% natural by default</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <div className="flex w-[176px] flex-col gap-[7px] rounded-[14px] border border-purple bg-blush-light p-3">
            <span className="text-[13px] leading-[15.6px] font-extrabold text-purple-deep">100% Natural Diamond</span>
            <span className="text-[10.5px] leading-[12.6px] font-medium text-ink-70">IGI certified · default</span>
            <span className="flex items-center text-[10px] leading-3 font-extrabold tracking-[0.6px] text-success-deep">
              <Icon src="/icons/pdp/check-green.svg" size={15} />
              IGI CERTIFIED
            </span>
          </div>
          <div className="flex w-[170px] flex-col gap-[5px] rounded-[14px] border border-purple-20 bg-white px-[19px] py-[23px] opacity-45" aria-disabled>
            <span className="text-[13px] leading-[15.6px] font-extrabold text-purple-deep">Lab-Grown Diamond</span>
            <span className="text-[10.5px] leading-[12.6px] font-medium text-ink-70">Not available for this piece</span>
          </div>
        </div>
      </div>

      <div className={section}>
        <div className="flex items-center justify-between pt-px">
          <span className={label}>Metal Colour</span>
          <span className={hint}>{colourLabel[colour]}</span>
        </div>
        <div className="flex gap-2.5">
          {product.colours.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColour(c)}
              aria-label={colourLabel[c]}
              aria-pressed={colour === c}
              className={`size-[30px] cursor-pointer rounded-full border-[0.5px] border-black/10 ${colour === c && product.colours.length > 1 ? "ring-1 ring-purple ring-offset-2" : ""}`}
              style={{ backgroundImage: swatchGradient[c] }}
            />
          ))}
        </div>
      </div>

      {product.sizes && (
        <div id="ring-size" className={section}>
          <div className="flex items-center justify-between pt-px">
            <span className={label}>Ring Size (India)</span>
            <a href="#size-guide" className="text-[12.5px] leading-[15px] font-bold tracking-[0.75px] text-purple hover:underline">
              View Size Guide
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setSizeError(false);
                }}
                aria-pressed={size === s}
                className={`h-11 min-w-[55px] cursor-pointer rounded-full border px-5 text-[14px] leading-[21.6px] font-bold transition-colors ${
                  size === s ? "border-purple bg-blush-light text-ink" : "border-purple-20 bg-white text-[#2c1e33] hover:border-purple-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {sizeError && <p className="text-[12px] font-semibold text-[#b42318]">Please choose your ring size.</p>}
        </div>
      )}

      <div className={section}>
        <span className={`${label} pt-1`}>Check Delivery</span>
        <form
          className="flex flex-wrap items-center gap-3.5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!/^[1-9]\d{5}$/.test(pin)) {
              setDelivery("Enter a valid 6-digit pincode.");
              return;
            }
            setPincode(pin);
            setDelivery(`Insured delivery to ${pin} by ${deliveryWindow()}.`);
          }}
        >
          <input
            inputMode="numeric"
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter pincode"
            aria-label="Pincode"
            className="h-11 w-[197px] rounded-full border border-purple-20 bg-white px-[11px] text-[12px] font-semibold text-ink outline-none placeholder:text-[#9ca3af] focus:border-purple"
          />
          <button type="submit" className="h-11 cursor-pointer rounded-full border border-purple bg-blush-light px-5 text-[12px] font-semibold text-purple-deep transition-colors hover:bg-purple-10">
            Check
          </button>
          {delivery && <p className="w-full text-[12px] font-semibold text-success-deep">{delivery}</p>}
        </form>
      </div>

      <div className="flex items-center gap-3 py-[15px] max-sm:flex-col sm:gap-[15px]">
        <div className="flex h-[50px] w-full shrink-0 items-center justify-between rounded-full border border-purple-20 bg-white px-[11px] sm:h-[57px] sm:w-36" role="group" aria-label="Quantity">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="cursor-pointer">
            <Icon src="/icons/pdp/minus.svg" size={25} />
          </button>
          <span className="text-[25px] leading-6 font-extrabold text-purple" aria-live="polite">
            {qty}
          </span>
          <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="cursor-pointer">
            <Icon src="/icons/pdp/plus.svg" size={25} />
          </button>
        </div>
        <button
          type="button"
          onClick={add}
          disabled={!product.inStock}
          className="h-[50px] w-full cursor-pointer rounded-full border border-purple-50 bg-purple text-[14px] leading-[21px] font-medium text-blush transition-colors hover:bg-purple-deep disabled:cursor-not-allowed disabled:opacity-50 sm:h-[59px] sm:flex-1"
        >
          {product.inStock ? "Add to cart" : "Out of stock"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 text-[14px] leading-[14px] font-medium tracking-[-0.24px] text-purple sm:flex sm:flex-wrap sm:gap-x-[29px]">
        <button type="button" onClick={share} className="flex cursor-pointer items-center gap-[7px] hover:underline">
          <Icon src="/icons/pdp/share.svg" size={15} />
          Share
        </button>
        <button type="button" onClick={() => toggleWishlist(product)} aria-pressed={liked} className="flex cursor-pointer items-center gap-[7px] hover:underline">
          <Icon src="/icons/pdp/heart.svg" size={15} />
          {liked ? "Saved to Wishlist" : "Save to Wishlist"}
        </button>
        <a
          href={`https://wa.me/919327331963?text=${encodeURIComponent(`Hi Sunehriè, I'd like to know more about ${product.name} (${product.sku}).`)}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[7px] hover:underline"
        >
          <Icon src="/icons/pdp/whatsapp.svg" size={15} />
          WhatsApp Inquiry
        </a>
        <button type="button" onClick={() => openModal("contact")} className="flex cursor-pointer items-center gap-[7px] hover:underline">
          <Icon src="/icons/pdp/video-call.svg" size={15} />
          Book a Video Call
        </button>
      </div>
    </div>
  );
}
