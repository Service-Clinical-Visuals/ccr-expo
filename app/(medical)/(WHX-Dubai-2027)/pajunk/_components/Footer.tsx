/**
 * Footer Component - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD & FIGMA GROUP 481, 482, 483
 * 1. 3-Tier Footer Architecture:
 *    - Tier 1: Main links grid (#144835) across 5 columns (Logo & Mission, Products, Education, Company, Career).
 *    - Tier 2 (Rectangle 69 - #0E3225): 
 *        - Left: "More Links" (Bricolage Grotesque 20px) stacked above "Veterinary Medicine" (DM Sans 16px).
 *        - Right: "Social Media" (Bricolage Grotesque 20px) stacked above white vector social icons (LinkedIn, YouTube, Instagram, Facebook).
 *    - Tier 3 (Rectangle 70 - #000000):
 *        - Left: "Imprint | Privacy Policy | Terms & Conditions" (DM Sans 16px) with clean vertical dividers.
 *        - Right: "© Copyright PAJUNK" (DM Sans 17px).
 */
"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Linkedin, Youtube, Instagram, Facebook, Stethoscope } from "lucide-react";

const productLinks = [
  { name: "Regional Anesthesia", href: "#products" },
  { name: "Pain Management", href: "#products" },
  { name: "Neurology / Neurorehabilitation", href: "#products" },
  { name: "Biopsy", href: "#products" },
  { name: "Minimally Invasive Surgery", href: "#products" },
];

const educationLinks = [
  { name: "Webinars & Livestreams", href: "#education" },
  { name: "On-site Workshops", href: "#education" },
  { name: "Exhibitions", href: "#education" },
  { name: "Insights", href: "#news" },
];

const companyLinks = [
  { name: "Facts & Figures", href: "#about" },
  { name: "Philosophy", href: "#about" },
  { name: "History", href: "#about" },
  { name: "Compliance", href: "#about" },
  { name: "Sustainability", href: "#about" },
  { name: "News", href: "#news" },
];

const careerLinks = [
  { name: "All vacancies", href: "#career" },
  { name: "Culture & Benefits", href: "#career" },
  { name: "University Students", href: "#career" },
  { name: "High School Students", href: "#career" },
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full text-white overflow-hidden">
      
      {/* Tier 1: Main Links Grid (#144835) - 2 cols on mobile, 4 cols on tablet, 5 cols on desktop */}
      <div className="w-full bg-[#144835] py-10 sm:py-14 lg:py-18">
        <div className="custom-container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 items-start">
            
            {/* Col 1: Logo & Statement (Full width on mobile/tablet, 1 col on desktop) */}
            <div className="space-y-4 sm:space-y-5 col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="#home" className="inline-block" aria-label="PAJUNK Home">
                <img
                  src="/medical/pajunk/logo.webp"
                  alt="PAJUNK Logo"
                  className="h-8 sm:h-9 md:h-10 2k:h-[68px] 4k:h-[96px] w-auto object-contain"
                />
              </Link>
              <Typography
                variant="footer-body"
                color="white"
                className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl lg:max-w-none"
              >
                PAJUNK is a German medical technology company developing innovative, precision-engineered medical devices and solutions to support healthcare professionals and improve patient care worldwide.
              </Typography>
            </div>

            {/* Col 2: Products */}
            <div className="space-y-3 sm:space-y-4">
              <Typography variant="footer-heading" color="white" className="text-sm sm:text-base font-semibold tracking-wide">
                Products
              </Typography>
              <ul className="space-y-2 sm:space-y-2.5">
                {productLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="footer-body text-white/80 hover:text-[#DCE64D] text-xs sm:text-sm transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Education */}
            <div className="space-y-3 sm:space-y-4">
              <Typography variant="footer-heading" color="white" className="text-sm sm:text-base font-semibold tracking-wide">
                Education
              </Typography>
              <ul className="space-y-2 sm:space-y-2.5">
                {educationLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="footer-body text-white/80 hover:text-[#DCE64D] text-xs sm:text-sm transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Company */}
            <div className="space-y-3 sm:space-y-4">
              <Typography variant="footer-heading" color="white" className="text-sm sm:text-base font-semibold tracking-wide">
                Company
              </Typography>
              <ul className="space-y-2 sm:space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="footer-body text-white/80 hover:text-[#DCE64D] text-xs sm:text-sm transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Career */}
            <div className="space-y-3 sm:space-y-4">
              <Typography variant="footer-heading" color="white" className="text-sm sm:text-base font-semibold tracking-wide">
                Career
              </Typography>
              <ul className="space-y-2 sm:space-y-2.5">
                {careerLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="footer-body text-white/80 hover:text-[#DCE64D] text-xs sm:text-sm transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Tier 2: Sub-Bar (#0E3225 - Rectangle 69) */}
      <div className="w-full bg-[#0E3225] py-5 sm:py-7 border-t border-white/5">
        <div className="custom-container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            
            {/* More Links Column (Left) */}
            <div className="flex flex-col gap-1.5 sm:gap-2 2k:gap-4 4k:gap-6">
              <span className="font-primary text-base sm:text-lg md:text-xl 2k:text-3xl 4k:text-4xl font-semibold text-white tracking-tight">
                More Links
              </span>
              <Link
                href="#veterinary"
                className="inline-flex items-center gap-2 2k:gap-4 4k:gap-6 text-xs sm:text-sm md:text-base 2k:text-2xl 4k:text-3xl text-white/90 hover:text-[#DCE64D] transition-colors"
              >
                <Stethoscope className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#DCE64D] shrink-0" />
                <span className="font-secondary">Veterinary Medicine</span>
              </Link>
            </div>

            {/* Social Media Column (Right) */}
            <div className="flex flex-col gap-1.5 sm:gap-2 2k:gap-4 4k:gap-6 sm:items-end">
              <span className="font-primary text-base sm:text-lg md:text-xl 2k:text-3xl 4k:text-4xl font-semibold text-[#DBDBDB] tracking-tight">
                Social Media
              </span>
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6 2k:gap-10 4k:gap-14 pt-0.5 sm:pt-1 2k:pt-2 4k:pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DCE64D] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DCE64D] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DCE64D] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DCE64D] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tier 3: Bottom Legal Bar (#000000 - Rectangle 70) */}
      <div className="w-full bg-[#000000] py-4 sm:py-5 text-sm sm:text-base text-white">
        <div className="custom-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 font-secondary text-xs sm:text-sm md:text-base">
              <Link href="#imprint" className="hover:text-[#DCE64D] transition-colors">
                Imprint
              </Link>
              <span className="text-white/60">|</span>
              <Link href="#privacy" className="hover:text-[#DCE64D] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/60">|</span>
              <Link href="#terms" className="hover:text-[#DCE64D] transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
            <p className="font-secondary text-xs sm:text-sm md:text-base text-white/90 text-center sm:text-right">
              &copy; Copyright PAJUNK
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
