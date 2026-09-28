"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "Message Of Management", href: "#" },
    { name: "Mission And Vision", href: "#" },
    { name: "Quality Of Certificates", href: "#" },
    { name: "See More >>", href: "#" },
  ],
  products: [
    { name: "Goldcath® (Ringed)", href: "#" },
    { name: "Goldcath® Kit", href: "#" },
    { name: "Primacath®", href: "#" },
    { name: "Primagel®", href: "#" },
    { name: "Goldpad® (Anjio Ped)", href: "#" },
  ],
  demersan: [
    { name: "News", href: "#" },
    { name: "Human Resources", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact", href: "#" },
  ]
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#192B6C] text-white">
      <div className="w-full pt-16 pb-12 2xl:pt-20 2xl:pb-16 border-b border-white/20">
        <div className="custom-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-10 lg:gap-6 2xl:gap-8 items-start">

          {/* Column 1: Logo & Description */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 flex flex-col gap-6 items-start" data-aos="fade-up">
            <img src="/medical/demersan/f-logo.png" alt="Demersan" className="h-auto w-auto object-contain" />
            <Typography variant="footer-body" color="white" className="leading-relaxed mt-2 lg:pr-8 text-sm">
              DEMERSAN develops specialised medical products designed to support healthcare professionals across urological and interventional applications. Our portfolio includes catheters, gels, and pressure management solutions.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white" className="text-sm">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg">
              Products
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.products.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white" className="text-sm">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Demersan */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg">
              Demersan
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.demersan.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white" className="text-sm">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Contact Us */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white" className="font-semibold text-lg">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <Typography variant="footer-body" color="white" className="text-sm">+90 (312) 255 08 86</Typography>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <Typography variant="footer-body" color="white" className="text-sm">demersan@demersan.com.tr</Typography>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <Typography variant="footer-body" color="white" className="text-sm">Batı Sitesi Mah. Gersan San. Sit.<br />Tahsin Kahraman Cad. No: 92,<br />Yenimahalle, Ankara, Türkiye</Typography>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6">
        <div className="custom-container flex justify-center items-center">
          <Typography variant="footer-body" color="white" className="text-center text-xs uppercase font-semibold tracking-wider">
            COPYRIGHT © 2019 DEMERSAN ALL RIGHT RESERVED
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
