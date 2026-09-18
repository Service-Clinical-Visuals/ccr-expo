"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "#" },
    { label: "Corporate", href: "#" },
    { label: "Certificate", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  products: [
    { label: "stents", href: "#" },
    { label: "catheters", href: "#" },
    { label: "dilators", href: "#" },
    { label: "guide wire", href: "#" },
    { label: "electrodes", href: "#" },
    { label: "general purpose products", href: "#" },
    { label: "stone retriever", href: "#" },
    { label: "innovation", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E2E33] text-white pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-12 gap-8 xl:gap-10 pb-12" data-aos="fade-up" data-aos-duration="800">

          {/* Column 1: Logo & Company Summary */}
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block group focus:outline-none mb-6">
              <div className="relative flex items-center">
                <img
                  src="/medical/medpro/logo.png"
                  alt="MEDpro Logo"
                  className="h-[85px] w-[80px] object-contain"
                />
              </div>
            </Link>

            <p className="section-text text-white/80 font-inter max-w-6xl leading-relaxed">
              MEDpro Medical is a Dutch medical-device manufacturer specializing in innovative urological solutions, offering a comprehensive range of stents, catheters, dilators, stone-retrieval devices, and other products for modern urological procedures.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2">
            <h4 className="font-fraunces font-bold footer-text text-white mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-inter">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="section-text text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="xl:col-span-2">
            <h4 className="font-fraunces font-bold footer-text text-white mb-5 tracking-wide">
              Products
            </h4>
            <ul className="flex flex-col gap-3 font-inter">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="section-text text-white/80 hover:text-white transition-colors duration-200 capitalize"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="xl:col-span-2">
            <h4 className="font-fraunces font-bold footer-text text-white mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 font-inter">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <span className="section-text text-white/80 leading-relaxed">
                  Vendelier 45E<br />
                  NL-3905 PC Veenendaal<br />
                  The Netherlands
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span className="section-text text-white/80">
                  +31 318 76 90 80
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
                <span className="section-text text-white/80">
                  info@medpromedical.nl
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay Updated */}
          <div className="xl:col-span-2">
            <h4 className="font-fraunces font-bold footer-text text-white mb-5 tracking-wide">
              Stay Updated
            </h4>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border border-white/90 text-white placeholder:text-white/50 section-text font-inter px-4 py-3 rounded-[8px] outline-none focus:border-white w-[180px] sm:w-[200px]"
              />
              <button className="flex items-center justify-center border border-white/90 hover:bg-white hover:text-[#2E2E33] transition-colors rounded-[8px] w-9 h-10 flex-shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Faint Divider Line */}
        <div className="w-full h-px bg-white/90 mb-8" />

        {/* Copyright */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="800">
          <p className="section-text text-white/80 font-inter">
            © 2026 Med pro Medical B.V. - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
