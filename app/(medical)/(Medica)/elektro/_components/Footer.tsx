"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#10253D] text-white mt-auto">
      <div className="w-full py-12 lg:py-20">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Logo & Text */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-6" data-aos="fade-right">
            <Link href="/" className="inline-block">
              <img src="/medical/elektro/f-logo.png" alt="Elektro-mag Logo" className="w-auto h-auto object-contain brightness-0 invert" />
            </Link>
            <Typography variant="p" color="white" className="leading-relaxed lg:pr-4 text-sm opacity-90">
              Founded in 1968, Elektro-mag operates in the laboratory, medical, and industrial sectors worldwide, supported by hundreds of distributors and a strong reputation in Turkish and international markets.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 lg:pl-4" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h4" color="white" className="font-semibold text-lg mb-2">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">Home</Typography></Link>
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">Corporate</Typography></Link>
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">All Products</Typography></Link>
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">News</Typography></Link>
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm font-semibold">See More &gt;&gt;</Typography></Link>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h4" color="white" className="font-semibold text-lg mb-2">
              Products
            </Typography>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">Medical Equipment</Typography></Link>
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">Laboratory Equipment</Typography></Link>
              <Link href="#" className="hover:opacity-75 transition-opacity w-fit"><Typography variant="p" color="white" className="text-sm">Industrial Ovens</Typography></Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h4" color="white" className="font-semibold text-lg mb-2">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 shrink-0 text-white mt-0.5" />
                <Typography variant="p" color="white" className="leading-relaxed text-sm">+90 (212) 549 55 25</Typography>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 shrink-0 text-white mt-0.5" />
                <Typography variant="p" color="white" className="leading-relaxed text-sm">export@elektro-mag.com</Typography>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-white mt-0.5" />
                <Typography variant="p" color="white" className="leading-relaxed text-sm">Ikitelli O.S.B.<br />Demirciler Sit.<br />B:7 Blok No: 153, 34490 Basaksehir<br />Istanbul - TURKIYE</Typography>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 items-start" data-aos="fade-left" data-aos-delay="400">
            <Typography variant="h4" color="white" className="font-semibold text-lg mb-2">
              Social Media Links
            </Typography>
            <div className="flex gap-3 mt-2">
              <Link href="#" className="w-8 h-8 rounded-full bg-white text-[#10253D] flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaLinkedinIn className="text-sm" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white text-[#10253D] flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaInstagram className="text-sm" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white text-[#10253D] flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaFacebookF className="text-sm" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white text-[#10253D] flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaYoutube className="text-sm" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full">
        <div className="custom-container border-t border-white/20 py-6 flex justify-center items-center">
          <Typography variant="p" color="white" className="text-sm text-center opacity-90">
            © 2026 - Elektro-mag. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
