import React from "react";
import Image from "next/image";
import { Scale, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FIRM_DETAILS, PRACTICE_AREAS } from "@/data/firmData";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/40 text-champagne text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo on Warm Ivory badge to preserve original dark charcoal & gold colors */}
            <div className="inline-block bg-ivory rounded px-3.5 py-2 border border-gold/40 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Mian Mohammad Hanif Law Associates Logo"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>

            <div>
              <span className="block font-serif text-base font-bold text-ivory tracking-wide">
                MIAN MOHAMMAD HANIF
              </span>
              <span className="block text-[11px] font-serif uppercase tracking-widest text-gold font-bold">
                Law Associates • Est. 1996
              </span>
            </div>

            <p className="text-champagne/80 text-xs leading-relaxed font-sans">
              Serving individuals, semi-government & government bodies, and commercial enterprises with persistent enthusiasm, integrity, and highest professional dedication for over 28 years.
            </p>

            <div className="pt-2 text-ivory space-y-2 text-xs font-sans">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Lahore Principal Chambers & Sheikhupura Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{FIRM_DETAILS.contacts.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{FIRM_DETAILS.contacts.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-ivory font-bold border-b border-charcoal-700 pb-1.5">
              Navigation
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About The Firm
                </a>
              </li>
              <li>
                <a href="#associates" className="hover:text-gold transition-colors">
                  Our Associates (8)
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-gold transition-colors">
                  22 Practice Disciplines
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-gold transition-colors">
                  Client Sectors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Chambers Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-ivory font-bold border-b border-charcoal-700 pb-1.5">
              Practice Disciplines
            </h4>
            <ul className="space-y-1.5 font-sans">
              {PRACTICE_AREAS.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <a href="#practice-areas" className="hover:text-gold transition-colors line-clamp-1">
                    {pa.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#practice-areas" className="text-gold hover:text-ivory font-medium inline-block pt-1 font-serif text-xs">
                  View all 22 disciplines &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Representations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-ivory font-bold border-b border-charcoal-700 pb-1.5">
              Standing Appointments
            </h4>
            <p className="text-xs text-champagne/80 leading-relaxed font-sans">
              Our advocates proudly serve as legal counsel and advisors to:
            </p>
            <div className="space-y-2 pt-1 font-sans">
              <div className="bg-charcoal-800 p-2.5 rounded border border-charcoal-700 text-ivory text-[11px]">
                Board of Revenue Punjab (BOR) — Settlement
              </div>
              <div className="bg-charcoal-800 p-2.5 rounded border border-charcoal-700 text-ivory text-[11px]">
                Lahore Electric Supply Company (LESCO)
              </div>
              <div className="bg-charcoal-800 p-2.5 rounded border border-charcoal-700 text-ivory text-[11px]">
                Federal Govt. Employees Housing Authority (FGEHA)
              </div>
              <div className="bg-charcoal-800 p-2.5 rounded border border-charcoal-700 text-ivory text-[11px]">
                Legal Advisor, Govt of Pakistan (Ministry of Law)
              </div>
            </div>
          </div>
        </div>

        {/* Bar Council Regulatory Notice */}
        <div className="mt-12 pt-8 border-t border-charcoal-700">
          <div className="bg-charcoal-800 p-4 rounded border border-charcoal-700 text-[11px] leading-relaxed text-champagne/80 font-sans">
            <strong className="text-ivory font-serif block mb-1">
              Bar Council Regulations & Professional Notice:
            </strong>
            The information presented on this website is for general informational and educational purposes regarding Mian Mohammad Hanif Law Associates and does not constitute formal legal advice. Viewing or communicating via this platform does not create an attorney-client relationship until formal engagement is confirmed.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-champagne/70 text-[11px] gap-4 font-sans">
          <div>
            &copy; {new Date().getFullYear()} Mian Mohammad Hanif Law Associates. Traces in 1996. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-ivory">Privacy Disclosures</a>
            <span>•</span>
            <a href="#contact" className="hover:text-ivory">Chambers Terms</a>
            <span>•</span>
            <a
              href="#"
              className="inline-flex items-center space-x-1 text-gold hover:text-ivory font-semibold font-serif uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
