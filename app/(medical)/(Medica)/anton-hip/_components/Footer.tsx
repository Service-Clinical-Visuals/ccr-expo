"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";

// Filled LinkedIn badge matching the reference footer
const LinkedinFilledIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.34 19.04H5.37V9.5h2.97v9.54zM6.85 8.2a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zm12.19 10.84h-2.96v-4.64c0-1.11-.02-2.53-1.54-2.53-1.55 0-1.78 1.21-1.78 2.45v4.72H9.8V9.5h2.84v1.3h.04c.4-.75 1.36-1.54 2.81-1.54 3 0 3.55 1.98 3.55 4.55v5.23z" />
  </svg>
);

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
];

// Vertical dotted divider shown between columns on desktop only
const DIVIDER = "lg:border-r lg:border-dotted lg:border-[#8A8A8A]/70";

export default function Footer() {
  return (
    <footer id="contact" className="w-full relative overflow-hidden bg-[#1B191A] text-white">
      <div className="custom-container relative z-10 pt-12 sm:pt-14 lg:pt-10 xl:pt-12 pb-5 min-[3800px]:pt-24 min-[3800px]:pb-12">
        {/* Top Grid: 2 columns on mobile/tablet, 5 proportional columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-[336fr_137fr_257fr_132fr_253fr] gap-x-6 gap-y-10 sm:gap-x-10 lg:gap-x-0 lg:gap-y-0">
          {/* Column 1: Brand & About */}
          <div className="col-span-2 lg:col-span-1 lg:pr-16 xl:pr-20 min-[3800px]:pr-40 flex flex-col justify-start" data-aos="fade-up">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/anton-hip/footer-logo.png"
                alt="Anton Hipp - Instruments & Implants"
                className="h-8 sm:h-9 min-[3800px]:h-[50%] w-auto object-contain"
              />
            </Link>
            <Typography
              variant="footer-body"
              color="white"
              className="text-[#E6E6E6] leading-[1.75] mt-4 sm:mt-5 min-[3800px]:mt-8 max-w-[480px] lg:max-w-none"
            >
              Anton Hipp is a German medical technology company specializing in precision-engineered surgical instruments and implant systems. With a strong focus on quality, innovation, and advanced manufacturing, the company delivers reliable solutions for specialized surgical applications.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`${DIVIDER} flex flex-col justify-start`} data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white" weight="semibold" className="mb-4 sm:mb-5">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-3 sm:gap-3.5 min-[3800px]:gap-7">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-body text-[#E6E6E6] hover:text-[var(--color-primary)] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className={`lg:pl-9 xl:pl-10 min-[3800px]:pl-20 ${DIVIDER} flex flex-col justify-start`} data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white" weight="semibold" className="mb-4 sm:mb-5">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3.5 sm:gap-4 min-[3800px]:gap-7">
              {/* Phone */}
              <div className="flex items-center gap-2.5 sm:gap-3 min-[3800px]:gap-5">
                <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] min-[3800px]:w-8 min-[3800px]:h-8 text-white fill-white shrink-0" strokeWidth={0} />
                <a href="tel:+497463993030" className="footer-body text-[#E6E6E6] hover:text-[var(--color-primary)] transition-colors">
                  +49 7463 993030
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 sm:gap-3 min-[3800px]:gap-5">
                <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] min-[3800px]:w-8 min-[3800px]:h-8 text-[#1B191A] fill-white shrink-0" strokeWidth={2} />
                <a href="mailto:info@anton-hipp.de" className="footer-body text-[#E6E6E6] hover:text-[var(--color-primary)] transition-colors break-all">
                  info@anton-hipp.de
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5 sm:gap-3 min-[3800px]:gap-5">
                <MapPin className="w-4 h-4 sm:w-[18px] sm:h-[18px] min-[3800px]:w-8 min-[3800px]:h-8 text-[#1B191A] fill-white shrink-0 mt-0.5" strokeWidth={2.4} />
                <div className="footer-body text-[#E6E6E6] leading-[1.75]">
                  Anton Hipp GmbH<br />
                  Annastraße 25/1<br />
                  78567 Fridingen an der Donau
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div className={`lg:pl-9 xl:pl-10 min-[3800px]:pl-20 ${DIVIDER} flex flex-col justify-start`} data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white" weight="semibold" className="mb-4 sm:mb-5">
              Socials
            </Typography>
            <div className="flex items-center gap-4 sm:gap-5 min-[3800px]:gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--color-primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-11 min-[3800px]:h-11" strokeWidth={2.2} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--color-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinFilledIcon className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-11 min-[3800px]:h-11" />
              </a>
            </div>
          </div>

          {/* Column 5: Subscribe to Newsletter */}
          <div className="col-span-2 sm:col-span-1 lg:pl-10 xl:pl-11 min-[3800px]:pl-20 flex flex-col justify-start" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white" weight="semibold" className="mb-4 sm:mb-5">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white" className="text-[#E6E6E6] leading-[1.6] mb-6 lg:mb-11 min-[3800px]:mb-20">
              Be the first to know about new collections and exclusive offers.
            </Typography>

            {/* Newsletter Input Box */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white rounded-[8px] min-[3800px]:rounded-[14px] p-[5px] min-[3800px]:p-2.5 pl-0 flex items-center justify-between w-full max-w-[400px] lg:max-w-none lg:-ml-1.5"
            >
              <input
                type="email"
                placeholder="Enter Your E-Maild ID"
                className="footer-body bg-transparent text-gray-800 placeholder:text-[#9A9A9A] px-3 py-1 min-[3800px]:px-6 focus:outline-none w-full min-w-0"
              />
              <button
                type="submit"
                className="footer-body bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white !font-medium px-3.5 sm:px-4 py-1 min-[3800px]:px-8 min-[3800px]:py-2.5 rounded-[4px] min-[3800px]:rounded-[8px] transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Horizontal Dotted Divider */}
        <div className="w-full border-t border-dotted border-[#8A8A8A]/70 mt-12 lg:mt-16 mb-6 min-[3800px]:mt-28 min-[3800px]:mb-12" />

        {/* Copyright Centered */}
        <p className="footer-body text-[#E6E6E6] text-center">
          &copy; 2026 Anton Hipp All rights reserved.
        </p>
      </div>
    </footer>
  );
}
