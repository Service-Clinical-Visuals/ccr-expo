"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/kaul", isActive: true },
  { label: "About Us", href: "#about" },
  { label: "Product", href: "#products" },
  { label: "Corporate", href: "#corporate" },
  { label: "News", href: "#news" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    // <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 transition-all duration-200">
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#273338] shadow-lg shadow-black/15 ${isVisible
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="custom-container px-4 sm:px-6 py-2.5 sm:py-4 lg:py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/kaul" className="flex items-center gap-2 select-none group flex-shrink-0">
          <div className="relative w-28 sm:w-36 md:w-44 lg:w-65 h-7 sm:h-8 md:h-15">
            <Image
              src="/medical/kaul/logo.png"
              alt="KAULMED Logo"
              fill
              className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (visible on xl: 1280px and up) */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`header-link relative py-1 transition-colors duration-200 font-poppins font-medium ${item.isActive
                ? "text-[#FCC100] font-bold"
                : "text-white hover:text-[#FCC100] font-medium"
                }`}
            >
              <span>{item.label}</span>
              {item.isActive && (
                <span className="block w-6 h-[2.5px] rounded-full mx-auto mt-1" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search Product Button & Mobile/Tablet Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Search Button (Desktop & Tablet) */}
          <div className="hidden sm:flex justify-center">
            <Button href="#contact" variant="outline-primary">
              Contact Us
            </Button>
          </div>

          {/* Search Icon button (Mobile only) */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className="sm:hidden w-9 h-9 rounded-full border border-slate-600 text-[#FCC100] hover:bg-[#FCC100]/5 active:scale-95 flex items-center justify-center transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Mobile & Tablet Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-600 text-white hover:text-[#FCC100] hover:bg-slate-800 active:scale-95 flex items-center justify-center transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="border-t border-slate-700 bg-[#2A3338]/95 backdrop-blur-md py-3 px-4 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="custom-container px-4 flex items-center gap-3">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCC100] flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-white placeholder:text-slate-400 font-inter header-link"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="footer-link text-slate-400 hover:text-slate-600 px-2 py-1 rounded cursor-pointer flex-shrink-0"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-700 bg-[#2A3338]/98 backdrop-blur-md shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="custom-container px-4 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`header-link py-2.5 px-3 rounded-lg transition-colors font-medium flex items-center justify-between font-poppins ${item.isActive
                  ? "bg-[#FCC100]/10 text-[#FCC100] font-semibold"
                  : "text-white hover:bg-slate-800 hover:text-[#FCC100]"
                  }`}
              >
                <span>{item.label}</span>
                {item.isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCC100]" />
                )}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-700 mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#FCC100] text-[#FCC100] rounded-lg hover:bg-[#FCC100]/5 transition-colors font-poppins search-btn-text font-medium cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#FCC100]" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
