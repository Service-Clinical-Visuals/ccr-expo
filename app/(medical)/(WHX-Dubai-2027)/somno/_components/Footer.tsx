/**
 * Footer Component
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Deep blue background (#005781) with white typography.
 * 2. 5 Column Layout:
 *    - Col 1: White Logo, Company Mission Statement, Social Links in #68A2C2 circles.
 *    - Col 2: Quick Links with top dividing rule.
 *    - Col 3: Legal links.
 *    - Col 4: Important Links.
 *    - Col 5: Contact Info with Address, Phone, and Fax.
 * 3. Bottom Centered Copyright Bar.
 */
"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Printer } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaVimeoV, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#005781] text-white pt-8 sm:pt-10 pb-4 sm:pb-6 overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10">

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-start">

          {/* Col 1: Logo & Mission Statement & Social Links */}
          <div className="flex flex-col gap-5 sm:gap-6 md:col-span-2 lg:col-span-1">
            <Link href="#home" className="inline-block origin-left pb-3" aria-label="SOMNOmedics Home">
              <img
                src="/medical/somno/footer_logo_clean.webp"
                alt="SOMNOmedics"
                className="h-12 sm:h-14 min-[2500px]:h-20 min-[3800px]:h-28 w-auto object-contain transform scale-[1.6] sm:scale-[1.85] origin-left transition-transform"
              />
            </Link>

            <p className="font-secondary text-white/90 text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl leading-relaxed">
              SOMNOmedics GmbH is rich with unique ideas, world firsts and a strong pedigree of entrepreneurial thinking
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#68A2C2] hover:bg-white text-white hover:text-[#005781] flex items-center justify-center transition-colors shadow-sm"
              >
                <FaLinkedinIn className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#68A2C2] hover:bg-white text-white hover:text-[#005781] flex items-center justify-center transition-colors shadow-sm"
              >
                <FaFacebookF className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
              <a
                href="#"
                aria-label="Vimeo"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#68A2C2] hover:bg-white text-white hover:text-[#005781] flex items-center justify-center transition-colors shadow-sm"
              >
                <FaVimeoV className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#68A2C2] hover:bg-white text-white hover:text-[#005781] flex items-center justify-center transition-colors shadow-sm"
              >
                <FaYoutube className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-primary text-white text-2xl lg:text-[24px] min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide pb-2 border-b border-[#D9D9D9]/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 font-secondary text-white/85 text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Company</Link></li>
              <li><Link href="#experience-360" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="#global-footprint" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Service &amp; Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-primary text-white text-2xl lg:text-[24px] min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide pb-2 border-b border-[#D9D9D9]/40">
              Legal
            </h4>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 font-secondary text-white/85 text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl">
              <li><Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Data protection</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Col 4: Important Links */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-primary text-white text-2xl lg:text-[24px] min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide pb-2 border-b border-[#D9D9D9]/40">
              Important Links
            </h4>
            <ul className="flex flex-col gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 font-secondary text-white/85 text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl">
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Jobs/Career</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Configurator</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
            <h4 className="font-primary text-white text-2xl lg:text-[24px] min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-wide pb-2 border-b border-[#D9D9D9]/40">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 font-secondary text-white/85 text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl">
              <div className="flex items-start gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                <MapPin className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 text-white mt-0.5" strokeWidth={2} />
                <p className="leading-snug">
                  Am Sonnenstuhl 63<br />
                  D-97236 Randersacker<br />
                  Germany
                </p>
              </div>

              <div className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                <Phone className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 text-white" strokeWidth={2} />
                <a href="tel:+499313590940" className="hover:text-white transition-colors">
                  <p>+49 931 359094 0</p>
                </a>
              </div>

              <div className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                <Printer className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 text-white" strokeWidth={2} />
                <p>+49 931 359094 49</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-4 sm:pt-5 min-[2500px]:pt-8 min-[3800px]:pt-12 border-t border-white/20 text-center">
          <p className="font-secondary text-white/70 text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl">
            Copyrights © 2026 SOMNOmedics AG
          </p>
        </div>

      </div>
    </footer>
  );
}

