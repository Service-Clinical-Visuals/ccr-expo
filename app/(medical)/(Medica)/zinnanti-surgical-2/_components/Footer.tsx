"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";
import { BASE_PATH } from "./Header";

interface FooterLink {
  name: string;
  /** Route to navigate to. Links without an href are placeholders and do nothing. */
  href?: string;
}

const quickLinks: FooterLink[] = [
  { name: "Home", href: BASE_PATH },
  { name: "About Us", href: `${BASE_PATH}/about` },
  { name: "Products" },
  { name: "Dermatology" },
  { name: "Gynocology" },
  { name: "High-Res Anoscopy" },
];

const legalLinks: FooterLink[] = [
  { name: "Terms and conditions" },
  { name: "Cookie policy" },
  { name: "Privacy policy" },
  { name: "Dermatology" },
];

const linkClass = "footer-body text-white/90 hover:text-white transition-colors";

const FooterLinkItem = ({ link }: { link: FooterLink }) =>
  link.href ? (
    <Link href={link.href} className={linkClass}>
      {link.name}
    </Link>
  ) : (
    <a href="#" onClick={(e) => e.preventDefault()} className={linkClass}>
      {link.name}
    </a>
  );

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer id="contact" className="w-full text-white overflow-hidden">
      <div className="bg-[var(--color-navy)] pt-12 sm:pt-14 xl:pt-16 pb-12 sm:pb-16 xl:pb-20 min-[2500px]:py-28 min-[3800px]:py-40">
        <div className="custom-container grid grid-cols-2 xl:grid-cols-12 gap-x-6 gap-y-10 xl:gap-8 items-start">
          {/* Brand */}
          <div className="col-span-2 xl:col-span-5 flex flex-col gap-5 items-start xl:pr-12" data-aos="fade-up">
            <div className="bg-white p-1.5 min-[2500px]:p-3">
              <img
                src="/medical/zinnanti-surgical-2/logo.webp"
                alt="Zinnanti Surgical Design Group Logo"
                className="h-9 sm:h-10 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
              />
            </div>
            <Typography variant="footer-body" color="white" className="text-white/90 leading-relaxed">
              Zinnanti Surgical develops innovative smoke and fluid evacuation
              solutions designed to improve surgical visibility, reduce smoke
              exposure, and support safer operating environments.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Legendry
            </Typography>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 xl:col-span-3 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white" className="text-white/90 leading-relaxed">
              Stay informed with the latest product launches, industry news,
              technical updates, and innovations
            </Typography>
            <form
              onSubmit={handleSubscribe}
              className="flex items-stretch w-full max-w-md bg-white p-1 min-[2500px]:p-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your E-Mail Id"
                className="footer-body flex-1 min-w-0 px-3 min-[2500px]:px-5 text-gray-800 placeholder:text-gray-400 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white uppercase tracking-wider px-4 sm:px-5 py-2 min-[2500px]:px-8 min-[2500px]:py-4 transition-colors"
              >
                <span className="button">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[var(--color-quote-bg)] py-4 min-[2500px]:py-7">
        <div className="custom-container text-center">
          <Typography variant="footer-body" color="none" className="text-[#1E1E1E]">
            © 2026 Zinnanti Surgical Design Group, Inc.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
