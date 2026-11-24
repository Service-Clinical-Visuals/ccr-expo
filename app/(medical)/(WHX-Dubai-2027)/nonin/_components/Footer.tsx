/**
 * Footer Component
 * Master Reference: Inogen Development Standards
 * Icon scaling: Phone, MapPin, Mail, and Social icons scale smoothly across 2K (2500px) and 4K (3800px).
 */
"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Technologies", href: "#technologies" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

const productLinks = [
  { name: "Fingertips", href: "#products" },
  { name: "Handheld", href: "#products" },
  { name: "OEM", href: "#products" },
  { name: "Sensors", href: "#products" },
  { name: "See More", href: "#products" },
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#F2F3F4] text-[#111111] overflow-hidden">
      
      {/* Main Top Footer Grid */}
      <div className="custom-container py-6 sm:py-8 lg:py-10 min-[2500px]:py-14 min-[3800px]:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-8 lg:gap-10 xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24 items-start">
          
          {/* Col 1: Logo & Mission Statement */}
          <div className="flex flex-col gap-3.5 sm:gap-4 min-[2500px]:gap-8 min-[3800px]:gap-12 col-span-1 sm:col-span-3 lg:col-span-1 lg:self-center">
            <Link href="#home" aria-label="Nonin Home" className="inline-block">
              <img
                src="/medical/nonin/logo.webp"
                alt="Nonin Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 min-[2500px]:h-24 min-[3800px]:h-36 w-auto object-contain"
              />
            </Link>
            <Typography variant="p" color="dark" className="leading-relaxed text-[#111111]/85 w-full max-w-full">
              Nonin Medical pioneers innovative noninvasive patient monitoring solutions, delivering reliable technology and precise measurements to support better healthcare worldwide.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-6 min-[3800px]:gap-8 lg:pl-4 xl:pl-8">
            <Typography variant="footer-heading" color="primary" className="text-base sm:text-lg lg:text-xl font-bold !font-heading !text-[#2A96C2]">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-1.5 sm:gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#111111]/85 hover:text-[#2A96C2] transition-colors font-body leading-relaxed"
                  >
                    <Typography variant="p" color="dark" className="inline text-inherit">
                      {link.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography variant="footer-heading" color="primary" className="text-base sm:text-lg lg:text-xl font-bold !font-heading !text-[#2A96C2]">
              Products
            </Typography>
            <ul className="flex flex-col gap-1.5 sm:gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors font-body leading-relaxed ${
                      link.name === "See More"
                        ? "text-[#111111] font-bold underline hover:text-[#2A96C2]"
                        : "text-[#111111]/85 hover:text-[#2A96C2]"
                    }`}
                  >
                    <Typography variant="p" color="dark" className="inline text-inherit">
                      {link.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography variant="footer-heading" color="primary" className="text-base sm:text-lg lg:text-xl font-bold !font-heading !text-[#2A96C2]">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 text-[#111111]/85 font-body">
              <a
                href="tel:17635539968"
                className="flex items-center gap-2.5 sm:gap-3 min-[1920px]:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-8 hover:text-[#2A96C2] transition-colors group"
              >
                <Phone className="footer-contact-icon w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5 lg:w-6 lg:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 shrink-0 text-[#111111]" />
                <Typography variant="p" color="dark" className="inline text-inherit">
                  1.763.553.9968
                </Typography>
              </a>

              <div className="flex items-start gap-2.5 sm:gap-3 min-[1920px]:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-8">
                <MapPin className="footer-contact-icon w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5 lg:w-6 lg:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 shrink-0 text-[#111111] mt-1" />
                <Typography variant="p" color="dark" className="inline text-inherit leading-relaxed">
                  13700 1st Ave N, Plymouth, MN 55441
                </Typography>
              </div>

              <a
                href="mailto:info@nonin.com"
                className="flex items-center gap-2.5 sm:gap-3 min-[1920px]:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-8 hover:text-[#2A96C2] transition-colors group"
              >
                <Mail className="footer-contact-icon w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5 lg:w-6 lg:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 shrink-0 text-[#111111]" />
                <Typography variant="p" color="dark" className="inline text-inherit">
                  info@nonin.com
                </Typography>
              </a>
            </div>
          </div>

          {/* Col 5: Social */}
          <div className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography variant="footer-heading" color="primary" className="text-base sm:text-lg lg:text-xl font-bold !font-heading !text-[#2A96C2]">
              Social
            </Typography>
            <div className="flex items-center gap-4 min-[1920px]:gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12 text-[#111111] pt-1">
              <a href="#" aria-label="LinkedIn" className="hover:text-[#2A96C2] transition-colors">
                <Linkedin className="footer-social-icon w-[1.35rem] h-[1.35rem] sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#2A96C2] transition-colors">
                <Youtube className="footer-social-icon w-[1.35rem] h-[1.35rem] sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#2A96C2] transition-colors">
                <Instagram className="footer-social-icon w-[1.35rem] h-[1.35rem] sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-[#2A96C2] transition-colors">
                <Facebook className="footer-social-icon w-[1.35rem] h-[1.35rem] sm:w-6 sm:h-6 lg:w-7 lg:h-7 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-white border-t border-gray-200/60 py-2.5 sm:py-3.5 min-[2500px]:py-6 min-[3800px]:py-8">
        <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[#111111] font-body">
          <div>
            <Typography variant="p" color="dark" className="text-inherit">
              Copyright © 2026 NONIN
            </Typography>
          </div>

          <div className="flex items-center justify-center gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14">
            <Link href="#" className="hover:text-[#2A96C2] transition-colors">
              <Typography variant="p" color="dark" className="text-inherit">
                Privacy Policy
              </Typography>
            </Link>
            <Link href="#" className="hover:text-[#2A96C2] transition-colors">
              <Typography variant="p" color="dark" className="text-inherit">
                Terms &amp; Conditions
              </Typography>
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
