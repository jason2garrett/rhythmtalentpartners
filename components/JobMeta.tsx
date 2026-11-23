import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { formatPosted, type Job } from "@/lib/jobs";

export function JobMeta({
  job,
  invert = false,
}: {
  job: Job;
  invert?: boolean;
}) {
  const chip = invert
    ? "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80"
    : "inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-muted-foreground";
  return (
    <div className="mt-5 flex flex-wrap gap-2 font-body text-xs font-medium">
      <span className={chip}>
        <MapPin size={13} />
        {job.location} · {job.workplace}
      </span>
      <span className={chip}>
        <Briefcase size={13} />
        {job.employmentType}
      </span>
      {job.compensation && <span className={chip}>{job.compensation}</span>}
      <span className={chip}>
        <CalendarDays size={13} />
        Posted {formatPosted(job.datePosted)}
      </span>
    </div>
  );
}
