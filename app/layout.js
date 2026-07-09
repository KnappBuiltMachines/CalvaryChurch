import "./globals.css";
import { site, social } from "./site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.cchammonton.org"),
  title: {
    default: `${site.name} \u2014 ${site.tagline}`,
    template: `%s \u00B7 ${site.name}`,
  },
  description:
    "A welcoming church family in Hammonton, NJ. Sundays at 9:00 & 10:30am, Wednesdays at 7:00pm. Whoever you are, there's a seat saved for you.",
  keywords: ["Calvary Chapel", "Hammonton church", "Hammonton NJ church", "church near me", "South Jersey church"],
  openGraph: {
    title: `${site.name} \u2014 ${site.tagline}`,
    description: "A welcoming church family in Hammonton, NJ. There's a seat saved for you this Sunday.",
    url: "https://www.cchammonton.org",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://www.cchammonton.org" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: site.name,
  url: "https://www.cchammonton.org",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Hammonton",
    addressRegion: "NJ",
    postalCode: "08037",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.address.lat, longitude: site.address.lng },
  sameAs: [social.youtube, social.instagram, social.facebook, social.twitter],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
