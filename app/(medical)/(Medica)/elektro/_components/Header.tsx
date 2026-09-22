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
  { label: "Home", href: "/medical/elektro" },
  { label: "Corporate", href: "#corporate" },
  { label: "All Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
  { label: "Technical Support", href: "#support" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger full screen sticky header after scrolling past most of the banner
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`fixed left-0 right-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-300 ${isScrolled ? "top-0 bg-[#10253D] shadow-lg pointer-events-auto" : "top-4 sm:top-6"
      }`}>
      <div className={`custom-container w-full pointer-events-auto transition-colors duration-300 ${isScrolled ? "bg-transparent" : "bg-[#10253D]"
        }`}>
        <div className="flex items-center justify-between py-3 md:py-4 px-4 sm:px-6 md:px-10">
          {/* Brand Logo */}
          <Link
            href="/medical/elektro"
            className="flex items-center flex-shrink-0 group focus:outline-none"
            aria-label="Elektro-mag Home"
          >
            <div className="relative h-8 sm:h-10 md:h-12 min-[3800px]:h-20 flex items-center">
              <img
                src="/medical/elektro/logo.png"
                alt="Elektro-mag"
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
                      <span
                        className={`navbar transition-colors ${isHome ? "text-white font-bold border-b-2 border-white pb-1" : "text-white/90 hover:text-white font-regular"
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>

                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 text-white" : ""
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
                          className="block px-4 py-2 hover:bg-[#10253D]/10 transition-colors"
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
                href="#contact"
                text="Get in Touch"
                variant="white"
                showIcon={true}
                icon={<Search className="w-4 h-4 xl:w-5 xl:h-5" />}
              />
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none flex-shrink-0 pointer-events-auto"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mb-4 mx-4 rounded-xl bg-[#10253D] shadow-lg border border-white/10 p-5 z-50 animate-in fade-in duration-200 max-h-[80vh] overflow-y-auto pointer-events-auto">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.items && item.items.length > 0);
                const isDropdownOpen = activeDropdown === item.label;
                const isHome = item.label === "Home";

                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 last:border-b-0 py-2.5"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => hasChildren && toggleDropdown(item.label)}
                    >
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && setMobileMenuOpen(false)}
                      >
                        <span
                          className={`navbar transition-colors ${isHome ? "text-white font-bold" : "text-white/90"
                            }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 text-white/70 transition-transform ${isDropdownOpen ? "rotate-180 text-white" : ""
                            }`}
                        />
                      )}
                    </div>

                    {hasChildren && isDropdownOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-white/30">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1"
                          >
                            <span className="navbar text-white/90">
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-white/10 sm:hidden flex justify-center">
                <Button
                  href="#contact"
                  text="Get in Touch"
                  variant="white"
                  showIcon={true}
                  icon={<Search className="w-4 h-4" />}
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

