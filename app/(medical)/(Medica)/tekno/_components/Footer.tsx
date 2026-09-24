"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">

      {/* Top Dark Section */}
      <div className="w-full bg-[#18181b] text-[#FFFFFF] pt-12 sm:pt-16 pb-12 relative">
        <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 relative z-10" data-aos="fade-up" data-aos-duration="800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">

            {/* Logo & Description */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4 -mt-[100px] lg:-mt-[140px]">
                <img src="/medical/tekno/f-logo.png" alt="Tekno Medical" className="w-auto h-auto object-contain" />
              </div>
              <p className="font-outfit section-text text-[#FFFFFF] leading-relaxed font-light -mt-[40px] lg:-mt-[80px]">
                TEKNO-MEDICAL is a German medical technology company, founded in 1976, delivering precision-engineered medical solutions worldwide. Its expertise combines quality, innovation, and reliable performance.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-white hover:text-[#D22840] transition-colors">
                  <Instagram className="w-[28px] h-[28px]" />
                </a>
                <a href="#" className="text-white hover:text-[#D22840] transition-colors">
                  <Linkedin className="w-[28px] h-[28px]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5 lg:pl-[30px]">
              <h4 className="font-exo2 footer-text font-semibold tracking-wide mb-2">Quick Links</h4>
              <ul className="flex flex-col gap-4 font-outfit section-text text-[#FFFFFF] font-light">
                <li><Link href="#home" className="hover:text-[#D22840] transition-all">Home</Link></li>
                <li><Link href="#about" className="hover:text-[#D22840] transition-all">About</Link></li>
                <li><Link href="#products" className="hover:text-[#D22840] transition-all">Products</Link></li>
                <li><Link href="#news" className="hover:text-[#D22840] transition-all">News</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-5">
              <h4 className="font-exo2 footer-text font-semibold text-lg tracking-wide mb-2">Contact Us</h4>
              <div className="flex flex-col gap-5 font-outfit section-text text-[#FFFFFF] font-light">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p>+49 7461 170 10</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a href="mailto:Mail@tekno-medical.com" className="hover:underline">Mail@tekno-medical.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Tekno-Medical Optik-Chirurgie GmbH<br />
                    Sattlerstrasse 11 D-78532 Tuttlingen, Germany
                  </p>
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div className="flex flex-col gap-5">
              <h4 className="font-exo2 footer-text font-semibold  tracking-wide mb-2">Subscribe to Newsletter :</h4>
              <p className="font-outfit section-text text-[#FFFFFF] leading-relaxed font-light mb-2">
                Be the first to know about new collections and exclusive offers.
              </p>
              <form className="relative w-full max-w-sm mt-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter Your E-Mail ID"
                  className="w-full section-text bg-white text-[#111111] rounded-[16px] py-3.5 pl-5 pr-[120px] focus:outline-none font-outfit text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#D22840] hover:bg-[#b02135] text-[#FFFFFF] font-manrope font-medium rounded-[8px] px-6 transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom (White Area) */}
      <div className="w-full bg-white py-6">
        <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-outfit section-text text-[#111111] font-regular">
          <p className="section-text">© 2026 Tekno-Medical Optik-Chirurgie GmbH All rights reserved.</p>
          <div className="flex flex-wrap gap-6 sm:gap-10 justify-center">
            <Link href="#terms" className="hover:text-[#D22840] transition-colors section-text">Terms & Conditions</Link>
            <Link href="#privacy" className="hover:text-[#D22840] transition-colors section-text">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

