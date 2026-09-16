"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal header smoothly once the user begins scrolling (scrollY > 50px)
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
        setLangDropdownOpen(false);
      }
    };

    // Run on mount to check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#003470] shadow-xl h-[80px] lg:h-[100px] min-[2500px]:h-[130px] min-[3800px]:h-[160px] flex items-center transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/biotech/images/logo.png"
            alt="Biotech Logo"
            className="w-[180px] sm:w-[210px] lg:w-[238px] min-[2500px]:w-[320px] min-[3800px]:w-[400px] h-auto max-h-[41px] min-[2500px]:max-h-[60px] min-[3800px]:max-h-[75px] object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden min-[1026px]:flex items-center gap-5 xl:gap-7 min-[1600px]:gap-8 min-[2500px]:gap-10 min-[3800px]:gap-12">
          {/* Home */}
          <Link
            href="#home"
            className="navbar leading-normal text-white underline underline-offset-4 decoration-1 decoration-white hover:text-[#DBB001] transition-colors"
          >
            Home
          </Link>

          {/* Biotech Pharmaceutical */}
          <div className="relative group py-2">
            <button
              type="button"
              className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 navbar leading-normal text-white hover:text-[#DBB001] transition-colors cursor-pointer"
            >
              Biotech Pharmaceutical
              <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white group-hover:rotate-180 transition-transform duration-200 shrink-0" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white text-slate-800 shadow-xl rounded-md py-2 min-[2500px]:py-3.5 min-[3800px]:py-4 w-56 min-[2500px]:w-80 min-[3800px]:w-96 border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              <Link
                href="#pharmaceutical"
                className="block px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-2 min-[2500px]:py-3 min-[3800px]:py-4 navbar hover:bg-slate-50 hover:text-[#003470] transition-colors"
              >
                Prednidelt® 30 mg
              </Link>
              <Link
                href="#products"
                className="block px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-2 min-[2500px]:py-3 min-[3800px]:py-4 navbar hover:bg-slate-50 hover:text-[#003470] transition-colors"
              >
                Pharmaceutical Products
              </Link>
            </div>
          </div>

          {/* Surgical Technique */}
          <div className="relative group py-2">
            <button
              type="button"
              className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 navbar leading-normal text-white hover:text-[#DBB001] transition-colors cursor-pointer"
            >
              Surgical Technique
              <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white group-hover:rotate-180 transition-transform duration-200 shrink-0" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white text-slate-800 shadow-xl rounded-md py-2 min-[2500px]:py-3.5 min-[3800px]:py-4 w-64 min-[2500px]:w-96 min-[3800px]:w-[420px] border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              <Link
                href="#surgical-technique"
                className="block px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-2 min-[2500px]:py-3 min-[3800px]:py-4 navbar hover:bg-slate-50 hover:text-[#003470] transition-colors"
              >
                Future Knee Modular System
              </Link>
              <Link
                href="#surgical-technique"
                className="block px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-2 min-[2500px]:py-3 min-[3800px]:py-4 navbar hover:bg-slate-50 hover:text-[#003470] transition-colors"
              >
                Cobalt Crome Femoral
              </Link>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="#contact"
            className="navbar leading-normal text-white hover:text-[#DBB001] transition-colors"
          >
            Contact
          </Link>

          {/* Privacy Policy */}
          <Link
            href="#privacy"
            className="navbar leading-normal text-white hover:text-[#DBB001] transition-colors whitespace-nowrap"
          >
            Privacy Policy / Datecnschutzerklarung
          </Link>

          {/* Product Catalog */}
          <Link
            href="#catalog"
            className="navbar leading-normal text-white hover:text-[#DBB001] transition-colors whitespace-nowrap"
          >
            Product Catalog
          </Link>
        </nav>

        {/* Right: Language Selector & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Language options"
            >
              <div className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-[76px] min-[3800px]:h-[76px] rounded-full bg-[#DBB001] flex items-center justify-center text-[#003470] shadow-sm">
                <Globe className="w-[19px] h-[19px] min-[2500px]:w-[28px] min-[2500px]:h-[28px] min-[3800px]:w-[38px] min-[3800px]:h-[38px] text-white" strokeWidth={1.75} />
              </div>
              <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white text-slate-800 shadow-xl rounded-md py-2 min-[2500px]:py-3 min-[3800px]:py-4 w-36 min-[2500px]:w-52 min-[3800px]:w-64 border border-slate-100 z-50">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(false)}
                  className="w-full text-left px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-1.5 min-[2500px]:py-2.5 min-[3800px]:py-3 navbar hover:bg-slate-50 font-medium text-[#003470]"
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(false)}
                  className="w-full text-left px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-1.5 min-[2500px]:py-2.5 min-[3800px]:py-3 navbar hover:bg-slate-50 text-slate-600"
                >
                  Deutsch
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1026px]:hidden p-2 text-white hover:text-[#DBB001] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1026px]:hidden absolute top-full left-0 w-full bg-[#002654] border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white shadow-2xl animate-in slide-in-from-top duration-300">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar font-medium py-2 border-b border-white/10 text-[#DBB001]"
          >
            Home
          </Link>
          <Link
            href="#pharmaceutical"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-white/10 hover:text-[#DBB001]"
          >
            Biotech Pharmaceutical
          </Link>
          <Link
            href="#surgical-technique"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-white/10 hover:text-[#DBB001]"
          >
            Surgical Technique
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-white/10 hover:text-[#DBB001]"
          >
            Contact
          </Link>
          <Link
            href="#privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-white/10 hover:text-[#DBB001]"
          >
            Privacy Policy / Datecnschutzerklarung
          </Link>
          <Link
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 hover:text-[#DBB001]"
          >
            Product Catalog
          </Link>
        </div>
      )}
    </header>
  );
}
