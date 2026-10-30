"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Youtube, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#17181C] text-white pt-16 sm:pt-20 pb-10 overflow-hidden border-t border-[#333333]">
      <div className="custom-container flex flex-col gap-12 sm:gap-16">
        {/* Top 5-Column Grid */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-8 items-start">
          {/* Column 1: Logo & Company summary (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link href="#home" aria-label="Abintrax Home">
              <img
                src="/medical/abintrax-srl/logo.webp"
                alt="Abintrax Logo"
                className="h-10 sm:h-12 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
              />
            </Link>
            <Typography
              variant="p"
              color="white"
              className="text-xs sm:text-sm lg:text-base min-[2500px]:text-2xl leading-relaxed text-white/80 max-w-[90%] xl:max-w-[70%]"
            >
              Abintrax creates innovative technology solutions for education and healthcare,
              improving well-being through research and sustainable innovation.
            </Typography>
          </div>

          {/* Column 2: LINKS : (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl font-bold uppercase tracking-wider text-white"
            >
              LINKS :
            </Typography>
            <div className="flex flex-col gap-2 font-secondary uppercase text-white/75">
              <a href="#home" className="hover:text-white transition-colors">
                <span>Home</span>
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                <span>About Us</span>
              </a>
              <a href="#divisions" className="hover:text-white transition-colors">
                <span>Our Divisions</span>
              </a>
              <a href="#what-we-do" className="hover:text-white transition-colors">
                <span>What We Do</span>
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Column 3: LEGAL : (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl font-bold uppercase tracking-wider text-white"
            >
              LEGAL :
            </Typography>
            <div className="flex flex-col gap-2 font-secondary uppercase text-white/75">
              <a href="#" className="hover:text-white transition-colors">
                <span>Download</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span>Certifications</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span>Biennial Report</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span>Documentation</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span>Privacy Policy</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span>Cookie Policy</span>
              </a>
            </div>
          </div>

          {/* Column 4: COMPANY DATA : (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl font-bold uppercase tracking-wider text-white"
            >
              COMPANY DATA :
            </Typography>
            <div className="flex flex-col gap-2 font-secondary uppercase text-white/75">
              <span>VAT number IT07644780723</span>
              <span>REA BA-572271</span>
              <span>PEC abintrax@pec.it</span>
              <span>SdI 6JXPS2J</span>
              <span>PEPPOL 0211:IT07644780723</span>
              <span>NSO HNLG6PIM</span>
            </div>
          </div>

          {/* Column 5: FOLLOW US : (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl font-bold uppercase tracking-wider text-white"
            >
              FOLLOW US :
            </Typography>
            <div className="flex items-center gap-2.5 sm:gap-3 xl:gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7 flex-nowrap">
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-xl min-[2500px]:rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <Youtube className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-xl min-[2500px]:rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <Linkedin className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-xl min-[2500px]:rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <Facebook className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-xl min-[2500px]:rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <Instagram className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12" />
              </a>
              {/* X icon */}
              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-xl min-[2500px]:rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Copyright */}
        <div className="text-center">
          <Typography
            variant="footer-body"
            color="white"
            className="text-xs sm:text-sm min-[2500px]:text-lg uppercase text-white/70 tracking-wider"
          >
            © 2026 ABINTRAX SRL — ALL RIGHTS RESERVED.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
