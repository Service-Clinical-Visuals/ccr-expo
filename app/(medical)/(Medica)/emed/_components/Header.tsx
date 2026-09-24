"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Company", href: "#about" },
  { label: "Products", href: "#solutions" },
  { label: "Applications", href: "#atom-360" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "full">("top");

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setActiveItem(item.label);
    const target = item.href.replace("#", "");
    const el = document.getElementById(target);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out pointer-events-auto flex justify-center ${
        headerState === "full"
          ? "top-0 bg-white border-b border-gray-200 shadow-sm translate-y-0 opacity-100"
          : headerState === "hidden"
          ? "top-3 sm:top-3.5 md:top-4 min-[2000px]:top-5 min-[2500px]:top-6 min-[3800px]:top-7 -translate-y-[150%] opacity-0 pointer-events-none"
          : "top-3 sm:top-3.5 md:top-4 min-[2000px]:top-5 min-[2500px]:top-6 min-[3800px]:top-7 translate-y-0 opacity-100"
      }`}
    >
      <div className="custom-container w-full">
        
        {/* Header Bar */}
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${
            headerState === "full"
              ? "py-2.5 md:py-3 min-[2000px]:py-3.5 min-[2500px]:py-4 min-[3800px]:py-5 px-3 sm:px-5 min-[2000px]:px-8"
              : "bg-white/95 backdrop-blur-md border border-[#1E1E1E]/25 rounded-[20px_0px] min-[2000px]:rounded-[28px_0px] min-[3800px]:rounded-[36px_0px] shadow-[0px_3px_8px_rgba(0,0,0,0.08)] py-2.5 sm:py-3 px-5 sm:px-8 min-[2000px]:py-3.5 min-[2500px]:py-4 min-[3800px]:py-5 min-[2000px]:px-8 min-[2500px]:px-10 min-[3800px]:px-14"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, { label: "Home", href: "#home" })}
            className="flex items-center shrink-0 z-10"
            aria-label="EMED Home"
          >
            <img
              src="/medical/emed/logo.png"
              alt="EMED — Confidence in Performance"
              className="header-logo-img w-auto object-contain select-none transform scale-115 sm:scale-120 md:scale-125 lg:scale-130 min-[2000px]:scale-135 min-[2500px]:scale-145 min-[3800px]:scale-160 origin-left transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 min-[2000px]:space-x-10 min-[2500px]:space-x-12 min-[3800px]:space-x-16 absolute left-1/2 -translate-x-1/2 z-10">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`header-nav-link font-['Outfit'] transition-all cursor-pointer ${
                    isActive
                      ? "text-[#006B96] font-semibold underline underline-offset-8 decoration-2 min-[2500px]:underline-offset-10 min-[2500px]:decoration-3"
                      : "text-[#2A2A2A] font-medium hover:text-[#006B96]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center z-10">
            <Button
              text="Get in Touch"
              variant="primary"
              href="#contact"
              showIcon={true}
              className="h-[38px] sm:h-[42px] min-[2000px]:h-[48px] min-[2500px]:h-[56px] min-[3800px]:h-[68px] min-[2000px]:px-6 min-[2500px]:px-8 min-[3800px]:px-10 min-[2000px]:text-base min-[2500px]:text-lg min-[3800px]:text-xl"
            />
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#2A2A2A] hover:text-[#006B96] transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 bg-white/95 backdrop-blur-md border border-[#1E1E1E]/25 rounded-[20px_0px] shadow-xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`block py-1.5 text-[17px] font-['Outfit'] ${
                      isActive ? "text-[#006B96] font-semibold" : "text-[#2A2A2A] font-medium"
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
            <div className="pt-2 sm:hidden">
              <Button
                text="Get in Touch"
                variant="primary"
                href="#contact"
                showIcon={true}
                className="w-full justify-center"
              />
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
