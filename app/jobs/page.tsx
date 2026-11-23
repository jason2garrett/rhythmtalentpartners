import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/content";
import { openJobs } from "@/lib/jobs";
import { JobMeta } from "@/components/JobMeta";

const description =
  "Open MedTech roles from Rhythm Talent Partners: executive, R&D engineering, quality, regulatory, clinical, and commercial positions at medical device, IVD, and digital health companies.";

export const metadata: Metadata = {
  title: "Open Roles",
  description,
  alternates: { canonical: "/jobs" },
  openGraph: { title: "Open Roles | Rhythm Talent Partners", description, url: "/jobs" },
};

export default function JobsPage() {
  const jobs = openJobs();

  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Open Roles" title="Find Your Next Move in MedTech">
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/70">
            Current searches I&apos;m leading for early- and growth-stage medical
            device, IVD, digital health, and SaMD companies. Apply directly and
            your application comes straight to me.
          </p>
        </PageHero>

        <section className="py-20 md:py-24">
          <div className="container">
            {jobs.length === 0 ? (
              <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
                <Briefcase size={36} className="mx-auto text-secondary" />
                <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                  No Open Roles Posted Right Now
                </h2>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-muted-foreground">
                  Many of my searches are confidential and never posted publicly.
                  If you&apos;re exploring your next move, send me your resume and
                  I&apos;ll reach out when a role fits.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent("Resume for future opportunities")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Email My Resume
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ) : (
              <div className="mx-auto grid max-w-4xl gap-5">
                <p className="font-body text-sm text-muted-foreground">
                  {jobs.length} open {jobs.length === 1 ? "role" : "roles"}
                </p>
                {jobs.map((job, i) => (
                  <Reveal key={job.slug} delay={Math.min(i, 4) * 0.05}>
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-secondary/50 hover:shadow-lg md:p-8"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                            {job.confidential ? `Confidential · ${job.company}` : job.company}
                          </p>
                          <h2 className="mt-2 font-heading text-xl font-semibold text-foreground md:text-2xl">
                            {job.title}
                          </h2>
                        </div>
                        <ArrowUpRight
                          size={22}
                          className="mt-1 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-secondary"
                        />
                      </div>
                      <p className="mt-3 font-body text-[15px] leading-relaxed text-muted-foreground">
                        {job.summary}
                      </p>
                      <JobMeta job={job} />
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
