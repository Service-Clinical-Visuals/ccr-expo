"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#A00566] text-white pt-10 sm:pt-12 xl:pt-14 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-12 xl:gap-14">
        {/* Top Grid: 2 columns in 1 row on mobile, 12 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-8 lg:gap-6 xl:gap-8 items-start">
          {/* Column 1: Logo & Medical Disclaimer (Span 2 cols on mobile, 4 cols on desktop) */}
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-6 items-start pr-0 lg:pr-6">
            <img
              src="/medical/troge-medical/logo.webp"
              alt="Troge Medical Logo"
              className="h-11 sm:h-12 w-auto object-contain brightness-0 invert origin-left transform scale-150 sm:scale-[1.7] md:scale-[1.9] xl:scale-[2.1] transition-transform duration-300 mb-2 sm:mb-3"
            />
            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-sm leading-relaxed font-normal"
            >
              The products on this site are intended for Healthcare Professionals only. If you are a patient, it is important that you discuss information about the benefits and risks of products with your doctor.
            </Typography>
          </div>

          {/* Column 2: Quick Links (Span 1 col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-bold text-lg">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 text-white/90">
              <li>
                <Link href="#home" className="hover:text-white/70 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white/70 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white/70 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-white/70 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white font-semibold hover:underline">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (Span 1 col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-bold text-lg">
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5 text-white/90">
              <li>
                <Link href="#products" className="hover:text-white/70 transition-colors">
                  Medical Devices
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white/70 transition-colors">
                  Pharmaceuticals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: How Can We Help You? (Span 1 col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-bold text-lg">
              How Can We Help You?
            </Typography>
            <ul className="flex flex-col gap-2.5 text-white/90">
              <li>
                <Link href="#contact" className="hover:text-white/70 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white/70 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white/70 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white/70 transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (Span 1 col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-bold text-lg">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-2.5 text-white/90">
              <li>
                <a
                  href="tel:+49404418440"
                  className="flex items-center gap-2.5 min-[2500px]:gap-4 hover:text-white/70 transition-colors"
                >
                  <Phone className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                  +49 40 44 18 44 – 0
                </a>
              </li>

              <li className="flex items-start gap-2.5 min-[2500px]:gap-4">
                <MapPin className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white mt-1 min-[2500px]:mt-2" />
                <div className="leading-relaxed">
                  Milchstrasse 19
                  <br />
                  20148 Hamburg
                  <br />
                  Germany
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center py-2">
          <Typography variant="p" color="white" className="text-white/80 text-xs sm:text-sm font-normal">
            © 2010–2026 Troge Medical GmbH. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

