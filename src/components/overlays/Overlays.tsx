"use client";

import { useShop } from "@/context/ShopContext";
import BagDrawer from "./BagDrawer";
import CompareModal from "./CompareModal";
import ContactModal from "./ContactModal";
import LoginModal from "./LoginModal";
import PincodeModal from "./PincodeModal";
import QuickViewModal from "./QuickViewModal";
import SearchModal from "./SearchModal";
import StoreModal from "./StoreModal";
import WishlistDrawer from "./WishlistDrawer";

export default function Overlays() {
  const { modal, toastMessage } = useShop();
  return (
    <>
      {modal === "search" && <SearchModal />}
      {modal === "pincode" && <PincodeModal />}
      {modal === "store" && <StoreModal />}
      {modal === "login" && <LoginModal />}
      {modal === "contact" && <ContactModal />}
      {modal === "compare" && <CompareModal />}
      {modal === "quickview" && <QuickViewModal />}
      {modal === "cart" && <BagDrawer />}
      {modal === "wishlist" && <WishlistDrawer />}
      <div aria-live="polite" className="pointer-events-none fixed right-6 bottom-6 z-[110]">
        {toastMessage && (
          <div className="dialog-in flex items-center gap-3 rounded-2xl border border-gold/40 bg-ink-night px-5 py-3 text-[13px] font-semibold text-white shadow-2xl">
            <span className="size-2.5 rounded-full bg-gold" />
            {toastMessage}
          </div>
        )}
      </div>
    </>
  );
}
