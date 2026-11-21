"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#solutions" },
  { name: "Sales", href: "#products" },
  { name: "See More", href: "#" },
];

/**
 * Footer Component - EMTEL
 *
 * FIGMA SPECIFICATIONS (Vector 2 / Group 501):
 * 1. Background Theme:
 *    - Signature EMTEL blue (#2F84B0).
 *    - Smooth, continuous mathematical arch curve (Vector 2: 1920x525) across the entire width.
 * 2. Branding:
 *    - Uses `/medical/emtel/footer_logo.webp` directly on the blue background.
 * 3. 5-Column Organization:
 *    - Col 1: Footer Logo + Corporate description.
 *    - Col 2: Quick Links (Home, About Us, Services, Sales, See More).
 *    - Col 3: Contact Us (Phone, Address, Email with icons).
 *    - Col 4: Technical Department & Office contacts.
 *    - Col 5: Newsletter Subscription with pill input.
 * 4. Bottom Legal Bar:
 *    - Dashed white line divider (Line 4), Copyright text, Privacy Policy, Terms & Conditions.
 */
const Footer = () => {
  return (
    <footer id="contact" className="w-full relative overflow-hidden bg-transparent">
      {/* Smooth Arched Top Curve across entire width (Pronounced arch: center more height, sides shorter) */}
      <div className="w-full overflow-hidden leading-none -mb-[1px] pointer-events-none select-none">
        <svg
          viewBox="0 0 1920 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-20 md:h-28 lg:h-36 xl:h-40 block text-[#2F84B0]"
        >
          <path
            d="M0 140 Q960 0 1920 140 L1920 140 L0 140 Z"
            fill="#2F84B0"
          />
        </svg>
      </div>

      {/* Main Footer Body with #2F84B0 Background */}
      <div className="w-full bg-[#2F84B0] text-white pt-6 sm:pt-10 lg:pt-12 pb-8 sm:pb-10">
        <div className="custom-container flex flex-col gap-10 sm:gap-14">

          {/* 5-Column Content Grid (3 + 2 + 2 + 2 + 3 = 12 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Col 1: Brand & Mission with footer_logo.png */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Link href="#home" className="inline-block w-fit" aria-label="EMTEL Home">
              <img
                src="/medical/emtel/footer_logo.webp"
                alt="EMTEL Logo"
                className="h-10 sm:h-12 min-[2500px]:h-18 min-[3800px]:h-24 w-auto object-contain transition-transform transform scale-110 sm:scale-125 min-[2500px]:scale-135 min-[3800px]:scale-150 origin-left"
              />
            </Link>

            <Typography
              variant="footer-body"
              color="white"
              className="text-sm sm:text-base text-white/90 leading-relaxed w-full max-w-full xl:max-w-[70%] mt-2"
            >
              EMTEL is a Polish Medical Equipment Manufacturer Specializing In Advanced Patient Monitoring Systems And Defibrillators. With Over 30 Years Of Experience, The Company Delivers Reliable Medical Technologies That Support Healthcare Professionals And Improve Patient Care Worldwide.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="footer-heading font-primary font-bold text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="footer-body text-sm sm:text-base text-white/85 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="footer-heading font-primary font-bold text-white">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-white/90">
              <a
                href="tel:+48322719013"
                className="footer-body text-sm sm:text-base flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0 text-white" />
                <span className="text-sm sm:text-base !text-[inherit]">+48 32 271 90 13</span>
              </a>

              <div className="footer-body text-sm sm:text-base flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-white mt-1" />
                <span className="leading-snug text-sm sm:text-base !text-[inherit]">
                  41-807 Zabrze, A. Mickiewicza 66, POLAND
                </span>
              </div>

              <a
                href="mailto:medical@emtel.pl"
                className="footer-body text-sm sm:text-base flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 shrink-0 text-white" />
                <span className="text-sm sm:text-base !text-[inherit]">medical@emtel.pl</span>
              </a>
            </div>
          </div>

          {/* Col 4: Technical & Office Contacts */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div>
              <h4 className="footer-heading font-primary font-bold text-white">
                Technical department:
              </h4>
              <Typography
                variant="footer-body"
                color="white"
                className="text-sm sm:text-base text-white/85 mt-1 font-medium"
              >
                Marcin Sliwa
              </Typography>
            </div>

            <div>
              <h4 className="footer-heading font-primary font-bold text-white">
                Office:
              </h4>
              <Typography
                variant="footer-body"
                color="white"
                className="text-sm sm:text-base text-white/85 mt-1 font-medium"
              >
                Jolanta Golczewska
              </Typography>
            </div>
          </div>

          {/* Col 5: Newsletter Subscription Box */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="footer-heading font-primary font-bold text-white">
              Subscribe to Newsletter :
            </h4>
            <Typography
              variant="footer-body"
              color="white"
              className="text-sm sm:text-base text-white/85 leading-relaxed"
            >
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>

            <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex items-center bg-white rounded-full p-1 shadow-md w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="footer-body text-sm sm:text-base w-full px-3.5 py-2 text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="footer-body text-sm sm:text-base bg-[#0F78AF] hover:bg-[#0C6492] text-white font-semibold px-4 sm:px-5 py-2 rounded-full transition-all shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Dashed Separator (Figma: Line 4) */}
        <div className="w-full border-t border-dashed border-white/40" />

        {/* Bottom Legal / Copyright Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-white/85">
          <Typography variant="footer-body" color="white" className="text-sm sm:text-base text-white/85">
            Copyright © 2026 EMTEL. All Rights Reserved.
          </Typography>
          <div className="flex items-center gap-6">
            <Link href="#" className="footer-body text-sm sm:text-base hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-body text-sm sm:text-base hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
