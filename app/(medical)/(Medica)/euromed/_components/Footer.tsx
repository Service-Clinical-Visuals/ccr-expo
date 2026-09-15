"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa6";

const FOOTER_LINKS = {
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Resourses", href: "#resources" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Products", href: "#products" },
    { label: "See More >>", href: "#products", isSpecial: true },
  ],
  ourProducts: [
    { label: "Blood Collection Tubes", href: "#products" },
    { label: "Infection Control", href: "#products" },
    { label: "Infusion Therapy", href: "#products" },
    { label: "Kidney & Urology", href: "#products" },
    { label: "See More >>", href: "#products", isSpecial: true },
  ],
  socials: [
    {
      name: "LinkedIn",
      href: "",
      icon: "/medical/euromed/in.png",
    },
    {
      name: "Instagram",
      href: "",
      icon: "/medical/euromed/ins.png",
    },
    {
      name: "Facebook",
      href: "",
      icon: "/medical/euromed/fb.png",
    },
    {
      name: "YouTube",
      href: "",
      icon: "/medical/euromed/u.png",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#7d0506] text-white pt-14 sm:pt-20 pb-8 sm:pb-12">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Main Footer Links Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-12 gap-8 xl:gap-8 2xl:gap-10 pb-10 sm:pb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-4 flex flex-col items-start pr-0 xl:pr-6">
            <Link href="/euromed" className="inline-block group focus:outline-none">
              <div className="relativeh-10 sm:h-15 md:h-20 xl:h-20 flex items-center">
                <img
                  src="/medical/euromed/footerlogo.png"
                  alt="Euromed - The Trusted Partner"
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="section-text text-white font-outfit mt-4 sm:mt-5 max-w-sm leading-relaxed">
              Stay informed with the latest updates, medical innovations, and company
              news from Euromed. Subscribe to our newsletter for the latest insights and
              developments in healthcare.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2">
            <h4 className="font-outfit font-bold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 font-outfit">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href=""
                    className={`section-text text-white hover:text-white transition-colors duration-200 ${link.isSpecial ? "underline underline-offset-4 font-semibold text-white" : ""
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="xl:col-span-2">
            <h4 className="font-outfit font-bold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Our Products
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5 font-outfit">
              {FOOTER_LINKS.ourProducts.map((link) => (
                <li key={link.label}>
                  <Link
                    href=""
                    className={`section-text text-white/90 hover:text-white transition-colors duration-200 ${link.isSpecial ? "underline underline-offset-4 font-semibold text-white" : ""
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="xl:col-span-2">
            <h4 className="font-outfit font-bold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3 font-outfit">
              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href=""
                  className="section-text text-white/90 hover:text-white transition-colors"
                >
                  +201005559093
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href=""
                  className="section-text text-white/90 hover:text-white transition-colors break-all"
                >
                  sales@euromed.com.eg
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-1" />
                <span className="section-text text-white/90 leading-relaxed">
                  Area No. 10 Block(I) Free Zone, Nasr City, Cairo, Egypt.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="xl:col-span-2">
            <h4 className="font-outfit font-bold text-white footer-text mb-3 sm:mb-4 tracking-wide">
              Social Media Links
            </h4>
            <div className="flex items-center gap-2.5 pt-1">
              {FOOTER_LINKS.socials.map((social) => {
                return (
                  <a
                    className="w-12 h-12 text-[#7d0506] flex items-center justify-center "
                  >
                    <img src={social.icon} alt={social.name} className="w-12 h-12" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Faint Horizontal Divider Line */}
        <div className="w-full h-px bg-white/20 my-6 sm:my-8" />

        {/* Centered Copyright Notice */}
        <div className="text-center" data-aos="fade-up" data-aos-duration="800">
          <p className="section-text text-white/90 font-outfit">
            © 2026 Euromed. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
