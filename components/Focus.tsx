import { FOCUS_AREAS } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Focus() {
  return (
    <section id="focus" className="border-y border-border bg-muted/40 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Areas of Focus"
          title="Where Hiring Is Most Complex"
          subtitle="Deep specialization across the device categories and therapeutic areas that define modern MedTech — where the right hire is rare and the stakes are highest."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {FOCUS_AREAS.map((area, i) => (
            <Reveal key={area} delay={i * 0.03}>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:border-secondary/50 hover:text-secondary">
                {area}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
