import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { Building, MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export const metadata: Metadata = {
  title: "Contact Chambers & Consultation | Mian Mohammad Hanif Law Associates",
  description:
    "Schedule a confidential legal consultation with our senior advocates. Offices in Lahore and Sheikhupura, Punjab, Pakistan. Telephone: +92 42 37350000.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Chambers & Consultation | Mian Mohammad Hanif Law Associates",
    description:
      "Connect directly with our senior advocates. All legal inquiries are treated with utmost confidentiality under attorney-client privilege.",
    url: "https://haniflawassociates.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Chambers & Legal Consultation"
        subtitle="Connect directly with our senior advocates. Every legal matter is reviewed with utmost discretion, professionalism, and prompt attention."
        breadcrumb="Contact Us"
      />

      {/* Main Interactive Contact & Intake Section */}
      <ContactSection />

      {/* Multi-Chamber Directory & Direct Assistance */}
      <section className="py-20 bg-ivory border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lahore Principal Chambers */}
            <div className="bg-ivory-card border-2 border-gold/40 rounded-xl p-8 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded bg-charcoal text-gold flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Lahore Principal Chambers
                  </h3>
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold">
                    Primary Office
                  </span>
                </div>
              </div>

              <p className="text-charcoal-600 text-xs sm:text-sm font-sans leading-relaxed">
                {FIRM_DETAILS.contacts.principalOffice}
              </p>

              <div className="pt-2 space-y-2 text-xs font-sans text-charcoal-700">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href={`tel:${FIRM_DETAILS.contacts.phone}`} className="hover:text-gold transition-colors">
                    {FIRM_DETAILS.contacts.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <a href={`mailto:${FIRM_DETAILS.contacts.email}`} className="hover:text-gold transition-colors">
                    {FIRM_DETAILS.contacts.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span>{FIRM_DETAILS.contacts.timing}</span>
                </div>
              </div>
            </div>

            {/* Sheikhupura Regional Office */}
            <div className="bg-ivory-card border-2 border-gold/40 rounded-xl p-8 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded bg-charcoal text-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Sheikhupura Chambers
                  </h3>
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold">
                    Regional Office
                  </span>
                </div>
              </div>

              <p className="text-charcoal-600 text-xs sm:text-sm font-sans leading-relaxed">
                {FIRM_DETAILS.contacts.sheikhupuraOffice}
              </p>

              <div className="pt-2 space-y-2 text-xs font-sans text-charcoal-700">
                <div className="text-gold font-semibold">
                  Resident Counsel: Advocate High Court Zunnurain Ahmad
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>Direct Court Liaison & Conveyancing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span>Monday – Saturday: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
