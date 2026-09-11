"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#273338] text-white pt-14 sm:pt-16 md:pt-20 pb-6 overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-40 mx-auto">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-15 pb-12 sm:pb-16 border-b border-white/20">

          {/* Column 1: Company Logo & Description */}
          <div className="lg:col-span-2 pr-0 lg:pr-8" data-aos="fade-up" data-aos-duration="800">
            <div className="mb-6">
              <h1 className="font-poppins font-bold banner-title text-[#FCC100] tracking-wide mb-1">
                KAULMED
              </h1>
              <p className="font-inter section-subtitle text-white">
                The international brand of <span className="text-[#FCC100]">KAUL Medizintechnik GmbH</span>
              </p>
            </div>

            <p className="section-text text-gray-200 font-inter leading-relaxed">
              KAULMED is a globally recognized leader in the design, manufacturing, and distribution of advanced medical devices. With over two decades of expertise, we specialize in delivering innovative orthopedic solutions that redefine patient care and surgical efficiency.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h4 className="font-semibold font-poppins text-white mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">Home</Link></li>
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">Support</Link></li>
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">News</Link></li>
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h4 className="font-semibold font-poppins text-white mb-6 tracking-wide">
              Products
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">nailing</Link></li>
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">v-angle plates</Link></li>
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">cannulated screw system</Link></li>
              <li><Link href="#" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">pediatric system</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <h4 className="font-semibold font-poppins text-white mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="section-text text-gray-200 font-inter leading-relaxed">
                  KAUL-Medizintechnik GmbH<br />
                  Königsberger Straße<br />
                  40 56269 Dierdorf Germany
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:+4926899282990" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">
                  +49 2689 928299-0
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a href="mailto:info@kaulmed.com" className="section-text text-gray-200 hover:text-[#FCC100] font-inter transition-colors">
                  info@kaulmed.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <h4 className="font-semibold font-poppins text-white mb-6 tracking-wide">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#FCC100] hover:text-[#FCC100] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#FCC100] hover:text-[#FCC100] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <p className="section-text text-white font-inter text-center md:text-left">
            © 2026 KAUL-Medizintechnik GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-4 section-text text-white font-inter">
            <Link href="#" className="hover:text-white transition-colors">Imprint</Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition-colors">Data Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition-colors">Quality Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
