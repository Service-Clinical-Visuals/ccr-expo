"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Solutions", id: "solutions" },
  { name: "Services", id: "services" },
  { name: "Customers", id: "customers" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

/**
 * Header Navigation Component - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Adaptive Sticky Navigation:
 *    - Clean white navigation bar with subtle shadow and border.
 *    - Smooth transitions between initial position and sticky state.
 * 2. High-DPI & 4K Display Support:
 *    - Responsive logo and typography scaling across breakpoints up to 4K (min-[3800px]).
 * 3. Mobile Navigation:
 *    - Full slide-down drawer with scroll locking.
 */
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
      const hero = document.getElementById("home");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        // Header appears when user reaches the end of hero section (bottom <= 80px)
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md shadow-md py-3 min-[2500px]:py-5 min-[3800px]:py-7 border-b border-gray-100 ${
        isVisible || mobileMenuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="w-full flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="EMTEL Home"
          >
            <img
              src="/medical/emtel/logo.webp"
              alt="EMTEL Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2500px]:h-16 min-[3800px]:h-22 w-auto object-contain transition-transform transform scale-110 sm:scale-125 min-[2500px]:scale-135 min-[3800px]:scale-150 origin-left"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center justify-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none text-sm sm:text-base font-normal font-secondary ${
                    isActive
                      ? "text-[#0F78AF] !font-bold"
                      : "text-gray-800 hover:text-[#0F78AF]"
                  }`}
                >
                  <span className="text-sm sm:text-base !text-[inherit]">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden xl:flex items-center shrink-0 z-10">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-[#0F78AF] hover:bg-[#0C6492] text-white font-semibold font-primary px-6 py-2.5 min-[2500px]:px-9 min-[2500px]:py-3.5 min-[3800px]:px-14 min-[3800px]:py-5 rounded-[20px] text-sm lg:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg hover:shadow-[#0F78AF]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              <span>Request Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#0F78AF] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar text-sm sm:text-base font-medium py-1.5 transition-colors pl-3 ${
                      isActive
                        ? "text-[#0F78AF] font-bold border-l-4 border-[#0F78AF]"
                        : "text-gray-700 hover:text-[#0F78AF]"
                    }`}
                  >
                    <span className="text-sm sm:text-base !text-[inherit]">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full bg-[#0F78AF] hover:bg-[#0C6492] text-white font-semibold font-primary py-2.5 rounded-[20px] flex items-center justify-center text-base transition-all duration-300 ease-in-out hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Request Quote</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;

