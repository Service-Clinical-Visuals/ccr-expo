"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Send } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-white border-t border-gray-200 text-[#333333] pt-10 sm:pt-12 lg:pt-14 xl:pt-16 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-6 sm:pb-8 min-[2500px]:pb-10 min-[3800px]:pb-14 overflow-hidden"
    >
      <div className="custom-container flex flex-col">
        {/* Top Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 min-[2500px]:gap-16 items-start mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24">
          
          {/* Col 1: Logo & Info */}
          <div className="w-full lg:col-span-3 xl:col-span-3 flex flex-col items-start gap-4 min-[2500px]:gap-6" data-aos="fade-up" data-aos-delay="100">
            <Link href="#home" className="inline-block mb-2">
              <img
                src="/medical/biomedicinos/logo.png"
                alt="Biomedicinos Logo"
                className="w-[200px] sm:w-[240px] min-[2500px]:w-[320px] min-[3800px]:w-[400px] h-auto object-contain select-none"
              />
            </Link>
            <Typography variant="footer-body" color="muted" className="footer-body text-gray-600 leading-relaxed max-w-sm">
              BM Technica is a Lithuania-based medical technology company specializing in diagnostic imaging solutions, particularly advanced colposcopy systems.
            </Typography>
          </div>

          {/* Col 2: Quick Links */}
          <div className="w-full lg:col-span-2 xl:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark" className="footer-heading">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 text-gray-600">
              <li>
                <Link href="#home" className="footer-body block hover:text-[var(--color-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="footer-body block hover:text-[var(--color-primary)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body block hover:text-[var(--color-primary)] transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#contact" className="footer-body block hover:text-[var(--color-primary)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="w-full lg:col-span-2 xl:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark" className="footer-heading">
              Products
            </Typography>
            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 text-gray-600">
              <li>
                <Link href="#products" className="footer-body block hover:text-[var(--color-primary)] transition-colors lowercase first-letter:uppercase">
                  colposcope alscope
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body block hover:text-[var(--color-primary)] transition-colors lowercase first-letter:uppercase">
                  videocolposcope slv-101
                </Link>
              </li>
              <li>
                <Link href="#products" className="footer-body block hover:text-[var(--color-primary)] transition-colors lowercase first-letter:uppercase">
                  video colposcope slv - 101 hdm
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="w-full lg:col-span-2 xl:col-span-3 flex flex-col gap-4 min-[2500px]:gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark" className="footer-heading">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4 min-[2500px]:gap-6 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-gray-700 shrink-0 mt-0.5" strokeWidth={1.5} />
                <Typography variant="footer-body" color="muted" className="footer-body">Naugarduko g. 68B</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-gray-700 shrink-0" strokeWidth={1.5} />
                <a href="tel:+37052078035" className="footer-body hover:text-[var(--color-primary)] transition-colors whitespace-nowrap">
                  +370 (5) 2078035 (Eng, Rus)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-gray-700 shrink-0" strokeWidth={1.5} />
                <a href="mailto:sale@bmtechnica.com" className="footer-body hover:text-[var(--color-primary)] transition-colors break-all">
                  sale@bmtechnica.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Stay Updated */}
          <div className="w-full lg:col-span-3 xl:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6" data-aos="fade-up" data-aos-delay="500">
            <Typography variant="footer-heading" color="dark" className="footer-heading">
              Stay Updated
            </Typography>
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 min-[2500px]:px-5 min-[2500px]:py-3.5 min-[3800px]:px-6 min-[3800px]:py-4 text-sm min-[2500px]:text-lg min-[3800px]:text-2xl focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                required
              />
              <button 
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center border border-gray-300 rounded-md p-2 min-[2500px]:p-3.5 min-[3800px]:p-4 hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors cursor-pointer group"
              >
                <Send className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-gray-700 group-hover:text-[var(--color-primary)] transition-colors" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-6 sm:mb-8 min-[2500px]:mb-10 min-[3800px]:mb-14" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
          <Typography variant="footer-body" color="muted" className="footer-body text-center sm:text-left w-full sm:w-auto flex-grow sm:flex-grow-0 sm:mx-auto">
            © Biomedicinos. All Rights Reserved.
          </Typography>

          {/* Social Icons */}
          <div className="flex items-center gap-4 min-[2500px]:gap-6 justify-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 flex items-center justify-center hover:text-[var(--color-primary)] transition-colors"
            >
              <Linkedin className="w-full h-full" strokeWidth={1.5} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 flex items-center justify-center hover:text-[var(--color-primary)] transition-colors"
            >
              <Twitter className="w-full h-full" strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 flex items-center justify-center hover:text-[var(--color-primary)] transition-colors"
            >
              <Facebook className="w-full h-full" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
