"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Certificates", href: "#" },
    { name: "See More >>", href: "#" },
  ],
  products: [
    { name: "Knee Prosthesis", href: "#" },
    { name: "Hip Prosthesis", href: "#" },
    { name: "Surgical Instrument Set Manufacturing", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="w-full pt-16 pb-8 2xl:pt-20 2xl:pb-10 border-b border-white/20">
        <div className="custom-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-6 2xl:gap-8 items-start">

          {/* Column 1: Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-6 items-start" data-aos="fade-up">
            <img
              src="/medical/proimplant/logo.png"
              alt="Hipknee Logo"
              className="h-16 2xl:h-20 w-auto object-contain object-left"
            />
            <Typography variant="footer-body" color="white" className="leading-relaxed mt-2 lg:pr-8">
              With over 25 years of experience, Hipknee delivers high-quality hip and knee prosthesis systems designed with a focus on patient safety, surgeon comfort, and improved quality of life.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Our Products */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Our Products
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.products.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <Typography variant="footer-body" color="white">+90 232 325 23 23</Typography>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <Typography variant="footer-body" color="white">info@hipknee.com.tr</Typography>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <Typography variant="footer-body" color="white">10016. Sk. No:20 A.O.S.B.<br />Çiğli - İzmir / Türkiye</Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Social Media Links
            </Typography>
            <div className="flex gap-4 min-[3800px]:gap-6 flex-wrap">
              <Link href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaLinkedinIn className="text-xl min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaInstagram className="text-xl min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaFacebookF className="text-xl min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaYoutube className="text-xl min-[3800px]:text-3xl" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6">
        <div className="custom-container flex justify-center items-center">
          <Typography variant="footer-body" color="white" className="text-center opacity-80">
            © 2026 - Hipknee. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
