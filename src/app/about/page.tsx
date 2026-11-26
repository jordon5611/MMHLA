import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import { Scale, Award, BookOpen, ShieldCheck, ArrowRight, Building } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export const metadata: Metadata = {
  title: "About Us | Mian Mohammad Hanif Law Associates (Est. 1996)",
  description:
    "Learn about Mian Mohammad Hanif Law Associates, founded in 1996. Over 28 years of specialized advocacy combining legal, financial, and technical credentials in Pakistan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Mian Mohammad Hanif Law Associates",
    description:
      "Traces in 1996. Dedicated to excellence, integrity, and long-lasting client relationships across Pakistan.",
    url: "https://haniflawassociates.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About The Firm"
        subtitle="Traces in 1996 • Over 28 years of distinguished legal advocacy combining legal, financial, and technical credentials across Pakistan."
        breadcrumb="About Us"
      />

      {/* Main Firm Narrative & Pillars */}
      <AboutSection />

      {/* Founder Spotlight Feature Section */}
      <section className="py-24 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory border-2 border-gold/40 rounded-xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 rounded-2xl bg-charcoal border-2 border-gold flex items-center justify-center font-serif text-5xl font-bold text-gold shadow-lg mb-6">
                  MH
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Mian Mohammad Hanif
                </h3>
                <p className="text-xs font-serif uppercase tracking-widest text-gold font-bold mt-1">
                  Senior Associate & Founder
                </p>
                <div className="mt-4 inline-flex items-center space-x-1.5 px-3.5 py-1 rounded bg-ivory-card border border-champagne text-xs text-charcoal-700 font-medium">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span>28+ Years Specialty in Civil Laws</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-gold font-bold">
                  <Scale className="w-4 h-4 text-gold" />
                  <span>Founder&apos;s Message & Judicial Record</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                  A Legacy of Uncompromising Integrity in Civil Laws
                </h4>

                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-sans">
                  Being senior associate and founder of this association, Mian Mohammad Hanif has vast experience in different fields with primary specialty in Civil Laws, having more than 28 years&apos; experience in the law field. He has served various entities including those from semi-Government, Government sector, and private sector including major commercial banks, industry associations, and multinational corporations.
                </p>

                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-sans">
                  Certain landmark cases conducted by him have been officially reported in the primary Law Journals on orders of the Court, establishing binding judicial precedents across Pakistani civil jurisprudence.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/associates"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 transition-colors shadow-sm"
                  >
                    <span>View All 8 Associates</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded text-xs font-serif uppercase tracking-widest font-bold text-charcoal hover:text-gold border border-charcoal/40 hover:border-gold transition-colors"
                  >
                    <span>Request Legal Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Parallax Callout Banner */}
      <ParallaxBanner />
    </>
  );
}
