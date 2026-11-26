"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "IFU", href: "#ifu" },
  { name: "News", href: "#news" },
];

const productLinks = [
  { name: "Open Surgery", href: "#products" },
  { name: "Endoscopy", href: "#products" },
  { name: "VEQTRON", href: "#products" },
];

/**
 * AMNOTEC Footer Component
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Background: #134093 (Deep AMNOTEC Blue), text white
 * - Col 1: White logo + mission copy
 * - Col 2: Quick Links
 * - Col 3: Products
 * - Col 4: Contact Us (phone, address in Neuhausen ob Eck, email)
 * - Col 5: Social Media links
 * - Bottom Sub-footer Bar: Background white, text black: Copyright © 2026 Amnotec | Privacy Policy | Terms & Conditions
 */
const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#134093] text-white overflow-hidden">
      {/* Main Footer Links Area */}
      <div className="custom-container pt-8 sm:pt-10 pb-8 sm:pb-10 min-[2500px]:pt-16 min-[2500px]:pb-16 min-[3800px]:pt-20 min-[3800px]:pb-20">
        <div className="amnotec-footer-grid">
          
          {/* Col 1: Logo & Company Summary (Vertically Centered to the right columns) */}
          <div className="amnotec-footer-col-1 flex flex-col justify-center gap-4 min-[1036px]:self-center min-[1036px]:my-auto">
            <Link href="#home" className="inline-block" aria-label="AMNOTEC Home">
              <img
                src="/medical/amnotec/footer_logo.webp"
                alt="AMNOTEC Footer Logo"
                className="h-10 sm:h-12 min-[2500px]:h-20 min-[3800px]:h-32 w-auto object-contain transform scale-110 sm:scale-125 min-[2000px]:scale-135 min-[2500px]:scale-160 min-[3800px]:scale-190 origin-left transition-transform"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="text-white/90 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed mt-2">
              AMNOTEC Medical pioneers innovative surgical and medical technology solutions, delivering reliable technology and precise measurements to support better healthcare worldwide.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 min-[1036px]:pl-6">
            <h4 className="font-jakarta font-bold text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 font-dmsans text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-jakarta font-bold text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl text-white">
              Products
            </h4>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 font-dmsans text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us - EXACT same text size as remaining columns */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-jakarta font-bold text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl text-white">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 min-[2500px]:gap-4.5 min-[3800px]:gap-6 font-dmsans text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90">
              <a
                href="tel:+497467422970"
                className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 shrink-0 text-white" />
                <span className="break-all sm:break-normal">+49 (0) 7467 42297-0</span>
              </a>

              <div className="flex items-start gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 shrink-0 text-white mt-1 min-[2500px]:mt-1.5" />
                <span className="leading-snug">
                  take-off GewerbePark 12 78579 Neuhausen ob Eck - Germany
                </span>
              </div>

              <a
                href="mailto:info@amnotec.de"
                className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 shrink-0 text-white" />
                <span className="break-all sm:break-normal">info@amnotec.de</span>
              </a>
            </div>
          </div>

          {/* Col 5: Social Media */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-jakarta font-bold text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl text-white">
              Social
            </h4>
            <div className="flex items-center gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 text-white">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#134093] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#134093] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#134093] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#134093] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer Copyright Bar: White background with black text */}
      <div className="w-full bg-white py-3 border-t border-gray-200">
        <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-[#000000] font-dmsans">
          <div>
            Copyright &copy; 2026 Amnotec. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-[#134093] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-[#134093] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
