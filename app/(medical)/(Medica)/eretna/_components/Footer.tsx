"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#1A171B] text-white pt-16 xl:pt-24 min-[2500px]:pt-32 pb-8 overflow-hidden border-t border-white/10"
    >
      <div className="custom-container">
        {/* Main Columns Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row items-start justify-between pb-14 sm:pb-16 w-full gap-8 md:gap-x-12 md:gap-y-10 xl:gap-0">
          {/* Column 1: Brand Info */}
          <div className="w-full md:col-span-2 xl:w-[35%] min-[2000px]:w-[36%] min-[2500px]:w-[38%] min-[3800px]:w-[40%] xl:pr-6 2xl:pr-8 min-[2500px]:pr-12 space-y-4 min-[2500px]:space-y-6 shrink-0">
            <Link
              href="#hero"
              className="inline-flex items-center select-none group transition-transform duration-200 active:scale-95"
              aria-label="ERETNA Medical Devices Home"
            >
              <div className="relative h-[34px] sm:h-[38px] md:h-[40px] min-[2500px]:h-[56px] min-[3800px]:h-[76px] w-[180px] sm:w-[210px] md:w-[230px] min-[2500px]:w-[320px] min-[3800px]:w-[440px] brightness-0 invert opacity-95">
                <img
                  src="/medical/eretna/logo.png"
                  alt="ERETNA Medical Devices"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </Link>

            {/* Content below logo: 70% concept for big screens */}
            <Typography
              variant="footer-body"
              color="white"
              className="opacity-80 leading-[1.8] xl:max-w-[70%] max-w-[90%] w-full"
            >
              Eretna was founded in 2014 and continues its operations by prioritizing quality and reliability. Our company is certified with the European CE mark, ISO 13485:2016, and TSE Service Qualification Certificate (HYB), demonstrating compliance with national and international standards, while contributing to the sector with its domestic production capabilities.
            </Typography>
          </div>

          {/* (NO vertical divider between Column 1 and Column 2) */}

          {/* Column 2: Quick Links (~12%) */}
          <div className="w-full md:col-span-1 xl:w-[12%] min-[2000px]:w-[11%] min-[2500px]:w-[11%] min-[3800px]:w-[10%] xl:px-4 2xl:px-6 min-[2500px]:px-8 space-y-4 min-[2500px]:space-y-6 shrink-0">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className="space-y-3 min-[2500px]:space-y-5 footer-body text-white/90">
              <li>
                <Link href="#hero" className="hover:text-[#8FBFFA] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#8FBFFA] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#8FBFFA] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-[#8FBFFA] transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Vertical Divider Line (between Quick Links and Contact Us on desktop xl+) */}
          <div className="hidden xl:block w-px self-stretch my-2 bg-white/20 shrink-0 min-h-[160px] min-[2500px]:min-h-[240px] min-[3800px]:min-h-[320px]" aria-hidden="true" />

          {/* Column 3: Contact Us (~22%) */}
          <div className="w-full md:col-span-1 xl:w-[22%] min-[2000px]:w-[22%] min-[2500px]:w-[21%] min-[3800px]:w-[20%] xl:px-4 2xl:px-6 min-[2500px]:px-8 space-y-4 min-[2500px]:space-y-6 shrink-0">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="space-y-3 min-[2500px]:space-y-5 footer-body text-white/90">
              {/* Phone */}
              <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                <div className="shrink-0 w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 flex items-center justify-center text-white">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+902164700562" className="hover:text-[#8FBFFA] transition-colors">
                  +90 216 470 05 62
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                <div className="shrink-0 w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 flex items-center justify-center text-white">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@eretna.eu" className="hover:text-[#8FBFFA] transition-colors">
                  info@eretna.eu
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5 min-[2500px]:gap-4 pt-1">
                <div className="shrink-0 w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 flex items-center justify-center text-white mt-0.5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="leading-snug">
                  Eretna Headquarters,<br />
                  Bağlarbaşı Mh, Sakarya Sk No:13,<br />
                  34844 Maltepe, Istanbul, Turkey
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Divider Line (between Contact Us and Socials on desktop xl+) */}
          <div className="hidden xl:block w-px self-stretch my-2 bg-white/20 shrink-0 min-h-[160px] min-[2500px]:min-h-[240px] min-[3800px]:min-h-[320px]" aria-hidden="true" />

          {/* Column 4: Socials (~8%) */}
          <div className="w-full md:col-span-1 xl:w-[8%] min-[2000px]:w-[8%] min-[2500px]:w-[7%] min-[3800px]:w-[6%] xl:px-4 2xl:px-6 min-[2500px]:px-8 space-y-4 min-[2500px]:space-y-6 shrink-0">
            <Typography variant="footer-heading" color="white">
              Socials
            </Typography>
            <div className="flex items-center gap-3 min-[2500px]:gap-5">
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 flex items-center justify-center text-white hover:text-[#8FBFFA] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 flex items-center justify-center text-white hover:text-[#8FBFFA] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Vertical Divider Line (between Socials and Newsletter on desktop xl+) */}
          <div className="hidden xl:block w-px self-stretch my-2 bg-white/20 shrink-0 min-h-[160px] min-[2500px]:min-h-[240px] min-[3800px]:min-h-[320px]" aria-hidden="true" />

          {/* Column 5: Newsletter (~23% to 24%) */}
          <div className="w-full md:col-span-1 xl:w-[23%] min-[2000px]:w-[23%] min-[2500px]:w-[23%] min-[3800px]:w-[24%] xl:pl-6 2xl:pl-8 min-[2500px]:pl-10 space-y-4 min-[2500px]:space-y-6 shrink-0">
            <Typography variant="footer-heading" color="white">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white" className="opacity-80">
              Be the first to know about new collections and exclusive offers.
            </Typography>

            {/* Newsletter Form: Button is an inline flex item inside the white rounded box so it can NEVER pop out */}
            <form onSubmit={handleSubscribe} className="w-full mt-2">
              <div className="flex items-center w-full bg-white rounded-full p-1.5 sm:p-2 min-[2500px]:p-3 min-[3800px]:p-4 shadow-sm focus-within:ring-2 focus-within:ring-[#3452A7]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-Mail ID"
                  className="flex-1 bg-transparent text-[#111111] font-dmsans text-[13px] sm:text-[14px] min-[2500px]:text-[18px] min-[3800px]:text-[24px] px-3.5 sm:px-4 min-[2500px]:px-6 py-1 min-[2500px]:py-2 focus:outline-none placeholder:text-gray-400 min-w-0"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#3452A7] hover:bg-[#284189] text-white font-exo text-[12px] sm:text-[13px] min-[2500px]:text-[16px] min-[3800px]:text-[22px] font-medium px-4 sm:px-5 min-[2500px]:px-8 min-[3800px]:px-10 py-2 min-[2500px]:py-3 min-[3800px]:py-4 rounded-full transition-colors cursor-pointer select-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-xs text-green-400 font-medium pt-1">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom Horizontal Divider Line */}
        <div className="w-full h-px bg-white/20 mb-6" />

        {/* Copyright */}
        <div className="text-center font-dmsans text-[13.5px] sm:text-[14px] min-[2500px]:text-[17px] text-white/75">
          <p>© 2026 Tekno-Eretna Medical Devices Ltd All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
