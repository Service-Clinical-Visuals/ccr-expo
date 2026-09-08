"use client";

import React from "react";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "How It Works", id: "how-it-works" },
  { name: "Skin Concerns", id: "skin-concerns" },
  { name: "Proven Results", id: "proven-results" },
  { name: "Blog", id: "blog" },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Section */}
      <div className="w-full bg-[#111111] text-white py-16 2xl:py-24">
        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 2xl:gap-12 items-start">

          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-6 2xl:gap-8 items-start">
            <img
              src="/medical/hydrafacial/logo1.png"
              alt="Hydrafacial"
              className="h-10 2xl:h-14 w-auto object-contain object-left brightness-0 invert"
            />
            <Typography variant="footer-body" color="white" className="leading-relaxed xl:max-w-[75%]">
              HydraFacial is a global leader in skin health innovation, combining advanced technology with personalized treatments to deliver visibly refreshed, hydrated, and radiant-looking skin.
            </Typography>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-white text-white/80 transition-colors">
                <Instagram className="w-6 h-6 2xl:w-8 2xl:h-8" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white text-white/80 transition-colors">
                <Facebook className="w-6 h-6 2xl:w-8 2xl:h-8" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6 2xl:gap-8">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4 2xl:gap-5">
              {quickLinks.map((link) => (
                <a key={link.name} href={`#${link.id}`} className="hover:text-white text-white/80 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-2 flex flex-col gap-6 2xl:gap-8">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-5 2xl:gap-6">
              <a href="tel:+18006034996" className="flex items-center gap-3 hover:text-white text-white/80 transition-colors w-fit">
                <Phone className="w-5 h-5 2xl:w-6 2xl:h-6 shrink-0" strokeWidth={1.5} />
                <Typography variant="footer-body" color="white">
                  1-800-603-4996
                </Typography>
              </a>
              <div className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5 2xl:w-6 2xl:h-6 shrink-0 mt-0.5" strokeWidth={1.5} />
                <Typography variant="footer-body" color="white" className="leading-relaxed">
                  6950 Bryan Dairy Road,<br />Suite A Largo, Florida<br />33777, USA
                </Typography>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center h-full min-h-[150px]">
            <div className="w-px h-full bg-white/20" />
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-6 2xl:gap-8">
            <Typography variant="footer-heading" color="white">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white" className="leading-relaxed">
              Be the first to know about new collections and exclusive offers.
            </Typography>
            <form
              className="flex items-center mt-2 max-w-md w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Your E-Maild ID"
                className="flex-1 min-w-0 bg-white text-black pl-6 pr-20 py-3.5 rounded-full focus:outline-none placeholder:text-gray-400 footer-body relative z-0"
              />
              <button
                type="submit"
                className="bg-[#1877F2] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full whitespace-nowrap transition-colors footer-body font-medium -ml-12 relative z-10 shadow-[0_2px_15px_rgba(24,119,242,0.3)]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white py-5 2xl:py-8 border-t border-gray-200">
        <div className="custom-container flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Typography variant="footer-body" className="text-gray-800">
            Copyright © 2026. Hydrafacial LLC. All Rights Reserved
          </Typography>
          <div className="flex items-center gap-8 2xl:gap-12">
            <a href="#" className="hover:text-primary transition-colors">
              <Typography variant="footer-body" className="text-gray-800">
                Terms &amp; Conditions
              </Typography>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Typography variant="footer-body" className="text-gray-800">
                Privacy policy
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
