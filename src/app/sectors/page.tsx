import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/PageHeader";
import ClientSectors from "@/components/ClientSectors";
import ParallaxBanner from "@/components/ParallaxBanner";
import { Building2, Zap, MapPin, Landmark, Banknote, Factory, Radio, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Key Client Sectors & Public Bodies | Mian Mohammad Hanif Law Associates",
  description:
    "Providing specialized legal counsel to statutory authorities and enterprises: Board of Revenue Punjab (BOR), LESCO, FGEHA, Ministry of Law, Banking, and Small Industries.",
  alternates: {
    canonical: "/sectors",
  },
  openGraph: {
    title: "Key Client Sectors & Public Bodies | Mian Mohammad Hanif Law Associates",
    description:
      "Combined legal, financial, and technical credentials serving Pakistan's key energy, revenue, financial, and industrial sectors.",
    url: "https://haniflawassociates.com/sectors",
  },
};

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        title="Key Sectors & Client Footprint"
        subtitle="Advising statutory authorities, government ministries, financial institutions, and innovative commercial sectors across Pakistan."
        breadcrumb="Client Sectors"
      />

      {/* Main Sectors Showcase */}
      <ClientSectors />

      {/* Standing Institutional Mandates Deep Dive */}
      <section className="py-20 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-serif uppercase tracking-widest text-gold font-bold">
              Institutional Footprint
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-2">
              Standing Counsel & Advisory Appointments
            </h3>
            <p className="text-charcoal-600 text-xs sm:text-sm mt-2 font-sans">
              Our advocates regularly represent statutory authorities and government entities before the High Court and Supreme Court of Pakistan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LESCO */}
            <div className="bg-ivory border-2 border-gold/40 rounded-xl p-7 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Lahore Electric Supply Company (LESCO)
                  </h4>
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold block mb-2">
                    Official Legal Counsel
                  </span>
                  <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Represented LESCO before judicial forums and regulatory authorities on strategic tariff structures, electricity theft prosecutions, grid infrastructure agreements, and contractual enforcement.
                  </p>
                </div>
              </div>
            </div>

            {/* BOR Punjab */}
            <div className="bg-ivory border-2 border-gold/40 rounded-xl p-7 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Board of Revenue Punjab (BOR)
                  </h4>
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold block mb-2">
                    Legal Counsel for Settlement & Rehabilitation
                  </span>
                  <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Designated standing counsel for the Settlement & Rehabilitation Wing, resolving complex historical land allotments, evacuee property claims, and state land proprietary rights.
                  </p>
                </div>
              </div>
            </div>

            {/* FGEHA */}
            <div className="bg-ivory border-2 border-gold/40 rounded-xl p-7 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center shrink-0">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Federal Govt. Employees Housing Authority (FGEHA)
                  </h4>
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold block mb-2">
                    Standing Legal Counsel
                  </span>
                  <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Legal representation for the Federal Government Employees Housing Authority regarding master residential scheme clearances, land acquisitions, and contractor dispute adjudications.
                  </p>
                </div>
              </div>
            </div>

            {/* Ministry of Law */}
            <div className="bg-ivory border-2 border-gold/40 rounded-xl p-7 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Government of Pakistan (Ministry of Law)
                  </h4>
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold block mb-2">
                    Legal Advisor Duly Appointed
                  </span>
                  <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Advising the Ministry of Law, Justice & Human Rights on legislative review, statutory rule interpretation, and defending federal authorities in constitutional review petitions.
                  </p>
                </div>
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
