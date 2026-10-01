"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check in case the page loads scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm h-[80px] lg:h-[100px] min-[2500px]:h-[130px] min-[3800px]:h-[160px] flex items-center transition-all duration-500 ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="custom-container flex items-center justify-between w-full">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/medical/dlr-meda/logo.png"
            alt="DLR Medikal Logo"
            className="w-[180px] sm:w-[210px] lg:w-[240px] min-[2500px]:w-[320px] min-[3800px]:w-[450px] h-auto max-h-[50px] min-[2500px]:max-h-[60px] min-[3800px]:max-h-[75px] object-contain"
          />
        </Link>

        {/* Right side: Nav + Button */}
        <div className="hidden min-[1026px]:flex items-center gap-8 xl:gap-12 min-[1600px]:gap-16 min-[2500px]:gap-24 min-[3800px]:gap-32">
          <nav className="flex items-center gap-6 xl:gap-8 min-[1600px]:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-20">
            <Link
              href="#home"
              className="navbar text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-hover)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="navbar text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="navbar text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Products
            </Link>
            <Link
              href="#news"
              className="navbar text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              News
            </Link>
          </nav>

          <Button text="Contact Us" href="#contact" variant="primary" />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="min-[1026px]:hidden p-2 text-[#004080] hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1026px]:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 text-slate-800 shadow-xl animate-in slide-in-from-top duration-300">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-gray-100 text-[var(--color-primary)] font-semibold"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-gray-100 hover:text-[var(--color-primary)]"
          >
            About Us
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-gray-100 hover:text-[var(--color-primary)]"
          >
            Products
          </Link>
          <Link
            href="#news"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar py-2 border-b border-gray-100 hover:text-[var(--color-primary)]"
          >
            News
          </Link>
          <div className="pt-2 flex justify-center">
            <Button text="Contact Us" href="#contact" variant="primary" />
          </div>
        </div>
      )}
    </header>
  );
}
