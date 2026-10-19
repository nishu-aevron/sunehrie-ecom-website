interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} animate-on-scroll`}>
      {/* Label row */}
      <div
        className={`flex items-center gap-[8px] sm:gap-[10px] mb-[6px] sm:mb-[7px] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className="w-[20px] sm:w-[26px] h-[1px] bg-[var(--gold)]" />
        <span
          className="text-[10px] sm:text-[11px] font-semibold text-[var(--gold-dark)] tracking-[2.5px] sm:tracking-[3.08px] uppercase"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {label}
        </span>
        {align === "center" && (
          <div className="w-[20px] sm:w-[26px] h-[1px] bg-[var(--gold)]" />
        )}
      </div>
      {/* Title */}
      <h2
        className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[var(--heading-dark)] leading-[1.15]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-[13px] sm:text-[15px] text-[var(--text-muted)] mt-[6px] sm:mt-[8px] leading-[22px] sm:leading-[24px]"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
