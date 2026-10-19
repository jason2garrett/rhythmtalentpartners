import { ABOUT, FOCUS_AREAS, SERVICES, SITE } from "@/lib/content";

// schema.org data so search engines can show a proper business listing.
const data = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": "https://rhythmtalent.com/#business",
  name: SITE.name,
  url: "https://rhythmtalent.com",
  logo: "https://rhythmtalent.com/brand/rhythm-logo-square.png",
  image: "https://rhythmtalent.com/opengraph-image",
  description: SITE.tagline,
  email: SITE.email,
  sameAs: [SITE.linkedin],
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "San Francisco Bay Area" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [...SERVICES.map((s) => s.title), ...FOCUS_AREAS],
  founder: {
    "@type": "Person",
    name: ABOUT.name,
    jobTitle: ABOUT.role.split(",")[0],
    image: `https://rhythmtalent.com${ABOUT.photo}`,
    sameAs: [SITE.linkedin],
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
