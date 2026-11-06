"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Product", href: "#product-solutions" },
  { label: "Contact Us", href: "#contact" },
];

const PRODUCTS = [
  "implants",
  "infusion workstation system",
  "defibrillator monitor",
  "anesthesia machine",
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#2997AA] pt-16 sm:pt-20 pb-8 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        {/* 5 Columns Grid with Exact Equal Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-10 mb-12 items-start">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/flashman-uk" className="inline-block focus:outline-none" aria-label="Flashman Home">
              <img
                src="/medical/flashman-uk/f-logo.webp"
                alt="Flashman"
                className="h-10 sm:h-10 md:h-auto w-auto object-contain"
              />
            </Link>
            <p className="font-inter section-text leading-relaxed text-white/85">
              Established in 2018, Flash-Man delivers innovative, reliable medical technologies and healthcare solutions focused on quality and improved patient care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-unbounded footer-text font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-inter section-text">
              {QUICK_LINKS.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-white hover:underline transition-all section-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-unbounded footer-text font-bold text-white tracking-wide">
              Products
            </h4>
            <ul className="flex flex-col gap-3 font-inter section-text">
              {PRODUCTS.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#product-solutions"
                    className="text-white/85 hover:text-white hover:underline transition-all section-text capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col gap-4">
            <h4 className="font-unbounded footer-text font-bold text-white tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 font-inter section-text text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 flex-shrink-0 text-white mt-0.5" />
                <p className="leading-snug section-text text-white/85">
                  141 Trafalgar Road, Greenwich,<br />
                  London, SE10 9TX,<br />
                  UK
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                <p className="text-white/85 section-text">+44-7410 427379</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                <a
                  href="mailto:info@flash-man.uk"
                  className="section-text text-white/85 hover:text-white hover:underline transition-colors"
                >
                  info@flash-man.uk
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Subscribe / Input Form */}
          <div className="flex flex-col gap-4">
            <h4 className="font-unbounded footer-text font-bold text-white tracking-wide">
              Contact Us
            </h4>
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full min-w-0 h-11 bg-transparent border border-white/60 rounded-lg px-3 sm:px-4 font-inter section-text placeholder-white/60 text-white focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="submit"
                className="h-11 w-11 flex-shrink-0 border border-white/60 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer text-white"
                aria-label="Send email"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-white text-center font-inter section-text">
          <p className="text-white/85">Copyright © 2018-2026 FlashMan</p>
        </div>
      </div>
    </footer>
  );
}
