"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFF3F3] text-[var(--color-secondary)] pt-14 sm:pt-18 lg:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Top Grid: 2 columns on mobile, 12 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-8 sm:gap-6 lg:gap-6 xl:gap-8 items-start">
          {/* Column 1: Logo & Company Summary */}
          <div className="col-span-2 lg:col-span-4 flex flex-col space-y-4 pr-0 lg:pr-6">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/hermann/logo.webp"
                alt="Hermann Medizintechnik Logo"
                className="h-7 sm:h-8 min-[2500px]:h-12 min-[3800px]:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-[var(--color-secondary)] text-sm sm:text-base min-[3800px]:text-2xl leading-relaxed font-medium pt-1 max-w-[380px] xl:max-w-[80%] min-[2500px]:max-w-[500px]">
              Hermann Medizintechnik develops and provides specialised medical devices and solutions for endoscopy, laparoscopy, arthroscopy, and general surgery.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="font-semibold text-lg sm:text-xl min-[3800px]:text-3xl text-[var(--color-secondary)] mb-1">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base min-[3800px]:text-2xl font-medium">
              <li>
                <a href="#home" className="hover:text-[var(--color-primary)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--color-primary)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#history" className="hover:text-[var(--color-primary)] transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[var(--color-primary)] transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#about" className="font-semibold underline underline-offset-2 hover:text-[var(--color-primary)] transition-colors">
                  See More &gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="font-semibold text-lg sm:text-xl min-[3800px]:text-3xl text-[var(--color-secondary)] mb-1">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base min-[3800px]:text-2xl font-medium">
              <li>
                <a href="#products" className="hover:text-[var(--color-primary)] transition-colors">
                  Laparoscopy
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[var(--color-primary)] transition-colors">
                  Endoscopic Units
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[var(--color-primary)] transition-colors">
                  Electrosurgery
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[var(--color-primary)] transition-colors">
                  Arthroscopy
                </a>
              </li>
              <li>
                <a href="#products" className="font-semibold underline underline-offset-2 hover:text-[var(--color-primary)] transition-colors">
                  See More&gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="font-semibold text-lg sm:text-xl min-[3800px]:text-3xl text-[var(--color-secondary)] mb-1">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base min-[3800px]:text-2xl font-medium">
              <li>
                <a
                  href="tel:+49746399670"
                  className="flex items-center gap-2.5 hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
                  <span style={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit", lineHeight: "inherit" }}>
                    +49 74 63 - 99 67 - 0
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hermann-medizintechnik.de"
                  className="flex items-center gap-2.5 hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
                  <span className="break-all" style={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit", lineHeight: "inherit" }}>
                    info@hermann-medizintechnik.de
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-[var(--color-primary)] shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="leading-snug" style={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit", lineHeight: "inherit" }}>
                    Württemberger Str. 26, 78567 Fridingen, Germany
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Services */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="font-semibold text-lg sm:text-xl min-[3800px]:text-3xl text-[var(--color-secondary)] mb-1">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base min-[3800px]:text-2xl font-medium">
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-[var(--color-primary)] transition-colors">
                  Quality
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-[var(--color-primary)] transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--color-primary)] transition-colors">
                  OEM Manufacturing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(17,17,17,0.18)] my-8 sm:my-10" />

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm min-[3800px]:text-xl text-[var(--color-secondary)] font-medium">
            © 2026 Hermann Medizintechnik GmbH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
