import React from "react";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      {/* Trust Badges Bar */}
      <div className="border-b border-zinc-850 py-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-zinc-100">100% Certified</h4>
              <p className="text-xs text-zinc-400">BIS Hallmarked & IGI Lab certified</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-zinc-100">Insured Shipping</h4>
              <p className="text-xs text-zinc-400">Complimentary armored transit</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-zinc-100">15-Day Returns</h4>
              <p className="text-xs text-zinc-400">No questions asked return guarantee</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-zinc-100">Lifetime Exchange</h4>
              <p className="text-xs text-zinc-400">Guaranteed buyback on all gold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-widest text-zinc-100 uppercase">
              Sunehrie
            </span>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-semibold">
              Fine Jewels & Heritage
            </p>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Sunehrie curates timeless fine jewelry that celebrates the grandeur of Indian royal traditions infused with modern silhouettes. Crafted with unmatched precision by heritage artisans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-zinc-100 uppercase mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#products" className="hover:text-amber-400 transition-colors">Solitaire Rings</Link></li>
              <li><Link href="#products" className="hover:text-amber-400 transition-colors">Bridal Polki & Jadau</Link></li>
              <li><Link href="#products" className="hover:text-amber-400 transition-colors">Temple Heritage</Link></li>
              <li><Link href="#products" className="hover:text-amber-400 transition-colors">22K Gold Bangles</Link></li>
              <li><Link href="#products" className="hover:text-amber-400 transition-colors">Daily Wear Fine Gold</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-zinc-100 uppercase mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Jewellery Care Guide</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Ring Size Guide</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Lifetime Warranty</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Book a Video Consultation</Link></li>
            </ul>
          </div>

          {/* About & Policies */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-zinc-100 uppercase mb-4">
              About Sunehrie
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Our Karigars Story</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Ethical Sourcing</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Store Locator</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Privacy & Security</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Sunehrie Jewels Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>BIS Hallmarked HUID Registered</span>
            <span>IGI / GIA Certified Solitaires</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
