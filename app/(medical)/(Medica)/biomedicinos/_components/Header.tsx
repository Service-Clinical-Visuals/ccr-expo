"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "News", href: "#news" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md py-4" : "bg-white py-6"
        }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center shrink-0">
          <img
            src="/medical/biomedicinos/logo.png"
            alt="Biomedicinos Logo"
            className="w-[180px] sm:w-[210px] lg:w-[260px] min-[2500px]:w-[320px] min-[3800px]:w-[400px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden min-[1026px]:flex items-center gap-6 xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Typography
                variant="navbar"
                color="secondary"
                weight="semibold"
                className="navbar hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button text="Contact Us" href="#contact" variant="primary" showIcon={true} />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1026px]:hidden p-2 text-[var(--color-primary)] hover:text-black transition-colors"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="min-[1026px]:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              <Typography variant="navbar" color="secondary" weight="medium" className="navbar">
                {link.label}
              </Typography>
            </Link>
          ))}
          <div className="pt-2 sm:hidden">
            <Button text="Contact Us" href="#contact" variant="primary" showIcon={true} />
          </div>
        </div>
      )}
    </header>
  );
}
