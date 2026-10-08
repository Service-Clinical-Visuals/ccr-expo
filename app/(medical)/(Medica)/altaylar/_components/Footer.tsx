"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const QUICK_LINKS = [
  "Home", "Corporate", "Products", "News", "Altaylar Blog"
];

const PRODUCTS = [
  "Polypropylene Mesh", "Oxidised Regenerated Cellulose"
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2937] pt-16 sm:pt-20 pb-6 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 xl:gap-12 mb-12">

          {/* Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-center">
              <img src="/medical/altaylar/logo.webp" alt="Altaylar Medikal" className="h-auto w-auto object-contain" />
            </div>
            <p className="font-inter section-text leading-relaxed font-regular text-white/90 pr-4">
              Altaylar Medikal is a Turkish medical-device manufacturer specializing in surgical products, including hemostatic solutions and polypropylene mesh. The company focuses on quality, innovation, reliable manufacturing, and international healthcare markets, serving medical professionals and distributors worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-raleway footer-text font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-inter section-text font-regular">
              {QUICK_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-white/90 hover:text-white hover:underline font-regular transition-all section-text">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-raleway footer-text font-bold text-white tracking-wide">Products</h4>
            <ul className="flex flex-col gap-3 font-inter section-text font-regular">
              {PRODUCTS.map((item, i) => (
                <li key={i}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-white/90 hover:text-white hover:underline font-regular transition-all section-text">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-raleway footer-text font-bold text-white tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-4 font-inter section-text font-regular">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/90" />
                <p className="leading-snug section-text text-white/90">
                  Malıköy Mah. Başkent OSB<br />
                  19.Cadde No: 54 Sincan -<br />
                  Ankara, Turkey
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white/90" />
                <p className="text-white/90 section-text">+90 312 502 04 91/92</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white/90" />
                <a href="mailto:info@altaylarmedikal.com" className="section-text text-white/90 hover:underline hover:text-white">info@altaylarmedikal.com</a>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <h4 className="font-raleway footer-text font-bold text-white tracking-wide">Stay Updated</h4>
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-11 bg-transparent border border-white rounded-[4px] px-4 font-inter section-text focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/70"
                required
              />
              <button
                type="submit"
                className="h-11 aspect-square bg-transparent border border-white rounded-[4px] hover:bg-white/10 transition-colors flex items-center justify-center flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>

        </div>


      </div>

      {/* Footer Bottom */}
      <div className="pt-6 border-t border-white/80 text-center font-inter section-text font-regular">
        <p className="text-white/90">© Copyright 2026 Altaylar Medikal Tıbbi Malz. İnş. Teks. Gıda İth. İhr. San. Ve Tic. Ltd. Şti. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
