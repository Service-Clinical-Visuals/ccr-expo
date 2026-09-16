"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#18181b] bg-[url('/medical/ases/bg-footer.png')] bg-cover bg-center">

      <div className="custom-container relative z-10 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 xl:gap-6">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6 lg:w-[26%]" data-aos="fade-up">
            <Link href="#home">
              {/* Removed invert filter to keep the red 'a'. Added a subtle white drop shadow in case the text is dark. */}
              <img src="/medical/ases/logo.png" alt="Ases Logo" className="w-[360px] h-[96px] object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </Link>
            <p className="text-white font-[Inter] text-[15px] md:text-[17px] leading-relaxed mt-2">
              With extensive industry experience, we manufacture
              high-quality orthopedic implants using advanced
              production systems, innovative designs, and
              a strong commitment to patient satisfaction.
            </p>
          </div>

          {/* Column 2: Quick Menu */}
          <div className="flex flex-col gap-4 lg:w-[14%]" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white font-[Inter] font-medium text-[18px] md:text-[20px] mb-2">Quick Menu</h4>
            <Link href="#home" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Home</Link>
            <Link href="#institutional" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Institutional</Link>
            <Link href="#products" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Products</Link>
            <Link href="#gallery" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Gallery</Link>
            <Link href="#contact" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Contact Us</Link>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4 lg:w-[18%]" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-[Inter] font-medium text-[18px] md:text-[20px] mb-2">Products</h4>
            <Link href="#products" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Lower Upper Extremity</Link>
            <Link href="#products" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Nails</Link>
            <Link href="#products" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Fixators</Link>
            <Link href="#products" className="text-white hover:opacity-80 text-[15px] md:text-[17px] font-[Inter] transition-opacity">Pins and Wires</Link>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-5 lg:w-[26%]" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white font-[Inter] font-medium text-[18px] md:text-[20px] mb-2">
              Ases Medical Industry and Trade<br />Limited Company
            </h4>
            <div className="flex gap-4 items-start">
              <MapPin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0 mt-0.5" />
              <p className="text-white font-[Inter] text-[15px] md:text-[17px] leading-relaxed">
                Karacaahmet Mah. 38004 Nolu<br />
                Cd. Matbaacılar Slt. A/BL. NO:8/2<br />
                Şehitkamil / Gaziantep
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0 mt-0.5" />
              <p className="text-white font-[Inter] text-[15px] md:text-[17px] leading-relaxed flex flex-col gap-1">
                <a href="mailto:info@asesmedikal.com.tr" className="hover:opacity-80 transition-opacity">info@asesmedikal.com.tr</a>
                <a href="mailto:sales@asesmedikal.com.tr" className="hover:opacity-80 transition-opacity">sales@asesmedikal.com.tr</a>
                <a href="https://www.asesmedikal.com.tr" className="hover:opacity-80 transition-opacity">www.asesmedikal.com.tr</a>
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0 mt-0.5" />
              <p className="text-white font-[Inter] text-[15px] md:text-[17px] leading-relaxed flex flex-col gap-1">
                <a href="tel:+903425028667" className="hover:opacity-80 transition-opacity">+90 342 502 86 67</a>
                <a href="tel:+905346956769" className="hover:opacity-80 transition-opacity">+90 534 695 67 69</a>
              </p>
            </div>
          </div>

          {/* Column 5: E-Catalog */}
          <div className="flex flex-col gap-4 lg:w-[14%]" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-white font-[Inter] font-medium text-[18px] md:text-[20px] mb-2">E-Catalog</h4>
            <Link href="#catalog" className="group mt-1 flex justify-end lg:justify-start">
              <img src="/medical/ases/img-footer.png" alt="E-Catalog" className="w-auto h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#BA0A28] relative z-10">
        <div className="custom-container flex flex-col md:flex-row items-center py-4 md:py-5 gap-4 md:gap-0">
          <p className="text-white font-[Inter] text-[14px] md:text-[17px] mr-0 md:mr-6 text-center md:text-left">
            Copyright © 2021 - 2026 All Rights Reserved. Ases Medical Industry and Trade Limited Company
          </p>

          <div className="flex-1"></div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white hover:opacity-80 transition-opacity">
              <svg className="w-[25px] h-[25px] min-[3800px]:w-[48px] min-[3800px]:h-[48px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity"><Facebook className="w-7 h-7 min-[3800px]:w-12 min-[3800px]:h-12 fill-current" /></a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity"><Linkedin className="w-7 h-7 min-[3800px]:w-12 min-[3800px]:h-12 fill-current" /></a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity"><Instagram className="w-7 h-7 min-[3800px]:w-12 min-[3800px]:h-12" /></a>


          </div>
        </div>
      </div>
    </footer>
  );
}
