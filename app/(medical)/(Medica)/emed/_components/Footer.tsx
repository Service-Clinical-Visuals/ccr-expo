"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer id="contact" className="w-full emed-bg text-white pt-14 sm:pt-16 lg:pt-20 min-[2000px]:pt-28 min-[2500px]:pt-36 min-[3800px]:pt-48 pb-8 min-[2000px]:pb-14 min-[2500px]:pb-20 min-[3800px]:pb-28 overflow-hidden">
      <div className="w-[92%] sm:w-[90%] lg:w-[92%] 2xl:w-[94%] min-[2500px]:w-[95%] min-[3800px]:w-[96%] mx-auto">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 min-[2000px]:gap-12 min-[2500px]:gap-16 items-start">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 flex flex-col space-y-4 min-[2000px]:space-y-6">
            <Link href="#home" className="inline-block">
              <div className="bg-white px-5 py-3.5 sm:px-6 sm:py-4 min-[2000px]:px-10 min-[2000px]:py-6 min-[2500px]:px-14 min-[2500px]:py-8 min-[3800px]:px-20 min-[3800px]:py-10 rounded-none inline-block shadow-sm">
                <img
                  src="/medical/emed/logo.png"
                  alt="EMED"
                  className="footer-logo-img h-10 sm:h-12 md:h-13 min-[2000px]:h-20 min-[2500px]:h-28 min-[3800px]:h-40 w-auto object-contain select-none transition-transform"
                />
              </div>
            </Link>
            <Typography
              variant="p"
              color="white"
              className="font-['Outfit'] text-white/90 text-sm sm:text-[14.5px] min-[2000px]:text-[18px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-relaxed max-w-none pr-4"
            >
              Discover EMED’s accessories and surgical instruments designed to complement its electrosurgical systems. These solutions support efficient procedures and reliable clinical performance.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3 sm:space-y-4 min-[2000px]:space-y-6">
            <Typography
              variant="h4"
              color="white"
              className="font-['Outfit'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] min-[2000px]:text-[26px] min-[2500px]:text-[34px] min-[3800px]:text-[48px] text-white"
            >
              Quick Links
            </Typography>
            <ul className="flex flex-col space-y-2 min-[2000px]:space-y-3 min-[2500px]:space-y-4 text-sm sm:text-[14.5px] min-[2000px]:text-[17px] min-[2500px]:text-[22px] min-[3800px]:text-[30px] font-['Outfit'] text-white/90">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors block">
                  Company
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white hover:underline transition-colors block">
                  Products
                </a>
              </li>
              <li>
                <a href="#atom-360" className="hover:text-white hover:underline transition-colors block">
                  Applications
                </a>
              </li>
              <li className="pt-0.5">
                <a href="#solutions" className="text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                  See More &gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3 sm:space-y-4 min-[2000px]:space-y-6">
            <Typography
              variant="h4"
              color="white"
              className="font-['Outfit'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] min-[2000px]:text-[26px] min-[2500px]:text-[34px] min-[3800px]:text-[48px] text-white"
            >
              Products
            </Typography>
            <ul className="flex flex-col space-y-2 min-[2000px]:space-y-3 min-[2500px]:space-y-4 text-sm sm:text-[14.5px] min-[2000px]:text-[17px] min-[2500px]:text-[22px] min-[3800px]:text-[30px] font-['Outfit'] text-white/90">
              <li>
                <a href="#solutions" className="hover:text-white hover:underline transition-colors block capitalize">
                  Electrosurgical Units
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white hover:underline transition-colors block">
                  ThermoStapler®
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white hover:underline transition-colors block capitalize">
                  Argon
                </a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-white hover:underline transition-colors block capitalize">
                  Accessories & Instruments
                </a>
              </li>
              <li className="pt-0.5">
                <a href="#accessories" className="text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                  See More &gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3 sm:space-y-4 min-[2000px]:space-y-6">
            <Typography
              variant="h4"
              color="white"
              className="font-['Outfit'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] min-[2000px]:text-[26px] min-[2500px]:text-[34px] min-[3800px]:text-[48px] text-white"
            >
              Contact Us
            </Typography>
            <div className="space-y-3 min-[2000px]:space-y-4 text-sm sm:text-[14px] min-[2000px]:text-[17px] min-[2500px]:text-[22px] min-[3800px]:text-[30px] font-['Outfit'] text-white/90">
              <a href="tel:+48224556661" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 min-[2000px]:w-6 min-[2000px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0" />
                <span>+48 22 455 66 61</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 min-[2000px]:w-6 min-[2000px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <p className="font-semibold text-white">Siedziba Główna</p>
                  <p>Ryżowa, 84b, Opacz Kolonia,</p>
                  <p>Mazowieckie 05-816, PL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-3 sm:space-y-4 min-[2000px]:space-y-6">
            <Typography
              variant="h4"
              color="white"
              className="font-['Outfit'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] min-[2000px]:text-[26px] min-[2500px]:text-[34px] min-[3800px]:text-[48px] text-white"
            >
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 min-[2000px]:gap-5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[2000px]:w-14 min-[2000px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-[#006B96]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 min-[2000px]:w-14 min-[2000px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-[#006B96]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 min-[2000px]:w-14 min-[2000px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-[#006B96]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-white/20 mt-12 sm:mt-16 min-[2000px]:mt-20 min-[2500px]:mt-24 mb-6 min-[2000px]:mb-10" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm min-[2000px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90 font-['Outfit']">
            Copyright © 2026 EMED. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
