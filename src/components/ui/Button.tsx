import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-900/10 hover:shadow-lg hover:shadow-amber-900/20",
    secondary:
      "bg-zinc-900 hover:bg-zinc-800 text-amber-100 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900",
    outline:
      "border border-amber-600/40 text-amber-700 hover:bg-amber-50/80 dark:border-amber-400/40 dark:text-amber-300 dark:hover:bg-zinc-900",
    ghost:
      "text-zinc-700 hover:text-amber-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-amber-300 dark:hover:bg-zinc-800",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
