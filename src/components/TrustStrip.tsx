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
      className={`mx-auto w-[calc(100%-27px)] max-w-[1415px] ${pill ? "rounded-[40px] lg:rounded-[999px]" : "rounded-[38px]"} ${dark ? "bg-ink" : "bg-purple-10"}`}
    >
      <ul className="flex flex-wrap items-center justify-center gap-x-[15px] gap-y-6 px-[25px] py-8 lg:min-h-[115px] lg:justify-between lg:py-5">
        {items.map((it) => (
          <li key={it.title} className="flex items-center px-2.5">
            <Icon src={`/icons/home/trust-${it.icon}${dark ? "" : "-light"}.svg`} size={30} />
            <div className="flex flex-col gap-[5px] px-2.5">
              <p className={`font-seasons text-[22px] leading-[22px] font-bold tracking-[-0.24px] whitespace-nowrap ${dark ? "text-white" : "text-purple"}`}>
                {it.title}
              </p>
              <p className={`text-[15px] leading-[22px] font-medium tracking-[-0.24px] whitespace-nowrap ${dark ? "text-white" : "text-purple-70"}`}>{it.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
