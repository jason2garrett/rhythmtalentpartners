// Helpers shared by the email-sending API routes.

export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/**
 * Best-effort per-IP throttle. Serverless instances don't share memory,
 * so this only slows down bursts hitting the same instance.
 * Returns true when the request should be rejected.
 */
export function isRateLimited(req: Request, bucket: string): boolean {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  hits.set(key, [...recent, now]);
  return false;
}
