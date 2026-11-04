"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

const Header = () => {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "fixed">("initial");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", id: "home", hasDropdown: false },
    { name: "About Us", id: "about", hasDropdown: true },
    { name: "Products", id: "products", hasDropdown: true },
    { name: "News", id: "news", hasDropdown: false },
    { name: "Contact Us", id: "contact", hasDropdown: false },
  ];

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
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6"
          : "top-3 sm:top-4 lg:top-5 min-[2500px]:top-8 min-[3800px]:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full bg-white flex items-center justify-between gap-4 transition-all duration-300 ${
            isFixed
              ? "rounded-none px-0"
              : "border border-[rgba(30,30,30,0.25)] rounded-full shadow-sm px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 cursor-pointer"
            aria-label="TUR Home"
          >
            <img
              src="/medical/tur-gmbh/logo.webp"
              alt="TUR Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`flex items-center gap-1.5 navbar transition-colors cursor-pointer ${
                    isActive
                      ? "text-[var(--color-primary)] !font-semibold"
                      : "text-[#2A2A2A] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-[#2A2A2A] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button - only visible on desktop (hidden on mobile & tablet) */}
          <div className="hidden lg:flex items-center">
            <Button
              text="Get In Touch"
              href="#contact"
              variant="primary"
              className="!shadow-none"
            />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2A2A2A] hover:text-[var(--color-primary)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full mt-2.5 bg-white rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto border border-gray-200/70 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`py-2.5 px-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    activeLink === link.id
                      ? "text-[var(--color-primary)] bg-blue-50/70 font-semibold"
                      : "text-[#2A2A2A] hover:bg-gray-50 hover:text-[var(--color-primary)]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100">
              <Button
                text="Get In Touch"
                href="#contact"
                variant="primary"
                className="w-full !shadow-none justify-center"
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
