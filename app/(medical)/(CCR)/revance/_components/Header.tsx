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
      // Estimate banner height: aspect-video on md+, taller on mobile
      const bannerHeight = window.innerWidth >= 768 ? window.innerWidth * 0.5625 : window.innerWidth * 1.25;
      const threshold = bannerHeight * 0.8;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
        setIsHidden(false);
      } else if (window.scrollY > 100) {
        setIsScrolled(false);
        setIsHidden(true);
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Science", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-[#111111] shadow-xl py-4"
          : "top-4 bg-transparent py-0"
        }`}
    >
      {/* Content Layer */}
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 xl:px-0 border border-transparent"
        : "rounded-3xl bg-[#111111] px-6 xl:px-8 py-3 xl:py-4"
        }`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] xl:w-[20%] xl:w-[15%]">
          <Link href="#" className="w-full">
            <img src="/revance/logo.png" alt="Revance Logo" className="w-[90%] md:w-[55%] lg:w-[55%] xl:w-[60%] h-auto object-contain brightness-0 invert" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 xl:gap-8 flex-1 justify-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group flex flex-col items-center"
            >
              <Typography variant="navbar" color="white" className={`navbar transition-colors group-hover:text-gray-300 ${idx === 0 ? '!font-bold' : ''}`}>
                {link.name}
              </Typography>
              {idx === 0 && (
                <div className="w-6 h-0.5 bg-white mt-1"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center">
          <Button text="Get in Touch" href="#" showIcon={true} variant="secondary" />
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-white focus:outline-none p-2"
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
        <div className={`xl:hidden absolute left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 bg-[#111111] rounded-3xl shadow-2xl border border-white/10 flex flex-col z-50 overflow-hidden transition-all duration-300 ${isScrolled ? 'top-full mt-2' : 'top-full mt-2'}`}>
          <nav className="flex flex-col py-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-white/10 last:border-b-0"
              >
                <Typography variant="span" color="white" className="navbar font-medium">
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="py-6 flex justify-center w-full">
              <Button text="Get in Touch" href="#" showIcon={true} variant="secondary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
