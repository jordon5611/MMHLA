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
    <section id="sectors" className="py-24 bg-ivory border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-gold" />
            <span>Multidisciplinary Footprint</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Key Sectors & Client Representation
          </h2>
          <p className="mt-3 text-charcoal-700 text-base sm:text-lg">
            Providing tailored legal, regulatory, and commercial advisory to statutory authorities, private corporations, and innovative industry sectors across Pakistan.
          </p>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs">◆</span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_SECTORS.map((sector, idx) => {
            const IconComp = ICON_MAP[sector.icon] || Scale;
            return (
              <div
                key={idx}
                className="bg-ivory-card border border-champagne border-t-2 border-t-gold/70 hover:border-gold rounded-lg p-7 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-charcoal transition-colors shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-gold transition-colors mb-2.5">
                  {sector.title}
                </h3>

                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                  {sector.description}
                </p>

                <div className="pt-3 border-t border-champagne/70">
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold font-bold block mb-1">
                    Representative Entities
                  </span>
                  <span className="text-xs text-charcoal-700 font-medium font-sans">
                    {sector.entities}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Traditional Consultation Callout */}
        <div className="mt-14 bg-ivory-card border border-gold rounded-lg p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
              Seeking Specialized Counsel in Your Sector?
            </h4>
            <p className="text-charcoal-600 text-sm font-sans">
              Our multidisciplinary advocates combine deep technical insight with over 28 years of rigorous courtroom advocacy.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-gold hover:bg-gold-600 transition-colors shadow-sm shrink-0"
          >
            <span>Discuss Legal Matter</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
