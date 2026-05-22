import {
  Crown,
  Cpu,
  TrendingUp,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ICONS = [Crown, Cpu, TrendingUp, ShieldCheck, BrainCircuit];
const BRAND_COLORS = ["#2ba4e8", "#a855e0", "#f0784a", "#f4bd3a", "#2ba4e8"];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Executive & Technical Leadership"
          subtitle="Focused expertise in the roles that are most critical — and hardest to fill — across the medical device product lifecycle."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            const color = BRAND_COLORS[i % BRAND_COLORS.length];
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}1f`, color }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
