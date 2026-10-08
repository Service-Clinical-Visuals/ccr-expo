"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", href: "/lux-sutures" },
  { label: "About", href: "" },
  { label: "Products", href: "" },
  { label: "Certificates", href: "" },
  { label: "Events", href: "" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "", icon: FaInstagram },
  { label: "LinkedIn", href: "", icon: FaLinkedin },
];

const ICON_CLASS = "h-4 w-4 sm:h-[18px] sm:w-[18px] 2k:h-7 2k:w-7 shrink-0 text-white";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="w-full bg-[#1c1a1b] py-12 sm:py-14 desk:py-10 2xl:py-14">
        <div className="custom-container custom-grid">
          {/* Brand */}
          <div className="col-span-12 md:col-span-6 desk:col-span-4 flex flex-col">
            <Link href="/lux-sutures" className="inline-block w-fit">
              <img
                src="/medical/lux-sutures/logo.webp"
                alt="LUX Sutures Logo"
                className="h-10 sm:h-12 2xl:h-14 2k:h-20 w-auto object-contain"
              />
            </Link>
            <p className="section-text mt-4 leading-relaxed text-white/90 desk:max-w-sm 2xl:max-w-md">
              LUXSUTURES is a Luxembourg-based medical device manufacturer specializing in surgical
              sutures, hernia meshes, and reliable healthcare solutions.
            </p>

            <div className="mt-6 desk:mt-auto desk:pt-8 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white transition-colors duration-200 hover:text-[#0071ce]"
                >
                  <Icon className="h-6 w-6 2k:h-10 2k:w-10" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 sm:col-span-6 md:col-span-6 desk:col-span-2 desk:pl-8 xl:pl-10">
            <h3 className="card-title font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 sm:mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="section-text font-body text-white/90 transition-colors duration-200 hover:text-[#0071ce]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-12 sm:col-span-6 md:col-span-6 desk:col-span-3 desk:pl-8 xl:pl-10">
            <h3 className="card-title font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 sm:mt-5 space-y-4">
              <li>
                <a
                  href="tel:+35220301449"
                  className="flex items-center gap-3 text-white/90 transition-colors duration-200 hover:text-[#0071ce]"
                >
                  <FaPhoneAlt className={ICON_CLASS} />
                  <span className="section-text">+352 20 30 14 49</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@luxsutures.com"
                  className="flex items-center gap-3 text-white/90 transition-colors duration-200 hover:text-[#0071ce]"
                >
                  <FaEnvelope className={ICON_CLASS} />
                  <span className="section-text">info@luxsutures.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <FaMapMarkerAlt className={`${ICON_CLASS} mt-0.5`} />
                <span className="section-text leading-relaxed">
                  22, Gruuss-Strooss L-9991
                  <br />
                  Weiswampach, Luxembourg (EU)
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-12 md:col-span-6 desk:col-span-3 desk:pl-8 xl:pl-10">
            <h3 className="card-title font-semibold text-white">Subscribe to Newsletter :</h3>
            <p className="section-text mt-4 sm:mt-5 leading-relaxed text-white/90">
              Be the first to know about new collections and exclusive offers.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 desk:mt-10 flex items-center rounded-full bg-white p-1 2k:p-1.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter Your E-Mail ID"
                aria-label="Email address"
                className="section-text font-body min-w-0 flex-1 bg-transparent px-3 sm:px-4 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="section-text shrink-0 rounded-full bg-[#0071ce] px-4 sm:px-5 py-1.5 sm:py-2 font-medium text-white transition-colors duration-200 hover:bg-[#005ca8]"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="section-text mt-3 text-emerald-400" role="status">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-4 sm:py-5">
        <div className="custom-container flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
          <p className="section-text text-center text-[#0b1b2b] sm:text-left">
            © {new Date().getFullYear()} Lux Sutures Global All rights reserved.
          </p>
          <div className="flex items-center gap-8 sm:gap-12">
            <Link
              href=""
              className="section-text font-body text-[#0b1b2b] transition-colors duration-200 hover:text-[#0071ce]"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href=""
              className="section-text font-body text-[#0b1b2b] transition-colors duration-200 hover:text-[#0071ce]"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
