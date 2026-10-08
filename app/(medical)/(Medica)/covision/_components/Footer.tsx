"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FBFBFB] pt-8 sm:pt-10 md:pt-12 xl:pt-14 pb-8 text-[#333333]">
      <div className="custom-container flex flex-col gap-10 md:gap-12">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-12 gap-10 sm:gap-8 md:gap-8 xl:gap-8 items-start">

          {/* Col 1: Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4 xl:border-r-2 xl:border-gray-300 xl:pr-8">
            <div className="flex flex-col items-center sm:items-start xl:items-center text-center sm:text-left xl:text-center gap-4 sm:gap-6 w-full">
              <Link href="#home" className="inline-flex justify-center xl:justify-center shrink-0">
                <img
                  src="/medical/covision/logo.webp"
                  alt="Covision Medical Technologies"
                  className="h-12 sm:h-14 xl:h-24 2xl:h-28 min-[2500px]:h-36 min-[3800px]:h-48 w-auto object-contain"
                />
              </Link>
              <Typography
                variant="footer-body"
                color="muted"
                className="leading-relaxed text-sm sm:text-base text-[#4B5563] flex-1 w-full xl:max-w-[70%] xl:mx-auto text-center sm:text-left xl:text-center"
              >
                High-quality, cost-effective orthopaedic solutions across hip, knee, trauma, and spine,
                designed to deliver reliable performance and support better patient outcomes.
              </Typography>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-2 flex flex-col gap-3 sm:gap-4">
            <Typography variant="footer-heading" color="dark" className="!font-bold text-base sm:text-lg md:text-xl">
              Quick Link
            </Typography>
            <ul className="flex flex-col gap-2.5 text-sm sm:text-base">
              <li>
                <Link href="#home" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    About Us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    News
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#resources" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Downloads
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Contact Us
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-2 flex flex-col gap-3 sm:gap-4">
            <Typography variant="footer-heading" color="dark" className="!font-bold text-base sm:text-lg md:text-xl">
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5 text-sm sm:text-base">
              <li>
                <Link href="#products" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Knew Systems
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#hip-systems" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Hip Systems
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Trauma
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                  <Typography variant="footer-body" color="muted" className="text-[#4B5563] hover:text-[#FB8021] transition-colors">
                    Spine
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (Tablet/Mobile version) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 xl:hidden flex flex-col gap-3 sm:gap-4">
            <Typography variant="footer-heading" color="dark" className="!font-bold text-base sm:text-lg md:text-xl">
              Contact
            </Typography>
            <div className="flex flex-col gap-3.5 text-sm sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FB8021] shrink-0 mt-1" />
                <Typography variant="footer-body" color="muted" className="text-[#4B5563] leading-relaxed">
                  Covision Medical Technologies Ltd.,
                  <br />
                  Lawn Road, Carlton-in-Lindrick,
                  <br />
                  Worksop, Nottinghamshire S81 9LB,
                  <br />
                  United Kingdom
                </Typography>
              </div>

              {/* Phone */}
              <a
                href="tel:+4401909733737"
                className="flex items-center gap-3 text-[#4B5563] hover:text-[#FB8021] transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#FB8021] shrink-0" />
                <Typography variant="footer-body" color="muted" className="text-[#4B5563] group-hover:text-[#FB8021] transition-colors">
                  +44 (0) 1909733737
                </Typography>
              </a>

              {/* Email */}
              <a
                href="mailto:info@covision-medical.co.uk"
                className="flex items-center gap-3 text-[#4B5563] hover:text-[#FB8021] transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#FB8021] shrink-0" />
                <Typography variant="footer-body" color="muted" className="text-[#4B5563] group-hover:text-[#FB8021] transition-colors break-all sm:break-normal">
                  info@covision-medical.co.uk
                </Typography>
              </a>
            </div>
          </div>

          {/* Col 5: Social Media (Tablet/Mobile version) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 xl:hidden flex flex-col gap-3 sm:gap-4">
            <Typography variant="footer-heading" color="dark" className="!font-bold text-base sm:text-lg md:text-xl whitespace-nowrap">
              Social Media
            </Typography>
            <div className="flex flex-row items-center gap-3.5">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-md bg-[#FB8021] flex items-center justify-center text-white hover:bg-[var(--color-primary-hover)] transition-colors shadow-xs shrink-0"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-md flex items-center justify-center text-[#FB8021] hover:text-[var(--color-primary-hover)] transition-colors shrink-0"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 4: Contact (Desktop Only view) */}
          <div className="hidden xl:flex xl:col-span-3 flex-col gap-4">
            <Typography variant="footer-heading" color="dark" className="!font-bold text-lg md:text-xl">
              Contact
            </Typography>
            <div className="flex flex-col gap-3.5 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 text-[#FB8021] shrink-0 mt-1" />
                <Typography variant="footer-body" color="muted" className="text-[#4B5563] leading-relaxed">
                  Covision Medical Technologies Ltd.,
                  <br />
                  Lawn Road, Carlton-in-Lindrick,
                  <br />
                  Worksop, Nottinghamshire S81 9LB,
                  <br />
                  United Kingdom
                </Typography>
              </div>

              <a
                href="tel:+4401909733737"
                className="flex items-center gap-3 text-[#4B5563] hover:text-[#FB8021] transition-colors group"
              >
                <Phone className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 text-[#FB8021] shrink-0" />
                <Typography variant="footer-body" color="muted" className="text-[#4B5563] group-hover:text-[#FB8021] transition-colors">
                  +44 (0) 1909733737
                </Typography>
              </a>

              <a
                href="mailto:info@covision-medical.co.uk"
                className="flex items-center gap-3 text-[#4B5563] hover:text-[#FB8021] transition-colors group"
              >
                <Mail className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 text-[#FB8021] shrink-0" />
                <Typography variant="footer-body" color="muted" className="text-[#4B5563] group-hover:text-[#FB8021] transition-colors">
                  info@covision-medical.co.uk
                </Typography>
              </a>
            </div>
          </div>

          {/* Col 5: Social Media (Desktop Only view) */}
          <div className="hidden xl:flex xl:col-span-1 flex-col gap-4">
            <Typography variant="footer-heading" color="dark" className="!font-bold text-lg md:text-xl whitespace-nowrap">
              Social Media
            </Typography>
            <div className="flex flex-row items-center gap-3.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-md bg-[#FB8021] flex items-center justify-center text-white hover:bg-[var(--color-primary-hover)] transition-colors shadow-xs shrink-0"
              >
                <svg className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-md flex items-center justify-center text-[#FB8021] hover:text-[var(--color-primary-hover)] transition-colors shrink-0"
              >
                <svg className="w-8 h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-14 min-[3800px]:h-14 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Bottom Bar - Centered on mobile/tablet, spread apart on desktop */}
        <div className="relative flex flex-col xl:flex-row items-center xl:items-center justify-between gap-4 w-full text-xs sm:text-sm md:text-base text-center xl:text-left">
          {/* Copyright Text */}
          <div className="w-full xl:w-auto xl:absolute xl:left-1/2 xl:-translate-x-1/2 text-center">
            <p className="font-bold text-[#333333]">
              Copyright © 2018 All rights reserved. Covision Medical Technologies Limited
            </p>
          </div>

          {/* e-IFU link */}
          <Link
            href="#"
            className="w-full xl:w-auto xl:ml-auto font-bold text-[#333333] hover:text-[#FB8021] underline underline-offset-4 transition-colors whitespace-normal sm:whitespace-nowrap text-center xl:text-right"
          >
            Electronic Instructions for Use (e-IFU)
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;