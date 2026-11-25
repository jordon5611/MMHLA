import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function ParallaxBanner() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-charcoal text-ivory">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2000&q=85"
          alt="Historic legal law library"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal/90 to-charcoal-950/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-charcoal-900/80 text-gold text-xs font-serif uppercase tracking-widest backdrop-blur-sm">
          <Scale className="w-3.5 h-3.5 text-gold" />
          <span>Multidisciplinary Legal Excellence</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory leading-tight tracking-tight max-w-3xl mx-auto">
          &ldquo;Fighting for our Clients is our{" "}
          <span className="text-gold italic font-normal">Greatest Reward.&rdquo;</span>
        </h2>

        <div className="flex items-center justify-center space-x-3 py-2">
          <div className="w-20 h-[1px] bg-gold/50" />
          <span className="text-gold text-xs">◆</span>
          <div className="w-20 h-[1px] bg-gold/50" />
        </div>

        <p className="text-champagne/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you represent a statutory authority, a multinational corporation, or require high-stakes civil representation before Pakistan&apos;s courts, our senior associates provide uncompromising defense of your rights.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${FIRM_DETAILS.contacts.phone}`}
            className="inline-flex items-center space-x-2 px-8 py-4 text-xs font-serif font-bold uppercase tracking-widest text-charcoal-950 bg-gold hover:bg-gold-400 rounded transition-all shadow-xl"
          >
            <Phone className="w-4 h-4" />
            <span>Call Chambers: {FIRM_DETAILS.contacts.phone}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 text-xs font-serif font-bold uppercase tracking-widest text-ivory hover:text-gold border border-gold/50 hover:border-gold rounded bg-charcoal-900/60 backdrop-blur-sm transition-all"
          >
            <span>Request Legal Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
