import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/PageHeader";
import PracticeAreas from "@/components/PracticeAreas";
import ParallaxBanner from "@/components/ParallaxBanner";
import { Scale, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "22 Key Practice Areas | Mian Mohammad Hanif Law Associates",
  description:
    "Explore our 22 core legal practice disciplines in Pakistan: Constitutional Law, Land Revenue, Settlement & Rehabilitation, Power Sector (LESCO), Taxation, Corporate, Criminal, and Trademarks.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "22 Key Practice Areas | Mian Mohammad Hanif Law Associates",
    description:
      "Comprehensive representation from general litigation to high-stakes regulatory and dispute resolutions across Pakistan.",
    url: "https://haniflawassociates.com/practice-areas",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        title="Key Practice Disciplines"
        subtitle="Specialized courtroom advocacy, regulatory compliance, and transactional drafting across 22 primary disciplines under Pakistani law."
        breadcrumb="Practice Areas"
      />

      {/* Interactive Practice Directory with Real-time Search and Category Filters */}
      <PracticeAreas />

      {/* Statutory Framework Overview */}
      <section className="py-20 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory border border-champagne rounded-xl p-8 sm:p-10 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-serif uppercase tracking-widest text-gold font-bold">
                Pakistani Statutory Jurisprudence
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-2">
                Governing Laws & Regulatory Clearances
              </h3>
              <p className="text-charcoal-600 text-xs sm:text-sm mt-2 font-sans">
                Our advocates regularly draft pleadings, conduct trials, and appear before regulatory appellate tribunals governed by:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-charcoal-800 font-sans">
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Constitution of the Islamic Republic of Pakistan 1973</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Punjab Land Revenue Act 1967 & Settlement Rules</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Colonization of Government Lands (Punjab) Act 1912</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>NEPRA Act 1997 & Electricity Distribution Regulations</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Companies Act 2017 & SECP Corporate Regulations</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Income Tax Ordinance 2001 & Sales Tax Act 1990</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Trade Marks Ordinance 2001 & Copyright Ordinance 1962</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Arbitration Act 1940 & Foreign Arbitral Awards Act 2011</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded bg-ivory-card border border-champagne/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Pakistan Penal Code 1860 & Code of Criminal Procedure</span>
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
