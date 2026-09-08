"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  { label: "Home", href: "/ctn" },
  {
    label: "Industries",
    href: "#industries",
    items: [
      { label: "Sports & Performance", href: "" },
      { label: "Physiotheraphy & Rehabilitation", href: "" },
      { label: "Longevity & Preventive Health", href: "" },
      { label: "Hospitality & Spas", href: "" },
      { label: "Aesthetics & Beauty", href: "" },
      { label: "Corporate Wellness", href: "" },
    ],
  },
  {
    label: "Products",
    href: "#products",
    items: [
      { label: "Cryo Cabin", href: "" },
      { label: "Cryo Localized", href: "" },
      { label: "Wellness Pods", href: "" },
      { label: "Accessories", href: "" },
    ],
  },
  {
    label: "Technology",
    href: "#technology",
    items: [
      { label: "Cryotheraphy", href: "" },
      { label: "Red light, Oxygen, ElectroMagnetic", href: "" },
    ],
  },
  {
    label: "Company",
    href: "#company",
    items: [
      { label: "About", href: "" },
      { label: "Client Stories", href: "" },
      { label: "Investors", href: "" },
      { label: "Blog", href: "" },
      { label: "News", href: "" },
    ],
  },
  { label: "FAQ", href: "" },
  { label: "Contact", href: "" },
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
        // Half scroll of banner video completed
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
    <>
      {/* Spacer to preserve document flow when header is fixed */}
      <div className="h-[76px] sm:h-[88px] md:h-[96px] w-full " aria-hidden="true" />

      {/* Header: Visible floating pill at top -> Hidden during initial banner scroll -> Visible full length after half banner */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${headerState === "full"
          ? "bg-[#3d57a5] shadow-lg shadow-black/15 border-b border-white/15 pt-0 translate-y-0 opacity-100 pointer-events-auto"
          : headerState === "hidden"
            ? "pt-4 sm:pt-6 bg-transparent -translate-y-full opacity-0 pointer-events-none"
            : "pt-4 sm:pt-6 bg-transparent translate-y-0 opacity-100 pointer-events-auto"
          }`}
      >
        <div className="custom-container pointer-events-auto">
          {/* Navigation Bar */}
          <div
            className={`transition-all duration-300 ease-in-out flex items-center justify-between ${headerState === "full"
              ? "py-3 sm:py-3.5 px-4 sm:px-8 md:px-10 rounded-none border-transparent"
              : "bg-[#3d57a5] rounded-full px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 border border-white/15 shadow-md shadow-black/10"
              }`}
          >

            {/* Logo Section */}
            <Link href="/ctn" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="relative h-7 w-20 sm:h-8 sm:w-24 md:h-9 md:w-28 flex items-center">
                <img
                  src="/medical/ctn/logo.png"
                  alt="CTN Logo"
                  className="h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (visible on xl: 1280px and up) */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.items && item.items.length > 0);
                const isDropdownOpen = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer py-1">
                      <Link
                        href={""}
                        className={`header-link transition-colors duration-200 ${item.label === "Home"
                          ? "text-white font-semibold underline underline-offset-4 decoration-white/80"
                          : "text-white font-medium"
                          }`}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 text-white" : ""
                            }`}
                        />
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {hasChildren && isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white shadow-xl shadow-black/15 border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="header-link block px-4 py-2 text-slate-700 hover:bg-[#3d57a5]/10 hover:text-[#3d57a5] transition-colors"
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

            {/* Right CTA Button & Mobile/Tablet Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Become a Distributor Button: hidden on mobile (<sm), visible on tablet & desktop (sm+) */}
              <div className="hidden sm:block">
                <Button href="#distributor" variant="white">
                  Become a Distributor
                </Button>
              </div>

              {/* Mobile & Tablet Menu Button: visible on mobile & tablet (<xl), hidden on desktop (xl+) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors focus:outline-none flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-3 mb-4 rounded-3xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
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
                          className={`header-link font-medium ${item.label === "Home" ? "text-[#3d57a5] font-bold" : "text-slate-800"
                            }`}
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180 text-[#3d57a5]" : ""
                              }`}
                          />
                        )}
                      </div>

                      {hasChildren && isDropdownOpen && (
                        <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[#3d57a5]/30">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="header-link text-slate-600 hover:text-[#3d57a5] py-1"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* On mobile (<sm), show the Become a Distributor button inside the drawer */}
                <div className="pt-4 mt-2 border-t border-slate-100 sm:hidden flex justify-center">
                  <Button href="#distributor" variant="primary" className="w-full justify-center">
                    Become a Distributor
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
