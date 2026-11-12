"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "Product", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
];

const PRODUCTS = [
  { label: "Monsoon 4", href: "#products" },
  { label: "Monsoon III", href: "#products" },
  { label: "Sound Cube", href: "#products" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

const linkCls = "footer-text font-inter text-white hover:text-[var(--accent)] transition-colors";
const iconCls = "w-[1.35em] h-[1.35em] flex-shrink-0";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="w-full bg-[var(--footer-bg)] text-white">
      <div className="custom-container pt-10 xl:pt-12 pb-10 xl:pb-[4vw]">
        <div className="grid grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1.1fr_1.5fr] 2xl:grid-cols-[1.9fr_0.9fr_0.9fr_1.3fr_1.6fr] gap-x-6 gap-y-10 lg:gap-8 2xl:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 2xl:col-span-1 2xl:pr-[10%]">
            <img
              src="/medical/thora/f-logo.webp"
              alt="Thora Tech GmbH"
              className="h-[46px] xl:h-[54px] 2xl:h-[58px] min-[2560px]:h-[84px] w-auto object-contain mb-6 2xl:mb-14"
            />
            <p className="footer-text font-inter text-white/90 max-w-[420px] min-[1921px]:max-w-[90%]">
              Thora Tech develops innovative medical technologies, combining engineering expertise and clinical
              knowledge to advance respiratory care and improve medical device performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="2xl:pl-[12%]">
            <h4 className="footer-title font-plex font-semibold whitespace-nowrap mb-5 xl:mb-7">Quick Links</h4>
            <ul className="flex flex-col gap-3 xl:gap-4">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer-title font-plex font-semibold whitespace-nowrap mb-5 xl:mb-7">Product</h4>
            <ul className="flex flex-col gap-3 xl:gap-4">
              {PRODUCTS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={`${linkCls} whitespace-nowrap`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="footer-title font-plex font-semibold whitespace-nowrap mb-5 xl:mb-7">Contact Us</h4>
            <ul className="flex flex-col gap-4 footer-text font-inter text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className={`${iconCls} mt-[0.15em]`} />
                <span className="whitespace-nowrap">
                  Gutfleischstraße 3-5
                  <br />
                  DE-35390 Gießen
                  <br />
                  Germany
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className={iconCls} />
                <a href="tel:+496413092666" className="hover:text-[var(--accent)] whitespace-nowrap">
                  +49 641 309 2666
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className={iconCls} />
                <a href="mailto:info@thoratech.de" className="hover:text-[var(--accent)]">
                  info@thoratech.de
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="footer-title font-plex font-semibold whitespace-nowrap mb-5 xl:mb-7">Newsletter</h4>
            <form
              className="flex items-stretch gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <label htmlFor="thora-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="thora-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="footer-text font-inter flex-1 min-w-0 bg-transparent border border-white rounded-[6px] px-[1.2em] py-[0.6em] text-white placeholder:text-white/90 focus:outline-none focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex-shrink-0 aspect-[64/44] px-[1em] border border-white rounded-[6px] flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <SendHorizontal className="w-[1.4em] h-[1.4em] footer-text" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/40">
        <div className="custom-container py-6 xl:py-8 flex flex-col lg:flex-row items-center justify-between gap-4 footer-text font-inter text-white/90">
          <p className="text-center lg:text-left">
            © 2025 Thora Tech GmbH. All rights reserved. Specialized Jet Ventilation.
          </p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-[var(--accent)] transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
