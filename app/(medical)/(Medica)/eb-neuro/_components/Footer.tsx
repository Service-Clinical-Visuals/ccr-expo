"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlinePrinter } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products & Soluctins", href: "#" },
    { name: "EB Neuro Acadermy", href: "#" },
    { name: "Events", href: "#" },
    { name: "Publication", href: "#" },
    { name: "Work with us", href: "#" },
  ],
  products: [
    { name: "Neurology", href: "#" },
    { name: "Research", href: "#" },
    { name: "Gastroenterology & Urology", href: "#" },
    { name: "Cardiology", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#BBE4FD]">
      <div className="w-full pt-16 pb-8 border-b border-black/10">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6 items-start">

          {/* Column 1: Logo & Description & Socials */}
          <div className="xl:col-span-3 flex flex-col gap-6 items-start" data-aos="fade-up">
            <img
              src="/medical/eb-neuro/logo.png"
              alt="EB Neuro Logo"
              className="h-25 min-[3800px]:h-35 w-auto object-contain object-left mb-2"
            />
            <Typography variant="footer-body" color="dark" className="leading-relaxed lg:pr-4">
              EB Neuro S.p.A. develops advanced medical technology solutions in Neurophysiology, Cardiology, and Uro-Gastro diagnostics.
            </Typography>

            <div className="flex gap-4 min-[3800px]:gap-6 mt-2">
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaXTwitter className="text-xl min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaFacebookF className="text-xl min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaLinkedinIn className="text-xl min-[3800px]:text-3xl" />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaYoutube className="text-xl min-[3800px]:text-3xl" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="dark">
              Quick Link
            </Typography>
            <div className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors w-fit">
                  <Typography variant="footer-body" color="dark">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="xl:col-span-2 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark">
              Products
            </Typography>
            <div className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors w-fit">
                  <Typography variant="footer-body" color="dark">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="xl:col-span-2 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark">
              Contact
            </Typography>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-secondary">
                <HiOutlineLocationMarker className="w-5 h-5 mt-1 shrink-0" />
                <Typography variant="footer-body" color="dark">Via P. Fanfani, 97/A -<br />50127 Firenze - Italy</Typography>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <HiOutlinePhone className="w-5 h-5 shrink-0" />
                <Typography variant="footer-body" color="dark">+39 055 4565111</Typography>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <HiOutlinePrinter className="w-5 h-5 shrink-0" />
                <Typography variant="footer-body" color="dark">+39 055 4565123</Typography>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <HiOutlineMail className="w-5 h-5 shrink-0" />
                <Typography variant="footer-body" color="dark">info@ebneuro.com</Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Subscribe */}
          <div className="xl:col-span-3 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark">
              Subscribe for more Information
            </Typography>
            <Typography variant="footer-body" color="dark" className="text-sm">
              Get the latest EB Neuro news, updates, innovations, and upcoming events.
            </Typography>
            <div className="flex items-center w-full max-w-sm bg-white rounded-md overflow-hidden p-1 shadow-sm mt-2">
              <input type="email" placeholder="Email Address..." className="flex-1 px-3 py-1.5 text-sm outline-none bg-transparent" />
              <button className="bg-secondary text-white p-2 rounded-sm hover:bg-opacity-90 transition-colors">
                <FiSearch className="text-lg" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-5 bg-transparent">
        <div className="custom-container flex justify-center text-center">
          <Typography variant="footer-body" color="dark" className="text-sm">
            ©2012-2016 EB Neuro S.p.A. società a socio unico - Via Pietro Fanfani 97/A - 50127 Florence - (ITALY)
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
