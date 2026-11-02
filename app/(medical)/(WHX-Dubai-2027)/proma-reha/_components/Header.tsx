"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "References", id: "references" },
  { name: "News", id: "news" },
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
      className={`fixed top-0 left-0 w-full z-50 bg-[#F9F9F9]/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white/95" : "shadow-sm"
      }`}
    >
      <div className="h-[76px] sm:h-[80px] lg:h-[88px] min-[2500px]:h-[130px] min-[3500px]:h-[210px] min-[3800px]:h-[230px] flex items-center relative z-10 w-full">
        {/* Desktop Navigation - Mathematically centered horizontally in header */}
        <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10 min-[2500px]:space-x-14 min-[3500px]:space-x-18 min-[3800px]:space-x-22 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`relative cursor-pointer py-1.5 transition-colors navbar font-secondary ${
                  isActive
                    ? "text-[#111111] font-bold"
                    : "text-[#111111]/80 hover:text-[var(--color-primary)] font-normal"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-primary)] rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="custom-container relative flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3500px]:gap-16 min-[3800px]:gap-20 w-full h-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3500px]:px-18 min-[3800px]:px-24">
          {/* Logo (80% inside header box, 20% hanging below header box, 0% above) */}
          <div className="relative shrink-0 flex items-center h-full z-30">
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="absolute bottom-0 translate-y-[20%] flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              aria-label="PROMA REHA Home"
            >
              <img
                src="/medical/proma-reha/logo.webp"
                alt="PROMA REHA Logo"
                className="h-[80px] sm:h-[85px] lg:h-[95px] min-[2500px]:h-[140px] min-[3500px]:h-[225px] min-[3800px]:h-[250px] w-auto object-contain drop-shadow-md"
              />
            </Link>
            {/* Spacer to maintain layout width in header flex row */}
            <div className="w-20 sm:w-24 md:w-28 lg:w-32 min-[2500px]:w-44 min-[3500px]:w-64 min-[3800px]:w-72 h-1 invisible pointer-events-none"></div>
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center shrink-0 z-30">
            <Button
              text="Contact Us"
              variant="primary"
              href="#contact"
              className="!px-6 !py-2.5 min-[2500px]:!px-9 min-[2500px]:!py-4 min-[3500px]:!px-14 min-[3500px]:!py-6 min-[3500px]:!text-2xl min-[3800px]:!px-16 min-[3800px]:!py-7 min-[3800px]:!text-3xl"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden text-[#111111] p-2 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3500px]:w-16 min-[3500px]:h-16 text-[#111111]" />
            ) : (
              <Menu className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3500px]:w-16 min-[3500px]:h-16 text-[#111111]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-76px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`block py-2 text-base font-secondary transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)] font-bold"
                      : "text-gray-800 hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.name}
                </a>
              </div>
            );
          })}
          <div className="pt-2">
            <Button
              text="Contact Us"
              variant="primary"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center justify-center"
            />
          </div>
        </div>
      )}
    </header>
  );
}
