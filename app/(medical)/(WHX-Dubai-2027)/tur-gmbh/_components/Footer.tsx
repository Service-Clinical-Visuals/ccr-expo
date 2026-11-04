"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[var(--color-secondary)] text-white overflow-hidden pt-12 sm:pt-14 lg:pt-16 pb-8">
      <div className="custom-container">
        {/* Top 5 Columns Grid (horizontally placed parallel in desktop screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8 items-start">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="#home" className="flex items-center" aria-label="TUR Logo">
              <img
                src="/medical/tur-gmbh/logo.webp"
                alt="TUR Logo"
                className="h-10 sm:h-12 min-[1920px]:h-14 min-[2500px]:h-20 min-[3800px]:h-28 w-auto object-contain brightness-0 invert transform scale-110 sm:scale-125 origin-left transition-transform duration-300"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="leading-relaxed text-white/90">
              TUR delivers reliable medical equipment and dedicated customer support through
              innovation, quality, and patient-focused solutions.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="font-semibold text-lg sm:text-xl">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 text-white/90">
              <li>
                <Link href="#about" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Go Modular
                </Link>
              </li>
              <li>
                <Link href="#news" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  News
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="#products"
                  className="footer-body font-semibold underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors"
                >
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="font-semibold text-lg sm:text-xl">
              Our Products
            </Typography>
            <ul className="flex flex-col gap-2.5 text-white/90">
              <li>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Shockwave
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Electrotherapy &amp; Ultrasound
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Isokinetic
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Cryotherapy
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="#products"
                  className="footer-body font-semibold underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors"
                >
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="font-semibold text-lg sm:text-xl">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 text-white/90">
              <a
                href="tel:+490330350880"
                className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 text-white" />
                <span className="footer-body">+49 (0) 3303 5088-0</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 text-white mt-1" />
                <span className="footer-body">Grubenstr. 20, 18055 Rostock / Germany</span>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media Links (parallely straight to remaining cols) */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="font-semibold text-lg sm:text-xl">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[1920px]:w-12 min-[1920px]:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white text-[var(--color-primary)] border border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors shadow-sm"
              >
                <Linkedin className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 min-[1920px]:w-12 min-[1920px]:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white text-[var(--color-primary)] border border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors shadow-sm"
              >
                <Facebook className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 min-[1920px]:w-12 min-[1920px]:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white text-[var(--color-primary)] border border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors shadow-sm"
              >
                <Youtube className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-white/25 mt-12 sm:mt-16 mb-6 sm:mb-8" />

        {/* Bottom Copyright */}
        <div className="text-center">
          <Typography variant="footer-body" color="white" className="text-white/80">
            Copyright © 2018-2026 TUR GmbH
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
