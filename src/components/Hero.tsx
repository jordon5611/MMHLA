import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Scale, Award, BookOpen, Building, CheckCircle2 } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  return (
    <>
      {/* Main Hero Section with Cinematic Legal Backdrop */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-charcoal text-ivory">
        {/* Background Image with Deep Atmospheric Charcoal Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=85"
            alt="Law library and courtroom columns"
            fill
            priority
            className="object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal/95 to-charcoal-900/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Command & Authority */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Heritage Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-gold/40 bg-charcoal-900/80 text-gold text-xs font-serif uppercase tracking-widest backdrop-blur-sm shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="font-semibold">Traces in 1996 • Over 28 Years of Heritage</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-[1.14] tracking-tight">
                Excellence in Advocacy.
                <span className="block text-gold mt-2 font-normal italic">
                  Dedicated to Justice.
                </span>
              </h1>

              {/* Traditional Gold Diamond Rule */}
              <div className="w-full flex items-center justify-center lg:justify-start space-x-3 py-1">
                <div className="w-24 h-[1px] bg-gold/50" />
                <span className="text-gold text-xs">◆</span>
                <div className="w-16 h-[1px] bg-gold/30" />
              </div>

              {/* Firm Narrative */}
              <p className="text-champagne/90 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                {FIRM_DETAILS.intro}
              </p>

              {/* Ethos Quotation Banner */}
              <div className="border-l-2 border-gold pl-5 py-2.5 text-left bg-charcoal-900/80 border border-charcoal-700/80 rounded-r max-w-2xl backdrop-blur-sm">
                <p className="italic text-ivory font-serif text-sm sm:text-base leading-relaxed">
                  &ldquo;We believe that fighting for our Clients is our greatest reward. We continue to strive for excellence which makes us a unique Law Association.&rdquo;
                </p>
                <span className="block mt-1 text-[11px] font-sans uppercase tracking-widest text-gold font-bold">
                  — Association Resolution & Ethos
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-xs font-serif font-bold tracking-widest uppercase text-charcoal-950 bg-gold hover:bg-gold-400 rounded transition-all shadow-lg hover:shadow-gold/20 group"
                >
                  <span>Request Chamber Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#practice-areas"
                  className="inline-flex items-center justify-center px-7 py-4 text-xs font-serif font-bold tracking-widest uppercase text-ivory hover:text-gold border border-gold/50 hover:border-gold rounded bg-charcoal-900/50 backdrop-blur-sm transition-all"
                >
                  <span>Explore 22+ Practice Areas</span>
                </a>
              </div>

              {/* Institutional Trust Footnote */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-champagne/80 font-medium">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>Supreme Court of Pakistan</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Building className="w-4 h-4 text-gold" />
                  <span>Standing Counsel: BOR & LESCO</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-gold" />
                  <span>Reported Cases in Law Journals</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Crest & Stats Ledger */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <div className="w-full bg-ivory text-charcoal rounded-xl p-5 sm:p-9 shadow-2xl border-2 border-gold/40 relative">
                {/* Official Logo Display */}
                <div className="flex flex-col items-center justify-center pb-6 border-b border-champagne">
                  <div className="relative w-64 sm:w-72 h-auto py-2">
                    <Image
                      src="/images/logo.png"
                      alt="Mian Mohammad Hanif Law Associates Official Insignia"
                      width={480}
                      height={452}
                      priority
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-serif uppercase tracking-widest text-gold font-bold mt-2">
                    Advocates & Legal Consultants
                  </span>
                </div>

                {/* Animated Statistics Ledger */}
                <div className="py-6 grid grid-cols-2 gap-4">
                  <div className="border border-champagne p-3.5 rounded bg-ivory-card text-center">
                    <div className="font-serif text-3xl font-bold text-charcoal">
                      <AnimatedCounter end={1996} duration={1500} />
                    </div>
                    <div className="text-[11px] font-serif uppercase tracking-wider text-charcoal-500 font-semibold mt-0.5">Year Founded</div>
                  </div>
                  <div className="border border-champagne p-3.5 rounded bg-ivory-card text-center">
                    <div className="font-serif text-3xl font-bold text-gold">
                      <AnimatedCounter end={28} suffix="+" duration={1800} />
                    </div>
                    <div className="text-[11px] font-serif uppercase tracking-wider text-charcoal-500 font-semibold mt-0.5">Years Experience</div>
                  </div>
                  <div className="border border-champagne p-3.5 rounded bg-ivory-card text-center">
                    <div className="font-serif text-3xl font-bold text-charcoal">
                      <AnimatedCounter end={22} suffix="+" duration={1800} />
                    </div>
                    <div className="text-[11px] font-serif uppercase tracking-wider text-charcoal-500 font-semibold mt-0.5">Practice Disciplines</div>
                  </div>
                  <div className="border border-champagne p-3.5 rounded bg-ivory-card text-center">
                    <div className="font-serif text-3xl font-bold text-gold">
                      <AnimatedCounter end={8} duration={1400} />
                    </div>
                    <div className="text-[11px] font-serif uppercase tracking-wider text-charcoal-500 font-semibold mt-0.5">Senior Advocates</div>
                  </div>
                </div>

                {/* Standing Appointments List */}
                <div className="space-y-2 pt-2 border-t border-champagne text-xs text-charcoal-700 font-sans">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>Board of Revenue Punjab (BOR) Standing Counsel</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>Lahore Electric Supply Company (LESCO) Standing Counsel</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>Federal Govt. Employees Housing Authority (FGEHA)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>Legal Advisor to Government of Pakistan (Ministry of Law)</span>
                  </div>
                </div>

                {/* Chamber Appointment Link */}
                <div className="mt-6 pt-4 border-t border-champagne">
                  <a
                    href="#contact"
                    className="block w-full py-3.5 px-4 text-center font-serif text-xs uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 rounded transition-colors shadow-sm"
                  >
                    Schedule Chamber Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Pillar Highlight Strip (Overlapping the Hero, just like punjablawassociates.com) */}
      <section className="relative z-20 -mt-12 lg:-mt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-ivory border-2 border-gold/40 hover:border-gold rounded-lg p-7 shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center mb-5">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                Supreme Court Advocacy
              </h3>
              <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans mb-4">
                Senior advocates conducting high-stakes Constitutional writs, Civil revisions, Criminal appeals, and commercial disputes before the apex court and High Courts.
              </p>
              <a href="#associates" className="text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700 inline-flex items-center">
                <span>Meet Our Advocates</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Box 2 */}
            <div className="bg-ivory border-2 border-gold/40 hover:border-gold rounded-lg p-7 shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center mb-5">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                Statutory Counsel Mandates
              </h3>
              <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans mb-4">
                Standing legal counsel for the Board of Revenue Punjab (BOR), LESCO, FGEHA, and official advisor to the Ministry of Law & Justice, Government of Pakistan.
              </p>
              <a href="#sectors" className="text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700 inline-flex items-center">
                <span>View Sectors & Appointments</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Box 3 */}
            <div className="bg-ivory border-2 border-gold/40 hover:border-gold rounded-lg p-7 shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded bg-charcoal text-gold flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                Reported Law Journal Cases
              </h3>
              <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed font-sans mb-4">
                Over 28 years of court judgments reported in leading Law Journals upon judicial directions, reflecting decisive legal precedent and authoritative courtroom advocacy.
              </p>
              <a href="#practice-areas" className="text-xs font-serif uppercase tracking-wider font-bold text-gold hover:text-gold-700 inline-flex items-center">
                <span>Explore Legal Disciplines</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Appointments & Institutional Seals Banner */}
      <section className="bg-ivory-soft py-10 border-y border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-serif uppercase tracking-widest text-charcoal-500 font-bold mb-6">
            Institutional Standing Appointments & Official Legal Representations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
            <div className="bg-ivory border border-champagne px-5 py-3 rounded-lg shadow-sm">
              <span className="block font-serif text-xs sm:text-sm font-bold text-charcoal">
                Board of Revenue Punjab (BOR)
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                Settlement & Rehabilitation
              </span>
            </div>

            <div className="bg-ivory border border-champagne px-5 py-3 rounded-lg shadow-sm">
              <span className="block font-serif text-xs sm:text-sm font-bold text-charcoal">
                Lahore Electric Supply Company
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                LESCO Legal Counsel
              </span>
            </div>

            <div className="bg-ivory border border-champagne px-5 py-3 rounded-lg shadow-sm">
              <span className="block font-serif text-xs sm:text-sm font-bold text-charcoal">
                Government of Pakistan
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                Legal Advisor, Ministry of Law
              </span>
            </div>

            <div className="bg-ivory border border-champagne px-5 py-3 rounded-lg shadow-sm">
              <span className="block font-serif text-xs sm:text-sm font-bold text-charcoal">
                FGEHA
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                Housing Authority Counsel
              </span>
            </div>

            <div className="bg-ivory border border-champagne px-5 py-3 rounded-lg shadow-sm">
              <span className="block font-serif text-xs sm:text-sm font-bold text-charcoal">
                Punjab Small Industries Corp
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                Legal Counsel (PSIC)
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
