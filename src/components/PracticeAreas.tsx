"use client";

import React, { useState, useMemo } from "react";
import {
  PRACTICE_AREAS,
  PRACTICE_CATEGORIES,
  PracticeArea,
} from "@/data/firmData";
import {
  Landmark,
  MapPin,
  FileCheck,
  Home,
  Zap,
  Scale,
  Receipt,
  Leaf,
  Globe,
  Award,
  FileText,
  Gavel,
  Plane,
  AlertOctagon,
  Briefcase,
  ShieldCheck,
  Building2,
  ShieldAlert,
  Users,
  Cpu,
  Key,
  Building,
  Search,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Landmark,
  MapPin,
  FileCheck,
  Home,
  Zap,
  Scale,
  Receipt,
  Leaf,
  Globe,
  Award,
  FileText,
  Gavel,
  Plane,
  AlertOctagon,
  Briefcase,
  ShieldCheck,
  Building2,
  ShieldAlert,
  Users,
  Cpu,
  Key,
  Building,
};

export default function PracticeAreas() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Practices");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPractice, setActiveModalPractice] = useState<PracticeArea | null>(null);

  const filteredPractices = useMemo(() => {
    return PRACTICE_AREAS.filter((area) => {
      const matchesCategory =
        selectedCategory === "All Practices" || area.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        area.name.toLowerCase().includes(q) ||
        area.shortDescription.toLowerCase().includes(q) ||
        area.highlights.some((h) => h.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="practice-areas" className="py-24 bg-ivory border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-gold" />
            <span>Comprehensive Legal Disciplines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Key Practice Areas
          </h2>
          <p className="mt-3 text-charcoal-700 text-base sm:text-lg">
            Providing expert counsel and protective litigation across 22 major legal specializations under Pakistani jurisprudence.
          </p>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs">◆</span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 space-y-4">
          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 22 practice areas (e.g. Land Revenue, Settlement, Power, Tax)..."
              className="w-full pl-12 pr-10 py-3 rounded-lg bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal placeholder-charcoal-400 focus:outline-none shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {PRACTICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-xs font-serif tracking-wider uppercase transition-colors ${
                  selectedCategory === category
                    ? "bg-gold text-ivory font-bold shadow-sm"
                    : "bg-ivory-card text-charcoal-700 hover:text-gold hover:border-gold border border-champagne"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Areas Grid */}
        {filteredPractices.length === 0 ? (
          <div className="text-center py-16 bg-ivory-card rounded-lg border border-champagne">
            <p className="text-charcoal-600 text-base">
              No practice areas found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Practices");
              }}
              className="mt-4 px-4 py-2 text-xs font-serif uppercase tracking-wider text-gold font-bold underline hover:text-gold-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPractices.map((practice) => {
              const IconComp = ICON_MAP[practice.icon] || Scale;
              return (
                <div
                  key={practice.id}
                  onClick={() => setActiveModalPractice(practice)}
                  className="bg-ivory-card border border-champagne border-t-2 border-t-gold/70 hover:border-gold rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1 relative"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-serif uppercase tracking-wider text-gold bg-ivory border border-gold/30 px-2.5 py-1 rounded font-semibold">
                        {practice.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-gold transition-colors mb-2.5">
                      {practice.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-charcoal-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {practice.shortDescription}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 border-t border-champagne/60 pt-3">
                      {practice.highlights.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-charcoal-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-5 pt-3 border-t border-champagne/60 flex items-center justify-between text-xs font-serif uppercase tracking-wider font-bold text-gold group-hover:text-gold-700">
                    <span>View Representation Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Practice Detail Modal */}
        {activeModalPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-ivory border border-gold rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPractice(null)}
                className="absolute top-5 right-5 p-2 rounded text-charcoal-400 hover:text-charcoal hover:bg-champagne/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs font-serif uppercase tracking-wider text-gold bg-ivory-card border border-gold/40 px-3 py-1 rounded">
                  {activeModalPractice.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                {activeModalPractice.name}
              </h3>

              <div className="mb-6">
                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-sans">
                  {activeModalPractice.fullDescription}
                </p>
              </div>

              <div className="mb-6 bg-ivory-card p-5 rounded border border-champagne">
                <h4 className="text-xs font-serif uppercase tracking-widest font-bold text-gold mb-3">
                  Scope of Legal Representation & Advisory
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalPractice.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-charcoal-800">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-champagne">
                <div className="text-xs text-charcoal-500 font-sans">
                  Advocates admitted to Supreme Court & High Courts of Pakistan
                </div>
                <div className="flex space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalPractice(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded text-xs font-serif uppercase tracking-wider text-charcoal-700 hover:bg-champagne/40 border border-champagne"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalPractice(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded text-xs font-serif uppercase tracking-wider font-bold text-ivory bg-gold hover:bg-gold-600 transition-colors text-center shadow-sm"
                  >
                    Inquire On Matter
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
