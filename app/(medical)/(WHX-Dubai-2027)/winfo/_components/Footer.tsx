"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  "PFNA Nailing System Instrument Set",
  "Pelvic Reduction Instrument Set",
  "TLIF Instrument Set",
  "ACL_PCL Reconstruction Instrument Set",
];

const SOCIALS = [
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.3em] h-full">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
      </svg>
    ),
  },
];

const titleCls = "footer-title font-body font-semibold text-[var(--accent)] whitespace-nowrap mb-5 xl:mb-[1.4vw]";
const linkCls = "footer-text font-body text-white hover:text-[var(--accent)] transition-colors";
const iconCls = "w-[1.4em] h-[1.4em] flex-shrink-0 fill-white stroke-[var(--dark)]";

export default function Footer() {
  return (
    <footer id="contact" className="w-full">
      <div className="bg-[var(--dark)] text-white">
        <div className="custom-container pt-14 xl:pt-[4.6vw] pb-14 xl:pb-[4.6vw]">
          <div className="grid grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.6fr] 2xl:grid-cols-[2.6fr_1.2fr_2.25fr_2.1fr_0.6fr] gap-x-6 gap-y-10 lg:gap-8 2xl:gap-6">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-3 2xl:col-span-1 2xl:pr-[12%]">
              <img
                src="/medical/winfo/f-logo.webp"
                alt="WINFO Med"
                className="h-[64px] xl:h-[74px] 2xl:h-[80px] min-[2560px]:h-[120px] min-[3801px]:h-[170px] w-auto object-contain mb-6 xl:mb-[2.2vw]"
              />
              <p className="footer-text font-body text-white max-w-[460px] min-[1921px]:max-w-[95%]">
                WINFO Med Specialises In Orthopaedic And Spinal Surgical Instruments, Delivering Precision-Engineered
                Products Focused On Quality, Reliability And Innovation For Modern Surgical Applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={titleCls}>Quick Links</h4>
              <ul className="flex flex-col gap-3 xl:gap-[1.15vw]">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className={titleCls}>Products</h4>
              <ul className="flex flex-col gap-3 xl:gap-[1.15vw]">
                {PRODUCTS.map((p) => (
                  <li key={p}>
                    <Link href="#products" className={linkCls}>
                      {p}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#products"
                    className="footer-text font-body font-semibold text-white underline underline-offset-[0.2em] hover:text-[var(--accent)] transition-colors"
                  >
                    See More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className={titleCls}>Contact Us</h4>
              <ul className="flex flex-col gap-4 xl:gap-[1.1vw] footer-text font-body text-white">
                <li className="flex items-center gap-3">
                  <Phone className={iconCls} strokeWidth={0} />
                  <a href="tel:+15402127000" className="hover:text-[var(--accent)] whitespace-nowrap">
                    (540) 212-7000
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className={`${iconCls} mt-[0.1em]`} strokeWidth={2} />
                  <span>
                    11845 W. Olympic Blvd, Ste 880W
                    <br />
                    Los Angeles, CA 90064
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className={iconCls} strokeWidth={2} />
                  <a href="mailto:sales@dms-service.com" className="hover:text-[var(--accent)] break-all">
                    sales@dms-service.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-2 lg:col-span-3 2xl:col-span-1">
              <h4 className={titleCls}>Social</h4>
              <div className="flex items-center gap-[1em] footer-text">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex items-center justify-center h-[1.35em] min-w-[1.35em] text-white hover:text-[var(--accent)] transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white">
        <div className="custom-container py-5 xl:py-[1.2vw] flex flex-col sm:flex-row items-center justify-between gap-4 footer-text font-body text-[var(--heading)]">
          <p className="text-center sm:text-left">Copyright © 2026 WINFO</p>
          <div className="flex items-center gap-8 xl:gap-[2.5vw]">
            <Link href="#" className="hover:text-[var(--primary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--primary)] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
