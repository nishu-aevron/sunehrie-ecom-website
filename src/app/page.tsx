import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ValueProps } from "@/components/home/ValueProps";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <ValueProps />
      <Newsletter />
    </div>
  );
}
