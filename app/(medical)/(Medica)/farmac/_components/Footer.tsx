"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#24559c] text-white pt-14 sm:pt-18 md:pt-20 pb-8 sm:pb-8">
      <div className="custom-container">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-8 pb-12 sm:pb-16">
          {/* Column 1: Brand Logo & Mission Statement */}
          <div className="xl:col-span-4">
            <Link href="/farmac" className="inline-block mb-4">
              <div className="relative flex items-center">
                <img
                  src="/medical/farmac/footerlogo.png"
                  alt="Farmac-Zabban Logo"
                  className="h-full w-40 sm:w-48 xl:w-86 object-contain"
                />
              </div>
            </Link>
            <p className="section-text text-white font-normal font-inter leading-relaxed max-w-xs">
              In 2012, the Med&apos;S brand was launched, embodying the company&apos;s mission of providing medical solutions.
            </p>
          </div>

          {/* Column 2: Legal & Regulatory Information */}
          <div className="xl:col-span-3">
            <h4 className="card-title font-semibold text-white font-poppins tracking-wider mb-4 uppercase">
              FARMAC-ZABBAN
            </h4>
            <div className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed">
              <p>Tax Code and Bologna Company Register 00322800376</p>
              <p>VAT Number: 00503151201</p>
              <p>Fully Paid-Up Share Capital: &euro;1,188,000</p>
              <p className="font-medium text-white mt-3">
                The information contained on this site is intended for healthcare professionals only.
              </p>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="xl:col-span-3">
            <h4 className="card-title font-semibold text-white font-poppins tracking-wider mb-4 uppercase">
              CONTACTS
            </h4>
            <div className="section-text text-white font-inter font-normal flex flex-col gap-3">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/medical/farmac/f1.png"
                  alt="Phone"
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
                <a
                  href="tel:+39051318411"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  +39 051 318411
                </a>
              </div>

              {/* Fax */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/medical/farmac/f2.png"
                  alt="Fax"
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
                <span className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed">
                  +39 051 318472
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/medical/farmac/f3.png"
                  alt="Email"
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
                <a
                  href="mailto:company@farmaczabban.it"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  company@farmaczabban.it
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <img
                  src="/medical/farmac/f4.png"
                  alt="Address"
                  className="w-4 h-5 object-contain flex-shrink-0 mt-0.5"
                />
                <p className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed">
                  Via Persicetana, 26
                  <br />
                  40012 Calderara Di Reno Bologna (BO)
                  <br />
                  Italy (IT)
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Useful Links */}
          <div className="xl:col-span-2">
            <h4 className="card-title font-semibold text-white font-poppins tracking-wider mb-4 uppercase">
              USEFUL LINKS
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#products"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#customer-supplier"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  Customer and Supplier
                </Link>
              </li>
              <li>
                <Link
                  href="#customer-supplier"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#cookie"
                  className="section-text text-white font-inter font-normal flex flex-col gap-1.5 leading-relaxed"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/60 mb-3 sm:mb-8" />

        {/* Bottom Bar: Social Icons */}
        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white hover:border-white transition-all hover:scale-110"
          >
            <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* X (formerly Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white hover:border-white transition-all hover:scale-110"
          >
            <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8  flex items-center justify-center text-white/90 hover:text-white hover:border-white transition-all hover:scale-110"
          >
            <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8  flex items-center justify-center text-white/90 hover:text-white hover:border-white transition-all hover:scale-110"
          >
            <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
