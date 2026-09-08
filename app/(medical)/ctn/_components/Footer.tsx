"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const INDUSTRIES_LINKS = [
  { label: "Sports", href: "#sports" },
  { label: "Physiotherapy", href: "#physiotherapy" },
  { label: "Longevity", href: "#longevity" },
  { label: "Hospitality", href: "#hospitality" },
  { label: "Aesthetics", href: "#aesthetics" },
  { label: "Corporate Wellness", href: "#corporate-wellness" },
];

const PRODUCTS_LINKS = [
  { label: "X°CRYO™", href: "#xcryo" },
  { label: "e°CABIN™", href: "#ecabin" },
  { label: "X-TONE™", href: "#xtone" },
  { label: "OxyPro™", href: "#oxypro" },
  { label: "LedPro™", href: "#ledpro" },
  { label: "See More>>", href: "#products-all" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Clients", href: "#clients" },
  { label: "Blog", href: "#blog" },
  { label: "News", href: "#news" },
];

const PARTNERS_LINKS = [
  { label: "Investors", href: "#investors" },
  { label: "Distributors", href: "#distributors" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: "/medical/ctn/f1.png",
    href: "",
  },
  {
    name: "Instagram",
    icon: "/medical/ctn/f2.png",
    href: "",
  },
  {
    name: "Facebook",
    icon: "/medical/ctn/g3.png",
    href: "",
  },
  {
    name: "X (Twitter)",
    icon: "/medical/ctn/f4.png",
    href: "",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#3d57a5] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
      <div className="custom-container px-4 sm:px-6 md:px-10">

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 xl:gap-6">

          {/* CTN Brand & Description */}
          <div className="col-span-1 md:col-span-7 xl:col-span-3 flex flex-col pr-0 xl:pr-4">
            <Link href="/ctn" className="inline-block mb-4 sm:mb-6">
              <div className="relative h-9 w-28 sm:h-10 sm:w-32">
                <Image
                  src="/medical/ctn/logo.png"
                  alt="CTN Logo"
                  width={140}
                  height={44}
                  className="h-full w-auto object-contain brightness-0 invert"
                  priority
                />
              </div>
            </Link>

            <p className="header-link text-white/80 leading-relaxed max-w-sm">
              SRT Gear Industry manufactures transmission gears, differential gears and
              axle parts for passenger and light commercial vehicles in Turkey.
            </p>
          </div>

          {/* Link Columns: 
              - Mobile: 2 columns (Row 1: Industries & Products, Row 2: Company & Partners)
              - Tablet / iPad (md & lg): 4 columns across full width below Brand/Social
              - Desktop (xl): 4 columns taking 7/12 cols in center 
          */}
          <div className="col-span-1 md:col-span-12 xl:col-span-7 md:order-last xl:order-none grid grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-8 md:gap-6">

            {/* Column: Industries */}
            <div className="flex flex-col">
              <h4 className="footer-text font-semibold text-white mb-3 sm:mb-4 xl:mb-5">
                Industries
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 xl:space-y-3">
                {INDUSTRIES_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="header-link text-white/85 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Products */}
            <div className="flex flex-col">
              <h4 className="footer-text font-semibold text-white mb-3 sm:mb-4 xl:mb-5">
                Products
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 xl:space-y-3">
                {PRODUCTS_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`header-link transition-colors duration-200 ${item.label === "See More>>"
                        ? "text-white font-medium underline underline-offset-4 hover:text-white/90"
                        : "text-white/85 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Company */}
            <div className="flex flex-col">
              <h4 className="footer-text font-semibold text-white mb-3 sm:mb-4 xl:mb-5">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 xl:space-y-3">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="header-link text-white/85 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column: Partners */}
            <div className="flex flex-col">
              <h4 className="footer-text font-semibold text-white mb-3 sm:mb-4 xl:mb-5">
                Partners
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 xl:space-y-3">
                {PARTNERS_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="header-link text-white/85 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Social Media Links */}
          <div className="col-span-1 md:col-span-5 xl:col-span-2 flex flex-col md:items-start xl:items-start">
            <h4 className="footer-text font-semibold text-white mb-3 sm:mb-4 xl:mb-5">
              Social Media Links
            </h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm hover:scale-110 active:scale-95 transition-transform duration-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-white/20 mt-10 sm:mt-14 xl:mt-16 mb-6 sm:mb-8" />

        {/* Bottom Copyright Text */}
        <div className="text-center">
          <p className="header-link text-white/90 font-normal">
            &copy; CTN 2024, All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
