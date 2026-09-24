"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F6] text-foreground">
      <div className="w-full pt-16 pb-12 border-b border-gray-300">
        <div className="custom-container grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 sm:gap-10 lg:gap-8 items-start">

          {/* Column 1: Logo & Description (spans 2 columns on large screens) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6 items-start" data-aos="fade-up">
            <img
              src="/medical/prince-medical/logo.png"
              alt="Prince Medical Logo"
              className="h-10 xl:h-12 min-[3800px]:h-40 w-auto object-contain object-left"
            />
            <Typography variant="footer-body" color="dark" className="leading-relaxed xl:max-w-[90%] mt-2">
              PRINCE MEDICAL develops and provides specialised medical devices and solutions for Digestive & Bronchial Endoscopy, Gynaecology, Medically Assisted Reproduction, and cleaning applications.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="dark">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">About Us</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Who Are We?</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Medical Devices</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Documentation</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body font-bold underline text-foreground">See More &gt;&gt;</Link>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark">
              Products
            </Typography>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Digestive & Bronchial Endoscopy</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Gynaecology</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Medically Assisted Reproduction</Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit footer-body text-foreground">Cleaning Swabs & Brushes</Link>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0" strokeWidth={1.5} />
                <span className="footer-body">+33 (0)3 44 26 54 76</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0" strokeWidth={1.5} />
                <span className="footer-body">prince-medical@omerin.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="footer-body leading-relaxed pr-4">ZA La Sente Du Moulin - 64 Rue Gutenberg 60530 Ercuis - France</span>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Linkedin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Twitter className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Facebook className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6">
        <div className="custom-container flex justify-center items-center">
          <Typography variant="footer-body" className="text-gray-500 text-center">
            © 2026 PRINCE MEDICAL. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
