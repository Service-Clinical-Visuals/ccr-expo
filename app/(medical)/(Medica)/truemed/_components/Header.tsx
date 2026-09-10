"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Corporate", id: "corporate" },
  { name: "News", id: "news" },
  { name: "Contact Us", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

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
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"
          }`}
      >
        <div className="h-[72px] sm:h-[80px] lg:h-[86px] min-[2500px]:h-[130px] min-[3800px]:h-[180px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full px-4 sm:px-6 lg:px-8 min-[2500px]:px-14 min-[3800px]:px-20">
            {/* Left: Logo Section */}
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0"
              aria-label="TRUEMED Home"
            >
              <img
                src="/truemed/logo.png"
                alt="TRUEMED Logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 min-[2500px]:h-13 min-[3800px]:h-22 w-[70%]  object-contain"
              />
            </Link>

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative cursor-pointer py-2 transition-colors navbar ${isActive
                      ? "text-[#206A70] !font-semibold underline"
                      : "text-[#1E1E1E] hover:text-[#44BCE2]"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: Search Bar */}
            <div className="hidden lg:flex items-center shrink-0 relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="h-[18px] w-[18px] text-[#206A70] stroke-[2.5]" />
                </div>
                <input
                  type="text"
                  placeholder="Search Product"
                  className="block w-64 xl:w-72 pl-12 pr-4 py-[9px] border-[1.5px] border-[#206A70] rounded-xl leading-5 bg-white placeholder-[#206A70] font-medium text-[#206A70] focus:outline-none focus:ring-1 focus:ring-[#206A70] focus:border-[#206A70] text-[15px] transition-colors"
                />
              </div>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="xl:hidden text-[#111827] p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8 text-[#111827]" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-[#111827]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100 last:border-0 pb-3">
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 transition-colors navbar ${isActive
                      ? "text-[#206A70]"
                      : "text-gray-700 hover:text-[#44BCE2]"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}

            {/* Mobile Search */}
            <div className="pt-4 flex flex-col gap-3">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="h-[18px] w-[18px] text-[#206A70] stroke-[2.5]" />
                </div>
                <input
                  type="text"
                  placeholder="Search Product"
                  className="block w-full pl-12 pr-4 py-[11px] border-[1.5px] border-[#206A70] rounded-xl leading-5 bg-white placeholder-[#206A70] font-medium text-[#206A70] focus:outline-none focus:ring-1 focus:ring-[#206A70] focus:border-[#206A70] text-[15px] transition-colors"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
