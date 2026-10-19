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

const title = "Rhythm Talent Partners | MedTech Executive & Technical Search";
const description =
  "Boutique executive and technical search for early- and growth-stage medical device, IVD, digital health, and SaMD companies. Based in the San Francisco Bay Area, serving clients nationally.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rhythmtalent.com"),
  title: {
    default: title,
    template: "%s | Rhythm Talent Partners",
  },
  description,
  keywords: [
    "MedTech recruiter",
    "medical device recruiter",
    "MedTech executive search",
    "medical device executive search",
    "IVD recruiting",
    "digital health recruiter",
    "SaMD recruiting",
    "R&D engineering recruiter",
    "quality and regulatory recruiter",
    "Bay Area MedTech recruiter",
    "retained search",
  ],
  authors: [{ name: "Jason Garrett", url: "https://www.linkedin.com/in/jason2garrett" }],
  creator: "Jason Garrett",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Rhythm Talent Partners",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* Browser extensions (e.g. Grammarly) inject attributes on <body> before hydration. */}
      <body suppressHydrationWarning>
        {children}
        <Heartbeat />
      </body>
    </html>
  );
}
