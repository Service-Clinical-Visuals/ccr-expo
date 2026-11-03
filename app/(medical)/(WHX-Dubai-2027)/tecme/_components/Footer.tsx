"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const renderSocialIcons = () => (
    <div className="flex items-center gap-2.5 sm:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 flex-wrap">
      <a
        href="#"
        aria-label="LinkedIn"
        className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#005EAC] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
      >
        <Linkedin className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 fill-[#005EAC] stroke-none" />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#005EAC] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
      >
        <Instagram className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2} />
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#005EAC] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
      >
        <Facebook className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 fill-[#005EAC] stroke-none" />
      </a>
      <a
        href="#"
        aria-label="Twitter / X"
        className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#005EAC] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
      >
        <svg
          className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-8 min-[3800px]:h-8 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  );

  return (
    <footer id="contact" className="w-full bg-[#005EAC] text-white pt-10 sm:pt-12 xl:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-8 min-[2500px]:pb-14 min-[3800px]:pb-20 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Top Grid Area: 2 columns on mobile/tablet up to xl, 12 columns on desktop xl+ */}
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-8 sm:gap-10 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20 items-start">
          {/* Column 1: Brand & Bio */}
          <div className="col-span-2 sm:col-span-1 xl:col-span-4 flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Link href="#home" className="inline-block shrink-0">
              <img
                src="/medical/tecme/logo.webp"
                alt="Tecme Logo"
                className="h-9 sm:h-11 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90 w-full xl:max-w-[80%] mt-2">
              Behind every inquiry is an opportunity to improve the care of critically ill patients.
              Our specialists are ready to understand your specific needs and design solutions with
              impact.
            </Typography>
          </div>

          {/* Column 2: Industries */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold uppercase tracking-wider mb-1">
              Industries
            </Typography>
            <ul className="space-y-2.5 min-[2500px]:space-y-4 min-[3800px]:space-y-6 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/85">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold uppercase tracking-wider mb-1">
              Products
            </Typography>
            <ul className="space-y-2.5 min-[2500px]:space-y-4 min-[3800px]:space-y-6 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/85">
              <li>
                <a href="#products" className="hover:text-white transition-colors">Brina / Brina Neo</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Neumovent</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">iX Series</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">uX Series</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white underline font-semibold transition-colors">See More&gt;&gt;</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold uppercase tracking-wider mb-1">
              Legal
            </Typography>
            <ul className="space-y-2.5 min-[2500px]:space-y-4 min-[3800px]:space-y-6 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/85">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Limitation Of Liability</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Legal Notice</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold uppercase tracking-wider mb-1">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 text-white/85">
              <a
                href="tel:+543514144600"
                className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                <span className="footer-body leading-normal whitespace-nowrap">+54 351 414-4600</span>
              </a>
              <a
                href="mailto:info@tecmeglobal.com"
                className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" />
                <span className="footer-body leading-normal whitespace-nowrap">info@tecmeglobal.com</span>
              </a>
            </div>

            {/* Social Media Links (Visible ONLY on desktop xl and above inside Column 5) */}
            <div className="hidden xl:flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 mt-4 min-[2500px]:mt-6 min-[3800px]:mt-10">
              <Typography variant="footer-heading" color="white" className="text-sm min-[2500px]:text-xl min-[3800px]:text-2xl font-semibold uppercase tracking-wider">
                Social Media Links
              </Typography>
              {renderSocialIcons()}
            </div>
          </div>

          {/* Column 6: Social Media Links (Parallel to Contact Us on Tablet, iPad Air, iPad Pro, and Mobile) */}
          <div className="col-span-2 sm:col-span-1 xl:hidden flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <Typography variant="footer-heading" color="white" className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-1">
              Social Media Links
            </Typography>
            {renderSocialIcons()}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30" />

        {/* Bottom Bar */}
        <div className="text-center">
          <Typography variant="footer-body" color="white" className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-white/80">
            © 2026 Tecme Global, All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
