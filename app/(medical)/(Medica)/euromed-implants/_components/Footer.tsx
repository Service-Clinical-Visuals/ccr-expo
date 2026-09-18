"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Certificates", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-secondary)] text-[#1E1E1E]">
      <div className="w-full pt-16 pb-12 2xl:pt-20 2xl:pb-16 border-b border-gray-300">
        <div className="custom-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Column 1: Logo & Description & Socials */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-6 items-start">
            <img
              src="/euromed-implants/footer-logo.png"
              alt="Euromed Implants Logo"
              className="h-12 2xl:h-16 min-[3800px]:h-48 w-auto object-contain object-left"
            />
            <Typography variant="footer-body" color="dark" className="leading-relaxed mt-2 lg:pr-8">
              Euromed Implants is a German medical technology company specializing in high-quality orthopaedic implants and surgical instruments.
            </Typography>

            <div className="flex gap-6 min-[3800px]:gap-8 mt-4">
              <Link href="#" className="text-[#1E1E1E] hover:text-primary transition-colors">
                <FaInstagram className="text-2xl min-[3800px]:text-4xl" />
              </Link>
              <Link href="#" className="text-[#1E1E1E] hover:text-primary transition-colors">
                <FaFacebookF className="text-2xl min-[3800px]:text-4xl" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Typography variant="footer-heading" color="dark" className="font-semibold">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors w-fit">
                  <Typography variant="footer-body" color="dark">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-6 relative">
            <Typography variant="footer-heading" color="dark" className="font-semibold">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <Typography variant="footer-body" color="dark">+49 (0) 4141 7897 290</Typography>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <Typography variant="footer-body" color="dark">office@euromed-implants.de</Typography>
              </div>
            </div>

            {/* Vertical divider line for desktop */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400"></div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 flex flex-col gap-6 lg:pl-6">
            <Typography variant="footer-heading" color="dark" className="font-semibold">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="dark">
              Be the first to know about new collections and exclusive offers.
            </Typography>
            <div className="flex items-center w-full max-w-sm mt-4 bg-white rounded-full overflow-hidden p-1 shadow-sm border border-gray-200">
              <input type="email" placeholder="Enter Your E-Mail ID" className="flex-1 px-4 py-2 text-sm outline-none bg-transparent" />
              <button className="bg-[#36679B] text-white px-6 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6 bg-white">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="footer-body" color="dark">
            © 2026 - Euromed Implants GmbH
          </Typography>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">
              <Typography variant="footer-body" color="dark">Terms & Conditions</Typography>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Typography variant="footer-body" color="dark">Privacy policy</Typography>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
