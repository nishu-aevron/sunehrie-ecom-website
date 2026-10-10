import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline" | "emerald";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className,
}) => {
  const variants = {
    gold: "bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700/50",
    dark: "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900",
    outline: "border border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300",
    emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
