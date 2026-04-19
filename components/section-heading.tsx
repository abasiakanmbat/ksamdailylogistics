type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const eyebrowClass = theme === "dark" ? "text-[#b7ebb8]" : "text-[#2F7A3A]";
  const titleClass = theme === "dark" ? "text-white" : "text-slate-950";
  const descriptionClass = theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`section-heading-root max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.22em] ${eyebrowClass}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`section-heading-title ${titleClass}`}>{title}</h2>
      {description ? <p className={`section-heading-description ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
