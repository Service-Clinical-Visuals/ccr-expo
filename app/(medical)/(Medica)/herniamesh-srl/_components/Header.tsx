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
  { label: "Home", href: "/herniamesh-srl" },
  { label: "Agency", href: "" },
  { label: "Products", href: "" },
  { label: "Events", href: "" },
  { label: "Contact Us", href: "" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("banner-section");
      let threshold = 400;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        // Half scroll of banner video completed
        threshold = scrollY + rect.top + rect.height / 2;
      }

      setIsFullWidth(scrollY >= threshold);
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
    <>
      {/* Spacer to preserve document flow when header is fixed */}
      <div className="h-[72px] sm:h-[80px] md:h-[84px] w-full" aria-hidden="true" />

      {/* Header: floating rounded bar at top -> full-width bar once half the banner has scrolled */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${isFullWidth
          ? "bg-white shadow-lg shadow-black/10 border-b border-slate-200 pt-0"
          : "bg-transparent pt-3 sm:pt-4"
          }`}
      >
        <div className="custom-container">
          {/* Navigation Bar */}
          <div
            className={`relative grid grid-cols-12 items-center bg-white transition-all duration-300 ease-in-out ${isFullWidth
              ? "rounded-none border border-transparent px-0 py-2"
              : "rounded-tl-3xl rounded-br-3xl border border-slate-200 shadow-sm px-4 py-1.5 sm:px-6 md:px-8"
              }`}
          >
            {/* Logo */}
            <div className="col-span-6 xl:col-span-3 flex items-center">
              <Link href="/herniamesh-srl" className="flex items-center flex-shrink-0 group">
                <img
                  src="/medical/herniamesh-srl/logo.webp"
                  alt="Herniamesh Logo"
                  className="h-12 sm:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Desktop Navigation (xl and up) */}
            <nav className="hidden xl:flex xl:col-span-6 items-center justify-center gap-6 2xl:gap-9">
              {NAV_ITEMS.map((item) => {
                const isActive = item.label === "Home";

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`header-link py-2 transition-colors duration-200 hover:text-[#0055A6] ${isActive
                      ? "text-[#0055A6] font-semibold underline underline-offset-4 decoration-2"
                      : "text-slate-800 font-medium"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA & Mobile Toggle */}
            <div className="col-span-6 xl:col-span-3 flex items-center justify-end gap-2 sm:gap-3">
              <div className="hidden sm:block">
                <Button href="" variant="primary">
                  Get in Touch
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[#0055A6] text-white flex items-center justify-center hover:bg-[#00448a] transition-colors focus:outline-none flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Drawer */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-3 mb-4 rounded-2xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-slate-100 last:border-b-0 py-2.5">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`header-link font-medium ${item.label === "Home" ? "text-[#0055A6] font-bold" : "text-slate-800"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 mt-2 border-t border-slate-100 sm:hidden flex justify-center">
                  <Button href="" variant="primary" className="w-full justify-center">
                    Get in Touch
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
