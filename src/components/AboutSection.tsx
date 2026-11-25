import React from "react";
import Image from "next/image";
import { Scale, ShieldCheck, Building2, BookOpen, CheckCircle, Award } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function AboutSection() {
  const pillars = [
    {
      icon: Scale,
      title: "Combined Credentials",
      description:
        "Unique synergy of legal, financial, and technical proficiencies providing comprehensive 360-degree solutions for intricate corporate, revenue, and civil matters.",
    },
    {
      icon: ShieldCheck,
      title: "Protective Team of Lawyers",
      description:
        "Developing long-lasting relationships with our clients anchored in profound confidentiality, mutual respect, and dedicated courtroom advocacy.",
    },
    {
      icon: Building2,
      title: "Institutional Authority",
      description:
        "Standing counsel appointments for Board of Revenue Punjab (BOR), LESCO, FGEHA, and official advisory to the Ministry of Law, Government of Pakistan.",
    },
    {
      icon: BookOpen,
      title: "Reported Judgments",
      description:
        "Senior advocates with landmark decisions reported in Pakistan's primary legal journals upon judicial orders of the High Court and Supreme Court.",
    },
  ];

  const highlights = [
    "Traces dating back to 1996 with over 28 years of unbroken courtroom experience",
    "Specialized mastery in Civil Laws, Settlement, Land Revenue & Colonization",
    "Representation spanning the Supreme Court of Pakistan, High Courts, and Special Statutory Tribunals",
    "Full-spectrum contract and legislative drafting for corporations, banks, and government sectors",
    "Regulatory dispute resolution across Power (LESCO/NEPRA), Competition, Tax, and Telecommunications",
  ];

  return (
    <section id="about" className="py-24 lg:py-28 bg-ivory border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest mb-3">
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

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Visual Frame */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              Mian Mohammad Hanif Law Associates
            </h3>

            <p className="text-charcoal-700 leading-relaxed text-base sm:text-lg font-sans">
              {FIRM_DETAILS.intro}
            </p>

            {/* Editorial Image Frame with Founder Badge */}
            <div className="relative rounded-xl overflow-hidden border-2 border-gold/40 shadow-xl my-6">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1200&q=85"
                  alt="Law books, classical legal gavel, and scale of justice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur-sm p-4 rounded-lg border border-gold/50 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal">
                    Mian Mohammad Hanif
                  </h4>
                  <p className="text-[11px] font-serif text-gold font-bold">
                    Founder & Senior Associate • 28+ Years Civil Law Specialist
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-semibold block">
                    Precedent Record
                  </span>
                  <span className="text-xs font-serif font-bold text-charcoal">
                    Reported in Law Journals
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-ivory-card border-l-4 border-gold p-6 rounded-r border-y border-r border-champagne shadow-sm">
              <p className="text-charcoal-800 italic font-serif text-base sm:text-lg leading-relaxed">
                &ldquo;We have an Association resolve to be amongst the top professional organizations in Pakistan which have combined legal, financial and technical services. All these combined credentials make us a reliable association. We believe that fighting for our Clients is our greatest reward. We continue to strive for excellence which makes us unique Law Association.&rdquo;
              </p>
              <span className="block mt-3 text-xs font-serif uppercase tracking-wider text-gold font-bold">
                — Association Resolution & Core Philosophy
              </span>
            </div>

            <p className="text-charcoal-700 leading-relaxed font-sans">
              Our priority is to develop long-lasting relationships with our clients based on trust and mutual respect, with a protective team of lawyers. We continue to strive for excellence, making our association a trusted counsel for individuals, companies, associations, and statutory authorities.
            </p>

            {/* Highlights List */}
            <div className="pt-2 space-y-3 font-sans">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-charcoal-800 text-sm">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillars & Statistics Ledger */}
          <div className="lg:col-span-5 space-y-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-ivory-card border border-champagne hover:border-gold rounded-lg p-6 transition-all duration-200 shadow-sm group hover:-translate-y-0.5"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-charcoal-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Direct Consultation Box in Sidebar */}
            <div className="bg-charcoal text-ivory rounded-lg p-6 border-2 border-gold/40 shadow-lg text-center space-y-3">
              <Award className="w-8 h-8 text-gold mx-auto" />
              <h4 className="font-serif text-lg font-bold text-ivory">
                28+ Years of Legal Heritage
              </h4>
              <p className="text-champagne/80 text-xs font-sans">
                Advising semi-government, government bodies, commercial banks, and private sector enterprises since 1996.
              </p>
              <a
                href="#contact"
                className="inline-block w-full py-2.5 text-xs font-serif uppercase tracking-widest font-bold text-charcoal bg-gold hover:bg-gold-400 rounded transition-colors"
              >
                Schedule A Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
