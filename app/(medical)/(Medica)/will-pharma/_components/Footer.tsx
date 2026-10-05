"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] text-[#4B5563] pt-8 sm:pt-10 xl:pt-12 min-[2500px]:pt-16 min-[3800px]:pt-20 pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 overflow-hidden border-t border-gray-100">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 min-[3800px]:gap-16">
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-10 items-start">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1 xl:col-span-1">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/will-pharma/logo.png"
                alt="Will Pharma"
                className="h-12 sm:h-14 md:h-16 min-[2500px]:h-24 min-[3800px]:h-36 w-auto object-contain"
              />
            </Link>
            <p className="footer-body leading-relaxed mt-2 text-[#4B5563]">
              Since 1924, Will Pharma has been dedicated to improving patient well-being through quality healthcare solutions, local expertise, and innovation for a healthier future.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 col-span-1 xl:pl-6 2xl:pl-8 min-[2500px]:pl-12 min-[3800px]:pl-16">
            <Typography
              variant="footer-heading"
              color="dark"
              className="!font-bold text-[#333333] mb-1"
            >
              Quick Link
            </Typography>
            <Link href="#home" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Home
            </Link>
            <Link href="#about" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Our Story
            </Link>
            <Link href="#products" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Products
            </Link>
            <Link href="#about" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Company
            </Link>
            <Link href="#about" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              History
            </Link>
            <Link href="#experience-360" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Support
            </Link>
            <Link href="#news" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              News
            </Link>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 col-span-1">
            <Typography
              variant="footer-heading"
              color="dark"
              className="!font-bold text-[#333333] mb-1"
            >
              Products
            </Typography>
            <Link href="#products" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Dutch Products
            </Link>
            <Link href="#products" className="footer-body text-[#4B5563] hover:text-[#698A7F] transition-colors">
              Belgium Products
            </Link>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7 col-span-2 sm:col-span-1 md:col-span-1 xl:col-span-1">
            <Typography
              variant="footer-heading"
              color="dark"
              className="!font-bold text-[#333333] mb-1"
            >
              Contact
            </Typography>
            <div className="flex items-start gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-5 text-[#4B5563]">
              <MapPin className="w-5 h-5 min-[2500px]:w-8 min-[3800px]:w-10 text-[#698A7F] shrink-0 mt-0.5" strokeWidth={2} />
              <div className="flex flex-col leading-relaxed text-[#4B5563]">
                <p className="footer-body">Will Pharma Belgium</p>
                <p className="footer-body">Rue du Manil 80</p>
                <p className="footer-body">1301 Wavre</p>
              </div>
            </div>
            <a
              href="tel:+32010243838"
              className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-5 text-[#4B5563] hover:text-[#698A7F] transition-colors"
            >
              <Phone className="w-5 h-5 min-[2500px]:w-8 min-[3800px]:w-10 text-[#698A7F] shrink-0" strokeWidth={2} />
              <p className="footer-body">+32 (0)10 24 38 38</p>
            </a>
            <a
              href="mailto:willpharma@willpharma.com"
              className="flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-5 text-[#4B5563] hover:text-[#698A7F] transition-colors"
            >
              <Mail className="w-5 h-5 min-[2500px]:w-8 min-[3800px]:w-10 text-[#698A7F] shrink-0" strokeWidth={2} />
              <p className="footer-body">willpharma@willpharma.com</p>
            </a>
          </div>

          {/* Column 5: Newsletter Subscription */}
          <div className="flex flex-col gap-3.5 col-span-2 md:col-span-2 xl:col-span-1">
            <Typography
              variant="footer-heading"
              color="dark"
              className="!font-bold text-[#333333] mb-1"
            >
              Subscribe For More Information
            </Typography>
            <p className="footer-body text-[#4B5563]">
              Get the latest WILLPHARMA news, updates, and automotive insights.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center bg-white rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] shadow-sm border border-gray-200 overflow-hidden p-1 min-[2500px]:p-2 min-[3800px]:p-3 mt-1"
            >
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full py-2 px-3 sm:py-2.5 sm:px-4 min-[2500px]:py-4 min-[2500px]:px-6 min-[3800px]:py-6 min-[3800px]:px-8 subscribe-input text-[#4B5563] outline-none placeholder:text-gray-400 bg-transparent"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#698A7F] text-white px-3.5 py-2 sm:px-5 sm:py-2.5 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-12 min-[3800px]:py-6 rounded-[6px] min-[2500px]:rounded-[10px] min-[3800px]:rounded-[16px] hover:bg-[#56736A] transition-colors shrink-0 cursor-pointer font-bold subscribe-btn flex items-center justify-center"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Horizontal Rule */}
        <div className="flex flex-col gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4">
          <div className="flex items-center justify-end gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 pb-1 min-[2500px]:pb-2 min-[3800px]:pb-3">
            <span className="footer-body !font-bold text-[#333333]">
              Follow Us On :
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#698A7F] hover:text-[#56736A] transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
            </a>
          </div>

          <div className="w-full h-px bg-[#D9D9D9]" />
        </div>

        {/* Copyright & Legal Links */}
        <div className="flex items-center justify-center text-center">
          <p className="footer-body !font-bold text-[#333333] text-center leading-relaxed">
            © Will Pharma 2024 | Disclaimer | Privacy | Cookies | Terms &amp; Conditions | Transparency | Working at Will Pharma
          </p>
        </div>
      </div>
    </footer>
  );
}
