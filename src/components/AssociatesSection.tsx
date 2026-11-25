"use client";

import React, { useState } from "react";
import { ASSOCIATES, Associate } from "@/data/firmData";
import {
  Scale,
  Award,
  BookOpen,
  Building,
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  MapPin,
} from "lucide-react";

export default function AssociatesSection() {
  const [selectedAssociate, setSelectedAssociate] = useState<Associate | null>(null);

  return (
    <section id="associates" className="py-24 bg-ivory-soft border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory text-gold text-xs font-serif uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-gold" />
            <span>Distinguished Legal Team</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Our Associates & Counsel
          </h2>
          <p className="mt-3 text-charcoal-700 text-base sm:text-lg">
            A protective team of senior advocates admitted to the Supreme Court and High Courts of Pakistan, with specialized standing appointments across statutory bodies and corporate boards.
          </p>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs">◆</span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
        </div>

        {/* Associates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ASSOCIATES.map((advocate) => {
            const isFounder = advocate.id === "mian-mohammad-hanif";
            const isSupremeCourt = advocate.id === "zubair-afzal-rana";

            return (
              <div
                key={advocate.id}
                onClick={() => setSelectedAssociate(advocate)}
                className={`rounded-lg border border-t-2 border-t-gold transition-all duration-300 p-7 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-2xl hover:-translate-y-1 ${
                  isFounder
                    ? "bg-ivory border-gold shadow-md md:col-span-2 lg:col-span-2 ring-1 ring-gold/20"
                    : isSupremeCourt
                    ? "bg-ivory border-gold/60 shadow-md md:col-span-2 lg:col-span-2"
                    : "bg-ivory-card border-champagne hover:border-gold"
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-serif uppercase tracking-wider px-2.5 py-1 rounded bg-ivory border border-gold/40 text-gold font-bold">
                      {advocate.court}
                    </span>
                    {advocate.reportedCases && (
                      <span className="inline-flex items-center space-x-1 text-[11px] text-charcoal-500 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-gold" />
                        <span>Reported Cases</span>
                      </span>
                    )}
                    {advocate.office && (
                      <span className="inline-flex items-center space-x-1 text-[11px] text-charcoal-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span>{advocate.office}</span>
                      </span>
                    )}
                  </div>

                  {/* Header: Initial Crest & Names */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded flex items-center justify-center font-serif text-lg font-bold shrink-0 border ${
                        isFounder
                          ? "bg-ivory border-gold text-gold shadow-sm"
                          : "bg-ivory border-champagne text-charcoal group-hover:border-gold group-hover:text-gold transition-colors"
                      }`}
                    >
                      {advocate.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal group-hover:text-gold transition-colors">
                        {advocate.name}
                      </h3>
                      <p className="text-xs text-gold font-serif font-semibold">
                        {advocate.title}
                      </p>
                    </div>
                  </div>

                  {/* Specialization tag */}
                  {advocate.specialty && (
                    <div className="mb-3 text-xs text-charcoal-700 bg-ivory p-2.5 rounded border border-champagne/80">
                      <span className="text-gold font-bold font-serif uppercase tracking-wider text-[11px]">Specialization: </span>
                      <span className="font-sans">{advocate.specialty}</span>
                    </div>
                  )}

                  {/* Public roles / Standing appointments */}
                  {advocate.publicRoles && (
                    <div className="mb-3 space-y-1">
                      {advocate.publicRoles.map((role, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1.5 text-[11px] text-charcoal-700"
                        >
                          <Building className="w-3 h-3 text-gold shrink-0" />
                          <span className="truncate">{role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Summary snippet */}
                  <p className="text-charcoal-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 font-sans">
                    {advocate.summary}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-champagne/80 flex items-center justify-between text-xs font-serif uppercase tracking-wider font-bold text-gold group-hover:text-gold-700">
                  <span>View Full Credentials</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Advocate Profile */}
        {selectedAssociate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-ivory border border-gold rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedAssociate(null)}
                className="absolute top-5 right-5 p-2 rounded text-charcoal-400 hover:text-charcoal hover:bg-champagne/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-4 mb-5">
                <div className="w-16 h-16 rounded bg-ivory-card border border-gold flex items-center justify-center font-serif text-2xl font-bold text-gold">
                  {selectedAssociate.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                    {selectedAssociate.name}
                  </h3>
                  <p className="text-sm font-serif font-bold text-gold">
                    {selectedAssociate.title} • {selectedAssociate.court}
                  </p>
                </div>
              </div>

              {/* Public roles if present */}
              {selectedAssociate.publicRoles && (
                <div className="mb-5 bg-ivory-card p-4 rounded border border-gold/40">
                  <h4 className="text-xs font-serif uppercase tracking-widest font-bold text-gold mb-2">
                    Official Standing Counsel & Government Appointments
                  </h4>
                  <div className="space-y-1.5">
                    {selectedAssociate.publicRoles.map((role, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-charcoal-800">
                        <Building className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Narrative */}
              <div className="mb-6">
                <h4 className="text-xs font-serif uppercase tracking-widest font-bold text-charcoal-500 mb-2">
                  Professional Experience & Background
                </h4>
                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-sans">
                  {selectedAssociate.summary}
                </p>
              </div>

              {/* Reported cases banner */}
              {selectedAssociate.reportedCases && (
                <div className="mb-6 flex items-center space-x-3 bg-ivory-card p-3 rounded border border-champagne text-xs text-charcoal-700">
                  <BookOpen className="w-5 h-5 text-gold shrink-0" />
                  <span>
                    Judicial Record: Landmark cases argued by this advocate have been officially reported in Pakistan&apos;s authoritative Law Journals upon court directions.
                  </span>
                </div>
              )}

              {/* Practice Areas */}
              <div className="mb-6">
                <h4 className="text-xs font-serif uppercase tracking-widest font-bold text-charcoal-500 mb-2">
                  Core Practice Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedAssociate.practiceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded text-xs bg-ivory-card text-charcoal-800 border border-champagne font-sans"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-champagne">
                <button
                  onClick={() => setSelectedAssociate(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded text-xs font-serif uppercase tracking-wider text-charcoal-700 hover:bg-champagne/40 border border-champagne"
                >
                  Close Profile
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedAssociate(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-serif uppercase tracking-wider font-bold text-ivory bg-gold hover:bg-gold-600 transition-colors text-center shadow-sm"
                >
                  Schedule Chamber Meeting
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
