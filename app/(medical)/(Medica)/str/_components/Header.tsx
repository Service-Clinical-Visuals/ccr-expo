"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger navbar visibility once user scrolls down slightly
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",       href: "#home",         id: "home" },
    { name: "Product",    href: "#products",      id: "products" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "News",       href: "#news",          id: "news" },
    { name: "Contact Us", href: "#contact",       id: "contact" },
  ];

  const showHeader = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md h-[80px] lg:h-[100px] min-[2500px]:h-[130px] min-[3800px]:h-[160px] flex items-center transition-all duration-500 ease-in-out ${
        showHeader
          ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/str/logo.png"
            alt="STR Biotechnologies Logo"
            className="w-[100px] sm:w-[120px] lg:w-[135px] min-[2500px]:w-[180px] min-[3800px]:w-[240px] h-auto max-h-[65px] lg:max-h-[80px] min-[2500px]:max-h-[110px] min-[3800px]:max-h-[140px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="relative flex flex-col items-center py-2">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`navbar transition-colors duration-200 ${
                    isActive
                      ? "text-[#F6821F] font-bold"
                      : "text-[#202020] hover:text-[#F6821F] font-medium"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <span className="absolute bottom-0 w-[25px] h-[2px] bg-[#F6821F] rounded-full transition-all" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Language + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Pill */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-5 sm:py-2 border border-[#F6821F] rounded-[10px] hover:bg-[#FEECE0]/50 transition-colors cursor-pointer"
              aria-label="Select Language"
            >
              <span className="text-lg sm:text-xl leading-none">🇺🇸</span>
              <span className="navbar font-semibold text-[#F6821F]">ENG</span>
              <ChevronDown className="w-4 h-4 text-[#F6821F] transition-transform duration-200" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white text-[#202020] shadow-xl rounded-[10px] py-2 w-36 border border-gray-100 z-50 animate-in fade-in zoom-in-95 duration-200">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(false)}
                  className="w-full text-left px-4 py-2 navbar hover:bg-[#FEECE0]/40 text-[#F6821F] font-semibold flex items-center gap-2"
                >
                  <span>🇺🇸</span> English
                </button>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(false)}
                  className="w-full text-left px-4 py-2 navbar hover:bg-gray-50 text-gray-700 font-medium flex items-center gap-2"
                >
                  <span>🇹🇷</span> Türkçe
                </button>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#202020] hover:text-[#F6821F] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            ) : (
              <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`navbar py-2 border-b border-gray-100 ${
                  isActive ? "text-[#F6821F] font-bold" : "text-[#202020] font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
