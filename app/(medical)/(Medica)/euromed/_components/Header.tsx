"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
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
  { label: "Home", href: "/euromed" },
  {
    label: "About Us",
    href: "#about",
    items: [
      { label: "Company Overview", href: "#about" },
      { label: "Vision & Mission", href: "#vision" },
      { label: "Quality & Compliance", href: "#quality" },
      { label: "Certifications", href: "#certifications" },
    ],
  },
  {
    label: "Resourses",
    href: "#resources",
    items: [
      { label: "Clinical Studies", href: "#studies" },
      { label: "Whitepapers", href: "#whitepapers" },
      { label: "Documentation", href: "#docs" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
  { label: "Capabilities", href: "#capabilities" },
  {
    label: "Products",
    href: "#products",
    items: [
      { label: "Infusion & Transfusion", href: "#infusion" },
      { label: "Cannulas & Catheters", href: "#cannulas" },
      { label: "Surgical Disposables", href: "#surgical" },
      { label: "Custom Solutions", href: "#custom" },
    ],
  },
  {
    label: "Careers",
    href: "#careers",
    items: [
      { label: "Life At Euromed", href: "#life" },
      { label: "Current Openings", href: "#openings" },
      { label: "Benefits & Culture", href: "#benefits" },
    ],
  },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "full">("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("banner-section");
      let threshold = 400;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        const bannerAbsoluteTop = scrollY + rect.top;
        const bannerHeight = rect.height;
        threshold = bannerAbsoluteTop + bannerHeight / 2;
      }

      if (scrollY >= threshold) {
        setHeaderState("full");
      } else if (scrollY > 30) {
        setHeaderState("hidden");
        setMobileMenuOpen(false);
      } else {
        setHeaderState("top");
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${headerState === "full"
          ? "bg-[#ffffff] shadow-lg shadow-black/15 border-b border-black/10 pt-0 translate-y-0 opacity-100 pointer-events-auto"
          : headerState === "hidden"
            ? "pt-4 sm:pt-4 bg-transparent -translate-y-full opacity-0 pointer-events-none"
            : "pt-4 sm:pt-4 bg-transparent translate-y-0 opacity-100 pointer-events-auto"
        }`}
    >
      <div className="custom-container">
        <div
          className={`transition-all duration-300 ease-in-out flex items-center justify-between ${headerState === "full"
              ? "py-3 sm:py-3.5 px-4 sm:px-8 md:px-10 rounded-none border-transparent"
              : "bg-[#ffffff] rounded-full px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 border border-black/15 shadow-lg shadow-black/10"
            }`}
        >
          {/* Brand Logo */}
          <Link
            href="/euromed"
            className="flex items-center flex-shrink-0 group focus:outline-none"
            aria-label="Euromed Home"
          >
            <div className="relative h-7 sm:h-8 md:h-10 flex items-center">
              <img
                src="/medical/euromed/logo.png"
                alt="Euromed - The Trusted Partner"
                className="h-full w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 font-outfit">
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
                  <div className="flex items-center gap-1 cursor-pointer py-1">
                    <Link
                      href={item.href}
                      className={`header-link transition-colors duration-200 ${isHome
                          ? "text-[#d40708] font-bold"
                          : "text-slate-800 hover:text-[#d40708] font-medium"
                        }`}
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 text-[#d40708]" : ""
                          }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {/* {hasChildren && isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="header-link block px-4 py-2 text-slate-700 hover:bg-[#d40708]/10 hover:text-[#d40708] transition-colors"
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

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Get In Touch Pill Button: visible on sm and up */}
            <div className="hidden sm:block">
              <Button href="#contact" variant="primary">
                Get In Touch
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[#d40708] transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 mb-4 rounded-3xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1 font-outfit">
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.items && item.items.length > 0);
                const isDropdownOpen = activeDropdown === item.label;
                const isHome = item.label === "Home";

                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 last:border-b-0 py-2.5"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => hasChildren && toggleDropdown(item.label)}
                    >
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && setMobileMenuOpen(false)}
                        className={`header-link font-medium ${isHome ? "text-[#d40708] font-bold" : "text-slate-800"
                          }`}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180 text-[#d40708]" : ""
                            }`}
                        />
                      )}
                    </div>

                    {hasChildren && isDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[#d40708]/30">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="header-link text-slate-600 hover:text-[#d40708] py-1"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Get In Touch CTA */}
              <div className="pt-4 mt-2 border-t border-slate-100 sm:hidden flex justify-center">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get In Touch
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
