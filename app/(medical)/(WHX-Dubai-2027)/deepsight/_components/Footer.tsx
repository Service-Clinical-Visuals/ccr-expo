"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Applications", href: "#applications" },
  { name: "News", href: "#news" },
];

const productLinks = ["NeedleVue Lite Cart", "NeedleVue Embedded", "NeedleVue Lite Cart"];

const legacyLinks = ["Terms and conditions", "Cookie policy", "Privacy policy"];

const socials = [
  { label: "LinkedIn", Icon: FaLinkedin },
  { label: "X", Icon: FaXTwitter },
  { label: "Instagram", Icon: FaInstagram },
  { label: "YouTube", Icon: FaYoutube },
];

const columnClass = "flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10";
const listClass = "flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8";
const linkClass = "text-white hover:text-secondary transition-colors";
const socialIconClass =
  "w-5 h-5 sm:w-[22px] sm:h-[22px] 2xl:w-6 2xl:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12";

export default function Footer() {
  return (
    <footer id="contact" className="w-full overflow-hidden">
      <div className="w-full bg-primary">
        <div className="custom-container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[500fr_180fr_190fr_200fr_262fr] gap-x-6 gap-y-10 xl:gap-x-4 2xl:gap-x-6 min-[2500px]:gap-x-10 min-[3800px]:gap-x-14 pt-12 pb-12 sm:pt-14 sm:pb-14 2xl:pt-12 2xl:pb-16 min-[2500px]:pt-20 min-[2500px]:pb-24 min-[3800px]:pt-28 min-[3800px]:pb-32">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1 flex flex-col items-start gap-6 2xl:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14 xl:pr-[14%]" data-aos="fade-up">
            <Link href="#home" aria-label="Deep Sight Home">
              <img
                src="/medical/deepsight/logo.webp"
                alt="Deep Sight Technology Logo"
                className="w-[120px] sm:w-[130px] 2xl:w-[138px] min-[2500px]:w-[200px] min-[3800px]:w-[276px] h-auto object-contain brightness-0 invert"
              />
            </Link>
            <Typography variant="footer-body" color="white">
              DeepSight Technology is advancing medical imaging through innovative ultrasound technology and physical
              AI, helping clinicians visualize instruments in real time and enhance precision in image-guided
              procedures.
            </Typography>
            <div className="flex items-center gap-5 2xl:gap-6 min-[2500px]:gap-9 min-[3800px]:gap-12">
              {socials.map(({ label, Icon }) => (
                <Link key={label} href="#" aria-label={label} className={linkClass}>
                  <Icon className={socialIconClass} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={columnClass} data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className={listClass}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    <Typography variant="footer-body" color="none">
                      {link.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className={columnClass} data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Products
            </Typography>
            <ul className={listClass}>
              {productLinks.map((name, index) => (
                <li key={`${name}-${index}`}>
                  <Link href="#products" className={linkClass}>
                    <Typography variant="footer-body" color="none">
                      {name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legacy */}
          <div className={columnClass} data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Legacy
            </Typography>
            <ul className={listClass}>
              {legacyLinks.map((name) => (
                <li key={name}>
                  <Link href="#" className={linkClass}>
                    <Typography variant="footer-body" color="none">
                      {name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={`col-span-2 md:col-span-2 xl:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>
            <form
              className="flex items-center gap-2 w-full max-w-[420px] xl:max-w-none border border-white/70 rounded-[10px] min-[2500px]:rounded-[15px] min-[3800px]:rounded-[20px] p-1 min-[2500px]:p-1.5 min-[3800px]:p-2 mt-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                aria-label="Email address"
                className="footer-body min-w-0 flex-1 bg-transparent text-white placeholder:text-white/50 outline-none px-3 min-[2500px]:px-5 min-[3800px]:px-7"
              />
              <button
                type="submit"
                className="button shrink-0 rounded-full bg-secondary hover:bg-secondary-hover text-white px-4 py-1.5 2xl:px-6 2xl:py-1.5 min-[2500px]:px-9 min-[2500px]:py-2.5 min-[3800px]:px-12 min-[3800px]:py-3.5 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full bg-white py-3 2xl:py-3 min-[2500px]:py-5 min-[3800px]:py-7">
        <div className="custom-container text-center">
          <Typography variant="footer-body" color="primary">
            © 2026 DeepSight Technology. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
