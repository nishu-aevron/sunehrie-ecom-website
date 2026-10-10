import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/mockData";

export const FeaturedCategories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
            Explore By Category
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3">
            Handpicked designs sculpted for weddings, celebrations, and everyday modern grandeur.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`#${category.slug}`}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 border border-zinc-200/60 dark:border-zinc-800/60"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />

              {/* Content */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {category.itemCount} Designs
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {category.name}
                </h3>

                <p className="text-xs text-zinc-300 line-clamp-2">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
