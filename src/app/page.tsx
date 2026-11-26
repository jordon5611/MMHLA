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
  CheckCircle2,
  BookOpen,
  Phone,
  Landmark,
  MapPin,
  Zap,
} from "lucide-react";
import { PRACTICE_AREAS, ASSOCIATES, FIRM_DETAILS } from "@/data/firmData";

export default function Home() {
  const featuredPractices = PRACTICE_AREAS.slice(0, 6);
  const founder = ASSOCIATES.find((a) => a.id === "mian-mohammad-hanif") || ASSOCIATES[0];
  const supremeCourtAdvocate = ASSOCIATES.find((a) => a.id === "zubair-afzal-rana") || ASSOCIATES[1];

  return (
    <>
      {/* 1. Cinematic Courtroom Hero Banner + Overlapping 3-Pillar Highlight Cards */}
      <Hero />

      {/* 2. Firm Heritage & Overview Preview */}
      <section className="py-24 bg-ivory border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden border-2 border-gold/40 shadow-xl">
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
                    Over 28 Years of Distinguished Practice
                  </h4>
                </div>
              </div>
            </div>

            {/* Content Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest">
                <Scale className="w-3.5 h-3.5 text-gold" />
                <span>Firm Overview</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
                Integrity, Experience & <br />
                <span className="text-gold font-normal italic">Uncompromising Advocacy</span>
              </h2>

              <p className="text-charcoal-700 leading-relaxed text-base font-sans">
                {FIRM_DETAILS.intro}
              </p>

              <div className="bg-ivory-card border-l-4 border-gold p-5 rounded-r border-y border-r border-champagne shadow-sm">
                <p className="text-charcoal-800 italic font-serif text-sm sm:text-base leading-relaxed">
                  &ldquo;We have an Association resolve to be amongst the top professional organizations in Pakistan which have combined legal, financial and technical services. All these combined credentials make us reliable.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 transition-colors shadow-sm group"
                >
                  <span>Read Full Firm History & Heritage</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-gold hover:text-gold-700 border border-gold/60 rounded bg-ivory-card transition-colors"
                >
                  <span>Chamber Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Practice Disciplines Preview (Top 6 Disciplines) */}
      <section className="py-24 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory text-gold text-xs font-serif uppercase tracking-widest mb-3">
              <Scale className="w-3.5 h-3.5 text-gold" />
              <span>Comprehensive Legal Scopes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Featured Practice Disciplines
            </h2>
            <p className="mt-3 text-charcoal-700 text-base sm:text-lg">
              Providing protective litigation and regulatory advisory across 22 primary specializations under Pakistani law.
            </p>
            <div className="flex items-center justify-center space-x-3 mt-4">
              <div className="w-16 h-[1px] bg-gold/50" />
              <span className="text-gold text-xs">◆</span>
              <div className="w-16 h-[1px] bg-gold/50" />
            </div>
          </div>

          {/* Grid of 6 Featured Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPractices.map((practice) => (
              <div
                key={practice.id}
                className="bg-ivory border border-champagne border-t-2 border-t-gold/70 hover:border-gold rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-gold bg-ivory-card border border-gold/30 px-2.5 py-1 rounded font-semibold">
                      {practice.category}
                    </span>
                    <span className="text-xs font-serif text-charcoal-400">
                      Discipline #{practice.id.slice(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                    {practice.name}
                  </h3>

                  <p className="text-charcoal-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 font-sans">
                    {practice.shortDescription}
                  </p>

                  <div className="space-y-1.5 border-t border-champagne/60 pt-3">
                    {practice.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-charcoal-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-champagne/60">
                  <Link
                    href="/practice-areas"
                    className="inline-flex items-center space-x-1.5 text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700"
                  >
                    <span>Read Scope & Relevant Laws</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link to All 22 Practices */}
          <div className="mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded text-xs font-serif uppercase tracking-widest font-bold text-charcoal-950 bg-gold hover:bg-gold-400 transition-colors shadow-lg group"
            >
              <span>Explore All 22 Practice Disciplines & Full Statutory Directory</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Atmospheric Parallax Banner */}
      <ParallaxBanner />

      {/* 5. Senior Advocates & Counsel Spotlight Preview */}
      <section className="py-24 bg-ivory border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest mb-3">
              <Scale className="w-3.5 h-3.5 text-gold" />
              <span>Advocates & Counsel</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Distinguished Legal Team
            </h2>
            <p className="mt-3 text-charcoal-700 text-base sm:text-lg">
              A protective team of 8 advocates admitted to the Supreme Court and High Courts of Pakistan.
            </p>
            <div className="flex items-center justify-center space-x-3 mt-4">
              <div className="w-16 h-[1px] bg-gold/50" />
              <span className="text-gold text-xs">◆</span>
              <div className="w-16 h-[1px] bg-gold/50" />
            </div>
          </div>

          {/* 2 Highlighted Senior Advocates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Founder Card */}
            <div className="bg-ivory border-2 border-gold rounded-xl p-8 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-serif uppercase tracking-wider px-2.5 py-1 rounded bg-ivory border border-gold/40 text-gold font-bold">
                    {founder.court}
                  </span>
                  <span className="inline-flex items-center space-x-1 text-[11px] text-charcoal-500 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-gold" />
                    <span>Reported Cases in Law Journals</span>
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded bg-charcoal text-gold flex items-center justify-center font-serif text-2xl font-bold shadow-sm">
                    MH
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-gold font-serif font-bold">
                      {founder.title} • 28+ Years Experience
                    </p>
                  </div>
                </div>

                <div className="mb-4 text-xs text-charcoal-700 bg-ivory-card p-3 rounded border border-champagne">
                  <span className="text-gold font-bold font-serif uppercase tracking-wider">Specialty: </span>
                  <span>{founder.specialty}</span>
                </div>

                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                  {founder.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-champagne mt-6">
                <Link
                  href="/associates"
                  className="inline-flex items-center space-x-1.5 text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700"
                >
                  <span>View Full Profile & Court Record</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Supreme Court Advocate Card */}
            <div className="bg-ivory border-2 border-gold/60 rounded-xl p-8 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-serif uppercase tracking-wider px-2.5 py-1 rounded bg-ivory border border-gold/40 text-gold font-bold">
                    {supremeCourtAdvocate.court}
                  </span>
                  <span className="inline-flex items-center space-x-1 text-[11px] text-charcoal-500 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-gold" />
                    <span>Reported Cases in Law Journals</span>
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded bg-charcoal text-gold flex items-center justify-center font-serif text-2xl font-bold shadow-sm">
                    ZR
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      {supremeCourtAdvocate.name}
                    </h3>
                    <p className="text-xs text-gold font-serif font-bold">
                      {supremeCourtAdvocate.title}
                    </p>
                  </div>
                </div>

                <div className="mb-4 text-xs text-charcoal-700 bg-ivory-card p-3 rounded border border-champagne">
                  <span className="text-gold font-bold font-serif uppercase tracking-wider">Specialty: </span>
                  <span>{supremeCourtAdvocate.specialty}</span>
                </div>

                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                  {supremeCourtAdvocate.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-champagne mt-6">
                <Link
                  href="/associates"
                  className="inline-flex items-center space-x-1.5 text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700"
                >
                  <span>View Full Profile & Court Record</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Link to view all 8 associates */}
          <div className="text-center">
            <Link
              href="/associates"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 transition-colors shadow-sm group"
            >
              <span>Meet All 8 Advocates & Review Standing Appointments</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Quick Chamber Consultation Callout */}
      <section className="py-20 bg-ivory-soft border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal text-ivory rounded-2xl p-8 sm:p-12 shadow-2xl border-2 border-gold/40 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
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
                className="inline-flex items-center justify-center px-8 py-4 rounded text-xs font-serif uppercase tracking-widest font-bold text-charcoal-950 bg-gold hover:bg-gold-400 transition-colors shadow-lg"
              >
                Schedule Consultation
              </Link>
              <a
                href={`tel:${FIRM_DETAILS.contacts.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory hover:text-gold border border-gold/50 rounded bg-charcoal-900/60 transition-colors"
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
