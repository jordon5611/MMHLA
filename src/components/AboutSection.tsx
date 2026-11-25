import React from "react";
import { Scale, ShieldCheck, Building2, BookOpen, CheckCircle } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function AboutSection() {
  const pillars = [
    {
      icon: Scale,
      title: "Combined Credentials",
      description:
        "Unique synergy of legal, financial, and technical proficiencies providing comprehensive, end-to-end counsel for intricate corporate and civil matters.",
    },
    {
      icon: ShieldCheck,
      title: "Protective Team of Lawyers",
      description:
        "Building long-lasting relationships with our clients anchored in unwavering trust, strict discretion, mutual respect, and fierce advocacy.",
    },
    {
      icon: Building2,
      title: "Institutional Authority",
      description:
        "Standing counsel for statutory authorities including Board of Revenue Punjab (BOR), LESCO, FGEHA, and Ministry of Law & Justice.",
    },
    {
      icon: BookOpen,
      title: "Reported Judgments",
      description:
        "Senior associates conducting landmark cases officially published in Pakistan's premier Law Journals upon orders of Court.",
    },
  ];

  const highlights = [
    "Traces dating back to 1996 with over 28 years of unbroken courtroom experience",
    "Preeminent specialty in Civil Laws, Settlement, Land Revenue & Colonization",
    "Advocacy before the Supreme Court of Pakistan, High Courts, and Special Statutory Tribunals",
    "Comprehensive contract and legislative drafting for corporations, banks, and government sectors",
    "Regulatory dispute resolution across Power (LESCO/NEPRA), Competition, Tax, and Telecommunications",
  ];

  return (
    <section id="about" className="py-24 bg-ivory-soft border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory text-gold text-xs font-serif uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-gold" />
            <span>Firm Profile & Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Distinguished Heritage, <br />
            <span className="text-gold font-normal italic">Uncompromising Dedication</span>
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs">◆</span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-charcoal">
              Mian Mohammad Hanif Law Associates
            </h3>

            <p className="text-charcoal-700 leading-relaxed text-base sm:text-lg">
              {FIRM_DETAILS.intro}
            </p>

            {/* Quote Box */}
            <div className="bg-ivory border-l-4 border-gold p-6 rounded-r border-y border-r border-champagne shadow-sm">
              <p className="text-charcoal-800 italic font-serif text-base sm:text-lg leading-relaxed">
                &ldquo;We have an Association resolve to be amongst the top professional organizations in Pakistan which have combined legal, financial and technical services. All these combined credentials make us a reliable association. We believe that fighting for our Clients is our greatest reward. We continue to strive for excellence which makes us unique Law Association.&rdquo;
              </p>
              <span className="block mt-3 text-xs font-serif uppercase tracking-wider text-gold font-bold">
                — Association Resolution & Core Philosophy
              </span>
            </div>

            <p className="text-charcoal-700 leading-relaxed">
              Our priority is to develop long-lasting relationships with our clients based on trust and mutual respect, with a protective team of lawyers. We continue to strive for excellence, making our association a trusted counsel for individuals, companies, associations, and statutory authorities.
            </p>

            {/* Highlights List */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-charcoal-800 text-sm">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-5 space-y-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-ivory border border-champagne rounded-lg p-6 hover:border-gold/60 transition-colors shadow-sm group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-ivory transition-colors">
                      <IconComp className="w-6 h-6 text-gold group-hover:text-ivory transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-charcoal-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
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
