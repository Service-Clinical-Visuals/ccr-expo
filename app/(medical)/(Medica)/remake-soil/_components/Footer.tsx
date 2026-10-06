"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1C1C1C] pt-16 xl:pt-20 pb-8 text-white overflow-hidden border-t border-white/10">
      <div className="custom-container flex flex-col gap-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-start">

          <div className="lg:col-span-4 flex flex-col gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 pr-0 lg:pr-6">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/remake-soil/logo.png"
                alt="Remake Soil Logo"
                className="h-7 sm:h-8 min-[2000px]:h-10 min-[2500px]:h-12 min-[3800px]:h-18 w-auto object-contain"
              />
            </Link>
            <Typography
              variant="p"
              color="white"
              className="text-gray-300 text-xs sm:text-sm md:text-[15px] min-[2000px]:text-[18px] min-[2500px]:text-[22px] min-[3800px]:text-[30px] leading-relaxed"
            >
              Innovative solutions for soil recycling, liquid soil technology, and sustainable construction. We combine expertise, modern technology, and customized solutions for efficient construction projects.
            </Typography>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4 min-[1920px]:gap-5 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography
              variant="h4"
              color="white"
              className="!font-semibold text-lg sm:text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl"
            >
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4.5 min-[3800px]:gap-6 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Liquid Soil
                </a>
              </li>
              <li>
                <a href="#mixing-plants" className="hover:text-white transition-colors">
                  Mixing Plants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Additional Services
                </a>
              </li>
              <li className="pt-1">
                <a href="#products" className="text-white underline font-semibold hover:text-[var(--color-primary)] transition-colors">
                  See More &gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4 min-[1920px]:gap-5 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography
              variant="h4"
              color="white"
              className="!font-semibold text-lg sm:text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl"
            >
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4.5 min-[3800px]:gap-6 text-gray-300">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Buy Compound
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Flowable Fill Service
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4 min-[1920px]:gap-5 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography
              variant="h4"
              color="white"
              className="!font-semibold text-lg sm:text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl"
            >
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4.5 min-[3800px]:gap-6 text-gray-300">
              <li>
                <a
                  href="tel:+4933202219898"
                  className="flex items-center gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4.5 min-[3500px]:gap-5.5 min-[3800px]:gap-6 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14 text-[#155EEF] shrink-0" strokeWidth={2.5} />
                  <span>+49 33202 219898</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@rms-soil.de"
                  className="flex items-center gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4.5 min-[3500px]:gap-5.5 min-[3800px]:gap-6 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14 text-[#155EEF] shrink-0" strokeWidth={2.5} />
                  <span>contact@rms-soil.de</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4.5 min-[3500px]:gap-5.5 min-[3800px]:gap-6">
                <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14 text-[#155EEF] shrink-0 mt-0.5 min-[3500px]:mt-1 min-[3800px]:mt-1.5" strokeWidth={2.5} />
                <span className="leading-snug">
                  Zum Großen Zernsee 6h, Werder, Brandenburg 14542, DE
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4 min-[1920px]:gap-5 min-[2500px]:gap-6 min-[3500px]:gap-7 min-[3800px]:gap-8">
            <Typography
              variant="h4"
              color="white"
              className="!font-semibold text-lg sm:text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3500px]:text-4xl min-[3800px]:text-5xl"
            >
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 min-[1920px]:gap-4 min-[2500px]:gap-5 min-[3500px]:gap-6 min-[3800px]:gap-7">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-12 xl:h-12 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3500px]:w-22 min-[3500px]:h-22 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full bg-white flex items-center justify-center text-[#155EEF] hover:scale-110 transition-transform shadow-[0px_3px_8px_rgba(255,255,255,0.15)]"
              >
                <Linkedin className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-11 min-[3500px]:h-11 min-[3800px]:w-13 min-[3800px]:h-13 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-12 xl:h-12 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3500px]:w-22 min-[3500px]:h-22 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full bg-white flex items-center justify-center text-[#155EEF] hover:scale-110 transition-transform shadow-[0px_3px_8px_rgba(255,255,255,0.15)]"
              >
                <Instagram className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-11 min-[3500px]:h-11 min-[3800px]:w-13 min-[3800px]:h-13" strokeWidth={2.2} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-12 xl:h-12 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3500px]:w-22 min-[3500px]:h-22 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full bg-white flex items-center justify-center text-[#155EEF] hover:scale-110 transition-transform shadow-[0px_3px_8px_rgba(255,255,255,0.15)]"
              >
                <Youtube className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-11 min-[3500px]:h-11 min-[3800px]:w-13 min-[3800px]:h-13" strokeWidth={2.2} />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-white/20" />

        <div className="text-center">
          <Typography
            variant="p"
            color="white"
            className="text-xs sm:text-sm min-[2000px]:text-base min-[2500px]:text-[20px] min-[3800px]:text-[28px] text-gray-300"
          >
            © Copyright 2026 Remake Soil GmbH
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
