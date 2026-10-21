"use client";

import Icon from "@/components/ui/Icon";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";

const stores = [
  { city: "Godhra", address: "Main Bazaar, Godhra, Gujarat 388001", map: "https://maps.google.com/?q=Main+Bazaar+Godhra+Gujarat+388001" },
  { city: "Lunawada", address: "Station Road, Lunawada, Gujarat 389230", map: "https://maps.google.com/?q=Station+Road+Lunawada+Gujarat+389230" },
];

export default function StoreModal() {
  const { closeModal } = useShop();
  return (
    <Dialog label="Our showrooms" onClose={closeModal} className="w-[480px] max-w-full rounded-3xl border border-purple bg-snow px-8 py-10">
      <h2 className="text-center font-seasons text-[32px] leading-8 font-bold text-purple">Visit a Showroom</h2>
      <p className="mt-3 text-center font-jost text-[13px] leading-5 text-ink-70">Mon–Sun · 10:30 AM – 8:30 PM · Private appointments available</p>
      <ul className="mt-7 flex flex-col gap-3">
        {stores.map((s) => (
          <li key={s.city} className="flex items-start gap-3.5 rounded-[14px] border border-purple-20 px-[18px] py-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-purple-deep">
              <Icon src="/icons/modal/store.svg" size={18} />
            </span>
            <span className="flex flex-1 flex-col font-jost">
              <span className="text-[14px] leading-[21.6px] font-bold text-purple-deep">{s.city}</span>
              <span className="text-[12.5px] leading-5 text-ink-70">{s.address}</span>
              <span className="mt-2 flex gap-4 text-[12px] font-semibold tracking-[0.48px] text-purple">
                <a href={s.map} target="_blank" rel="noreferrer" className="hover:underline">
                  Get directions
                </a>
                <a href="tel:+919327331963" className="hover:underline">
                  Book a visit
                </a>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Dialog>
  );
}
