import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Mian Mohammad Hanif Law Associates | Advocates & Legal Consultants (Est. 1996)",
  description:
    "Distinguished law firm founded in 1996 in Pakistan by Mian Mohammad Hanif. Specialized in Civil Laws, Constitutional, Power Sector (LESCO), Land Revenue & Settlement (BOR), Corporate, Banking, Criminal, and Supreme Court advocacy.",
  keywords: [
    "Mian Mohammad Hanif Law Associates",
    "Lawyers in Lahore",
    "Supreme Court Advocate Pakistan",
    "High Court Advocate Pakistan",
    "Board of Revenue Punjab Legal Counsel",
    "LESCO Legal Advisor",
    "Land Revenue Lawyers Pakistan",
    "Civil Law Specialty Pakistan",
    "Corporate Law Firm Pakistan",
  ],
  authors: [{ name: "Mian Mohammad Hanif Law Associates" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Mian Mohammad Hanif Law Associates | Advocates & Legal Consultants",
    description:
      "Over 28 years of trusted legal excellence in Pakistan. Combined legal, financial, and technical advisory across 22+ practice areas.",
    type: "website",
    locale: "en_PK",
    images: [{ url: "/images/logo.png", width: 1024, height: 966, alt: "Mian Mohammad Hanif Law Associates Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} scroll-smooth`}>
      <body className="min-h-screen bg-ivory font-sans text-charcoal antialiased selection:bg-gold-500/20 selection:text-charcoal-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
