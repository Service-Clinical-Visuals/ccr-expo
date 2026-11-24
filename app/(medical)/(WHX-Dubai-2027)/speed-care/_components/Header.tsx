/**
 * Header Navigation Component
 * Master Reference: Inogen & Zinnanti Surgical Development Standards
 *
 * 1. Scroll-Triggered Visibility:
 *    - Initially completely invisible while on the hero section (`-translate-y-full opacity-0 pointer-events-none`).
 *    - Once the user scrolls past the end of the hero section, the header smoothly slides down (`translate-y-0 opacity-100`) and fixes at top.
 * 2. Responsive Breakpoint:
 *    - Desktop layout active from 1301px onwards.
 *    - Mobile/tablet layout drawer strictly active up to 1300px.
 * 3. Typography:
 *    - Navlink text sizes matched with unified standard body paragraph scale.
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
  active?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home", active: true },
  { name: "About Us", id: "about" },
  { name: "speedm®", id: "solutions" },
  { name: "Live - Saving Technology", id: "technology" },
  { name: "Quality Management", id: "performance" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

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
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      
      // Threshold: Once user reaches scrolling end of hero section (heroHeight - 100px)
      const threshold = heroHeight - 100;

      if (scrollY >= threshold) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out bg-white border-b border-gray-200 ${
        isHeaderVisible
          ? "translate-y-0 opacity-100 pointer-events-auto shadow-md py-3 2k:py-5 4k:py-7"
          : "-translate-y-full opacity-0 pointer-events-none py-3"
      }`}
    >
      <div className="custom-container">
        <div className="w-full flex items-center justify-between gap-4 2k:gap-8 4k:gap-12">
          
          {/* 1. Left: Speed Care Mineral Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0 z-10"
              aria-label="Speed Care Mineral Home"
            >
              <img
                src="/medical/speed-care/logo.webp"
                alt="Speed Care Mineral Logo"
                className="h-10 sm:h-12 lg:h-14 2k:h-22 4k:h-32 w-auto object-contain transition-transform"
              />
            </Link>
          </div>

          {/* 2. Center: Desktop Nav Links (Horizontally Centered in Header) */}
          <nav className="hidden min-[1301px]:flex items-center justify-center space-x-5 xl:space-x-8 2k:space-x-12 4k:space-x-16 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1 text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl transition-colors font-body ${
                    isActive
                      ? "text-[#E62730] !font-bold"
                      : "text-[#1E1E1E]/75 hover:text-[#E62730] font-normal"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* 3. Right: Search + Order Button + Language Selector */}
          <div className="hidden min-[1301px]:flex flex-1 items-center justify-end gap-4 xl:gap-5 2k:gap-8 4k:gap-12 shrink-0">
            {/* Search Icon Circle */}
            <button
              type="button"
              className="w-10 h-10 2k:w-16 2k:h-16 4k:w-24 4k:h-24 rounded-full bg-[#5C5C5C]/10 hover:bg-[#5C5C5C]/20 flex items-center justify-center text-[#5C5C5C] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4 2k:w-7 2k:h-7 4k:w-11 4k:h-11" />
            </button>

            {/* Order Button */}
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-[#E62730] hover:bg-[#c91f27] text-white font-semibold font-body px-5 py-2 2k:px-8 2k:py-3 4k:px-13 4k:py-4.5 rounded-full flex items-center gap-2 2k:gap-4 4k:gap-6 text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#E62730]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 2k:w-7 2k:h-7 4k:w-11 4k:h-11" />
              <span>Order</span>
            </Link>

            {/* Language Selector */}
            <div className="font-heading font-semibold text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#1E1E1E] tracking-wide cursor-pointer select-none">
              <span className="text-[#E62730]">DE</span>
              <span className="text-gray-400 mx-1 2k:mx-2">|</span>
              <span className="text-[#1E1E1E] hover:text-[#E62730] transition-colors">EN</span>
            </div>
          </div>

          {/* 4. Mobile & Tablet Hamburger Button (Active up to 1300px) */}
          <div className="min-[1301px]:hidden flex items-center gap-3">
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-[#5C5C5C]/10 flex items-center justify-center text-[#5C5C5C]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1E1E] hover:text-[#E62730] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#1E1E1E]" />
              ) : (
                <Menu className="w-7 h-7 text-[#1E1E1E]" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="min-[1301px]:hidden mt-3 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`text-sm sm:text-base font-medium py-1.5 transition-colors font-body ${
                      isActive
                        ? "text-[#E62730] font-bold pl-3 border-l-4 border-[#E62730]"
                        : "text-gray-700 hover:text-[#E62730] pl-3"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="bg-[#E62730] hover:bg-[#c91f27] text-white font-semibold font-body py-2 px-5 rounded-full flex items-center gap-2 text-sm transition-all shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order</span>
              </Link>

              <div className="font-heading font-semibold text-sm text-[#1E1E1E]">
                <span className="text-[#E62730]">DE</span>
                <span className="text-gray-400 mx-1">|</span>
                <span>EN</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
