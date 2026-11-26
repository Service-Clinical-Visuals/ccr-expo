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
 * 1. Scroll-Adaptive States:
 *    - "initial": Floating pill-card positioned near top (top-4 sm:top-5 lg:top-6)
 *      with border: 1px solid rgba(0,0,0,0.24) and rounded-[19px].
 *    - "hidden": Slides out of view during hero scroll.
 *    - "fixed": Slides down as sticky top bar with frosted glass background.
 * 2. Strictly Horizontally Centered Navigation Links:
 *    - Positioned with `absolute left-1/2 -translate-x-1/2` and `text-center`.
 *    - Text size matches the normal paragraph text scale (`.navbar` class matching `p`).
 * 3. Multi-tier Responsive Scaling up to 4K (referencing zinnanti-surgical-1).
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

  useEffect(() => {
    const handleScroll = () => {
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

  const isFixed = headerState === "fixed";
  const isHidden = headerState === "hidden";

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isFixed
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-3 2k:py-5 4k:py-8 border-b border-gray-200"
          : "top-4 sm:top-5 lg:top-6 2k:top-8 4k:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full flex items-center justify-between gap-4 transition-all duration-300 relative ${
            isFixed
              ? "bg-transparent rounded-none px-0"
              : "border border-black/25 rounded-[19px] bg-white/90 backdrop-blur-sm shadow-sm px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 2k:py-4 4k:py-6"
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

          {/* Center: Desktop Navigation - Strictly horizontally centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-7 2xl:space-x-10 2k:space-x-14 4k:space-x-20 absolute left-1/2 -translate-x-1/2 z-10">
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

          {/* Right: Get in Touch Button (Desktop) */}
          <div className="hidden lg:flex items-center shrink-0 z-10">
            <Button
              text="Get in Touch"
              href="#contact"
              variant="primary"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:text-[#7BC142] focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
            ) : (
              <Menu className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white/98 backdrop-blur-xl z-40 transition-all duration-300 flex flex-col p-6 shadow-2xl ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 mt-4">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`text-xl font-medium py-2 border-b border-gray-100 transition-colors ${
                  isActive ? "text-[#7BC142] font-semibold" : "text-[#2A2A2A]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4">
            <Button
              text="Get in Touch"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-between"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
