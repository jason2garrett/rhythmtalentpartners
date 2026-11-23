"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import { MAX_RESUME_BYTES } from "@/lib/jobs";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20";
const LABEL = "mb-1.5 block font-body text-sm font-medium text-foreground";

export function ApplyForm({ jobSlug, jobTitle }: { jobSlug: string; jobTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const resume = data.get("resume");
    if (resume instanceof File && resume.size > MAX_RESUME_BYTES) {
      setStatus("error");
      setError("Your resume is larger than 4 MB. Please upload a smaller file.");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/apply", { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <CheckCircle2 size={44} className="text-secondary" />
        <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
          Application Received
        </h3>
        <p className="mt-3 max-w-sm font-body text-[15px] text-muted-foreground">
          Thank you for applying for {jobTitle}. I review every application
          personally and will reach out if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="jobSlug" value={jobSlug} />

      <div>
        <label className={LABEL} htmlFor="fullName">
          Full Name *
        </label>
        <input id="fullName" name="fullName" required autoComplete="name" className={FIELD} placeholder="Jane Smith" />
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
          autoComplete="email"
          className={FIELD}
          placeholder="jane@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={FIELD} placeholder="(555) 555-5555" />
        </div>
        <div>
          <label className={LABEL} htmlFor="linkedin">
            LinkedIn Profile
          </label>
          <input id="linkedin" name="linkedin" type="url" className={FIELD} placeholder="linkedin.com/in/..." />
        </div>
      </div>

      <div>
        <span className={LABEL}>Resume *</span>
        <label
          htmlFor="resume"
          className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-muted/40 px-4 py-4 font-body text-sm transition-colors hover:border-secondary focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <FileText size={17} />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-medium text-foreground">
              {fileName || "Choose a file"}
            </span>
            <span className="block text-xs text-muted-foreground">PDF or Word, up to 4 MB</span>
          </span>
          <input
            id="resume"
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
      </div>

      <div>
        <label className={LABEL} htmlFor="message">
          Anything I Should Know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={FIELD}
          placeholder="Why this role interests you, availability, location preferences..."
        />
      </div>

      {status === "error" && <p className="font-body text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
        {status !== "submitting" && (
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </button>

      {/* Honeypot: hidden from people, but bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
    </form>
  );
}
