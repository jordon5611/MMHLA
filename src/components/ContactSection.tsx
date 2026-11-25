"use client";

import React, { useState } from "react";
import { FIRM_DETAILS, PRACTICE_AREAS } from "@/data/firmData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle,
  MessageSquare,
  Building,
  Scale,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    office: "Principal Chambers, Lahore",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-ivory-soft border-b border-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold/40 bg-ivory text-gold text-xs font-serif uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-gold" />
            <span>Consultation & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Schedule a Confidential Consultation
          </h2>
          <p className="mt-3 text-charcoal-700 text-base sm:text-lg">
            Connect directly with our senior advocates. Every legal matter is reviewed with utmost discretion, professionalism, and prompt attention.
          </p>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="text-gold text-xs">◆</span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Chambers & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ivory border border-champagne rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-6 flex items-center space-x-2">
                <Building className="w-5 h-5 text-gold" />
                <span>Chambers & Direct Channels</span>
              </h3>

              <div className="space-y-5 text-sm font-sans">
                {/* Principal Office */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal font-serif">Principal Chambers</h4>
                    <p className="text-charcoal-600 text-xs mt-0.5">
                      {FIRM_DETAILS.contacts.principalOffice}
                    </p>
                  </div>
                </div>

                {/* Sheikhupura Office */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal font-serif">Sheikhupura Office</h4>
                    <p className="text-charcoal-600 text-xs mt-0.5">
                      {FIRM_DETAILS.contacts.sheikhupuraOffice}
                    </p>
                    <span className="text-[11px] text-gold font-medium">
                      Advocate High Court Zunnurain Ahmad
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal font-serif">Telephone Lines</h4>
                    <p className="text-charcoal-700 text-xs mt-0.5">
                      <a href={`tel:${FIRM_DETAILS.contacts.phone}`} className="hover:text-gold transition-colors">
                        {FIRM_DETAILS.contacts.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal font-serif">Instant WhatsApp</h4>
                    <a
                      href={`https://wa.me/${FIRM_DETAILS.contacts.whatsapp}?text=Hello%20Mian%20Mohammad%20Hanif%20Law%20Associates,%20I%20would%20like%20to%20request%20a%20legal%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-700 text-xs font-semibold inline-block mt-0.5"
                    >
                      Connect with Legal Chambers &rarr;
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal font-serif">Electronic Mail</h4>
                    <p className="text-charcoal-700 text-xs mt-0.5">
                      <a href={`mailto:${FIRM_DETAILS.contacts.email}`} className="hover:text-gold transition-colors">
                        {FIRM_DETAILS.contacts.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded bg-ivory-soft border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal font-serif">Chamber Timings</h4>
                    <p className="text-charcoal-600 text-xs mt-0.5">{FIRM_DETAILS.contacts.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Attorney-Client Privilege Note */}
            <div className="bg-ivory border border-champagne p-5 rounded-lg flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                <strong className="text-charcoal font-serif">Confidentiality Assured:</strong> Initial case submissions are treated with rigorous professional discretion in accordance with legal standards.
              </p>
            </div>
          </div>

          {/* Right Column: Traditional Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-ivory border border-champagne rounded-lg p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-ivory border border-gold flex items-center justify-center mx-auto text-gold">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    Inquiry Received
                  </h3>
                  <p className="text-charcoal-700 text-sm max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <span className="font-bold text-charcoal">{formData.name}</span>. Your consultation request has been forwarded to our legal team. We will review your case matter and contact you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        practiceArea: "",
                        office: "Principal Chambers, Lahore",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded text-xs font-serif uppercase tracking-widest font-bold text-ivory bg-gold hover:bg-gold-600 shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                    Chamber Consultation Request
                  </h3>
                  <p className="text-xs text-charcoal-500 mb-6 font-sans">
                    Provide the relevant details below and an advocate from our specialized practice team will contact you.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-charcoal-700 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammad Ali"
                        className="w-full px-3.5 py-2.5 rounded bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal placeholder-charcoal-400 focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-charcoal-700 mb-1.5 font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal placeholder-charcoal-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-charcoal-700 mb-1.5 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ali@domain.com"
                        className="w-full px-3.5 py-2.5 rounded bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal placeholder-charcoal-400 focus:outline-none"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider text-charcoal-700 mb-1.5 font-bold">
                        Preferred Location
                      </label>
                      <select
                        value={formData.office}
                        onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal focus:outline-none"
                      >
                        <option value="Principal Chambers, Lahore">Principal Chambers, Lahore</option>
                        <option value="Sheikhupura Office">Sheikhupura Office</option>
                        <option value="Virtual / Phone Consultation">Virtual / Video Call</option>
                      </select>
                    </div>
                  </div>

                  {/* Practice Area */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-charcoal-700 mb-1.5 font-bold">
                      Primary Practice Area *
                    </label>
                    <select
                      required
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal focus:outline-none"
                    >
                      <option value="">-- Select Relevant Practice Discipline --</option>
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.name}>
                          {area.name} ({area.category})
                        </option>
                      ))}
                      <option value="General Legal Matter">Other / General Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-charcoal-700 mb-1.5 font-bold">
                      Case Summary / Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide a concise description of your dispute, notice, or advisory requirements..."
                      className="w-full px-3.5 py-2.5 rounded bg-ivory-card border border-champagne focus:border-gold text-sm text-charcoal placeholder-charcoal-400 focus:outline-none resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded font-serif font-bold text-xs uppercase tracking-widest text-ivory bg-gold hover:bg-gold-600 transition-colors shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Legal Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
