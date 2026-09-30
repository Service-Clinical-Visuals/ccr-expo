"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Corporate", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#best-selling" },
  { label: "Contact Us", href: "#contact" },
];

const productLinks = [
  { label: "Hemodialysis Group Products", href: "#products" },
  { label: "Urology Group Products", href: "#products" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

const iconClass =
  "w-4 h-4 sm:w-[18px] sm:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 shrink-0";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#FAFAFA] text-[#121C22] pt-10 sm:pt-12 lg:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28 overflow-hidden"
    >
      <div className="custom-container">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-[3.1fr_minmax(max-content,1fr)_minmax(max-content,1.55fr)_2.1fr_2.05fr] gap-x-5 sm:gap-x-6 md:gap-x-8 xl:gap-x-10 min-[1536px]:gap-x-11 min-[2500px]:gap-x-16 min-[3800px]:gap-x-24 gap-y-9 md:gap-y-10 min-[2500px]:gap-y-14">
          {/* Brand */}
          <div className="col-span-2 xl:col-span-1 flex flex-col items-start md:pr-[8%] xl:pr-[6%]" data-aos="fade-up">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/dlr-meda/logo.png"
                alt="DLR Medikal"
                className="w-[180px] sm:w-[205px] min-[2500px]:w-[300px] min-[3800px]:w-[600px] h-auto object-contain select-none"
              />
            </Link>
            <Typography variant="footer-body" color="none" className="mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12 text-[#1F2937]">
              DLR Medikal is a Turkey-based medical device manufacturer
              specializing in hemodialysis and urology solutions, with ISO
              13485-certified production, OEM capabilities, and a growing
              international presence across more than 20 countries.
            </Typography>

            {/* Social */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 mt-5 min-[2500px]:mt-8 min-[3800px]:mt-10">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-[72px] min-[3800px]:h-[72px] rounded-full border border-[#D4D4D4] text-[#1F2937] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-colors duration-300"
                >
                  <Icon className={iconClass} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="dark" className="!font-medium">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="block text-[#1F2937] hover:text-[var(--color-primary)] transition-colors">
                    <Typography variant="footer-body" color="none" className="xl:whitespace-nowrap">
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1 flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark" className="!font-medium">
              Products
            </Typography>
            <ul className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="block text-[#1F2937] hover:text-[var(--color-primary)] transition-colors">
                    <Typography variant="footer-body" color="none" className="xl:whitespace-nowrap">
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 xl:col-span-1 flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark" className="!font-medium">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7 text-[#1F2937]">
              <div className="flex items-start gap-3 min-[2500px]:gap-4">
                <MapPin className={`${iconClass} mt-1 shrink-0`} strokeWidth={1.75} />
                <Typography variant="footer-body" color="none" className="leading-relaxed">
                  DLR Medical Industry and Foreign Trade Ltd. Co. Istanbul
                  Leather Industrial Zone, Dilek Street No:2/A, Postal Code 34956
                  Tuzla / Istanbul, Türkiye
                </Typography>
              </div>
              <a href="tel:+902164727274" className="flex items-center gap-3 min-[2500px]:gap-4 hover:text-[var(--color-primary)] transition-colors">
                <Phone className={`${iconClass} shrink-0`} strokeWidth={1.75} />
                <Typography variant="footer-body" color="none" className="whitespace-nowrap">
                  +90 216 472 72 74
                </Typography>
              </a>
              <a href="mailto:info@dlrmed.com" className="flex items-center gap-3 min-[2500px]:gap-4 hover:text-[var(--color-primary)] transition-colors">
                <Mail className={`${iconClass} shrink-0`} strokeWidth={1.75} />
                <Typography variant="footer-body" color="none" className="break-all">
                  info@dlrmed.com
                </Typography>
              </a>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 xl:col-span-1 flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark" className="!font-medium">
              Stay Updated
            </Typography>
            <form onSubmit={handleSubscribe} className="flex items-stretch gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="footer-body flex-1 min-w-0 px-3.5 py-2 min-[2500px]:px-6 min-[2500px]:py-4 min-[3800px]:px-8 min-[3800px]:py-5 rounded-[6px] min-[2500px]:rounded-[10px] border border-[#1F2937] bg-transparent text-[#1F2937] placeholder:text-[#1F2937] outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center px-4 min-[2500px]:px-6 min-[3800px]:px-8 rounded-[6px] min-[2500px]:rounded-[10px] border border-[#1F2937] text-[#1F2937] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-colors duration-300 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={1.75} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-px min-[2500px]:h-[2px] bg-[#1F2937]/60 mt-10 lg:mt-14 min-[2500px]:mt-20 min-[3800px]:mt-28" />
      <div className="custom-container py-5 sm:py-7 min-[2500px]:py-10 min-[3800px]:py-14">
        <Typography variant="footer-body" color="none" className="text-center text-[#1F2937]">
          © 2026 DLR Medical Industry and Foreign Trade Ltd. Co. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
