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
  { name: "Home", id: "home" },
  { name: "Our Story", id: "about" },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "Company", id: "company" },
  { name: "History", id: "history" },
  { name: "Support", id: "support" },
  { name: "News", id: "news" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
        <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full">
          {/* Brand Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 focus:outline-none"
            aria-label="Will Pharma Home"
          >
            <img
              src="/medical/will-pharma/logo.webp"
              alt="Will Pharma"
              className="h-9 sm:h-11 md:h-12 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`flex items-center gap-1.5 navbar transition-colors py-1 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? "text-[var(--color-primary)] !font-bold underline underline-offset-8"
                      : "text-[#4B5563] hover:text-[var(--color-primary)] font-normal"
                  }`}
                >
                  <span className="navbar !text-[length:inherit]">{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-[#698A7F] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Language Selector */}
          <div className="hidden xl:flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8 shrink-0">
            <div className="header-lang-divider bg-[#D9D9D9] mr-2" />
            <div className="flex items-center gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 cursor-pointer select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                className="header-flag rounded-[2px] object-cover shadow-xs shrink-0"
              >
                <clipPath id="flag-clip">
                  <rect width="60" height="30" rx="2" />
                </clipPath>
                <g clipPath="url(#flag-clip)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </g>
              </svg>
              <span className="font-bold text-[#333333] header-lang-text">EN</span>
              <ChevronDown className="header-lang-icon text-[#698A7F] shrink-0" />
            </div>
          </div>

          {/* Mobile / Tablet Toggle Button */}
          <button
            type="button"
            className="xl:hidden text-[#333333] p-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-[#333333]" />
            ) : (
              <Menu className="w-7 h-7 text-[#333333]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed top-[72px] sm:top-[80px] left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200 z-50">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center justify-between py-2 navbar ${
                    isActive
                      ? "text-[var(--color-primary)] font-bold"
                      : "text-[#333333] hover:text-[var(--color-primary)] font-normal"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  <span className="navbar !text-[length:inherit]">{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-500" />}
                </a>
              </div>
            );
          })}
          <div className="pt-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 30"
              width="24"
              height="15"
              className="rounded-[2px]"
            >
              <g>
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
              </g>
            </svg>
            <span className="font-bold text-[#333333] text-sm">EN</span>
          </div>
        </div>
      )}
    </header>
  );
}
