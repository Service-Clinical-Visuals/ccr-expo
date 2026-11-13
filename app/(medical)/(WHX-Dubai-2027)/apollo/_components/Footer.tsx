"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#services" },
  { label: "Product", href: "#products" },
  { label: "Testimonials", href: "#news" },
  { label: "News", href: "#news" },
];

const PRODUCTS = [
  { label: "Dynamic Mattress", href: "#products" },
  { label: "Hybrid Mattress", href: "#products" },
  { label: "Static Mattress", href: "#products" },
  { label: "Static Cushions", href: "#products" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

const linkCls = "footer-text font-inter text-white hover:text-white/70 transition-colors";
const iconCls = "w-[1.25em] h-[1.25em] flex-shrink-0";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="w-full bg-[var(--footer-bg)] text-white">
      <div className="custom-container pt-10 xl:pt-12 pb-10 xl:pb-[2.6vw]">
        <div className="grid grid-cols-2 lg:grid-cols-[0.7fr_0.9fr_1.4fr] 2xl:grid-cols-[2.6fr_1fr_1.15fr_1.9fr_1.8fr] gap-x-6 gap-y-10 lg:gap-8 2xl:gap-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-3 2xl:col-span-1 2xl:pr-[14%]">
            <img
              src="/medical/apollo/f-logo.webp"
              alt="Apollo Healthcare Technologies"
              className="h-[52px] xl:h-[56px] 2xl:h-[60px] min-[2560px]:h-[90px] w-auto object-contain mb-6 2xl:mb-10"
            />
            <p className="footer-text font-inter text-white/95 max-w-[460px] min-[1921px]:max-w-[90%]">
              Apollo Healthcare Technologies is a UK-based medical equipment manufacturer specialising in pressure
              care, patient support and comfort solutions, focused on improving patient safety and quality of care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title font-head font-bold whitespace-nowrap mb-5 xl:mb-7">Quick Links</h4>
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
            <h4 className="footer-title font-head font-bold whitespace-nowrap mb-5 xl:mb-7">Product</h4>
            <ul className="flex flex-col gap-3 xl:gap-5">
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
            <h4 className="footer-title font-head font-bold whitespace-nowrap mb-5 xl:mb-7">Contact Us</h4>
            <ul className="flex flex-col gap-4 footer-text font-inter text-white">
              <li className="flex items-start gap-3">
                <MapPin className={`${iconCls} mt-[0.1em]`} />
                <span>
                  Apollo Healthcare Technologies
                  <br />
                  Unit A1 Gildersome Spur Leeds
                  <br />
                  West Yorkshire LS27 7JZ
                  <br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className={iconCls} />
                <a href="tel:+441924614567" className="hover:text-white/70 whitespace-nowrap">
                  +44 (0)1924 614567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className={iconCls} />
                <a href="mailto:sales@apollo-ht.co.uk" className="hover:text-white/70 break-all">
                  sales@apollo-ht.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-3 2xl:col-span-1">
            <h4 className="footer-title font-head font-bold whitespace-nowrap mb-5 xl:mb-7">Stay Updated</h4>
            <form
              className="flex items-stretch gap-3 max-w-[520px] 2xl:max-w-none"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <label htmlFor="apollo-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="apollo-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="footer-text font-inter flex-1 min-w-0 bg-transparent border border-white rounded-[6px] px-[1.1em] py-[0.6em] text-white placeholder:text-white/90 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex-shrink-0 aspect-[64/44] px-[1em] border border-white rounded-[6px] flex items-center justify-center hover:bg-white hover:text-[var(--footer-bg)] transition-colors cursor-pointer"
              >
                <Send className="w-[1.3em] h-[1.3em] footer-text rotate-45 -translate-x-[0.1em]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/40">
        <div className="custom-container py-6 xl:py-8 flex flex-col lg:flex-row items-center justify-between gap-4 footer-text font-inter text-white">
          <p className="text-center lg:text-left">© 2026 Apollo Healthcare Technologies Ltd. All Rights reserved.</p>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-white/70 transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
