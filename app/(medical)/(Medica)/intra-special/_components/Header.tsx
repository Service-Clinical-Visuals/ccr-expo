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
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Product", href: "#products", id: "products" },
    { name: "Company", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const showHeader = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out ${showHeader
        ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none"
        } h-[75px] sm:h-[85px] lg:h-[100px] min-[2500px]:h-[130px] min-[3800px]:h-[160px] flex items-center`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/intra-special/logo.png"
            alt="intra special catheters"
            className="w-[120px] sm:w-[135px] lg:w-[155px] min-[2500px]:w-[210px] min-[3800px]:w-[280px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links (Precisely centered on screen matching Figma left: calc(50% - 407px/2)) */}
        <nav className="hidden lg:flex items-center gap-[46px] xl:gap-[48px] min-[2500px]:gap-[64px] min-[3800px]:gap-[80px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`navbar font-primary font-semibold text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] leading-[20px] tracking-normal transition-colors duration-200 cursor-pointer select-none ${isActive
                  ? "text-[#D70826]"
                  : "text-[#202020] hover:text-[#D70826]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Language Selector Button */}
        <div className="hidden lg:flex items-center relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center justify-center gap-2.5 px-[22px] py-[10px] border border-[#EC1C24] rounded-[10px] bg-white hover:bg-red-50/40 transition-all cursor-pointer h-[46px] min-[2500px]:h-[56px] min-[3800px]:h-[68px]"
            aria-label="Language Selector"
          >
            {/* US Flag Icon */}
            <span className="text-[20px] leading-none select-none">🇺🇸</span>
            {/* Language Text */}
            <span className="font-primary font-semibold text-[16px] min-[2500px]:text-[20px] min-[3800px]:text-[24px] text-[#D70826] leading-none tracking-[-0.02em] capitalize">
              ENG
            </span>
            {/* Down Chevron */}
            <ChevronDown
              className={`w-5 h-5 text-[#D70826] transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""
                }`}
              strokeWidth={2.5}
            />
          </button>

          {/* Language Dropdown Menu */}
          {langDropdownOpen && (
            <div className="absolute right-0 top-[54px] w-[160px] bg-white border border-[#EC1C24]/30 rounded-[10px] shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <button
                onClick={() => setLangDropdownOpen(false)}
                className="w-full px-4 py-2.5 text-left text-sm font-primary font-semibold text-[#D70826] hover:bg-red-50 flex items-center gap-2"
              >
                <span>🇺🇸</span> English (ENG)
              </button>
              <button
                onClick={() => setLangDropdownOpen(false)}
                className="w-full px-4 py-2.5 text-left text-sm font-primary font-semibold text-[#202020] hover:bg-gray-50 flex items-center gap-2"
              >
                <span>🇩🇪</span> Deutsch (DEU)
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#202020] hover:text-[#D70826] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[75px] sm:top-[85px] left-0 w-full bg-white border-b border-gray-200 shadow-xl px-6 py-6 flex flex-col gap-5 z-50 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-primary font-semibold transition-colors ${activeLink === link.id
                  ? "text-[#D70826]"
                  : "text-[#202020] hover:text-[#D70826]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-2 border border-[#EC1C24] rounded-[10px]">
              <span>🇺🇸</span>
              <span className="font-primary font-semibold text-sm text-[#D70826]">
                ENG
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
