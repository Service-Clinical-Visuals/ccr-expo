"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact Us", href: "#contact" },
  { name: "IFUs", href: "#" },
];

const productLinks = [
  { name: "Gynecology", href: "#products" },
  { name: "Dermatology", href: "#products" },
  { name: "High Res Anoscopy", href: "#products" },
];

/**
 * Footer Component - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Bare white logo with no background or border
 */
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#4F6744] text-white pt-8 sm:pt-10 xl:pt-12 overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 xl:gap-12 items-start">
          
          {/* Col 1: Logo, Bio & Socials (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            <Link href="#home" className="inline-block overflow-visible w-fit mb-5 sm:mb-7 mt-1.5" aria-label="Zinnanti Home">
              <img
                src="/medical/zinnanti-surgical-3/white_logo.webp"
                alt="Zinnanti Surgical Logo"
                className="h-10 sm:h-12 min-[2000px]:h-14 min-[2500px]:h-18 min-[3800px]:h-24 w-auto object-contain transform scale-[1.85] sm:scale-[2.0] lg:scale-[2.2] origin-left transition-transform"
              />
            </Link>

            <Typography
              variant="p"
              color="white"
              className="text-white/90 leading-relaxed text-justify max-w-md mt-1"
            >
              Advancing surgical care through innovative smoke evacuation technology and specialized medical solutions. We are committed to supporting healthcare professionals with thoughtfully engineered products that promote cleaner surgical environments, procedural efficiency, and improved patient care.
            </Typography>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#4F6744] hover:bg-[#38315E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#4F6744] hover:bg-[#38315E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="text-xl sm:text-2xl font-bold tracking-tight">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="text-xl sm:text-2xl font-bold tracking-tight">
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Subscribe Newsletter (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Typography variant="footer-heading" color="white" className="text-xl sm:text-2xl font-bold tracking-tight">
              Subscribe to Our Newsletter
            </Typography>

            <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl text-white/80 leading-relaxed font-['DM_Sans']">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>

            {/* Newsletter Input Box */}
            <form onSubmit={handleSubmit} className="w-full mt-2">
              <div className="w-full bg-white rounded-[16px] min-[3800px]:rounded-[28px] p-1.5 sm:p-2 flex items-center justify-between gap-2 shadow-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-Mail id"
                  required
                  className="w-full bg-transparent px-3 sm:px-4 py-2 text-sm sm:text-base text-[#333333] placeholder-gray-400 outline-none font-['DM_Sans']"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#38315E] hover:bg-[#2d274c] text-white font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl px-4 sm:px-5 py-2.5 sm:py-3 rounded-[12px] min-[3800px]:rounded-[20px] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* Bottom Copyright Bar: White background spanning full-width */}
      <div className="w-full bg-white py-2.5 sm:py-3 mt-6 sm:mt-8 text-center border-t border-gray-100">
        <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl font-medium text-[#111111]">
          © 2025 Zinnanti Surgical Design Group, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
