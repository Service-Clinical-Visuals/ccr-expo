"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "About Us", id: "about" },
  { name: "How it works", id: "how-it-works" },
  { name: "Skin Concerns", id: "skin-concerns" },
  { name: "Proven Results", id: "proven-results" },
  { name: "For Professionals", id: "for-professionals" },
  { name: "Contact Us", id: "contact" },
];

const languages = [
  { code: "en-US", name: "United States (EN)" },
  { code: "en-GB", name: "United Kingdom (EN)" },
  { code: "de-DE", name: "Deutschland (DE)" },
  { code: "fr-FR", name: "France (FR)" },
  { code: "global", name: "Global (EN)" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("United States (EN)");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home" || id === "about") {
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

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md  transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3800px]:px-20">
            {/* Left: Logo Section */}
            <Link
              href="#about"
              onClick={(e) => handleScrollTo(e, "about")}
              className="flex items-center shrink-0"
              aria-label="Hydrafacial Home"
            >
              <img
                src="/medical/hydrafacial/logo1.png"
                alt="Hydrafacial Logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 min-[2500px]:h-16 min-[3800px]:h-22 w-auto object-contain"
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
                    className={`relative cursor-pointer py-2 transition-colors text-[15px] 2xl:text-[16px] min-[2500px]:text-2xl min-[3800px]:text-3xl ${
                      isActive
                        ? "text-[#111827] font-bold"
                        : "text-[#374151] hover:text-[#0b81d7] font-medium"
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions (2 Find A Provider buttons + Globe selector) */}
            <div className="hidden lg:flex items-center shrink-0 gap-3 xl:gap-4 min-[2500px]:gap-8 min-[3800px]:gap-12">
              {/* Solid Blue Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0b81d7] hover:bg-[#096cb5] text-white font-medium shadow-sm hover:shadow transition-all duration-200 px-5 py-2.5 xl:px-6 xl:py-2.5 min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 text-sm xl:text-[15px] min-[2500px]:text-2xl min-[3800px]:text-3xl whitespace-nowrap active:scale-95 cursor-pointer"
              >
                Find A Provider
              </a>

              {/* Outlined Blue Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#0b81d7] hover:bg-[#0b81d7]/5 text-[#111827] font-medium transition-all duration-200 px-5 py-2.5 xl:px-6 xl:py-2.5 min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 text-sm xl:text-[15px] min-[2500px]:text-2xl min-[3800px]:text-3xl whitespace-nowrap active:scale-95 cursor-pointer"
              >
                Find A Provider
              </a>

              {/* Language / Region Selector Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 p-1.5 text-[#0b81d7] hover:opacity-85 transition-opacity cursor-pointer focus:outline-none"
                  aria-label="Select Region and Language"
                  aria-expanded={langDropdownOpen}
                >
                  <Globe
                    className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 text-[#0b81d7] shrink-0"
                    strokeWidth={2}
                  />
                  <ChevronDown
                    className={`w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 text-[#111827] transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.5}
                  />
                </button>

                {/* Dropdown Menu */}
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 min-[2500px]:w-80 min-[3800px]:w-96 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in duration-150">
                    <div className="px-4 py-2 border-b border-gray-100 text-xs min-[2500px]:text-base min-[3800px]:text-xl font-bold uppercase tracking-wider text-gray-500">
                      Region & Language
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setSelectedLang(lang.name);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 min-[2500px]:py-3.5 min-[3800px]:py-5 text-sm min-[2500px]:text-xl min-[3800px]:text-2xl transition-colors flex items-center justify-between ${
                          selectedLang === lang.name
                            ? "bg-[#0b81d7]/10 text-[#0b81d7] font-semibold"
                            : "text-gray-700 hover:bg-gray-50 font-normal"
                        }`}
                      >
                        <span>{lang.name}</span>
                        {selectedLang === lang.name && (
                          <span className="w-2 h-2 rounded-full bg-[#0b81d7]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="xl:hidden text-[#111827] p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8 text-[#111827]" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-[#111827]" />
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
                    className={`block py-2 text-base sm:text-lg transition-colors ${
                      isActive
                        ? "text-[#0b81d7] font-bold"
                        : "text-gray-700 hover:text-[#0b81d7] font-medium"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-full bg-[#0b81d7] hover:bg-[#096cb5] text-white font-medium py-3 text-base shadow-sm transition-colors text-center"
              >
                Find A Provider
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-full border border-[#0b81d7] hover:bg-[#0b81d7]/5 text-[#111827] font-medium py-3 text-base transition-colors text-center"
              >
                Find A Provider
              </a>

              {/* Mobile Region/Language Selector */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-gray-700">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#0b81d7]" />
                  <span className="text-sm font-medium">{selectedLang}</span>
                </div>
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-700 focus:outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.name}>
                      {lang.code.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
