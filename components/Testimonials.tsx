import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-border bg-muted/40 py-24 md:py-32"
    >
      <div className="container">
        <SectionHeading
          eyebrow="What Clients Say"
          title="Trusted by Leaders Across MedTech"
          subtitle="Clients and candidates share their experience working with Rhythm Talent Partners."
        />

        <div className="mt-14 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06} className="mb-6 break-inside-avoid">
              <figure className="rounded-2xl border border-border bg-card p-6">
                <Quote size={22} className="text-secondary/40" />
                <blockquote className="mt-4 font-body text-[15px] leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {initials(t.name)}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-body text-sm font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="truncate font-body text-xs text-muted-foreground">
                      {t.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
