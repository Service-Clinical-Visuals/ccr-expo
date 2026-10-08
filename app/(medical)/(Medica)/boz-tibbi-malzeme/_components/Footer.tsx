"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#26306E] bg-[url('/medical/boz-tibbi-malzeme/bg.webp')] bg-cover bg-center text-white pt-8 sm:pt-10 lg:pt-12 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/boz-tibbi-malzeme/logo.webp"
                alt="Boz Tıbbi Malzeme"
                className="h-16 sm:h-20 lg:h-24 min-[2500px]:h-32 min-[3800px]:h-44 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <Typography variant="p" color="white" className="leading-relaxed text-white/90 xl:max-w-[70%] max-w-[90%] text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl">
              We are developing solutions for the needs of health sector with materials manufactured in our own facilities. We are adapting to current technological conditions and constantly update our product range.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-semibold capitalize">
              Quick Links
            </Typography>
            <ul className="flex flex-col space-y-2.5">
              <li>
                <Link href="#home" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Corporate
                </Link>
              </li>
              <li className="pt-1">
                <Link href="#products" className="footer-body text-white font-bold underline transition-colors">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-semibold capitalize">
              Products
            </Typography>
            <ul className="flex flex-col space-y-2.5">
              <li>
                <Link href="#products" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Surgical Sutures
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Hemostats
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Surgical Meshes
                </Link>
              </li>
            </ul>
          </div>

          {/* Fast Access */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-semibold capitalize">
              Fast Access
            </Typography>
            <ul className="flex flex-col space-y-2.5">
              <li>
                <Link href="#experience" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Corporate Responsibility
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-body text-white/80 hover:text-white transition-colors capitalize">
                  Customer Satisfaction
                </Link>
              </li>
              <li className="pt-1">
                <Link href="#" className="footer-body text-white font-bold underline transition-colors">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="!font-semibold">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 pt-1">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[#28316D] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
              >
                <Linkedin className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[#28316D] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
              >
                <Instagram className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2.2} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[#28316D] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
              >
                <Facebook className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[#28316D] flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm"
              >
                <Twitter className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 pt-6 sm:pt-8 flex items-center justify-center text-center">
          <Typography variant="footer-body" color="white" className="text-white/80 text-sm sm:text-base">
            All Rights Reserved. Copyright © 2026 Boz Medical
          </Typography>
        </div>
      </div>
    </footer>
  );
}
