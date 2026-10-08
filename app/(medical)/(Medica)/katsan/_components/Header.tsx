"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about", hasDropdown: true },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Our services", href: "#services", hasDropdown: true },
  { label: "Catalogs", href: "#catalogs", hasDropdown: true },
  { label: "Become a Distributor", href: "#distributor" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "fixed">("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.getElementById("home");
      const heroBottom = hero
        ? hero.offsetTop + hero.offsetHeight - 80
        : window.innerHeight - 80;

      if (scrollY < 50) {
        setHeaderState("top");
      } else if (scrollY < heroBottom) {
        setHeaderState("hidden");
      } else {
        setHeaderState("fixed");
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isTop = headerState === "top";
  const isHidden = headerState === "hidden";
  const isFixed = headerState === "fixed";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      } ${
        isFixed
          ? "bg-[#00425E]/95 backdrop-blur-md shadow-xl py-3 sm:py-3.5 border-b border-white/10"
          : "pt-3 sm:pt-4 bg-transparent"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ${
            isTop
              ? "bg-[#00425E] border border-white/20 rounded-[20px] px-5 sm:px-8 py-3.5 shadow-lg"
              : "px-0 py-0"
          }`}
        >

          <div className="flex items-center shrink-0 min-[1301px]:w-[240px] min-[1920px]:w-[270px] min-[2500px]:w-[380px] min-[3800px]:w-[500px]">
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center shrink-0"
              aria-label="Katsan Home"
            >
              <img
                src="/medical/katsan/logo.webp"
                alt="Katsan Medical Devices"
                className="h-8 sm:h-9 md:h-10 lg:h-11 min-[1920px]:h-13 min-[2500px]:h-18 min-[3800px]:h-24 w-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden min-[1301px]:flex items-center justify-center flex-1 space-x-6 2xl:space-x-8 min-[3800px]:space-x-12">
            {navItems.map((item) => {
              const isActive = activeLink === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`navbar inline-flex items-center gap-1.5 font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-white font-semibold underline underline-offset-8"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="text-inherit font-inherit">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 min-[3800px]:w-6 min-[3800px]:h-6 text-white/80 shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden min-[1301px]:flex items-center justify-end shrink-0 min-[1301px]:w-[240px] min-[1920px]:w-[270px] min-[2500px]:w-[380px] min-[3800px]:w-[500px]">
            <Button
              text="Get in Touch"
              href="#contact"
              variant="white"
              iconType="arrow-up-right"
              size="compact"
            />
          </div>

          <button
            type="button"
            className="min-[1301px]:hidden text-white p-1.5 focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            ) : (
              <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="min-[1301px]:hidden mt-2 w-full bg-[#00425E] border border-white/20 rounded-[20px] shadow-2xl p-6 flex flex-col gap-4 text-white animate-in fade-in slide-in-from-top-3 duration-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="navbar flex items-center justify-between py-2 border-b border-white/10 text-white/90 hover:text-white font-medium"
              >
                <span className="text-inherit font-inherit">{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-white/70" />}
              </a>
            ))}
            <div className="pt-2 flex justify-center">
              <Button
                text="Get in Touch"
                href="#contact"
                variant="white"
                iconType="arrow-up-right"
                size="compact"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
