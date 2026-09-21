"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#2A2A2A] border-t border-gray-200 mt-auto">
      <div className="w-full py-12 lg:py-16 min-[3800px]:py-32">
        <div className="custom-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Logo & Text (4 columns) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-6" data-aos="fade-right">
            <Link href="/" className="inline-block">
              <img src="/adamo/logo.png" alt="Adamo Logo" className="w-[120px] lg:w-[150px] min-[3800px]:w-[350px] h-auto object-contain" />
            </Link>
            <Typography variant="footer-body" color="muted" className="leading-relaxed lg:pr-8 text-sm min-[3800px]:text-2xl min-[3800px]:leading-loose">
              Adamo S.r.l. develops innovative diagnostic technologies designed to support healthcare professionals with precision, reliability, and advanced imaging solutions across a range of clinical applications.
            </Typography>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6 lg:pl-4" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="dark" className="font-semibold text-lg min-[3800px]:text-4xl min-[3800px]:mb-4">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8">
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Home</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Company</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Products</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Shop</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Contact</Typography></Link>
            </div>
          </div>

          {/* Products (2 columns) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark" className="font-semibold text-lg min-[3800px]:text-4xl min-[3800px]:mb-4">
              Products
            </Typography>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8">
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Dermatoscopy Line</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Capillaroscopy Line</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Colposcopy Line</Typography></Link>
              <Link href="#" className="hover:text-primary transition-colors w-fit"><Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl">Hysteroscopy Line</Typography></Link>
            </div>
          </div>

          {/* Contact Us (3 columns) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark" className="font-semibold text-lg min-[3800px]:text-4xl min-[3800px]:mb-4">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-[#FCB040] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl leading-relaxed">+39 0923 558778</Typography>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-[#FCB040] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl leading-relaxed">info@adamosrl.com</Typography>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-[#FCB040] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <Typography variant="footer-body" color="muted" className="min-[3800px]:text-2xl leading-relaxed">Via F.Culcasi 1/B ZIR 91100<br/>Trapani (TP)<br/>REA 172062 - Cap. Soc.<br/>10.000 €</Typography>
              </div>
            </div>
          </div>

          {/* Social Media Links (1 column) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col gap-6 items-start" data-aos="fade-left" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark" className="font-semibold text-lg min-[3800px]:text-4xl min-[3800px]:mb-4">
              Social Media Links
            </Typography>
            <div className="flex gap-3 min-[3800px]:gap-6">
              <Link href="#" className="w-8 h-8 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center hover:bg-primary transition-colors">
                <FaLinkedinIn className="text-sm min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="w-8 h-8 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebookF className="text-sm min-[3800px]:text-3xl" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6 min-[3800px]:py-12 border-t border-gray-200">
        <div className="custom-container flex justify-center items-center">
          <Typography variant="footer-body" color="muted" className="text-sm min-[3800px]:text-2xl text-center">
            © Adamo srl. Tutti i diritti riservati - 2026 - All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
