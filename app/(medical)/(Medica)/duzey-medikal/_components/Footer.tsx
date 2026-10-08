"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Clock,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home Page", href: "#home" },
    { name: "Corporate", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "News", href: "#news" },
    { name: "Customer Complaints", href: "#complaints" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#191919] text-white pt-10 sm:pt-12 xl:pt-14 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[2500px]:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-8 items-start">
          {/* Brand & Socials */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/duzey-medikal/logo.webp"
                alt="Duzey Medikal Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-22 min-[2500px]:h-36 min-[3800px]:h-52 w-auto object-contain"
              />
            </Link>

            <div className="flex flex-col gap-3">
              <Typography variant="h4" color="white" className="!font-bold">
                Follow Us:
              </Typography>
              <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Youtube"
                  className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="!font-bold text-lg">
              Quick Link
            </Typography>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Typography variant="p" color="white" className="text-gray-300 hover:text-[var(--color-primary)] leading-relaxed">
                      {item.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="!font-bold text-lg">
              Working Hours
            </Typography>
            <ul className="space-y-3.5 text-gray-300">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-white shrink-0" />
                <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                  Weekdays : 09:00 - 18:00
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-white shrink-0" />
                <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                  Saturday : Closed
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-white shrink-0" />
                <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                  Sunday : Closed
                </Typography>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="!font-bold text-lg">
              Contact
            </Typography>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-white shrink-0 mt-1 min-[2500px]:mt-2 min-[3800px]:mt-3" />
                <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                  Aydıntepe Mahallesi Yeşildere Caddesi No: 2 D: 3 Tuzla / İstanbul / TURKEY
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-white shrink-0" />
                <a
                  href="tel:+902163955505"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                    +90 216 395 55 05
                  </Typography>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-white shrink-0" />
                <a
                  href="mailto:info@duezeymedical.com"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                    info@duezeymedical.com
                  </Typography>
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="!font-bold text-lg leading-snug">
              Subscribe For More Information
            </Typography>
            <Typography variant="p" color="white" className="text-gray-300 text-sm leading-relaxed">
              Get the latest DUZEY news, updates, and medical insights.
            </Typography>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] p-1.5 min-[2500px]:p-3 min-[3800px]:p-4 shadow-md mt-1"
            >
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-3 sm:px-4 min-[2500px]:px-8 min-[3800px]:px-12 py-2 sm:py-2.5 min-[2500px]:py-5 min-[3800px]:py-8 text-sm sm:text-base min-[2500px]:text-2xl min-[3800px]:text-4xl placeholder:text-sm sm:placeholder:text-base min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-4xl text-gray-800 focus:outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-3 sm:px-4 min-[2500px]:px-8 min-[3800px]:px-12 py-2 min-[2500px]:py-5 min-[3800px]:py-8 rounded-[6px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] flex items-center justify-center text-white shrink-0 transition-colors gap-2 min-[2500px]:gap-4 min-[3800px]:gap-6"
              >
                <span className="text-xs sm:text-sm min-[2500px]:text-2xl min-[3800px]:text-4xl font-bold whitespace-nowrap">
                  Subscribe
                </span>
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0" />
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mt-4" />

        {/* Attribution */}
        <div className="text-center">
          <Typography variant="p" color="white" className="text-sm text-gray-400">
            Duzey Medical{" "}
            <span className="font-semibold text-white underline underline-offset-4">
              İntegral Bilişim
            </span>{" "}
            tarafından yapılmıştır
          </Typography>
        </div>
      </div>
    </footer>
  );
}
