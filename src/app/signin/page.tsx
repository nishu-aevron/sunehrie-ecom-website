"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { useShop } from "@/context/ShopContext";

const perks = [
  "Exclusive first access to new launches & limited drops",
  "Members-only pricing — up to 12% off on select styles",
  "Real-time order tracking with live hallmark verification",
  "Free insured delivery & 48-hour return on every order",
];

export default function SignInPage() {
  const { showToast } = useShop();
  const [tab, setTab] = useState<"signin" | "create">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(tab === "signin" ? "Sign-in is coming soon" : "Registration is coming soon");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-blush px-4 py-8 sm:py-16">
      <div className="flex w-full max-w-[1080px] overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(43,13,62,0.12)] sm:rounded-[32px]">
        {/* Left brand panel */}
        <div className="hidden w-[440px] shrink-0 flex-col justify-between bg-ink p-10 lg:flex">
          <div>
            <p className="text-[11px] font-semibold tracking-[3px] text-gold-light uppercase">
              Welcome Back
            </p>
            <h1 className="mt-4 font-seasons text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-white">
              Some things stay close to your heart.
            </h1>
            <p className="mt-4 text-[14px] leading-[22px] text-white/60">
              Sign in to your Sunehriè account — your wishlist, saved addresses, and exclusive member
              pricing are all waiting for you.
            </p>
          </div>

          <ul className="mt-10 flex flex-col gap-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-[13px] leading-[20px] text-white/80">
                <span className="mt-1.5 block size-[7px] shrink-0 rotate-45 bg-gold-light" aria-hidden />
                {perk}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[12px] leading-[18px] text-white/40">
            Sunehriè is a registered trademark of Sunehrie Gold Pvt. Ltd.
            <br />
            BIS Hallmark License No. 100028XXXXXX
          </p>
        </div>

        {/* Right form panel */}
        <div className="flex flex-1 flex-col items-center bg-white px-5 py-8 sm:px-14 sm:py-14">
          {/* Tab switcher */}
          <div className="flex h-[48px] w-full max-w-[400px] rounded-full bg-purple-10 p-1">
            <button
              type="button"
              onClick={() => setTab("signin")}
              className={`flex flex-1 cursor-pointer items-center justify-center rounded-full text-[14px] font-semibold transition-colors ${
                tab === "signin" ? "bg-purple text-white shadow-sm" : "text-ink-70 hover:text-ink"
              }`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setTab("create")}
              className={`flex flex-1 cursor-pointer items-center justify-center rounded-full text-[14px] font-semibold transition-colors ${
                tab === "create" ? "bg-purple text-white shadow-sm" : "text-ink-70 hover:text-ink"
              }`}
            >
              Create account
            </button>
          </div>

          <h2 className="mt-6 text-center font-seasons text-[24px] leading-[1.2] font-bold tracking-[-0.4px] text-ink sm:mt-8 sm:text-[32px]">
            {tab === "signin" ? "Sign in to Sunehriè" : "Create your account"}
          </h2>
          <p className="mt-2 text-center text-[13px] leading-[20px] text-ink-50">
            {tab === "signin"
              ? "Access your orders, saved pieces and exclusive pricing."
              : "Join Sunehriè for member benefits and exclusive pricing."}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-[400px] flex-col gap-5">
            {tab === "create" && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullname" className="text-[13px] font-medium text-ink-90">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Ananya Shah"
                  className="h-[52px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-50 focus:border-purple"
                />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[13px] font-medium text-ink-90">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-[52px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-50 focus:border-purple"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[13px] font-medium text-ink-90">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-[52px] w-full rounded-[12px] border border-purple-20 bg-white px-4 pr-12 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-50 focus:border-purple"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-ink-50 hover:text-ink"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {tab === "signin" && (
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-[13px] text-ink-70">
                  <input
                    type="checkbox"
                    checked={keepSignedIn}
                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                    className="size-4 rounded border-purple-30 accent-purple"
                  />
                  Keep me signed in
                </label>
                <Link href="/signin" className="text-[13px] font-semibold text-purple hover:underline">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="mt-1 flex h-[52px] cursor-pointer items-center justify-center rounded-[26px] bg-purple text-[15px] font-bold tracking-[0.5px] text-white uppercase transition-colors hover:bg-purple-deep"
            >
              {tab === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {tab === "signin" && (
            <>
              <div className="mt-6 flex w-full max-w-[400px] items-center gap-4">
                <span className="h-px flex-1 bg-purple-20" />
                <span className="text-[12px] font-medium text-ink-50">or</span>
                <span className="h-px flex-1 bg-purple-20" />
              </div>

              <button
                type="button"
                onClick={() => showToast("OTP login is coming soon")}
                className="mt-6 flex h-[52px] w-full max-w-[400px] cursor-pointer items-center justify-center gap-2 rounded-[26px] border border-purple bg-white text-[14px] font-semibold text-purple transition-colors hover:bg-purple-10"
              >
                <Icon src="/icons/pdp/assure-shield.svg" size={18} />
                Continue with mobile OTP
              </button>
            </>
          )}

          <p className="mt-8 max-w-[360px] text-center text-[11px] leading-[17px] text-ink-50">
            By continuing you agree to Sunehriè&apos;s{" "}
            <Link href="/terms" className="font-semibold text-purple hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-semibold text-purple hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
