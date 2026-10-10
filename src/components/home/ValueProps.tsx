import React from "react";
import { ShieldCheck, Truck, RefreshCw, Sparkles } from "lucide-react";
import { VALUE_PROPOSITIONS } from "@/data/mockData";

export const ValueProps: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-amber-600 dark:text-amber-400" />;
      case "Truck":
        return <Truck className="w-7 h-7 text-amber-600 dark:text-amber-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-7 h-7 text-amber-600 dark:text-amber-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-200/80 dark:border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPOSITIONS.map((prop) => (
            <div
              key={prop.id}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/80 hover:border-amber-400/40 transition-colors"
            >
              <div className="p-4 rounded-2xl bg-amber-100/60 dark:bg-amber-950/60 mb-5">
                {getIcon(prop.icon)}
              </div>
              <h3 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {prop.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
