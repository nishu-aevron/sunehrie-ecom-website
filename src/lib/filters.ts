import { catalog, priceOf, type MetalColour, type Product, type Purity } from "@/data/catalog";

export const PAGE_SIZE = 12;
export const PRICE_MAX = 200000;

export const sortOptions = [
  { id: "best-selling", label: "Best selling" },
  { id: "price-asc", label: "Price, low to high" },
  { id: "price-desc", label: "Price, high to low" },
  { id: "rating", label: "Top rated" },
  { id: "new", label: "Newest" },
] as const;
export type SortId = (typeof sortOptions)[number]["id"];

export interface Filters {
  availability: ("in" | "out")[];
  purity: Purity[];
  colour: MetalColour[];
  size: number[];
  min: number;
  max: number;
  category?: string;
  sort: SortId;
  page: number;
}

const list = (v: string | null) => (v ? v.split(",").filter(Boolean) : []);

export function parseFilters(params: URLSearchParams): Filters {
  const sort = params.get("sort");
  return {
    availability: list(params.get("availability")) as Filters["availability"],
    purity: list(params.get("purity")).map((p) => p.toUpperCase()) as Purity[],
    colour: list(params.get("colour")) as MetalColour[],
    size: list(params.get("size")).map(Number),
    min: Number(params.get("min") ?? 0),
    max: Number(params.get("max") ?? PRICE_MAX),
    category: params.get("category") ?? undefined,
    sort: (sortOptions.some((o) => o.id === sort) ? sort : "best-selling") as SortId,
    page: Math.max(1, Number(params.get("page") ?? 1)),
  };
}

/** Matches every filter except the one named in `skip` (used for facet counts). */
export function matches(p: Product, f: Filters, skip?: keyof Filters) {
  if (skip !== "category" && f.category && p.category !== f.category) return false;
  if (skip !== "availability" && f.availability.length && !f.availability.includes(p.inStock ? "in" : "out")) return false;
  if (skip !== "purity" && f.purity.length && !f.purity.some((k) => p.prices[k] !== undefined)) return false;
  if (skip !== "colour" && f.colour.length && !f.colour.some((c) => p.colours.includes(c))) return false;
  if (skip !== "size" && f.size.length && !f.size.some((s) => p.sizes?.includes(s))) return false;
  const price = priceOf(p);
  if (price < f.min || price > f.max) return false;
  return true;
}

export function apply(f: Filters) {
  const rows = catalog.filter((p) => matches(p, f));
  const sorted = [...rows];
  switch (f.sort) {
    case "price-asc":
      sorted.sort((a, b) => priceOf(a) - priceOf(b));
      break;
    case "price-desc":
      sorted.sort((a, b) => priceOf(b) - priceOf(a));
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "new":
      sorted.reverse();
      break;
    default:
      sorted.sort((a, b) => b.reviews - a.reviews);
  }
  return sorted;
}
