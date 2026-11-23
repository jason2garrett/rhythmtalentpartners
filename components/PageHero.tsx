import type { ReactNode } from "react";
import { PulseDivider } from "@/components/PulseDivider";

// Dark banner for inner pages, matching the home hero so the
// transparent header reads correctly on top of it.
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: ReactNode;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2ba4e8]/25 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-72 w-72 rounded-full bg-[#a855e0]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#f0784a]/15 blur-3xl" />
      </div>
      <div className="container relative pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </div>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {title}
        </h1>
        {children}
      </div>
      <PulseDivider id="page" className="absolute inset-x-0 bottom-0 h-10 w-full opacity-50" />
    </section>
  );
}
