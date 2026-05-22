import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Heartbeat } from "@/components/Heartbeat";

const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-body",
  weight: "300 700",
  display: "swap",
});

const playfair = localFont({
  src: "./fonts/PlayfairDisplay.woff2",
  variable: "--font-heading",
  weight: "400 700",
  display: "swap",
});

const description =
  "Premium boutique search firm specialized in high-impact executive and technical recruitment for growth-stage MedTech companies.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rhythmtalent.com"),
  title: "Rhythm Talent Partners",
  description,
  openGraph: {
    title: "Rhythm Talent Partners",
    description,
    siteName: "Rhythm Talent Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm Talent Partners",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Heartbeat />
      </body>
    </html>
  );
}
