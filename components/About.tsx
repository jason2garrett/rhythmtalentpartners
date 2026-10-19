import Image from "next/image";
import { Check, Linkedin, Mail } from "lucide-react";
import { ABOUT, SITE } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            {/* soft brand glow behind the photo */}
            <div className="bg-brand-gradient absolute -inset-3 rounded-[2rem] opacity-25 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-xl">
              <Image
                src={ABOUT.photo}
                alt={`${ABOUT.name}, ${ABOUT.role}`}
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <div className="flex items-center gap-3">
              <span className="brand-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                {ABOUT.eyebrow}
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Meet {ABOUT.name}
            </h2>
            <p className="mt-2 font-body text-sm font-medium text-muted-foreground">
              {ABOUT.role}
            </p>

            <div className="mt-6 space-y-4">
              {ABOUT.bio.map((para) => (
                <p
                  key={para}
                  className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground"
                >
                  {para}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {ABOUT.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-body text-[15px] leading-relaxed text-foreground">
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Mail size={16} />
                Email Jason
              </a>
              {SITE.linkedin && (
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
