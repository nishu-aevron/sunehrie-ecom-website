"use client";

import { useState } from "react";
import { X, User, Package, Heart, Phone, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function AccountModal() {
  const { isAccountModalOpen, setIsAccountModalOpen, setIsWishlistOpen, showToast } = useShop();
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otp, setOtp] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isAccountModalOpen) return null;

  const handleSendOtp = () => {
    if (phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setStep("otp");
    showToast("OTP sent to +91 " + phone);
  };

  const handleVerifyOtp = () => {
    setLoggedIn(true);
    showToast("Welcome back to Sunehriè!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsAccountModalOpen(false)} />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#ece3f0] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#240632] via-[#350b47] to-[#4a1061] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#cca338]">
              <User size={18} />
            </div>
            <div>
              <h3 className="text-[17px] font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {loggedIn ? "Devyani Joshi" : "Welcome to Sunehriè"}
              </h3>
              <span className="text-[11px] text-white/70">
                {loggedIn ? "+91 " + phone : "Sign in to track orders & view saved designs"}
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsAccountModalOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          {!loggedIn ? (
            <div className="space-y-4 mb-6">
              {step === "phone" ? (
                <>
                  <label className="text-[12px] font-bold text-[#5e4b6b] uppercase tracking-wider block">
                    Mobile Number
                  </label>
                  <div className="flex items-center border border-[#decfe5] rounded-xl px-3.5 py-2.5 bg-[#faf6fc] focus-within:border-[#7a3f91] focus-within:bg-white transition-all">
                    <span className="text-[13px] font-bold text-[#7a3f91] mr-2">+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter 10-digit number"
                      className="w-full bg-transparent outline-none text-[14px] text-[#240632] font-semibold"
                      autoFocus
                    />
                  </div>
                  <button
                    onClick={handleSendOtp}
                    className="w-full py-3 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white font-bold text-[13px] uppercase tracking-wider transition-all shadow-md"
                  >
                    Send OTP
                  </button>
                </>
              ) : (
                <>
                  <label className="text-[12px] font-bold text-[#5e4b6b] uppercase tracking-wider block">
                    Enter OTP sent to +91 {phone}
                  </label>
                  <div className="flex items-center border border-[#decfe5] rounded-xl px-3.5 py-2.5 bg-[#faf6fc]">
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="123456"
                      className="w-full bg-transparent outline-none text-[16px] text-center tracking-[4px] text-[#240632] font-black"
                      autoFocus
                    />
                  </div>
                  <button
                    onClick={handleVerifyOtp}
                    className="w-full py-3 rounded-full bg-[#cca338] hover:bg-[#d4af37] text-[#1a0422] font-black text-[13px] uppercase tracking-wider transition-all shadow-md"
                  >
                    Verify &amp; Enter
                  </button>
                  <button
                    onClick={() => setStep("phone")}
                    className="text-[12px] text-[#7a3f91] hover:underline block text-center w-full"
                  >
                    Change mobile number
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 mb-5 flex items-center justify-between">
              <div className="text-[12px] text-emerald-900">
                <strong>Signed in verified account</strong>
                <span className="block text-[11px] text-emerald-700">Member since 2024 • VIP Gold Club</span>
              </div>
              <button
                onClick={() => setLoggedIn(false)}
                className="text-[11px] font-bold text-red-600 hover:underline"
              >
                Sign out
              </button>
            </div>
          )}

          {/* Quick Account Navigation Links */}
          <div className="space-y-2 border-t border-[#f4edf8] pt-4">
            <a
              href="#tracking"
              onClick={() => setIsAccountModalOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#fbf8fd] text-[13px] text-[#2e093d] group transition-colors"
            >
              <div className="flex items-center gap-2.5 font-medium">
                <Package size={17} className="text-[#cca338]" />
                <span>My Orders &amp; Live Tracking</span>
              </div>
              <ArrowRight size={15} className="text-[#9682a2] group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => {
                setIsAccountModalOpen(false);
                setIsWishlistOpen(true);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#fbf8fd] text-[13px] text-[#2e093d] group transition-colors text-left"
            >
              <div className="flex items-center gap-2.5 font-medium">
                <Heart size={17} className="text-[#7a3f91]" />
                <span>My Wishlist &amp; Saved Designs</span>
              </div>
              <ArrowRight size={15} className="text-[#9682a2] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#showroom"
              onClick={() => setIsAccountModalOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#fbf8fd] text-[13px] text-[#2e093d] group transition-colors"
            >
              <div className="flex items-center gap-2.5 font-medium">
                <MapPin size={17} className="text-[#cca338]" />
                <span>Book Showroom Appointment (Godhra / Lunawada)</span>
              </div>
              <ArrowRight size={15} className="text-[#9682a2] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:18002582525"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-[#fbf8fd] text-[13px] text-[#2e093d] group transition-colors"
            >
              <div className="flex items-center gap-2.5 font-medium">
                <Phone size={17} className="text-[#cca338]" />
                <span>Customer Care: 1800-258-2525 (Toll Free)</span>
              </div>
              <span className="text-[11px] font-bold text-[#079455]">Toll Free</span>
            </a>
          </div>

          <div className="mt-5 pt-3 border-t border-[#f4edf8] text-center text-[11px] text-[#9682a2] flex items-center justify-center gap-1.5">
            <ShieldCheck size={13} className="text-[#079455]" />
            <span>Two generations of trust from Shreenathji Jewellers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
