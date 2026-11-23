import { NextResponse } from "next/server";
import { Resend } from "resend";
import { findOpenJob, MAX_RESUME_BYTES } from "@/lib/jobs";
import { EMAIL_RE, esc, isRateLimited } from "@/lib/server-utils";

export const runtime = "nodejs";

// Applications go to the same inbox and sender as the contact form.
const TO = process.env.CONTACT_TO || "jason@rhythmtalent.com";
const FROM = process.env.CONTACT_FROM || "Rhythm Talent <onboarding@resend.dev>";

const RESUME_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function field(form: FormData, name: string, max = 500): string {
  const v = form.get(name);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function fail(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return fail("Invalid request. If your resume is large, try a smaller file.");
  }

  // Bots fill the hidden "website" field; pretend success so they move on.
  if (field(form, "website")) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(req, "apply")) {
    return fail("Too many requests. Please try again in a few minutes.", 429);
  }

  const job = findOpenJob(field(form, "jobSlug", 200));
  if (!job) {
    return fail("This role is no longer accepting applications.", 404);
  }

  const fullName = field(form, "fullName", 200);
  const email = field(form, "email", 320);
  const phone = field(form, "phone", 50);
  const linkedin = field(form, "linkedin", 300);
  const message = field(form, "message", 5000);

  if (!fullName || !email) {
    return fail("Full name and email are required.");
  }
  if (!EMAIL_RE.test(email)) {
    return fail("Please enter a valid email.");
  }

  const resume = form.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return fail("Please attach your resume.");
  }
  const ext = (resume.name.split(".").pop() || "").toLowerCase();
  if (!RESUME_TYPES[ext]) {
    return fail("Please upload your resume as a PDF or Word document.");
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return fail("Your resume is larger than 4 MB. Please upload a smaller file.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return fail("Applications are not configured yet. Please email jason@rhythmtalent.com.", 500);
  }

  const jobUrl = `https://rhythmtalent.com/jobs/${job.slug}`;
  const rows: [string, string][] = [
    ["Role", job.title],
    ["Company", job.company],
    ["Name", fullName],
    ["Email", email],
    ["Phone", phone || "-"],
    ["LinkedIn", linkedin || "-"],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#1a2233;max-width:600px">
      <h2 style="font-family:Georgia,serif;color:#13193a">New application: ${esc(job.title)}</h2>
      <table style="border-collapse:collapse;width:100%;margin:16px 0">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#5b6478;font-size:13px;white-space:nowrap;vertical-align:top">${esc(
                k
              )}</td><td style="padding:6px 0;font-size:14px">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      ${
        message
          ? `<div style="margin-top:8px"><div style="color:#5b6478;font-size:13px;margin-bottom:4px">Note from candidate</div><div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(
              message
            )}</div></div>`
          : ""
      }
      <p style="margin-top:20px;font-size:13px;color:#5b6478">
        Resume attached. Reply to this email to respond to ${esc(fullName)} directly.<br/>
        Job posting: <a href="${esc(jobUrl)}">${esc(jobUrl)}</a>
      </p>
    </div>`;

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (message ? `\n\nNote from candidate:\n${message}` : "") +
    `\n\nResume attached. Reply to this email to respond to the candidate directly.\nJob posting: ${jobUrl}`;

  const safeName = fullName.replace(/[^\p{L}\p{N} .'-]/gu, "").trim() || "Candidate";
  const content = Buffer.from(await resume.arrayBuffer()).toString("base64");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Application: ${job.title} (${fullName})`,
    html,
    text,
    attachments: [
      {
        filename: `${safeName} - Resume.${ext}`,
        content,
        contentType: RESUME_TYPES[ext],
      },
    ],
  });

  if (error) {
    console.error("Resend error:", error);
    return fail(
      "Could not submit your application. Please email your resume to jason@rhythmtalent.com.",
      502
    );
  }

  return NextResponse.json({ ok: true });
}
