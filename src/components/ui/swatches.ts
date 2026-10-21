import type { MetalColour } from "@/data/catalog";

/** Metal swatch fills from the design (Quick View / PDP "Metal Colour"). */
export const swatchGradient: Record<MetalColour, string> = {
  yellow: "linear-gradient(145deg, #d1b574 22%, rgba(245,236,214,0.44) 42%, #d1b574 77%)",
  rose: "linear-gradient(145deg, #b37a73 22%, rgba(245,236,214,0.44) 42%, #c5766c 77%)",
  white: "linear-gradient(145deg, #cfcfcf 22%, rgba(245,236,214,0.44) 42%, #cfcfcf 77%)",
};
