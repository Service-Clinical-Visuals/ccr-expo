/**
 * Header Navigation Component
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * Follows Inogen's responsive nav principles:
 * - Clean semantic structure with top utility bar and main nav bar
 * - Adaptive layout on mobile, tablet, and desktop
 * - Mobile drawer with smooth animation
 * - Styled according to Figma design tokens (Squada One font, #005781 brand color)
 */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", active: true },
  { name: "Company", href: "#about" },
  { name: "Solutions", href: "#experience-360" },
  { name: "Events", href: "#global-footprint" },
  { name: "Service & Support", href: "#" },
  { name: "Configurator", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header once user scrolls near the end of the full-screen hero section
      const threshold = window.innerHeight * 0.8;
      if (window.scrollY >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-in-out ${isVisible
          ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      {/* 1. Top Utility Bar */}
      <div className="w-full border-b border-[#E4E4E4] hidden md:block overflow-hidden relative">
        <div className="custom-container flex items-stretch justify-between relative">
          {/* Top Left Title */}
          <div className="py-2 min-[2500px]:py-3 min-[3800px]:py-4 flex items-center">
            <span className="font-primary font-bold text-[#212121] tracking-wide text-xs sm:text-sm lg:text-[16px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-tight">
              MEDICAL TECHNOLOGY FOR INNOVATIVE DIAGNOSTICS
            </span>
          </div>

          {/* Top Right Language Selector - blue background touches top and extends to right screen edge */}
          <div className="relative self-stretch bg-[#005781] px-4 min-[2500px]:px-8 min-[3800px]:px-12 py-1.5 min-[2500px]:py-3 min-[3800px]:py-4 flex items-center gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
            {/* Solid full-bleed wing extending to the right edge of the screen */}
            <div className="absolute top-0 bottom-0 left-full w-screen bg-[#005781] pointer-events-none" />

            <span className="font-primary text-white text-xs sm:text-sm lg:text-[16px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-tight">
              Translate:
            </span>

            {/* EN Flag */}
            <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 cursor-pointer hover:opacity-90 transition-opacity">
              <svg className="w-5 h-3.5 min-[2500px]:w-8 min-[2500px]:h-5.5 min-[3800px]:w-11 min-[3800px]:h-7.5 rounded-xs border border-white/30" viewBox="0 0 60 30">
                <clipPath id="s">
                  <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <clipPath id="t">
                  <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                </clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </g>
              </svg>
              <span className="font-primary text-white text-xs lg:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl">EN</span>
            </div>

            {/* Divider */}
            <div className="w-[1.5px] min-[2500px]:w-[2.5px] min-[3800px]:w-[4px] h-4 min-[2500px]:h-6 min-[3800px]:h-8 bg-[#D9D9D9]/50" />

            {/* DE Flag */}
            <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 cursor-pointer hover:opacity-90 transition-opacity">
              <svg className="w-5 h-3.5 min-[2500px]:w-8 min-[2500px]:h-5.5 min-[3800px]:w-11 min-[3800px]:h-7.5 rounded-xs border border-white/30" viewBox="0 0 5 3">
                <rect width="5" height="1" y="0" fill="#000" />
                <rect width="5" height="1" y="1" fill="#D00" />
                <rect width="5" height="1" y="2" fill="#FFCE00" />
              </svg>
              <span className="font-primary text-white text-xs lg:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl">DE</span>
            </div>

            {/* Divider */}
            <div className="w-[1.5px] min-[2500px]:w-[2.5px] min-[3800px]:w-[4px] h-4 min-[2500px]:h-6 min-[3800px]:h-8 bg-[#D9D9D9]/50" />

            {/* US Flag */}
            <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 cursor-pointer hover:opacity-90 transition-opacity">
              <svg className="w-5 h-3.5 min-[2500px]:w-8 min-[2500px]:h-5.5 min-[3800px]:w-11 min-[3800px]:h-7.5 rounded-xs border border-white/30" viewBox="0 0 19 10">
                <rect width="19" height="10" fill="#bf0a30" />
                <rect width="19" height="0.77" y="0.77" fill="#fff" />
                <rect width="19" height="0.77" y="2.31" fill="#fff" />
                <rect width="19" height="0.77" y="3.85" fill="#fff" />
                <rect width="19" height="0.77" y="5.38" fill="#fff" />
                <rect width="19" height="0.77" y="6.92" fill="#fff" />
                <rect width="19" height="0.77" y="8.46" fill="#fff" />
                <rect width="7.6" height="5.38" fill="#002868" />
              </svg>
              <span className="font-primary text-white text-xs lg:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl">US</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full py-1.5 sm:py-2 min-[2500px]:py-4 min-[3800px]:py-6">
        <div className="custom-container flex items-center justify-between gap-4 min-[2500px]:gap-8 min-[3800px]:gap-12">
          {/* Logo */}
          <Link href="#home" className="shrink-0 flex items-center">
            <img
              src="/medical/somno/logo-clean.webp"
              alt="SOMNOmedics"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-primary font-normal font-[400] text-sm lg:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl leading-tight transition-colors ${link.active
                  ? "text-[#005781]"
                  : "text-[#212121]/75 hover:text-[#005781]"
                  }`}
              >
                <p className="leading-tight font-primary font-normal font-[400]">{link.name}</p>
              </Link>
            ))}
          </nav>

          {/* Search Box (Desktop: visible on desktop screens >= 1280px; on tablet/iPad Pro it is inside the 3-line hamburger menu) */}
          <div className="hidden xl:flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-5 bg-[#F9F9F9] border border-black/40 rounded-[8px] min-[2500px]:rounded-[14px] min-[3800px]:rounded-[18px] px-3 min-[2500px]:px-5 min-[3800px]:px-7 py-1.5 min-[2500px]:py-3 min-[3800px]:py-4.5 w-60 xl:w-68 min-[2500px]:w-96 min-[3800px]:w-[500px]">
            <Search className="w-4.5 h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[#005781] shrink-0" strokeWidth={2.2} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none font-secondary text-sm min-[2500px]:text-xl min-[3800px]:text-2xl placeholder:text-sm min-[2500px]:placeholder:text-xl min-[3800px]:placeholder:text-2xl text-[#212121] placeholder:text-[#212121]/50"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#212121] hover:text-[#005781] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16" /> : <Menu className="w-7 h-7 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-5 flex flex-col gap-4 animate-in fade-in duration-200">
            {/* Search Box (Mobile) */}
            <div className="flex items-center gap-2.5 bg-[#F9F9F9] border border-black/50 rounded-[10px] px-3.5 py-2.5 w-full">
              <Search className="w-5 h-5 text-[#005781] shrink-0" strokeWidth={2.2} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full bg-transparent outline-none font-secondary text-base placeholder:text-base sm:text-lg sm:placeholder:text-lg text-[#212121] placeholder:text-[#212121]/50"
              />
            </div>

            <nav className="flex flex-col gap-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-primary font-normal font-[400] text-base sm:text-lg py-1 ${link.active
                    ? "text-[#005781] border-l-4 border-[#005781] pl-2"
                    : "text-[#212121]/75 hover:text-[#005781] pl-2"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

