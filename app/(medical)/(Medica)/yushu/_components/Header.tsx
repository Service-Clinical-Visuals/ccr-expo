"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "News", id: "news", hasDropdown: true },
  { name: "Service", id: "service" },
  { name: "Distribution", id: "distribution" },
  { name: "Contacts", id: "contacts" },
];

export default function Header() {
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
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-200/80 ${
        isScrolled ? "shadow-md" : "shadow-xs"
      }`}
    >
      <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
        <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full">
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0"
            aria-label="YUSHU Healthcare Home"
          >
            <img
              src="/medical/yushu/logo.webp"
              alt="YŪSHŪ Healthcare Logo"
              className="h-9 sm:h-11 md:h-12 lg:h-[50px] min-[2500px]:h-[76px] min-[3800px]:h-[110px] w-auto object-contain transform scale-[1.5] origin-left"
            />
          </Link>

          {/* Middle: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`inline-flex items-center gap-1.5 cursor-pointer py-2 transition-colors navbar text-base min-[2500px]:text-2xl min-[3800px]:text-4xl ${
                    isActive
                      ? "text-[var(--color-primary)] !font-semibold underline"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-normal"
                  }`}
                >
                  <span className="navbar text-[inherit] text-[1.0625rem] min-[2500px]:text-2xl min-[3800px]:text-4xl leading-none">
                    {link.name}
                  </span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 opacity-70" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Search & Language (EN) - Visible only on Desktop (xl:flex) */}
          <div className="hidden xl:flex items-center space-x-4 min-[2500px]:space-x-8 shrink-0">
            {/* Search Button */}
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" />
            </button>

            {/* Vertical Divider */}
            <div className="w-[1px] h-6 min-[2500px]:h-10 bg-gray-200"></div>

            {/* Language Selector (UK Flag + EN + Chevron) */}
            <div className="flex items-center gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 cursor-pointer group select-none">
              <span className="w-7 h-[18px] sm:w-[32px] sm:h-[20px] min-[2500px]:w-[50px] min-[2500px]:h-[30px] min-[3800px]:w-[76px] min-[3800px]:h-[46px] rounded-[3px] min-[2500px]:rounded-[5px] min-[3800px]:rounded-[8px] overflow-hidden shadow-xs border border-gray-300 inline-block shrink-0">
                <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <clipPath id="uk-flag-clip">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="uk-flag-cross">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                  </clipPath>
                  <g clipPath="url(#uk-flag-clip)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-flag-cross)" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                  </g>
                </svg>
              </span>
              <span className="text-[var(--color-secondary)] font-bold text-sm min-[2500px]:text-xl min-[3800px]:text-3xl">
                EN
              </span>
              <ChevronDown className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-gray-500 group-hover:text-[var(--color-primary)] transition-colors" />
            </div>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="xl:hidden text-[var(--color-secondary)] p-2 transition-colors focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-secondary)]" />
            ) : (
              <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-secondary)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center justify-between py-2 transition-colors navbar text-lg ${
                    isActive
                      ? "text-[var(--color-primary)] font-bold"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
                </a>
              </div>
            );
          })}

          {/* Mobile Search & Language */}
          <div className="pt-4 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-7 h-[18px] rounded-[3px] overflow-hidden shadow-xs border border-gray-300 inline-block shrink-0">
                <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <g>
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                  </g>
                </svg>
              </span>
              <span className="text-[var(--color-secondary)] font-bold text-sm">EN</span>
            </div>

            <button
              type="button"
              aria-label="Search"
              className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
