import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/PageHeader";
import AssociatesSection from "@/components/AssociatesSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import { Scale, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Associates & Advocates | Mian Mohammad Hanif Law Associates",
  description:
    "Meet our team of 8 senior advocates: Mian Mohammad Hanif (Founder), Zubair Afzal Rana (Advocate Supreme Court), and Advocates High Court handling corporate, civil, revenue, and criminal litigation.",
  alternates: {
    canonical: "/associates",
  },
  openGraph: {
    title: "Our Associates & Advocates | Mian Mohammad Hanif Law Associates",
    description:
      "A protective team of lawyers admitted to the Supreme Court and High Courts of Pakistan with reported cases in leading Law Journals.",
    url: "https://haniflawassociates.com/associates",
  },
};

export default function AssociatesPage() {
  return (
    <>
      <PageHeader
        title="Our Associates & Legal Team"
        subtitle="A protective team of senior advocates admitted to the Supreme Court and High Courts of Pakistan, dedicated to fighting for our clients with highest integrity."
        breadcrumb="Associates"
      />

      {/* Main Associates Roster with interactive profiles */}
      <AssociatesSection />

      {/* Bar Admissions & Institutional Standing */}
      <section className="py-20 bg-ivory border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory-card border border-champagne rounded-xl p-8 sm:p-10 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-serif uppercase tracking-widest text-gold font-bold">
                Professional Standing & Credentials
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-2">
                Bar Admissions & Judicial Recognitions
              </h3>
              <p className="text-charcoal-600 text-xs sm:text-sm mt-2 font-sans">
                Our advocates maintain active memberships and rights of audience across Pakistan&apos;s judicial forums:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-ivory p-5 rounded-lg border border-champagne text-center space-y-2">
                <ShieldCheck className="w-6 h-6 text-gold mx-auto" />
                <h4 className="font-serif text-sm font-bold text-charcoal">
                  Supreme Court of Pakistan
                </h4>
                <p className="text-[11px] text-charcoal-600 font-sans">
                  Audience rights before the Apex Court led by Advocate Supreme Court Zubair Afzal Rana.
                </p>
              </div>

              <div className="bg-ivory p-5 rounded-lg border border-champagne text-center space-y-2">
                <Scale className="w-6 h-6 text-gold mx-auto" />
                <h4 className="font-serif text-sm font-bold text-charcoal">
                  High Courts of Pakistan
                </h4>
                <p className="text-[11px] text-charcoal-600 font-sans">
                  Active advocacy before the Lahore High Court and regional benches on constitutional & civil appeals.
                </p>
              </div>

              <div className="bg-ivory p-5 rounded-lg border border-champagne text-center space-y-2">
                <Award className="w-6 h-6 text-gold mx-auto" />
                <h4 className="font-serif text-sm font-bold text-charcoal">
                  Board of Revenue (BOR)
                </h4>
                <p className="text-[11px] text-charcoal-600 font-sans">
                  Standing counsel appointments for Settlement, Rehabilitation, and Land Revenue administration.
                </p>
              </div>

              <div className="bg-ivory p-5 rounded-lg border border-champagne text-center space-y-2">
                <ShieldCheck className="w-6 h-6 text-gold mx-auto" />
                <h4 className="font-serif text-sm font-bold text-charcoal">
                  Govt Legal Advisory
                </h4>
                <p className="text-[11px] text-charcoal-600 font-sans">
                  Official appointments by the Ministry of Law, Justice & Human Rights, Govt of Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Parallax Banner */}
      <ParallaxBanner />
    </>
  );
}
