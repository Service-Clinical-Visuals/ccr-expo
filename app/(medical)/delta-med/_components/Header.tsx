"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

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
        setIsHidden(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; href: string; dropdown?: string[] }[] = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#", dropdown: ["Overview", "Our Team", "History"] },
    { name: "e-catalogue", href: "#", dropdown: ["Browse Catalogue", "Categories"] },
    { name: "Create Catalogue", href: "#" },
    { name: "Distributors", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-100"
          : "top-4 bg-transparent py-0"
        }`}
    >
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 lg:px-0"
        : "rounded-[1.5rem] border border-gray-200 bg-white shadow-sm px-6 lg:px-8 py-3"
        }`}>

        <div className="flex-shrink-0 flex items-center">
          <Link href="#" className="block">
            <img src="/medical/delta-med/logo.png" alt="Numantec Logo" className="w-[130px] md:w-[150px] lg:w-[150px] min-[3800px]:w-[380px] h-auto object-contain" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
          {navLinks.map((link, idx) => {
            const isActive = idx === 0;
            const hasDropdown = !!link.dropdown;
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 pb-1 border-b-2 transition-colors ${isActive
                    ? "border-[var(--color-primary)]"
                    : "border-transparent"
                    }`}
                >
                  <Typography
                    variant="span"
                    color={isActive ? "primary" : "dark"}
                    className={`navbar transition-colors group-hover:text-[var(--color-primary)] ${isActive ? "font-bold" : ""}`}
                  >
                    {link.name}
                  </Typography>
                  {hasDropdown && (
                    <ChevronDown
                      className="w-4 h-4 text-[#121C22] group-hover:text-[var(--color-primary)] transition-all duration-200 group-hover:rotate-180"
                      strokeWidth={2}
                    />
                  )}
                </Link>

                {hasDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="min-w-[190px] bg-white border border-gray-100 rounded-xl shadow-lg py-2 flex flex-col">
                      {link.dropdown!.map((item) => (
                        <a key={item} href="#" className="px-4 py-2 hover:bg-gray-50 transition-colors">
                          <Typography variant="span" color="dark" className="navbar text-sm">
                            {item}
                          </Typography>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-3 bg-[var(--color-primary)] hover:brightness-95 transition-all rounded-md pl-6 pr-2 py-2 shadow-sm group"
          >
            <Typography variant="span" color="white" className="button whitespace-nowrap">
             Read more
            </Typography>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-transparent transition-colors shrink-0">
              <ArrowRight className="w-4 h-4 text-white! group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
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

      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute left-0 w-full bg-white border-b border-gray-100 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full`}>
          <nav className="flex flex-col py-4 custom-container">
            {navLinks.map((link, idx) => {
              const isActive = idx === 0;
              const hasDropdown = !!link.dropdown;
              const isOpen = openMobileDropdown === link.name;
              return (
                <div key={link.name} className="border-b border-gray-100">
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href={link.href}
                      onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      <Typography variant="span" color={isActive ? "primary" : "dark"} className={`navbar ${isActive ? "font-bold" : ""}`}>
                        {link.name}
                      </Typography>
                    </Link>
                    {hasDropdown && (
                      <button
                        type="button"
                        onClick={() => setOpenMobileDropdown(isOpen ? null : link.name)}
                        className="p-2 -mr-2"
                      >
                        <ChevronDown className={`w-4 h-4 text-[#121C22] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} strokeWidth={2} />
                      </button>
                    )}
                  </div>
                  {hasDropdown && isOpen && (
                    <div className="flex flex-col pb-3 pl-3">
                      {link.dropdown!.map((item) => (
                        <a
                          key={item}
                          href="#"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2"
                        >
                          <Typography variant="span" color="muted" className="navbar text-sm">
                            {item}
                          </Typography>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="py-6 flex flex-col gap-4 items-start">
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 bg-[var(--color-primary)] hover:brightness-95 transition-all rounded-full pl-6 pr-2 py-2 shadow-sm group"
              >
                <Typography variant="span" color="dark" className="button whitespace-nowrap">
                  Get In Touch
                </Typography>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/40 group-hover:bg-white/60 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#2A2421]" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
