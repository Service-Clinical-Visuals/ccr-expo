"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Menu, Search, X } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

interface NavLink {
  name: string;
  id: string;
  dropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products", dropdown: true },
  { name: "Services", id: "services", dropdown: true },
  { name: "Company", id: "company", dropdown: true },
  { name: "News & Events", id: "news" },
  { name: "Contacts", id: "contact" },
];

const circleButtonClass =
  "flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-colors w-9 h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22";
const circleIconClass =
  "w-[18px] h-[18px] 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector("header");
      const yOffset = -(header?.offsetHeight ?? 90);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Stay hidden over the hero; slide in once the hero has been scrolled past
    const handleScroll = () => {
      const hero = document.getElementById("home");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 100 : window.innerHeight * 0.8;
      setIsVisible(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-[#E5E5E5] shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="custom-container h-[64px] sm:h-[72px] xl:h-[76px] 2xl:h-[92px] min-[2500px]:h-[124px] min-[3800px]:h-[170px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="shrink-0"
          aria-label="Riester Home"
        >
          <img
            src="/medical/rudolf/logo.webp"
            alt="Riester Logo"
            className="w-[140px] sm:w-[160px] xl:w-[180px] 2xl:w-[200px] min-[2500px]:w-[280px] min-[3800px]:w-[390px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 min-[2500px]:gap-11 min-[3800px]:gap-16">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`navbar flex items-center gap-0.5 min-[3800px]:gap-1.5 whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-primary !font-bold" : "text-[#1A1A1A] hover:text-primary"
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <IoMdArrowDropdown className="w-4 h-4 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Search + Language */}
        <div className="flex items-center gap-2 sm:gap-3 2xl:gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 shrink-0">
          <button type="button" aria-label="Search" className={`hidden sm:flex ${circleButtonClass}`}>
            <Search className={circleIconClass} strokeWidth={2} />
          </button>
          <span className="hidden sm:block w-px self-stretch my-1 bg-[#E5E5E5]" />
          <button type="button" aria-label="Change language" className={`hidden sm:flex ${circleButtonClass}`}>
            <Globe className={circleIconClass} strokeWidth={1.75} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="xl:hidden p-1 ml-1 text-[#1A1A1A] hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
            ) : (
              <Menu className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full inset-x-0 bg-white border-t border-[#E5E5E5] shadow-xl max-h-[calc(100dvh-64px)] overflow-y-auto">
          <nav className="custom-container flex flex-col py-4">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar flex items-center justify-between py-3 border-b border-gray-100 last:border-0 transition-colors ${
                    isActive ? "text-primary !font-bold" : "text-[#1A1A1A] hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <IoMdArrowDropdown className="w-5 h-5 shrink-0" />}
                </a>
              );
            })}

            {/* Search + Language on phones (hidden in the bar there) */}
            <div className="flex sm:hidden items-center gap-3 pt-4">
              <button type="button" aria-label="Search" className={circleButtonClass}>
                <Search className={circleIconClass} strokeWidth={2} />
              </button>
              <button type="button" aria-label="Change language" className={circleButtonClass}>
                <Globe className={circleIconClass} strokeWidth={1.75} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
