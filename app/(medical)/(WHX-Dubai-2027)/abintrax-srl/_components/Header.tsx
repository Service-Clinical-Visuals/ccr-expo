"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Our Divisions", id: "divisions", hasDropdown: true },
  { name: "What We Do", id: "what-we-do" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollState, setScrollState] = useState<"top" | "scrolling-hero" | "past-hero">("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("home");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Once the user reached the ending of the hero section
        if (rect.bottom <= 80) {
          setScrollState("past-hero");
        } else if (scrollY > 25) {
          // In the first scroll through the hero section: invisible!
          setScrollState("scrolling-hero");
        } else {
          // At the top resting state: visible floating card with gap below
          setScrollState("top");
        }
      } else {
        if (scrollY > window.innerHeight - 80) {
          setScrollState("past-hero");
        } else if (scrollY > 25) {
          setScrollState("scrolling-hero");
        } else {
          setScrollState("top");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isPastHero = scrollState === "past-hero";
  const isHidden = scrollState === "scrolling-hero";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isPastHero
          ? "bg-[#17181C]/95 backdrop-blur-md border-b border-[#333333] shadow-xl py-1.5 sm:py-2 min-[2500px]:py-3 min-[3800px]:py-4"
          : "pt-2.5 sm:pt-3 pb-1.5 bg-transparent"
      }`}
    >
      <div className="custom-container">
        <div
          className={`relative w-full flex items-center justify-between transition-all duration-300 ${
            isPastHero
              ? "h-[58px] sm:h-[66px] lg:h-[72px] min-[2500px]:h-[100px] min-[3800px]:h-[135px] px-0 bg-transparent border-0 rounded-none shadow-none"
              : "bg-[#17181C] border border-[#333333]/85 rounded-2xl px-5 sm:px-8 lg:px-10 h-[64px] sm:h-[76px] lg:h-[84px] min-[2500px]:h-[115px] min-[3800px]:h-[160px] shadow-xl"
          }`}
        >
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0"
            aria-label="Abintrax Home"
          >
            <img
              src="/medical/abintrax-srl/logo.webp"
              alt="Abintrax Logo"
              className="h-7 sm:h-9 lg:h-10 min-[2500px]:h-14 min-[3800px]:h-20 w-auto object-contain transform scale-110 origin-left"
            />
          </Link>

          {/* Middle: Navigation Links (Horizontally centered on desktop screens > 1035px) */}
          <nav className="hidden min-[1036px]:flex min-[1036px]:absolute min-[1036px]:left-1/2 min-[1036px]:-translate-x-1/2 items-center space-x-6 xl:space-x-10 min-[2500px]:space-x-14 min-[3800px]:space-x-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`inline-flex items-center gap-1.5 transition-colors navbar font-secondary text-sm xl:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl ${
                    isActive
                      ? "text-white font-bold"
                      : "text-white/80 hover:text-white font-normal"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:w-6 min-[3800px]:w-8 min-[3800px]:w-8 text-white/70" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Globe Button */}
          <div className="hidden min-[1036px]:flex items-center">
            <button
              type="button"
              aria-label="Language selector"
              className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#FFCC00] flex items-center justify-center text-[#1E1E1E] hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
            >
              <Globe className="w-4.5 h-4.5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#1E1E1E]" strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex min-[1036px]:hidden items-center gap-3">
            <button
              type="button"
              aria-label="Language"
              className="w-9 h-9 rounded-full bg-[#FFCC00] flex items-center justify-center text-[#1E1E1E]"
            >
              <Globe className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              className="text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="min-[1036px]:hidden mt-2 w-full bg-[#17181C] border border-[#333333] rounded-2xl shadow-2xl py-6 px-6 flex flex-col space-y-3 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`block py-2 text-base transition-colors ${
                    isActive
                      ? "text-[#3AA5DD] font-bold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
