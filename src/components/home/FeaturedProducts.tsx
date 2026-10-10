"use client";

import React, { useState } from "react";
import { FEATURED_PRODUCTS } from "@/data/mockData";
import { ProductCard } from "@/components/ui/ProductCard";

export const FeaturedProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Rings", "Necklaces", "Bangles", "Earrings"];

  const filteredProducts =
    selectedCategory === "All"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-zinc-50/70 dark:bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">
              Signature Creations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
              Featured Masterpieces
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white shadow-md shadow-amber-900/10"
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
