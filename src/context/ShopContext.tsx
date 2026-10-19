"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  originalPrice?: string;
  discount?: string;
  image: string;
  purity: string;
  specs: string;
  tag?: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
  metalColor: "yellow" | "rose" | "white";
}

interface ShopContextType {
  // Wishlist
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
  wishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, color?: "yellow" | "rose" | "white") => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Pincode
  pincode: string;
  setPincode: (pin: string) => void;
  isPincodeModalOpen: boolean;
  setIsPincodeModalOpen: (open: boolean) => void;

  // Search
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Account
  isAccountModalOpen: boolean;
  setIsAccountModalOpen: (open: boolean) => void;

  // Stores
  isStoreModalOpen: boolean;
  setIsStoreModalOpen: (open: boolean) => void;

  // Toast notification
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "p1",
    name: "Diamond Gold Mangalsutra Pendant",
    price: "₹1,44,538",
    priceNumber: 144538,
    originalPrice: "₹1,80,538",
    discount: "13% off",
    image: "/images/products/product-1.png",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
    category: "Mangalsutra",
  },
  {
    id: "p2",
    name: "Diamond Gold Mangalsutra Pendant",
    price: "₹1,93,100",
    priceNumber: 193100,
    originalPrice: "₹2,20,538",
    discount: "13% off",
    image: "/images/products/product-2.png",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
    category: "Mangalsutra",
  },
  {
    id: "p3",
    name: "Classic Diamond Gold Pendant",
    price: "₹1,44,538",
    priceNumber: 144538,
    originalPrice: "₹1,80,538",
    discount: "13% off",
    image: "/images/products/product-3.png",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
    category: "Pendant",
  },
  {
    id: "p4",
    name: "Classic Diamond Gold Ring",
    price: "₹1,25,120",
    priceNumber: 125120,
    originalPrice: "₹1,80,538",
    discount: "13% off",
    image: "/images/products/product-4.png",
    purity: "18KT Gold",
    specs: "0.50 ct Natural Diamond",
    tag: "BESTSELLER",
    category: "Rings",
  },
  {
    id: "p5",
    name: "14KT Solitaire Diamond Ring",
    price: "₹48,500",
    priceNumber: 48500,
    originalPrice: "₹56,000",
    discount: "15% off",
    image: "/images/products/product-4.png",
    purity: "14KT Gold",
    specs: "0.30 ct Natural Diamond",
    tag: "FEATURED",
    category: "Rings",
  },
  {
    id: "p6",
    name: "18KT Diamond Hoop Earrings",
    price: "₹65,200",
    priceNumber: 65200,
    originalPrice: "₹75,000",
    discount: "12% off",
    image: "/images/products/product-3.png",
    purity: "18KT Gold",
    specs: "0.45 ct Natural Diamond",
    tag: "POPULAR",
    category: "Earrings",
  },
];

export { defaultProducts };

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [pincode, setPincode] = useState("Pincode");
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id || p.name === product.name);
      if (exists) {
        showToast(`Removed "${product.name.slice(0, 24)}..." from Wishlist`);
        return prev.filter((p) => p.id !== product.id && p.name !== product.name);
      } else {
        showToast(`Added to Wishlist! ❤️`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((p) => p.id === id || p.name === id);
  };

  const addToCart = (product: Product, color: "yellow" | "rose" | "white" = "yellow") => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => (item.id === product.id || item.name === product.name) && item.metalColor === color);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...prev, { ...product, quantity: 1, metalColor: color }];
    });
    showToast(`Added to Shopping Bag! 🛍️`);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id && item.name !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id || item.name === id) {
            const next = item.quantity + delta;
            return next > 0 ? { ...item, quantity: next } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.priceNumber * item.quantity, 0);
  // 25% Off Making Charges discount simulated (approx 5% of jewellery value)
  const cartDiscount = Math.round(cartSubtotal * 0.05);
  // 3% GST on Gold Jewellery in India
  const cartTax = Math.round((cartSubtotal - cartDiscount) * 0.03);
  const cartTotal = cartSubtotal - cartDiscount + cartTax;

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
        isWishlistOpen,
        setIsWishlistOpen,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        pincode,
        setPincode,
        isPincodeModalOpen,
        setIsPincodeModalOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isAccountModalOpen,
        setIsAccountModalOpen,
        isStoreModalOpen,
        setIsStoreModalOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
