"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/lux-sutures" },
  { label: "About", href: "" },
  { label: "Products", href: "" },
  { label: "Certificates", href: "" },
  { label: "Events", href: "" },
  { label: "Contact", href: "" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("banner-section");
      let threshold = window.innerHeight / 2;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        // Half scroll of banner video completed
        threshold = scrollY + rect.top + rect.height / 2;
      }

      const visible = scrollY >= threshold;
      setIsVisible(visible);
      if (!visible) setMobileMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      aria-hidden={!isVisible}
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg shadow-black/10 transition-all duration-500 ease-in-out ${isVisible
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between py-2 sm:py-2.5">
          {/* Logo */}
          <Link href="/lux-sutures" className="flex items-center shrink-0 group">
            <img
              src="/medical/lux-sutures/logo.webp"
              alt="LUX Sutures Logo"
              className="h-10 sm:h-12 2xl:h-14 2k:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation (lg and up) */}
          <nav className="hidden desk:flex items-center gap-7 xl:gap-9 2xl:gap-10 2k:gap-14">
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === "Home";

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`header-link transition-colors duration-200 hover:text-[#0071ce] ${isActive ? "text-[#0071ce] font-semibold" : "text-black font-medium"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:block">
              <Button href="" variant="secondary">
                Request Quote
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="desk:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0071ce] text-white flex items-center justify-center hover:bg-[#005ca8] transition-colors focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="desk:hidden mb-4 rounded-2xl bg-[#deeefa] border border-[#0071ce]/10 p-5 sm:p-6 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`header-link py-2.5 border-b border-[#0071ce]/10 last:border-b-0 ${item.label === "Home" ? "text-[#0071ce] font-semibold" : "text-black font-medium"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 sm:hidden flex justify-center">
                <Button href="" variant="secondary" className="w-full">
                  Request Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
