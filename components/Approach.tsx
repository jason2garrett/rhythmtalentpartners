import { Check } from "lucide-react";
import { ENGAGEMENT_TYPES } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const PRINCIPLES = [
  "Dedicated, partner-led engagement on every search",
  "Precision over volume — curated, calibrated shortlists",
  "Deep understanding of your technology, market, and culture",
  "Long-term impact, alignment, and commitment on both sides",
];

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="brand-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Commitment to
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Relationship-Driven,
              <br />
              Results-Oriented
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
              I prioritize alignment, commitment, and long-term impact over
              volume. Every engagement is built on trust and a deep
              understanding of your technology, market, and culture.
            </p>

            <ul className="mt-8 space-y-4">
              {PRINCIPLES.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-body text-[15px] leading-relaxed text-foreground">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {ENGAGEMENT_TYPES.map((e) => (
              <div
                key={e.value}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-secondary/40"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {e.label}
                  </h3>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
                </div>
                <p className="mt-1.5 font-body text-sm text-muted-foreground">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
