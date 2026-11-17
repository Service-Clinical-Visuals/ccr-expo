"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(false);

  // Hidden while the banner is in view; slides in once scrolled past it.
  useEffect(() => {
    const onScroll = () => {
      const banner = document.getElementById("banner-section");
      const bannerBottom = banner ? banner.offsetTop + banner.offsetHeight : window.innerHeight;
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
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container relative">
        <div className="header-h flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center flex-shrink-0 h-full py-[4px]" aria-label="WINFO Europa Home">
            <img src="/medical/winfo/h-logo.webp" alt="WINFO Europa" className="h-full w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 2xl:gap-[2.4vw] absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`header-link font-body transition-colors hover:text-[var(--accent)] ${active === item.label ? "text-[var(--accent)] font-medium" : "text-[var(--nav)]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button href="#contact" className="hidden sm:inline-flex rounded-[0.75em]">
              Request Quote
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[var(--primary)] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mb-4 rounded-2xl bg-white shadow-xl border border-slate-200 p-5 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`header-link font-body font-medium py-3 border-b border-slate-100 last:border-b-0 hover:text-[var(--accent)] ${active === item.label ? "text-[var(--accent)]" : "text-[var(--nav)]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="sm:hidden pt-4">
              <Button href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
