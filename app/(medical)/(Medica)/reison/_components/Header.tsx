"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Products", id: "applications", hasDropdown: true },
  { name: "Applications", id: "applications" },
  { name: "About Us", id: "about" },
  { name: "References", id: "sustainability", hasDropdown: true },
  { name: "Contact Us", id: "contact" },
];

/**
 * Header Navigation Component - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Scroll-Adaptive States:
 *    - "initial": Floating pill-card positioned near top (`top-4 sm:top-5 lg:top-6`) with rounded
 *      pill geometry (`rounded-[100px]`), border `1px solid rgba(0, 0, 0, 0.24)`, and drop shadow.
 *    - "hidden": Slides out of view (`-translate-y-full opacity-0`) as user scrolls into hero.
 *    - "fixed": Sticks to top (`top-0 translate-y-0 opacity-100`) with frosted backdrop (`bg-white/95 backdrop-blur-md`).
 * 2. Responsive Mobile Drawer:
 *    - Full-screen slide-down drawer with scroll locking.
 * 3. Breakpoint Strategy:
 *    - Tablet layout up to 1035px (mobile menu toggle active up to 1035px, desktop nav visible from 1036px).
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
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-3 min-[2500px]:py-5 min-[3800px]:py-8 border-b border-gray-200"
          : "top-4 sm:top-5 lg:top-6 min-[2500px]:top-8 min-[3800px]:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full flex items-center justify-between gap-4 transition-all duration-300 relative ${
            isFixed
              ? "bg-transparent rounded-none px-0"
              : "bg-white/95 backdrop-blur-sm border border-black/20 rounded-[100px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] px-5 sm:px-7 lg:px-9 min-[2500px]:px-14 min-[3800px]:px-20 py-2 sm:py-2.5 min-[2500px]:py-4 min-[3800px]:py-6"
          }`}
        >
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="Reison Medical Home"
          >
            <img
              src="/medical/reison/logo.webp"
              alt="Reison Medical Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2000px]:h-14 min-[2500px]:h-[76px] min-[3800px]:h-[115px] w-auto aspect-[290/47] object-cover transition-transform"
            />
          </Link>

          {/* Center: Desktop Navigation - Horizontally Centered */}
          <nav className="hidden min-[1301px]:flex items-center justify-center space-x-6 xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none flex items-center justify-center gap-1 font-primary text-center ${
                    isActive
                      ? "text-[#2A2A2A] font-bold underline underline-offset-[8px] decoration-[#E53B14] decoration-2"
                      : "text-[#4A4A4A] hover:text-[#2A2A2A] font-normal"
                  }`}
                >
                  <span className="navbar">{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-[#E53B14]"
                      strokeWidth={2.5}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Get In Touch Button (Desktop >= 1301px) */}
          <div className="hidden min-[1301px]:flex items-center shrink-0 z-10">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="relative inline-flex items-center bg-[#2F3F5A] hover:bg-[#1e2a3d] text-white font-primary font-medium pl-5 pr-11 min-[2500px]:pl-8 min-[2500px]:pr-16 min-[3800px]:pl-12 min-[3800px]:pr-24 py-2 min-[2500px]:py-3.5 min-[3800px]:py-5 rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out group cursor-pointer"
            >
              <span className="button whitespace-nowrap">Get in Touch</span>
              <div className="absolute -right-3 min-[2500px]:-right-4 min-[3800px]:-right-6 top-1/2 -translate-y-1/2">
                <div className="w-[30px] h-[30px] min-[2500px]:w-[44px] min-[2500px]:h-[44px] min-[3800px]:w-[64px] min-[3800px]:h-[64px] bg-[#E53B14] rounded-[10px] min-[2500px]:rounded-[14px] min-[3800px]:rounded-[20px] border border-black/20 shadow-md rotate-45 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    className="w-3 h-3 min-[2500px]:w-4.5 min-[2500px]:h-4.5 min-[3800px]:w-7 min-[3800px]:h-7 text-white -rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile/Tablet Hamburger Toggle (Visible up to 1300px) */}
          <div className="min-[1301px]:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2A2A2A] hover:text-[#E53B14] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-[#2A2A2A]" />
              ) : (
                <Menu className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-[#2A2A2A]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Drawer (Active up to 1300px) */}
        {mobileMenuOpen && (
          <div className="min-[1301px]:hidden mt-2 bg-white rounded-2xl shadow-2xl p-5 border border-gray-200 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 font-primary">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar py-1.5 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#E53B14] font-bold border-l-4 border-[#E53B14] pl-3"
                        : "text-[#4A4A4A] hover:text-[#2A2A2A] pl-3"
                    }`}
                  >
                    <span className="navbar">{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-[#E53B14]" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full bg-[#2F3F5A] hover:bg-[#1e2a3d] text-white font-primary font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ease-in-out shadow-sm"
              >
                <span className="button">Get in Touch</span>
                <span className="w-2.5 h-2.5 bg-[#E53B14] rotate-45 inline-block ml-1"></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

