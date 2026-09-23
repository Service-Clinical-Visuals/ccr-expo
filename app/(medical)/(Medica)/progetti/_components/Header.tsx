"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
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
        setIsHidden(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", hasDropdown: false },
    { name: "About", href: "#", hasDropdown: false },
    { name: "Products", href: "#", hasDropdown: false },
    { name: "AED Guide", href: "#", hasDropdown: false },
    { name: "Prevention", href: "#", hasDropdown: false },
    { name: "News", href: "#", hasDropdown: false },
    { name: "Contact", href: "#", hasDropdown: false },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-white shadow-xl py-4"
          : "top-4 bg-transparent py-0"
        }`}
    >
      {/* Content Layer */}
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 xl:px-0 border border-transparent"
        : "rounded-full bg-white shadow-sm border border-gray-200 px-6 xl:px-8 min-[3800px]:px-16 py-2 xl:py-3 min-[3800px]:py-6"
        }`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] xl:w-[20%] min-[3800px]:w-[25%]">
          <Link href="#" className="w-full">
            <img src="/medical/progetti/logo.png" alt="Progetti Logo" className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] min-[3800px]:w-[80%] h-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 xl:gap-8 min-[3800px]:gap-12 flex-1 justify-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors group flex flex-col items-center relative"
            >
              <div className="flex items-center gap-1">
                <Typography variant="navbar" color="dark" className={`navbar transition-colors group-hover:text-primary ${idx === 0 ? ' text-black !font-bold' : ''}`}>
                  {link.name}
                </Typography>
                {link.hasDropdown && (
                  <MdKeyboardArrowDown className="text-[1.2em] group-hover:text-primary transition-colors" />
                )}
              </div>
              {idx === 0 && (
                <div className="absolute -bottom-1 w-full h-[2px] bg-primary "></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions - Search Box */}
        <div className="hidden xl:flex items-center">
          <div className="flex items-center gap-2 border border-[var(--color-primary)] rounded-md px-4 py-2 min-[3800px]:px-8 min-[3800px]:py-4 text-[var(--color-primary)]">
            <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search Products"
              className="bg-transparent outline-none border-none placeholder-[var(--color-primary)]/70 text-[var(--color-primary)] w-32 min-[3800px]:w-64 navbar"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-secondary focus:outline-none p-2"
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
        <div className={`xl:hidden absolute left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden transition-all duration-300 ${isScrolled ? 'top-full mt-2' : 'top-full mt-2'}`}>
          <nav className="flex flex-col py-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-100 last:border-b-0 flex items-center justify-between"
              >
                <Typography variant="navbar" color="dark" className="navbar">
                  {link.name}
                </Typography>
                {link.hasDropdown && (
                  <MdKeyboardArrowDown className="text-xl" />
                )}
              </Link>
            ))}
            <div className="py-6 flex justify-center w-full px-6">
              <Button text="Contact Us" variant="secondary" icon={<FaPhoneAlt />} className="w-full" href="#contact" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
