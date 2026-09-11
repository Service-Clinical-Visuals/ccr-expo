"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#003470] text-white pt-10 sm:pt-12 lg:pt-14 xl:pt-16 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-6 sm:pb-8 min-[2500px]:pb-10 min-[3800px]:pb-14 overflow-hidden"
    >
      <div className="custom-container flex flex-col">
        {/* Top Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 min-[2500px]:gap-16 items-start">
          {/* Logo */}
          <div className="w-full lg:col-span-4 xl:col-span-4 flex items-start shrink-0">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/biotech/images/logo.png"
                alt="Biotech Logo"
                className="w-[240px] sm:w-[300px] lg:w-[415px] min-[2500px]:w-[560px] min-[3800px]:w-[720px] h-auto max-h-[64px] lg:max-h-[72px] min-[2500px]:max-h-[100px] min-[3800px]:max-h-[130px] object-contain select-none"
              />
            </Link>
          </div>

          {/* 3 Information Columns */}
          <div className="w-full lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-6 xl:gap-10 min-[2500px]:gap-14">
            {/* Column 1: Quick Links */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5">
              <Typography variant="footer-heading" color="white">
                Biotech GmbH
              </Typography>
              <ul className="flex flex-col gap-2 min-[2500px]:gap-3 text-white text-[14px] sm:text-[15px] xl:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] leading-[150%] font-[var(--font-secondary)] font-normal">
                <li>
                  <Link href="#home" className="hover:text-[#DBB001] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pharmaceutical"
                    className="hover:text-[#DBB001] transition-colors"
                  >
                    Biotech Pharmaceutical
                  </Link>
                </li>
                <li>
                  <Link
                    href="#surgical-technique"
                    className="hover:text-[#DBB001] transition-colors"
                  >
                    Surgical Technique
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#DBB001] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacy"
                    className="hover:text-[#DBB001] transition-colors whitespace-normal"
                  >
                    Privacy Policy / Datecnschutzerklarung
                  </Link>
                </li>
                <li>
                  <Link href="#catalog" className="hover:text-[#DBB001] transition-colors">
                    Product Catalog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Headquarters */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5">
              <Typography variant="footer-heading" color="white">
                Biotech GmbH
              </Typography>
              <div className="flex flex-col gap-2.5 min-[2500px]:gap-4 text-white text-[14px] sm:text-[15px] xl:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] leading-[150%] font-[var(--font-secondary)] font-normal">
                <div className="flex items-start gap-2.5 min-[2500px]:gap-4">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 text-white shrink-0 mt-0.5" />
                  <span>Hauptstraße 113. 56598 Rheinbrohl Germany,</span>
                </div>
                <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                  <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 text-white shrink-0" />
                  <a
                    href="tel:+492635922210"
                    className="hover:text-[#DBB001] transition-colors whitespace-nowrap"
                  >
                    +49 2635 92221-0
                  </a>
                </div>
                <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 text-white shrink-0" />
                  <a
                    href="mailto:office-de@biotech-medical.net"
                    className="hover:text-[#DBB001] transition-colors break-all"
                  >
                    office-de@biotech-medical.net
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Managing Director */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5">
              <Typography variant="footer-heading" color="white">
                Managing Director
              </Typography>
              <div className="flex flex-col gap-2.5 min-[2500px]:gap-4 text-white text-[14px] sm:text-[15px] xl:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] leading-[150%] font-[var(--font-secondary)] font-normal">
                <p className="text-white">Dr. Ghazi Alkaysi</p>
                <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                  <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 text-white shrink-0" />
                  <a
                    href="tel:+4915167311635"
                    className="hover:text-[#DBB001] transition-colors whitespace-nowrap"
                  >
                    +49 151 67311635
                  </a>
                </div>
                <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 text-white shrink-0" />
                  <a
                    href="mailto:ag@biotech-medical.net"
                    className="hover:text-[#DBB001] transition-colors break-all"
                  >
                    ag@biotech-medical.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] min-[2500px]:h-[3px] bg-[#D9D9D9] mt-8 lg:mt-10 min-[2500px]:mt-14" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-5 min-[2500px]:mt-7 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[17px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] text-white font-[var(--font-secondary)] font-normal leading-[150%]">
          <p className="text-center sm:text-left">© 2026 Biotech GmbH. All rights reserved.</p>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Link
                href="#privacy"
                className="underline underline-offset-4 hover:text-[#DBB001] transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="#cookie"
                className="underline underline-offset-4 hover:text-[#DBB001] transition-colors whitespace-nowrap"
              >
                Cookie Policy
              </Link>
              <span>|</span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="whitespace-nowrap">Follow Us :</span>
              <div className="flex items-center gap-2 min-[2500px]:gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] min-[2500px]:w-8 min-[2500px]:h-8 flex items-center justify-center text-white hover:text-[#DBB001] transition-colors"
                >
                  <Linkedin className="w-full h-full" strokeWidth={1.75} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] min-[2500px]:w-8 min-[2500px]:h-8 flex items-center justify-center text-white hover:text-[#DBB001] transition-colors"
                >
                  <Twitter className="w-full h-full" strokeWidth={1.75} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] min-[2500px]:w-8 min-[2500px]:h-8 flex items-center justify-center text-white hover:text-[#DBB001] transition-colors"
                >
                  <Facebook className="w-full h-full" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
