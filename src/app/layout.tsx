import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ASSOCIATES, PRACTICE_AREAS, FIRM_DETAILS } from "@/data/firmData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://haniflawassociates.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mian Mohammad Hanif Law Associates | Advocates & Legal Consultants (Est. 1996)",
    template: "%s | Mian Mohammad Hanif Law Associates",
  },
  description:
    "Preeminent Pakistani law firm founded in 1996 by Mian Mohammad Hanif. Over 28 years of specialized counsel in Civil Laws, Supreme Court advocacy, Board of Revenue Punjab (BOR), LESCO, Corporate, Tax, Land Revenue, and 22+ practice areas.",
  keywords: [
    "Mian Mohammad Hanif Law Associates",
    "Mian Mohammad Hanif lawyer",
    "Lawyers in Lahore",
    "Best corporate law firm Pakistan",
    "Advocate Supreme Court Pakistan",
    "Advocate High Court Lahore",
    "Board of Revenue Punjab Legal Counsel",
    "LESCO Legal Advisor",
    "Settlement and Rehabilitation Laws Pakistan",
    "Colonization of Government Lands Punjab Act",
    "Power Sector Energy Laws Pakistan",
    "Taxation Lawyers Lahore PRA FBR",
    "Trademark Copyright IPO Pakistan Lawyer",
    "Civil Litigation Specialist Lahore",
    "Zubair Afzal Rana Advocate Supreme Court",
    "Legal Advisor Government of Pakistan",
    "Sheikhupura High Court Advocate",
  ],
  authors: [{ name: "Mian Mohammad Hanif Law Associates", url: siteUrl }],
  creator: "Mian Mohammad Hanif Law Associates",
  publisher: "Mian Mohammad Hanif Law Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mian Mohammad Hanif Law Associates | Advocates & Legal Consultants (Est. 1996)",
    description:
      "Over 28 years of distinguished legal advocacy in Pakistan. Combined legal, financial, and technical credentials across 22+ practice disciplines.",
    url: siteUrl,
    siteName: "Mian Mohammad Hanif Law Associates",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 966,
        alt: "Mian Mohammad Hanif Law Associates Official Insignia",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mian Mohammad Hanif Law Associates | Advocates & Legal Consultants",
    description:
      "Established 1996. Specialized advocacy across Civil Laws, Supreme Court, BOR Punjab, LESCO, and 22+ practice areas.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LegalService Structured Data for Google Rich Results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#organization`,
    name: "Mian Mohammad Hanif Law Associates",
    alternateName: ["Hanif Law Associates", "MMHLA"],
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/logo.png`,
    description: FIRM_DETAILS.intro,
    foundingDate: "1996",
    founder: {
      "@type": "Person",
      name: "Mian Mohammad Hanif",
      jobTitle: "Founder & Senior Associate",
      description: "Senior associate with 28+ years experience specializing in Civil Laws with reported cases in Law Journals.",
    },
    telephone: FIRM_DETAILS.contacts.phone,
    email: FIRM_DETAILS.contacts.email,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: FIRM_DETAILS.contacts.principalOffice,
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      {
        "@type": "PostalAddress",
        streetAddress: FIRM_DETAILS.contacts.sheikhupuraOffice,
        addressLocality: "Sheikhupura",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    employee: ASSOCIATES.map((adv) => ({
      "@type": "Person",
      name: adv.name,
      jobTitle: adv.title,
      description: adv.summary,
    })),
    knowsAbout: PRACTICE_AREAS.map((pa) => pa.name),
    slogan: FIRM_DETAILS.motto,
  };

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-ivory font-sans text-charcoal antialiased selection:bg-gold-500/20 selection:text-charcoal-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
