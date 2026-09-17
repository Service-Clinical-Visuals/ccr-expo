"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Support", href: "#contact" },
    { name: "Certificate", href: "#certificates" },
    { name: "Contact Us", href: "#contact" },
  ];

  const products = [
    "arterial seldinger catheters",
    "venous seldinger catheters",
    "electrophysiology",
    "vessel surgery",
    "thoracic drainage - accessories",
    "special products",
  ];

  return (
    <footer id="contact" className="w-full bg-[#D70A26] text-white flex flex-col overflow-hidden">
      {/* Main Footer Content */}
      <div className="custom-container pt-12 sm:pt-16 lg:pt-[70px] pb-12 sm:pb-14 lg:pb-[60px]">
        {/* Responsive Grid / Flex Layout:
            - Mobile: 2 columns in 1 row (Quick Links & Products side-by-side)
            - Tablet: Adjusted 12-col grid (Logo top full width, 3 columns side-by-side below)
            - Desktop: 4-column horizontal flex with justify-between
        */}
        <div className="grid grid-cols-2 md:grid-cols-12 lg:flex lg:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-8 lg:gap-10 xl:gap-14 w-full">
          {/* Col 1: Logo & Company Description */}
          <div className="col-span-2 md:col-span-12 lg:col-span-1 flex flex-col items-start gap-4 sm:gap-5 w-full lg:w-[30%] xl:w-[28%] shrink-0">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/intra-special/logo_weiss.png"
                alt="intra special catheters"
                className="w-[140px] sm:w-[160px] min-[2500px]:w-[210px] min-[3800px]:w-[270px] h-auto object-contain"
              />
            </Link>

            <Typography variant="footer-body" color="white" className="opacity-95 leading-relaxed max-w-[550px] lg:max-w-none">
              INTRA special catheters GmbH is a German medical-device manufacturer founded in 1977, specializing in high-quality catheter and drainage solutions for demanding clinical applications. Its products serve areas including intensive care, anaesthesia, cardiology, pneumology, emergency medicine, vascular surgery, and electrophysiology.
            </Typography>
          </div>

          {/* Col 2: Quick Links (Col 1 of the 2-col row on mobile) */}
          <div className="col-span-1 md:col-span-3 lg:col-auto flex flex-col items-start gap-3.5 sm:gap-4 shrink-0">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="footer-body text-white/90 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products (Col 2 of the 2-col row on mobile) */}
          <div className="col-span-1 md:col-span-4 lg:col-auto flex flex-col items-start gap-3.5 sm:gap-4 shrink-0">
            <Typography variant="footer-heading" color="white">
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5 sm:gap-3 lowercase">
              {products.map((prod, idx) => (
                <li key={idx}>
                  <Link
                    href="#products"
                    className="footer-body text-white/90 hover:text-white hover:underline transition-colors"
                  >
                    {prod}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="col-span-2 md:col-span-5 lg:col-auto flex flex-col items-start gap-3.5 sm:gap-4 w-full lg:w-[26%] xl:w-[26%] shrink-0">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3 sm:gap-3.5 footer-body text-white/95 w-full">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-white" strokeWidth={1.75} />
                <p className="leading-snug">
                  intra special catheters GmbH Oststrasse 2 D-66780 Rehlingen-Siersburg
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-white" strokeWidth={1.75} />
                <a
                  href="tel:+49683592260"
                  className="hover:underline transition-colors whitespace-nowrap"
                >
                  +49 / 68 35 / 92 26 - 0
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-white" strokeWidth={1.75} />
                <a
                  href="mailto:contact@intra-online.de"
                  className="hover:underline transition-colors break-words"
                >
                  contact@intra-online.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full border-t border-white/20 py-5 sm:py-6">
        <div className="custom-container text-center">
          <p className="footer-body text-white/90">
            All Rights Reserved Intra Special Catheters© 2023 Designed And Developed By Vhorus
          </p>
        </div>
      </div>
    </footer>
  );
}
