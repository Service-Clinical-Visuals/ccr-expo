"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Printer, Phone } from "lucide-react";

const FOOTER_LINKS = {
  quickMenu: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Distributors", href: "#distributors" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Intramedullary Nail Systems", href: "#product-solutions" },
    { label: "Cervical systems", href: "#product-solutions" },
    { label: "Screw & Cable Systems", href: "#product-solutions" },
    { label: "Thoracolumbar Systems", href: "#product-solutions" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1126] text-white pt-16 sm:pt-20 pb-6 sm:pb-8 mt-12 sm:mt-0">
      <div className="custom-container px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 xl:gap-12 pb-12 sm:pb-16" data-aos="fade-up">

          {/* Column 1: Logo and Description */}
          <div className="flex flex-col gap-6 xl:col-span-4 xl:pr-4">
            <Link href="/" className="inline-block">
              <img
                src="/medical/tasarimmed/logo.png"
                alt="Tasarimmed Logo"
                className="h-[104px] w-auto object-contain mb-2"
              />
            </Link>
            <p className="font-inter section-text font-regular text-gray-200 leading-relaxed pr-4">
              TASARIMMED delivers high-quality orthopaedic and neurosurgical solutions, driven by innovation, quality, and reliability. We develop advanced medical devices to support healthcare professionals and improve surgical care worldwide.
            </p>
          </div>

          {/* Column 2: Quick Menu */}
          <div className="xl:col-span-2 xl:pl-4">
            <h3 className="font-dm-sans font-bold text-white footer-text mb-6">Quick Menu</h3>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.quickMenu.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-inter section-text font-regular text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="xl:col-span-3">
            <h3 className="font-dm-sans font-bold text-white footer-text mb-6">Products</h3>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-inter section-text font-regular text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="xl:col-span-3">
            <h3 className="font-dm-sans font-bold text-white footer-text mb-6">Contact info</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                <span className="font-inter section-text font-regular text-gray-200 leading-relaxed">
                  Demirkapı Topçular Caddesi Setüstü No : 3 Eyüp / İstanbul / Türkiye
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a href="mailto:info@tasarimmed.com" className="font-inter section-text font-regular text-gray-200 hover:text-white transition-colors">
                  info@tasarimmed.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Printer className="w-5 h-5 text-white shrink-0" />
                <span className="font-inter section-text font-regular text-gray-200">
                  +90(212)674 22 46
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <a href="tel:+902126742244" className="font-inter section-text font-regular text-gray-200 hover:text-white transition-colors">
                  +90(212)674 22 44-45
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter section-text font-regular text-gray-200">
            © Copyright Tasarimmed Tıbbi Mamuller San. Tic A.Ş.
          </p>
          <p className="font-inter section-text font-regular text-gray-200">
            Designed by <Link href="#" className="text-white hover:underline underline-offset-4 transition-colors">Frappé</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
