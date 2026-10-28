"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/cosmed" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Specialties", href: "#specialties" },
  { label: "Resource", href: "#resource" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("banner-section");

      let threshold = 300;
      if (banner) {
        threshold = banner.offsetHeight * 0.45;
      }

      const shouldShow = scrollY >= threshold;
      setIsVisible(shouldShow);
      if (!shouldShow && mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-500 ease-in-out ${isVisible
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none"
        } py-3 sm:py-3.5`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24 mx-auto">
        <div className="flex items-center justify-between transition-all duration-300 ease-in-out">
          {/* Brand Logo */}
          <Link
            href="/cosmed"
            className="flex items-center flex-shrink-0 group focus:outline-none"
            aria-label="COSMED - The Metabolic Company"
          >
            <div className="relative flex items-center">
              <img
                src="/medical/cosmed/h-logo.webp"
                alt="COSMED - The Metabolic Company"
                className="h-9 sm:h-10 md:h-[50px] lg:h-[55px] xl:h-[60px] min-[2500px]:h-[76px] min-[3800px]:h-[100px] w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 font-plus-jakarta">
            {NAV_ITEMS.map((item) => {
              const isHome = item.label === "Home";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`header-link transition-colors duration-200 ${isHome
                    ? "text-[#0066B2] font-extrabold font-plus-jakarta"
                    : "text-slate-800 hover:text-[#0066B2] font-medium font-plus-jakarta"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Search Icon & Mobile Hamburger */}
          <div className="flex items-center gap-3 min-[2500px]:gap-5 flex-shrink-0">
            {/* Search Pill Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-label="Search COSMED"
                className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#E5F3F8] text-[#0066B2] hover:bg-[#d4ecf5] hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066B2]/40"
              >
                <Search className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#0066B2]" strokeWidth={2.2} />
              </button>

              {/* Search Dropdown / Overlay */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 sm:w-84 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search COSMED..."
                      autoFocus
                      className="w-full px-3.5 py-2 header-link bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066B2] focus:bg-white transition-all text-slate-800"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#0066B2] text-white btn-text font-semibold rounded-xl hover:bg-[#005596] transition-colors flex-shrink-0"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[#0066B2] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 mb-4 rounded-3xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1 font-plus-jakarta">
              {/* Mobile Search input */}
              <div className="mb-3 pb-3 border-b border-slate-100">
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search COSMED..."
                    className="w-full px-3.5 py-2 header-link bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066B2] text-slate-800"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#0066B2] text-white btn-text font-semibold rounded-xl hover:bg-[#005596] transition-colors"
                  >
                    Go
                  </button>
                </form>
              </div>

              {NAV_ITEMS.map((item) => {
                const isHome = item.label === "Home";
                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 last:border-b-0 py-2.5"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block header-link ${isHome
                        ? "text-[#0066B2] font-semibold"
                        : "text-slate-800 hover:text-[#0066B2] font-medium"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
