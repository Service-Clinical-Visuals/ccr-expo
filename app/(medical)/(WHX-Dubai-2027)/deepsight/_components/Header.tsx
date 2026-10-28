"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Applications", id: "applications" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

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
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-[#E5E5E5] shadow-md transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
    >
      <div className="custom-container h-[60px] sm:h-[64px] 2xl:h-[72px] min-[2500px]:h-[100px] min-[3800px]:h-[136px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="shrink-0"
          aria-label="Deep Sight Home"
        >
          <img
            src="/(WHX-Dubai-2027)/deepsight/logo.webp"
            alt="Deep Sight Technology Logo"
            className="w-[76px] sm:w-[84px] 2xl:w-[100px] min-[2500px]:w-[134px] min-[3800px]:w-[184px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`navbar flex items-center gap-0.5 min-[3800px]:gap-1.5 whitespace-nowrap cursor-pointer transition-colors duration-200 ${isActive ? "text-primary !font-bold" : "text-primary hover:text-secondary"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-3 min-[3800px]:gap-6 shrink-0">
          <div className="hidden sm:block">
            <Button text="Request Quote" variant="primary" href="#contact" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="xl:hidden p-1 ml-1 text-primary hover:text-secondary transition-colors"
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
        <div className="xl:hidden absolute top-full inset-x-0 bg-white border-t border-[#E5E5E5] shadow-xl max-h-[calc(100dvh-60px)] overflow-y-auto">
          <nav className="custom-container flex flex-col py-4">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar flex items-center justify-between py-3 border-b border-gray-100 last:border-0 transition-colors ${isActive ? "text-primary !font-bold" : "text-primary hover:text-secondary"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* CTA on phones (hidden in the bar there) */}
            <div className="sm:hidden pt-4">
              <Button text="Request Quote" variant="primary" href="#contact" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
