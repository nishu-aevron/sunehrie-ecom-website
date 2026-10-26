import Link from "next/link";

/** Shared building blocks for the Knowledge pages (Diamond / Metal Education, Gold Rate Guide…). */

/** 72px side gutter on the 1440 canvas, narrowing on smaller screens. */
export const eduX = "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[72px]";

export function EduHero({ crumb, title, intro }: { crumb: string; title: string; intro: React.ReactNode }) {
  return (
    <section className="bg-purple-10">
      <div className={`${eduX} flex flex-col items-start gap-[14px] pt-8 pb-10 sm:pt-[52px] sm:pb-[56px]`}>
        <nav aria-label="Breadcrumb" className="text-[13px] text-[#6b5b75]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-1.5">/</span>
          <span>{crumb}</span>
        </nav>
        <h1 className="font-seasons text-[36px] leading-[1.15] font-bold text-ink sm:text-[48px] lg:text-[60px] lg:leading-[72px]">{title}</h1>
        <p className="max-w-[680px] text-[15px] leading-[24px] text-[#6b5b75] sm:text-[17px] sm:leading-[27px]">{intro}</p>
      </div>
    </section>
  );
}

export function EduHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2.5 ${align === "center" ? "items-center text-center" : "items-start"} ${className}`}>
      {eyebrow && <p className="text-[12px] font-semibold tracking-[0.5px] text-purple uppercase">{eyebrow}</p>}
      <h2 className="font-seasons text-[28px] leading-[1.2] font-bold text-[#1d1a20] sm:text-[34px] lg:text-[40px] lg:leading-[50px]">{title}</h2>
      {intro && <p className="max-w-[720px] text-[15px] leading-[24px] text-[#6b6673] sm:text-[16px] sm:leading-[26px]">{intro}</p>}
    </div>
  );
}

/** Grey card with a lilac numbered disc, title and optional body. */
export function NumberCard({ n, title, body, className = "" }: { n: number; title: string; body?: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-2.5 rounded-[16px] border border-[#e6dfeb] bg-[#f8f7f9] px-[26px] pt-7 pb-[30px] ${className}`}>
      <span className="flex size-11 items-center justify-center rounded-full bg-purple-10 font-seasons text-[20px] font-bold text-purple">{n}</span>
      <h3 className="text-[18px] font-extrabold text-[#1d1a20]">{title}</h3>
      {body && <p className="text-[15px] leading-[23px] text-[#6b6673]">{body}</p>}
    </div>
  );
}

/** Grey card with title + body and no index. */
export function InfoCard({ title, body, className = "" }: { title: React.ReactNode; body?: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-2.5 rounded-[16px] border border-[#e6dfeb] bg-[#f8f7f9] px-[26px] pt-7 pb-[30px] ${className}`}>
      <h3 className="text-[18px] font-extrabold text-[#1d1a20]">{title}</h3>
      {body && <div className="text-[15px] leading-[23px] text-[#6b6673]">{body}</div>}
    </div>
  );
}

/** Small pill with a purple dot, used for "certificate covers" style lists. */
export function DotItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-[12px] bg-[#f8f7f9] px-4 py-[14px]">
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-purple" />
      <span className="text-[15px] font-medium text-[#1d1a20]">{children}</span>
    </div>
  );
}

/** Dark-plum "promise" band closing each education page. */
export function PromiseBand({
  eyebrow,
  title,
  intro,
  points,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  points: { title: string; body: string }[];
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bg-blush-light">
      <div className={`${eduX} flex flex-col items-center gap-6 pt-14 pb-14 sm:pt-[72px] sm:pb-[76px]`}>
        <p className="text-[12px] font-semibold tracking-[0.5px] text-[#c59dd9] uppercase">{eyebrow}</p>
        <h2 className="text-center font-seasons text-[28px] leading-[1.2] font-bold text-purple sm:text-[34px] lg:text-[40px] lg:leading-[50px]">{title}</h2>
        <div className="max-w-[1094px] text-center text-[15px] leading-[26px] text-ink-90 sm:text-[16px]">{intro}</div>
        <div className={`grid w-full gap-5 ${points.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {points.map((p) => (
            <div key={p.title} className="flex flex-col gap-2.5 rounded-[16px] bg-[#3d1c52] px-[26px] pt-7 pb-[30px]">
              <h3 className="text-[18px] font-extrabold text-blush">{p.title}</h3>
              <p className="text-[15px] leading-[23px] text-[#e9dcf1]">{p.body}</p>
            </div>
          ))}
        </div>
        {cta && (
          <Link href={cta.href} className="rounded-[50px] bg-ink-90 px-7 py-[14px] text-[14px] font-semibold text-blush transition-colors hover:bg-purple">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
