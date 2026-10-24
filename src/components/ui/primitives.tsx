import Link from "next/link";
import Icon from "@/components/ui/Icon";

/** Lilac rounded panel used by most landing sections (1415px wide, 13.5px inset on a 1442 canvas). */
export function Panel({ children, className = "", as: Tag = "section" }: { children: React.ReactNode; className?: string; as?: "section" | "div" }) {
  return <Tag className={`mx-auto w-[calc(100%-16px)] max-w-[1415px] rounded-[20px] bg-purple-10 sm:w-[calc(100%-27px)] sm:rounded-[38px] ${className}`}>{children}</Tag>;
}

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  /** Show the purple sparkle above the title (9KT Fine Gold). */
  sparkle?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", sparkle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-2.5 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {sparkle && <Icon src="/icons/home/sparkle-purple.svg" size={38.4} />}
      <h2 className="font-seasons text-[26px] leading-none font-bold tracking-[-0.8px] text-purple sm:text-[32px] lg:text-[40px]">{title}</h2>
      {subtitle && <p className="max-w-[608px] text-[12px] leading-[18px] font-medium tracking-[0.24px] text-[#232323] sm:text-[13.1px] sm:leading-[19.6px]">{subtitle}</p>}
    </div>
  );
}

/** 50px round slider arrow. "purple" sits on lilac panels; "glass" sits on photography. */
export function ArrowButton({
  direction,
  variant = "purple",
  onClick,
  label,
  disabled,
}: {
  direction: "left" | "right";
  variant?: "purple" | "glass";
  onClick?: () => void;
  label?: string;
  disabled?: boolean;
}) {
  const icon = variant === "purple" ? `/icons/home/arrow-${direction}-purple.svg` : `/icons/home/arrow-${direction}-white.svg`;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? (direction === "left" ? "Previous" : "Next")}
      className={`flex size-[50px] shrink-0 cursor-pointer items-center justify-center rounded-[47px] border backdrop-blur-[2px] transition-colors disabled:cursor-default disabled:opacity-40 ${
        variant === "purple" ? "border-purple bg-purple/20 hover:bg-purple/35" : "border-white bg-white/25 hover:bg-white/40"
      }`}
    >
      <Icon src={icon} size={30} />
    </button>
  );
}

/** Outlined "VIEW ALL" pill. */
export function ViewAllLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 rounded-[50px] border border-purple bg-white/20 px-5 py-3 text-[16px] leading-[16.48px] font-medium tracking-[1px] text-purple uppercase backdrop-blur-[2px] transition-colors hover:bg-purple hover:text-white ${className}`}
    >
      View All
    </Link>
  );
}
