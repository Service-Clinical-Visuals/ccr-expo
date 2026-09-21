"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F3E7B] text-white pt-14 sm:pt-16 xl:pt-20 min-[3800px]:pt-36 pb-8 sm:pb-10 min-[3800px]:pb-20 overflow-hidden border-t border-[#0d3466]">
      <div className="custom-container">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 min-[3800px]:gap-16 pb-12 sm:pb-16 min-[3800px]:pb-24 border-b border-white/20">
          {/* Column 1: Logo & Company Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4 sm:space-y-5 min-[3800px]:space-y-8" data-aos="fade-up">
            {/* White Logo Container */}
            <div className="relative w-[220px] sm:w-[240px] min-[3800px]:w-[440px] aspect-[400/120] overflow-hidden shadow-md bg-white">
              <img
                src="/medical/telemed/footer_logo.png"
                alt="TELEMED Ultrasound Medical Systems"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Description */}
            <Typography variant="footer-body" color="white" className="leading-relaxed max-w-[320px] min-[3800px]:max-w-[600px] opacity-90">
              Telemed was founded in 1992 and has quickly developed into
              well-known manufacturer of portable PC-based scanners and OEM
              modules.
            </Typography>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2 sm:gap-2.5 min-[3800px]:gap-5">
              <li>
                <Link
                  href="#about"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  OEM
                </Link>
              </li>
              <li>
                <Link
                  href="#portable-ultrasound"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  Ultrasound Scanners
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="footer-link font-[600] inline-flex items-center gap-1 hover:underline transition-colors"
                >
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: OEM (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              OEM
            </Typography>
            <ul className="flex flex-col gap-2 sm:gap-2.5 min-[3800px]:gap-5">
              <li>
                <Link
                  href="#products"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  ArtUs COEM-1H
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  ArtUs OEM-1H/2H
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  SmartUs OEM-1M/3M
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  MicrUs OEM-1H
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="footer-link hover:underline transition-colors opacity-90 hover:opacity-100"
                >
                  ClarUs OEM-1M
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (lg:col-span-2 xl:col-span-2) */}
          <div className="lg:col-span-2 xl:col-span-2 flex flex-col items-start gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 min-[3800px]:gap-6">
              {/* Phone */}
              <div className="flex items-center gap-2.5 min-[3800px]:gap-5">
                <Phone className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <a
                  href="tel:+37052106272"
                  className="footer-link hover:underline transition-colors"
                >
                  +37052106272
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5 min-[3800px]:gap-5">
                <MapPin className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0 mt-0.5" />
                <Typography variant="footer-body" color="white" className="opacity-90">
                  Address: Savanorių Prospektas 178a, Vilnius, Lithuania
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Social Media Links
            </Typography>

            {/* Circular White Social Badges */}
            <div className="flex items-center gap-3 min-[3800px]:gap-6 mt-1 flex-wrap">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-white flex items-center justify-center text-[#0F3E7B] shadow-sm hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9 fill-[#0F3E7B] stroke-none" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-white flex items-center justify-center text-[#0F3E7B] shadow-sm hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9 fill-[#0F3E7B] stroke-none" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-white flex items-center justify-center text-[#0F3E7B] shadow-sm hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9 fill-[#0F3E7B] stroke-none" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 min-[3800px]:pt-14 text-center">
          <Typography variant="footer-body" color="white" className="text-center opacity-80 min-[3800px]:text-2xl">
            &copy; 1992-2026 TELEMED, Design &amp; Manufacturing of Medical and
            Research Imaging Equipment
          </Typography>
        </div>
      </div>
    </footer>
  );
}
