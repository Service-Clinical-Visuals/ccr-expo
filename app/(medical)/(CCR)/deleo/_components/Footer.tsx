"use client";

import React from "react";
import { Instagram, Facebook, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import Typography from "./Typography";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#F1F1F1] overflow-hidden pt-16 xl:pt-24 pb-8">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-6 items-start">

          {/* Column 1: Logo */}
          <div className="flex flex-col gap-6 items-start">
            <img
              src="/medical/deleo/footer-logo.png"
              alt="Deleo Logo"
              className="h-16 xl:h-[120px] min-[3800px]:h-[140px] object-contain object-left"
            />
          </div>

          {/* Column 2: Opening Hours */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="dark">
              Opening hours :
            </Typography>
            <Typography variant="footer-body" color="muted">
              Monday to Friday, 9am to 5pm
            </Typography>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="dark">
              Contact :
            </Typography>
            <div className="flex flex-col gap-3">
              <a href="tel:+330494458375" className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors">
                <Phone className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-black shrink-0" strokeWidth={2} />
                <Typography variant="footer-body" color="muted" className="inherit-color">
                  (+33) (0) 4 94 45 83 75
                </Typography>
              </a>
              <a href="mailto:contact@deleo.fr" className="flex items-center gap-3 hover:text-[var(--color-primary)] transition-colors">
                <Mail className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-black shrink-0" strokeWidth={2} />
                <Typography variant="footer-body" color="muted" className="inherit-color">
                  contact@deleo.fr
                </Typography>
              </a>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="flex flex-col gap-4">
            <Typography variant="footer-heading" color="dark">
              Address :
            </Typography>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-black shrink-0 mt-0.5" strokeWidth={2} />
              <Typography variant="footer-body" color="muted" className="leading-relaxed">
                Jean-Louis Centre of Excellence<br />
                239 via Nova 83600 Fréjus FRANCE
              </Typography>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-400"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <Typography variant="footer-body" color="muted">
            Copyright © 2026 DELEO - All Rights Reserved -{" "}
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors underline underline-offset-2">Legal</Link> -{" "}
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors underline underline-offset-2">Privacy policy</Link> -{" "}
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors underline underline-offset-2">Regulatory</Link> -By{" "}
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors underline underline-offset-2">Base Sud</Link>
          </Typography>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-black hover:text-[var(--color-primary)] transition-colors">
              <Facebook className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 fill-black hover:fill-current" strokeWidth={0} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-black hover:text-[var(--color-primary)] transition-colors">
              <Linkedin className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 fill-black hover:fill-current" strokeWidth={0} />
            </a>
            <a href="#" aria-label="Instagram" className="text-black hover:text-[var(--color-primary)] transition-colors">
              <Instagram className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12" strokeWidth={2} />
            </a>
            <a href="#" aria-label="Youtube" className="text-black hover:text-[var(--color-primary)] transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
