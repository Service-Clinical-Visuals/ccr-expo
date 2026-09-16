"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/surgival" },
    { name: "Products", href: "#products" },
    { name: "Company", href: "#company" },
    { name: "News", href: "#news" },
    { name: "See More >>", href: "#more" },
  ],
  products: [
    { name: "Knee", href: "#knee" },
    { name: "Hip", href: "#hip" },
    { name: "Trauma", href: "#trauma" },
    { name: "Cements and Others", href: "#cements" },
  ]
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:scale-110 transition-transform">
    <Icon className="w-5 h-5 fill-current" strokeWidth={0} />
  </a>
);
const SocialIconOutline = ({ Icon }: { Icon: any }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:scale-110 transition-transform">
    <Icon className="w-5 h-5" strokeWidth={1.5} />
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-white mt-10">
      <div className="w-full pt-16 pb-8 border-b border-white/20">
        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-6 items-start" data-aos="fade-up">
            <img
              src="/medical/surgival/logo.png"
              alt="Surgival"
              className="h-10 lg:h-30 w-auto object-contain object-left brightness-0 invert"
            />
            <Typography variant="footer-body" color="white" className="leading-relaxed lg:max-w-[70%] mt-2">
              For over 30 years, Surgival has developed reliable orthopaedic implants and instruments, working with specialists to restore mobility and improve patients' quality of life.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:opacity-80 transition-opacity w-fit">
                  <Typography variant="footer-body" color="white" weight={link.name.includes('See More') ? 'bold' : 'normal'}>
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Our Products */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Our Products
            </Typography>
            <div className="flex flex-col gap-4">
              {footerLinks.products.map((link) => (
                <Link key={link.name} href={link.href} className="hover:opacity-80 transition-opacity w-fit">
                  <Typography variant="footer-body" color="white">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 shrink-0" />
                <Typography variant="footer-body" color="white">
                  +34 96 131 80 50
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <Typography variant="footer-body" color="white">
                  surgival@surgival.com
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <Typography variant="footer-body" color="white">
                  Leonardo Da Vinci, 12-14 · Technology Park · Paterna · Valencia · Spain
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Social Media */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Social Media Links
            </Typography>
            <div className="flex flex-wrap gap-3">
              <SocialIconOutline Icon={Linkedin} />
              <SocialIconOutline Icon={Instagram} />
              <SocialIconOutline Icon={Facebook} />
              <SocialIconOutline Icon={Youtube} />
              <SocialIconOutline Icon={Twitter} />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6">
        <div className="custom-container flex justify-center items-center text-center">
          <Typography variant="footer-body" color="white">
            Designed by Surgival CO. SAU. 2026. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
