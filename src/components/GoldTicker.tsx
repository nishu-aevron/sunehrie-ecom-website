"use client";

export default function GoldTicker() {
  const rates = [
    { karat: "Gold 22 KT -", price: "₹ 14461" },
    { karat: "Gold 18 KT -", price: "₹ 11840" },
    { karat: "Gold 14 KT -", price: "₹ 9204" },
    { karat: "Gold 9 KT -", price: "₹ 5920" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-8 sm:pb-10 bg-white select-none">
      <div className="max-w-[1560px] mx-auto rounded-full bg-[#240632] shadow-xl border border-white/10 py-3.5 sm:py-4 lg:py-4.5 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Desktop View: Wide Display Pill */}
        <div className="hidden md:flex items-center justify-between gap-6 text-[14px] sm:text-[15px] lg:text-[16px] select-none">
          <span
            className="text-white/95 font-medium whitespace-nowrap tracking-wide text-[15px] sm:text-[16px] lg:text-[17px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Gold Rate Today :
          </span>

          {rates.map((rate, idx) => (
            <div key={rate.karat} className="flex items-center gap-6 lg:gap-10">
              <span className="whitespace-nowrap flex items-center gap-2.5 font-normal tracking-wide">
                <span className="text-white/90">{rate.karat}</span>
                <span className="text-[#cca338] font-bold text-[15px] sm:text-[16px]">{rate.price}</span>
              </span>
              {idx < rates.length - 1 && (
                <span className="text-white/60 text-[13px] sm:text-[14px] select-none">✦</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View: Smooth horizontal scrollable ticker */}
        <div className="md:hidden flex items-center gap-4 overflow-x-auto scrollbar-none py-0.5 text-[12px] whitespace-nowrap">
          <span className="text-white font-medium sticky left-0 bg-[#240632] pr-2 z-10 flex-shrink-0">
            Gold Rate Today :
          </span>
          {rates.map((rate, idx) => (
            <div key={rate.karat} className="flex items-center gap-3 flex-shrink-0">
              <span className="text-white/90">{rate.karat}</span>
              <span className="text-[#cca338] font-bold">{rate.price}</span>
              {idx < rates.length - 1 && <span className="text-white/50 text-[11px]">✦</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}