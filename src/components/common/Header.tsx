"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "New Arrivals", href: "#new-arrivals", highlight: true },
    { label: "Diamond Solitaires", href: "#categories" },
    { label: "Necklaces", href: "#products" },
    { label: "Rings & Bands", href: "#products" },
    { label: "Bangles", href: "#products" },
    { label: "Bridal Sets", href: "#categories" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-100 py-1.5 px-4 text-center text-xs font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Festive Grandeur: Complimentary 24K Gold Coin on orders above ₹75,000</span>
        <span className="hidden md:inline font-bold text-amber-300">Code: SUNEHRIE</span>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-zinc-900 dark:text-zinc-50 uppercase">
                Sunehrie
              </span>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-amber-600 dark:text-amber-400 font-semibold text-center">
                Fine Jewels & Heritage
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${
                  item.highlight
                    ? "text-amber-600 dark:text-amber-400 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Search Trigger */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search rings, chokers, solitaires..."
                className="w-48 lg:w-64 pl-9 pr-4 py-1.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-amber-500 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
              />
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
            </div>

            <button
              aria-label="Account"
              className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              aria-label="Wishlist"
              className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button
              aria-label="Shopping Bag"
              className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-zinc-900 dark:bg-zinc-100 text-[10px] font-bold text-white dark:text-zinc-900 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search jewels..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-amber-500 text-zinc-900 dark:text-zinc-100"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
