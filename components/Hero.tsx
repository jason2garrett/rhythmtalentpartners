"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO } from "@/lib/content";
import { PulseDivider } from "@/components/PulseDivider";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* ambient brand glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#2ba4e8]/25 blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-[#a855e0]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#f0784a]/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative flex min-h-[88vh] flex-col justify-center py-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {HERO.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          {HERO.titleLead}
          <span className="text-brand-gradient mt-2 block">
            {HERO.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-white/70 md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="bg-brand-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#a855e0]/20 transition-opacity hover:opacity-90"
          >
            {HERO.primaryCta}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#expertise"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {HERO.secondaryCta}
          </a>
        </motion.div>
      </div>

      <PulseDivider
        id="hero"
        className="absolute inset-x-0 bottom-0 h-14 w-full opacity-60"
      />
    </section>
  );
}
