"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
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
  { label: "Home", href: "/medpro" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Corporate", href: "#corporate" },
  { label: "News & Update", href: "#news" },
];

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 40) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerState, setHeaderState] = useState<"hidden" | "full">("hidden");
  // const [isScrolled, setIsScrolled] = useState(false);

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
        setHeaderState("full");
      } else {
        setHeaderState("hidden");
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
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
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-slate-100 transition-all duration-300 ease-in-out ${headerState === "hidden"
        ? "-translate-y-full opacity-0 pointer-events-none"
        : "translate-y-0 opacity-100 shadow-sm pointer-events-auto"
        }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-35 mx-auto">
        <div className="flex items-center justify-between py-3 sm:py-4 transition-all duration-300 ease-in-out">

          {/* Brand Logo */}
          <Link
            href="/medpro"
            className="flex items-center flex-shrink-0 group focus:outline-none"
            aria-label="Medpro Home"
          >
            <div className="relative flex items-center">
              <img
                src="/medical/medpro/logo.png"
                alt="Medpro"
                className="h-auto w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-12 font-fraunces">
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
                  <div className="flex items-center gap-1.5 cursor-pointer py-1">
                    <Link
                      href={item.href}
                      className={`relative header-link font-fraunces transition-colors duration-200 ${isHome
                        ? "text-[#3BB3C3] font-semibold after:absolute after:-bottom-0.5 after:left-0 after:w-1/2 after:h-[1px] after:bg-[#3BB3C3] after:rounded-full"
                        : "text-[#202020] hover:text-[#3BB3C3] font-medium"
                        }`}
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 text-[var(--primary)]" : ""
                          }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {hasChildren && isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="header-link block px-4 py-2 text-slate-700 hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Get In Touch Pill Button: visible on sm and up */}
            <div className="hidden sm:block">
              <Button href="#contact" variant="primary" showArrow={false}>
                <span className="flex items-center gap-2 font-fraunces">Contact Us <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 font-fraunces 
              hover:text-[var(--primary)] transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 mb-4 rounded-3xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1 font-inter">
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
                        className={`relative header-link font-medium ${isHome ? "text-[var(--primary)] font-bold after:absolute after:-bottom-1 after:left-0 after:w-1/2 after:h-[2px] after:bg-[var(--primary)] after:rounded-full" : "text-slate-800"
                          }`}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180 text-[var(--primary)]" : ""
                            }`}
                        />
                      )}
                    </div>

                    {hasChildren && isDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[var(--primary)]/30">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="header-link text-slate-600 hover:text-[var(--primary)] py-1"
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
                  className="w-full justify-center font-fraunces"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2 font-fraunces">Contact Us <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
