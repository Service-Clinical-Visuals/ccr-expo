"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ShoppingCart, User } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Technologies", id: "technologies" },
  { name: "Treatment", id: "treatment" },
  { name: "News", id: "news" },
  { name: "Distribution", id: "distribution" },
  { name: "Medical world", id: "medical-world" },
  { name: "Talents", id: "talents" },
  { name: "Band", id: "band" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[var(--color-secondary)]/95 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"
          }`}
      >
        <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3800px]:px-20">
            {/* Left: Logo Section */}
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0"
              aria-label="Deleo Home"
            >
              <img
                src="/medical/deleo/logo.png"
                alt="Deleo Logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 min-[2500px]:h-[52px] min-[3800px]:h-[100px] w-auto object-contain"
              />
            </Link>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative cursor-pointer py-2 transition-colors navbar ${isActive
                      ? "text-white !font-semibold underline"
                      : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: Icons & Partner Zone */}
            <div className="hidden lg:flex items-center space-x-4 shrink-0 relative">
              <button aria-label="Language" className="p-2 rounded-full border border-gray-400 text-gray-300 hover:text-white hover:border-white transition-colors">
                <Globe className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)]" />
              </button>
              <button aria-label="Cart" className="p-2 rounded-full border border-gray-400 text-gray-300 hover:text-white hover:border-white transition-colors">
                <ShoppingCart className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)]" />
              </button>
              <a href="#partner-zone" className="flex items-center px-4 py-2 border border-gray-400 rounded-lg hover:border-white transition-colors">
                <User className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 mr-2 text-[var(--color-primary)]" />
                <span className="navbar text-white">Partner Zone</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="xl:hidden text-[#111827] p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 text-[#111827]" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 text-[#111827]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 transition-colors navbar ${isActive
                      ? "text-[#206A70]"
                      : "text-gray-700 hover:text-[#44BCE2]"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Mobile Partner Zone */}
            <div className="pt-4 flex flex-col gap-3">
              <a href="#partner-zone" className="flex items-center justify-center px-4 py-3 border border-gray-400 rounded-lg bg-[var(--color-secondary)] hover:bg-[#222]">
                <User className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 mr-2 text-[var(--color-primary)]" />
                <span className="navbar text-white">Partner Zone</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
