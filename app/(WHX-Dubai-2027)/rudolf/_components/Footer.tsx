"use client";

import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaYoutube, FaLinkedin, FaFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import Typography from "./Typography";

const links = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#solutions" },
  { name: "Company", href: "#company" },
  { name: "News & Events", href: "#news" },
  { name: "Contacts", href: "#contact" },
];

const locations = [
  ["Rudolf Riester GmbH", "P.O. Box 35, Bruckstraße 31,", "72417 Jungingen"],
  ["Riester USA LLC", "10404 Chapel Hill Road Ste 112,", "Morrisville, NC, 27560, United States"],
];

const socials = [
  { label: "YouTube", Icon: FaYoutube },
  { label: "LinkedIn", Icon: FaLinkedin },
  { label: "Facebook", Icon: FaFacebook },
  { label: "Instagram", Icon: FaSquareInstagram },
  { label: "X", Icon: FaXTwitter },
];

const columnClass = "flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10";
const iconClass = "w-5 h-5 2xl:w-[22px] 2xl:h-[22px] min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 text-primary shrink-0";
const linkClass = "hover:text-primary transition-colors";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-secondary overflow-hidden">
      <div className="custom-container pt-12 2xl:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28">
        <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-[480fr_120fr_170fr_370fr_220fr_190fr] gap-x-6 gap-y-10 xl:gap-x-0 pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20">
          {/* Brand + Halma, with a divider on desktop */}
          <div className="col-span-2 md:col-span-6 xl:col-span-1 flex flex-col justify-between gap-8 xl:pr-[22%] xl:mr-[25%] xl:border-r-2 xl:border-[#E2E6E8]" data-aos="fade-up">
            <div className="flex flex-col gap-6 2xl:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14">
              <Link href="#home" aria-label="Riester Home">
                <img
                  src="/(WHX-Dubai-2027)/rudolf/logo.webp"
                  alt="Riester Logo"
                  className="w-[180px] 2xl:w-[232px] min-[2500px]:w-[330px] min-[3800px]:w-[460px] h-auto object-contain"
                />
              </Link>
              <Typography variant="footer-body" color="muted">
                Innovative diagnostic solutions, built on German engineering to support better healthcare worldwide.
              </Typography>
            </div>

            {/* Halma mark: conic-gradient ring */}
            <div className="flex flex-col items-start xl:mt-28 2xl:mt-36">
              <div className="ml-8 min-[2500px]:ml-12 min-[3800px]:ml-16 mb-1 w-10 h-10 2xl:w-11 2xl:h-11 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22 rounded-full bg-[conic-gradient(from_200deg,#0EA5A4,#22C55E,#D9F99D,#1D9BF0,#0EA5A4)] p-[9px] 2xl:p-[10px] min-[2500px]:p-[14px] min-[3800px]:p-[20px]">
                <div className="w-full h-full rounded-full bg-secondary" />
              </div>
              <Typography variant="footer-body" color="dark">
                A <strong>Halma</strong> company
              </Typography>
            </div>
          </div>

          {/* Links */}
          <div className={`col-span-2 sm:col-span-1 md:col-span-2 xl:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="dark" className="uppercase">
              Links
            </Typography>
            <ul className="flex flex-col gap-2 2xl:gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    <Typography variant="footer-body" color="muted" className="hover:text-primary transition-colors">
                      {link.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className={`col-span-2 sm:col-span-1 md:col-span-4 xl:col-span-2 xl:pl-[13%] ${columnClass}`} data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="dark" className="uppercase">
              Our Locations
            </Typography>
            <ul className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
              {locations.map((lines) => (
                <li key={lines[0]} className="flex items-start gap-3 2xl:gap-4 min-[3800px]:gap-6">
                  <HiLocationMarker className={`${iconClass} mt-[0.15em]`} />
                  <Typography variant="footer-body" color="muted">
                    {lines[0]}
                    <br />
                    {lines[1]}
                    <br />
                    {lines[2]}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`col-span-2 sm:col-span-1 md:col-span-3 xl:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="dark" className="uppercase">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
              <li className="flex items-start gap-3 2xl:gap-4 min-[3800px]:gap-6">
                <FaPhoneAlt className={`${iconClass} mt-[0.2em] -scale-x-100`} />
                <div className="flex flex-col gap-1.5 min-[2500px]:gap-2.5">
                  <Link href="tel:+49747792700" className={linkClass}>
                    <Typography variant="footer-body" color="muted">+49 7477 9270-0</Typography>
                  </Link>
                  <Link href="tel:+19198934449" className={linkClass}>
                    <Typography variant="footer-body" color="muted">+1 919 893 4449</Typography>
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3 2xl:gap-4 min-[3800px]:gap-6">
                <FiMail className={`${iconClass} mt-[0.2em]`} />
                <div className="flex flex-col gap-1.5 min-[2500px]:gap-2.5">
                  <Link href="mailto:sales@riester.de" className={linkClass}>
                    <Typography variant="footer-body" color="muted">sales@riester.de</Typography>
                  </Link>
                  <Link href="mailto:info@riester.de" className={linkClass}>
                    <Typography variant="footer-body" color="muted">info@riester.de</Typography>
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={`col-span-2 sm:col-span-1 md:col-span-3 xl:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark" className="uppercase">
              Follow Us :
            </Typography>
            <div className="flex items-center gap-3 2xl:gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7">
              {socials.map(({ label, Icon }) => (
                <Link key={label} href="#" aria-label={label} className="text-primary hover:opacity-75 transition-opacity">
                  <Icon className="w-6 h-6 2xl:w-7 2xl:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left border-t-2 border-[#E2E6E8] py-5 2xl:py-6 min-[2500px]:py-9 min-[3800px]:py-12">
          <Typography variant="footer-body" color="muted">
            © 2026 Rudolf Riester GmbH
          </Typography>
          <div className="flex items-center gap-1 min-[3800px]:gap-2">
            {["Imprint", "Privacy Policy", "Terms and Conditions"].map((name, i) => (
              <React.Fragment key={name}>
                {i > 0 && (
                  <Typography variant="footer-body" color="muted">
                    |
                  </Typography>
                )}
                <Link href="#" className="underline underline-offset-2 hover:text-primary transition-colors">
                  <Typography variant="footer-body" color="muted">
                    {name}
                  </Typography>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
