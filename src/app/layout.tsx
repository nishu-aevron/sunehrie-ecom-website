import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunehrie | Luxury Fine Jewelry & Contemporary Heritage",
  description:
    "Explore handcrafted BIS Hallmarked gold, uncut Polki chokers, and certified diamond solitaires at Sunehrie. Timeless elegance celebrating life's precious moments.",
  keywords: [
    "Sunehrie",
    "Fine Jewelry",
    "Gold Jewellery",
    "Diamond Solitaires",
    "Bridal Jewellery",
    "Polki Choker",
    "Kundan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
