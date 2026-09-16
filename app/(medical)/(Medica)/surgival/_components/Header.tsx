"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

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
  { label: "Home", href: "/surgival" },
  { label: "Products", href: "#products" },
  { label: "Company", href: "#company" },
  { label: "Patients", href: "#patients" },
  { label: "E-IFUS Portal", href: "#portal" },
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
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out pointer-events-auto flex justify-center ${headerState === "full"
        ? "top-0 bg-white border-b border-gray-200 shadow-sm translate-y-0 opacity-100"
        : headerState === "hidden"
          ? "top-4 sm:top-6 min-[3800px]:top-15  -translate-y-[150%] opacity-0 pointer-events-none"
          : "top-4 sm:top-6  min-[3800px]:top-15  translate-y-0 opacity-100"
        }`}
    >
      <div className="custom-container w-full">
        <div className={`flex items-center justify-between transition-all duration-300 ${headerState === "full"
          ? "py-3 md:py-4"
          : "bg-white border border-gray-200 shadow-sm py-3 md:py-4 px-4 sm:px-6 md:px-8"
          }`}>

          {/* Brand Logo */}
          <Link
            href="/surgival"
            className="flex items-center flex-shrink-0 group focus:outline-none"
            aria-label="Surgival Home"
          >
            <div className="relative h-10 sm:h-12 md:h-14 min-[3800px]:h-25 flex items-center">
              <img
                src="/medical/surgival/logo.png"
                alt="Surgival"
                className="h-full w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                  <div className="flex items-center gap-1.5 cursor-pointer py-1 relative">
                    <Link href={item.href} className="group-hover:opacity-80 transition-opacity">
                      <Typography
                        variant="navbar"
                        color={isHome ? "primary" : "dark"}
                        weight={isHome ? "bold" : "medium"}
                        className={isHome ? "border-b-2 border-[var(--color-primary)] pb-1" : ""}
                      >
                        {item.label}
                      </Typography>
                    </Link>

                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 text-[var(--color-primary)]" : ""
                          }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {hasChildren && isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-white shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in duration-200">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-[var(--color-primary)]/10 transition-colors"
                        >
                          <Typography variant="navbar" color="dark">
                            {subItem.label}
                          </Typography>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Search Button: visible on sm and up */}
            <div className="hidden sm:block">
              <Button
                href="#search"
                variant="primary"
                text="Search Here"
                icon={<Search className="w-[18px] h-[18px] shrink-0" />}
              />
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[var(--color-primary)] transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mb-4 rounded-xl bg-white shadow-lg border border-slate-200 p-5 z-50 animate-in fade-in duration-200 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
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
                      >
                        <Typography
                          variant="navbar"
                          color={isHome ? "primary" : "dark"}
                          weight={isHome ? "bold" : "medium"}
                        >
                          {item.label}
                        </Typography>
                      </Link>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? "rotate-180 text-[var(--color-primary)]" : ""
                            }`}
                        />
                      )}
                    </div>

                    {hasChildren && isDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[var(--color-primary)]/30">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1"
                          >
                            <Typography variant="navbar" color="dark">
                              {subItem.label}
                            </Typography>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-slate-100 sm:hidden flex justify-center">
                <Button
                  href="#search"
                  variant="primary"
                  text="Search Here"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
