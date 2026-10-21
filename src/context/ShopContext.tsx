"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { getProduct, priceOf, mrpOf, type MetalColour, type Product, type Purity } from "@/data/catalog";

export interface CartLine {
  key: string;
  product: Product;
  purity: Purity;
  colour: MetalColour;
  size?: number;
  quantity: number;
}

/** Only one overlay is open at a time. */
export type ModalName = "search" | "pincode" | "store" | "login" | "contact" | "compare" | "quickview" | "cart" | "wishlist";

export const MAX_COMPARE = 4;

interface ShopContextType {
  modal: ModalName | null;
  openModal: (name: ModalName) => void;
  closeModal: () => void;

  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (slug: string) => boolean;

  cart: CartLine[];
  addToCart: (product: Product, opts?: { purity?: Purity; colour?: MetalColour; size?: number; quantity?: number }) => void;
  updateQuantity: (key: string, delta: number) => void;
  removeFromCart: (key: string) => void;
  cartCount: number;
  cartSubtotal: number;
  /** MRP − selling price across the bag. */
  cartSavings: number;

  compare: Product[];
  toggleCompare: (product: Product) => void;
  isInCompare: (slug: string) => boolean;
  openCompare: (seed?: Product) => void;

  quickView: Product | null;
  openQuickView: (product: Product) => void;

  recentlyViewed: Product[];
  markViewed: (product: Product) => void;

  pincode: string | null;
  setPincode: (pin: string) => void;

  searchQuery: string;
  setSearchQuery: (q: string) => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const lineKey = (slug: string, purity: Purity, colour: MetalColour, size?: number) =>
  [slug, purity, colour, size ?? ""].join("|");

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalName | null>(null);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  // The design's checkout shows a Classic Gold Ring (14KT, size 11) already in the bag.
  const [cart, setCart] = useState<CartLine[]>(() => {
    const ring = getProduct("classic-gold-ring")!;
    return [{ key: lineKey(ring.slug, "14KT", "yellow", 11), product: ring, purity: "14KT", colour: "yellow", size: 11, quantity: 1 }];
  });
  const [compare, setCompare] = useState<Product[]>([]);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [pincode, setPincode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(null), 2800);
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  const toggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((prev) => {
        const exists = prev.some((p) => p.slug === product.slug);
        showToast(exists ? "Removed from wishlist" : "Saved to wishlist");
        return exists ? prev.filter((p) => p.slug !== product.slug) : [...prev, product];
      });
    },
    [showToast],
  );

  const addToCart: ShopContextType["addToCart"] = useCallback(
    (product, opts = {}) => {
      const purity = opts.purity ?? product.defaultPurity;
      const colour = opts.colour ?? product.defaultColour;
      const key = lineKey(product.slug, purity, colour, opts.size);
      const qty = opts.quantity ?? 1;
      setCart((prev) => {
        const hit = prev.find((l) => l.key === key);
        if (hit) return prev.map((l) => (l.key === key ? { ...l, quantity: l.quantity + qty } : l));
        return [...prev, { key, product, purity, colour, size: opts.size, quantity: qty }];
      });
      showToast("Added to your bag");
    },
    [showToast],
  );

  const updateQuantity = useCallback((key: string, delta: number) => {
    setCart((prev) =>
      prev.flatMap((l) => {
        if (l.key !== key) return [l];
        const quantity = l.quantity + delta;
        return quantity > 0 ? [{ ...l, quantity }] : [];
      }),
    );
  }, []);

  const removeFromCart = useCallback((key: string) => setCart((prev) => prev.filter((l) => l.key !== key)), []);

  const toggleCompare = useCallback(
    (product: Product) => {
      setCompare((prev) => {
        if (prev.some((p) => p.slug === product.slug)) return prev.filter((p) => p.slug !== product.slug);
        if (prev.length >= MAX_COMPARE) {
          showToast(`You can compare up to ${MAX_COMPARE} pieces`);
          return prev;
        }
        return [...prev, product];
      });
    },
    [showToast],
  );

  const openCompare = useCallback((seed?: Product) => {
    if (seed) setCompare((prev) => (prev.some((p) => p.slug === seed.slug) || prev.length >= MAX_COMPARE ? prev : [...prev, seed]));
    setModal("compare");
  }, []);

  const openQuickView = useCallback((product: Product) => {
    setQuickView(product);
    setModal("quickview");
  }, []);

  const markViewed = useCallback((product: Product) => {
    setRecentlyViewed((prev) => [product, ...prev.filter((p) => p.slug !== product.slug)].slice(0, 12));
  }, []);

  const value = useMemo<ShopContextType>(() => {
    const cartCount = cart.reduce((n, l) => n + l.quantity, 0);
    const cartSubtotal = cart.reduce((n, l) => n + priceOf(l.product, l.purity) * l.quantity, 0);
    const cartSavings = cart.reduce((n, l) => n + (mrpOf(l.product, l.purity) - priceOf(l.product, l.purity)) * l.quantity, 0);
    return {
      modal,
      openModal: setModal,
      closeModal,
      wishlist,
      toggleWishlist,
      isInWishlist: (slug) => wishlist.some((p) => p.slug === slug),
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      cartSubtotal,
      cartSavings,
      compare,
      toggleCompare,
      isInCompare: (slug) => compare.some((p) => p.slug === slug),
      openCompare,
      quickView,
      openQuickView,
      recentlyViewed,
      markViewed,
      pincode,
      setPincode,
      searchQuery,
      setSearchQuery,
      toastMessage,
      showToast,
    };
  }, [modal, closeModal, wishlist, toggleWishlist, cart, addToCart, updateQuantity, removeFromCart, compare, toggleCompare, openCompare, quickView, openQuickView, recentlyViewed, markViewed, pincode, searchQuery, toastMessage, showToast]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within a ShopProvider");
  return ctx;
}
