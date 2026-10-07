"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full bg-[#004D7C] bg-[url('/medical/ergon/bg.webp')] bg-cover bg-center text-white pt-14 sm:pt-18 xl:pt-20 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-10 items-start">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/ergon/logo.webp"
                alt="Ergon Sutramed"
                className="h-8 sm:h-9 min-[3800px]:h-18 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <Typography
              variant="footer-body"
              color="white"
              className="text-white/85 leading-relaxed mt-2"
            >
              Ergon Sutramed S.r.l. develops innovative medical solutions in collaboration with healthcare professionals, focusing on diverse clinical needs and supporting patient well-being.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3.5">
            <Typography variant="footer-heading" color="white" className="!font-semibold text-lg min-[3800px]:text-3xl mb-1">
              Quick Links
            </Typography>
            <Link href="#home" className="footer-body text-white/85 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#products" className="footer-body text-white/85 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="#specialties" className="footer-body text-white/85 hover:text-white transition-colors">
              Surgical Specialties
            </Link>
            <Link href="#contacts" className="footer-body text-white/85 hover:text-white transition-colors">
              Contacts
            </Link>
            <Link href="#products" className="footer-body text-white underline underline-offset-2 hover:text-white/80 transition-colors pt-1">
              See More &gt;&gt;
            </Link>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-3.5">
            <Typography variant="footer-heading" color="white" className="!font-semibold text-lg min-[3800px]:text-3xl mb-1">
              Products
            </Typography>
            <Link href="#sutures" className="footer-body text-white/85 hover:text-white transition-colors">
              Sutures
            </Link>
            <Link href="#surgical-meshes" className="footer-body text-white/85 hover:text-white transition-colors">
              Surgical Meshes
            </Link>
            <Link href="#hemostats" className="footer-body text-white/85 hover:text-white transition-colors">
              Hemostats
            </Link>
            <Link href="#surgical-specialties" className="footer-body text-white/85 hover:text-white transition-colors">
              Surgical Specialties
            </Link>
            <Link href="#products" className="footer-body text-white underline underline-offset-2 hover:text-white/80 transition-colors pt-1">
              See More &gt;&gt;
            </Link>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-3.5">
            <Typography variant="footer-heading" color="white" className="!font-semibold text-lg min-[3800px]:text-3xl mb-1">
              Contact Us
            </Typography>
            <a
              href="tel:+390672677319"
              className="flex items-center gap-2.5 footer-body text-white/85 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-white shrink-0" strokeWidth={2} />
              <span className="footer-body text-white/85 hover:text-white">+39 06 72677319</span>
            </a>
            <a
              href="mailto:info@ergonsutramed.com"
              className="flex items-center gap-2.5 footer-body text-white/85 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-white shrink-0" strokeWidth={2} />
              <span className="footer-body text-white/85 hover:text-white">info@ergonsutramed.com</span>
            </a>
            <div className="flex items-start gap-2.5 footer-body text-white/85">
              <MapPin className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-white shrink-0 mt-1" strokeWidth={2} />
              <span className="footer-body text-white/85">Via G. Gregoraci, 12 00173 Rome, Italy</span>
            </div>
          </div>

          {/* Column 5: Company */}
          <div className="flex flex-col gap-3.5">
            <Typography variant="footer-heading" color="white" className="!font-semibold text-lg min-[3800px]:text-3xl mb-1">
              Company
            </Typography>
            <Link href="#about" className="footer-body text-white/85 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#about" className="footer-body text-white/85 hover:text-white transition-colors">
              Mission
            </Link>
            <Link href="#about" className="footer-body text-white/85 hover:text-white transition-colors">
              Manufacturing
            </Link>
            <Link href="#about" className="footer-body text-white/85 hover:text-white transition-colors">
              Vision
            </Link>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center">
          <Typography
            variant="footer-body"
            color="white"
            className="text-white/80"
          >
            © 2026 Ergon Sutramed S.r.l. All Rights Reserved. |{" "}
            <Link href="#privacy" className="footer-body hover:text-white underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
