"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="w-full text-white pt-16 sm:pt-20 min-[2500px]:pt-28 pb-10 min-[2500px]:pb-16 overflow-hidden select-none"
      style={{
        backgroundImage: "url('/medical/neurosoft/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="custom-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 min-[2500px]:gap-12 pb-12 sm:pb-16 min-[2500px]:pb-24">
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-5 sm:space-y-6 min-[2500px]:space-y-8">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/neurosoft/footer_logo.png"
                alt="Neurosoft"
                className="h-[40px] sm:h-[48px] min-[2500px]:h-[75px] min-[3800px]:h-[100px] w-auto object-contain"
              />
            </Link>

            <p className="font-baloo font-medium text-[14px] sm:text-[15px] md:text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] leading-[150%] text-white/90 max-w-[390px] min-[2500px]:max-w-[550px]">
              Discover Neurosoft&apos;s comprehensive range of medical and diagnostic solutions, designed to support
              healthcare professionals across diverse clinical applications.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 min-[2500px]:space-y-6">
            <h4 className="font-baloo font-semibold text-[18px] sm:text-[20px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] text-white capitalize">
              Quick Links
            </h4>
            <ul className="space-y-2 min-[2500px]:space-y-3.5 font-baloo font-medium text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] text-white/85">
              <li>
                <Link href="#home" className="hover:text-[#0AADF9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#0AADF9] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#accurate-ecg" className="hover:text-[#0AADF9] transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#0AADF9] transition-colors">
                  Worldwide
                </Link>
              </li>
              <li className="pt-1">
                <Link href="#products" className="underline underline-offset-4 hover:text-[#0AADF9] transition-colors">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 min-[2500px]:space-y-6">
            <h4 className="font-baloo font-semibold text-[18px] sm:text-[20px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] text-white capitalize">
              Products
            </h4>
            <ul className="space-y-2 min-[2500px]:space-y-3.5 font-baloo font-medium text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] text-white/85">
              <li>
                <Link href="#products" className="hover:text-[#0AADF9] transition-colors">
                  Audiology
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#0AADF9] transition-colors">
                  Biomechanics
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#0AADF9] transition-colors">
                  Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#0AADF9] transition-colors">
                  Spirometry
                </Link>
              </li>
              <li className="pt-1">
                <Link href="#products" className="underline underline-offset-4 hover:text-[#0AADF9] transition-colors">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 min-[2500px]:space-y-6">
            <h4 className="font-baloo font-semibold text-[18px] sm:text-[20px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] text-white capitalize">
              Support
            </h4>
            <ul className="space-y-2 min-[2500px]:space-y-3.5 font-baloo font-medium text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] text-white/85">
              <li>
                <Link href="#contacts" className="hover:text-[#0AADF9] transition-colors">
                  Software Request
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-[#0AADF9] transition-colors">
                  System Requirements
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-[#0AADF9] transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-[#0AADF9] transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-[#0AADF9] transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4 min-[2500px]:space-y-6">
            <h4 className="font-baloo font-semibold text-[18px] sm:text-[20px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] text-white capitalize">
              Contact Us
            </h4>
            <ul className="space-y-2.5 min-[2500px]:space-y-4 font-baloo font-medium text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] text-white/85">
              <li className="flex items-center gap-2 min-[2500px]:gap-3">
                <svg className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+74932959999" className="footer-contact-text hover:text-[#0AADF9] transition-colors whitespace-nowrap text-inherit text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px]">
                  +7 (4932) 95-99-99
                </a>
              </li>
              <li className="flex items-center gap-2 min-[2500px]:gap-3">
                <svg className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@neurosoft.com" className="footer-contact-text hover:text-[#0AADF9] transition-colors break-all text-inherit text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px]">
                  info@neurosoft.com
                </a>
              </li>
              <li className="flex items-start gap-2 min-[2500px]:gap-3">
                <svg className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="footer-contact-text leading-tight text-inherit text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px]">
                  5, Voronin Str., Ivanovo, 153009
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 min-[2500px]:pt-12 border-t border-white/20 text-center">
          <p className="font-baloo font-medium text-[14px] sm:text-[15px] md:text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] text-white/90">
            &copy; All rights reserved | Neurosoft, Ivanovo, Russia, 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
