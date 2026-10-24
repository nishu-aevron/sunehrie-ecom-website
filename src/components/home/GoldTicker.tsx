const rates = [
  { label: "Gold 22 KT", price: "₹ 14461" },
  { label: "Gold 18 KT", price: "₹ 11840" },
  { label: "Gold 14 KT", price: "₹ 9204" },
  { label: "Gold 9 KT", price: "₹ 5920" },
];

function Run({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      <span className="px-[20.8px] whitespace-nowrap">Gold Rate Today :</span>
      {rates.map((r, i) => (
        <span key={r.label} className="flex items-center">
          {i > 0 && <span className="px-[20.8px]">✧</span>}
          <span className="px-[20.8px] whitespace-nowrap">
            {r.label} - <span className="text-gold">{r.price}</span>
          </span>
        </span>
      ))}
      <span className="px-[20.8px]">✧</span>
    </div>
  );
}

/** Live gold-rate marquee (rates are static placeholders until a price feed is wired in). */
export default function GoldTicker() {
  return (
    <section aria-label="Today's gold rates" className="mx-auto mt-[7px] w-[calc(100%-32px)] max-w-[1391px] overflow-hidden rounded-[58px] bg-ink py-3 sm:py-5">
      <div className="ticker-track flex w-max font-bricolage text-[14px] leading-[14px] tracking-[-0.24px] text-white sm:text-[22px] sm:leading-[22px]">
        <Run />
        <Run hidden />
      </div>
    </section>
  );
}
