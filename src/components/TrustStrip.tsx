import Icon from "@/components/ui/Icon";

const items = [
  { icon: "shield", title: "100% Certified", note: "IGI + BIS Hallmark" },
  { icon: "diamond", title: "Natural Diamonds", note: "Natural Diamonds only" },
  { icon: "rupee", title: "Transparent Pricing", note: "Full price breakup" },
  { icon: "history", title: "48-Hour Returns", note: "Easy Exchange" },
  { icon: "truck", title: "Insured Delivery", note: "Free & tamper-proof" },
];

/** The five promises strip — dark pill on landing/PDP, lilac panel on checkout. */
export default function TrustStrip({ variant = "dark", pill = variant === "dark" }: { variant?: "dark" | "light"; pill?: boolean }) {
  const dark = variant === "dark";
  return (
    <section
      id="returns"
      aria-label="Our promises"
      className={`mx-auto w-[calc(100%-16px)] max-w-[1415px] sm:w-[calc(100%-27px)] ${pill ? "rounded-[20px] sm:rounded-[40px] lg:rounded-[999px]" : "rounded-[20px] sm:rounded-[38px]"} ${dark ? "bg-ink" : "bg-purple-10"}`}
    >
      <ul className="no-scrollbar flex snap-x items-center gap-x-[15px] gap-y-4 overflow-x-auto px-4 py-5 sm:flex-wrap sm:justify-center sm:px-[25px] sm:py-8 lg:min-h-[115px] lg:justify-between lg:py-5">
        {items.map((it) => (
          <li key={it.title} className="flex shrink-0 snap-start items-center px-2.5">
            <Icon src={`/icons/home/trust-${it.icon}${dark ? "" : "-light"}.svg`} size={30} className="max-sm:!h-[24px] max-sm:!w-[24px]" />
            <div className="flex flex-col gap-[3px] px-2 sm:gap-[5px] sm:px-2.5">
              <p className={`font-seasons text-[16px] leading-[16px] font-bold tracking-[-0.24px] whitespace-nowrap sm:text-[22px] sm:leading-[22px] ${dark ? "text-white" : "text-purple"}`}>
                {it.title}
              </p>
              <p className={`text-[12px] leading-[16px] font-medium tracking-[-0.24px] whitespace-nowrap sm:text-[15px] sm:leading-[22px] ${dark ? "text-white" : "text-purple-70"}`}>{it.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
