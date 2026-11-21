"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Product", href: "#products" },
  { name: "Downloads", href: "#downloads" },
  { name: "CDMO", href: "#cdmo" },
  { name: "Others...", href: "#news" },
];

const productLinks = [
  { name: "Blood Collection", href: "#products" },
  { name: "Diabetics Care", href: "#products" },
  { name: "Drug Delivery", href: "#products" },
  { name: "Surgical Sutures", href: "#products" },
];

/**
 * Footer Navigation Component - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Responsive Multi-Column Layout:
 *    - Brand narrative, organized link silos, direct contact points, and email subscription.
 * 2. Visual Contrast:
 *    - Deep brand blue `#1B4298` background with crisp white inverted logo and typography.
 * 3. 4K & Ultra-wide scaling:
 *    - High-res display responsive gaps and font scaling up to min-[3800px].
 */
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to Vitrex Medical Group updates!");
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#1B4298] text-white pt-14 sm:pt-16 lg:pt-20 min-[2500px]:pt-28 min-[3800px]:pt-36 pb-8 sm:pb-10 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-start">
          
          {/* Col 1: Logo & Company Narrative (4 cols on lg) */}
          <div className="flex flex-col gap-4 sm:gap-5 col-span-1 sm:col-span-2 lg:col-span-4">
            <Link href="#home" className="inline-block" aria-label="Vitrex Medical Group Home">
              <img
                src="/medical/vitrex/logo.webp"
                alt="VMG Vitrex Medical Group Logo"
                className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2000px]:h-14 2k:h-[70px] 4k:h-[100px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <Typography
              variant="p"
              color="white"
              className="para-text text-white/90 leading-relaxed pr-0 lg:pr-4"
            >
              CHIRMAX Surgical, a member of Vitrex Medical Group, specializes in high-quality European-made surgical sutures and meshes. With a broad portfolio of absorbable and non-absorbable sutures, specialized needles, and surgical mesh solutions, the company supports human, veterinary, and dental surgical applications with a strong focus on precision, quality, and reliability.
            </Typography>
          </div>

          {/* Col 2: Quick Links (2 cols on lg) */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 lg:col-span-2">
            <Typography variant="footer-heading" color="white" className="font-semibold text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.1875rem] 2k:text-[1.5625rem] 4k:text-[2.1875rem] tracking-wide">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2 2k:gap-3.5 4k:gap-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="para-text text-white/85 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product (2 cols on lg) */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 lg:col-span-2">
            <Typography variant="footer-heading" color="white" className="font-semibold text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.1875rem] 2k:text-[1.5625rem] 4k:text-[2.1875rem] tracking-wide">
              Product
            </Typography>
            <ul className="flex flex-col gap-2 2k:gap-3.5 4k:gap-5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="para-text text-white/85 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (2 cols on lg) */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 lg:col-span-2">
            <Typography variant="footer-heading" color="white" className="font-semibold text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.1875rem] 2k:text-[1.5625rem] 4k:text-[2.1875rem] tracking-wide">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-3 2k:gap-5 4k:gap-7 text-white/90">
              <li className="flex items-start gap-2.5 2k:gap-4 4k:gap-6 para-text">
                <MapPin className="w-5 h-5 2k:w-8 2k:h-8 4k:w-11 4k:h-11 shrink-0 mt-0.5 text-white" />
                <span className="para-text">HEBUmedical GmbH Badstraße 8, D-78532 Tuttlingen,</span>
              </li>
              <li className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 para-text">
                <Phone className="w-5 h-5 2k:w-8 2k:h-8 4k:w-11 4k:h-11 shrink-0 text-white" />
                <span className="para-text">+49 (0) 98420158,</span>
              </li>
              <li className="flex items-center gap-2.5 2k:gap-4 4k:gap-6 para-text">
                <Mail className="w-5 h-5 2k:w-8 2k:h-8 4k:w-11 4k:h-11 shrink-0 text-white" />
                <span className="para-text">info@VMG.com</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Updated (2 cols on lg) */}
          <div className="flex flex-col gap-3 2k:gap-5 4k:gap-7 col-span-1 sm:col-span-2 lg:col-span-2">
            <Typography variant="footer-heading" color="white" className="font-semibold text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.1875rem] 2k:text-[1.5625rem] 4k:text-[2.1875rem] tracking-wide">
              Stay Updated
            </Typography>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 2k:gap-3 4k:gap-4 w-full mt-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-white rounded-[8px] 2k:rounded-[14px] 4k:rounded-[20px] px-3.5 py-2 2k:px-6 2k:py-3.5 4k:px-8 4k:py-5 text-white placeholder-white/80 para-text outline-none"
              />
              <button
                type="submit"
                aria-label="Submit newsletter subscription"
                className="border border-white rounded-[8px] 2k:rounded-[14px] 4k:rounded-[20px] p-2 2k:p-3.5 4k:p-5 hover:bg-white/10 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-white" />
              </button>
            </form>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/40 my-2" />

        {/* Copyright Bar */}
        <div className="text-center">
          <p className="text-white/80 para-text">
            Copyright © 2024 VMG
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

