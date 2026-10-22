"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Support", href: "#support" },
  { name: "About Us", href: "#about" },
];

const productLinks = ["Fetal", "ECG Devices", "Diagnostic Devices", "Monitoring Devices"];

const infoLinks = ["Imprint", "Terms & Conditions", "Terms & Conditions - Service", "Privacy Policy", "Information Obligation"];

const linkClass = "text-white hover:opacity-75 transition-opacity";
const listClass = "flex flex-col gap-2 2xl:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6";
const columnClass = "flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10";
const iconClass = "w-4 h-4 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-white shrink-0";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-primary bg-[url('/medical/medical-econet/bg.png')] bg-cover bg-center"
    >
      {/* Primary overlay over the texture */}
      <div className="absolute inset-0 bg-primary/90" />

      <div className="custom-container relative z-10 pt-10 sm:pt-12 2xl:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28">
        <div className="grid grid-cols-2 lg:grid-cols-[400fr_190fr_215fr_290fr_215fr] gap-x-6 gap-y-10 lg:gap-x-4 2xl:gap-x-6 min-[2500px]:gap-x-10 min-[3800px]:gap-x-14 pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 2xl:gap-6 min-[2500px]:gap-9 min-[3800px]:gap-12 lg:pr-[22%]" data-aos="fade-up">
            <Link
              href="#home"
              className="block w-[200px] 2xl:w-[268px] min-[2500px]:w-[360px] min-[3800px]:w-[500px] aspect-[197/46] overflow-hidden"
              aria-label="Medical Econet Home"
            >
              {/* Show only the rectangular top of the logo mark */}
              <img
                src="/medical/medical-econet/logo.png"
                alt="Medical Econet Logo"
                className="w-full h-full object-cover object-top"
              />
            </Link>
            <Typography variant="footer-body" color="white">
              Delivering quality medical products since 1997, combining innovation and expertise in diagnostic and
              imaging solutions for healthcare professionals worldwide, ensuring reliability, safety, and
              efficiency.
            </Typography>
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
              <li>
                <Link href="#home" className={`${linkClass} underline underline-offset-4`}>
                  <Typography variant="footer-body" color="none" weight="semibold">
                    See More &gt;&gt;
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className={columnClass} data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Products
            </Typography>
            <ul className={listClass}>
              {productLinks.map((name) => (
                <li key={name}>
                  <Link href="#products" className={linkClass}>
                    <Typography variant="footer-body" color="none">
                      {name}
                    </Typography>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#products" className={`${linkClass} underline underline-offset-4`}>
                  <Typography variant="footer-body" color="none">
                    See More &gt;&gt;
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`col-span-2 sm:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <ul className={listClass}>
              <li className="flex items-center gap-3 min-[3800px]:gap-5">
                <Phone className={iconClass} />
                <Link href="tel:+492083778900" className={linkClass}>
                  <Typography variant="footer-body" color="none">
                    +49 (0) 208 - 377 890 0
                  </Typography>
                </Link>
              </li>
              <li className="flex items-center gap-3 min-[3800px]:gap-5">
                <Mail className={iconClass} />
                <Link href="mailto:info@medical-econet.com" className={linkClass}>
                  <Typography variant="footer-body" color="none">
                    info@medical-econet.com
                  </Typography>
                </Link>
              </li>
              <li className="flex items-start gap-3 min-[3800px]:gap-5">
                <MapPin className={`${iconClass} mt-[0.2em]`} />
                <Typography variant="footer-body" color="white">
                  Medical ECONET GmbH
                  <br />
                  Im Erlengrund 16
                  <br />
                  46149 Oberhausen
                  <br />
                  Germany
                </Typography>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className={`col-span-2 sm:col-span-1 ${columnClass}`} data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Information
            </Typography>
            <ul className={listClass}>
              {infoLinks.map((name) => (
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
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/25 py-5 2xl:py-6 min-[2500px]:py-9 min-[3800px]:py-12 text-center">
          <Typography variant="footer-body" color="white">
            © 2025 medical ECONET GmbH
          </Typography>
        </div>
      </div>
    </footer>
  );
}
