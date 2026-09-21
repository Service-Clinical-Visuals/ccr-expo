"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "full">("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const banner = document.getElementById("home");
      let threshold = 500;

      if (banner) {
        const rect = banner.getBoundingClientRect();
        const bannerAbsoluteTop = scrollY + rect.top;
        const bannerHeight = rect.height;
        // When user scrolls through around 55% of the banner video
        threshold = bannerAbsoluteTop + bannerHeight * 0.55;
      }

      if (scrollY >= threshold) {
        setHeaderState("full");
      } else if (scrollY > 40) {
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

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "OEM", href: "#products", id: "products" },
    {
      name: "Ultrasound Scanners",
      href: "#portable-ultrasound",
      id: "portable-ultrasound",
    },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Schedule", href: "#exhibitions", id: "exhibitions" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveLink(id);
    setMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navOffset = 80;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navOffset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out telemed-header-wrapper ${
        headerState === "full"
          ? "!pt-0 bg-[#000000] border-b border-white/15 shadow-xl translate-y-0 opacity-100 pointer-events-auto"
          : headerState === "hidden"
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-none"
      }`}
    >
      <div className="custom-container pointer-events-auto">
        {/* Navigation Bar: Floating pill initially vs Attached full bar aligned to custom-container */}
        <div
          className={`w-full transition-all duration-300 ease-in-out flex items-center justify-between telemed-header-bar ${
            headerState === "full"
              ? "!px-0 bg-transparent border-transparent rounded-none shadow-none text-white"
              : "bg-[#000000] text-white rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.35)] border border-white/15"
          }`}
        >
          {/* Brand Logo: TELEMED (Aligned to left of custom-container in full mode) */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center shrink-0 select-none group focus:outline-none"
          >
            <div className="flex items-center gap-2 sm:gap-2.5 2xl:gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7">
              {/* Diamond ECG Pulse Icon */}
              <div className="relative header-brand-icon flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 40 40"
                  className="w-full h-full drop-shadow-[0_2px_6px_rgba(2,132,199,0.5)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 1.5L38.5 20L20 38.5L1.5 20L20 1.5Z"
                    fill="url(#telemed-diamond-grad)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.2"
                  />
                  {/* ECG Line */}
                  <path
                    d="M6 20H13.5L16.5 11L21 29L24.5 15L27.5 23L30 20H34"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="telemed-diamond-grad"
                      x1="0"
                      y1="0"
                      x2="40"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#38BDF8" />
                      <stop offset="1" stopColor="#0284C7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col text-left">
                <span className="font-['Exo_2'] font-[700] header-brand-title tracking-[0.06em] text-white leading-tight">
                  TELEMED
                </span>
                <span className="font-['Outfit'] font-[400] header-brand-sub tracking-[0.04em] text-[#60A5FA] leading-none">
                  Ultrasound Medical Systems
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden min-[1025px]:flex items-center h-full header-nav-list">
            {navLinks.map((link) => {
              const isHome = link.id === "home";
              const isScanners = link.id === "scanners";
              return (
                <div key={link.id} className="relative h-full flex items-center justify-center">
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`header-nav-link transition-colors duration-200 cursor-pointer select-none py-1 whitespace-nowrap ${
                      isScanners ? "font-['Anta'] uppercase tracking-wide" : "capitalize"
                    } ${
                      isHome
                        ? "text-white font-[700]"
                        : "text-white/80 hover:text-white font-[400]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isHome && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 header-home-underline bg-white rounded-t-full shadow-[0_1px_6px_rgba(255,255,255,0.8)] pointer-events-none" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: Get in Touch Button (Figma: Exo 2, font-weight: 300) */}
          <div className="hidden min-[1025px]:flex items-center shrink-0">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-2 header-cta-btn bg-white text-[#0F3E7B] hover:bg-gray-100 rounded-full font-['Exo_2'] font-[300] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Get in Touch</span>
              <img
                src="/medical/telemed/arrow.png"
                alt="Arrow"
                className="header-cta-arrow shrink-0 object-contain group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Toggle Button (No contact button on mobile/tablets) */}
          <div className="min-[1025px]:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#38BDF8] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="min-[1025px]:hidden custom-container mt-2 pointer-events-auto">
          <div className="w-full bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/20 rounded-[24px] shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`font-['Exo_2'] text-[16px] py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-white/15 text-white font-bold"
                        : "text-white/80 hover:bg-white/10 hover:text-white font-normal"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/15 flex items-center justify-center">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full text-center py-2.5 bg-white text-[#0F3E7B] hover:bg-gray-100 rounded-full font-['Exo_2'] font-[300] text-[15px] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <img
                  src="/medical/telemed/arrow.png"
                  alt="Arrow"
                  className="w-4 h-auto shrink-0 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
