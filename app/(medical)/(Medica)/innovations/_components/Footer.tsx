"use client";

import React from "react";
import Link from "next/link";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import Typography from "./Typography";

const linkGroups = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "Products & Services", href: "#products" },
      { label: "About", href: "#about" },
      { label: "Quality Management", href: "#quality" },
    ],
    more: { label: "See More >>", href: "#" },
  },
  {
    heading: "Products",
    links: [
      { label: "Sterilization Containers", href: "#" },
      { label: "Implant Plates", href: "#" },
      { label: "External Fixators", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Legal Notice", href: "#" },
      { label: "Data Protection", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const iconClass = "w-[1.1em] h-[1.1em] shrink-0 text-white mt-[0.2em]";

const Footer = () => {
  return (
    <footer className="relative w-full mt-auto overflow-hidden text-white">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/medical/innovations/bg.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#575656]/90" />
      </div>

      <div className="relative z-10 custom-container pt-12 lg:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.2fr] gap-x-6 gap-y-10 lg:gap-x-8 min-[2500px]:gap-x-14 min-[3800px]:gap-x-20 min-[3800px]:gap-y-16 items-start pb-8 lg:pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 border-b border-white/20">

          {/* Logo & About */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-6 min-[3800px]:gap-10 lg:pr-10 min-[3800px]:pr-20" data-aos="fade-right">
            <Link href="/" className="inline-block w-fit">
              <img
                src="/medical/innovations/footer-logo.png"
                alt="Innovations Medical"
                className="w-[220px] lg:w-[260px] xl:w-[300px] min-[2500px]:w-[420px] min-[3800px]:w-[800px] h-auto object-contain"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="leading-relaxed">
              Innovations Medical GmbH provides specialised solutions for modern medical applications, including sterilization containers, implant plates, and external fixators.
            </Typography>
          </div>

          {/* Link Columns */}
          {linkGroups.map((group, i) => (
            <div key={group.heading} className="col-span-1 flex flex-col gap-5 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
              <Typography variant="footer-heading" color="white">
                {group.heading}
              </Typography>
              <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="w-fit inline-block hover:opacity-70 transition-opacity">
                      <Typography variant="footer-body" color="white">{link.label}</Typography>
                    </Link>
                  </li>
                ))}
                {group.more && (
                  <li>
                    <Link href={group.more.href} className="w-fit inline-block underline underline-offset-4 hover:opacity-70 transition-opacity">
                      <Typography variant="footer-body" color="white">{group.more.label}</Typography>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-1 flex flex-col gap-5 min-[3800px]:gap-10" data-aos="fade-left" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
              <li>
                <Link href="tel:+497461966420" className="hover:opacity-70 transition-opacity">
                  <Typography variant="footer-body" color="white" className="flex items-start gap-3 min-[3800px]:gap-5">
                    <LuPhone className={iconClass} />
                    <span>+49 7461 966420</span>
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="mailto:info@innovations-medical.de" className="hover:opacity-70 transition-opacity">
                  <Typography variant="footer-body" color="white" className="flex items-start gap-3 min-[3800px]:gap-5">
                    <LuMail className={iconClass} />
                    <span className="break-all">info@innovations-medical.de</span>
                  </Typography>
                </Link>
              </li>
              <li>
                <Typography variant="footer-body" color="white" className="flex items-start gap-3 min-[3800px]:gap-5 leading-relaxed">
                  <LuMapPin className={iconClass} />
                  <span>
                    Innovations Medical GmbH<br />
                    Badstraße 11<br />
                    78532 Tuttlingen
                  </span>
                </Typography>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 min-[2500px]:py-10 min-[3800px]:py-14 flex justify-center">
          <Typography variant="footer-body" color="white" className="text-center">
            © 2026 Innovations Medical GmbH. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
