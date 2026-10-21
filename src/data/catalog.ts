export type Purity = "9KT" | "14KT" | "18KT";
export type MetalColour = "yellow" | "rose" | "white";

export interface Product {
  slug: string;
  name: string;
  sku: string;
  category: "Rings" | "Earrings" | "Pendants" | "Mangalsutra" | "Necklaces" | "Bracelets";
  image: string;
  /** Alternate shot revealed on card hover (design "Variant2"). */
  hoverImage?: string;
  gallery: string[];
  /** Price for each purity this piece is made in. The first entry is the default. */
  prices: Partial<Record<Purity, number>>;
  /** Pre-discount price, keyed the same way. */
  mrp: Partial<Record<Purity, number>>;
  defaultPurity: Purity;
  colours: MetalColour[];
  defaultColour: MetalColour;
  diamondCt: number;
  netWeight: number;
  grossWeight: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  sizes?: number[];
  occasion: string;
}

const RING_SIZES = [10, 11, 12, 13, 14, 15];

function product(p: Omit<Product, "gallery" | "colours" | "defaultColour" | "inStock" | "occasion"> &
  Partial<Pick<Product, "hoverImage" | "gallery" | "colours" | "defaultColour" | "inStock" | "occasion">>): Product {
  return {
    gallery: p.hoverImage ? [p.image, p.hoverImage] : [p.image],
    colours: ["yellow", "rose", "white"],
    defaultColour: "yellow",
    inStock: true,
    occasion: "Daily, Office",
    ...p,
  };
}

export const catalog: Product[] = [
  product({
    slug: "classic-gold-ring",
    name: "Classic Gold Ring",
    sku: "SUN-RNG-MG2",
    category: "Rings",
    image: "/img/products/classic-gold-ring.png",
    gallery: [
      "/img/products/classic-gold-ring.png",
      "/img/products/classic-gold-ring-2.jpg",
      "/img/products/classic-gold-ring-3.jpg",
      "/img/products/classic-gold-ring-4.jpg",
      "/img/products/classic-gold-ring-5.jpg",
    ],
    hoverImage: "/img/products/classic-gold-ring-2.jpg",
    prices: { "9KT": 11410, "14KT": 14350, "18KT": 18400 },
    mrp: { "9KT": 13150, "14KT": 16534, "18KT": 21200 },
    defaultPurity: "14KT",
    colours: ["yellow"],
    diamondCt: 0.5,
    netWeight: 2.95,
    grossWeight: 3.1,
    rating: 4.9,
    reviews: 48,
    sizes: RING_SIZES,
  }),
  product({
    slug: "diamond-gold-mangalsutra-pendant",
    name: "Diamond Gold Mangalsutra Pendant",
    sku: "SUN-MNG-FL1",
    category: "Mangalsutra",
    image: "/img/products/mangalsutra-floral.png",
    hoverImage: "/img/products/mangalsutra-floral-alt.jpg",
    prices: { "18KT": 144538, "14KT": 121900 },
    mrp: { "18KT": 180538, "14KT": 152400 },
    defaultPurity: "18KT",
    diamondCt: 0.5,
    netWeight: 5.4,
    grossWeight: 5.7,
    rating: 4.8,
    reviews: 36,
    occasion: "Bridal, Daily",
  }),
  product({
    slug: "emerald-cut-mangalsutra-pendant",
    name: "Diamond Gold Mangalsutra Pendant",
    sku: "SUN-MNG-EC2",
    category: "Mangalsutra",
    image: "/img/products/mangalsutra-emerald-cut.png",
    prices: { "18KT": 193100 },
    mrp: { "18KT": 220538 },
    defaultPurity: "18KT",
    diamondCt: 0.5,
    netWeight: 6.1,
    grossWeight: 6.4,
    rating: 4.9,
    reviews: 22,
    occasion: "Bridal",
  }),
  product({
    slug: "classic-diamond-gold-pendant",
    name: "Classic Diamond Gold Pendant",
    sku: "SUN-PND-RW5",
    category: "Pendants",
    image: "/img/products/rose-pendant-row.png",
    prices: { "18KT": 144538 },
    mrp: { "18KT": 180538 },
    defaultPurity: "18KT",
    defaultColour: "rose",
    diamondCt: 0.5,
    netWeight: 4.8,
    grossWeight: 5.0,
    rating: 4.7,
    reviews: 18,
  }),
  product({
    slug: "classic-diamond-gold-ring",
    name: "Classic Diamond Gold Ring",
    sku: "SUN-RNG-MG3",
    category: "Rings",
    image: "/img/products/classic-gold-ring.png",
    prices: { "18KT": 125120, "14KT": 104300 },
    mrp: { "18KT": 180538, "14KT": 120000 },
    defaultPurity: "18KT",
    diamondCt: 0.5,
    netWeight: 3.4,
    grossWeight: 3.6,
    rating: 4.9,
    reviews: 41,
    sizes: RING_SIZES,
  }),
  product({
    slug: "ruby-drop-earrings",
    name: "Ruby Drop Diamond Earrings",
    sku: "SUN-EAR-RB2",
    category: "Earrings",
    image: "/img/products/ruby-drop-earrings.png",
    prices: { "18KT": 86400, "14KT": 72100 },
    mrp: { "18KT": 99300, "14KT": 82900 },
    defaultPurity: "18KT",
    diamondCt: 0.3,
    netWeight: 3.2,
    grossWeight: 3.5,
    rating: 4.8,
    reviews: 27,
    occasion: "Party",
  }),
  product({
    slug: "swirl-pendant-earring-set",
    name: "Swirl Pendant Earring Set",
    sku: "SUN-SET-SW1",
    category: "Pendants",
    image: "/img/products/swirl-pendant-set.png",
    prices: { "14KT": 92800, "18KT": 110400 },
    mrp: { "14KT": 106700, "18KT": 126900 },
    defaultPurity: "14KT",
    diamondCt: 0.42,
    netWeight: 4.6,
    grossWeight: 4.9,
    rating: 4.7,
    reviews: 15,
  }),
  product({
    slug: "solitaire-heart-diamond-pendant",
    name: "Solitaire Heart Diamond Pendant",
    sku: "SUN-PND-HT3",
    category: "Pendants",
    image: "/img/products/heart-pendant.png",
    prices: { "14KT": 64200, "18KT": 76800 },
    mrp: { "14KT": 73800, "18KT": 88300 },
    defaultPurity: "14KT",
    defaultColour: "white",
    diamondCt: 0.25,
    netWeight: 1.9,
    grossWeight: 2.1,
    rating: 4.9,
    reviews: 33,
    occasion: "Gifting, Daily",
  }),
  product({
    slug: "ruby-pendant-necklace",
    name: "Ruby Pendant Diamond Necklace",
    sku: "SUN-NCK-RB4",
    category: "Necklaces",
    image: "/img/products/ruby-necklace.png",
    prices: { "18KT": 158900 },
    mrp: { "18KT": 182700 },
    defaultPurity: "18KT",
    defaultColour: "rose",
    diamondCt: 0.6,
    netWeight: 7.8,
    grossWeight: 8.2,
    rating: 4.8,
    reviews: 12,
    occasion: "Party, Bridal",
  }),
  product({
    slug: "pearl-charm-bracelet",
    name: "Pearl Charm Gold Bracelet",
    sku: "SUN-BRC-PL1",
    category: "Bracelets",
    image: "/img/products/pearl-bracelet.png",
    prices: { "9KT": 28600, "14KT": 39400 },
    mrp: { "9KT": 32900, "14KT": 45300 },
    defaultPurity: "9KT",
    diamondCt: 0.08,
    netWeight: 3.0,
    grossWeight: 3.4,
    rating: 4.6,
    reviews: 9,
  }),
  product({
    slug: "rose-gold-twist-diamond-ring",
    name: "Rose Gold Twist Diamond Ring",
    sku: "SUN-RNG-RG7",
    category: "Rings",
    image: "/img/products/rose-twist-ring.png",
    prices: { "14KT": 78900, "18KT": 94200 },
    mrp: { "14KT": 90700, "18KT": 108300 },
    defaultPurity: "14KT",
    defaultColour: "rose",
    diamondCt: 0.18,
    netWeight: 2.6,
    grossWeight: 2.8,
    rating: 4.8,
    reviews: 21,
    sizes: RING_SIZES,
  }),
  product({
    slug: "gold-pave-diamond-ring",
    name: "Gold Pavé Diamond Ring",
    sku: "SUN-RNG-PV1",
    category: "Rings",
    image: "/img/products/gold-pave-ring.png",
    prices: { "18KT": 98400, "14KT": 82300 },
    mrp: { "18KT": 113100, "14KT": 94600 },
    defaultPurity: "18KT",
    diamondCt: 0.35,
    netWeight: 3.9,
    grossWeight: 4.1,
    rating: 4.7,
    reviews: 19,
    sizes: RING_SIZES,
  }),
  product({
    slug: "sapphire-halo-diamond-ring",
    name: "Sapphire Halo Diamond Ring",
    sku: "SUN-RNG-SH4",
    category: "Rings",
    image: "/img/products/sapphire-halo-ring.png",
    prices: { "18KT": 148500 },
    mrp: { "18KT": 170800 },
    defaultPurity: "18KT",
    defaultColour: "white",
    diamondCt: 0.62,
    netWeight: 3.3,
    grossWeight: 3.6,
    rating: 4.9,
    reviews: 26,
    sizes: RING_SIZES,
    occasion: "Engagement, Party",
  }),
  product({
    slug: "gold-floral-drop-earrings",
    name: "Gold Floral Drop Earrings",
    sku: "SUN-EAR-FD3",
    category: "Earrings",
    image: "/img/products/gold-drop-earrings.png",
    prices: { "14KT": 56300, "18KT": 67400 },
    mrp: { "14KT": 64700, "18KT": 77500 },
    defaultPurity: "14KT",
    diamondCt: 0.22,
    netWeight: 3.7,
    grossWeight: 4.0,
    rating: 4.6,
    reviews: 11,
    inStock: false,
    occasion: "Festive",
  }),
];

export function getProduct(slug: string) {
  return catalog.find((p) => p.slug === slug);
}

export const purities: Purity[] = ["9KT", "14KT", "18KT"];

export const colourLabel: Record<MetalColour, string> = {
  yellow: "Yellow Gold",
  rose: "Rose Gold",
  white: "White Gold",
};

export function priceOf(p: Product, purity: Purity = p.defaultPurity) {
  return p.prices[purity] ?? p.prices[p.defaultPurity]!;
}

export function mrpOf(p: Product, purity: Purity = p.defaultPurity) {
  return p.mrp[purity] ?? p.mrp[p.defaultPurity]!;
}

export function discountPct(p: Product, purity: Purity = p.defaultPurity) {
  return Math.round((1 - priceOf(p, purity) / mrpOf(p, purity)) * 100);
}

/** ₹1,44,538 — Indian digit grouping, no decimals. */
export function inr(n: number) {
  return "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}
