"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "View All", href: "#products" },
];

const productLinks = [
  { name: "Camera System for Surgery", href: "#products" },
  { name: "TITAN Xenon Light Sources", href: "#products" },
  { name: "LED Light Sources", href: "#products" },
  { name: "View All", href: "#products" },
];

/**
 * Footer Component - Sunoptic Surgical
 * Matches Figma specifications:
 * - Background: Dark Navy #0B192C.
 * - Reduced top and bottom padding.
 * - Footer logo enlarged with transform scale.
 * - Col 1 (Logo & paragraph) vertically centered relative to right columns.
 * - All text in Contact column matches the exact same footer-body text size as other columns.
 * - All icons scale smoothly across screen tiers including 2K and 4K displays.
 */
const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0B192C] text-white pt-8 sm:pt-10 lg:pt-12 2k:pt-16 4k:pt-20 pb-4 sm:pb-6 2k:pb-8 4k:pb-10 overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 2k:gap-14 4k:gap-18">

        {/* Main Footer Content Grid - 2 columns in 1 row on mobile screens, 5 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-10 2k:gap-14 4k:gap-18 items-start">

          {/* Col 1: Brand Info - Spans 2 cols on mobile, 1 col on desktop */}
          <div className="col-span-2 md:col-span-1 xl:col-span-1 flex flex-col justify-center self-center my-auto gap-3 sm:gap-4">
            <Link href="#home" className="inline-block overflow-visible" aria-label="Sunoptic Surgical Home">
              <img
                src="/medical/sunoptic-surgical/footer_logo.webp"
                alt="Sunoptic Surgical"
                className="h-9 sm:h-10 2k:h-14 4k:h-20 w-auto transform scale-110 sm:scale-120 2k:scale-135 4k:scale-150 origin-left transition-transform object-contain"
              />
            </Link>
            <p className="footer-body text-white/80 leading-relaxed mt-1">
              Sunoptic Surgical delivers innovative surgical illumination and visualization solutions designed for precision, comfort and reliable performance.
            </p>

            {/* Social Icons with responsive 2k & 4k scaling */}
            <div className="flex items-center gap-3 mt-1 text-white">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 2k:w-14 2k:h-14 4k:w-20 4k:h-20 rounded-full bg-white/10 hover:bg-[#911920] flex items-center justify-center transition-colors shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 2k:w-14 2k:h-14 4k:w-20 4k:h-20 rounded-full bg-white/10 hover:bg-[#911920] flex items-center justify-center transition-colors shrink-0"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3 2k:gap-5">
            <Typography variant="footer-heading" color="white" className="tracking-wide font-['Palanquin',sans-serif]">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2 2k:gap-3.5 4k:gap-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col gap-3 2k:gap-5">
            <Typography variant="footer-heading" color="white" className="tracking-wide font-['Palanquin',sans-serif]">
              Products
            </Typography>
            <ul className="flex flex-col gap-2 2k:gap-3.5 4k:gap-5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/80 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us - EXACT same footer-body text size as all other columns */}
          <div className="flex flex-col gap-3 2k:gap-5">
            <Typography variant="footer-heading" color="white" className="tracking-wide font-['Palanquin',sans-serif]">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 2k:gap-4 4k:gap-6">
              <a
                href="tel:904-737-7611"
                className="footer-body flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 shrink-0 text-white" />
                <span className="footer-body text-inherit">
                  904-737-7611
                </span>
              </a>

              <a
                href="mailto:customer.service@sunoptictech.com"
                className="footer-body flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 shrink-0 text-white" />
                <span className="footer-body text-inherit break-all">
                  customer.service@sunoptictech.com
                </span>
              </a>

              <div className="footer-body flex items-start gap-2.5 2k:gap-4 4k:gap-6 text-white/80">
                <MapPin className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 shrink-0 text-white mt-1" />
                <span className="footer-body text-inherit leading-snug">
                  6018 Bowdendale Avenue Jacksonville, FL 32216-6042 USA
                </span>
              </div>
            </div>
          </div>

          {/* Col 5: Newsletter - Spans 2 cols on mobile, 1 col on desktop */}
          <div className="col-span-2 md:col-span-2 min-[1036px]:col-span-1 xl:col-span-1 flex flex-col gap-3 2k:gap-5">
            <Typography variant="footer-heading" color="white" className="tracking-wide font-['Palanquin',sans-serif]">
              Subscribe to Newsletter :
            </Typography>
            <p className="footer-body text-white/80 leading-relaxed">
              Stay informed with the latest product launches, industry news, technical updates, and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="footer-body bg-white text-gray-800 placeholder-gray-400 px-3.5 py-2 2k:px-5 2k:py-3.5 4k:px-7 4k:py-5 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#911920] w-full"
              />
              <button
                type="button"
                className="button bg-[#911920] hover:bg-[#731319] text-white px-4 py-2 2k:px-6 2k:py-3.5 4k:px-8 4k:py-5 rounded-[5px] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                Explore Product
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/70">
          <span className="footer-body text-inherit">©2026 Sunoptic Technologies. All Rights Reserved.</span>
          <Link href="#" className="footer-body text-inherit hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
