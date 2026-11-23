import type { MetadataRoute } from "next";
import { openJobs } from "@/lib/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rhythmtalent.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://rhythmtalent.com/jobs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...openJobs().map((job) => ({
      url: `https://rhythmtalent.com/jobs/${job.slug}`,
      lastModified: new Date(`${job.datePosted}T12:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
