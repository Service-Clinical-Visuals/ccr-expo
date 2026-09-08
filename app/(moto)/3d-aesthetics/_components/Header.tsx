"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about", dropdown: true },
  { name: "Elite MD", id: "elite-md" },
  { name: "Products", id: "products", dropdown: true },
  { name: "Training & Support", id: "training-support", dropdown: true },
  { name: "News", id: "news" },
  { name: "Clinic Finder", id: "clinic-finder" },
  { name: "Shop", id: "shop" },
]

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

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
      const y = window.scrollY;
      const threshold = typeof window !== "undefined" ? window.innerHeight : 820;

      if (y < 150) {
        setScrollState("top");
      } else if (y < threshold) {
        setScrollState("hidden");
      } else {
        setScrollState("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isTop = scrollState === "top";
  const isSticky = scrollState === "sticky";

  return (
    <>
      <div className="h-[85px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full block z-70 transition-all duration-500 transform ${isSticky || (mobileMenuOpen && !isTop)
          ? "fixed translate-y-0 opacity-100 shadow-md border-b border-gray-100 bg-white"
          : isTop
            ? "absolute translate-y-0 opacity-100"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Main Navigation */}
        <div className="relative z-10 bg-white w-full h-[85px]! flex items-center">
          <Container className="flex items-center justify-between gap-4 xl:gap-6 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0 rounded-xl p-1 hover:opacity-90 transition-opacity">
              <img
                src="/moto/3d-aesthetics/logo.png"
                alt="3D Aesthetics Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7 shrink-0 font-medium">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`relative group navlink transition-colors duration-200 cursor-pointer flex items-center gap-1 whitespace-nowrap hover:text-primary ${isActive ? "underline underline-offset-8 decoration-2" : ""}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown size={14} className="text-[#1A1A1A]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Enquire Button */}
            <div className="hidden xl:flex items-center shrink-0">
              <a
                href="#enquire"
                onClick={(e) => handleScrollTo(e, "enquire")}
                className="navlink  text-white! inline-flex items-center justify-center bg-primary hover:bg-primary-hover px-8 py-2.5 rounded-sm transition-colors"
              >
                Enquire
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto text-[#1A1A1A] font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-gray-100 pb-3 block navlinkcursor-pointer flex justify-between items-center ${isActive ? "text-secondary font-bold" : "hover:text-secondary"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={16} className="opacity-50" />
                  )}
                </a>
              );
            })}
            {/* Mobile Enquire Button */}
            <a
              href="#enquire"
              onClick={(e) => handleScrollTo(e, "enquire")}
              className=" navlink mt-2 inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-base font-medium px-6 py-3 rounded-md transition-colors"
            >
              Enquire
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
