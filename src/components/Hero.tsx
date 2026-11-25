import React from "react";
import { Scale, Award, Shield, FileCheck, ArrowRight, BookOpen, Building } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-legal-pattern overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-navy-700/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative balance scale watermark */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <Scale className="w-[580px] h-[580px] text-gold-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start space-y-6">
            {/* Heritage Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium shadow-md backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">
                Traces in 1996 • 28+ Years of Legal Heritage
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 leading-[1.15]">
              Excellence in Advocacy.{" "}
              <span className="text-gold-bright block mt-2 sm:mt-3">
                Dedicated to Justice.
              </span>
            </h1>

            {/* Firm Motto & Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Mian Mohammad Hanif Law Associates provides multidisciplinary counsel ranging from general litigation to regulatory enforcement, dispute resolutions, and legislative drafting. Combining legal, financial, and technical credentials to serve our valued clients with unwavering integrity and dedication.
            </p>

            {/* Quotation highlight */}
            <div className="border-l-2 border-gold-400/60 pl-4 py-1 text-left bg-navy-900/40 rounded-r max-w-2xl">
              <p className="italic text-slate-300 text-sm">
                &ldquo;We believe that fighting for our Clients is our greatest reward. We continue to strive for excellence which makes us a unique Law Association.&rdquo;
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#practice-areas"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 rounded-lg shadow-lg hover:shadow-gold-500/20 transition-all duration-300 group"
              >
                <span>Explore 22+ Practice Areas</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#associates"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wider text-slate-200 hover:text-gold-300 bg-navy-900/80 hover:bg-navy-800/80 border border-slate-700/80 hover:border-gold-500/40 rounded-lg shadow-md transition-all duration-300"
              >
                <span>Meet Our Advocates</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wider text-gold-300 hover:text-gold-200 border border-gold-500/30 hover:border-gold-400 rounded-lg bg-navy-950/60 transition-all duration-300"
              >
                <span>Request Consultation</span>
              </a>
            </div>

            {/* Institutional Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-gold-400" />
                <span>Supreme Court of Pakistan</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Building className="w-4 h-4 text-gold-400" />
                <span>Standing Counsel for BOR & LESCO</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>Reported Cases in Law Journals</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Prestige Credentials Card */}
          <div className="lg:col-span-4 w-full">
            <div className="relative bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-gold-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center">
                <Award className="w-4 h-4 text-gold-300" />
              </div>

              <div className="flex items-center space-x-3 pb-5 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-gold-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-serif text-lg font-bold text-slate-100">
                    Firm Credentials
                  </h3>
                  <p className="text-xs text-gold-400 font-medium">
                    Legal • Financial • Technical
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="py-5 grid grid-cols-2 gap-4 text-left">
                <div className="bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="font-serif text-2xl font-bold text-gold-300">1996</div>
                  <div className="text-xs text-slate-400 mt-0.5">Year Founded</div>
                </div>
                <div className="bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="font-serif text-2xl font-bold text-gold-300">28+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Years Experience</div>
                </div>
                <div className="bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="font-serif text-2xl font-bold text-gold-300">22+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Practice Disciplines</div>
                </div>
                <div className="bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="font-serif text-2xl font-bold text-gold-300">8</div>
                  <div className="text-xs text-slate-400 mt-0.5">Distinguished Advocates</div>
                </div>
              </div>

              {/* Core Strength Highlights */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2.5 text-left text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <FileCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>Seniority in Civil, Revenue, Settlement & Colonization Laws</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FileCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>Standing representation for Board of Revenue Punjab (BOR)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FileCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>Counsel for Lahore Electric Supply Company (LESCO) & FGEHA</span>
                </div>
                <div className="flex items-start space-x-2">
                  <FileCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>Legal Advisor to Government of Pakistan (Ministry of Law)</span>
                </div>
              </div>

              {/* Prompt CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="block w-full py-2.5 px-4 text-center text-xs uppercase tracking-wider font-bold text-slate-900 bg-gold-400 hover:bg-gold-300 rounded-lg transition-colors"
                >
                  Schedule A Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
