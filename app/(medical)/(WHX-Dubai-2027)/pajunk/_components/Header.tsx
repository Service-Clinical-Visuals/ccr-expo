/**
 * Header Component - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Visual Specification:
 *    - Height: 80px (h-20)
 *    - Background: Solid theme green `#144835` with sticky top-0 blur transition
 *    - Left: Official PAJUNK logo (/medical/pajunk/logo.webp)
 *    - Center: Desktop nav links (DM Sans font, 16px, white)
 *    - Right: "Distributor Login" button with white 1px border and 5px radius
 * 2. Mobile Drawer Navigation:
 *    - Hamburger toggle with body scroll lock when open.
 */
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
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Education", id: "education" },
  { name: "Career", id: "career" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
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
      const hero = document.getElementById("home");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // Reveal header when user has scrolled past / reached the end of hero section
        setShowStickyHeader(rect.bottom <= 80);
      } else {
        setShowStickyHeader(window.scrollY > window.innerHeight * 0.8);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out py-3 sm:py-3.5 bg-[#144835]/95 backdrop-blur-md shadow-lg ${
        showStickyHeader
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="w-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="PAJUNK Home"
          >
            <img
              src="/medical/pajunk/logo.webp"
              alt="PAJUNK Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 2k:h-[68px] 4k:h-[96px] w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 2k:space-x-14 4k:space-x-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar text-white/90 hover:text-white transition-colors cursor-pointer select-none py-1 relative ${
                    isActive ? "font-semibold !text-white border-b-2 border-[#DCE64D]" : "font-normal"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Distributor Login Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button
              text="Distributor Login"
              variant="outline"
              href="#login"
              showIcon={true}
              className="!py-2 !px-4 2k:!py-3.5 2k:!px-8 4k:!py-5 4k:!px-12 text-sm"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 2k:w-12 2k:h-12 4k:w-16 4k:h-16" />
              ) : (
                <Menu className="w-7 h-7 2k:w-12 2k:h-12 4k:w-16 4k:h-16" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#144835] z-40 flex flex-col justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-white text-lg font-medium py-2 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-8 pb-6">
            <Button
              text="Distributor Login"
              variant="outline"
              href="#login"
              showIcon={true}
              className="w-full text-center"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

