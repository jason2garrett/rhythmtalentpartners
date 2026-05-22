import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="brand-line" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            {eyebrow}
          </span>
        </div>
        <h2
          className={`mt-5 font-heading text-3xl font-semibold tracking-tight md:text-4xl ${
            invert ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 font-body text-lg leading-relaxed ${
              invert ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
