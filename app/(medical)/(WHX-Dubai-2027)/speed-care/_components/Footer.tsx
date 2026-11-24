/**
 * Footer Component
 * Master Reference: Zinnanti Surgical & Inogen Standards
 *
 * 1. Responsive Layout:
 *    - Desktop (>=1036px): Strictly 5 columns in a single horizontal row across the entire container (`.speedcare-footer-grid`).
 *    - Column 1 (logo and below paragraph text) is vertically centered (`self-center`) relative to the height of the adjacent columns.
 *    - Tablet (768px-1035px): Strictly 2 columns tablet layout.
 *    - Mobile (<768px): Single column stacked layout.
 * 2. Typography:
 *    - Text sizes for all non-heading contents unified with normal paragraph text size (`text-sm sm:text-base lg:text-[1.125rem] 2k:text-2xl 4k:text-3xl`).
 */
"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Linkedin } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "SpeedM®", href: "#solutions" },
  { name: "Live - Saving Technology", href: "#technology" },
  { name: "Quality Management", href: "#performance" },
  { name: "Contact", href: "#contact" },
];

const legalLinks = [
  { name: "Downloads", href: "#" },
  { name: "Case Report", href: "#" },
  { name: "Non - Conformity", href: "#" },
  { name: "Imprint", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#EFEFEF] pt-8 sm:pt-10 xl:pt-12 2k:pt-18 4k:pt-24 pb-5 sm:pb-6 2k:pb-10 4k:pb-14 overflow-hidden">
      <div className="custom-container flex flex-col gap-6 sm:gap-8 xl:gap-10 2k:gap-14 4k:gap-18">

        {/* Main Footer Content Grid: 5 horizontal columns on desktop */}
        <div className="speedcare-footer-grid w-full items-start">

          {/* Column 1: Logo + Subtext (Vertically centered to the right column) */}
          <div className="flex flex-col gap-4 2k:gap-6 4k:gap-9 self-center">
            <Link href="#home" className="inline-block origin-left mb-3 sm:mb-4 2k:mb-6" aria-label="Speed Care Mineral Home">
              <img
                src="/medical/speed-care/logo.webp"
                alt="Speed Care Mineral Logo"
                className="h-10 sm:h-12 2k:h-20 4k:h-28 w-auto object-contain transform origin-left scale-140 sm:scale-150 lg:scale-160 2k:scale-[1.8] 4k:scale-[2.0] transition-transform"
              />
            </Link>
            <p className="font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563] leading-relaxed mt-1">
              German medical innovation for effective bleeding control, powered by advanced mineral technology and made in Germany.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 self-start">
            <h4 className="font-heading font-semibold text-base sm:text-lg lg:text-[1.1875rem] 2k:text-2xl 4k:text-3xl text-[#333333]">
              Links:
            </h4>
            <ul className="flex flex-col gap-2.5 2k:gap-4 4k:gap-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563] hover:text-[#E62730] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 self-start">
            <h4 className="font-heading font-semibold text-base sm:text-lg lg:text-[1.1875rem] 2k:text-2xl 4k:text-3xl text-[#333333]">
              Legal:
            </h4>
            <ul className="flex flex-col gap-2.5 2k:gap-4 4k:gap-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563] hover:text-[#E62730] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 self-start">
            <h4 className="font-heading font-semibold text-base sm:text-lg lg:text-[1.1875rem] 2k:text-2xl 4k:text-3xl text-[#333333]">
              Contact Us:
            </h4>
            <div className="flex flex-col gap-3.5 2k:gap-5 4k:gap-7">
              {/* Phone with Scaled Red Icon */}
              <a
                href="tel:+49395423920"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563] hover:text-[#E62730] transition-colors group"
              >
                <Phone className="w-4 h-4 2k:w-7 2k:h-7 4k:w-11 4k:h-11 text-[#E62730] shrink-0" />
                <span className="text-inherit">+49 395 423920</span>
              </a>

              {/* Email with Scaled Red Icon */}
              <a
                href="mailto:customerservice@speedcaremineral.de"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563] hover:text-[#E62730] transition-colors group break-all"
              >
                <Mail className="w-4 h-4 2k:w-7 2k:h-7 4k:w-11 4k:h-11 text-[#E62730] shrink-0" />
                <span className="text-inherit">customerservice@speedcaremineral.de</span>
              </a>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 self-start">
            <h4 className="font-heading font-semibold text-base sm:text-lg lg:text-[1.1875rem] 2k:text-2xl 4k:text-3xl text-[#333333]">
              Follow Us:
            </h4>
            <div>
              {/* Scaled LinkedIn Icon Badge (36px -> 64px -> 88px) */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-md 2k:rounded-xl 4k:rounded-2xl bg-[#E62730] hover:bg-[#c91f27] text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Speed Care Mineral LinkedIn"
              >
                <Linkedin className="w-4 h-4 2k:w-8 2k:h-8 4k:w-12 4k:h-12" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Red Divider & Centered Copyright */}
        <div className="w-full flex flex-col gap-3 2k:gap-5 4k:gap-8 pt-2 2k:pt-4 4k:pt-6">
          <div className="w-full h-[1px] 2k:h-[2px] 4k:h-[3px] bg-[#E62730]" />
          <p className="text-center font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563]">
            &copy; 2026 by Speed Care Mineral GmbH
          </p>
        </div>

      </div>
    </footer>
  );
}
