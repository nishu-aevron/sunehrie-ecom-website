import type { Metadata } from "next";
import { Bricolage_Grotesque, Cormorant_Garamond, Inter, Instrument_Sans, Jost, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Overlays from "@/components/overlays/Overlays";

const manrope = Manrope({ variable: "--font-manrope-src", subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const instrument = Instrument_Sans({ variable: "--font-instrument-src", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ variable: "--font-inter-src", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jost = Jost({ variable: "--font-jost-src", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const playfair = Playfair_Display({ variable: "--font-playfair-src", subsets: ["latin"], weight: ["700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant-src", subsets: ["latin"], weight: ["500", "600"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage-src", subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: { default: "Sunehriè — More Than Jewelry", template: "%s · Sunehriè" },
  description:
    "Real 9KT, 14KT and 18KT hallmarked gold with 100% natural, IGI-certified diamonds. Two generations of trust from Godhra & Lunawada.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fonts = [manrope, instrument, inter, jost, playfair, bricolage, cormorant].map((f) => f.variable).join(" ");
  return (
    <html lang="en" className={fonts}>
      <body className="antialiased">
        <ShopProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <Overlays />
        </ShopProvider>
      </body>
    </html>
  );
}
