"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "AED Guide", href: "#" },
    { name: "Prevention", href: "#" },
    { name: "News", href: "#" },
  ],
  legacy: [
    { name: "Terms and conditions", href: "#" },
    { name: "Cookie policy", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Certifications", href: "#" },
    { name: "ESG", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden flex flex-col">

      {/* Main Footer Area */}
      <div className="w-full relative bg-[#DCDCDC] py-16 xl:py-24">

        {/* Top-Left Diagonal Polygon */}
        <div
          className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#A21E21] z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        ></div>

        {/* Bottom-Right Diagonal Polygon */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#A21E21] z-0"
          style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
        ></div>

        <div className="custom-container relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-0 items-start">

          {/* Column 1: Logo & Description & Socials */}
          <div className="xl:col-span-4 flex flex-col gap-6 items-start pr-0 xl:pr-12" data-aos="fade-up" data-aos-delay="0">
            <img
              src="/medical/progetti/logo.png"
              alt="Progetti Logo"
              className="h-25 min-[3800px]:h-40 w-auto object-contain object-left mb-2"
            />
            <Typography variant="footer-body" color="dark" className="leading-relaxed">
              Progetti Medical is an Italian medical technology company with over 30 years of experience, developing innovative and reliable solutions for healthcare professionals worldwide.
            </Typography>

            <div className="flex gap-4 min-[3800px]:gap-8 mt-2">
              <Link href="#" className="text-[#1E1E1E] hover:text-[#A21E21] transition-colors">
                <FaLinkedinIn className="text-xl min-[3800px]:text-4xl" />
              </Link>
              <Link href="#" className="text-[#1E1E1E] hover:text-[#A21E21] transition-colors">
                <FaYoutube className="text-xl min-[3800px]:text-4xl" />
              </Link>
              <Link href="#" className="text-[#1E1E1E] hover:text-[#A21E21] transition-colors">
                <FaFacebookF className="text-xl min-[3800px]:text-4xl" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 flex flex-col gap-6 xl:px-8 xl:border-r border-black/10" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="dark">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-[#A21E21] transition-colors w-fit">
                  <Typography variant="footer-body" color="dark">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Legacy */}
          <div className="xl:col-span-2 flex flex-col gap-6 xl:px-8 xl:border-r border-black/10" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark">
              Legacy
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.legacy.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-[#A21E21] transition-colors w-fit">
                  <Typography variant="footer-body" color="dark">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div className="xl:col-span-4 flex flex-col gap-6 xl:pl-8" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="dark" className="leading-relaxed">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>
            <div className="flex items-center w-full max-w-md bg-white rounded-full overflow-hidden p-1.5 shadow-sm mt-4 min-[3800px]:p-3">
              <input
                type="email"
                placeholder="Enter Your E-mail id"
                className="flex-1 px-4 py-2 min-[3800px]:px-8 min-[3800px]:py-4 min-[3800px]:text-3xl text-sm outline-none bg-transparent text-[#1E1E1E] placeholder:text-gray-400"
              />
              <button className="bg-[#ED1C24] text-white px-6 py-2 min-[3800px]:px-12 min-[3800px]:py-4 rounded-full min-[3800px]:text-3xl hover:bg-[#ED1C24]/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full py-4 bg-white relative z-10">
        <div className="custom-container flex justify-center text-center">
          <Typography variant="footer-body" color="dark" className="text-sm min-[3800px]:text-2xl opacity-70">
            © 2026 Progetti S.r.l All rights reserved.
          </Typography>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
