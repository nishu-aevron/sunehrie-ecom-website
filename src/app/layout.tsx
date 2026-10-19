import type { Metadata } from "next";
import {
  Manrope,
  Inter,
  Jost,
  Cormorant_Garamond,
  Bricolage_Grotesque,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import WishlistDrawer from "@/components/WishlistDrawer";
import CartDrawer from "@/components/CartDrawer";
import PincodeModal from "@/components/PincodeModal";
import SearchModal from "@/components/SearchModal";
import AccountModal from "@/components/AccountModal";
import StoreModal from "@/components/StoreModal";
import Toast from "@/components/Toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sunehriè - Exquisite Gold Jewellery",
  description:
    "Discover timeless gold jewellery crafted with precision. Shop rings, necklaces, bangles and more at Sunehriè.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jost.variable} ${cormorant.variable} ${bricolage.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased" style={{ fontFamily: "var(--font-body)" }}>
        <ShopProvider>
          {children}
          <WishlistDrawer />
          <CartDrawer />
          <PincodeModal />
          <SearchModal />
          <AccountModal />
          <StoreModal />
          <Toast />
        </ShopProvider>
      </body>
    </html>
  );
}
