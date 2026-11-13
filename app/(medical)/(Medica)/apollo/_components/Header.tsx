"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Testimonials", href: "#news" },
  { label: "Resources", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between gap-6 py-3 xl:py-[1vw] min-[1921px]:py-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center flex-shrink-0" aria-label="Apollo Healthcare Technologies Home">
            <img
              src="/medical/apollo/h-logo.webp"
              alt="Apollo Healthcare Technologies"
              className="h-[42px] sm:h-[48px] xl:h-[52px] 2xl:h-[60px] min-[2560px]:h-[84px] min-[3801px]:h-[124px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-10 2xl:gap-14 min-[2560px]:gap-20">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`header-link font-inter transition-colors hover:text-[var(--primary)] ${
                  active === item.label ? "text-[var(--primary)] font-semibold" : "text-[var(--nav)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button href="#contact" className="hidden sm:inline-flex">
              Contact Us
            </Button>

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
                  onClick={() => {
                    setActive(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`header-link font-inter font-medium py-3 border-b border-slate-100 last:border-b-0 hover:text-[var(--primary)] ${
                    active === item.label ? "text-[var(--primary)]" : "text-[var(--nav)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="sm:hidden pt-4">
              <Button href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
