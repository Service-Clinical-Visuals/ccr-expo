"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#005BAA] !text-white pt-14 sm:pt-16 min-[2500px]:pt-28 min-[3800px]:pt-36 pb-8 min-[2500px]:pb-14 min-[3800px]:pb-20 overflow-hidden"
    >
      <div className="custom-container">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 items-start">
          
          {/* Quick Links */}
          <div className="col-span-1 xl:col-span-2 order-1 xl:order-1 flex flex-col">
            <Typography
              variant="h4"
              color="white"
              className="font-['Exo_2'] font-bold !text-white"
            >
              Quick Links
            </Typography>
            <div className="w-full h-[1px] min-[2500px]:h-[2px] min-[3800px]:h-[3px] bg-white/40 mt-1.5 min-[2500px]:mt-3 mb-4 min-[2500px]:mb-7" />
            <ul className="flex flex-col space-y-3 min-[2500px]:space-y-5 min-[3800px]:space-y-7 text-sm sm:text-[14.5px] min-[2500px]:text-2xl min-[3800px]:text-3xl !text-white font-['Alexandria']">
              <li>
                <a href="#home" className="!text-white text-white hover:underline transition-all block font-normal">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#product-categories"
                  className="flex items-center gap-1.5 !text-white text-white hover:underline transition-all font-normal"
                >
                  <span className="!text-white">Medical technology</span>
                  <ChevronDown className="w-3.5 h-3.5 min-[2500px]:w-6 min-[3800px]:w-8 !text-white shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="#custom-bags"
                  className="flex items-center gap-1.5 !text-white text-white hover:underline transition-all font-normal"
                >
                  <span className="!text-white">Textile Technology</span>
                  <ChevronDown className="w-3.5 h-3.5 min-[2500px]:w-6 min-[3800px]:w-8 !text-white shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 xl:col-span-2 order-2 xl:order-2 flex flex-col">
            <Typography
              variant="h4"
              color="white"
              className="font-['Exo_2'] font-bold !text-white"
            >
              Company
            </Typography>
            <div className="w-full h-[1px] min-[2500px]:h-[2px] min-[3800px]:h-[3px] bg-white/40 mt-1.5 min-[2500px]:mt-3 mb-4 min-[2500px]:mb-7" />
            <ul className="flex flex-col space-y-3 min-[2500px]:space-y-5 min-[3800px]:space-y-7 text-sm sm:text-[14.5px] min-[2500px]:text-2xl min-[3800px]:text-3xl !text-white font-['Alexandria']">
              <li>
                <a href="#about" className="!text-white text-white hover:underline transition-all block font-normal">
                  Pursue
                </a>
              </li>
              <li>
                <a href="#cpap" className="!text-white text-white hover:underline transition-all block font-normal">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* HUM Logo Badge */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-4 order-first xl:order-3 flex items-center justify-center py-2 sm:py-4 xl:py-0">
            <Link href="#home" className="inline-block transition-transform hover:scale-105">
              <div className="bg-white px-7 sm:px-9 lg:px-10 xl:px-11 min-[2500px]:px-18 min-[3800px]:px-24 py-4 sm:py-5 lg:py-6 min-[2500px]:py-9 min-[3800px]:py-14 flex items-center justify-center shadow-lg">
                <img
                  src="/medical/hum-gmbh/footer_logo.jpg"
                  alt="HUM Logo"
                  className="h-11 sm:h-13 lg:h-15 xl:h-[70px] min-[2500px]:h-[125px] min-[3800px]:h-[175px] w-auto object-contain select-none"
                />
              </div>
            </Link>
          </div>

          {/* Terms of Use */}
          <div className="col-span-1 xl:col-span-2 order-3 xl:order-4 flex flex-col">
            <Typography
              variant="h4"
              color="white"
              className="font-['Exo_2'] font-bold !text-white"
            >
              Terms of Use
            </Typography>
            <div className="w-full h-[1px] min-[2500px]:h-[2px] min-[3800px]:h-[3px] bg-white/40 mt-1.5 min-[2500px]:mt-3 mb-4 min-[2500px]:mb-7" />
            <ul className="flex flex-col space-y-3 min-[2500px]:space-y-5 min-[3800px]:space-y-7 text-sm sm:text-[14.5px] min-[2500px]:text-2xl min-[3800px]:text-3xl !text-white font-['Alexandria']">
              <li>
                <a href="#contact" className="!text-white text-white hover:underline transition-all block font-normal">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#contact" className="!text-white text-white hover:underline transition-all block font-normal">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#contact" className="!text-white text-white hover:underline transition-all block font-normal">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1 xl:col-span-2 order-4 xl:order-5 flex flex-col">
            <Typography
              variant="h4"
              color="white"
              className="font-['Exo_2'] font-bold !text-white"
            >
              Social Links
            </Typography>
            <div className="w-full h-[1px] min-[2500px]:h-[2px] min-[3800px]:h-[3px] bg-white/40 mt-1.5 min-[2500px]:mt-3 mb-4 min-[2500px]:mb-7" />
            <div className="flex items-center space-x-3.5 min-[2500px]:space-x-6 min-[3800px]:space-x-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-13 min-[2500px]:h-13 min-[3800px]:w-16 min-[3800px]:h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-14 min-[3800px]:h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-13 min-[2500px]:h-13 min-[3800px]:w-16 min-[3800px]:h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-14 min-[3800px]:h-14" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4.5" fill="#FFFFFF" />
                  <path d="M15 8.5H13.2C12.5 8.5 12 8.9 12 9.8V12H15L14.5 15H12V24H8.5V15H6V12H8.5V9.5C8.5 6.8 10.2 5 13.2 5H15V8.5Z" fill="#005BAA" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-13 min-[2500px]:h-13 min-[3800px]:w-16 min-[3800px]:h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-14 min-[3800px]:h-14" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4.5" fill="#FFFFFF" />
                  <path d="M5.5 9h3v11h-3V9zm1.5-5.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM11 9h2.8v1.5h.04c.39-.74 1.35-1.55 2.8-1.55 3 0 3.56 1.98 3.56 4.55V20h-3v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.65V20h-3V9z" fill="#005BAA" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] min-[2500px]:h-[2px] bg-white/20 mt-12 sm:mt-14 min-[2500px]:mt-20 mb-6 min-[2500px]:mb-10" />

        <div className="text-center">
          <p className="text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-2xl !text-white font-['Alexandria']">
            © 2026 - HUM-GMBH. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
