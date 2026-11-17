"use client";

import React from "react";
import Link from "next/link";
import { Phone, Printer, ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Logo from "./Logo";

// Only "Home" and "About Us" are active links; the rest render as plain text.
const quickLinks: { name: string; href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/zinnanti-surgical-1/about" },
  { name: "Products" },
  { name: "Videos" },
  { name: "IFUs" },
  { name: "Faq" },
  { name: "Contact Us" },
];

const products = ["Dermatology", "Gynecology", "High-Res Anoscopy"];

const contacts = [
  { icon: Phone, label: "800-459-1389" },
  { icon: Printer, label: "800-808-2728" },
];

const headingCls =
  "footer-heading text-[var(--color-secondary)] whitespace-nowrap";
const linkCls =
  "footer-body text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors leading-relaxed";
const textCls = "footer-body text-[var(--color-secondary)] leading-relaxed cursor-default";
const iconCls =
  "w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[var(--color-primary-dark)] shrink-0";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[var(--color-footer)] text-[var(--color-secondary)] pt-10 sm:pt-12 xl:pt-16 2k:pt-24 4k:pt-32 pb-6 2k:pb-10 4k:pb-14 overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-8 sm:gap-10 2k:gap-16 4k:gap-20 w-full">
        <div className="footer-row-container grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full">
          {/* Col 1: Logo & About */}
          <div className="footer-col-1 col-span-2 md:col-span-3 w-full min-w-0 flex flex-col gap-5 xl:gap-6 2k:gap-10 4k:gap-12 items-start">
            <Link href="#home" aria-label="Zinnanti Surgical Home" className="block max-w-full">
              <Logo className="mix-blend-multiply w-[220px] sm:w-[260px] xl:w-[280px] 2k:w-[440px] 4k:w-[620px] max-w-full h-auto" />
            </Link>
            <Typography variant="footer-body" color="secondary" className="footer-about leading-relaxed">
              Zinnanti Surgical combines medical expertise and engineering innovation to develop
              advanced surgical devices that improve safety, efficiency, and effectiveness through
              patented Smoke-Evac Fusion technology.
            </Typography>
          </div>

          {/* Vertical Divider */}
          <div className="hidden footer-divider-col justify-center self-stretch">
            <div className="w-px 4k:w-0.5 bg-[#b9d3e4] h-full min-h-[200px]" />
          </div>

          {/* Col 2: Links */}
          <div className="footer-col-2 w-full min-w-0 flex flex-col gap-4 2k:gap-7 4k:gap-9">
            <Typography variant="footer-heading" color="none" className={headingCls}>
              Links :
            </Typography>
            <ul className="space-y-1.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  {l.href ? (
                    <Link href={l.href} className={`${linkCls} block`}>
                      {l.name}
                    </Link>
                  ) : (
                    <span className={`${textCls} block`}>{l.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="footer-col-3 w-full min-w-0 flex flex-col gap-4 2k:gap-7 4k:gap-9">
            <Typography variant="footer-heading" color="none" className={headingCls}>
              Products :
            </Typography>
            <ul className="space-y-1.5">
              {products.map((p) => (
                <li key={p}>
                  <span className={`${textCls} block whitespace-nowrap`}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col-4 col-span-2 md:col-span-1 w-full min-w-0 flex flex-col gap-4 2k:gap-7 4k:gap-9">
            <Typography variant="footer-heading" color="none" className={headingCls}>
              Contact Us :
            </Typography>
            <div className="flex flex-col gap-3 2k:gap-5 4k:gap-6">
              {contacts.map(({ icon: Icon, label }) => (
                <div key={label} className={`${textCls} flex items-center gap-3`}>
                  <Icon className={iconCls} fill="currentColor" strokeWidth={1.5} />
                  <span className="footer-body whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 5: Subscribe */}
          <div className="footer-col-5 col-span-2 md:col-span-3 w-full min-w-0 flex flex-col gap-4 2k:gap-7 4k:gap-9">
            <Typography variant="footer-heading" color="none" className={headingCls.replace(" whitespace-nowrap", "")}>
              Subscribe for More Information
            </Typography>
            <Typography variant="footer-body" color="secondary">
              Latest news and updates from Zinnanti Surgical.
            </Typography>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center w-full max-w-[360px] 2k:max-w-[560px] 4k:max-w-[760px]"
            >
              <input
                type="email"
                required
                placeholder="Email Address..."
                className="footer-body w-full bg-white text-gray-800 placeholder-gray-400 rounded-lg 2k:rounded-xl 4k:rounded-2xl px-4 2k:px-6 py-2.5 2k:py-4 4k:py-6 pr-12 2k:pr-20 4k:pr-28 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="zin-gradient absolute right-2 2k:right-3 4k:right-4 flex items-center justify-center w-7 h-7 2k:w-12 2k:h-12 4k:w-16 4k:h-16 rounded-full text-white hover:brightness-110 transition cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 2k:w-7 2k:h-7 4k:w-9 4k:h-9" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px 4k:h-0.5 bg-[#b9d3e4]" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="uppercase text-[var(--color-secondary)]">
            © 2025 Zinnanti Surgical Design Group, Inc.
          </span>
          <span className="text-[var(--color-secondary)]">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
