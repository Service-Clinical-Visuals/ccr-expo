"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Printer } from "lucide-react";

const QUICK_MENU = [
  "Home", "Medical Equipment", "Repair Of TransDucers", "EU Projects",
  "FFP2 Masks", "OEM", "INDUSTRIAL ACTIVITY", "Soluction", "News"
];

const PRODUCTS = [
  "Ultrasound Scaners", "Ultrasound Probes", "Video Colposcope"
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#084C6F] text-white pt-16 sm:pt-20 pb-6">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 xl:gap-12 mb-12">

          {/* Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-center gap-4">
              <img src="/medical/medelcom/f-logo.png" alt="EU Programme" className="h-auto w-auto object-contain" />
            </div>
            <p className="font-inter footer-text text-white/90 leading-relaxed font-regular">
              MEDELCOM International provides ultrasound <br /> systems, transducers, videocolposcopes, and OEM <br /> solutions with decades of engineering expertise.
            </p>
          </div>

          {/* Quick Menu */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-dmsans footer-text font-bold text-lg tracking-wide">Quick Menu</h4>
            <ul className="flex flex-col gap-3 font-inter text-sm text-white/90 font-regular">
              {QUICK_MENU.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white hover:underline font-regular transition-all section-text">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-dmsans footer-text font-bold text-lg tracking-wide">Products</h4>
            <ul className="flex flex-col gap-3 font-inter text-sm text-white/90 font-regular">
              {PRODUCTS.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white hover:underline font-regular transition-all section-text">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-dmsans footer-text font-bold text-lg tracking-wide">Contact</h4>
            <div className="flex flex-col gap-4 font-inter section-text text-white/90 font-regular">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="leading-snug uppercase section-text ">
                  MEDELCOM INTERNATIONAL, UAB<br />
                  GRAIČIŪNO G. 10, LT-02241<br />
                  VILNIUS, LITHUANIA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+370 5 264 19 89</p>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 flex-shrink-0" />
                <p>+370 5 267 06 65</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:office@medelcom.com" className="hover:underline">office@medelcom.com</a>
                  <a href="mailto:tadas@medelcom.com" className="hover:underline">tadas@medelcom.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white text-center font-inter text-sm text-white/90 font-regular">
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
