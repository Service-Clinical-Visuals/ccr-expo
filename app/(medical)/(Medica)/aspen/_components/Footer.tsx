"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0B2F61] text-white pt-10 sm:pt-12 md:pt-14 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12 md:gap-14">
        
        {/* Main Footer Row: Tablet 2-col layout up to 1035px, 5 columns in single row from 1036px */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1036px]:grid-cols-12 aspen-footer-desktop-grid gap-8 xl:gap-8 items-start">
          
          {/* Column 1: Logo & About (span 3 on desktop) */}
          <div className="min-[1036px]:col-span-3 aspen-footer-col-3 flex flex-col gap-5">
            <Link href="#home" className="inline-block shrink-0 origin-left">
              <img
                src="/medical/aspen/logo.webp"
                alt="Aspen Surgical Logo"
                className="footer-logo-img h-7 sm:h-8 min-[2500px]:h-12 min-[3800px]:h-16 w-auto object-contain transform scale-110 sm:scale-115 md:scale-120 min-[2000px]:scale-[1.4] min-[2500px]:scale-[1.65] min-[3800px]:scale-[2.0] origin-left transition-transform"
              />
            </Link>
            <Typography variant="p" color="white" className="text-gray-300 text-sm sm:text-base leading-relaxed xl:max-w-[70%]">
              Based in Michigan, USA, but with global reach, Aspen Surgical is positioned to deliver quality and expertise wherever care is provided.
            </Typography>
          </div>

          {/* Column 2: Quick Links (span 2 on desktop) */}
          <div className="min-[1036px]:col-span-2 aspen-footer-col-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 text-sm sm:text-base text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#company" className="hover:text-white transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  News &amp; Events
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-300 hover:text-white transition-colors">
                  See More &gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products (span 2 on desktop) */}
          <div className="min-[1036px]:col-span-2 aspen-footer-col-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold">
              Our Products
            </Typography>
            <ul className="flex flex-col gap-2.5 text-sm sm:text-base text-gray-300">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Blades And Scalpels
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Open Surgery Instruments
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Laparoscopic Products
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Electrosurgery
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Endoscope Reprocessing - New!
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (span 3 on desktop) - Exactly matching Quick Links & Our Products */}
          <div className="min-[1036px]:col-span-3 aspen-footer-col-3 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-2.5 text-sm sm:text-base text-gray-300">
              <li>
                <a
                  href="tel:+18883647004"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  +1 888-364-7004
                </a>
              </li>
              <li>
                <a
                  href="mailto:anz@aspensurgical.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  anz@aspensurgical.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-1" />
                <div className="leading-relaxed">
                  6945 Southbelt Dr. SE<br />
                  Caledonia, MI 49316
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links (span 2 on desktop) */}
          <div className="min-[1036px]:col-span-2 aspen-footer-col-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white text-[#0B2F61] flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white text-[#0B2F61] flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white text-[#0B2F61] flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all shadow-sm"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white text-[#0B2F61] flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition-all shadow-sm"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-blue-900/60 pt-6 text-center">
          <Typography variant="p" color="white" className="text-xs sm:text-sm text-gray-400">
            &copy; 2026 Aspen Surgical Products, Inc. All Rights Reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
