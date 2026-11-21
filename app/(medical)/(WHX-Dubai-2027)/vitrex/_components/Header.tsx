"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ArrowRight } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Downloads", id: "downloads" },
  { name: "CDMO", id: "cdmo" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
  { name: "Company", id: "about" },
];

/**
 * Header Navigation Component - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Scroll-Adaptive States:
 *    - "initial": Clean bar on top.
 *    - "fixed": Slides down as sticky top bar with blur/shadow when scrolling.
 * 2. Responsive Mobile Drawer:
 *    - Full slide-down drawer with body scroll lock when open.
 * 3. 4K & Ultra-wide scaling:
 *    - Scaled logo height, text size, and padding across breakpoints up to min-[3800px].
 */
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

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
      const hero = document.getElementById("home");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        // Navbar comes smoothly and fixed at top once user reaches the end of hero section
        setIsVisible(heroBottom <= 80);
      } else {
        setIsVisible(window.scrollY >= window.innerHeight - 80);
      }

      // Active section scroll spy
      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveLink(sec.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out bg-white shadow-md border-b border-gray-200 ${
        isVisible || mobileMenuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container py-3 sm:py-3.5 min-[2500px]:py-5 min-[3800px]:py-8">
        <div className="w-full flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="Vitrex Medical Group Home"
          >
            <img
              src="/medical/vitrex/logo.webp"
              alt="VMG Vitrex Medical Group Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2000px]:h-14 min-[2500px]:h-[70px] min-[3800px]:h-[100px] w-auto object-contain transition-transform"
            />
          </Link>

          {/* Center: Desktop Navigation - Uses exact Inogen/Deleo .navbar pattern matching normal paragraph size */}
          <nav className="hidden xl:flex items-center justify-center space-x-6 2xl:space-x-8 2k:space-x-12 4k:space-x-16 bg-white">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none ${
                    isActive
                      ? "text-[#1B4298] !font-bold"
                      : "text-[#202020] hover:text-[#1B4298] font-semibold"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] 2k:h-[3px] 4k:h-[5px] bg-[#1B4298] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Search Box */}
          <div className="hidden xl:flex items-center shrink-0 z-10">
            <div className="flex items-center gap-2 2k:gap-4 4k:gap-6 border border-[#1B4298] rounded-[10px] 2k:rounded-[16px] 4k:rounded-[22px] px-3.5 py-1.5 2k:px-6 2k:py-3 4k:px-8 4k:py-4 bg-white shadow-xs">
              <Search className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#1B4298]" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-24 lg:w-32 2k:w-52 4k:w-72 outline-none text-[#1B4298] placeholder-[#1B4298] font-semibold text-[0.8125rem] lg:text-[0.9375rem] 2k:text-[1.3125rem] 4k:text-[1.9375rem] bg-transparent"
              />
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-800 hover:text-[#1B4298] focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Coverage Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full h-[calc(100dvh-60px)] sm:h-[calc(100dvh-70px)] bg-white border-t border-gray-100 overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
            {/* Search Box */}
            <div className="flex items-center gap-3 border border-[#1B4298] rounded-[10px] px-4 py-2.5 sm:py-3 bg-white shadow-xs">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B4298] shrink-0" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none text-[#1B4298] placeholder-[#1B4298] font-semibold text-[0.875rem] sm:text-[1rem] bg-transparent"
              />
            </div>

            {/* Navigation Links with Dividers */}
            <nav className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar flex items-center justify-between py-3.5 sm:py-4 transition-colors ${
                      isActive
                        ? "text-[#1B4298] !font-bold"
                        : "text-[#202020] hover:text-[#1B4298] font-semibold"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-[#1B4298]" : "bg-transparent"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom Action / CTA */}
          <div className="pt-6 border-t border-gray-100 w-full max-w-lg mx-auto">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full bg-[#1B4298] hover:bg-[#143376] text-white font-semibold py-3 sm:py-3.5 rounded-[10px] flex items-center justify-center gap-2 text-[0.875rem] sm:text-[1rem] transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

