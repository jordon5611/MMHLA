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
  Shield,
  Briefcase,
  MapPin,
} from "lucide-react";

export default function AssociatesSection() {
  const [selectedAssociate, setSelectedAssociate] = useState<Associate | null>(null);

  return (
    <section id="associates" className="py-24 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Distinguished Legal Team</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 tracking-tight">
            Our Associates & Counsel
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A protective team of senior advocates admitted to the Supreme Court and High Courts of Pakistan, with specialized appointments across government statutory boards and enterprise counsel.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
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
                className={`rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 shadow-xl ${
                  isFounder
                    ? "bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 border-gold-500/60 shadow-gold-500/10 hover:border-gold-400 md:col-span-2 lg:col-span-2"
                    : isSupremeCourt
                    ? "bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 border-gold-500/40 hover:border-gold-400 md:col-span-2 lg:col-span-2"
                    : "bg-gradient-to-b from-navy-950/90 to-navy-900/90 border-slate-800 hover:border-gold-500/40"
                }`}
              >
                <div>
                  {/* Top Bar / Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                      {advocate.court}
                    </span>
                    {advocate.reportedCases && (
                      <span className="inline-flex items-center space-x-1 text-[11px] text-slate-400">
                        <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                        <span>Reported Cases</span>
                      </span>
                    )}
                    {advocate.office && (
                      <span className="inline-flex items-center space-x-1 text-[11px] text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-gold-400" />
                        <span>{advocate.office}</span>
                      </span>
                    )}
                  </div>

                  {/* Avatar / Crest representation */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center font-serif text-lg font-bold border shrink-0 transition-transform group-hover:scale-105 ${
                        isFounder
                          ? "bg-gold-500/20 text-gold-300 border-gold-400/80 shadow-md"
                          : "bg-navy-900 text-gold-400 border-slate-700 group-hover:border-gold-400"
                      }`}
                    >
                      {advocate.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                        {advocate.name}
                      </h3>
                      <p className="text-xs text-gold-400/90 font-medium">
                        {advocate.title}
                      </p>
                    </div>
                  </div>

                  {/* Specialty line */}
                  {advocate.specialty && (
                    <div className="mb-3 text-xs text-slate-300 font-medium bg-navy-900/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-gold-400 font-semibold">Specialization: </span>
                      {advocate.specialty}
                    </div>
                  )}

                  {/* Public roles badges */}
                  {advocate.publicRoles && (
                    <div className="mb-3 space-y-1">
                      {advocate.publicRoles.map((role, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1.5 text-[11px] text-slate-300"
                        >
                          <Building className="w-3 h-3 text-gold-400 shrink-0" />
                          <span className="truncate">{role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Short Summary */}
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {advocate.summary}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300">
                  <span>View Full Profile & Experience</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Advocate Detail Modal */}
        {selectedAssociate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-navy-900 border border-gold-500/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedAssociate(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-navy-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-400 flex items-center justify-center font-serif text-2xl font-bold text-gold-300">
                  {selectedAssociate.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
                    {selectedAssociate.name}
                  </h3>
                  <p className="text-sm text-gold-400 font-medium">
                    {selectedAssociate.title} • {selectedAssociate.court}
                  </p>
                </div>
              </div>

              {/* Public roles / Standing counsel appointments */}
              {selectedAssociate.publicRoles && (
                <div className="mb-5 bg-navy-950/80 p-4 rounded-xl border border-gold-500/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-2.5">
                    Official Standing Counsel & Government Roles
                  </h4>
                  <div className="space-y-1.5">
                    {selectedAssociate.publicRoles.map((role, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200">
                        <Building className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full narrative */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Professional Experience & Credentials
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedAssociate.summary}
                </p>
              </div>

              {/* Reported cases banner if present */}
              {selectedAssociate.reportedCases && (
                <div className="mb-6 flex items-center space-x-3 bg-navy-950/70 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
                  <BookOpen className="w-5 h-5 text-gold-400 shrink-0" />
                  <span>
                    Judicial Record: Landmark cases argued by this advocate have been officially published in Pakistan&apos;s authoritative Law Journals upon court orders.
                  </span>
                </div>
              )}

              {/* Practice Areas Covered */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Practice Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedAssociate.practiceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs bg-navy-950 text-slate-200 border border-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedAssociate(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-navy-800 border border-slate-700"
                >
                  Close Profile
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedAssociate(null)}
                  className="w-full sm:w-auto px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-300 transition-colors text-center"
                >
                  Schedule Consultation with Counsel
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
