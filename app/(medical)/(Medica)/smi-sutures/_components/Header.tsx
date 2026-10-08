"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  items?: NavDropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/smi-sutures" },
  { label: "SMI", href: "" },
  {
    label: "Medical",
    href: "",
    items: [
      { label: "Absorbable Sutures", href: "" },
      { label: "Non-Absorbable Sutures", href: "" },
      { label: "Surgical Needles", href: "" },
    ],
  },
  {
    label: "Dental",
    href: "",
    items: [
      { label: "Absorbable Sutures", href: "" },
      { label: "Non-Absorbable Sutures", href: "" },
    ],
  },
  {
    label: "Ophthalmic",
    href: "",
    items: [
      { label: "Absorbable Sutures", href: "" },
      { label: "Non-Absorbable Sutures", href: "" },
    ],
  },
  {
    label: "Veterinary",
    href: "",
    items: [
      { label: "Absorbable Sutures", href: "" },
      { label: "Non-Absorbable Sutures", href: "" },
    ],
  },
  { label: "Contact", href: "" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Spacer to preserve document flow when header is fixed */}
      <div className="h-[72px] sm:h-[80px] md:h-[84px] w-full" aria-hidden="true" />

      {/* Header: floating white pill at top -> full-width bar once half the banner has scrolled */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${isFullWidth
          ? "bg-white shadow-lg shadow-black/10 border-b border-slate-200 pt-0"
          : "bg-transparent pt-3 sm:pt-4"
          }`}
      >
        <div className="custom-container">
          {/* Navigation Bar */}
          <div
            className={`relative flex items-center justify-between bg-white transition-all duration-300 ease-in-out ${isFullWidth
              ? "rounded-none border border-transparent px-0 py-2"
              : "rounded-full border border-slate-200 shadow-sm px-4 py-1.5 sm:px-6 md:px-8"
              }`}
          >
            {/* Logo */}
            <Link href="/smi-sutures" className="flex items-center flex-shrink-0 group">
              <img
                src="/medical/smi-sutures/logo.webp"
                alt="SMI Logo"
                className="h-auto w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop Navigation (xl and up) */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-9 self-stretch">
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.items && item.items.length > 0);
                const isDropdownOpen = activeDropdown === item.label;
                const isActive = item.label === "Home";

                return (
                  <div
                    key={item.label}
                    className="relative group flex items-center self-stretch"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    {/* Active indicator bar at top */}
                    {isActive && (
                      <span className="absolute -top-1.5 left-0 right-0 h-[3px] rounded-b-full bg-[#3a5da8]" />
                    )}

                    <div className="flex items-center gap-1.5 cursor-pointer py-3">
                      <Link
                        href={item.href}
                        className={`header-link transition-colors duration-200 hover:text-[#3a5da8] ${isActive ? "text-[#3a5da8] font-semibold" : "text-slate-800 font-medium"
                          }`}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-700 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#3a5da8]" : ""
                            }`}
                        />
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {/* {hasChildren && isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="w-56 rounded-2xl bg-white shadow-xl shadow-black/15 border border-slate-100 py-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="header-link block px-4 py-2 text-slate-700 hover:bg-[#3a5da8]/10 hover:text-[#3a5da8] transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )} */}
                  </div>
                );
              })}
            </nav>

            {/* Right CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="hidden sm:block">
                <Button href="" variant="primary">
                  Get In Touch
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3a5da8] text-white flex items-center justify-center hover:bg-[#2f4d8f] transition-colors focus:outline-none flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Drawer */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-3 mb-4 rounded-3xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const hasChildren = Boolean(item.items && item.items.length > 0);
                  const isDropdownOpen = activeDropdown === item.label;

                  return (
                    <div key={item.label} className="border-b border-slate-100 last:border-b-0 py-2.5">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => hasChildren && toggleDropdown(item.label)}
                      >
                        <Link
                          href={item.href}
                          onClick={() => !hasChildren && setMobileMenuOpen(false)}
                          className={`header-link font-medium ${item.label === "Home" ? "text-[#3a5da8] font-bold" : "text-slate-800"
                            }`}
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180 text-[#3a5da8]" : ""
                              }`}
                          />
                        )}
                      </div>

                      {hasChildren && isDropdownOpen && (
                        <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[#3a5da8]/30">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="header-link text-slate-600 hover:text-[#3a5da8] py-1"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-4 mt-2 border-t border-slate-100 sm:hidden flex justify-center">
                  <Button href="#contact" variant="primary" className="w-full justify-center">
                    Get In Touch
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
