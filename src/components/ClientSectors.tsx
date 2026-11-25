import React from "react";
import { CLIENT_SECTORS } from "@/data/firmData";
import {
  Zap,
  MapPin,
  Landmark,
  Banknote,
  Factory,
  Radio,
  Scale,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  MapPin,
  Landmark,
  Banknote,
  Factory,
  Radio,
};

export default function ClientSectors() {
  return (
    <section id="sectors" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Multidisciplinary Footprint</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 tracking-tight">
            Key Sectors & Client Representation
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Providing tailored legal, regulatory, and commercial advisory to statutory authorities, private enterprises, and innovative industry sectors.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_SECTORS.map((sector, idx) => {
            const IconComp = ICON_MAP[sector.icon] || Scale;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-navy-900/80 to-navy-950/90 border border-slate-800 hover:border-gold-500/40 rounded-xl p-6 transition-all duration-300 shadow-lg group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-950 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-colors">
                  <IconComp className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2.5">
                  {sector.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {sector.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                    Representative Entities
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {sector.entities}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 border border-gold-500/30 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-2">
              Looking for Specialized Counsel in Your Sector?
            </h4>
            <p className="text-slate-300 text-sm">
              Our multidisciplinary advocates combine deep technical knowledge of Pakistani statutory bodies with rigorous courtroom litigation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors shadow-lg shrink-0"
          >
            <span>Discuss Your Legal Matter</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
