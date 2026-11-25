"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Phone, Menu, X, ChevronRight, ShieldCheck } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Associates", href: "#associates" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Sectors", href: "#sectors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-xl shadow-navy-950/50 border-b border-gold-500/20 py-3"
          : "bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Crest */}
          <Link href="/" className="flex items-center space-x-3.5 group text-left">
            <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-gold-400/20 via-navy-900 to-navy-950 border border-gold-500/40 flex items-center justify-center shadow-lg group-hover:border-gold-400 transition-colors">
              <Scale className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold-500 rounded-full border border-navy-950" />
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold tracking-wider text-slate-100 group-hover:text-gold-300 transition-colors">
                MIAN MOHAMMAD HANIF
              </span>
              <span className="block text-xs uppercase tracking-widest text-gold-400 font-medium">
                Law Associates • Est. 1996
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${FIRM_DETAILS.contacts.phone}`}
              className="flex items-center space-x-2 text-xs font-medium text-slate-300 hover:text-gold-400 transition-colors border border-slate-700/60 rounded-full px-3.5 py-1.5 bg-navy-900/40"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{FIRM_DETAILS.contacts.phone}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-navy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 rounded shadow-md hover:shadow-gold-500/20 transition-all duration-300"
            >
              Consultation
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-gold-400 hover:bg-navy-900/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 border-b border-gold-500/20 px-5 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-gold-400 py-1.5 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-2 flex flex-col space-y-3">
              <a
                href={`tel:${FIRM_DETAILS.contacts.phone}`}
                className="flex items-center justify-center space-x-2 text-xs font-medium text-slate-200 border border-slate-700 rounded-lg py-2.5 bg-navy-900/80"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Chambers: {FIRM_DETAILS.contacts.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center text-center py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 rounded-lg shadow-md"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
