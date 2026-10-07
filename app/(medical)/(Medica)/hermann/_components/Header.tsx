"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "History", id: "history" },
  { name: "Contact Us", id: "contact" },
];

export default function Header() {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "sticky">("initial");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.getElementById("home");
      const heroThreshold = hero ? hero.offsetTop + hero.offsetHeight - 140 : window.innerHeight - 100;

      if (scrollY < 40) {
        setHeaderState("initial");
      } else if (scrollY < heroThreshold) {
        setHeaderState("hidden");
      } else {
        setHeaderState("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  const isSticky = headerState === "sticky";
  const isHidden = headerState === "hidden";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isSticky
          ? "pt-0 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/90"
          : "pt-3 sm:pt-4 lg:pt-5 min-[2000px]:pt-6 min-[2500px]:pt-7 min-[3800px]:pt-9 bg-transparent"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ${
            isSticky
              ? "py-2 sm:py-2.5 lg:py-3 px-0 rounded-none bg-transparent border-0 shadow-none"
              : "bg-white/95 backdrop-blur-md border border-[rgba(30,30,30,0.25)] rounded-[20px] min-[3800px]:rounded-[40px] px-5 sm:px-8 lg:px-10 py-2 sm:py-2.5 lg:py-3 min-[2500px]:py-3.5 min-[3800px]:py-5 shadow-sm"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0"
            aria-label="Hermann Home"
          >
            <img
              src="/medical/hermann/logo.webp"
              alt="Hermann Logo"
              className="h-5 sm:h-6 md:h-7 lg:h-8 min-[2500px]:h-[40px] min-[3800px]:h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7 2xl:space-x-9 min-[2500px]:space-x-14 min-[3800px]:space-x-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-primary)] !font-semibold underline underline-offset-4 decoration-2"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-4 py-2 lg:px-5 lg:py-2.5 min-[2500px]:py-3 min-[3800px]:px-8 min-[3800px]:py-3.5 rounded-[10px] min-[3800px]:rounded-[20px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all duration-300 group"
            >
              <span className="button whitespace-nowrap text-white font-medium">Get in Touch</span>
              <img
                src="/medical/hermann/arrow.webp"
                alt=""
                className="w-3.5 h-auto min-[3800px]:w-6 ml-2 min-[3800px]:ml-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0 object-contain"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="xl:hidden p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none"
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
        <div className={`xl:hidden fixed inset-x-4 ${isSticky ? "top-[64px]" : "top-[78px] sm:top-[86px]"} bg-white border border-[rgba(30,30,30,0.25)] rounded-[20px] shadow-2xl p-6 flex flex-col space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto animate-in slide-in-from-top-3 duration-200 z-50`}>
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`block py-1.5 navbar transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              </div>
            );
          })}

          <div className="pt-2">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-[10px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-colors group"
            >
              <span className="button whitespace-nowrap text-white font-medium">Get in Touch</span>
              <img
                src="/medical/hermann/arrow.webp"
                alt=""
                className="w-3.5 h-auto ml-2 group-hover:translate-x-1 transition-transform object-contain"
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
