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
  { name: "Products", id: "products" },
  { name: "Technology", id: "technology" },
  { name: "Media", id: "media" },
  { name: "Marketing", id: "marketing" },
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#1C1C1C]/95 backdrop-blur-md transition-shadow duration-300 border-b border-black/25 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="custom-container relative flex items-center justify-between gap-4 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full h-[68px] sm:h-[74px] lg:h-[80px] min-[2500px]:h-[130px] min-[3800px]:h-[180px]">
          {/* Left: Logo Section - positioned at top:0, 103x147px hanging down past header bar matching Figma */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="self-start relative z-30 shrink-0 w-[80px] sm:w-[92px] lg:w-[103px] min-[2500px]:w-[155px] min-[3800px]:w-[215px]"
            aria-label="Bardahl Home"
          >
            <img
              src="/moto/bardahl/logo.webp"
              alt="Bardahl Logo"
              className="w-full h-auto max-w-none object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Middle: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors uppercase tracking-wider ${
                    isActive
                      ? "text-[#F8EA17] !font-semibold underline decoration-[#F8EA17] underline-offset-4"
                      : "text-white/90 hover:text-[#F8EA17]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button
              text="Get in Touch"
              variant="pill"
              href="#contact"
              showIcon={true}
              iconDirection="up-right"
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden text-white p-2 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            ) : (
              <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#1C1C1C] border-t border-white/10 shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-white/10 last:border-0 pb-3 text-right">
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 text-right navbar transition-colors uppercase tracking-wider ${
                      isActive
                        ? "text-[#F8EA17] font-semibold underline decoration-[#F8EA17] underline-offset-4"
                        : "text-white/80 hover:text-[#F8EA17]"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-2 flex justify-end">
              <Button
                text="Get in Touch"
                variant="pill"
                href="#contact"
                showIcon={true}
                iconDirection="up-right"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
