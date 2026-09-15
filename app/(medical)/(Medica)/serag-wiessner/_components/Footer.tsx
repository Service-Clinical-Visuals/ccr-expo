"use client";

import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  quickLinks: [
    { label: "About SERAG-WIESSNER", href: "#about" },
    { label: "Quality", href: "#quality" },
    { label: "Services", href: "#service" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Absorbable Suture Material", href: "#product-solutions" },
    { label: "Non-Absorbable Suture Material", href: "#product-solutions" },
    { label: "Surgical Needles", href: "#product-solutions" },
    { label: "Textile Implants", href: "#product-solutions" },
    { label: "See More", href: "#product-solutions", isUnderline: true },
  ],
  service: [
    { label: "Downloads", href: "#downloads" },
    { label: "EIFU Portal", href: "#eifu" },
    { label: "Video Portal", href: "#videos" },
    { label: "Conferences & Events", href: "#events" },
  ],
  legal: [
    { label: "Legal Notice", href: "#legal" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Data Protection Settings", href: "#data-protection" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#87203e] text-white pt-14 sm:pt-20 pb-8 sm:pb-12">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12" >
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-12 gap-8 xl:gap-10 pb-10 sm:pb-14" data-aos="fade-up"
          data-aos-duration="800">
          {/* Column 1: Logo & Company Summary */}
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-4 flex flex-col items-start">
            <Link href="/serag-wiessner" className="inline-block group focus:outline-none">
              <div className="relative h-10 sm:h-15 md:h-20 xl:h-20 flex items-center">
                <img
                  src="/medical/serag-wiessner/footer-logo.png"
                  alt="SERAG WIESSNER"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="section-text text-white font-outfit mt-4 sm:mt-5 max-w-sm leading-relaxed">
              SERAG-WIESSNER develops high-quality surgical solutions with a strong focus
              on innovation, reliability, quality, and patient care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2">
            <h4 className="font-exo2 font-semibold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 font-outfit">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="section-text text-white hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="xl:col-span-2">
            <h4 className="font-exo2 font-semibold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Products
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 font-outfit">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href=""
                    className={`section-text text-white hover:text-white transition-colors duration-200 ${link.isUnderline ? "underline underline-offset-4 font-medium text-white" : ""
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service */}
          <div className="xl:col-span-2">
            <h4 className="font-exo2 font-semibold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Service
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 font-outfit">
              {FOOTER_LINKS.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="xl:col-span-2">
            <h4 className="font-exo2 font-semibold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Legal
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 font-outfit">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href=""
                    className="section-text text-white font-normal hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Faint Divider Line */}
        <div className="w-full h-px bg-white/20 my-6 sm:my-8" />

        {/* Copyright */}
        <div className="text-center" data-aos="fade-up"
          data-aos-duration="800">
          <p className="section-text text-white/90 font-outfit">
            © 2026 SERAG-WIESSNER GmbH &amp; Co. KG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
