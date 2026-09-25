"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActiveSection(name);
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 ${
          scrolled
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, "#hero", "Home")}
              className="inline-flex items-center select-none group transition-transform duration-200 active:scale-95 shrink-0"
              aria-label="ERETNA Medical Devices Home"
            >
              <div className="relative h-[34px] sm:h-[38px] md:h-[40px] min-[2500px]:h-[56px] min-[3800px]:h-[76px] w-[180px] sm:w-[210px] md:w-[230px] min-[2500px]:w-[320px] min-[3800px]:w-[440px]">
                <img
                  src="/medical/eretna/logo.png"
                  alt="ERETNA Medical Devices"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </a>

            {/* Desktop Navigation Links (hidden on tablet and mobile, shown xl and above) */}
            <nav className="hidden xl:flex items-center gap-7 2xl:gap-10 min-[2500px]:gap-16">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href, item.name)}
                  className={`navbar transition-colors relative py-1 cursor-pointer ${
                    activeSection === item.name
                      ? "font-semibold text-[#3452A7] underline underline-offset-4"
                      : "font-normal text-[#111111] hover:text-[#3452A7]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right CTA Button: Request Quote (desktop) */}
            <div className="hidden xl:flex items-center shrink-0">
              <Button
                text="Request Quote"
                href="#contact"
                variant="primary"
                showIcon={false}
                className="!py-2 sm:!py-2.5 min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
              />
            </div>

            {/* Mobile & Tablet Hamburger Toggle Button (shown on tablet < xl) */}
            <div className="xl:hidden flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#111111] hover:text-[#3452A7] hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[72px] sm:top-[80px] lg:top-[86px] bg-white border-b border-gray-200 shadow-2xl px-6 sm:px-10 py-6 transition-all duration-300 max-h-[calc(100vh-86px)] overflow-y-auto z-40">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href, item.name)}
                  className={`navbar py-2 transition-colors cursor-pointer text-base sm:text-lg border-b border-gray-100 ${
                    activeSection === item.name
                      ? "font-semibold text-[#3452A7]"
                      : "text-[#111111] hover:text-[#3452A7]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  text="Request Quote"
                  href="#contact"
                  variant="primary"
                  showIcon={false}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center justify-center !py-3"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
