"use client";

import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";

export default function LoginModal() {
  const { closeModal, showToast } = useShop();
  return (
    <Dialog
      label="Welcome to Sunehriè"
      onClose={closeModal}
      className="isolate flex w-[1242px] max-w-full flex-col items-center gap-[20px] rounded-[20px] px-5 py-10 sm:gap-[30px] sm:rounded-[40px] sm:px-6 sm:py-14 md:p-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[40px]"
        style={{ background: "linear-gradient(180deg, rgba(122,63,145,0) 0%, rgba(122,63,145,0) 67%, #7a3f91 100%), #2b0d3e" }}
      />
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close"
        className="absolute top-[25px] right-[26px] flex size-[55px] cursor-pointer items-center justify-center rounded-full border border-black/20 bg-white p-[5px] backdrop-blur-[2px] transition-transform hover:scale-105"
      >
        <Icon src="/icons/modal/close-24.svg" size={24} />
      </button>

      <div className="flex h-[198px] w-[288px] flex-col items-center gap-[6.3px] p-[7px]">
        <Icon src="/icons/footer/logo-bird.svg" size={[46, 109.45]} />
        <Icon src="/icons/footer/logo-wordmark.svg" size={[274, 59.4]} />
      </div>

      <div className="flex w-full flex-col gap-[15px] text-center">
        <h2 className="font-seasons text-[40px] leading-[1.25] tracking-[-0.56px] text-white sm:text-[56px] sm:leading-[72px]">
          Welcome to Sunehrie!
        </h2>
        <p className="text-[16px] leading-[28.8px] text-white/80 sm:text-[18px]">
          Login or Register to unlock exclusive benefits, track your orders, and enjoy a seamless shopping experience.
        </p>
      </div>

      <div className="relative aspect-[928/393] w-full max-w-[928px] overflow-hidden rounded-[51px] border border-blush shadow-[0_0_18.6px_0_#743c8a]">
        <Image
          src="/img/home/welcome-offer.png"
          alt="Buy and earn ₹50,000 on every purchase. T&C apply."
          fill
          sizes="(max-width: 1242px) 90vw, 928px"
          className="object-cover"
        />
      </div>

      <div className="flex w-full max-w-[510px] flex-col gap-[15px]">
        <button
          type="button"
          onClick={() => {
            closeModal();
            showToast("Sign-in is coming soon");
          }}
          className="flex h-[84px] cursor-pointer items-center justify-center rounded-[99px] bg-white px-7 py-[18px] text-[24px] leading-[48px] font-bold text-[#161616] transition-colors hover:bg-blush sm:text-[32px]"
        >
          Login / Register
        </button>
        <p className="text-center text-[16px] leading-[28.8px] text-white/80 sm:text-[18px]">
          New to Sunehrie? Create an account
          <br />
          and enjoy member benefits!
        </p>
      </div>
    </Dialog>
  );
}
