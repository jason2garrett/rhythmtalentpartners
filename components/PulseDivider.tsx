export function PulseDivider({
  className,
  id = "pulse",
}: {
  className?: string;
  id?: string;
}) {
  const gid = `pulse-grad-${id}`;
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2ba4e8" />
          <stop offset="38%" stopColor="#a855e0" />
          <stop offset="70%" stopColor="#f0784a" />
          <stop offset="100%" stopColor="#f4bd3a" />
        </linearGradient>
      </defs>
      <path
        d="M0 30 H360 l18 0 12 -22 16 40 14 -34 10 16 H720 l18 0 10 -14 12 26 12 -22 8 10 H1200"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
