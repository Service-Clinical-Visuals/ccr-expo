"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const siteMap = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Service", href: "#services" },
  { name: "Career", href: "#career" },
];

const productLinks = [
  "Surgical Lights",
  "Procedure Lights",
  "Hospital beds",
  "Mattresses for hospital beds",
];

const socials = [
  { name: "LinkedIn", href: "", Icon: FaLinkedinIn },
  { name: "Instagram", href: "", Icon: FaInstagram },
  { name: "Facebook", href: "", Icon: FaFacebookF },
  { name: "Twitter", href: "", Icon: FaTwitter },
];

const linkClass = "footer-body text-white hover:text-white transition-colors";
const contactIconClass =
  "shrink-0 mt-[0.2em] w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9";

/** Blue footer: brand blurb, Site Map, Products, Contact Us, social links, then copyright. */
const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-primary bg-[url('/medical/famed/bg2.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="custom-container pt-10 sm:pt-12 2xl:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[30fr_14fr_15fr_17fr_14fr] gap-x-6 gap-y-9 xl:gap-x-10 2xl:gap-x-12 min-[2500px]:gap-x-20 min-[3800px]:gap-x-28 pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1 flex flex-col items-start gap-5 2xl:gap-6 min-[2500px]:gap-9">
            <a href="#home" aria-label="FAMED Żywiec home" className="flex flex-col items-start gap-1.5 min-[2500px]:gap-3">
              {/* Dark logo turned white for the blue background */}
              <img
                src="/medical/famed/logo.webp"
                alt="FAMED Żywiec"
                width={139}
                height={36}
                className="block w-[150px] 2xl:w-[172px] min-[2500px]:w-[260px] min-[3800px]:w-[360px] h-auto brightness-0 invert"
              />
              <span className="meta text-white/90">
                Member of <strong className="font-semibold tracking-wide">REINSBERG GROUP</strong>
              </span>
            </a>
            <p className="footer-body text-white/90 xl:max-w-[95%]">
              We are developing solutions for the needs of health sector with materials manufactured
              in our own facilities. We are adapting to current technological conditions and
              constantly update our product range.
            </p>
          </div>

          {/* Site Map */}
          <nav aria-label="Site map" className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-8">
            <h3 className="footer-heading text-white">Site Map</h3>
            <ul className="flex flex-col gap-3 2xl:gap-3.5 min-[2500px]:gap-6">
              {siteMap.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={linkClass}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="" className="footer-body !font-semibold text-white underline underline-offset-4 hover:text-white/80 transition-colors">
                  See More &gt;&gt;
                </a>
              </li>
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Products" className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-8">
            <h3 className="footer-heading text-white">Products</h3>
            <ul className="flex flex-col gap-3 2xl:gap-3.5 min-[2500px]:gap-6">
              {productLinks.map((name) => (
                <li key={name}>
                  <a href="#products" className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-8">
            <h3 className="footer-heading text-white">Contact Us</h3>
            <ul className="flex flex-col gap-3 2xl:gap-3.5 min-[2500px]:gap-6">
              <li className="flex items-start gap-3 min-[2500px]:gap-5">
                <Phone aria-hidden strokeWidth={1.75} className={contactIconClass} />
                <a href="" className={linkClass}>
                  +48 33 866 62 64
                </a>
              </li>
              <li className="flex items-start gap-3 min-[2500px]:gap-5">
                <Mail aria-hidden strokeWidth={1.75} className={contactIconClass} />
                <a href="" className={`${linkClass} break-all`}>
                  export@famed.com.pl
                </a>
              </li>
              <li className="flex items-start gap-3 min-[2500px]:gap-5">
                <MapPin aria-hidden strokeWidth={1.75} className={contactIconClass} />
                <address className="footer-body not-italic text-white">
                  Famed Żywiec Sp. z o.o.
                  <br />
                  ul. Fabryczna 1
                  <br />
                  34-300 Żywiec
                </address>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-8">
            <h3 className="footer-heading text-white">Social Media Links</h3>
            <div className="flex flex-wrap items-center gap-2.5 2xl:gap-3 min-[2500px]:gap-5">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex items-center justify-center rounded-full bg-white text-primary hover:bg-[#EEF6FD] hover:scale-110 transition-all duration-300 w-8 h-8 2xl:w-9 2xl:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20"
                >
                  <Icon aria-hidden className="w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 py-5 2xl:py-6 min-[2500px]:py-9 min-[3800px]:py-12 text-center">
          <p className="footer-body text-white/90">
            © 2017 Famed Żywiec Sp. z o.o. &nbsp;All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
