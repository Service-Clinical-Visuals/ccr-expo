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
  { name: "Products", id: "products" },
  { name: "Applications", id: "applications" },
  { name: "About Us", id: "about" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#121111] transition-all duration-300 ${
          isScrolled ? "shadow-xl" : "shadow-sm"
        }`}
      >
        {/* Top Strip (#121111, Height: 10px) */}
        <div className="w-full h-[8px] sm:h-[10px] min-[2500px]:h-[16px] min-[3800px]:h-[24px] bg-[#121111]"></div>

        {/* Grey Navbar Strip (Height: 64-66px, bg: #272727) */}
        <div className="w-full h-[58px] sm:h-[64px] lg:h-[66px] min-[2500px]:h-[96px] min-[3800px]:h-[130px] bg-[#272727] border-y border-black/25 flex items-center relative z-10 shadow-sm">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full">
            {/* Left: Logo */}
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0"
              aria-label="Lasotronix Home"
            >
              <img
                src="/medical/lasotronix/logo.webp"
                alt="Lasotronix Logo"
                className="h-7 sm:h-8 md:h-9 min-[2500px]:h-[50px] min-[3800px]:h-[74px] w-auto object-contain"
              />
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative cursor-pointer py-1.5 transition-colors navbar uppercase tracking-[0.8px] ${
                      isActive
                        ? "text-[var(--color-primary)] font-semibold underline underline-offset-4"
                        : "text-white hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: CTA Button (Hidden on iPad Pro / tablet < xl, accessible inside 3 lines menu) */}
            <div className="hidden xl:flex items-center shrink-0">
              <Button
                text="Get in Touch"
                href="#contact"
                variant="primary"
                className="!py-2 !px-4.5 min-[3800px]:!py-4 min-[3800px]:!px-10 text-xs sm:text-sm"
              />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="xl:hidden text-white p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Strip (#121111, Height: 10px) */}
        <div className="w-full h-[8px] sm:h-[10px] min-[2500px]:h-[16px] min-[3800px]:h-[24px] bg-[#121111]"></div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#1c1c1c] shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-white/10 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 transition-colors navbar uppercase tracking-[0.8px] ${
                      isActive
                        ? "text-[var(--color-primary)] font-bold underline"
                        : "text-gray-200 hover:text-[var(--color-primary)]"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            <div className="pt-4 flex flex-col">
              <Button text="Get in Touch" href="#contact" variant="primary" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
