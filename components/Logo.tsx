type LogoProps = {
  className?: string;
  /** unique suffix so multiple gradients can coexist on one page */
  id?: string;
};

export function LogoMark({ className, id = "rt" }: LogoProps) {
  const gid = `brand-grad-${id}`;
  return (
    <svg
      viewBox="0 0 200 72"
      className={className}
      role="img"
      aria-label="Rhythm Talent Partners"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2ba4e8" />
          <stop offset="38%" stopColor="#a855e0" />
          <stop offset="70%" stopColor="#f0784a" />
          <stop offset="100%" stopColor="#f4bd3a" />
        </linearGradient>
      </defs>

      {/* heartbeat / pulse baseline */}
      <path
        d="M2 54 H74 l5 0 4 -20 6 34 6 -28 4 14 H198"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* left person — cyan */}
      <g fill="#2ba4e8">
        <circle cx="44" cy="22" r="8" />
        <path d="M32 46 a12 12 0 0 0 24 0 z" />
      </g>

      {/* center person — purple (slightly larger) */}
      <g fill="#a855e0">
        <circle cx="100" cy="19" r="9" />
        <path d="M87 46 a13 13 0 0 0 26 0 z" />
      </g>

      {/* right person — yellow */}
      <g fill="#f4bd3a">
        <circle cx="156" cy="22" r="8" />
        <path d="M144 46 a12 12 0 0 0 24 0 z" />
      </g>
    </svg>
  );
}

export function Logo({
  invert = false,
  id = "rt",
}: {
  invert?: boolean;
  id?: string;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark id={id} className="h-8 w-auto md:h-9" />
      <span
        className={`font-heading text-lg font-semibold tracking-tight ${
          invert ? "text-white" : "text-foreground"
        }`}
      >
        Rhythm Talent <span className="text-brand-gradient">Partners</span>
      </span>
    </span>
  );
}
