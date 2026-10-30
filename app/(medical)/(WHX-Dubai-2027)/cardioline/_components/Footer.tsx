"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaFacebookF } from "react-icons/fa6";
import Typography from "./Typography";
import Button from "./Button";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Telemedicine", href: "#solutions" },
  { name: "News", href: "#news" },
];

const legacyLinks = ["Terms and conditions", "Cookie policy", "Privacy policy"];

const socials = [
  { label: "LinkedIn", Icon: FaLinkedin },
  { label: "Facebook", Icon: FaFacebookF },
];

const columnClass = "flex flex-col gap-4 min-[2500px]:gap-7 min-[3800px]:gap-10";
const listClass = "flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10";
const linkClass = "text-white hover:text-secondary transition-colors";
const socialIconClass =
  "w-5 h-5 sm:w-[22px] sm:h-[22px] 2xl:w-6 2xl:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12";

export default function Footer() {
  return (
    <footer id="contact" className="w-full overflow-hidden">
      <div className="w-full bg-primary">
        <div className="custom-container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[475fr_166fr_189fr_267fr] gap-x-6 gap-y-10 xl:gap-x-0 pt-12 pb-12 sm:pt-14 sm:pb-14 xl:pt-11 xl:pb-16 min-[2500px]:pt-20 min-[2500px]:pb-24 min-[3800px]:pt-28 min-[3800px]:pb-32">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1 flex flex-col items-start gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14 xl:pr-[14%]" data-aos="fade-up">
            <Link href="#home" aria-label="Cardioline Home">
              <img
                src="/medical/cardioline/logo.webp"
                alt="Cardioline Logo"
                className="w-[160px] sm:w-[175px] xl:min-w-[280px] min-[2500px]:w-[280px] min-[3800px]:w-[350px] h-auto object-contain"
              />
            </Link>
            <Typography variant="footer-body" color="white">
              Cardioline is a medical technology company specializing in advanced cardiac diagnostic solutions,
              including ECG systems, Holter monitoring, and connected healthcare software. With decades of experience,
              the company combines innovation and reliability to support healthcare professionals in delivering better
              cardiac care.
            </Typography>
            <div className="flex items-center gap-5 min-[2500px]:gap-9 min-[3800px]:gap-12">
              {socials.map(({ label, Icon }) => (
                <Link key={label} href="#" aria-label={label} className={linkClass}>
                  <Icon className={socialIconClass} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={columnClass} data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="secondary" weight="medium">
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

          {/* Legacy */}
          <div className={columnClass} data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="secondary" weight="medium">
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
          <div className={`col-span-2 md:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="secondary" weight="medium">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>
            <form
              className="flex items-center gap-2 w-full max-w-[420px] xl:max-w-none bg-white rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] p-1 min-[2500px]:p-1.5 min-[3800px]:p-2 mt-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                aria-label="Email address"
                className="footer-body min-w-0 flex-1 bg-transparent text-[#2A2A2A] placeholder:text-[#9CA3AF] outline-none px-3 min-[2500px]:px-5 min-[3800px]:px-7"
              />
              <div className="shrink-0">
                <Button text="Subscribe" variant="primary" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full bg-white py-3 min-[2500px]:py-5 min-[3800px]:py-7">
        <div className="custom-container text-center">
          <Typography variant="footer-body" color="dark">
            © 2026 Cardioline All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
