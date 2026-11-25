import React from "react";
import Link from "next/link";
import { Scale, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { FIRM_DETAILS, PRACTICE_AREAS } from "@/data/firmData";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="block font-serif text-base font-bold text-slate-100">
                  MIAN MOHAMMAD HANIF
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                  Law Associates • Est. 1996
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Serving individuals, semi-government & government bodies, and commercial enterprises with persistent enthusiasm, integrity, and highest professional dedication for over 28 years.
            </p>

            <div className="pt-2 text-slate-300 space-y-1.5 text-xs">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>Lahore Principal Chambers & Sheikhupura Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{FIRM_DETAILS.contacts.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{FIRM_DETAILS.contacts.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  About The Firm
                </a>
              </li>
              <li>
                <a href="#associates" className="hover:text-gold-300 transition-colors">
                  Our Associates (8)
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-gold-300 transition-colors">
                  22 Practice Disciplines
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-gold-300 transition-colors">
                  Client Sectors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">
                  Chambers Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Practice Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Key Practice Disciplines
            </h4>
            <ul className="space-y-1.5">
              {PRACTICE_AREAS.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <a href="#practice-areas" className="hover:text-gold-300 transition-colors line-clamp-1">
                    {pa.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#practice-areas" className="text-gold-400 hover:text-gold-300 font-medium inline-block pt-1">
                  View all 22 disciplines &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Representative Appointments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Official Representations
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our advocates proudly serve as legal counsel and advisors to:
            </p>
            <div className="space-y-2 pt-1 text-slate-300">
              <div className="bg-navy-900/60 p-2 rounded border border-slate-800 text-[11px]">
                Board of Revenue Punjab (BOR)
              </div>
              <div className="bg-navy-900/60 p-2 rounded border border-slate-800 text-[11px]">
                Lahore Electric Supply Company (LESCO)
              </div>
              <div className="bg-navy-900/60 p-2 rounded border border-slate-800 text-[11px]">
                Federal Govt. Employees Housing Authority (FGEHA)
              </div>
              <div className="bg-navy-900/60 p-2 rounded border border-slate-800 text-[11px]">
                Legal Advisor, Govt of Pakistan (Ministry of Law)
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="bg-navy-900/40 p-4 rounded-xl border border-slate-800/60 text-[11px] leading-relaxed text-slate-400">
            <strong className="text-slate-300 block mb-1">
              Bar Council Regulations & Professional Notice:
            </strong>
            The information presented on this website is for educational and general informational purposes regarding Mian Mohammad Hanif Law Associates and does not constitute formal legal advice. Viewing or transmitting information via this platform does not create an attorney-client relationship. Clients should seek individualized counsel regarding specific Pakistani legal matters.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Mian Mohammad Hanif Law Associates. Traces in 1996. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Terms of Counsel</a>
            <span>•</span>
            <a
              href="#"
              className="inline-flex items-center space-x-1 text-gold-400 hover:text-gold-300 font-semibold"
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
