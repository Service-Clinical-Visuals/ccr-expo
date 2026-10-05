"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "Surgical Specialties", id: "specialties" },
  { name: "Contacts", id: "contacts" },
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
      const banner = document.getElementById("banner-section") || document.getElementById("home");
      let threshold = 400;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        const bannerAbsoluteTop = scrollY + rect.top;
        const bannerHeight = rect.height;
        threshold = bannerAbsoluteTop + bannerHeight / 2;
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
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out pointer-events-auto flex justify-center ${
        headerState === "full"
          ? "top-0 bg-white border-b border-gray-200 shadow-sm translate-y-0 opacity-100 py-3 md:py-4"
          : headerState === "hidden"
          ? "top-4 sm:top-6 min-[3800px]:top-15 -translate-y-[150%] opacity-0 pointer-events-none py-0"
          : "top-4 sm:top-6 min-[3800px]:top-15 translate-y-0 opacity-100 py-0"
      }`}
    >
      <div className="custom-container w-full">
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${
            headerState === "full"
              ? "px-0"
              : "bg-white border border-[#1E1E1E]/20 rounded-[10px] min-[3800px]:rounded-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.08)] px-4 sm:px-6 min-[1301px]:px-8 min-[3800px]:px-14 py-2.5 sm:py-3 min-[3800px]:py-6"
          }`}
        >
          {/* Brand Logo (Left aligned) */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 focus:outline-none z-10"
            aria-label="Ergon Sutramed Home"
          >
            <img
              src="/medical/ergon/logo.png"
              alt="Ergon Sutramed"
              className="h-5 sm:h-6 md:h-7 min-[3800px]:h-14 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden min-[1301px]:flex items-center justify-center space-x-6 xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 absolute left-1/2 -translate-x-1/2 z-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`flex items-center gap-1.5 navbar transition-colors py-1 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? "text-[var(--color-primary)] !font-semibold underline underline-offset-4"
                      : "text-[#2A2A2A] hover:text-[var(--color-primary)] font-medium"
                  }`}
                >
                  <span className="navbar !text-[length:inherit]">{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-[#2A2A2A] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden min-[1301px]:flex items-center shrink-0 z-10">
            <Button
              text="Get in Touch"
              href="#contacts"
              variant="primary"
              className="!py-2 sm:!py-2.5 min-[3800px]:!py-5 !px-5 min-[3800px]:!px-10 text-sm md:text-base min-[3800px]:text-3xl"
            />
          </div>

          {/* Menu Toggle */}
          <button
            type="button"
            className="min-[1301px]:hidden text-[#2A2A2A] p-1.5 focus:outline-none z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2A2A2A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2A2A2A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="min-[1301px]:hidden fixed top-[68px] sm:top-[76px] left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-76px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200 z-50">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center justify-between py-2 navbar ${
                    isActive
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[#2A2A2A] hover:text-[var(--color-primary)] font-medium"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  <span className="navbar !text-[length:inherit]">{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-500" />}
                </a>
              </div>
            );
          })}
          <div className="pt-2">
            <Button
              text="Get in Touch"
              href="#contacts"
              variant="primary"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
