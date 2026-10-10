import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 py-16 sm:py-24">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Royal Heritage Collection 2026</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.15]">
              Timeless Radiance,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600 dark:from-amber-300 dark:via-amber-400 dark:to-yellow-300">
                Crafted in Pure Gold.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore exquisite bridal chokers, certified diamond solitaires, and heirloom gold kadas meticulously sculpted by master karigars for your milestone moments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="#products">
                <Button size="lg" className="w-full sm:w-auto group">
                  <span>Explore Masterpieces</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#categories">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Collections
                </Button>
              </Link>
            </div>

            {/* Social Proof / Stats */}
            <div className="pt-6 sm:pt-8 border-t border-zinc-200/80 dark:border-zinc-800 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  100%
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  BIS Hallmarked
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  <span>4.9</span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  5,000+ Reviews
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  40+ Yrs
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Legacy Craft
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
                  alt="Sunehrie Royal Kundan Polki Choker"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Feature Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3.5 max-w-xs">
                <div className="p-3 bg-amber-100 dark:bg-amber-950/80 rounded-xl text-amber-700 dark:text-amber-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Certified Authenticity
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    HUID registered 22K gold & certified VVS diamonds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
