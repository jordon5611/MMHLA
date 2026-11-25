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

// Map icon names to Lucide icon components
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

  // Filtered practice areas based on category and search query
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
    <section id="practice-areas" className="py-24 bg-navy-950 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Comprehensive Legal Disciplines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 tracking-tight">
            Key Practice Areas
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Providing expert counsel and protective litigation across 22 major legal specializations under Pakistani jurisprudence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar & Search Input */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search practice areas (e.g. Land Revenue, Settlement, Power, Tax, Trademarks)..."
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-navy-900/90 border border-slate-700/80 focus:border-gold-400 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
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
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gold-500 text-navy-950 font-bold shadow-md shadow-gold-500/20"
                    : "bg-navy-900/80 text-slate-300 hover:text-gold-300 hover:bg-navy-800 border border-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Areas Grid */}
        {filteredPractices.length === 0 ? (
          <div className="text-center py-16 bg-navy-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">
              No practice areas found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Practices");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-gold-400 underline hover:text-gold-300"
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
                  className="bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-slate-800/90 hover:border-gold-500/50 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-gold-500/10 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-navy-950 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-colors">
                        <IconComp className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[11px] font-semibold text-gold-400/90 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-full">
                        {practice.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2">
                      {practice.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {practice.shortDescription}
                    </p>

                    {/* Key Highlights preview */}
                    <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                      {practice.highlights.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300">
                    <span>View Representation Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Practice Detail Modal */}
        {activeModalPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-navy-900 border border-gold-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPractice(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-navy-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                  {activeModalPractice.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                {activeModalPractice.name}
              </h3>

              <div className="prose prose-invert max-w-none mb-6">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeModalPractice.fullDescription}
                </p>
              </div>

              <div className="mb-6 bg-navy-950/70 p-4 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                  Scope of Representation & Advisory
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalPractice.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Advocates admitted to Supreme Court & High Courts of Pakistan
                </div>
                <div className="flex space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalPractice(null)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-navy-800 border border-slate-700"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalPractice(null)}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors text-center"
                  >
                    Inquire On This Matter
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
