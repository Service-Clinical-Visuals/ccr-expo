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
  { name: "Product", id: "products" },
  { name: "Services", id: "services" },
  { name: "Support", id: "support" },
  { name: "Knowledge Centre", id: "knowledge" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector("header");
      const yOffset = -(header?.offsetHeight ?? 56);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Bar is always visible; it only gains a shadow once the page has scrolled
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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
      className={`fixed top-0 left-0 w-full z-50 bg-primary border-b border-white/10 transition-shadow duration-300 ${
        isScrolled || mobileMenuOpen ? "shadow-lg" : ""
      }`}
    >
      <div className="custom-container h-[56px] sm:h-[60px] 2xl:h-[64px] min-[2500px]:h-[96px] min-[3800px]:h-[128px] grid grid-cols-[auto_1fr_auto] items-center gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="shrink-0"
          aria-label="Fluke Biomedical Home"
        >
          <img
            src="/medical/fluke/logo.webp"
            alt="Fluke Biomedical Logo"
            className="w-[80px] sm:w-[90px] 2xl:w-[96px] min-[2500px]:w-[140px] min-[3800px]:w-[190px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation (centred in the middle column) */}
        <nav className="hidden xl:flex justify-center items-center gap-8 2xl:gap-[34px] min-[2500px]:gap-[52px] min-[3800px]:gap-[70px]">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`navbar whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="col-start-3 flex items-center justify-end gap-3 min-[3800px]:gap-6">
          <div className="hidden sm:block">
            <Button text="Contact Us" variant="primary" href="#contact" showIcon={false} />
          </div>

          <button
            type="button"
            className="xl:hidden p-1 text-white hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full inset-x-0 bg-primary border-t border-white/10 shadow-xl max-h-[calc(100dvh-56px)] overflow-y-auto">
          <nav className="custom-container flex flex-col py-3">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar py-3 border-b border-white/10 last:border-0 transition-colors ${
                    isActive ? "text-secondary" : "text-white hover:text-secondary"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* CTA on phones (hidden in the bar there) */}
            <div className="sm:hidden pt-4 pb-2">
              <Button text="Contact Us" variant="primary" href="#contact" showIcon={false} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
