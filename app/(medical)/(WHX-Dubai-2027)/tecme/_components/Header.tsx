"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "fixed">("initial");
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
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const threshold = heroHeight - 120;

      if (scrollY <= 30) {
        setHeaderState("initial");
      } else if (scrollY > 30 && scrollY < threshold) {
        setHeaderState("hidden");
      } else {
        setHeaderState("fixed");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const isFixed = headerState === "fixed";
  const isHidden = headerState === "hidden";

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isFixed
          ? "top-0 bg-[#005EAC] shadow-xl py-3 min-[2500px]:py-5 min-[3800px]:py-8"
          : "top-4 sm:top-5 lg:top-6 min-[2500px]:top-8 min-[3800px]:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full bg-[#005EAC] flex items-center justify-between gap-4 transition-all duration-300 ${
            isFixed
              ? "rounded-none px-0"
              : "border border-black/10 rounded-[16px] sm:rounded-[20px] shadow-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6"
          }`}
        >
          {/* Left: Logo (strictly follows custom-container) */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0"
            aria-label="Tecme Home"
          >
            <img
              src="/medical/tecme/logo.webp"
              alt="Tecme Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar text-white flex items-center gap-1.5 transition-colors py-1 cursor-pointer select-none text-sm sm:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl ${
                    isActive
                      ? "!font-semibold underline underline-offset-8 decoration-2"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 opacity-80" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Portal Button (Figma Button Layout) & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                variant="white"
                text="Tecme Portal"
                href="#portal"
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white" />
              ) : (
                <Menu className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar py-2 border-b border-gray-100 last:border-0 flex items-center justify-between ${
                    isActive
                      ? "text-[#005EAC] !font-bold"
                      : "text-gray-700 hover:text-[#005EAC]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
                </a>
              );
            })}
            <div className="pt-2">
              <Link
                href="#portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between bg-[#005EAC] text-white px-5 py-3 rounded-full font-semibold text-sm shadow-md"
              >
                <span>Tecme Portal</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#0063A8] flex items-center justify-center shadow-sm">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
