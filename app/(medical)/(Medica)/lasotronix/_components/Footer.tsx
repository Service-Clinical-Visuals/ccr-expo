"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121111] border-t border-white/20 pt-16 xl:pt-20 pb-8 text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        {/* Top Grid: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-8 items-start">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-5 md:col-span-1 xl:col-span-3">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/lasotronix/logo.webp"
                alt="Lasotronix Logo"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="leading-relaxed text-white/80 w-full max-w-[70%]">
              Delivering Innovative Laser Technology For Medical And Dental Applications Through
              Advanced Engineering, Reliable Service, And A Commitment To Customer Satisfaction
              Worldwide.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4 md:col-span-1 xl:col-span-2 xl:pl-4">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <div className="w-full h-px bg-white/50"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2.5">
                <Link href="#home" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Home
                </Link>
                <Link href="#about" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  About
                </Link>
                <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Products
                </Link>
                <Link href="#applications" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Applications
                </Link>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link href="#news" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  News
                </Link>
                <Link href="#contact" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Contact
                </Link>
                <Link href="#" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="footer-body font-bold underline text-white hover:text-[var(--color-primary)] transition-colors">
                  See More
                </Link>
              </div>
            </div>
          </div>

          {/* Col 3: Products (Shifted slightly right) */}
          <div className="flex flex-col gap-4 md:col-span-1 xl:col-span-2 xl:pl-4">
            <Typography variant="footer-heading" color="white">
              Products
            </Typography>
            <div className="flex flex-col gap-2.5 text-white/90">
              <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Dentistry
              </Link>
              <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Surgery
              </Link>
              <Link href="#products" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Neurosurgery
              </Link>
            </div>
          </div>

          {/* Col 4: Contact Us */}
          <div className="flex flex-col gap-4 md:col-span-1 xl:col-span-2">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+48227363434"
                className="flex items-center gap-2.5 footer-body hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[var(--color-primary)] shrink-0" />
                <span className="footer-body">+48 22 736 34 34</span>
              </a>
              <a
                href="mailto:laser@lasotronix.pl"
                className="flex items-center gap-2.5 footer-body hover:text-[var(--color-primary)] transition-colors lowercase"
              >
                <Mail className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[var(--color-primary)] shrink-0" />
                <span className="footer-body">laser@lasotronix.pl</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span className="footer-body leading-snug text-white/90">
                  Lasotronix ul. Elektroniczna 2A 05-500 Piaseczno
                </span>
              </div>
            </div>
          </div>

          {/* Col 5: Social Media Links */}
          <div className="flex flex-col gap-4 md:col-span-1 xl:col-span-2">
            <Typography variant="footer-heading" color="white">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-md"
              >
                <Linkedin className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-md"
              >
                <Instagram className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-md"
              >
                <Facebook className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 fill-current" strokeWidth={0} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-md"
              >
                <Youtube className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 fill-current" strokeWidth={0} />
              </a>
            </div>
          </div>

          {/* Col 6: Applications */}
          <div className="flex flex-col gap-4 md:col-span-1 xl:col-span-1">
            <Typography variant="footer-heading" color="white">
              Applications
            </Typography>
            <div className="flex flex-col gap-2.5 text-white/90">
              <Link href="#applications" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Dentistry
              </Link>
              <Link href="#applications" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Vascular Surgery
              </Link>
              <Link href="#applications" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Proctology
              </Link>
              <Link href="#applications" className="footer-body hover:text-[var(--color-primary)] transition-colors">
                Neurosurgery
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full h-px bg-white/30"></div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <Typography variant="footer-body" color="white" className="text-white/80">
            © 2026 Lasotronix. Implemented by Proksa Studio
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
