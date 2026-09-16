"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past a portion of the hero section
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Institutional", href: "#institutional" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white lg:shadow-sm h-[90px] min-[3800px]:h-[160px] flex items-center border-b border-gray-100 transition-transform duration-300 ${isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/ases/logo.png"
            alt="Ases Logo"
            className="w-[160px] md:w-[200px] min-[3800px]:w-[350px] h-auto object-contain"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-[Inter] text-[17px] min-[3800px]:text-[34px] transition-colors ${link.active
                ? "text-[#BA0A28] font-bold underline underline-offset-[6px] decoration-2"
                : "text-[#444444] hover:text-[#BA0A28] font-regular"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-5 min-[3800px]:gap-10">
          <Link
            href="#documents"
            className="bg-[#BA0A28] text-white px-6 py-3 min-[3800px]:px-12 min-[3800px]:py-6 min-[3800px]:rounded-[8px] rounded-[4px] font-[Inter] font-bold text-[17px] min-[3800px]:text-[34px] hover:bg-[#900820] transition-colors shadow-sm"
          >
            Documents
          </Link>

          {/* Vertical Divider */}
          <div className="w-[1px] min-[3800px]:w-[2px] h-15 min-[3800px]:h-24 bg-[#D9D9D9]"></div>

          <div className="flex items-center gap-2 min-[3800px]:gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <img src="/medical/ases/h-icon.png" alt="Language" className="w-auto h-auto min-[3800px]:w-[48px] min-[3800px]:h-[48px] object-contain" />
            <svg className="w-[15px] h-[10px] min-[3800px]:w-[25px] min-[3800px]:h-[18px]" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8L0 0H10L5 8Z" fill="#BA0A28" />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#333333]"
        >
          {mobileMenuOpen ? <X className="w-7 h-7 min-[3800px]:w-12 min-[3800px]:h-12" /> : <Menu className="w-7 h-7 min-[3800px]:w-12 min-[3800px]:h-12" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col p-4 border-t border-gray-100 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`py-3 px-4 font-[Inter] border-b border-gray-50 ${link.active ? "text-[#BA0A28] font-semibold" : "text-[#333333]"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#documents"
            className="mt-4 bg-[#BA0A28] text-white px-4 py-3 rounded font-[Inter] text-center font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Documents
          </Link>
        </div>
      )}
    </header>
  );
}
