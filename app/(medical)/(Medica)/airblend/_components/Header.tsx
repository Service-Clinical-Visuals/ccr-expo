"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About us", id: "about" },
  { name: "Industries", id: "products-section" },
  { name: "Contact Us", id: "contact" },
];

/**
 * Header Navigation Component - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Responsive Breakpoints:
 *    - Mobile & Tablet: < 1301px (clean hamburger toggle + solid dropdown card).
 *    - Desktop: >= 1301px (strictly horizontally centered nav links + right CTA).
 * 2. Scroll-Adaptive States:
 *    - "initial": Floating pill-card positioned near top (top-4 sm:top-5 lg:top-6)
 *      with border: 1px solid rgba(0,0,0,0.24) and rounded-[19px].
 *    - "hidden": Slides out of view during scroll (disabled when mobile menu is open).
 *    - "fixed": Slides down as sticky top bar with frosted glass background.
 * 3. Mobile / Tablet Navigation:
 *    - Solid opaque card (bg-white) attached directly below the header bar.
 *    - Full viewport backdrop overlay (bg-black/40) for high contrast and click-outside dismissal.
 */
const Header = () => {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "fixed">("initial");
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

  const handleContactClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveLink("contact");
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Keep header pinned while mobile menu is open
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const threshold = heroHeight - 120;

      if (scrollY <= 30) {
        setHeaderState("initial");
      } else if (scrollY > 30 && scrollY < threshold) {
        setHeaderState("hidden");
      } else {
        setHeaderState("fixed");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

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

  const isFixed = headerState === "fixed";
  const isHidden = headerState === "hidden" && !mobileMenuOpen;

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "transform-none opacity-100 pointer-events-auto"
      } ${
        isFixed
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-3 2k:py-5 4k:py-8 border-b border-gray-200"
          : "top-4 sm:top-5 lg:top-6 2k:top-8 4k:top-12"
      }`}
    >
      {/* Mobile/Tablet Dimmed Backdrop Overlay (Click to Dismiss) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/45 backdrop-blur-[2px] z-40 min-[1301px]:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="custom-container relative z-50">
        {/* Main Header Pill Container */}
        <div
          className={`w-full flex items-center justify-between gap-4 transition-all duration-300 relative ${
            isFixed
              ? "bg-transparent rounded-none px-0"
              : "border border-black/25 rounded-[19px] bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 2k:py-4 4k:py-6"
          }`}
        >
          {/* Left: Airblend Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10 origin-left"
            aria-label="Airblend Home"
          >
            <img
              src="/medical/airblend/logo.webp"
              alt="Airblend Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 2k:h-12 4k:h-14 w-auto object-contain transform scale-120 sm:scale-125 lg:scale-135 2k:scale-135 4k:scale-135 origin-left transition-transform"
            />
          </Link>

          {/* Center: Desktop Navigation - Strictly horizontally centered (>=1301px) */}
          <nav className="hidden min-[1301px]:flex items-center justify-center space-x-7 2xl:space-x-10 2k:space-x-14 4k:space-x-20 absolute left-1/2 -translate-x-1/2 z-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none text-center ${
                    isActive
                      ? "text-[#7BC142] !font-semibold underline underline-offset-[8px] decoration-2"
                      : "text-[#2A2A2A] hover:text-[#7BC142] font-normal"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Get in Touch Button (Desktop >=1301px) */}
          <div className="hidden min-[1301px]:flex items-center shrink-0 z-10">
            <Button
              text="Get in Touch"
              href="#contact"
              variant="primary"
            />
          </div>

          {/* Mobile & Tablet Hamburger / Close Button (<1301px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1301px]:hidden p-2 sm:p-2.5 rounded-xl text-[#2A2A2A] hover:text-[#7BC142] hover:bg-black/5 active:scale-95 transition-all focus:outline-none z-50 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
            ) : (
              <Menu className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Attached Navigation Dropdown Card (<1301px) */}
        {mobileMenuOpen && (
          <div className="min-[1301px]:hidden mt-2.5 sm:mt-3 bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] p-5 sm:p-7 border border-gray-200/90 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-100px)] overflow-y-auto z-50">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`text-base sm:text-lg font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-[#7BC142]/10 text-[#7BC142] font-semibold"
                        : "text-[#2A2A2A] hover:bg-gray-50 hover:text-[#7BC142]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] shrink-0" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-start sm:justify-center">
              <Button
                text="Get in Touch"
                href="#contact"
                onClick={handleContactClick}
                variant="primary"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
