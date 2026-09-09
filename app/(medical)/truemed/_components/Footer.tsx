"use client";

import React from "react";
import { Instagram, Facebook, Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "Support", id: "support" },
  { name: "News", id: "news" },
  { name: "Contact Us", id: "contact" },
];

const productsLinks = [
  { name: "foot & ankle", id: "foot-ankle" },
  { name: "tibia & femur", id: "tibia-femur" },
  { name: "hand & wrist", id: "hand-wrist" },
  { name: "elbow", id: "elbow" },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#045664] text-white overflow-hidden">
      {/* Top Section */}
      <div className="w-full py-16 xl:py-24">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-6 items-start">

          {/* Column 1: Logo & Description */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-6 items-start">
            <img
              src="/truemed/logo.png"
              alt="TRUEMED"
              className="h-10 xl:h-12  max-w-[65%] object-contain object-left brightness-0 invert"
            />
            <Typography variant="footer-body" color="white" className="leading-relaxed lg:max-w-[85%] ">
              TRUEMED is a Turkey-based medical device manufacturer specializing in high-quality trauma implants, including orthopedic plates and fixation systems. Founded in 2012, the company focuses on precision engineering, patient safety, and innovative solutions to support effective fracture treatment worldwide.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Typography variant="footer-heading" color="white" weight="semibold">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a key={link.name} href={`#${link.id}`} className="hover:text-[var(--color-primary)]  transition-colors w-fit">
                  <Typography variant="footer-body" color="white" className="inherit-color">
                    {link.name}
                  </Typography>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Typography variant="footer-heading" color="white" weight="semibold">
              Products
            </Typography>
            <div className="flex flex-col gap-3">
              {productsLinks.map((link) => (
                <a key={link.name} href={`#${link.id}`} className="hover:text-[var(--color-primary)]  transition-colors w-fit">
                  <Typography variant="footer-body" color="white" className="inherit-color">
                    {link.name}
                  </Typography>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Typography variant="footer-heading" color="white" weight="semibold">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3  hover:text-[var(--color-primary)] transition-colors">
                <MapPin className="w-5 h-5 shrink-0 mt-1" strokeWidth={1.5} />
                <Typography variant="footer-body" color="white" className="leading-relaxed inherit-color">
                  Şerifali, Türker Cd. No:15 34775,<br />Ümraniye | Istanbul<br />Türkiye
                </Typography>
              </div>
              <a href="tel:+902163132634" className="flex items-center gap-3 hover:text-[var(--color-primary)]  transition-colors w-fit">
                <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                <Typography variant="footer-body" color="white" className="inherit-color">
                  +90 216 313 26 34
                </Typography>
              </a>
              <a href="mailto:info@truemed.com.tr" className="flex items-start gap-3 hover:text-[var(--color-primary)]  transition-colors w-fit break-all">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.5} />
                <Typography variant="footer-body" color="white" className="inherit-color">
                  info@truemed.com.tr, sales@truemed.com.tr
                </Typography>
              </a>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Typography variant="footer-heading" color="white" weight="semibold">
              Follow Us
            </Typography>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-[var(--color-primary)]  transition-colors">
                <Facebook className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="hover:text-[var(--color-primary)]  transition-colors">
                <Twitter className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[var(--color-primary)]  transition-colors">
                <Linkedin className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[var(--color-primary)]  transition-colors">
                <Instagram className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-transparent border-t border-white/80 py-6">
        <div className="custom-container flex flex-col items-center justify-center text-center">
          <Typography variant="footer-body" color="white"  >
            © 2020 TRUEMED | All rights reserved | Policy Privacy
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
