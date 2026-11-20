/**
 * Footer Component for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Zinnanti Surgical Standards):
 * 1. Typography:
 *    - All body texts (links, descriptions, contact labels, copyright) use fluid .footer-body,
 *      which scales exactly with normal paragraph (p) text sizes from mobile through 4K.
 *    - Headings use .footer-heading.
 * 2. 4K Responsive Icon & Round Scaling:
 *    - Contact icons scale using `w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10`.
 *    - Social media round containers scale: `w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full`.
 *    - Social icons inside scale: `w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10`.
 * 3. 70% Measure Concept:
 *    - Applied `w-full max-w-full xl:max-w-[70%]` to paragraph below footer logo.
 */
"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Medical solutions", href: "#solutions" },
  { name: "Resources", href: "#resources" },
  { name: "Competences", href: "#competences" },
  { name: "See All", href: "#" },
];

const resourceLinks = [
  { name: "Catalogues of implants", href: "#" },
  { name: "Catalogues of instruments", href: "#" },
  { name: "Surgical techniques", href: "#" },
  { name: "Instructions for use", href: "#" },
  { name: "Certificates", href: "#" },
];

const contactIconCls = "w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 shrink-0 text-white";
const socialIconCls = "w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#5F6467] text-white pt-6 sm:pt-8 md:pt-10 xl:pt-12 2k:pt-16 4k:pt-20 pb-4 sm:pb-6 2k:pb-8 4k:pb-10 overflow-hidden border-t border-white/20">
      <div className="custom-container flex flex-col gap-6 sm:gap-8 md:gap-10 2k:gap-14 4k:gap-18">
        {/* Main Footer Links Grid: Perfectly balanced across Mobile, Tablet, and Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-8 xl:gap-10 2k:gap-14 4k:gap-18 items-start">
          {/* Col 1: Footer Logo & Company Bio */}
          <div className="flex flex-col gap-4 2k:gap-6 4k:gap-8 col-span-2 md:col-span-4 lg:col-span-1 xl:col-span-2">
            <Link href="#home" className="inline-block overflow-visible mb-2 sm:mb-3 2k:mb-5" aria-label="ChM Home">
              <img
                src="/medical/chm/footer_logo.webp"
                alt="ChM Footer Logo"
                className="h-10 sm:h-12 md:h-14 min-[1920px]:h-16 2k:h-[96px] 4k:h-[150px] w-auto object-contain transition-transform transform scale-125 sm:scale-140 lg:scale-150 2k:scale-160 4k:scale-175 origin-left"
              />
            </Link>
            <Typography
              variant="footer-body"
              color="white"
              className="text-white/85 leading-relaxed w-full max-w-xl xl:max-w-[90%] mt-1 sm:mt-2"
            >
              ChM is a leading manufacturer of orthopedic and traumatology solutions, combining over 40 years of experience with advanced engineering and continuous innovation.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 col-span-1">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2 2k:gap-3.5 4k:gap-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/85 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 col-span-1">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Resources
            </Typography>
            <ul className="flex flex-col gap-2 2k:gap-3.5 4k:gap-5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-white/85 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us & Social Media */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 col-span-2 md:col-span-2 lg:col-span-1">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Contact Us
            </Typography>

            <div className="flex flex-col gap-2.5 2k:gap-4 4k:gap-6">
              <a
                href="tel:+48618226561"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/85 hover:text-white transition-colors group"
              >
                <Phone className={contactIconCls} />
                <span className="footer-body">{"+48 61 822 65 61"}</span>
              </a>

              <a
                href="mailto:chm@chm.eu"
                className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 text-white/85 hover:text-white transition-colors group"
              >
                <Mail className={contactIconCls} />
                <span className="footer-body break-all sm:break-normal">chm@chm.eu</span>
              </a>

              <div className="flex items-start gap-2.5 2k:gap-4 4k:gap-6 text-white/85">
                <MapPin className={`${contactIconCls} mt-1`} />
                <span className="footer-body leading-snug">Lewickie 3B, 16-061 Juchnowiec Kościelny, POLAND</span>
              </div>
            </div>

            {/* Social Icons Scaling for 2K & 4K */}
            <div className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 mt-2 2k:mt-4 4k:mt-6 flex-wrap">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A41E27] hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className={socialIconCls} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A41E27] hover:bg-gray-100 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className={socialIconCls} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A41E27] hover:bg-gray-100 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className={socialIconCls} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A41E27] hover:bg-gray-100 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className={socialIconCls} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-4 sm:pt-5 2k:pt-8 4k:pt-10 border-t border-white/25 text-center">
          <Typography variant="footer-body" color="white" className="text-white/85 text-center">
            © Copyright 2026 ChM sp. z o.o.. All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
