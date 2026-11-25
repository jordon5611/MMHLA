"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-charcoal border-b border-gold/30 ${
        scrolled ? "py-2.5 shadow-xl" : "py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center space-x-3.5 group text-left">
            {/* Logo container with warm ivory backing to preserve original dark-charcoal & gold logo details */}
            <div className="relative h-12 sm:h-14 w-auto bg-ivory rounded px-2.5 py-1 border border-gold/40 flex items-center justify-center shadow-md">
              <Image
                src="/images/logo.png"
                alt="Mian Mohammad Hanif Law Associates Logo"
                width={160}
                height={56}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block">
              <span className="block font-serif text-sm sm:text-base font-bold tracking-wider text-ivory">
                MIAN MOHAMMAD HANIF
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-champagne font-medium">
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
                className="text-xs uppercase font-medium tracking-widest text-champagne hover:text-gold transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact phone & Consultation CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${FIRM_DETAILS.contacts.phone}`}
              className="flex items-center space-x-2 text-xs font-medium text-champagne hover:text-gold transition-colors border border-charcoal-700 rounded px-3 py-1.5 bg-charcoal-800"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{FIRM_DETAILS.contacts.phone}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-serif font-semibold tracking-wider uppercase text-ivory bg-gold hover:bg-gold-600 rounded transition-colors shadow-sm"
            >
              Consultation
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-champagne hover:text-gold hover:bg-charcoal-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal border-b border-gold/30 px-5 pt-4 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-serif tracking-wider uppercase text-ivory hover:text-gold py-2 border-b border-charcoal-800 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gold/60" />
              </a>
            ))}
            <div className="pt-3 flex flex-col space-y-3">
              <a
                href={`tel:${FIRM_DETAILS.contacts.phone}`}
                className="flex items-center justify-center space-x-2 text-xs font-medium text-champagne border border-charcoal-700 rounded py-2.5 bg-charcoal-800"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Chambers: {FIRM_DETAILS.contacts.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center text-center py-2.5 text-xs font-serif font-bold uppercase tracking-wider text-ivory bg-gold hover:bg-gold-600 rounded shadow-sm"
              >
                Request Legal Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
