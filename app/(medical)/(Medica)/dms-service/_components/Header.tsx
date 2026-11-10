"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sales", href: "#products" },
  { label: "Support", href: "#support" },
  { label: "Patents", href: "#" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const banner = document.getElementById("banner-section");
      const bannerBottom = banner ? banner.offsetTop + banner.offsetHeight : window.innerHeight;

      // Hidden while the banner is in view; shown once scrolled down past it.
      if (window.scrollY >= bannerBottom - 80) {
        setVisible(true);
      } else {
        setVisible(false);
        setMobileMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between gap-6 py-4 xl:py-5">
          {/* Logo */}
          <Link href="#home" className="flex items-center flex-shrink-0" aria-label="DMS-Service Home">
            <img
              src="/medical/dms-service/h-logo.webp"
              alt="DMS-Service"
              className="h-[26px] sm:h-[30px] xl:h-[33px] 2xl:h-[38px] min-[2560px]:h-[52px] min-[3801px]:h-[76px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 min-[2560px]:gap-14">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="header-link font-inter text-[#333333] hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:block">
              <Button href="#contact" className="!px-[1.5em]">Contact Us</Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[var(--primary)] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mb-4 rounded-2xl bg-white shadow-xl border border-slate-200 p-5 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="header-link font-inter text-[#333333] hover:text-[var(--primary)] py-3 border-b border-slate-100 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 sm:hidden">
                <Button href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
