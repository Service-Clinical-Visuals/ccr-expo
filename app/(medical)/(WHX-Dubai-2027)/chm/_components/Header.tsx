/**
 * Header Navigation Component for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Zinnanti Surgical Standards):
 * 1. Scroll-Adaptive States:
 *    - "initial": Floating pill-card with border, backdrop blur, and elevation shadow.
 *    - "fixed": Sticky top navigation bar on scroll.
 * 2. Typography:
 *    - Navlink texts use the fluid .navbar class which matches normal paragraph text scaling
 *      across mobile, tablet, desktop, 2K, and 4K viewports without overriding fixed text-sm.
 * 3. Responsive Scaling:
 *    - Logo, button, and icons scale up smoothly on 2K and 4K viewports.
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
  { name: "Medical solutions", id: "solutions" },
  { name: "Resources", id: "resources" },
  { name: "Competences", id: "competences" },
  { name: "ChM Academy", id: "academy" },
  { name: "News", id: "news" },
];

export default function Header() {
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
              : "border border-black/20 rounded-[19px] 2k:rounded-[28px] 4k:rounded-[38px] bg-white/90 backdrop-blur-md shadow-md px-4 sm:px-6 lg:px-8 2k:px-12 4k:px-16 py-2 sm:py-2.5 2k:py-4 4k:py-6"
          }`}
        >
          {/* Left: ChM Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="ChM Home"
          >
            <img
              src="/medical/chm/logo.webp"
              alt="ChM Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-12 2k:h-16 4k:h-24 w-auto object-contain transition-transform transform scale-110 sm:scale-125 origin-left"
            />
          </Link>

          {/* Center: Desktop Navigation - Uses exact fluid .navbar typography */}
          <nav className="hidden xl:flex items-center justify-center space-x-7 2xl:space-x-9 2k:space-x-14 4k:space-x-20 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none ${
                    isActive
                      ? "text-[#A41E27] font-semibold underline underline-offset-[8px] decoration-2"
                      : "text-[#2A2A2A] hover:text-[#A41E27]"
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Explore Products Button */}
          <div className="hidden xl:flex items-center shrink-0 z-10">
            <Button
              text="Explore Products"
              href="#products"
              variant="white"
            />
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#A41E27] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar py-1.5 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#A41E27] font-bold border-l-4 border-[#A41E27] pl-3"
                        : "text-gray-700 hover:text-[#A41E27] pl-3"
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Button
                text="Explore Products"
                href="#products"
                variant="white"
                className="w-full justify-between"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
