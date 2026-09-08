"use client";

import React from "react";
import Container from "./Container";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";

const bottomLinks = [
  { label: "Contact", href: "#contact" },
  { label: "FAQ'S", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Terms & Conditions GDPR", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F2F4F6]" id="contact">
      <div className="pt-14 pb-6">
        <Container>
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[30fr_30fr_20fr_20fr] gap-10 mb-10">

            {/* Col 1: Logo + description */}
            <div data-aos="fade-up" className="flex flex-col gap-4 items-start">
              <img
                src="/moto/3d-aesthetics/logo.png"
                alt="3D Aesthetics Logo"
                className="h-25 w-auto object-contain"
              />
              <p className="content text-[15px]! leading-[22px]!">
                We are a family-run business passionate about developing technology that not only performs
                but that stands out from the crowd.
              </p>
            </div>

            {/* Col 2: Trading Address & Training Centre */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="heading text-[24px]! font-medium! mb-4">
                Trading Address &amp; Training Centre
              </h4>
              <div className="space-y-2 content text-[15px]!">
                <p>3D Aesthetics,</p>
                <p>New Barn Farm,</p>
                <p>Coventry Road,</p>
                <p>Rugby</p>
                <p>CV23 9JP</p>
              </div>
            </div>

            {/* Col 3: Registered Office */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="heading text-[24px]! font-medium! mb-4">
                Registered Office
              </h4>
              <div className="space-y-2 content text-[15px]!">
                <p>3D-lipo Ltd</p>
                <p>C/O AGK Partnership Ltd</p>
                <p>1 Kings Avenue</p>
                <p>Winchmore Hill</p>
                <p>London, N21 3NA</p>
              </div>
            </div>

            {/* Col 4: Contact */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="heading text-[24px]! font-medium! mb-4">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1A1A1A] shrink-0" />
                  <a
                    href="tel:01788550440"
                    className="content text-[15px]! hover:text-primary transition-colors"
                  >
                    01788 550440
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#1A1A1A] shrink-0 mt-1" />
                  <span className="content text-[15px]! leading-[22px]!">
                    3D Aesthetics,<br />
                    New Barn Farm,Coventry Road, Rugby, Warwickshire,<br />
                    CV23 9JP
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook size={16} fill="currentColor" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram size={16} />
              </a>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 content text-[15px]!">
              {bottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
