/**
 * Footer Component - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. 5-Column Responsive Grid Architecture:
 *    - Col 1: Brand Logo & Mission Description.
 *    - Col 2: Quick Links navigation.
 *    - Col 3: Product Portfolio links.
 *    - Col 4: Contact Us (Office address, phone, email with icons).
 *    - Col 5: Newsletter "Stay Updated" form with send button.
 * 2. Visual Style & Tokens:
 *    - Dark theme (#111111) with crisp typography hierarchy.
 *    - Sub-divider border-t border-white/20 and centered copyright bar.
 * 3. 4K Responsive Scaling:
 *    - Proportional scaling on padding, gap, typography, and interactive icons.
 */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Technology", href: "#technology" },
  { name: "Products", href: "#products" },
  { name: "News", href: "#news" },
  { name: "Teams", href: "#teams" },
];

const productLinks = [
  { name: "Orthonail", href: "#products" },
  { name: "Orthowheel", href: "#products" },
  { name: "Orthomed", href: "#products" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to OrthoGet updates!");
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#111111] text-white pt-10 sm:pt-12 lg:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-5 sm:pb-6 min-[2500px]:pb-8 min-[3800px]:pb-10 overflow-hidden border-t border-white/10">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24">

          {/* Col 1: Brand Logo & Summary (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-7">
            <Link href="#home" className="inline-block shrink-0 origin-left py-1">
              <img
                src="/medical/orthoget/logo.webp"
                alt="OrthoGet"
                className="h-9 sm:h-10 lg:h-12 min-[2500px]:h-18 min-[3800px]:h-26 w-auto object-contain transform scale-110 sm:scale-115 md:scale-120 lg:scale-125 min-[2500px]:scale-[1.4] min-[3800px]:scale-[1.8] origin-left transition-transform"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="text-white/80 leading-relaxed max-w-[420px] 2k:max-w-[650px] 4k:max-w-[900px]">
              OrthoGet is an innovative Polish bioengineering company specializing in advanced orthopedic implants and digital healthcare solutions. Its technologies focus on lower-limb lengthening, treatment monitoring, and improving patient mobility through engineering-driven medical innovation.
            </Typography>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6">
            <Typography variant="footer-heading" color="white">
              Product
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 min-[2500px]:gap-5">
              
              <div className="flex items-start gap-2.5 2k:gap-4 4k:gap-6">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-white shrink-0 mt-0.5" />
                <span className="footer-body text-white/80 leading-snug">
                  OrthoGet<br />Muchoborska Street 18<br />Wroclaw, 54-424
                </span>
              </div>

              <a
                href="tel:+48882148353"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-white shrink-0" />
                <span className="footer-body">
                  +48 882 148 353
                </span>
              </a>

              <a
                href="mailto:biuro@orthoget.com"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-white shrink-0" />
                <span className="footer-body">
                  biuro@orthoget.com
                </span>
              </a>

            </div>
          </div>

          {/* Col 5: Stay Updated Form (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6">
            <Typography variant="footer-heading" color="white">
              Stay Updated
            </Typography>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-transparent border border-white/60 focus:border-white text-white placeholder-white/50 footer-body px-3 py-2 2k:px-5 2k:py-3.5 4k:px-7 4k:py-5 rounded-[8px] 2k:rounded-[12px] 4k:rounded-[16px] outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Submit newsletter"
                className="p-2 sm:p-2.5 2k:p-4 4k:p-5 border border-white rounded-[8px] 2k:rounded-[12px] 4k:rounded-[16px] text-white hover:bg-white hover:text-[#111111] transition-all shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-5 sm:pt-6 min-[2500px]:pt-8 min-[3800px]:pt-10 border-t border-white/20 text-center">
          <Typography variant="footer-body" color="white" className="text-white/80 text-center">
            © Orthoget 2023 | All rights reserved
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

