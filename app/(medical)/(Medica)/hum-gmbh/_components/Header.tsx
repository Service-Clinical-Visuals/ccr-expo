"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Medical technology", href: "#about", hasDropdown: true },
  { label: "Textile Technology", href: "#about", hasDropdown: true },
  { label: "Pursue", href: "#about" },
  { label: "Downloads", href: "#cpap" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 w-full z-50 bg-[#F9F9F9]/95 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm border-b border-[#EAEAEA]/80"
        }`}
    >
      <div className="h-[82px] sm:h-[88px] min-[2500px]:h-[130px] min-[3800px]:h-[170px] flex items-center relative z-10">
        <div className="custom-container flex items-center justify-between gap-4 lg:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3800px]:px-20">

          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, { label: "Home", href: "#home" })}
            className="flex items-center shrink-0"
            aria-label="HUM Medical Home"
          >
            <img
              src="/medical/hum-gmbh/logo.png"
              alt="HUM Logo"
              className="h-8 sm:h-9 md:h-10 min-[2500px]:h-[56px] min-[3800px]:h-[80px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <div key={item.label} className="relative group py-2">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`navbar flex items-center text-[16px] 2xl:text-[17px] min-[2500px]:text-[24px] font-medium transition-colors cursor-pointer ${isActive
                        ? "!text-[#005BAA] font-semibold"
                        : "text-[#2B2B2B] hover:text-[#005BAA]"
                      }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 ml-1 text-inherit transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Right Action: Language Flags & Search Bar */}
          <div className="hidden md:flex items-center space-x-3.5 lg:space-x-5 shrink-0">
            {/* Flags */}
            <div className="flex items-center space-x-2.5">
              {/* Germany Flag */}
              <button
                type="button"
                className="w-8 h-[20px] sm:w-[35px] sm:h-[23px] min-[2500px]:w-14 min-[2500px]:h-9 rounded-[3px] overflow-hidden shadow-xs hover:scale-110 transition-transform cursor-pointer border border-black/10"
                title="Deutsch"
                aria-label="Deutsch"
              >
                <svg viewBox="0 0 5 3" className="w-full h-full object-cover">
                  <rect width="5" height="1" y="0" fill="#000000" />
                  <rect width="5" height="1" y="1" fill="#DD0000" />
                  <rect width="5" height="1" y="2" fill="#FFCE00" />
                </svg>
              </button>

              {/* UK Flag */}
              <button
                type="button"
                className="w-8 h-[20px] sm:w-[35px] sm:h-[23px] min-[2500px]:w-14 min-[2500px]:h-9 rounded-[3px] overflow-hidden shadow-xs hover:scale-110 transition-transform cursor-pointer border border-black/10"
                title="English"
                aria-label="English"
              >
                <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
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
              </button>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] h-7 bg-[#D9D9D9]"></div>

            {/* Search Pill */}
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for everthing..."
                className="w-[230px] lg:w-[270px] 2xl:w-[310px] min-[2500px]:w-[420px] h-[44px] sm:h-[46px] min-[2500px]:h-[62px] pl-4 sm:pl-5 pr-12 text-sm sm:text-[14.5px] min-[2500px]:text-[20px] font-['Alexandria'] text-[#212121] placeholder-[#8E8E8E] bg-white border-[1.5px] border-[#005BAA] rounded-full focus:outline-none focus:ring-2 focus:ring-[#005BAA]/20 shadow-xs"
              />
              <button
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#005BAA] hover:text-[#004280] transition-colors p-1"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-[#005BAA]" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="xl:hidden p-2 text-[#212121] hover:text-[#005BAA] transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#EAEAEA] shadow-xl py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Search */}
          <div className="relative flex items-center mb-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for everthing..."
              className="w-full h-[46px] pl-5 pr-12 text-sm font-['Alexandria'] text-[#333333] placeholder-[#8E8E8E] bg-white border-[1.5px] border-[#005BAA] rounded-full focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#005BAA]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 pb-2">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="navbar block py-2 text-[16px] text-[#2B2B2B] hover:text-[#005BAA] font-medium"
              >
                {item.label}
              </a>
            </div>
          ))}

          {/* Flags on Mobile */}
          <div className="pt-2 flex items-center space-x-3">
            <span className="text-xs text-[#888888] font-['Alexandria']">Language:</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="w-7 h-5 rounded-[2px] overflow-hidden shadow-xs"
                title="Deutsch"
                aria-label="Deutsch"
              >
                <svg viewBox="0 0 5 3" className="w-full h-full object-cover">
                  <rect width="5" height="1" y="0" fill="#000000" />
                  <rect width="5" height="1" y="1" fill="#DD0000" />
                  <rect width="5" height="1" y="2" fill="#FFCE00" />
                </svg>
              </button>
              <button
                type="button"
                className="w-7 h-5 rounded-[2px] overflow-hidden shadow-xs"
                title="English"
                aria-label="English"
              >
                <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <clipPath id="s-mob">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="t-mob">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                  </clipPath>
                  <g clipPath="url(#s-mob)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t-mob)" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
