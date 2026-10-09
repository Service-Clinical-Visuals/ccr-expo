"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1C1C1C] border-t border-white/10 pt-8 sm:pt-10 md:pt-12 xl:pt-16 pb-8 sm:pb-12 overflow-hidden text-white">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 xl:gap-14">
        {/* Main Footer Row */}
        <div className="flex flex-col min-[1031px]:flex-row items-start gap-8 sm:gap-10 min-[1031px]:gap-6 xl:gap-8 w-full justify-between">
          {/* Column 1: Brand Logo Banner (touches the top border of the footer section) */}
          <div className="w-[120px] sm:w-[140px] md:w-[155px] min-[1031px]:w-[160px] xl:w-[175px] min-[2500px]:w-[260px] min-[3800px]:w-[360px] shrink-0 self-start -mt-8 sm:-mt-10 md:-mt-12 xl:-mt-16">
            <img
              src="/moto/bardahl/logo.webp"
              alt="Bardahl Logo"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Columns Grid: 1 col on mobile, 2 cols on tablet up to 1030px, flex row above 1030px */}
          <div className="grid grid-cols-1 sm:grid-cols-2 min-[1031px]:flex min-[1031px]:flex-row min-[1031px]:items-start min-[1031px]:justify-between gap-8 sm:gap-8 min-[1031px]:gap-6 xl:gap-8 w-full">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8 min-w-0 sm:min-w-[200px]">
              <Typography
                variant="h4"
                color="white"
                className="font-primary text-lg sm:text-xl min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide uppercase"
              >
                Quick Links
              </Typography>
              <div className="w-full h-px bg-white/20 min-[2500px]:h-0.5" />
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 min-[2500px]:gap-x-14 min-[3800px]:gap-x-20 gap-y-2 sm:gap-y-2.5 min-[2500px]:gap-y-5 min-[3800px]:gap-7 pt-1">
                <div className="flex flex-col gap-2 sm:gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <Link href="#home" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Home
                  </Link>
                  <Link href="#about" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    About
                  </Link>
                  <Link href="#technology" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Bardahl Technology
                  </Link>
                  <Link href="#products" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Products
                  </Link>
                </div>
                <div className="flex flex-col gap-2 sm:gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 pl-1 sm:pl-2">
                  <Link href="#media" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Media
                  </Link>
                  <Link href="#marketing" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Marketing
                  </Link>
                  <Link href="#contact" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Contact Us
                  </Link>
                  <Link href="#login" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                    Login
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Products */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8 min-w-0 sm:min-w-[170px]">
              <Typography
                variant="h4"
                color="white"
                className="font-primary text-lg sm:text-xl min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide uppercase"
              >
                Products
              </Typography>
              <div className="flex flex-col gap-2 sm:gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 pt-1">
                <Link href="#retail" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                  After Market Products - Retail
                </Link>
                <Link href="#oem" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors">
                  After Market Products - OEM
                </Link>
                <Link href="#products" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-white hover:text-[#F8EA17] font-medium transition-colors">
                  See More &gt;&gt;
                </Link>
              </div>
            </div>

            {/* Column 4: Social Media Links */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8 min-w-0 sm:min-w-[170px]">
              <Typography
                variant="h4"
                color="white"
                className="font-primary text-lg sm:text-xl min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide uppercase"
              >
                Social Media Links
              </Typography>
              <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 pt-1 flex-wrap">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#F8EA17] hover:bg-[#fff93f] text-black flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-black" strokeWidth={0} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#F8EA17] hover:bg-[#fff93f] text-black flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#F8EA17] hover:bg-[#fff93f] text-black flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-black" strokeWidth={0} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#F8EA17] hover:bg-[#fff93f] text-black flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-black" strokeWidth={0} />
                </a>
              </div>
            </div>

            {/* Column 5: Contact Us */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8 min-w-0 sm:min-w-[200px] max-w-full min-[1031px]:max-w-[320px] xl:max-w-[340px] min-[2500px]:max-w-[480px] min-[3800px]:max-w-[650px]">
              <Typography
                variant="h4"
                color="white"
                className="font-primary text-lg sm:text-xl min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide uppercase"
              >
                Contact Us
              </Typography>
              <div className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 pt-1">
                <a
                  href="tel:+912240130236"
                  className="flex items-center gap-2.5 min-[2500px]:gap-4 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors break-words"
                >
                  <Phone className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#F8EA17] shrink-0" />
                  +91-22-40130236/7
                </a>

                <a
                  href="mailto:customer.care@elviworld.com"
                  className="flex items-center gap-2.5 min-[2500px]:gap-4 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 hover:text-[#F8EA17] transition-colors break-all sm:break-normal"
                >
                  <Mail className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#F8EA17] shrink-0" />
                  customer.care@elviworld.com
                </a>

                <div className="flex items-start gap-2.5 min-[2500px]:gap-4 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300">
                  <MapPin className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#F8EA17] shrink-0 mt-1" />
                  <div className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-secondary text-gray-300 leading-relaxed">
                    201, 2nd Floor, Morya Landmark II, Off New Link Road, Andheri (West), Mumbai - 400053
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 md:pt-10 border-t border-white/10 min-[2500px]:pt-12 min-[3800px]:pt-16">
          <Typography
            variant="p"
            color="muted"
            className="text-xs sm:text-sm md:text-base min-[2500px]:text-xl min-[3800px]:text-3xl text-gray-400 font-secondary"
          >
            © 2026 ELVI Bardahl, Inc. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
