import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { JobMeta } from "@/components/JobMeta";
import { ApplyForm } from "@/components/ApplyForm";
import { ABOUT, SITE } from "@/lib/content";
import { findOpenJob, openJobs, type Job } from "@/lib/jobs";
import { esc } from "@/lib/server-utils";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return openJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const job = findOpenJob((await params).slug);
  if (!job) return {};
  const title = `${job.title} (${job.location})`;
  return {
    title,
    description: job.summary,
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title: `${title} | Rhythm Talent Partners`,
      description: job.summary,
      url: `/jobs/${job.slug}`,
    },
  };
}

const EMPLOYMENT_TYPE: Record<Job["employmentType"], string[]> = {
  "Full-time": ["FULL_TIME"],
  "Part-time": ["PART_TIME"],
  Contract: ["CONTRACTOR"],
  "Contract-to-hire": ["CONTRACTOR", "FULL_TIME"],
};

// schema.org JobPosting so the role can appear in Google's job search.
function jobPostingSchema(job: Job) {
  const description =
    `<p>${esc(job.summary)}</p>` +
    job.sections
      .map(
        (s) =>
          `<h3>${esc(s.heading)}</h3>` +
          (s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("") +
          (s.bullets?.length ? `<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : "")
      )
      .join("");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    datePosted: job.datePosted,
    employmentType: EMPLOYMENT_TYPE[job.employmentType],
    url: `https://rhythmtalent.com/jobs/${job.slug}`,
    hiringOrganization: job.confidential
      ? { "@type": "Organization", name: SITE.name, sameAs: "https://rhythmtalent.com" }
      : { "@type": "Organization", name: job.company },
    ...(job.workplace === "Remote"
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "US" },
        }
      : {
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location,
              addressCountry: "US",
            },
          },
        }),
  };
}

export default async function JobPage({ params }: Params) {
  const job = findOpenJob((await params).slug);
  if (!job) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema(job)).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <PageHero
          eyebrow={job.confidential ? `Confidential · ${job.company}` : job.company}
          title={job.title}
        >
          <JobMeta job={job} invert />
          <a
            href="#apply"
            className="bg-brand-gradient mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#a855e0]/20 transition-opacity hover:opacity-90 lg:hidden"
          >
            Apply Now
          </a>
        </PageHero>

        <section className="py-16 md:py-20">
          <div className="container grid gap-12 lg:grid-cols-[1fr_24rem] lg:gap-14">
            <article className="min-w-0">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                <ArrowLeft size={15} />
                All open roles
              </Link>

              <p className="mt-8 font-body text-lg leading-relaxed text-foreground">
                {job.summary}
              </p>

              {job.sections.map((section) => (
                <div key={section.heading} className="mt-10">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 font-body text-[15px] leading-relaxed text-muted-foreground"
                        >
                          <Check size={18} className="mt-0.5 shrink-0 text-secondary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </article>

            <aside id="apply" className="scroll-mt-24 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Apply for This Role
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  Your application goes directly to {ABOUT.name.split(" ")[0]}, who
                  is leading this search.
                </p>
                <div className="mt-6">
                  <ApplyForm jobSlug={job.slug} jobTitle={job.title} />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
