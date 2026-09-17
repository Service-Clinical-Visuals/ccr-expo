"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/tasarimmed", active: true },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Distributors", href: "#distributors" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu if we scroll back to top
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0  w-full z-50 bg-[#F9F9F9] h-[80px] shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex h-full w-full">
        {/* Left Dark Section */}
        <div
          className="relative h-full flex items-center bg-[#0B1126] pl-4 sm:pl-8 lg:pl-16 xl:pl-32 w-[65%] sm:w-[50%] lg:w-[40%] xl:w-[30%]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0% 100%)'
          }}
        >
          <Link href="/tasarimmed" className="flex items-center gap-3 relative z-10">
            <img
              src="/medical/tasarimmed/logo.png"
              alt="tasarimmed"
              className="max-h-[35px] sm:max-h-[40px] lg:max-h-[50px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Navigation Section */}
        <div className="flex-1 h-full flex items-center justify-end pr-4 sm:pr-8 lg:pr-16 xl:pr-24">

          <nav className="hidden lg:flex items-center gap-10 xl:gap-12 font-inter">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`header-link transition-colors relative py-1 ${item.active
                  ? "text-[#0B1126] font-bold border-b-[2px] border-[#0B1126]"
                  : "text-[#4B5563] hover:text-[#0B1126] font-normal"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-12 bg-[#00000059] mx-6 xl:mx-8"></div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-2 cursor-pointer font-inter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="68" height="40" className="rounded-sm object-cover">

              <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
              </g>
            </svg>
            <span className="header-link font-bold text-[#0B1126]">EN</span>
            <ChevronDown className="w-5 h-5 text-[#0B1126]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden ml-4 text-[#0B1126] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-4 z-40 font-inter">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`header-link ${item.active ? "text-[#0B1126] font-bold" : "text-[#4B5563] font-normal"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 mt-2 flex items-center gap-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="28" height="18" className="rounded-sm object-cover border border-gray-200 shadow-sm">
              <clipPath id="s_mobile">
                <path d="M0,0 v30 h60 v-30 z" />
              </clipPath>
              <clipPath id="t_mobile">
                <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z" />
              </clipPath>
              <g clipPath="url(#s_mobile)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t_mobile)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
              </g>
            </svg>
            <span className="header-link font-bold text-[#0B1126]">EN</span>
            <ChevronDown className="w-4 h-4 text-[#0B1126]" />
          </div>
        </div>
      )}
    </header>
  );
}
