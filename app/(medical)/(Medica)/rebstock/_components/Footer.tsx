"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#003F77] bg-[url('/medical/rebstock/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 text-white">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        <div className="grid grid-cols-2 min-[1026px]:grid-cols-12 gap-8 sm:gap-8 min-[1026px]:gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-start w-full">
          <div className="flex flex-col gap-4 sm:gap-5 col-span-2 min-[1026px]:col-span-4">
            <Link href="#home" className="inline-block py-1" aria-label="Rebstock Home">
              {/* Rebstock Logo */}
              <img
                src="/medical/rebstock/logo.webp"
                alt="Rebstock Logo"
                className="h-6 sm:h-7 md:h-8 min-[2500px]:h-12 min-[3800px]:h-16 w-auto object-contain rounded-none"
              />
            </Link>
            <Typography
              variant="p"
              color="white"
              className="text-white/85 leading-relaxed w-full xl:max-w-[70%]"
            >
              Rebstock develops high-quality medical solutions for micro-, neuro-, spine, and cranio-maxillofacial surgery—supporting surgeons with innovation, precision, and expertise.
            </Typography>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 col-span-1 min-[1026px]:col-span-2 min-[1026px]:pl-3 xl:pl-5 2xl:pl-7">
            <Typography
              variant="h3"
              color="white"
              className="footer-heading !font-semibold mb-1 sm:mb-2"
            >
              Quick Links
            </Typography>
            <ul className="space-y-2.5 text-white/85 list-none">
              <li>
                <Link href="#home" className="footer-body hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="footer-body hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="footer-body hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#why" className="footer-body hover:text-white transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="#science" className="footer-body hover:text-white transition-colors underline underline-offset-4 font-medium">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 col-span-1 min-[1026px]:col-span-2">
            <Typography
              variant="h3"
              color="white"
              className="footer-heading !font-semibold mb-1 sm:mb-2"
            >
              Products
            </Typography>
            <ul className="space-y-2.5 text-white/85 list-none">
              <li>
                <Link href="#portfolio" className="footer-body hover:text-white transition-colors">
                  Neuro Surgery
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="footer-body hover:text-white transition-colors">
                  Spine Surgery
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="footer-body hover:text-white transition-colors">
                  Cranio-Maxillofacial Plating Systems
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="footer-body hover:text-white transition-colors">
                  General Surgery
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 col-span-1 min-[1026px]:col-span-2">
            <Typography
              variant="h3"
              color="white"
              className="footer-heading !font-semibold mb-1 sm:mb-2"
            >
              Legal
            </Typography>
            <ul className="space-y-2.5 text-white/85 list-none">
              <li>
                <Link href="#legal" className="footer-body hover:text-white transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="#legal" className="footer-body hover:text-white transition-colors uppercase">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="#legal" className="footer-body hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 col-span-1 min-[1026px]:col-span-2">
            <Typography
              variant="h3"
              color="white"
              className="footer-heading !font-semibold mb-1 sm:mb-2"
            >
              Contact Us
            </Typography>
            <ul className="space-y-2.5 text-white/85 list-none">
              <li>
                <a
                  href="tel:+4974249823030"
                  className="footer-body flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 text-white" />
                  <span>+49 7424 9823030</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@rebstock.de"
                  className="footer-body flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 text-white" />
                  <span>info@rebstock.de</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 mt-1 text-white" />
                <span className="footer-body leading-snug">
                  Rebstock Instruments GmbH<br />
                  In Weiheräcker 7<br />
                  78589 Dürbheim-Tuttlingen
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/20" />

        <div className="text-center">
          <Typography
            variant="p"
            color="white"
            className="text-xs sm:text-sm text-white/80"
          >
            © 2026 Rebstock Instruments GmbH. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
