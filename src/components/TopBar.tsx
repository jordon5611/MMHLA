import React from "react";
import { Phone, Mail, Clock, MapPin, MessageSquare } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firmData";

export default function TopBar() {
  return (
    <div className="bg-charcoal-950 text-champagne/80 text-[11px] font-sans border-b border-charcoal-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <Phone className="w-3 h-3 text-gold" />
              <a href={`tel:${FIRM_DETAILS.contacts.phone}`} className="hover:text-gold transition-colors">
                {FIRM_DETAILS.contacts.phone}
              </a>
            </div>
            <div className="flex items-center space-x-1.5">
              <Mail className="w-3 h-3 text-gold" />
              <a href={`mailto:${FIRM_DETAILS.contacts.email}`} className="hover:text-gold transition-colors">
                {FIRM_DETAILS.contacts.email}
              </a>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3 h-3 text-gold" />
              <span>{FIRM_DETAILS.contacts.timing}</span>
            </div>
          </div>

          {/* Right: Offices & WhatsApp */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3 h-3 text-gold" />
              <span>Chambers: Lahore & Sheikhupura</span>
            </div>
            <a
              href={`https://wa.me/${FIRM_DETAILS.contacts.whatsapp}?text=Hello%20Mian%20Mohammad%20Hanif%20Law%20Associates,%20I%20would%20like%20to%20request%20a%20legal%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-gold hover:text-ivory font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
