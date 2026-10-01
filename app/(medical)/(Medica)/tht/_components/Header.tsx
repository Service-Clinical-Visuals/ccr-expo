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
    { name: "Our Products", href: "#", hasDropdown: true },
    { name: "News", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-white shadow-md py-4 min-[2500px]:py-6 min-[3800px]:py-8 border-b border-gray-200"
          : "top-4 bg-transparent py-0"
        }`}
    >
      {/* Content Layer */}
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 xl:px-0"
        : "rounded-full bg-white border border-gray-200 px-6 xl:px-8 py-3 xl:py-4 shadow-sm min-[2500px]:px-12 min-[2500px]:py-6 min-[3800px]:px-16 min-[3800px]:py-8"
        }`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] xl:w-[20%] xl:w-[15%] min-[2500px]:w-[12%]">
          <Link href="#" className="w-full">
            <img src="/tht/logo.png" alt="THT Logo" className="w-[90%] md:w-[55%] lg:w-[55%] xl:w-[70%] min-[2500px]:w-[80%] h-auto object-contain brightness-0" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 xl:gap-10 min-[2500px]:gap-16 flex-1 justify-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group flex items-center relative"
            >
              <Typography variant="navbar" className={`navbar text-gray-800 transition-colors group-hover:text-primary ${idx === 0 ? '!font-bold text-black border-b-2 border-black pb-0.5' : ''}`}>
                {link.name}
              </Typography>
              {link.hasDropdown && (
                <svg className="w-4 h-4 ml-1.5 text-gray-800 group-hover:text-primary min-[2500px]:w-6 min-[2500px]:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center">
          <Button text="Get in Touch" href="#" showIcon={true} variant="primary" />
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-black focus:outline-none p-2"
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
        <div className={`xl:hidden absolute left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden transition-all duration-300 ${isScrolled ? 'top-full mt-2' : 'top-full mt-2'}`}>
          <nav className="flex flex-col py-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-100 last:border-b-0 flex items-center justify-between"
              >
                <Typography variant="span" className="navbar font-medium text-gray-800">
                  {link.name}
                </Typography>
                {link.hasDropdown && (
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
            <div className="py-6 flex justify-center w-full">
              <Button text="Get in Touch" href="#" showIcon={true} variant="primary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
