"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Science", id: "science" },
  { name: "Careers", id: "careers" },
  { name: "News", id: "news" },
  { name: "Contact Us", id: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "full">("top");

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
      const hero = document.getElementById("home");
      let threshold = 500;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const heroAbsoluteTop = scrollY + rect.top;
        const heroHeight = rect.height;
        // Near the end of the hero section (~75% through)
        threshold = heroAbsoluteTop + heroHeight * 0.75;
      }

      if (scrollY >= threshold) {
        setHeaderState("full");
      } else if (scrollY > 30) {
        setHeaderState("hidden");
        setMobileMenuOpen(false);
      } else {
        setHeaderState("top");
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
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out flex flex-col items-center ${
        headerState === "full"
          ? "header-full top-0 bg-[#003F77] shadow-lg translate-y-0 opacity-100 pointer-events-auto"
          : headerState === "hidden"
          ? "header-hidden -translate-y-[150%] opacity-0 pointer-events-none"
          : "header-top translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      <div className="custom-container w-full">
        <div
          className={`header-bar flex items-center justify-between transition-all duration-300 ${
            headerState === "full"
              ? "px-0"
              : "bg-[#003F77] rounded-[16px] sm:rounded-[20px] min-[2500px]:rounded-[28px] min-[3800px]:rounded-[40px] shadow-[0px_4px_16px_rgba(0,0,0,0.18)] px-4 sm:px-6 lg:px-8 xl:px-10 min-[1920px]:px-12 min-[2500px]:px-16 min-[3800px]:px-24"
          }`}
        >
          {/* Logo Section */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 py-2"
            aria-label="Rebstock Home"
          >
            <img
              src="/medical/rebstock/logo.webp"
              alt="Rebstock Logo"
              className="header-logo object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center h-full space-x-6 2xl:space-x-8 min-[1920px]:space-x-10 min-[2500px]:space-x-14 min-[3800px]:space-x-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`relative h-full flex flex-col justify-center items-center px-1 transition-colors navbar ${
                    isActive
                      ? "text-white !font-bold"
                      : "text-white/85 hover:text-white font-normal"
                  }`}
                >
                  <span className="relative py-1">
                    {link.name}
                    {isActive && (
                      <span className="header-indicator absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white rounded-full" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Button (Hidden on Mobile & Tablets < xl) */}
          <div className="hidden xl:flex items-center">
            <Button
              text="Get in Touch"
              variant="white"
              href="#contact"
              className="!py-2 sm:!py-2.5 min-[1920px]:!py-3 min-[2500px]:!py-4 min-[3800px]:!py-5 !px-4 sm:!px-5 min-[1920px]:!px-6 min-[2500px]:!px-8 min-[3800px]:!px-12 text-sm sm:text-base font-medium rounded-none"
            />
          </div>

          {/* Mobile & Tablet Hamburger Toggle Button */}
          <button
            type="button"
            className="xl:hidden text-white p-2 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 min-[1920px]:w-9 min-[1920px]:h-9 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 min-[1920px]:w-9 min-[1920px]:h-9 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="custom-container w-full">
          <div
            className={`xl:hidden bg-[#003F77] text-white shadow-2xl p-6 flex flex-col space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto pointer-events-auto border border-white/10 animate-in slide-in-from-top-2 duration-200 ${
              headerState === "full" ? "mt-0 rounded-b-[16px]" : "mt-2 rounded-[16px]"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="border-b border-white/10 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`block py-1.5 transition-colors navbar ${
                      isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Contact Button inside dropdown for mobiles and tablets */}
            <div className="pt-2 flex xl:hidden">
              <Button
                text="Get in Touch"
                variant="white"
                href="#contact"
                className="w-full justify-center !py-2.5 rounded-none"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
