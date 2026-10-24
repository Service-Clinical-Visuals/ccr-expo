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
  { name: "Contact", id: "contact" },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"
        }`}
    >
      <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
        <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0"
              aria-label="ALSA Bologna Home"
            >
              <img
                src="/medical/alsa-apparecchi/logo.webp"
                alt="ALSA Bologna Logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 min-[2500px]:h-[52px] min-[3800px]:h-[80px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 min-[2500px]:space-x-16 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1 font-secondary transition-colors ${isActive
                      ? "text-black !font-semibold"
                      : "text-black/75 hover:text-black font-normal"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Request Quote CTA Button / Mobile Toggle */}
          <div className="flex-1 flex items-center justify-end shrink-0">
            <div className="hidden md:flex items-center">
              <Button
                text="Request Quote"
                variant="primary"
                href="#contact"
                className="!py-2 !px-6"
              />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="md:hidden text-black p-2 transition-colors focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-black" />
              ) : (
                <Menu className="w-7 h-7 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="custom-container flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`navbar block py-2 text-center transition-colors font-secondary ${isActive
                        ? "text-[var(--color-primary)] !font-semibold"
                        : "text-gray-800 hover:text-[var(--color-primary)]"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-2">
              <Button
                text="Request Quote"
                variant="primary"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
