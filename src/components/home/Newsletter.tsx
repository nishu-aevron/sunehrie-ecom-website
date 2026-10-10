"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-zinc-900 via-amber-950 to-zinc-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-4 border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sunehrie Privé Club</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Receive Exclusive Invitations & Private Previews
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Join the connoisseurs circle. Enjoy first access to limited edition bridal launches, private salon appointments, and anniversary privileges.
        </p>

        {isSubscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-sm font-medium">
            <CheckCircle className="w-5 h-5" />
            <span>Thank you for joining. Welcome to Sunehrie Privé.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full sm:w-auto shrink-0 shadow-lg px-7"
            >
              Join Privé
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};
