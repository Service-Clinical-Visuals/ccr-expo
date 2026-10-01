"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "HR", id: "hr" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
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

  // Lock body scroll when mobile menu is open
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
        isScrolled || mobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#0B1C30] text-[#C1C7D4] text-xs sm:text-[13px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] py-2.5 min-[2500px]:py-4 min-[3800px]:py-6 px-4 sm:px-8 border-b border-white/10">
        <div className="custom-container flex flex-wrap items-center justify-between gap-3 min-[2500px]:gap-6">
          {/* Left contact info */}
          <div className="flex items-center gap-4 sm:gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14">
            <a
              href="tel:+905494673702"
              className="flex items-center gap-1.5 min-[2500px]:gap-3 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-[#C1C7D4]" />
              <span className="font-semibold tracking-wide">+90 549 467 37 02</span>
            </a>
            <a
              href="mailto:info@hipokrat.com.tr"
              className="flex items-center gap-1.5 min-[2500px]:gap-3 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-[#C1C7D4]" />
              <span className="font-semibold tracking-wide">info@hipokrat.com.tr</span>
            </a>
          </div>

          {/* Right certification and language */}
          <div className="flex items-center gap-4 sm:gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14">
            <div className="hidden sm:flex items-center gap-1.5 min-[2500px]:gap-3 text-[#C1C7D4]">
              <ShieldCheck className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-[#0082CB]" />
              <span className="font-semibold tracking-wider text-[11px] sm:text-xs min-[2500px]:text-[18px] min-[3800px]:text-[24px]">
                MDR & ISO 13485 CERTIFIED
              </span>
            </div>

            <div className="flex items-center gap-1 min-[2500px]:gap-2 text-xs min-[2500px]:text-[20px] min-[3800px]:text-[26px] font-semibold">
              <span className="cursor-pointer text-[#C1C7D4] hover:text-white transition-colors">
                TR
              </span>
              <span className="text-[#717783]">|</span>
              <span className="cursor-pointer text-[#A5C8FF] hover:text-white font-bold transition-colors">
                EN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="h-[72px] sm:h-[80px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center">
          <div className="custom-container flex items-center justify-between gap-4 w-full">
            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0"
              aria-label="Hipokrat Home"
            >
              <img
                src="/medical/hipokrat/logo.png"
                alt="Hipokrat Logo"
                className="h-8 sm:h-9 md:h-10 min-[2500px]:h-[56px] min-[3800px]:h-[80px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7 2xl:space-x-9 min-[2500px]:space-x-14 min-[3800px]:space-x-20 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative cursor-pointer py-2 transition-colors navbar text-[15px] 2xl:text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[34px] ${
                      isActive
                        ? "text-[#0082CB] font-semibold"
                        : "text-[#111111] hover:text-[#0082CB]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] min-[2500px]:h-[5px] min-[3800px]:h-[6px] bg-[#0082CB] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Request Quote Button (Desktop only; on tablet and mobile it is inside the menu) */}
            <div className="hidden xl:flex items-center shrink-0">
              <a
                href="#contact"
                className="header-quote-btn bg-[#0082CB] hover:bg-[#006fae] text-white shadow-sm active:scale-95 flex items-center justify-center cursor-pointer"
              >
                Request Quote
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="xl:hidden p-2 text-[#0B1C30] hover:text-[#0082CB] transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="border-b border-gray-100 pb-3">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`block py-1 text-base font-medium transition-colors ${
                      isActive ? "text-[#0082CB] font-bold" : "text-[#111111]"
                    }`}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-block text-center bg-[#0082CB] hover:bg-[#006fae] text-white font-semibold py-3 rounded-full shadow-sm transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
