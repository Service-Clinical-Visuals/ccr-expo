"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home", href: "/zinnanti-surgical-3" },
  { name: "About", id: "about", href: "/zinnanti-surgical-3/about" },
  { name: "Specialities", id: "specialities", href: "/zinnanti-surgical-3#specialities", hasDropdown: true },
  { name: "Videos", id: "experience-360", href: "/zinnanti-surgical-3#experience-360" },
  { name: "IFUs", id: "contact", href: "/zinnanti-surgical-3#contact" },
];

/**
 * Header Navigation Component - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 */
const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isAboutPage = pathname?.includes("/about");

  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "fixed">("initial");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(isAboutPage ? "about" : "home");

  useEffect(() => {
    if (isAboutPage) {
      setActiveLink("about");
    } else {
      setActiveLink("home");
    }
  }, [pathname, isAboutPage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    if (link.id === "about") {
      if (isAboutPage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveLink("about");
      setMobileMenuOpen(false);
      return;
    }

    if (isAboutPage) {
      setMobileMenuOpen(false);
      return;
    }

    // On home page, smooth scroll to section
    e.preventDefault();
    setActiveLink(link.id);
    const el = document.getElementById(link.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (link.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : 600;
      const threshold = heroHeight - 100;

      if (isAboutPage) {
        setHeaderState(scrollY > 20 ? "fixed" : "initial");
      } else {
        if (scrollY <= 30) {
          setHeaderState("initial");
        } else if (scrollY > 30 && scrollY < threshold) {
          setHeaderState("hidden");
        } else {
          setHeaderState("fixed");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAboutPage]);

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

  const isFixed = headerState === "fixed";
  const isHidden = headerState === "hidden";

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isFixed || isAboutPage
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-3 min-[2500px]:py-5 min-[3800px]:py-8 border-b border-gray-200"
          : "top-0 bg-white py-4 sm:py-5 min-[2500px]:py-7 min-[3800px]:py-10 shadow-sm"
      }`}
    >
      <div className="custom-container">
        <div className="w-full flex items-center justify-between gap-4 relative">
          
          {/* Left: Logo */}
          <Link
            href="/zinnanti-surgical-3"
            onClick={(e) => {
              if (!isAboutPage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center shrink-0 z-10"
            aria-label="Zinnanti Surgical Home"
          >
            <img
              src="/medical/zinnanti-surgical-3/logo.webp"
              alt="Zinnanti Surgical Logo"
              className="h-9 sm:h-11 md:h-12 min-[2000px]:h-14 min-[2500px]:h-[75px] min-[3800px]:h-[110px] w-auto object-contain transition-transform"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center space-x-7 2xl:space-x-10 min-[2500px]:space-x-14 min-[3800px]:space-x-20 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#00578E] !font-bold"
                      : "text-[#333333] hover:text-[#00578E] font-medium"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:w-8 text-[#333333]"
                      strokeWidth={2}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact Us Button */}
          <div className="hidden xl:flex items-center shrink-0 z-10">
            <Button
              text="Contact Us"
              variant="primary"
              href={isAboutPage ? "/zinnanti-surgical-3#contact" : "#contact"}
              onClick={(e) => {
                if (!isAboutPage) {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#00578E] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`navbar font-medium py-1.5 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#00578E] font-bold border-l-4 border-[#00578E] pl-3"
                        : "text-gray-700 hover:text-[#00578E] pl-3"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Button
                text="Contact Us"
                variant="primary"
                href={isAboutPage ? "/zinnanti-surgical-3#contact" : "#contact"}
                className="w-full justify-between"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
