"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Product", href: "#product-solutions", id: "product" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("banner-section");
      let threshold = 200;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        const bannerAbsoluteTop = scrollY + rect.top;
        const bannerHeight = rect.height;
        // Reveal header after scrolling halfway through the banner
        threshold = bannerAbsoluteTop + bannerHeight / 2;
      }

      if (scrollY >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
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
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    setActiveSection(id);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (!targetId || targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId) || (targetId === "contact" ? document.querySelector("footer") : null);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-slate-100 transition-all duration-300 ease-in-out ${isVisible
        ? "translate-y-0 opacity-100 shadow-md pointer-events-auto py-2.5 sm:py-3"
        : "-translate-y-full opacity-0 pointer-events-none py-2.5 sm:py-3"
        }`}
    >
      <div className="w-full py-2 px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/flashman-uk"
            className="flex items-center flex-shrink-0 focus:outline-none"
            aria-label="Flashman Home"
          >
            <img
              src="/medical/flashman-uk/h-logo.webp"
              alt="Flashman"
              className="h-7 sm:h-8 md:h-auto w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-inter">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`header-link transition-colors duration-200 cursor-pointer ${isActive
                    ? "text-[#2997aa] font-semibold"
                    : "text-[#334155] hover:text-[#2997aa] font-medium"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Request Catalogue Button */}
            <div className="hidden sm:block">
              <Button
                href="#contact"
                onClick={() => {
                  const el = document.getElementById("contact") || document.querySelector("footer");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                showArrow={false}
                className="!bg-[#2997aa] hover:!bg-[#208496] !text-white !h-auto !py-2 !px-5 !rounded-lg !border-none"
              >
                <span className="flex items-center gap-2 font-inter font-medium btn-text">
                  <Download className="w-4 h-4" />
                  Request Catalogue
                </span>
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[#2997aa] transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 mb-2 rounded-2xl bg-white shadow-xl border border-slate-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3 font-inter">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`header-link py-2 px-3 rounded-lg transition-colors ${isActive
                      ? "text-[#2997aa] font-semibold bg-[#2997aa]/10"
                      : "text-slate-700 hover:text-[#2997aa] hover:bg-slate-50 font-medium"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-slate-100">
                <Button
                  href="#contact"
                  onClick={() => {
                    const el = document.getElementById("contact") || document.querySelector("footer");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  showArrow={false}
                  className="w-full justify-center !bg-[#2997aa] hover:!bg-[#208496] !text-white !h-auto !py-2.5 !px-5 !rounded-lg !border-none"
                >
                  <span className="flex items-center justify-center gap-2 font-inter font-medium btn-text">
                    <Download className="w-4 h-4" />
                    Request Catalogue
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
