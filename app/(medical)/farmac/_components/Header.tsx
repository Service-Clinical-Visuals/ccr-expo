"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, Globe, Menu, X } from "lucide-react";
import Button from "./Button";

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
  { label: "Home", href: "/farmac" },
  {
    label: "Agency",
    href: "#agency",
    items: [
      { label: "Who We Are", href: "#who-we-are" },
      { label: "History & Heritage", href: "#history" },
      { label: "Values & Quality", href: "#values" },
      { label: "Certifications", href: "#certifications" },
    ],
  },
  {
    label: "News",
    href: "#news",
    items: [
      { label: "Company Updates", href: "#news-updates" },
      { label: "Industry Events", href: "#events" },
      { label: "Press Releases", href: "#press" },
    ],
  },
  {
    label: "Our Products",
    href: "#products",
    items: [
      { label: "Medical Dressings", href: "#dressings" },
      { label: "Hospital Supplies", href: "#hospital" },
      { label: "Operating Room Items", href: "#operating-room" },
      { label: "Orthopedic & Healthcare", href: "#orthopedic" },
      { label: "Diagnostic Instruments", href: "#diagnostic" },
    ],
  },
  {
    label: "Medical Devices and PPE",
    href: "#devices-ppe",
    items: [
      { label: "Personal Protective Equipment", href: "#ppe" },
      { label: "Surgical Masks & Respirators", href: "#masks" },
      { label: "Gloves & Sanitizers", href: "#gloves" },
      { label: "Protective Gowns & Visors", href: "#gowns" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("banner-section");
      let threshold = 400;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        const bannerAbsoluteTop = scrollY + rect.top;
        const bannerHeight = rect.height;
        // Half scroll of banner video completed
        threshold = bannerAbsoluteTop + bannerHeight / 2;
      }

      if (scrollY >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }
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
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#24559c] shadow-lg shadow-black/15 ${isVisible
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between ">
          {/* Logo Section */}
          <Link href="/farmac" className="flex items-center flex-shrink-0 mr-2 sm:mr-4 group">
            <div className="relative flex items-center">
              <img
                src="/medical/farmac/logo.png"
                alt="Farmac-Zabban Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.items && item.items.length > 0);
              const isDropdownOpen = activeDropdown === item.label;
              const isHome = item.label === "Home";

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1.5 cursor-pointer py-2">
                    <Link
                      href={item.href}
                      className={`header-link font-medium transition-colors duration-200 ${isHome
                        ? "text-white font-semibold underline underline-offset-8 decoration-2 decoration-white"
                        : "text-white/95 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <ChevronDown
                        className={`w-4 h-4 text-white/80 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 text-white" : ""
                          }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {/* {hasChildren && isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-xl bg-white shadow-xl shadow-black/15 border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="header-link block px-4 py-2 text-slate-700 hover:bg-[#24559c]/10 hover:text-[#24559c] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </div>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-shrink-0">
            {/* Search Icon Button */}
            <button
              type="button"
              aria-label="Search"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#24a6a8] hover:bg-[#1f8e90] text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 flex-shrink-0"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>

            {/* Language / Globe Button */}
            <button
              type="button"
              aria-label="Change Language"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#24a6a8] hover:bg-[#1f8e90] text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 flex-shrink-0"
            >
              <img src="/medical/farmac/globe.png" alt="globe" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white object-contain" />
            </button>

            {/* Contact Us CTA Button - hidden on mobile (<md), visible on tablet and desktop */}
            <div className="hidden md:block">
              <Button href="#contact">
                Contact Us
              </Button>
            </div>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden my-3 rounded-2xl bg-white text-slate-800 shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
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
                        className={`header-link font-medium ${item.label === "Home" ? "text-[#24559c] font-semibold" : "text-slate-800"
                          }`}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180 text-[#24559c]" : ""
                            }`}
                        />
                      )}
                    </div>
                    {/* 
                    {hasChildren && isDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-1.5 border-l-2 border-[#24559c]/30">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="header-link text-slate-600 hover:text-[#24559c] py-1"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )} */}
                  </div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 md:hidden flex justify-center">
                <Button
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                >
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


