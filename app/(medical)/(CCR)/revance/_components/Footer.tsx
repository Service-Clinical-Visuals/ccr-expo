"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { name: "About", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Science", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
  ],
  explore: [
    { name: "Aesthetics", href: "#" },
    { name: "Therapeutics", href: "#" },
    { name: "Innovation", href: "#" },
    { name: "Medical Affairs", href: "#" },
  ],
  policies: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Health Data Privacy Policy", href: "#" },
    { name: "California Compliance Declaration", href: "#" },
    { name: "Sitemap Policy", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Partnerships", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Instagram", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white">
      <div className="w-full pt-16 pb-8 2xl:pt-24 2xl:pb-12 border-b border-white/20">
        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 2xl:gap-12 items-start">
          
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-6 2xl:gap-8 items-start" data-aos="fade-up">
            <img
              src="/revance/logo.png"
              alt="Revance"
              className="h-8 2xl:h-12 w-auto object-contain object-left brightness-0 invert"
            />
            <Typography variant="footer-body" color="white" className="leading-relaxed text-sm xl:text-base text-gray-300 xl:max-w-[85%] mt-2">
              ©2026 REVANCE. RHA® and RHA Redensity® are registered trademarks of TEOXANE SA, manufactured in Switzerland. The Teoxane RHA® Collection is exclusively distributed by REVANCE. All other trademarks are the property of their respective owners. CORP-00147
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6 2xl:gap-8" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4 2xl:gap-5">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Explore */}
          <div className="lg:col-span-2 flex flex-col gap-6 2xl:gap-8" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Explore
            </Typography>
            <div className="flex flex-col gap-4 2xl:gap-5">
              {footerLinks.explore.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Policies */}
          <div className="lg:col-span-2 flex flex-col gap-6 2xl:gap-8" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Policies
            </Typography>
            <div className="flex flex-col gap-4 2xl:gap-5">
              {footerLinks.policies.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Connect */}
          <div className="lg:col-span-2 flex flex-col gap-6 2xl:gap-8" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Connect
            </Typography>
            <div className="flex flex-col gap-4 2xl:gap-5">
              {footerLinks.connect.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary text-gray-300 transition-colors w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6">
        <div className="custom-container flex justify-center items-center">
          <Typography variant="footer-body" className="text-gray-300 text-center">
            © 2026, All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
