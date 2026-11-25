"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SunopticLogo from "./SunopticLogo";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "BioMed", id: "technology" },
  { name: "Resources", id: "quality" },
  { name: "Blog", id: "insights" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [visible, setVisible] = useState(false);

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
      // Calculate bottom of hero section
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      // Header becomes visible and fixed at top once user scrolls past the end of hero section
      const show = window.scrollY >= heroBottom - 80;
      setVisible(show);
      if (!show) {
        setMobileMenuOpen(false);
      }

      // Update active nav link based on scroll position
      const scrollPos = window.scrollY + 150;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveLink(navLinks[i].id);
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
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md py-3 2k:py-5 4k:py-8 border-b border-gray-100 transition-all duration-300 ease-in-out ${visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="custom-container relative">
        <div className="w-full flex items-center justify-between gap-4">
          {/* Logo (Slightly increased in size using transform scale) */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10 overflow-visible"
            aria-label="Sunoptic Surgical Home"
          >
            <SunopticLogo className="h-9 sm:h-10 md:h-11 lg:h-12 2k:h-[72px] 4k:h-[105px] w-auto transform scale-110 2k:scale-115 4k:scale-120 origin-left transition-transform" />
          </Link>

          {/* Desktop Navigation - Strictly Horizontally Centered (Active from 1036px) */}
          <nav className="hidden min-[1036px]:flex sunoptic-desktop-only items-center justify-center space-x-6 xl:space-x-8 2k:space-x-12 4k:space-x-16 absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1 transition-colors select-none font-['DM_Sans',sans-serif] ${isActive
                      ? "text-[#000000] !font-bold"
                      : "text-gray-800 hover:text-[#911920] font-normal"
                    }`}
                >
                  <span className="navbar">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button (Active from 1036px) */}
          <div className="hidden min-[1036px]:flex sunoptic-desktop-only items-center shrink-0 z-10">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-[#911920] hover:bg-[#731319] text-white font-['Palanquin',sans-serif] font-semibold px-5 py-2.5 2k:px-8 2k:py-3.5 4k:px-12 4k:py-5 rounded-[5px] 2k:rounded-[8px] 4k:rounded-[12px] flex items-center transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg hover:shadow-[#911920]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group cursor-pointer"
            >
              <span className="button whitespace-nowrap">Schedule Your Free Trial</span>
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Toggle Button (Active up to 1035px) */}
          <div className="min-[1036px]:hidden sunoptic-mobile-tablet-only flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#911920] focus:outline-none"
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

        {/* Mobile & Tablet Navigation Drawer (Active up to 1035px) */}
        {mobileMenuOpen && (
          <div className="min-[1036px]:hidden sunoptic-mobile-tablet-only mt-3 bg-white rounded-xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar py-1.5 transition-colors font-['DM_Sans',sans-serif] ${isActive
                        ? "text-[#911920] font-bold border-l-4 border-[#911920] pl-3"
                        : "text-gray-700 hover:text-[#911920] pl-3"
                      }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full bg-[#911920] hover:bg-[#731319] text-white font-['Palanquin',sans-serif] font-semibold py-2.5 rounded-[5px] flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-md active:scale-95 group cursor-pointer"
              >
                <span className="button whitespace-nowrap">Schedule Your Free Trial</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
