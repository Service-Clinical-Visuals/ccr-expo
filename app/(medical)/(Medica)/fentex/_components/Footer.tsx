"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const QUICK_LINKS = [
  "Home", "About Us", "Products", "Media", "Contact Us"
];

const PRODUCTS = [
  "endoscopy", "otology", "sinus surgery", "rhinology", "oral cavity", "laryngology"
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] pt-16 sm:pt-20 pb-6 text-[#475569]">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 xl:gap-12 mb-12">

          {/* Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-center">
              <img src="/medical/fentex/logo.png" alt="FENTEX medical" className="h-auto w-auto object-contain" />
            </div>
            <p className="font-inter section-text leading-relaxed font-regular text-[#202020] pr-4">
              FENTEXmedical is a German medical-device company specializing in precision surgical instruments and endoscopy systems for ENT and Head & Neck surgery. With a strong focus on German manufacturing, clinical collaboration, precision, reliability, and durable product design, the company serves specialized medical professionals worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-poppins footer-text font-bold footer-text text-[#202020] tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-inter section-text font-regular">
              {QUICK_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-[#202020] hover:text-[#006AB3] hover:underline font-regular transition-all section-text">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-poppins footer-text font-bold footer-text text-[#202020] tracking-wide">Products</h4>
            <ul className="flex flex-col gap-3 font-inter section-text font-regular">
              {PRODUCTS.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-[#202020] hover:text-[#006AB3] hover:underline font-regular transition-all section-text">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-poppins footer-text font-bold footer-text text-[#202020] tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-4 font-inter section-text font-regular">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#202020]" />
                <p className="leading-snug section-text text-[#202020]">
                  FENTEXmedical GmbH<br />
                  take-off GewerbePark 2<br />
                  78579 Neuhausen ob Eck
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#202020]" />
                <p className="text-[#202020] section-text">+49 (0)7467 949620</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#202020]" />
                <a href="mailto:info@fentexmedical.com" className="section-text text-[#202020] hover:underline hover:text-[#006AB3] text-[#202020]">info@fentexmedical.com</a>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-poppins footer-text font-bold text-lg text-[#202020] tracking-wide">Stay Updated</h4>
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-11 bg-transparent border border-[#202020] rounded-[4px] px-4 font-inter text-sm focus:outline-none focus:border-[#006AB3] transition-colors text-[#202020]"
                required
              />
              <button
                type="submit"
                className="h-11 aspect-square bg-transparent border border-[#202020] rounded-[4px] hover:bg-slate-100 transition-colors flex items-center justify-center flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5 text-[#202020]" />
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-[#CBD5E1] text-center font-inter text-sm font-regular">
          <p className="text-[#202020]">© 2026 FENTEX medical GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
