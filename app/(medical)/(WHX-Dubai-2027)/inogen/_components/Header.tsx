"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Why Inogen", id: "why-inogen-section", hasDropdown: true },
  { name: "Solutions", id: "solutions-section", hasDropdown: true },
  { name: "Products", id: "products" },
  { name: "Support", id: "contact" },
  { name: "Contact", id: "contact" },
];

/**
 * Header Navigation Component
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Scroll-Adaptive States:
 *    - "initial": Floating pill-card positioned near top (`top-4 sm:top-5 lg:top-6`) with asymmetrical
 *      rounded corners (`rounded-tl-[16px] rounded-br-[16px]`), subtle border, and shadow.
 *    - "hidden": Slides out of view (`-translate-y-full opacity-0`) as user starts scrolling down through the hero.
 *    - "fixed": Slides down (`top-0 translate-y-0 opacity-100`) as a sticky top navigation bar with
 *      `bg-white/95 backdrop-blur-md` and bottom border once user scrolls past hero threshold.
 * 2. Responsive Mobile Drawer:
 *    - Full-screen slide-down menu with body scroll locking when active (`document.body.style.overflow = "hidden"`).
 * 3. Smooth Navigation:
 *    - Scrolls cleanly to corresponding section IDs or to the top.
 */
const Header = () => {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "fixed">("initial");
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
      const scrollY = window.scrollY;
      const heroEl = document.getElementById("home");
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      const threshold = heroHeight - 120;

      if (scrollY <= 30) {
        setHeaderState("initial");
      } else if (scrollY > 30 && scrollY < threshold) {
        setHeaderState("hidden");
      } else {
        setHeaderState("fixed");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const isFixed = headerState === "fixed";
  const isHidden = headerState === "hidden";

  return (
    <header
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isFixed
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-3 min-[2500px]:py-5 min-[3800px]:py-8 border-b border-gray-400"
          : "top-4 sm:top-5 lg:top-6 min-[2500px]:top-8 min-[3800px]:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full flex items-center justify-between gap-4 transition-all duration-300 relative ${
            isFixed
              ? "bg-transparent rounded-none px-0"
              : "border border-gray-400 rounded-tl-[16px] sm:rounded-tl-[20px] rounded-br-[16px] sm:rounded-br-[20px] rounded-tr-none rounded-bl-none shadow-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6"
          }`}
        >
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10 overflow-visible"
            aria-label="Inogen Home"
          >
            <img
              src="/medical/inogen/logo.webp"
              alt="Inogen Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2000px]:h-14 min-[2500px]:h-[80px] min-[3800px]:h-[130px] w-auto object-contain transform scale-110 sm:scale-115 min-[2000px]:scale-125 min-[2500px]:scale-135 min-[3800px]:scale-150 origin-left transition-transform"
            />
          </Link>

          {/* Center: Desktop Navigation - Horizontally Centered */}
          <nav className="hidden xl:flex items-center justify-center space-x-7 2xl:space-x-9 min-[2500px]:space-x-12 min-[3800px]:space-x-16 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none flex items-center gap-1 ${
                    isActive
                      ? "text-[#0B3090] !font-bold underline underline-offset-[10px] decoration-2"
                      : "text-gray-800 hover:text-[#0B3090] font-medium"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-gray-400" strokeWidth={2} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Get In Touch Button */}
          <div className="hidden xl:flex items-center shrink-0 z-10">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-[#0B3090] hover:bg-[#082470] text-white font-primary font-medium px-5 py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 rounded-lg flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 text-sm lg:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg hover:shadow-[#0B3090]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group cursor-pointer"
            >
              <span>Get in Touch</span>
              <img
                src="/medical/inogen/wa.webp"
                alt="arrow"
                className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] object-contain group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#0B3090] focus:outline-none"
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
          <div className="xl:hidden mt-2 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`text-base font-medium py-1.5 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#0B3090] font-bold border-l-4 border-[#0B3090] pl-3"
                        : "text-gray-700 hover:text-[#0B3090] pl-3"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full bg-[#0B3090] hover:bg-[#082470] text-white font-primary font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 text-base transition-all duration-300 ease-in-out hover:shadow-md active:scale-95 group cursor-pointer"
              >
                <span>Get in Touch</span>
                <img
                  src="/medical/inogen/wa.webp"
                  alt="arrow"
                  className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] object-contain group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
