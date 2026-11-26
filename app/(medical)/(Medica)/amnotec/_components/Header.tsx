"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "IFU", id: "ifu" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

/**
 * AMNOTEC Header Navigation Component
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Desktop layout: active from 1036px onwards
 * - Tablet layout: active throughout 768px - 1035px
 * - Clean white background (#FFFFFF) with 80px height
 * - AMNOTEC logo on the left
 * - Nav links in DM Sans 16px (Home is bold active)
 * - "PRODUCT REFERENCE SEARCH" button with search icon in #134093
 */
const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      // Header becomes visible once user reaches end of hero section
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white transition-all duration-500 ease-in-out shadow-md py-3.5 sm:py-4 min-[2500px]:py-6 min-[3800px]:py-8 border-b border-gray-200 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container relative flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <Link
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="flex items-center shrink-0 z-10"
          aria-label="AMNOTEC Home"
        >
          <img
            src="/medical/amnotec/logo.webp"
            alt="AMNOTEC Logo"
            className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2000px]:h-14 min-[2500px]:h-[80px] min-[3800px]:h-[130px] w-auto object-contain transition-transform"
          />
        </Link>

        {/* Center: Desktop Navigation - Horizontally Centered */}
        <nav className="hidden min-[1036px]:flex items-center justify-center gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`navbar transition-colors duration-200 select-none ${
                  isActive
                    ? "text-[#000000] font-bold"
                    : "text-[#000000] hover:text-[#134093] font-normal"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: PRODUCT REFERENCE SEARCH Button */}
        <div className="hidden min-[1036px]:flex items-center shrink-0 z-10">
          <Link
            href="#products"
            onClick={(e) => handleScrollTo(e, "products")}
            className="bg-[#134093] hover:bg-[#0e2f6d] text-white font-semibold text-xs lg:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl px-4 py-2.5 min-[2500px]:px-7 min-[2500px]:py-3.5 min-[3800px]:px-10 min-[3800px]:py-5 rounded-[5px] min-[2500px]:rounded-[8px] min-[3800px]:rounded-[12px] flex items-center gap-2.5 min-[2500px]:gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span className="font-jakarta tracking-wide uppercase">Product Reference Search</span>
            <Search className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="min-[1036px]:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-800 hover:text-[#134093] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
            ) : (
              <Menu className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1036px]:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`text-base py-2 transition-colors ${
                    isActive
                      ? "text-[#134093] font-bold border-l-4 border-[#134093] pl-3"
                      : "text-gray-800 hover:text-[#134093] pl-3"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-gray-100">
            <Link
              href="#products"
              onClick={(e) => handleScrollTo(e, "products")}
              className="w-full bg-[#134093] hover:bg-[#0e2f6d] text-white font-semibold py-2.5 rounded-[5px] flex items-center justify-center gap-2 text-sm uppercase tracking-wide transition-all shadow-sm"
            >
              <span>Product Reference Search</span>
              <Search className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
