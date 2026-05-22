"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import {
  SITE,
  COMPANY_STAGES,
  DEVICE_CATEGORIES,
  ENGAGEMENT_TYPES,
  HIRING_TIMELINES,
} from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20";
const LABEL = "mb-1.5 block font-body text-sm font-medium text-foreground";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: pitch + contact details */}
        <div>
          <div className="flex items-center gap-3">
            <span className="brand-line" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Let&apos;s Connect
            </span>
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Building a Team or Exploring Your Next Move?
          </h2>
          <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
            Tell us about your company and hiring needs — we&apos;ll follow up
            within one business day.
          </p>
          <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-muted-foreground">
            Whether you&apos;re a startup building your founding team or a scaling
            company ready to accelerate — I&apos;d welcome the conversation.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 font-body text-sm text-foreground transition-colors hover:text-secondary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mail size={18} />
              </span>
              {SITE.email}
            </a>
            <div className="flex items-center gap-3 font-body text-sm text-muted-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <MapPin size={18} />
              </span>
              {SITE.location}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={48} className="text-secondary" />
              <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                Request Submitted
              </h3>
              <p className="mt-3 max-w-sm font-body text-[15px] text-muted-foreground">
                Thank you for reaching out. We&apos;ll be in touch within one
                business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 font-body text-sm font-medium text-secondary hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={LABEL} htmlFor="companyName">
                    Company Name *
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    required
                    className={FIELD}
                    placeholder="Acme Medical Devices"
                  />
                </div>
                <div>
                  <label className={LABEL} htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    className={FIELD}
                    placeholder="Jane Smith"
                  />
                </div>
              </div>

              <div>
                <label className={LABEL} htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={FIELD}
                  placeholder="jane@company.com"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={LABEL} htmlFor="companyStage">
                    Company Stage
                  </label>
                  <select id="companyStage" name="companyStage" className={FIELD} defaultValue="">
                    <option value="" disabled>
                      Select stage...
                    </option>
                    {COMPANY_STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={LABEL} htmlFor="deviceCategory">
                    Device / Technology Category
                  </label>
                  <select id="deviceCategory" name="deviceCategory" className={FIELD} defaultValue="">
                    <option value="" disabled>
                      Select category...
                    </option>
                    {DEVICE_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={LABEL} htmlFor="engagementType">
                    Engagement Type
                  </label>
                  <select id="engagementType" name="engagementType" className={FIELD} defaultValue="">
                    <option value="" disabled>
                      Select type...
                    </option>
                    {ENGAGEMENT_TYPES.map((e) => (
                      <option key={e.value} value={e.label}>
                        {e.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={LABEL} htmlFor="hiringTimeline">
                    Hiring Timeline
                  </label>
                  <select id="hiringTimeline" name="hiringTimeline" className={FIELD} defaultValue="">
                    <option value="" disabled>
                      Select timeline...
                    </option>
                    {HIRING_TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={LABEL} htmlFor="message">
                  Additional Context
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={FIELD}
                  placeholder="Describe the role(s), key responsibilities, must-have experience, or any other relevant details..."
                />
              </div>

              {status === "error" && (
                <p className="font-body text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Submitting..." : "Submit Request"}
                {status !== "submitting" && (
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
