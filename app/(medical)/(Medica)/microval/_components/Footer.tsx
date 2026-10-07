"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#65B5A0] text-[#FFFFFF] relative overflow-hidden pt-16 pb-8">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12" data-aos="fade-up" data-aos-duration="800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-10 mb-12">

          {/* 1. Logos & Tagline */}
          <div className="lg:col-span-4 flex flex-col">
            <img
              src="/medical/microval/f-logo1.webp"
              alt="MicroVal France"
              className="w-auto h-auto object-contain self-start"
            />
          </div>

          {/* 2. Quick Link */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-inter footer-text font-bold text-[#FFFFFF] tracking-wide mb-1">Quick Link</h4>
            <ul className="flex flex-col gap-3 font-inter section-text text-[#FFFFFF] font-light">
              <li><Link href="#home" className="hover:opacity-75 transition-opacity">Home</Link></li>
              <li><Link href="#about" className="hover:opacity-75 transition-opacity">About Us</Link></li>
              <li><Link href="#hernias-coelio" className="hover:opacity-75 transition-opacity">Hernias Coelio</Link></li>
              <li><Link href="#laparos-hernies" className="hover:opacity-75 transition-opacity">Laparos Hernies</Link></li>
              <li><Link href="#hernias-incisions" className="hover:opacity-75 transition-opacity">Hernias and Incisions</Link></li>
              <li><Link href="#fixing-sutures" className="hover:opacity-75 transition-opacity">Fixing Sutures</Link></li>
              <li><Link href="#instruction" className="hover:opacity-75 transition-opacity">Instruction For Use</Link></li>
              <li><Link href="#documentation" className="hover:opacity-75 transition-opacity">Documentation</Link></li>
              <li><Link href="#contact" className="hover:opacity-75 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. Products */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-inter footer-text font-bold text-[#FFFFFF] tracking-wide mb-1">Products</h4>
            <ul className="flex flex-col gap-3 font-inter section-text text-[#FFFFFF] font-light">
              <li><Link href="#hernias-coelio" className="hover:opacity-75 transition-opacity">Hernias Coelio</Link></li>
              <li><Link href="#laparos-hernies" className="hover:opacity-75 transition-opacity">Laparos Hernies</Link></li>
              <li><Link href="#hernias-incisions" className="hover:opacity-75 transition-opacity">Hernias and Incisions</Link></li>
              <li><Link href="#fixing-sutures" className="hover:opacity-75 transition-opacity">Fixing Sutures</Link></li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-inter footer-text font-bold text-[#FFFFFF] tracking-wide mb-1">Contact</h4>
            <div className="flex flex-col gap-4 font-inter section-text text-[#FFFFFF] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  MicroVal , 1213 Route de Champs de Berre, Lieu-Dit ZA Champs de Berre 43240 Saint-Just-Malmont , France
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+33 (0)4 77 35 03 03</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@microval.fr" className="hover:underline">info@microval.fr</a>
              </div>
            </div>
          </div>

          {/* 5. ISO Certification */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-inter footer-text font-bold text-[#FFFFFF] tracking-wide leading-snug mb-1">ISO 13485:2016 certification</h4>
            <div className="inline-block">
              <img
                src="/medical/microval/f-logo2.webp"
                alt="ISO Certification SGS"
                className="w-auto h-auto object-contain self-start"
              />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-5 border-t border-black flex flex-wrap items-center gap-4 text-[#FFFFFF] opacity-90 font-inter text-[13.5px] sm:text-sm font-light">
          <Link href="#legal" className="hover:opacity-75 transition-opacity pr-4 border-r border-white/50">Legal notice</Link>
          <Link href="#sitemap" className="hover:opacity-75 transition-opacity pr-4 border-r border-white/50">Site Map</Link>
          <Link href="#privacy" className="hover:opacity-75 transition-opacity">Data Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
