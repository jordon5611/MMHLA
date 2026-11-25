"use client";

import React, { useState } from "react";
import { FIRM_DETAILS, PRACTICE_AREAS } from "@/data/firmData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
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
    // Simulate submission delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-navy-950 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Consultation & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 tracking-tight">
            Schedule a Confidential Consultation
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Connect directly with our senior advocates. We review every legal inquiry with strict confidentiality and priority.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Chambers Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-6 flex items-center space-x-2">
                <Building className="w-5 h-5 text-gold-400" />
                <span>Chambers & Contact Channels</span>
              </h3>

              <div className="space-y-5 text-sm">
                {/* Principal Office */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Principal Chambers</h4>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {FIRM_DETAILS.contacts.principalOffice}
                    </p>
                  </div>
                </div>

                {/* Sheikhupura Office */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Sheikhupura Office</h4>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {FIRM_DETAILS.contacts.sheikhupuraOffice}
                    </p>
                    <span className="text-[11px] text-gold-400 font-medium">
                      Advocate High Court Zunnurain Ahmad
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Telephone Lines</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      <a href={`tel:${FIRM_DETAILS.contacts.phone}`} className="hover:text-gold-300">
                        {FIRM_DETAILS.contacts.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Instant WhatsApp</h4>
                    <a
                      href={`https://wa.me/${FIRM_DETAILS.contacts.whatsapp}?text=Hello%20Mian%20Mohammad%20Hanif%20Law%20Associates,%20I%20would%20like%20to%20request%20a%20legal%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 text-xs font-medium inline-block mt-0.5"
                    >
                      Connect on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Electronic Mail</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      <a href={`mailto:${FIRM_DETAILS.contacts.email}`} className="hover:text-gold-300">
                        {FIRM_DETAILS.contacts.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Working Hours</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{FIRM_DETAILS.contacts.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privilege Note */}
            <div className="bg-navy-950/60 border border-slate-800 p-5 rounded-xl flex items-start space-x-3">
              <Shield className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Attorney-Client Privilege:</strong> Initial inquiries submitted through this portal are treated with the highest standard of legal confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-navy-950 to-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto text-gold-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-100">
                    Inquiry Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-gold-300 font-semibold">{formData.name}</span>. Your consultation request has been forwarded to our legal team. We will review your case matter and reach out within 24 hours.
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
                    className="mt-6 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-400 hover:bg-gold-300"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-slate-100 mb-2">
                    Case Matter & Consultation Request
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill out the form below and an advocate from our specialized practice team will contact you.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammad Ali"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900/90 border border-slate-700 focus:border-gold-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900/90 border border-slate-700 focus:border-gold-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ali@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900/90 border border-slate-700 focus:border-gold-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                      />
                    </div>

                    {/* Office / Meeting preference */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        value={formData.office}
                        onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900/90 border border-slate-700 focus:border-gold-400 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-gold-400"
                      >
                        <option value="Principal Chambers, Lahore">Principal Chambers, Lahore</option>
                        <option value="Sheikhupura Office">Sheikhupura Office</option>
                        <option value="Virtual / Phone Consultation">Virtual / Video Call</option>
                      </select>
                    </div>
                  </div>

                  {/* Practice Area */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Primary Legal Practice Area *
                    </label>
                    <select
                      required
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900/90 border border-slate-700 focus:border-gold-400 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-gold-400"
                    >
                      <option value="">-- Select Relevant Practice Area --</option>
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.name}>
                          {area.name} ({area.category})
                        </option>
                      ))}
                      <option value="General Legal Inquiry">Other / General Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Case Summary / Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide a concise description of your dispute, notice, or advisory requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900/90 border border-slate-700 focus:border-gold-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-6 rounded-lg font-bold text-xs uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
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
