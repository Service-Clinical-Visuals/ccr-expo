"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#why-inogen" },
  { name: "Products", href: "#products" },
  { name: "Why Inogen", href: "#why-inogen-section" },
  { name: "Solutions", href: "#solutions-section" },
  { name: "See More >>", href: "#" },
];

const productLinks = [
  { name: "Overview", href: "#products" },
  { name: "G5 System", href: "#products" },
  { name: "Rove 4 System", href: "#products" },
  { name: "Rove 6 System", href: "#products" },
];

const whyInogenLinks = [
  { name: "Overview", href: "#why-inogen-section" },
  { name: "Oxygen Therapy", href: "#solutions" },
  { name: "Cost of Ownership", href: "#hme-benefits" },
  { name: "Clinical Evidence Summary", href: "#why-inogen" },
];

const supportLinks = [
  { name: "Overview", href: "#support" },
  { name: "Returns & Exchanges", href: "#" },
  { name: "Product Materials and Videos", href: "#technology-video" },
  { name: "Discontinued Product User Manuals", href: "#" },
  { name: "See More >>", href: "#" },
];

/**
 * Footer Component
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Responsive Grid Structure:
 *    - Mobile (<768px): 2 columns (`grid-cols-2`).
 *    - Tablet (768px-1279px): 3 columns (`md:grid-cols-3`).
 *    - Desktop (>=1280px): 6 columns (`xl:grid-cols-6`).
 * 2. High-Resolution Display Scaling:
 *    - Logo and typography scale smoothly on 2K/Ultra-wide/4K displays using responsive breakpoints (min 2500px and min 3800px).
 * 3. Typography Variant Integration:
 *    - Uses `variant="footer-heading"` and `variant="footer-body"` connected to CSS rem scaling rules.
 */
const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0B3090] text-white pt-8 sm:pt-10 xl:pt-12 min-[2500px]:pt-16 min-[3800px]:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">

        {/* Main Footer Links Grid: 2 cols on mobile, 3 cols on tablet, 6 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-start">

          {/* Col 1: Logo & Mission Statement */}
          <div className="flex flex-col gap-4 sm:gap-5 col-span-2 md:col-span-1">
            <Link href="#home" className="inline-block overflow-visible" aria-label="Inogen Home">
              <img
                src="/medical/inogen/footer_logo.webp"
                alt="Inogen Footer Logo"
                className="h-9 sm:h-10 min-[1920px]:h-14 min-[2000px]:h-16 min-[2500px]:h-[84px] min-[3800px]:h-[140px] w-auto object-contain transform scale-110 sm:scale-120 min-[2000px]:scale-125 min-[2500px]:scale-135 min-[3800px]:scale-150 origin-left transition-transform"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="text-white/80 leading-relaxed xl:max-w-[100%] w-full mt-2">
              At Inogen, we’re pioneers in the development of portable oxygen technology, helping businesses reduce overhead, increase profitability and provide a superior product.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 md:pl-10 xl:pl-20 2xl:pl-28 min-[2500px]:pl-40 min-[3800px]:pl-56">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
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

          {/* Col 3: Products */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 md:pl-6 xl:pl-16 2xl:pl-24 min-[2500px]:pl-32 min-[3800px]:pl-44">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Products
            </Typography>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
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

          {/* Col 4: Contact Us - EXACT same text size (footer-body) as other columns */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 col-span-2 md:col-span-1">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
              <a
                href="tel:+390375785915"
                className="flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                <Typography variant="footer-body" color="white" className="text-white/80 group-hover:text-white !p-0 !m-0 transition-colors">
                  +39 (0)375 785915
                </Typography>
              </a>

              <a
                href="mailto:deltamedspa@pec.it"
                className="flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                <Typography variant="footer-body" color="white" className="text-white/80 group-hover:text-white break-all sm:break-normal !p-0 !m-0 transition-colors">
                  deltamedspa@pec.it
                </Typography>
              </a>

              <div className="flex items-start gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6">
                <MapPin className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white mt-1" />
                <Typography variant="footer-body" color="white" className="text-white/80 leading-snug !p-0 !m-0">
                  Via Guido Rossa 20 46019 Viadana (MN)
                </Typography>
              </div>
            </div>
          </div>

          {/* Col 5: Why Inogen */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Why Inogen
            </Typography>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
              {whyInogenLinks.map((link) => (
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

          {/* Col 6: Support */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="tracking-wide">
              Support
            </Typography>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
              {supportLinks.map((link) => (
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

        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-8 min-[2500px]:pt-12 min-[3800px]:pt-16 border-t border-white/20 text-center">
          <Typography variant="footer-body" color="white" className="text-white/80 text-center">
            © 2026 Inogen, Inc. All Rights Reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
