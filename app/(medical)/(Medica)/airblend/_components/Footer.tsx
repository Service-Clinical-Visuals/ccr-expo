"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const corporateLinks = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Products", href: "#products-section" },
  { name: "Industries", href: "#products-section" },
  { name: "Contact Us", href: "#contact" },
];

const productLinks = [
  { name: "Surgical Aspirators", href: "#products-section" },
  { name: "Nebulizers", href: "#products-section" },
  { name: "Oxygen Line", href: "#products-section" },
  { name: "Rescue Solutions", href: "#products-section" },
  { name: "Single-Use Systems", href: "#products-section" },
];

/**
 * Footer Component - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Column Alignment:
 *    - All 5 columns align horizontally straight at the top across desktop (`align-items: start`).
 *    - Column 1 (logo and below paragraph text) is vertically centered (`justify-center h-full`) relative to the right columns.
 * 2. Contact Column Text Size Uniformity:
 *    - Phone, Email, and Address use the exact same `footer-body` typography class and scale as the remaining column links.
 * 3. Logo Scaling:
 *    - Footer logo enlarged with `transform scale-... origin-left`.
 * 4. Multi-tier Icon & Round Scaling up to 4K (referencing zinnanti-surgical-1).
 */
const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#707070] bg-[url('/medical/airblend/bg.webp')] bg-cover bg-center text-white pt-7 sm:pt-9 lg:pt-10 pb-5 sm:pb-6 overflow-hidden relative"
    >
      <div className="custom-container flex flex-col gap-6 sm:gap-8 lg:gap-9">
        {/* Main Footer Row: Tablet 2-col layout up to 1035px, 5 columns in single row from 1036px */}
        <div className="airblend-footer-grid">
          {/* Column 1: Brand & Mission Statement (Vertically centered relative to right columns) */}
          <div className="flex flex-col justify-center h-full gap-4">
            <Link href="#home" className="inline-block origin-left" aria-label="Airblend Home">
              <img
                src="/medical/airblend/footer_logo.webp"
                alt="Airblend Logo"
                className="h-10 sm:h-12 2k:h-14 4k:h-16 w-auto object-contain transform scale-135 sm:scale-145 lg:scale-155 2k:scale-150 4k:scale-150 origin-left transition-transform mb-1"
              />
            </Link>
            <Typography
              variant="footer-body"
              color="white"
              className="text-white/90 leading-relaxed mt-2"
            >
              Airblend is a global technology company delivering innovative healthcare, sanitation, and sustainable energy solutions. Driven by Swiss quality, innovation, and integrity, we strive to improve lives and build a healthier, more sustainable future worldwide.
            </Typography>
          </div>

          {/* Column 2: Corporate Links */}
          <div className="flex flex-col gap-3">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Corporate
            </Typography>
            <ul className="flex flex-col gap-2 mt-1">
              {corporateLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-[#7BC142] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-3">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Products
            </Typography>
            <ul className="flex flex-col gap-2 mt-1">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-[#7BC142] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Matches exact same footer-body size as remaining columns) */}
          <div className="flex flex-col gap-3">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 mt-1">
              <a
                href="tel:+41415391455"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/90 hover:text-[#7BC142] transition-colors group"
              >
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#7BC142] shrink-0"
                  strokeWidth={2.2}
                />
                <Typography variant="footer-body" color="white" className="text-white/80 group-hover:text-white transition-colors">
                  +41 41 539 14 55
                </Typography>
              </a>

              <a
                href="mailto:info@airblendmedical.com"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/90 hover:text-[#7BC142] transition-colors group"
              >
                <Mail
                  className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#7BC142] shrink-0"
                  strokeWidth={2.2}
                />
                <Typography variant="footer-body" color="white" className="text-white/80 group-hover:text-white break-all transition-colors">
                  info@airblendmedical.com
                </Typography>
              </a>

              <div className="flex items-start gap-2.5 2k:gap-4 4k:gap-6 text-white/90">
                <MapPin
                  className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#7BC142] shrink-0 mt-1"
                  strokeWidth={2.2}
                />
                <Typography variant="footer-body" color="white" className="text-white/80 leading-relaxed">
                  Turmstrasse 18 6312 Steinhausen, Switzerland
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media Links (Rounds & Icons scale responsively up to 4K) */}
          <div className="flex flex-col gap-3">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 2k:gap-5 4k:gap-7 mt-1">
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-[#7BC142] hover:bg-[#6BAE37] flex items-center justify-center text-white shadow-sm transition-transform hover:scale-105 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 2k:w-8 2k:h-8 4k:w-11 4k:h-11 text-white" strokeWidth={2} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-[#7BC142] hover:bg-[#6BAE37] flex items-center justify-center text-white shadow-sm transition-transform hover:scale-105 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 2k:w-8 2k:h-8 4k:w-11 4k:h-11 text-white" strokeWidth={2} />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 sm:w-11 sm:h-11 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-[#7BC142] hover:bg-[#6BAE37] flex items-center justify-center text-white shadow-sm transition-transform hover:scale-105 cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 2k:w-8 2k:h-8 4k:w-11 4k:h-11 text-white" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-5 text-center">
          <p className="text-xs sm:text-sm 2k:text-base 4k:text-xl text-white/80">
            Copyright &copy;2026 Airblend AG - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
