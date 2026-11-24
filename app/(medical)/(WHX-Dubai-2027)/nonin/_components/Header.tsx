/**
 * Header Navigation Component
 * Master Reference: Inogen Development Standards
 * Behavior: Initially invisible. Once user scrolls past the hero section, it animates down and stays fixed at the top.
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
  { name: "Technologies", id: "technologies" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

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
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const threshold = heroHeight - 80;
      setIsVisible(window.scrollY >= threshold);
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
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-500 ease-in-out ${isVisible
        ? "translate-y-0 opacity-100 pointer-events-auto py-3 min-[2500px]:py-5 min-[3800px]:py-8"
        : "-translate-y-full opacity-0 pointer-events-none py-3"
        }`}
    >
      <div className="custom-container">
        <div className="w-full flex items-center justify-between gap-4 relative">

          {/* Left: Nonin Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="Nonin Home"
          >
            <img
              src="/medical/nonin/logo.webp"
              alt="Nonin Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-12 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center space-x-7 2xl:space-x-10 min-[2500px]:space-x-14 min-[3800px]:space-x-20 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar font-body text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-colors select-none ${isActive
                    ? "text-black !font-bold"
                    : "text-black/80 hover:text-[#2A96C2] font-normal"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Buy Now CTA */}
          <div className="hidden xl:flex items-center shrink-0 z-10">
            <Button
              text="Buy Now"
              href="#products"
              showIcon={true}
              className="px-5 py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5"
            />
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:text-[#2A96C2] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-black" />
              ) : (
                <Menu className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 bg-white rounded-xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`text-base font-medium py-1.5 transition-colors ${isActive
                      ? "text-[#2A96C2] font-bold border-l-4 border-[#2A96C2] pl-3"
                      : "text-black/80 hover:text-[#2A96C2] pl-3"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Button
                text="Buy Now"
                href="#products"
                showIcon={true}
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
