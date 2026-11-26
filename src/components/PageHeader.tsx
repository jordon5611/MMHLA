import React from "react";
import Link from "next/link";
import { ChevronRight, Scale } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-40 lg:pb-20 bg-charcoal text-ivory border-b border-gold/30 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal to-charcoal-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-champagne/80">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
          <span className="text-gold font-bold">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory tracking-tight">
          {title}
        </h1>

        {/* Traditional Gold Diamond Rule */}
        <div className="flex items-center justify-center space-x-3 py-1">
          <div className="w-16 h-[1px] bg-gold/50" />
          <span className="text-gold text-xs">◆</span>
          <div className="w-16 h-[1px] bg-gold/50" />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-champagne/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
