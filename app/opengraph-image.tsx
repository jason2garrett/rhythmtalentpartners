import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { HERO } from "@/lib/content";

export const alt = "Rhythm Talent Partners: MedTech executive and technical search";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GRADIENT = "linear-gradient(90deg, #2ba4e8 0%, #a855e0 38%, #f0784a 70%, #f4bd3a 100%)";

export default async function OpengraphImage() {
  const svg = await readFile(join(process.cwd(), "public/brand/rhythm-logo-horizontal-white.svg"));
  const logo = `data:image/svg+xml;base64,${svg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#090e20",
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(43,164,232,0.28), transparent 45%), radial-gradient(circle at 45% 40%, rgba(168,85,224,0.2), transparent 45%), radial-gradient(circle at 95% 100%, rgba(240,120,74,0.18), transparent 40%)",
          color: "white",
        }}
      >
        <img src={logo} width={348} height={64} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            {HERO.titleLead}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.15,
              backgroundImage: GRADIENT,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {HERO.titleHighlight}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.72)" }}>
            {`${HERO.eyebrow} · San Francisco Bay Area`}
          </div>
        </div>

        <div style={{ display: "flex", height: 6, width: "100%", borderRadius: 3, backgroundImage: GRADIENT }} />
      </div>
    ),
    size
  );
}
