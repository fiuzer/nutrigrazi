import type { ReactNode } from "react";

type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionTitle({
  badge,
  title,
  description,
  align = "left",
  children,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {badge ? (
        <span className="inline-flex w-fit rounded-full border border-warm-400/60 bg-warm-200/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-earth-700">
          {badge}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.05] text-earth-900 sm:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-relaxed text-earth-700 sm:text-lg">{description}</p> : null}
      {children}
    </header>
  );
}
