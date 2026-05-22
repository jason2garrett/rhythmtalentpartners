import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Where inquiries are delivered, and the verified sender address.
const TO = process.env.CONTACT_TO || "jason@rhythmtalent.com";
// Until a custom domain is verified in Resend, the shared sandbox sender works.
const FROM = process.env.CONTACT_FROM || "Rhythm Talent <onboarding@resend.dev>";

function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const companyName = (body.companyName || "").trim();
  const fullName = (body.fullName || "").trim();
  const email = (body.email || "").trim();

  if (!companyName || !fullName || !email) {
    return NextResponse.json(
      { error: "Company name, full name, and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const rows: [string, string][] = [
    ["Company", companyName],
    ["Name", fullName],
    ["Email", email],
    ["Company Stage", body.companyStage || "—"],
    ["Device / Technology", body.deviceCategory || "—"],
    ["Engagement Type", body.engagementType || "—"],
    ["Hiring Timeline", body.hiringTimeline || "—"],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#1a2233;max-width:600px">
      <h2 style="font-family:Georgia,serif;color:#13193a">New inquiry from Rhythm Talent Partners</h2>
      <table style="border-collapse:collapse;width:100%;margin:16px 0">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#5b6478;font-size:13px;white-space:nowrap">${esc(
                k
              )}</td><td style="padding:6px 0;font-size:14px">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      ${
        body.message
          ? `<div style="margin-top:8px"><div style="color:#5b6478;font-size:13px;margin-bottom:4px">Additional Context</div><div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(
              body.message
            )}</div></div>`
          : ""
      }
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (body.message ? `\n\nAdditional Context:\n${body.message}` : "");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New inquiry — ${companyName} (${fullName})`,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
