"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home Page", id: "home" },
  { name: "Corporate", id: "about", hasDropdown: true },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "News", id: "news" },
  { name: "Customer Complaints", id: "complaints" },
  { name: "Contact", id: "contact", hasDropdown: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
        <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3800px]:px-20">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="flex items-center shrink-0"
          aria-label="Duzey Medikal Home"
        >
          <img
            src="/medical/duzey-medikal/logo.webp"
            alt="Duzey Medikal Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 min-[2500px]:h-20 min-[3800px]:h-28 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="relative group flex items-center gap-1">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`relative cursor-pointer py-1 transition-colors navbar ${
                    isActive
                      ? "text-[var(--color-primary)] font-bold underline underline-offset-8"
                      : "text-[#4B5563] hover:text-[var(--color-primary)] font-medium"
                  }`}
                >
                  {link.name}
                </a>
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                      isActive ? "text-[var(--color-primary)]" : "text-[#4B5563]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Language Selector */}
        <div className="hidden xl:flex items-center gap-2 cursor-pointer py-1 px-2 rounded-md hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-gray-200 shrink-0">
            <img
              src="/medical/duzey-medikal/flag.webp"
              alt="Language Flag"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown className="w-4 h-4 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-[#4B5563]" />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="xl:hidden p-2 text-[#333333] hover:text-[var(--color-primary)] transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 text-[#111827]" />
          ) : (
            <Menu className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 text-[#111827]" />
          )}
        </button>
      </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`block py-1 transition-colors navbar ${
                    isActive
                      ? "text-[var(--color-primary)] font-bold underline"
                      : "text-[#4B5563] hover:text-[var(--color-primary)] font-medium"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              </div>
            );
          })}

          {/* Mobile Language Selector */}
          <div className="pt-2 flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
              <img
                src="/medical/duzey-medikal/flag.webp"
                alt="Language Flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="navbar text-[#4B5563] font-medium">English</span>
          </div>
        </div>
      )}
    </header>
  );
}
