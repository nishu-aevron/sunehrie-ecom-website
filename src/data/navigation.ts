export type MegaMenu = "gold" | "diamond" | "more" | "gifting";

export interface NavItem {
  label: string;
  href: string;
  /** Base name of the icon pair in /icons/nav (`<icon>.svg` + `<icon>-active.svg`). */
  icon: string;
  /** Rendered size of the icon from the design. */
  iconWidth: number;
  menu?: MegaMenu;
}

export const navItems: NavItem[] = [
  { label: "Gold", href: "/collections?metal=gold", icon: "nav-gold", iconWidth: 20, menu: "gold" },
  { label: "Diamond", href: "/collections?type=diamond", icon: "nav-diamond", iconWidth: 20, menu: "diamond" },
  { label: "Rings", href: "/collections?category=Rings", icon: "nav-rings", iconWidth: 24.37 },
  { label: "Earrings", href: "/collections?category=Earrings", icon: "nav-earrings", iconWidth: 19.34 },
  { label: "Bracelets & Bangles", href: "/collections?category=Bracelets", icon: "nav-bracelets", iconWidth: 22.49 },
  { label: "More Jewellery", href: "/collections", icon: "nav-more", iconWidth: 20.59, menu: "more" },
  { label: "Gifting", href: "/collections?occasion=gifting", icon: "nav-gifting", iconWidth: 19.19, menu: "gifting" },
  { label: "Offers", href: "/collections?sort=offers", icon: "nav-offers", iconWidth: 20.76 },
];

/** Thumbnail crops reproduce the design's per-image offset inside the 50px circle. */
export interface Thumb {
  label: string;
  href: string;
  image: string;
  crop?: { size: number; left: number; top: number };
}

export const goldCategories: Thumb[] = [
  { label: "9KT Gold", href: "/collections?purity=9KT", image: "/img/mega/9kt-gold.jpg", crop: { size: 51, left: 0, top: 0 } },
  { label: "14KT Gold", href: "/collections?purity=14KT", image: "/img/mega/14kt-gold.png", crop: { size: 55, left: -2, top: -2 } },
  { label: "18KT Gold", href: "/collections?purity=18KT", image: "/img/mega/18kt-gold.png", crop: { size: 55, left: -2, top: -2 } },
  { label: "All Gold Jewelry", href: "/collections?metal=gold", image: "/img/mega/all-gold.png", crop: { size: 59, left: -5, top: -4 } },
];

export const goldColours = [
  { label: "Gold", href: "/collections?colour=yellow", swatch: "linear-gradient(145.3deg, rgb(209,181,116) 32.6%, rgba(245,236,214,0.437) 47.3%, rgb(209,181,116) 71.9%)" },
  { label: "Rose Gold", href: "/collections?colour=rose", swatch: "linear-gradient(145.3deg, rgb(179,122,115) 32.6%, rgba(245,236,214,0.437) 47.3%, rgb(197,118,108) 71.9%)" },
  { label: "White Gold", href: "/collections?colour=white", swatch: "linear-gradient(145.3deg, rgb(207,207,207) 32.6%, rgba(245,236,214,0.437) 47.3%, rgb(207,207,207) 71.9%)" },
];

export const goldOccasions = ["Bridal", "Gifts for Her", "Vacation Vibe", "Daily Wear", "Party Wear"].map((label) => ({
  label,
  href: `/collections?occasion=${encodeURIComponent(label.toLowerCase())}`,
}));

export const diamondLinks = [
  { label: "Diamond Rings", href: "/collections?type=diamond&category=Rings" },
  { label: "Diamond Earrings", href: "/collections?type=diamond&category=Earrings" },
  { label: "Diamond Necklaces", href: "/collections?type=diamond&category=Necklaces" },
  { label: "IGI Certified Natural", href: "/collections?type=diamond" },
];

export const allJewellery: Thumb[] = [
  { label: "Mangalsutra", href: "/collections?category=Mangalsutra", image: "/img/mega/9kt-gold.jpg", crop: { size: 51, left: 0, top: 0 } },
  { label: "Pendants", href: "/collections?category=Pendants", image: "/img/mega/14kt-gold.png", crop: { size: 55, left: -2, top: -2 } },
  { label: "Nose Pins", href: "/collections", image: "/img/mega/18kt-gold.png", crop: { size: 55, left: -2, top: -2 } },
  { label: "Chain", href: "/collections?category=Necklaces", image: "/img/mega/all-gold.png", crop: { size: 59, left: -5, top: -4 } },
  { label: "Lucky", href: "/collections", image: "/img/mega/lucky.png", crop: { size: 59, left: -5, top: -4 } },
  { label: "Mangalsutra Pendant", href: "/collections?category=Mangalsutra", image: "/img/mega/mangalsutra-pendant.png", crop: { size: 59, left: -5, top: -4 } },
  { label: "Necklace", href: "/collections?category=Necklaces", image: "/img/mega/necklace.png", crop: { size: 132, left: -61, top: -34 } },
  { label: "Necklace set", href: "/collections?category=Necklaces", image: "/img/mega/necklace-set.png", crop: { size: 59, left: -5, top: -4 } },
  { label: "Pendant Earring Set", href: "/collections?category=Pendants", image: "/img/mega/pendant-earring-set.png", crop: { size: 111, left: -31, top: -44 } },
];

export const giftOccasions = [
  { label: "Birthday", note: "Make their day sparkle", image: "/img/home/gender-male.png" },
  { label: "Anniversary", note: "Celebrate years of love", image: "/img/mega/9kt-gold.jpg" },
  { label: "New Born & Baby Shower", note: "Tiny treasures for little ones", image: "/img/home/gender-kids.png" },
  { label: "Festivals", note: "Shine through every festival", image: "/img/home/gender-female.png" },
  { label: "Moments & Milestones", note: "Mark every first and forever", image: "/img/home/occasion-wedding.png" },
].map((o) => ({ ...o, href: `/collections?occasion=${encodeURIComponent(o.label.toLowerCase())}` }));
