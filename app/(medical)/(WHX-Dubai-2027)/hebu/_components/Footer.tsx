"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#products" },
  { label: "Shop", href: "#shop" },
  { label: "Pursue", href: "#expertise" },
  { label: "Career", href: "#contact" },
];

const PRODUCTS = [
  { label: "Surgical Instruments", href: "#products" },
  { label: "Container", href: "#products" },
  { label: "Endoscopy", href: "#products" },
  { label: "HF Surgery", href: "#products" },
];

const linkCls = "footer-text font-body text-white hover:text-[var(--primary)] transition-colors";
const iconCls = "w-[1.25em] h-[1.25em] flex-shrink-0";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="w-full bg-[var(--dark)] text-white">
      <div className="custom-container pt-10 xl:pt-[2.6vw] pb-10 xl:pb-[2.6vw]">
        <div className="grid grid-cols-2 lg:grid-cols-[0.7fr_0.9fr_1.4fr] 2xl:grid-cols-[2.7fr_1.1fr_1.3fr_1.5fr_1.8fr] gap-x-6 gap-y-10 lg:gap-8 2xl:gap-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-3 2xl:col-span-1 2xl:pr-[14%]">
            <Link href="#home" aria-label="HEBUmedical Home" className="inline-flex mb-6 2xl:mb-8">
              <Logo />
            </Link>
            <p className="footer-text font-body text-white/95 max-w-[460px] min-[1921px]:max-w-[90%]">
              HEBUmedical is a Germany-based medical technology manufacturer specializing in precision-engineered
              surgical instruments and innovative medical equipment, backed by decades of experience and a strong
              commitment to quality and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title font-head font-medium whitespace-nowrap mb-5 xl:mb-7">Quick Links</h4>
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
            <h4 className="footer-title font-head font-medium whitespace-nowrap mb-5 xl:mb-7">Product</h4>
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
          <div className="col-span-2 lg:col-span-1">
            <h4 className="footer-title font-head font-medium whitespace-nowrap mb-5 xl:mb-7">Contact Us</h4>
            <ul className="flex flex-col gap-4 footer-text font-body text-white">
              <li className="flex items-start gap-3">
                <MapPin className={`${iconCls} mt-[0.15em]`} />
                <span>
                  HEBUmedical GmbH
                  <br />
                  Badstraße 8,
                  <br />
                  D-78532 Tuttlingen,
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className={iconCls} />
                <a href="tel:+497461947100" className="hover:text-[var(--primary)] whitespace-nowrap">
                  +49 (0) 7461 94 71 - 0
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className={iconCls} />
                <a href="mailto:info@hebumedical.de" className="hover:text-[var(--primary)] break-all">
                  info@hebumedical.de
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-3 2xl:col-span-1">
            <h4 className="footer-title font-head font-medium whitespace-nowrap mb-5 xl:mb-7">Stay Updated</h4>
            <form
              className="flex items-stretch gap-3 max-w-[520px] 2xl:max-w-none"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <label htmlFor="hebu-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="hebu-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="footer-text font-body flex-1 min-w-0 bg-transparent border border-white rounded-[6px] px-[1.1em] py-[0.55em] text-white placeholder:text-white/90 focus:outline-none focus:border-[var(--primary)]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex-shrink-0 aspect-[64/44] px-[1em] border border-white rounded-[6px] flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--dark)] transition-colors cursor-pointer"
              >
                <Send className="w-[1.3em] h-[1.3em] footer-text rotate-45 -translate-x-[0.1em]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/40">
        <div className="custom-container py-6 xl:py-8 footer-text font-body text-white">
          <p className="text-center lg:text-left">© 2026 HEBUmedical. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
