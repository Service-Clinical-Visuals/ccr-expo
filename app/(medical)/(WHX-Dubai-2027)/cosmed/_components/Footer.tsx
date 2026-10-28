"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

const QUICK_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#solutions" },
  { name: "Specialties", href: "#specialties" },
  { name: "Resource", href: "#technologies" },
  { name: "News", href: "#news" },
];

const SUPPORT_LINKS = [
  { name: "Request for Support", href: "#" },
  { name: "Register your Product", href: "#" },
  { name: "Upgrade your Software", href: "#" },
  { name: "Request for Installation", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0066B2] text-white pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        {/* Main 4-Column Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-20 pb-12 sm:pb-14 min-[2500px]:pb-20 min-[3800px]:pb-28 border-b border-white/20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Column 1: Logo, Description & Social Icons */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-5">
              <img
                src="/medical/cosmed/f-logo.webp"
                alt="COSMED - The Metabolic Company"
                className="h-10 sm:h-12 md:h-auto min-[2500px]:h-[72px] min-[3800px]:h-[96px] w-auto object-contain"
              />
            </div>
            <p className="font-inter section-text leading-relaxed text-white/90 mb-6">
              COSMED develops innovative diagnostic technologies that support respiratory assessment, cardiac evaluation, metabolic research, and human performance analysis across clinical and scientific environments.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#0066B2] transition-colors"
              >
                <Youtube className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#0066B2] transition-colors"
              >
                <Instagram className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#0066B2] transition-colors"
              >
                <Facebook className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#0066B2] transition-colors"
              >
                <Linkedin className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4 flex flex-col">
            <h4 className="font-plus-jakarta font-bold text-white footer-text mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-inter section-text">
              {QUICK_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-3 lg:pl-4 flex flex-col">
            <h4 className="font-plus-jakarta font-bold text-white footer-text mb-5 tracking-wide">
              Support
            </h4>
            <ul className="flex flex-col gap-3 font-inter section-text">
              {SUPPORT_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-plus-jakarta font-bold text-white footer-text mb-5 tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 font-inter section-text">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <p className="text-white/90 leading-snug section-text">
                  Via dei Piani di Monte Savello, 37 00041 Albano Laziale (RM) Italia
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                <a
                  href="tel:+39069315492"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  +39 06 931-5492
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                <a
                  href="mailto:info@cosmed.com"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  info@cosmed.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-6 sm:pt-8 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          <p className="font-inter text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-xl text-white/80 tracking-wide">
            © 1996-2026 COSMED srl - Terms and conditions | Legal information | Privacy | Cookie
          </p>
        </div>
      </div>
    </footer>
  );
}
