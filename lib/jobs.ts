// Open roles shown on /jobs. Each entry gets its own page at /jobs/<slug>
// with an application form that emails the candidate's details and resume
// to SITE.email.
//
// To post a role: add an entry to JOBS (newest first).
// To take a role down: set `closed: true` (or delete the entry).

export type JobSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Job = {
  /** URL-safe id, e.g. "senior-rd-engineer-surgical-robotics". Never reuse one. */
  slug: string;
  title: string;
  /** Hiring company, or a description when the search is confidential. */
  company: string;
  /** True when the company name is withheld (shown as "Confidential"). */
  confidential?: boolean;
  /** Display location, e.g. "San Jose, CA" or "United States". */
  location: string;
  workplace: "On-site" | "Hybrid" | "Remote";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Contract-to-hire";
  /** Free text, e.g. "$180K - $220K + equity". Omit if not shared. */
  compensation?: string;
  /** YYYY-MM-DD */
  datePosted: string;
  /** One or two sentences shown on the listing card and in search results. */
  summary: string;
  sections: JobSection[];
  closed?: boolean;
};

export const JOBS: Job[] = [
  {
    slug: "product-development-engineer-cleveland",
    title: "Product Development Engineer (Senior / Staff)",
    company: "Early-stage MedTech startup",
    confidential: true,
    location: "Cleveland, OH",
    workplace: "On-site",
    employmentType: "Full-time",
    compensation: "Equity included",
    datePosted: "2026-11-23",
    summary:
      "Join an early-stage MedTech startup developing innovative medical technologies to improve healing, prevent infection, and advance patient outcomes, and help shape the engineering organization as it grows.",
    sections: [
      {
        heading: "About the Opportunity",
        paragraphs: [
          "I'm partnering with an early-stage MedTech startup developing innovative medical technologies to improve healing, prevent infection, and advance patient outcomes.",
          "This is a unique opportunity to join at a pivotal stage of growth, where you won't just be developing products; you'll have a hand in shaping the engineering organization and the company's future.",
          "If you're coming from a medical device organization and are looking for greater ownership, greater influence, and the opportunity to build something, this could be a compelling next step.",
        ],
      },
      {
        heading: "What Makes This Opportunity Different",
        bullets: [
          "Work directly with the founders and leadership team",
          "Own product development from concept through commercialization",
          "Have a meaningful voice in technical and product decisions",
          "Lead design controls, V&V, risk management, and design transfer",
          "Help translate early-stage technology into manufacturable medical products",
          "Collaborate across R&D, Quality, Regulatory, Clinical, and Manufacturing",
          "Help establish engineering processes and shape the team as the company scales",
          "Take on increasing technical leadership and responsibility as the organization grows",
          "Participate in the company's equity program",
        ],
      },
      {
        heading: "What They're Looking For",
        bullets: [
          "Ideally 5+ years of medical device product development experience in a regulated environment",
          "Strong experience across design controls, product development, V&V, and/or commercialization",
          "A plus: experience with biomaterials, polymers, wound care, regenerative medicine, or other advanced medical technologies (the team is open to strong candidates with diverse medical device backgrounds)",
          "Hands-on, entrepreneurial, technically curious, and excited by the opportunity to have an outsized impact",
        ],
      },
      {
        heading: "Details",
        bullets: [
          "Location: Cleveland, OH",
          "Full-time, Senior / Staff level",
          "Visa sponsorship available if required",
        ],
      },
    ],
  },
];

// Hosting platforms cap request bodies around 4.5MB, so keep resumes under that.
export const MAX_RESUME_BYTES = 4 * 1024 * 1024;

export function openJobs(): Job[] {
  return JOBS.filter((j) => !j.closed);
}

export function findOpenJob(slug: string): Job | undefined {
  return openJobs().find((j) => j.slug === slug);
}

export function formatPosted(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
