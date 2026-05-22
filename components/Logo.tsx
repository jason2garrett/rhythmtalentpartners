type LogoProps = {
  className?: string;
  /** unique suffix so multiple gradients can coexist on one page */
  id?: string;
};

export function LogoMark({ className, id = "rt" }: LogoProps) {
  const gid = `brand-grad-${id}`;
  const glow = `brand-glow-${id}`;
  const art = `brand-art-${id}`;
  return (
    <svg
      viewBox="0 0 210 72"
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
        <filter id={glow} x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>

        <g
          id={art}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* heartbeat / pulse line (full brand gradient) */}
          <path
            d="M4 50 H60 L66 50 L70 45 L76 49 L85 18 L92 64 L98 50 H126 L132 50 L137 41 L142 58 L147 50 H206"
            stroke={`url(#${gid})`}
            strokeWidth="3"
          />
          {/* left person — cyan */}
          <g stroke="#2ba4e8" strokeWidth="2.5">
            <circle cx="38" cy="20" r="6.5" />
            <path d="M28 50 C28 34 48 34 48 50" />
          </g>
          {/* center person — purple (taller) */}
          <g stroke="#a855e0" strokeWidth="2.5">
            <circle cx="106" cy="16" r="7.5" />
            <path d="M93 50 C93 31 119 31 119 50" />
          </g>
          {/* right person — yellow */}
          <g stroke="#f4bd3a" strokeWidth="2.5">
            <circle cx="168" cy="20" r="6.5" />
            <path d="M158 50 C158 34 178 34 178 50" />
          </g>
        </g>
      </defs>

      {/* soft neon glow, then crisp art on top */}
      <use href={`#${art}`} filter={`url(#${glow})`} opacity="0.75" />
      <use href={`#${art}`} />
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
        <span className="tracking-wide">RHYTHM</span>{" "}
        <span className="text-brand-gradient">Talent Partners</span>
      </span>
    </span>
  );
}
