"use client";

import Icon from "@/components/ui/Icon";
import Dialog from "./Dialog";
import { useShop } from "@/context/ShopContext";

const channels = [
  {
    icon: "whatsapp",
    bg: "bg-[#25d366]",
    title: "Chat on WhatsApp",
    note: "Replies within minutes · 10:30 AM – 8:30 PM",
    href: "https://wa.me/919327331963",
  },
  { icon: "phone", bg: "bg-purple-deep", title: "Call +91 93273 31963", note: "Toll free 1800-258-2525 · Mon–Sun", href: "tel:+919327331963" },
  {
    icon: "mail",
    bg: "bg-purple-deep",
    title: "Email us",
    note: "sunehrie.care@gmail.com · Invoices & certificates on mail",
    href: "mailto:sunehrie.care@gmail.com",
  },
  { icon: "store", bg: "bg-purple-deep", title: "Visit a showroom", note: "Godhra & Lunawada · Book a private appointment", action: "store" as const },
];

export default function ContactModal() {
  const { closeModal, openModal } = useShop();
  return (
    <Dialog
      label="Contact Sunehriè"
      onClose={closeModal}
      className="w-[353px] max-w-full rounded-3xl border border-purple bg-snow px-4 py-[50px] shadow-[0_4px_15px_0_rgba(0,0,0,0.25)]"
    >
      <div className="flex flex-col items-center gap-[25px] px-px">
        <h2 className="w-full text-center font-seasons text-[32px] leading-8 font-bold tracking-[0.28px] text-purple">
          Contact Sunehriè
        </h2>
        <ul className="flex w-full flex-col gap-2.5 pt-[22px] pb-[30px]">
          {channels.map((c) => {
            const body = (
              <>
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-[20px] ${c.bg}`}>
                  <Icon src={`/icons/modal/${c.icon}.svg`} size={18} />
                </span>
                <span className="flex flex-col pr-5 text-left font-jost">
                  <span className="text-[13.5px] leading-[21.6px] font-bold text-purple-deep">{c.title}</span>
                  <span className="text-[12px] leading-[19.2px] text-ink-70">{c.note}</span>
                </span>
              </>
            );
            const cls = "flex w-full items-center gap-3.5 rounded-[14px] px-[18px] py-3.5 transition-colors hover:bg-purple-10";
            return (
              <li key={c.title}>
                {c.action ? (
                  <button type="button" className={`${cls} cursor-pointer`} onClick={() => openModal(c.action)}>
                    {body}
                  </button>
                ) : (
                  <a href={c.href} className={cls} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {body}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Dialog>
  );
}
