"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Quality", href: "#explore" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (name: string) => {
    setActiveItem(name);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-transform duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-gray-100 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="custom-container h-[76px] sm:h-[84px] lg:h-[90px] xl:h-[96px] min-[2500px]:h-[135px] min-[3800px]:h-[170px] flex items-center justify-between">
        {/* Left: Anton Hipp Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/anton-hip/logo.webp"
            alt="Anton Hipp - Instruments & Implants"
            className="h-8 sm:h-10 md:h-11 lg:h-12 min-[2500px]:h-18 min-[3800px]:h-24 w-auto object-contain transition-all"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`navbar transition-colors duration-200 select-none ${
                  isActive
                    ? "text-[var(--color-primary)] font-medium"
                    : "text-[#222222] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center shrink-0">
          <Button
            text="Request a PSI Case"
            href="#contact"
            variant="primary"
            showArrow={true}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#222222] hover:text-[var(--color-primary)] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14" />
          ) : (
            <Menu className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col px-6 py-5 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.name)}
                  className={`navbar py-3 px-3 rounded-[6px] transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)] font-medium bg-amber-50/60"
                      : "text-[#222222] hover:text-[var(--color-primary)] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
            <Button
              text="Request a PSI Case"
              href="#contact"
              variant="primary"
              showArrow={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center"
            />
          </div>
        </div>
      )}
    </header>
  );
}
