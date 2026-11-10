"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full bg-[#222D83] text-white pt-16 xl:pt-24 pb-10 overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Top 5-Column Grid (2 cols per row on mobile, 5 cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 items-start">
          {/* Column 1: Logo & Company Description */}
          <div className="flex flex-col gap-4 sm:gap-5 col-span-2 lg:col-span-1">
            <Link href="#home" className="inline-block" aria-label="Fisioline">
              <img
                src="/medical/fisioline/logo.webp"
                alt="Fisioline Logo"
                className="h-10 sm:h-12 min-[2500px]:h-18 min-[3800px]:h-24 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed max-w-[90%] xl:max-w-[80%]">
              For 50 years, we have focused on improving newborn care through innovative solutions, supported by a global team committed to respect, integrity, and quality.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold text-base sm:text-lg">
              Quick Links
            </Typography>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Company
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Products
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    News & Events
                  </Typography>
                </Link>
              </li>
              <li className="pt-1">
                <Link href="#about" className="text-white font-semibold underline underline-offset-4 hover:text-white/80 transition-colors">
                  <Typography variant="p" color="white" className="text-white font-semibold underline underline-offset-4">
                    See More &gt;&gt;
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold text-base sm:text-lg">
              Our Products
            </Typography>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Medical
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Surgery
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Aesthetic Medicine
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Dentistry
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                    Veterinary
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us - Matching Paragraph Font Size */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold text-base sm:text-lg">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 text-white/80">
              <a
                href="tel:+390172470891"
                className="flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                <Typography variant="p" color="white" className="text-white/80 hover:text-white">
                  +39 0172 470891
                </Typography>
              </a>

              <a
                href="mailto:fisioline@fisioline.com"
                className="flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                <Typography variant="p" color="white" className="text-white/80 hover:text-white break-all sm:break-normal">
                  fisioline@fisioline.com
                </Typography>
              </a>

              <div className="flex items-start gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6">
                <MapPin className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white mt-1" />
                <Typography variant="p" color="white" className="text-white/80 leading-relaxed">
                  Borgata Molino, 29 • 12060<br />
                  Verduno CN • Italy
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-bold text-base sm:text-lg">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-2.5 sm:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 flex-wrap">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#222D83] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <Linkedin className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 fill-current" strokeWidth={0} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#222D83] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <Instagram className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#222D83] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <Facebook className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 fill-current" strokeWidth={0} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#222D83] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <Youtube className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mt-14 mb-8" />

        {/* Bottom Copyright */}
        <div className="text-center">
          <Typography variant="p" color="white" className="text-white/70 text-xs sm:text-sm">
            Copyright ©2026 Fisioline S.r.l. All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
