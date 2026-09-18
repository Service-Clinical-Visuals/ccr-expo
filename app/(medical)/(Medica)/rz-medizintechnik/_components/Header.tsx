"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const showHeader = isScrolled || mobileMenuOpen;

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

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Products", href: "#products", id: "products" },
    { name: "Downloads", href: "#downloads", id: "downloads" },
    { name: "Pursue", href: "#pursue", id: "pursue" },
    { name: "Career", href: "#career", id: "career" },
    { name: "News", href: "#news", id: "news" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
        showHeader
          ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } header-bar flex items-center border-b border-gray-100/80`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/rz-medizintechnik/logo.png"
            alt="RZ Medizintechnik — Progress in Surgery"
            className="header-logo"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center header-nav">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`font-primary font-normal navbar transition-colors duration-200 cursor-pointer select-none ${
                  isActive
                    ? "text-[#0099A1] font-medium"
                    : "text-[#000000] hover:text-[#0099A1]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Contact Us */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center header-btn bg-[#0099A1] hover:bg-[#00828a] text-white rounded-[8px] xl:rounded-[10px] min-[2500px]:rounded-[14px] min-[3800px]:rounded-[18px] transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            <span className="button whitespace-nowrap">Contact Us</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] hover:text-[#0099A1] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl px-6 py-6 flex flex-col gap-5 z-50 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-lg font-primary transition-colors ${
                  activeLink === link.id
                    ? "text-[#0099A1] font-semibold"
                    : "text-[#111111] hover:text-[#0099A1]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-center">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#0099A1] hover:bg-[#00828a] text-white rounded-[8px] font-['Open_Sans'] font-semibold text-[16px] transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
