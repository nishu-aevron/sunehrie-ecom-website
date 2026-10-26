"use client";

import { useEffect, useRef } from "react";

interface DialogProps {
  label: string;
  onClose: () => void;
  children: React.ReactNode;
  /** Classes for the panel itself (size, radius, background). */
  className?: string;
  /** "center" for modals, "right" for slide-in drawers. */
  placement?: "center" | "right";
}

export default function Dialog({ label, onClose, children, className = "", placement = "center" }: DialogProps) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    panel.current?.focus({ preventScroll: true });
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className={`overlay-in fixed inset-0 z-[100] flex bg-black/60 backdrop-blur-[2px] ${
        placement === "right" ? "justify-end" : "items-center justify-center overflow-y-auto p-4"
      }`}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={`${placement === "right" ? "h-full" : "dialog-in my-auto"} relative outline-none ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
