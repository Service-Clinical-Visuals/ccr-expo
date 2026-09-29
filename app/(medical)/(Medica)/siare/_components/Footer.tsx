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
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <img src="/medical/siare/f-logo.png" alt="SIARE Engineering International Group" className="w-auto h-auto object-contain brightness-0 invert" />
              </div>
              <p className="font-dm-sans section-text text-[#FFFFFF] leading-relaxed font-light">
                SIARE Engineering International Group is an Italian medical technology company specializing in advanced anaesthesia and respiratory-care solutions. With decades of engineering expertise, SIARE develops reliable medical equipment designed to support healthcare professionals in critical-care environments.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-white hover:text-[#1B489F] transition-colors">
                  <Instagram className="w-[24px] h-[24px]" />
                </a>
                <a href="#" className="text-white hover:text-[#1B489F] transition-colors">
                  <Linkedin className="w-[24px] h-[24px]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5 lg:pl-[130px]">
              <h4 className="font-exo2 footer-text font-semibold tracking-wide mb-2">Quick Links</h4>
              <ul className="flex flex-col gap-4 font-dm-sans section-text text-[#FFFFFF] font-light">
                <li><Link href="#home" className="hover:text-[#1B489F] transition-all">Home</Link></li>
                <li><Link href="#about" className="hover:text-[#1B489F] transition-all">About</Link></li>
                <li><Link href="#products" className="hover:text-[#1B489F] transition-all">Products</Link></li>
                <li><Link href="#events" className="hover:text-[#1B489F] transition-all">Events</Link></li>
                <li><Link href="#news" className="hover:text-[#1B489F] transition-all">News</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-5">
              <h4 className="font-exo2 footer-text font-semibold tracking-wide mb-2">Contact Us</h4>
              <div className="flex flex-col gap-5 font-dm-sans section-text text-[#FFFFFF] font-light">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <p className="section-text">+39 051 969802</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:mail@siare.it" className="hover:underline">mail@siare.it</a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="leading-relaxed section-text">
                    Via Giulio Pastore, 18,<br />
                    40053 Crespellano-Valsamoggia (BO), ITALY
                  </p>
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div className="flex flex-col gap-5">
              <h4 className="font-exo2 footer-text font-semibold tracking-wide mb-2">Subscribe to Newsletter :</h4>
              <p className="font-dm-sans section-text text-[#FFFFFF] leading-relaxed font-light mb-2">
                Be the first to know about new collections and exclusive offers.
              </p>
              <form className="relative w-full max-w-sm mt-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter Your E-Mail ID"
                  className="w-full section-text bg-white text-[#111111] rounded-full py-3 pl-6 pr-[120px] focus:outline-none font-dm-sans"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#1B489F] hover:bg-[#153a82] text-[#FFFFFF] font-dm-sans font-medium rounded-full px-6 transition-colors text-sm"
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
        <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-dm-sans section-text text-[#111111] font-regular">
          <p className="section-text">© 2026 SIARE ENGINEERING INTERNATIONAL GROUP S.p.A. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 sm:gap-10 justify-center">
            <Link href="#terms" className="hover:text-[#1B489F] transition-colors section-text">Terms & Conditions</Link>
            <Link href="#privacy" className="hover:text-[#1B489F] transition-colors section-text">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
