"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sales", href: "#products" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"
        />
        <path fill="#3A3A3A" d="M9.6 15.6 15.8 12 9.6 8.4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white">
      {/* Curved top */}
      <div aria-hidden className="footer-curve w-full h-[50px] sm:h-[70px] xl:h-[100px] bg-[var(--footer-bg)]" />

      <div className="bg-[var(--footer-bg)] text-white pt-8 xl:pt-6 pb-8">
        <div className="custom-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-12 gap-10 2xl:gap-8 mb-10 2xl:mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 2xl:col-span-3">
              <img
                src="/medical/dms-service/f-logo.webp"
                alt="DMS-Service"
                className="h-[30px] xl:h-[37px] min-[2560px]:h-[56px] w-auto object-contain mb-6"
              />
              <p className="footer-text font-inter text-white/90">
                DMS-Service Provides Advanced Cardiac Monitoring Solutions, Innovative ECG Devices And Reliable Holter
                Scanning Services, Supporting Healthcare Professionals With Accurate Diagnostics And Better Patient
                Care.
              </p>
            </div>

            {/* Quick Links */}
            <div className="2xl:col-span-2 2xl:pl-[25%]">
              <h4 className="footer-title font-mulish font-semibold text-[var(--primary)] mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-text font-inter text-white/90 hover:text-[var(--primary)] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#" className="footer-text font-inter font-semibold text-white underline underline-offset-4 hover:text-[var(--primary)]">
                    See More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="2xl:col-span-3">
              <h4 className="footer-title font-mulish font-semibold text-[var(--primary)] mb-5">Contact Us</h4>
              <ul className="flex flex-col gap-4 footer-text font-inter text-white/90">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 flex-shrink-0 fill-white stroke-none" />
                  <a href="tel:+15402127000" className="hover:text-[var(--primary)]">(540) 212-7000</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 flex-shrink-0 mt-1 fill-white stroke-[var(--footer-bg)]" />
                  <span>
                    11845 W. Olympic Blvd, Ste 880W
                    <br />
                    Los Angeles, CA 90064
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 flex-shrink-0 fill-white stroke-[var(--footer-bg)]" />
                  <a href="mailto:sales@dms-service.com" className="hover:text-[var(--primary)]">sales@dms-service.com</a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="2xl:col-span-1">
              <h4 className="footer-title font-mulish font-semibold text-[var(--primary)] mb-5">Social</h4>
              <div className="flex flex-wrap items-center gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-[22px] h-[22px] min-[2560px]:w-[34px] min-[2560px]:h-[34px] text-white hover:text-[var(--primary)] transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WBENC */}
            <div className="sm:col-span-2 lg:col-span-2 2xl:col-span-3 2xl:text-right">
              <h4 className="footer-title font-mulish font-semibold text-[var(--primary)] mb-5">WBENC Certified</h4>
              <p className="footer-text font-inter text-white/90 mb-6">
                The Women&apos;s Business Enterprise National Council Is The Nation&apos;s Largest Third Party Certifier
                Of Businesses Owned And Operated By Women In The United States. DMS-Service, LLC Has Received National
                Certification As A Women&apos;s Business Enterprise And As A Woman Owned Small Business.
              </p>
              <img
                src="/medical/dms-service/f-logo1.webp"
                alt="Certified WBENC Women's Business Enterprise"
                className="inline-block h-[68px] min-[2560px]:h-[100px] w-auto"
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-dotted border-white/70 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 footer-text font-inter text-white/90">
            <p>© 2026 dms-service LLC. All Rights Reserved.</p>
            <div className="flex items-center gap-12">
              <Link href="#" className="hover:text-[var(--primary)]">Privacy Policy</Link>
              <Link href="#" className="hover:text-[var(--primary)]">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
