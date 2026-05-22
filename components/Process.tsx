import { PROCESS } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative">
        <SectionHeading
          eyebrow="The Process"
          title="A Disciplined, Transparent Search"
          subtitle="Every engagement follows a deliberate process — built for clarity, momentum, and lasting placements."
          invert
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="relative">
                <span className="font-heading text-5xl font-semibold text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-white/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
