"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";

export default function PincodeModal() {
  const { closeModal, setPincode, pincode, showToast } = useShop();
  const [value, setValue] = useState(pincode ?? "");
  const valid = /^[1-9]\d{5}$/.test(value);

  return (
    <Dialog label="Delivery pincode" onClose={closeModal} className="w-[420px] max-w-full rounded-3xl border border-purple bg-snow px-8 py-10">
      <form
        className="flex flex-col items-center gap-5 text-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (!valid) return;
          setPincode(value);
          closeModal();
          showToast(`Delivering to ${value}`);
        }}
      >
        <Icon src="/icons/nav/icon-pincode.svg" size={32} />
        <h2 className="font-seasons text-[28px] leading-8 font-bold text-purple">Where should we deliver?</h2>
        <p className="font-jost text-[13px] leading-5 text-ink-70">Enter your pincode to see delivery dates and store pickup options.</p>
        <input
          autoFocus
          inputMode="numeric"
          maxLength={6}
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/\D/g, ""))}
          placeholder="6-digit pincode"
          className="h-12 w-full rounded-xl border border-purple-20 px-4 text-center text-[16px] tracking-[4px] text-ink outline-none focus:border-purple"
        />
        <button
          type="submit"
          disabled={!valid}
          className="h-12 w-full cursor-pointer rounded-full bg-purple text-[15px] font-semibold text-white transition-colors hover:bg-purple-deep disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check delivery
        </button>
      </form>
    </Dialog>
  );
}
