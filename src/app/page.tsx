import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ParallaxBanner from "@/components/ParallaxBanner";
import {
  Scale,
  ArrowRight,
  ShieldCheck,
  Building,
  Award,
  BookOpen,
  Phone,
  Landmark,
  Briefcase,
  Users,
} from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function Home() {
  const primaryDisciplines = [
    {
      title: "Constitutional & High Court Litigation",
      description:
        "Writs of Certiorari, Mandamus, Quo Warranto, and Habeas Corpus before the Lahore High Court and Supreme Court of Pakistan.",
      tag: "Litigation",
    },
    {
      title: "Corporate, Commercial & Energy Advisory",
      description:
        "Contract vetting, regulatory compliances, and litigation across NEPRA, LESCO, and corporate statutory authorities.",
      tag: "Corporate",
    },
    {
      title: "Land Revenue, Settlement & Colonization",
      description:
        "Standing legal representation before the Board of Revenue Punjab (BOR), Rehabilitation Commissioner, and Consolidation forums.",
      tag: "Statutory",
    },
    {
      title: "Civil, Banking, Tax & Commercial Arbitration",
      description:
        "Banking recovery, Income Tax appeals, customs disputes, arbitration, and comprehensive contract execution.",
      tag: "Advisory",
    },
  ];

  return (
    <>
      {/* 1. Cinematic Courtroom Hero Banner + Overlapping 3-Pillar Highlight Cards */}
      <Hero />

      {/* 2. Executive Welcome & Firm Heritage Teaser */}
      <section className="py-16 sm:py-20 bg-ivory border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-84 w-full rounded-xl overflow-hidden border-2 border-gold/40 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1200&q=85"
                  alt="Law library and balance scale of justice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-gold font-bold block">
                    Established 1996
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Over 28 Years of Distinguished Courtroom Practice
                  </h4>
                </div>
              </div>
            </div>

            {/* Content Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest">
                <Scale className="w-3.5 h-3.5 text-gold" />
                <span>Firm Overview</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
                Integrity, Experience & <br />
                <span className="text-gold font-normal italic">Uncompromising Advocacy</span>
              </h2>

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base font-sans">
                {FIRM_DETAILS.intro}
              </p>

              <div className="bg-ivory-card border-l-4 border-gold p-4 sm:p-5 rounded-r border-y border-r border-champagne shadow-sm">
                <p className="text-charcoal-800 italic font-serif text-xs sm:text-sm sm:leading-relaxed">
                  &ldquo;We have an Association resolve to be amongst the top professional organizations in Pakistan which have combined legal, financial and technical services. All these combined credentials make us reliable.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 transition-colors shadow-sm group"
                >
                  <span>Read Full Firm History & Heritage</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded text-xs font-serif uppercase tracking-widest font-bold text-gold hover:text-gold-700 border border-gold/60 rounded bg-ivory-card transition-colors"
                >
                  <span>Chamber Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Practice Disciplines Matrix Teaser */}
      <section className="py-16 sm:py-20 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory text-gold text-xs font-serif uppercase tracking-widest mb-3">
              <Scale className="w-3.5 h-3.5 text-gold" />
              <span>Comprehensive Legal Scopes</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal tracking-tight">
              22 Specialized Practice Disciplines
            </h2>
            <p className="mt-2 text-charcoal-700 text-sm sm:text-base">
              Providing protective litigation and regulatory advisory across corporate, civil, revenue, and constitutional forums.
            </p>
            <div className="flex items-center justify-center space-x-3 mt-3">
              <div className="w-16 h-[1px] bg-gold/50" />
              <span className="text-gold text-xs">◆</span>
              <div className="w-16 h-[1px] bg-gold/50" />
            </div>
          </div>

          {/* Compact 4-Quadrant Discipline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {primaryDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="bg-ivory border border-champagne border-t-2 border-t-gold rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-serif uppercase tracking-wider text-gold bg-ivory-card border border-gold/30 px-2 py-0.5 rounded font-semibold inline-block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-base font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-champagne/60">
                  <Link
                    href="/practice-areas"
                    className="inline-flex items-center space-x-1.5 text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700"
                  >
                    <span>View Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link to All 22 Practices */}
          <div className="mt-10 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-charcoal-950 bg-gold hover:bg-gold-400 transition-colors shadow-md group"
            >
              <span>Explore All 22 Practice Disciplines & Statutory Scopes</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Atmospheric Parallax Banner */}
      <ParallaxBanner />

      {/* 5. Senior Advocates & Institutional Mandates Teaser */}
      <section className="py-16 sm:py-20 bg-ivory border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory-card border border-gold/40 rounded-2xl p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold/40 bg-ivory text-gold text-xs font-serif uppercase tracking-widest">
                  <Users className="w-3.5 h-3.5 text-gold" />
                  <span>Senior Advocates & Counsel</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                  A Protective Team of 8 Senior Advocates
                </h3>
                <p className="text-charcoal-700 text-sm leading-relaxed font-sans max-w-2xl">
                  Led by Founder Mian Mohammad Hanif and Advocate Supreme Court Zubair Afzal Rana, our lawyers hold rights of audience before the Supreme Court of Pakistan and the High Courts, with reported judgments in primary legal journals and standing appointments for major state institutions.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/associates"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 transition-colors shadow-sm group"
                  >
                    <span>Meet Our Advocates (8)</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/sectors"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded text-xs font-serif uppercase tracking-widest font-bold text-gold hover:text-gold-700 border border-gold/60 rounded bg-ivory transition-colors"
                  >
                    <span>Review Institutional Appointments</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-ivory rounded-xl p-5 border border-champagne space-y-3">
                <div className="text-xs font-serif uppercase tracking-wider text-charcoal-500 font-bold border-b border-champagne pb-2">
                  Chamber Highlights
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-charcoal-600">Apex Court Audience</span>
                  <span className="font-serif font-bold text-charcoal">Supreme Court</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-charcoal-600">Land Revenue Advisory</span>
                  <span className="font-serif font-bold text-charcoal">BOR Punjab</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-charcoal-600">Power Sector Counsel</span>
                  <span className="font-serif font-bold text-charcoal">LESCO</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-charcoal-600">Federal Govt Advisory</span>
                  <span className="font-serif font-bold text-charcoal">Ministry of Law</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Chamber Consultation Callout */}
      <section className="py-16 sm:py-20 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal text-ivory rounded-2xl p-7 sm:p-12 shadow-2xl border-2 border-gold/40 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-gold font-bold">
                Chambers in Lahore & Sheikhupura
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
                Need Confidential Legal Advice on Your Matter?
              </h3>
              <p className="text-champagne/80 text-sm font-sans">
                Our protective team of lawyers is ready to assist with high-stakes civil disputes, regulatory issues, tax appeals, and contract vetting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-charcoal-950 bg-gold hover:bg-gold-400 transition-colors shadow-lg"
              >
                Schedule Consultation
              </Link>
              <a
                href={`tel:${FIRM_DETAILS.contacts.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory hover:text-gold border border-gold/50 rounded bg-charcoal-900/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>{FIRM_DETAILS.contacts.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
