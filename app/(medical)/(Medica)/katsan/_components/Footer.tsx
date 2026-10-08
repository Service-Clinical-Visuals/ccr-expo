"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00425E] text-white pt-16 xl:pt-20 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          

          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="#home" aria-label="Katsan Medical Devices Home">
              <img
                src="/medical/katsan/logo.webp"
                alt="Katsan Medical Devices Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-28 min-[1920px]:h-32 min-[2500px]:h-44 min-[3800px]:h-60 w-auto object-contain object-left"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="text-white/85 leading-relaxed w-full max-w-[90%] xl:max-w-[70%]">
              Founded in 1976 for catgut manufacturing, Katsan Medical Devices is one of the leading synthetic surgical suture manufacturers in Turkey.
            </Typography>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    About Us
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    Products
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    Our Services
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#catalogs" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    Catalogs
                  </Typography>
                </a>
              </li>
              <li className="pt-1">
                <a href="#products" className="font-bold underline underline-offset-4 text-white hover:text-white/80 transition-colors">
                  <Typography variant="footer-body" color="white" className="font-bold underline underline-offset-4 text-white hover:text-white/80">
                    See More &gt;&gt;
                  </Typography>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    Surgical Sutures
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    Laparoscopic Instruments
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  <Typography variant="footer-body" color="white" className="text-white/85 hover:text-white">
                    Sports Medicine
                  </Typography>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3">
              <a href="tel:+902324860910" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-white shrink-0" strokeWidth={2} />
                <Typography variant="footer-body" color="white" className="text-white/85 group-hover:text-white transition-colors">
                  +90 232 486 0910
                </Typography>
              </a>
              <a href="mailto:info@katsanas.com" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-white shrink-0" strokeWidth={2} />
                <Typography variant="footer-body" color="white" className="text-white/85 group-hover:text-white transition-colors">
                  info@katsanas.com
                </Typography>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-1" strokeWidth={2} />
                <Typography variant="footer-body" color="white" className="text-white/85 leading-snug">
                  AOSB 10041 Sk. No:22 Çiğli, İzmir, Türkiye
                </Typography>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg sm:text-xl">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#00425E] flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={2.2} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#00425E] flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={2.2} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-[#00425E] flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={2.2} />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-white/20 mt-4" />

        <div className="w-full text-center">
          <Typography variant="footer-body" color="white" className="text-white/80 text-xs sm:text-sm">
            © Copyright 2020 KATSAN Katgüt Sanayi ve Tic. A.Ş.
          </Typography>
        </div>

      </div>
    </footer>
  );
}
