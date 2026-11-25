"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Sustainability", href: "#sustainability" },
  { name: "Reison Technology", href: "#features" },
  { name: "See All >>", href: "#products" },
];

const resourceLinks = [
  { name: "Armboards", href: "#products" },
  { name: "Arm & Hand surgery tables", href: "#products" },
  { name: "Widening Sections", href: "#products" },
  { name: "Head Supports", href: "#products" },
  { name: "See All >>", href: "#products" },
];

/**
 * Footer Component - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Background Theme:
 *    - Deep Navy `#2F3F5A` textured with `bg1.webp`.
 * 2. Multi-column Responsive Layout:
 *    - Stacks on mobile, 2-3 columns on tablet, 5-column layout on desktop.
 * 3. Typography & Social Badges:
 *    - White text, Cal Sans headings, and 4 circular icon buttons with red border/accents.
 */
const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#2F3F5A] bg-[url('/medical/reison/bg1.webp')] bg-cover bg-center bg-no-repeat text-white pt-12 sm:pt-16 xl:pt-20 pb-8 sm:pb-10 overflow-hidden relative"
    >
      <div className="custom-container flex flex-col gap-10 sm:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">

        {/* Main Footer Content Grid: Tablet 2 cols (768px-1035px), Desktop 5 cols single row (>=1036px) */}
        <div className="reison-footer-grid w-full items-start">

          {/* Col 1: Logo & Distribution Mission - Vertically centered to adjacent columns */}
          <div className="reison-footer-col-1 flex flex-col gap-4 sm:gap-5 min-[1036px]:self-center">
            <Link href="#home" className="inline-block origin-left transform scale-125 sm:scale-[1.35] min-[2500px]:scale-[1.6]" aria-label="Reison Medical Home">
              <img
                src="/medical/reison/logo.webp"
                alt="Reison Medical Footer Logo"
                className="h-8 sm:h-9 md:h-10 w-auto aspect-[290/47] object-cover brightness-0 invert"
              />
            </Link>
            <p className="footer-body text-white/80 leading-relaxed mt-1">
              Resion products are distributed worldwide through our partner network, agents and distributors. Don’t hesitate to contact us at Reison to learn more about it your local representative.
            </p>
          </div>

          {/* Col 2: Quick Links - Straight horizontal alignment */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 self-start">
            <Typography variant="footer-heading" color="white" className="font-primary text-xl sm:text-2xl">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-white transition-colors capitalize"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources - Straight horizontal alignment */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 self-start">
            <Typography variant="footer-heading" color="white" className="font-primary text-xl sm:text-2xl">
              Resources
            </Typography>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5">
              {resourceLinks.map((link) => (
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

          {/* Col 4: Contact Us - EXACT same text size (footer-body) as other columns & straight alignment */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 self-start">
            <Typography variant="footer-heading" color="white" className="font-primary text-xl sm:text-2xl">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-2.5 min-[2500px]:gap-3.5">
              <a
                href="tel:+46022043399"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0 text-white" />
                <span className="footer-body text-white/80 group-hover:text-white transition-colors">
                  +46 (0) 220 433 99
                </span>
              </a>

              <a
                href="mailto:info@reison.se"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 shrink-0 text-white" />
                <span className="footer-body text-white/80 group-hover:text-white transition-colors lowercase">
                  info@reison.se
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-white mt-1" />
                <span className="footer-body text-white/80 leading-snug">
                  Eriksbergsvägen 32A 734 92 Hallstahammar
                </span>
              </div>
            </div>
          </div>

          {/* Col 5: Social Media Links - Straight horizontal alignment */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 self-start">
            <Typography variant="footer-heading" color="white" className="font-primary text-xl sm:text-2xl">
              Social Media Links
            </Typography>

            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap mt-1">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-[#E53B14]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform group"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 text-[#E53B14]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-[#E53B14]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform group"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-[#E53B14]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-8 border-t border-white/20 text-center">
          <Typography variant="footer-body" color="white" className="text-white/80 text-center text-xs sm:text-sm">
            ©Copyright info@reison.se. All rights reserved
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

