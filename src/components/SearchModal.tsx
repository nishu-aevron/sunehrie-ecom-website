"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, X, Mic, Camera, ShoppingBag, ArrowRight } from "lucide-react";
import { useShop, defaultProducts } from "@/context/ShopContext";

const trendingSearches = [
  "Diamond Mangalsutra",
  "14KT Gold Rings",
  "9KT Fine Gold",
  "Gold Chain for Women",
  "Office Wear Jewellery",
  "Solitaire Earrings",
];

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery, addToCart } = useShop();
  const [activeTab, setActiveTab] = useState<"all" | "rings" | "mangalsutra" | "earrings">("all");

  if (!isSearchOpen) return null;

  const filteredProducts = defaultProducts.filter((p) => {
    const matchesQuery =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.purity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeTab === "all") return matchesQuery;
    if (activeTab === "rings") return matchesQuery && p.name.toLowerCase().includes("ring");
    if (activeTab === "mangalsutra") return matchesQuery && p.name.toLowerCase().includes("mangalsutra");
    if (activeTab === "earrings") return matchesQuery && (p.name.toLowerCase().includes("earring") || p.name.toLowerCase().includes("pendant"));
    return matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsSearchOpen(false)} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#ece3f0] overflow-hidden z-10 animate-in fade-in slide-in-from-top-4 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#ece3f0] flex items-center gap-3 bg-[#faf6fc]">
          <Search size={20} className="text-[#7a3f91] flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for 14kt Rings, Diamond Mangalsutra, Gold Chains..."
            className="flex-1 bg-transparent outline-none text-[15px] sm:text-[16px] text-[#2e093d] placeholder:text-[#9682a2]"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="p-1 rounded-full text-[#9682a2] hover:text-[#2e093d]"
            >
              <X size={16} />
            </button>
          )}
          <div className="flex items-center gap-2 pl-2 border-l border-[#decfe5] text-[#8e7b99]">
            <button
              type="button"
              onClick={() => alert("Voice search listening... (Speak: 'Diamond Mangalsutra')")}
              className="p-1 hover:text-[#cca338] transition-colors"
              title="Voice Search"
            >
              <Mic size={17} />
            </button>
            <button
              type="button"
              onClick={() => alert("Visual search: Upload a jewelry photo to match with Sunehriè designs.")}
              className="p-1 hover:text-[#cca338] transition-colors"
              title="Visual Search"
            >
              <Camera size={17} />
            </button>
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-[#f4edf8] hover:bg-[#ece0f2] text-[#2e093d] flex items-center justify-center transition-colors ml-1"
          >
            <X size={17} />
          </button>
        </div>

        {/* Quick Filter Chips */}
        <div className="px-5 py-3 border-b border-[#f4edf8] flex items-center gap-2 overflow-x-auto nav-scroll bg-white">
          <span className="text-[11px] font-bold text-[#9682a2] uppercase tracking-wider mr-1">Filter:</span>
          {(["all", "rings", "mangalsutra", "earrings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold capitalize whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-[#7a3f91] text-white"
                  : "bg-[#f4edf8] text-[#5e4b6b] hover:bg-[#ece0f2]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Results / Trending List */}
        <div className="max-h-[380px] overflow-y-auto p-5">
          {searchQuery.trim() === "" ? (
            <div>
              <span className="text-[11px] font-bold text-[#9682a2] uppercase tracking-wider block mb-2.5">
                Trending Searches:
              </span>
              <div className="flex flex-wrap gap-2 mb-6">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fcf9fd] hover:bg-[#f4edf8] border border-[#e8dcee] text-[13px] text-[#4d1b54] transition-colors"
                  >
                    <Search size={12} className="text-[#cca338]" />
                    <span>{term}</span>
                  </button>
                ))}
              </div>

              <span className="text-[11px] font-bold text-[#9682a2] uppercase tracking-wider block mb-2.5">
                Popular Fine Gold Pieces:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {defaultProducts.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2.5 rounded-2xl border border-[#eee4f2] hover:border-[#cca338]/50 hover:bg-[#fdfaf5] transition-all group"
                  >
                    <div className="relative w-14 h-14 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-[#f4edf8]">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[12px] font-bold text-[#2e093d] truncate group-hover:text-[#7a3f91]">
                        {item.name}
                      </h5>
                      <span className="text-[11px] text-[#cca338] font-semibold block">{item.purity}</span>
                      <span className="text-[13px] font-extrabold text-[#240632]">{item.price}</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-8 h-8 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white flex items-center justify-center transition-colors shadow-xs"
                      title="Add to Bag"
                    >
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-[15px] font-semibold text-[#2e093d]">No jewellery found matching &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-[13px] text-[#8e7a9b] mt-1">Try searching for &ldquo;Rings&rdquo;, &ldquo;Mangalsutra&rdquo;, or &ldquo;18KT Gold&rdquo;</p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#9682a2] uppercase tracking-wider block">
                Found {filteredProducts.length} Results:
              </span>
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 p-3 rounded-2xl border border-[#eee4f2] hover:border-[#cca338]/50 hover:bg-[#fcfaf7] transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-14 h-14 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-[#f4edf8]">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-bold text-[#2e093d] truncate">{item.name}</h4>
                      <div className="text-[11px] text-[#8e7a9b]">{item.purity} • {item.specs}</div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-[14px] font-black text-[#240632]">{item.price}</span>
                        {item.discount && <span className="text-[10px] text-emerald-600 font-bold">{item.discount}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        addToCart(item);
                        setIsSearchOpen(false);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white text-[11px] font-bold uppercase transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <ShoppingBag size={13} />
                      <span>Add</span>
                    </button>
                    <a
                      href="#collection"
                      onClick={() => setIsSearchOpen(false)}
                      className="p-1.5 text-[#9682a2] hover:text-[#7a3f91] transition-colors"
                      title="View piece"
                    >
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
