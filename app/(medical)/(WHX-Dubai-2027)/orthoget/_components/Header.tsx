/**
 * Header Navigation Component - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Fixed / Sticky navigation with smooth transition and frosted backdrop blur.
 * 2. Responsive mobile drawer with body scroll lock.
 * 3. Exact design matching Figma:
 *    - Dark theme (#111111) with clean border.
 *    - OrthoGet logo on left (/medical/orthoget/logo.webp).
 *    - Desktop nav links in center: Home, About Us, Technology, Products, News, Teams.
 *    - "Contact Us" CTA button on right with arrow icon and border.
 */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Technology", id: "technology" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
  { name: "Teams", id: "teams" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const threshold = heroHeight - 80;

      setIsVisible(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out bg-[#111111]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5 sm:py-4 min-[2500px]:py-6 min-[3800px]:py-9 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="w-full flex items-center justify-between gap-4">
          
          {/* Logo on Left */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10 origin-left"
            aria-label="OrthoGet Home"
          >
            <img
              src="/medical/orthoget/logo.webp"
              alt="OrthoGet"
              className="h-7.5 sm:h-8.5 md:h-9.5 lg:h-10 min-[2500px]:h-15 min-[3800px]:h-22 w-auto object-contain transform scale-105 sm:scale-110 md:scale-112 lg:scale-115 min-[2500px]:scale-[1.3] min-[3800px]:scale-[1.65] origin-left transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links in Center */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 2xl:gap-11 min-[2500px]:gap-16 min-[3800px]:gap-24">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`navbar tracking-wide transition-all duration-200 relative py-1 ${
                  activeLink === link.id
                    ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--color-primary)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right: Contact Us Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 border border-white text-white hover:bg-white hover:text-[#111111] rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] transition-all duration-300 hover:shadow-lg group"
            >
              <span className="button whitespace-nowrap">Contact Us</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-[#111111]/98 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-6 px-6 opacity-100 shadow-2xl" : "max-h-0 py-0 px-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={`font-exo2 text-base font-medium transition-colors ${
                activeLink === link.id ? "text-[var(--color-primary)] font-semibold" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white text-white hover:bg-white hover:text-[#111111] rounded-[10px] font-exo2 font-semibold text-sm transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

