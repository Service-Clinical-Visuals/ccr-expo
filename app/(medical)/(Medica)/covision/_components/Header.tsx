"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Knew Systems", id: "products" },
  { name: "Hip Systems", id: "hip-systems" },
  { name: "Trauma", id: "products" },
  { name: "Spine", id: "products" },
  { name: "News", id: "news" },
  { name: "Downloads", id: "resources" },
  { name: "Contact Us", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [langOpen, setLangOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
          isScrolled || mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto shadow-md"
            : "opacity-0 -translate-y-full pointer-events-none shadow-none"
        }`}
      >
        <div className="header-bar-4k h-[72px] sm:h-[80px] lg:h-[86px] min-[2000px]:h-[115px] min-[2500px]:h-[145px] min-[3500px]:h-[220px] min-[3800px]:h-[240px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2000px]:gap-8 min-[2500px]:gap-12 min-[3500px]:gap-16 w-full">
            {/* Left: Logo Section */}
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0"
              aria-label="Covision Home"
            >
              <img
                src="/medical/covision/logo.png"
                alt="Covision Medical Technologies"
                className="header-logo-4k h-10 sm:h-12 md:h-14 lg:h-16 min-[2000px]:h-[80px] min-[2500px]:h-[105px] min-[3500px]:h-[160px] min-[3800px]:h-[180px] w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-7 min-[2000px]:space-x-9 min-[2500px]:space-x-12 min-[3500px]:space-x-16 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative cursor-pointer py-2 transition-colors navbar ${
                      isActive
                        ? "text-[#FB8021] !font-bold underline underline-offset-4"
                        : "text-[#4B5563] hover:text-[#FB8021]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: Spanish Dropdown - hidden on iPad Pro/tablets (< xl), shown only on xl desktop */}
            <div className="hidden xl:flex items-center shrink-0 relative">
              <div
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2.5 min-[2000px]:gap-3.5 min-[2500px]:gap-4 min-[3500px]:gap-6 cursor-pointer py-1.5 px-3 rounded-md hover:bg-gray-50 transition-colors select-none"
              >
                {/* Spanish Flag */}
                <span className="header-flag-4k w-7 sm:w-8 h-4.5 sm:h-5 min-[2000px]:w-11 min-[2000px]:h-7.5 min-[2500px]:w-14 min-[2500px]:h-9.5 min-[3500px]:w-24 min-[3500px]:h-16 min-[3800px]:w-28 min-[3800px]:h-18 rounded-xs overflow-hidden inline-flex flex-col shadow-xs border border-gray-300 shrink-0">
                  <span className="h-[25%] bg-[#AA151B]"></span>
                  <span className="h-[50%] bg-[#F1BF00]"></span>
                  <span className="h-[25%] bg-[#AA151B]"></span>
                </span>
                <span className="navbar text-[#333333] font-bold">
                  Spanish
                </span>
                <ChevronDown className="header-chevron-4k w-4 h-4 min-[2000px]:w-5.5 min-[2000px]:h-5.5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-11 min-[3500px]:h-11 min-[3800px]:w-12 min-[3800px]:h-12 text-[#333333] shrink-0" />
              </div>
            </div>

            {/* Mobile / Tablet Hamburger Toggle Button (shown on screens < xl, including iPad Pro) */}
            <button
              type="button"
              className="xl:hidden text-[#111827] p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8 min-[3500px]:w-14 min-[3800px]:h-14 text-[#111827]" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8 min-[3500px]:w-14 min-[3800px]:h-14 text-[#111827]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 transition-colors navbar ${
                      isActive
                        ? "text-[#FB8021] !font-bold underline underline-offset-4"
                        : "text-[#4B5563] hover:text-[#FB8021]"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Spanish language selector inside dropdown menu */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="w-7 h-4.5 rounded-xs overflow-hidden inline-flex flex-col shadow-xs border border-gray-300 shrink-0">
                <span className="h-[25%] bg-[#AA151B]"></span>
                <span className="h-[50%] bg-[#F1BF00]"></span>
                <span className="h-[25%] bg-[#AA151B]"></span>
              </span>
              <span className="navbar text-[#333333] font-bold">Spanish</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
