import React from "react";
import { Shield, Target, Award, Users, CheckCircle, Scale, Building2, BookOpen } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function AboutSection() {
  const pillars = [
    {
      icon: Scale,
      title: "Combined Credentials",
      description:
        "Unique integration of legal, financial, and technical proficiencies providing comprehensive 360-degree solutions for complex matters.",
    },
    {
      icon: Shield,
      title: "Protective Legal Team",
      description:
        "Long-lasting client relationships built on profound trust, strict confidentiality, mutual respect, and fierce advocacy.",
    },
    {
      icon: Building2,
      title: "Institutional Counsel",
      description:
        "Standing counsel for statutory giants including Board of Revenue Punjab (BOR), LESCO, FGEHA, and Ministry of Law.",
    },
    {
      icon: BookOpen,
      title: "Reported Judgments",
      description:
        "Senior advocates with landmark decisions reported in Pakistan's primary legal journals upon judicial orders.",
    },
  ];

  const highlights = [
    "Traces dating back to 1996 with over 28 years of uninterrupted legal excellence",
    "Specialized mastery in Civil Laws, Settlement, Land Revenue & Colonization",
    "Representation spanning Supreme Court of Pakistan, High Courts, and Special Tribunals",
    "Full-spectrum legal drafting: statutory enactments, commercial master contracts & joint ventures",
    "Regulatory dispute resolution across Power (NEPRA), Competition, Tax, and Telecommunications",
  ];

  return (
    <section id="about" className="py-24 bg-navy-900/60 relative overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-legal-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>About The Firm</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 tracking-tight">
            Distinguished Heritage, <br />
            <span className="text-gold-gradient">Uncompromising Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Mian Mohammad Hanif Law Associates
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {FIRM_DETAILS.intro}
            </p>

            <div className="bg-navy-950/80 border-l-4 border-gold-400 p-5 rounded-r-xl shadow-lg">
              <p className="text-slate-200 italic font-serif text-base sm:text-lg">
                &ldquo;We have an Association resolve to be amongst the top professional organizations in Pakistan which have combined legal, financial and technical services. All these combined credentials make us reliable. We believe that fighting for our Clients is our greatest reward.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-semibold uppercase tracking-wider text-gold-400">
                — Firm Mission & Philosophy
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Our priority is to develop long-lasting relationships with our clients based on trust, mutual respect, and a vigilant, protective team of lawyers. We continue to strive for excellence, making our association a trusted sanctuary for individuals, statutory corporations, and commercial leaders alike.
            </p>

            {/* Checklist */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-slate-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pillars & Credential Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-navy-950 to-navy-900 border border-slate-800 hover:border-gold-500/40 rounded-xl p-5 sm:p-6 transition-all duration-300 shadow-lg group hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:border-gold-400 transition-colors">
                      <IconComp className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
