"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLinkItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { name: "Home", href: "#" },
    {
      name: "Who we are",
      href: "#about",
      dropdown: [
        { label: "Overview", href: "#about" },
        { label: "Our Story", href: "#about" },
        { label: "Our Values", href: "#values" },
      ],
    },
    {
      name: "Products",
      href: "#products",
      dropdown: [
        { label: "All Products", href: "#products" },
        { label: "Vascular Access", href: "#products" },
        { label: "Infusion Therapy", href: "#products" },
      ],
    },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Quality", href: "#quality" },
    { name: "News", href: "#news" },
    { name: "Certifications", href: "#brands" },
  ];

  return (
    <header className="fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center top-3 sm:top-4 md:top-5">
      <div
        className={`custom-container flex items-center justify-between transition-all duration-300 rounded-tl-[1.5rem] sm:rounded-tl-[2rem] rounded-br-[1.5rem] sm:rounded-br-[2rem] rounded-tr-none rounded-bl-none border border-gray-200/90 bg-white/98 backdrop-blur-md px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Left Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="#" className="block">
            <img
              src="/medical/delta-med/logo.png"
              alt="NUMANTEC Logo"
              className="w-[130px] sm:w-[150px] lg:w-[160px] min-[3800px]:w-[380px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8">
          {navLinks.map((link) => {
            const isActive = link.name === "Home";
            const hasDropdown = !!link.dropdown;

            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 pb-1 border-b-2 transition-colors whitespace-nowrap text-[13.5px] xl:text-[15px] ${
                    isActive
                      ? "border-[#1980AA] text-[#1980AA] font-semibold"
                      : "border-transparent text-[#222222] hover:text-[#1980AA] font-medium"
                  }`}
                >
                  <span>{link.name}</span>
                  {hasDropdown && (
                    <ChevronDown
                      className="w-3.5 h-3.5 text-[#333333] group-hover:text-[#1980AA] transition-transform duration-200 group-hover:rotate-180 shrink-0"
                      strokeWidth={2.2}
                    />
                  )}
                </Link>

                {hasDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="min-w-[190px] bg-white border border-gray-100 rounded-xl shadow-xl py-2 flex flex-col">
                      {link.dropdown!.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="px-4 py-2 hover:bg-gray-50 text-[14px] text-gray-700 hover:text-[#1980AA] font-medium transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button text="Read More" href="#about" variant="primary" />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="text-gray-800 hover:text-[#1980AA] focus:outline-none p-1.5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 px-4 sm:px-6 z-50">
          <div className="custom-container bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none border border-gray-200/90 shadow-xl p-5 flex flex-col gap-3">
            <nav className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((link) => {
                const isActive = link.name === "Home";
                const hasDropdown = !!link.dropdown;
                const isOpen = openMobileDropdown === link.name;

                return (
                  <div key={link.name} className="py-2.5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => {
                          if (!hasDropdown) {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`text-base font-medium transition-colors ${
                          isActive
                            ? "text-[#1980AA] font-semibold"
                            : "text-[#222222] hover:text-[#1980AA]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {hasDropdown && (
                        <button
                          type="button"
                          onClick={() => setOpenMobileDropdown(isOpen ? null : link.name)}
                          className="p-1.5 text-gray-500 hover:text-[#1980AA]"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-[#1980AA]" : ""
                            }`}
                            strokeWidth={2}
                          />
                        </button>
                      )}
                    </div>
                    {hasDropdown && isOpen && (
                      <div className="flex flex-col mt-2 pl-3 border-l-2 border-[#1980AA]/30 space-y-2">
                        {link.dropdown!.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-1 text-sm text-gray-600 hover:text-[#1980AA] font-medium"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="pt-2">
              <Button
                text="Read More"
                href="#about"
                variant="primary"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

