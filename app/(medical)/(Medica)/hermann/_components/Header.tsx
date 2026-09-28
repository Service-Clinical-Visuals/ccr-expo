"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

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
              src="/medical/hermann/logo.png"
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
                src="/medical/hermann/arrow.png"
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

      {/* Mobile & Tablet Slide-Over Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] sm:max-w-[420px] bg-white shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <Link
                  href="#home"
                  onClick={(e) => handleScrollTo(e, "home")}
                  className="inline-block"
                >
                  <img
                    src="/medical/hermann/logo.png"
                    alt="Hermann Logo"
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5 py-6">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.id;
                  return (
                    <a
                      key={link.name}
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-[12px] text-base sm:text-lg transition-all ${
                        isActive
                          ? "bg-[#FFF3F3] text-[var(--color-primary)] font-semibold shadow-xs"
                          : "text-[var(--color-secondary)] hover:bg-gray-50 hover:text-[var(--color-primary)] font-medium"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                      ) : (
                        <span className="text-gray-300 text-sm">→</span>
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom: CTA & Quick Contact */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-[12px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all group"
              >
                <span className="button whitespace-nowrap text-white font-medium">Get in Touch</span>
                <img
                  src="/medical/hermann/arrow.png"
                  alt=""
                  className="w-3.5 h-auto group-hover:translate-x-1 transition-transform object-contain"
                />
              </Link>

              <div className="space-y-2 pt-1 text-xs sm:text-sm text-[#4A4A4A]">
                <a
                  href="tel:+49746399670"
                  className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                  <span>+49 74 63 - 99 67 - 0</span>
                </a>
                <a
                  href="mailto:info@hermann-medizintechnik.de"
                  className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                  <span className="break-all">info@hermann-medizintechnik.de</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
