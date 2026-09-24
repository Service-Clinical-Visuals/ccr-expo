"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const bannerHeight = window.innerHeight * 0.8; // Trigger point slightly before end of banner

      if (currentScrollY < 50) {
        setIsScrolled(false);
        setIsHidden(false);
      } else if (currentScrollY >= 50 && currentScrollY < bannerHeight) {
        setIsScrolled(true);
        setIsHidden(true);
      } else {
        setIsScrolled(true);
        setIsHidden(false);
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Who are we ?", href: "#" },
    { name: "Medical Devices", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Brands", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 w-full flex justify-center top-0 ${isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-white shadow-md py-2 min-[3800px]:py-4" : "bg-white py-4 min-[3800px]:py-8"
        }`}
    >
      <div className={`custom-container flex items-center justify-between px-6 xl:px-8 py-3 min-[3800px]:py-4 bg-white transition-all duration-300 ${isScrolled ? '' : 'border border-gray-200 shadow-sm'}`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] xl:w-[20%]">
          <Link href="/" className="flex items-center">
            <img
              src="/medical/prince-medical/logo.png"
              alt="Prince Medical Logo"
              className="h-8 xl:h-10 min-[3800px]:h-20 w-auto object-contain object-left"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group flex flex-col items-center relative"
            >
              <Typography
                variant="navbar"
                className={`navbar transition-colors ${link.active
                  ? "text-primary font-bold"
                  : "text-foreground group-hover:text-primary"
                  }`}
              >
                {link.name}
              </Typography>
              {link.active && (
                <div className="absolute -bottom-2 w-full h-0.5 bg-primary"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center">
          <button className="bg-primary text-white hover:bg-primary-hover transition-colors px-6 py-2.5 flex items-center justify-center group outline-none active:scale-95 shadow-sm">
            <span className="button mr-2 text-[15px]">Search Here</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-primary focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-100 flex flex-col z-50 overflow-hidden">
          <nav className="flex flex-col py-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-100 last:border-b-0"
              >
                <Typography variant="span" className={`navbar ${link.active ? 'text-primary font-bold' : 'text-foreground font-medium'}`}>
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="py-6 flex justify-center w-full">
              <button className="bg-primary text-white hover:bg-primary-hover transition-colors px-6 py-3 w-full flex items-center justify-center">
                <span className="button mr-2">Search Here</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
