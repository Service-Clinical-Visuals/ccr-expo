"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", active: true },
  { name: "Who We Are", href: "#about" },
  { name: "Certifications", href: "#certifications" },
  { name: "Products", href: "#products", dropdown: true },
  { name: "Support Portal", href: "#support" },
  { name: "News", href: "#news" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white h-[70px] md:h-[80px] 2xl:h-[96px] min-[2500px]:h-[130px] min-[3800px]:h-[170px] flex items-center">
      <div className="custom-container flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/endomed/logo.png"
            alt="Medici by Endomed"
            className="w-[120px] md:w-[140px] lg:w-[150px] 2xl:w-[180px] min-[2500px]:w-[240px] min-[3800px]:w-[320px] h-auto object-contain"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`navbar flex items-center gap-1 min-[3800px]:gap-2 transition-colors ${link.active
                ? "text-primary font-semibold"
                : "text-[#111111] hover:text-primary"
                }`}
            >
              {link.name}
              {link.dropdown && (
                <ChevronDown className="w-4 h-4 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2.5} />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-4 2xl:gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12">
          <button
            type="button"
            className="flex items-center gap-2 min-[3800px]:gap-4 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src="/medical/endomed/flag.webp"
              alt="English"
              className="w-[30px] 2xl:w-[36px] min-[2500px]:w-[48px] min-[3800px]:w-[64px] h-auto object-contain"
            />
            <ChevronDown className="w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#111111]" strokeWidth={2.5} />
          </button>

          <Link
            href="#contact"
            className="navbar bg-primary hover:bg-primary-hover text-white px-6 py-2 2xl:px-9 2xl:py-3 min-[2500px]:px-12 min-[2500px]:py-4 min-[3800px]:px-16 min-[3800px]:py-6 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#111111]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col p-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`navbar flex items-center justify-between py-3 px-4 border-b border-gray-50 ${link.active ? "text-primary font-semibold" : "text-[#111111]"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              {link.dropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
          <div className="flex items-center gap-2 py-3 px-4">
            <img src="/medical/endomed/flag.webp" alt="English" className="w-[28px] h-auto" />
            <ChevronDown className="w-4 h-4 text-[#111111]" />
          </div>
          <Link
            href="#contact"
            className="navbar mt-2 bg-primary text-white px-4 py-3 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
