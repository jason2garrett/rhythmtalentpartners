import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090e20",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2ba4e8" />
              <stop offset="38%" stopColor="#a855e0" />
              <stop offset="70%" stopColor="#f0784a" />
              <stop offset="100%" stopColor="#f4bd3a" />
            </linearGradient>
          </defs>
          <path
            d="M8 36 H22 L26 36 L29 31 L33 35 L38 14 L43 50 L47 36 H56"
            fill="none"
            stroke="url(#g)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
