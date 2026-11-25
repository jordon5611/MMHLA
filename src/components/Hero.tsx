import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Building, ShieldCheck, Scale, Award } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-ivory border-b border-champagne overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Traditional Authority & Heritage */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-gold/40 bg-ivory-card text-gold text-xs font-serif uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-semibold">Established 1996 • 28+ Years of Heritage</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-charcoal leading-[1.18] tracking-tight">
              Excellence in Advocacy.
              <span className="block text-gold mt-2 font-normal italic">
                Dedicated to Justice.
              </span>
            </h1>

            {/* Gold Traditional Divider with Diamond */}
            <div className="w-full flex items-center justify-center lg:justify-start space-x-3 py-1">
              <div className="w-24 h-[1px] bg-gold/50" />
              <span className="text-gold text-xs">◆</span>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>

            {/* Narrative description */}
            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Mian Mohammad Hanif Law Associates provides specialized counsel from civil litigation to regulatory enforcement, public revenue, and legislative drafting. Combining legal, financial, and technical credentials to safeguard valued clients across Pakistan.
            </p>

            {/* Ethos Quotation */}
            <div className="border-l-2 border-gold pl-5 py-2 text-left bg-ivory-card border-y border-r border-champagne/60 rounded-r max-w-2xl">
              <p className="italic text-charcoal-800 font-serif text-sm sm:text-base leading-relaxed">
                &ldquo;We believe that fighting for our Clients is our greatest reward. We continue to strive for excellence which makes us a unique Law Association.&rdquo;
              </p>
              <span className="block mt-1 text-[11px] font-sans uppercase tracking-widest text-gold font-semibold">
                — Firm Ethos & Mission
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#practice-areas"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-serif font-bold tracking-widest uppercase text-ivory bg-gold hover:bg-gold-600 rounded transition-colors shadow-sm group"
              >
                <span>Explore Practice Areas</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#associates"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-serif font-bold tracking-widest uppercase text-charcoal hover:text-ivory bg-transparent hover:bg-charcoal border border-charcoal rounded transition-colors"
              >
                <span>Our Advocates</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-serif font-bold tracking-widest uppercase text-gold hover:text-gold-700 border border-gold/60 rounded bg-ivory-card transition-colors"
              >
                <span>Consultation</span>
              </a>
            </div>

            {/* Institutional Credentials Footnote */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-charcoal-600 font-medium">
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

          {/* Right Column: Official Brand Crest & Credential Ledger */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <div className="w-full bg-ivory-card border border-champagne rounded-lg p-7 sm:p-8 shadow-sm">
              {/* Prominent Official Logo with original proportions */}
              <div className="flex flex-col items-center justify-center pb-6 border-b border-champagne">
                <div className="relative w-56 sm:w-64 h-auto py-2">
                  <Image
                    src="/images/logo.png"
                    alt="Mian Mohammad Hanif Law Associates Official Logo"
                    width={400}
                    height={377}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Statistics Ledger */}
              <div className="py-6 grid grid-cols-2 gap-4">
                <div className="border border-champagne/80 p-3.5 rounded bg-ivory">
                  <div className="font-serif text-2xl font-bold text-charcoal">
                    <AnimatedCounter end={1996} duration={1500} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-charcoal-500 font-medium mt-0.5">Year Founded</div>
                </div>
                <div className="border border-champagne/80 p-3.5 rounded bg-ivory">
                  <div className="font-serif text-2xl font-bold text-gold">
                    <AnimatedCounter end={28} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-charcoal-500 font-medium mt-0.5">Years Experience</div>
                </div>
                <div className="border border-champagne/80 p-3.5 rounded bg-ivory">
                  <div className="font-serif text-2xl font-bold text-charcoal">
                    <AnimatedCounter end={22} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-charcoal-500 font-medium mt-0.5">Practice Disciplines</div>
                </div>
                <div className="border border-champagne/80 p-3.5 rounded bg-ivory">
                  <div className="font-serif text-2xl font-bold text-gold">
                    <AnimatedCounter end={8} duration={1400} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-charcoal-500 font-medium mt-0.5">Senior Advocates</div>
                </div>
              </div>

              {/* Key Institutional Mandates */}
              <div className="space-y-2.5 pt-2 border-t border-champagne text-xs text-charcoal-700">
                <div className="flex items-start space-x-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Board of Revenue Punjab (BOR) Standing Counsel</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Lahore Electric Supply Company (LESCO) Counsel</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Federal Govt. Employees Housing Authority (FGEHA)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gold font-bold">✓</span>
                  <span>Legal Advisor to Government of Pakistan (Ministry of Law)</span>
                </div>
              </div>

              {/* Callout button */}
              <div className="mt-6 pt-4 border-t border-champagne">
                <a
                  href="#contact"
                  className="block w-full py-3 px-4 text-center font-serif text-xs uppercase tracking-widest font-bold text-ivory bg-charcoal hover:bg-charcoal-800 rounded transition-colors"
                >
                  Schedule Chamber Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
