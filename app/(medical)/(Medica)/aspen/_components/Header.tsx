"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Company", id: "company" },
  { name: "Products", id: "products" },
  { name: "News & Events", id: "news" },
  { name: "Contact", id: "contact" },
];

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
          ? "top-0 bg-[#0B2F61] shadow-xl py-3 min-[2500px]:py-5 min-[3800px]:py-8"
          : "top-4 sm:top-5 min-[1036px]:top-6 min-[2500px]:top-8 min-[3800px]:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full relative bg-[#0B2F61] flex items-center justify-between gap-4 transition-all duration-300 ${
            isFixed
              ? "rounded-none px-0"
              : "border border-white/10 rounded-[18px] sm:rounded-[24px] shadow-lg px-4 sm:px-6 min-[1036px]:px-8 py-2.5 sm:py-3.5 min-[2500px]:py-4 min-[3800px]:py-6"
          }`}
        >
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 origin-left z-10"
            aria-label="Aspen Surgical Home"
          >
            <img
              src="/medical/aspen/logo.webp"
              alt="Aspen Surgical Logo"
              className="header-logo-img h-6 sm:h-7 md:h-8 min-[2500px]:h-12 min-[3800px]:h-16 w-auto object-contain transform scale-110 sm:scale-115 md:scale-120 min-[2000px]:scale-[1.4] min-[2500px]:scale-[1.65] min-[3800px]:scale-[2.0] origin-left transition-transform"
            />
          </Link>

          {/* Middle: Navigation Links - Perfectly Horizontally Centered */}
          <nav className="hidden min-[1036px]:flex items-center justify-center space-x-6 xl:space-x-8 min-[2500px]:space-x-12 absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar font-medium transition-colors hover:text-white ${
                    isActive ? "text-white underline underline-offset-4 font-semibold" : "text-gray-200"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button - Hidden on mobile and tablet up to 1035px, shown on desktop from 1036px */}
          <div className="hidden min-[1036px]:flex items-center shrink-0 z-10">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-white text-[#0B2F61] rounded-full px-5 py-2 sm:py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 hover:bg-gray-100 flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-sm group"
            >
              <span className="navbar font-semibold">Get In Touch</span>
              <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[#0B2F61] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile / Tablet Menu Button - Visible up to 1035px */}
          <button
            type="button"
            className="min-[1036px]:hidden text-white p-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile / Tablet Dropdown - Visible up to 1035px */}
        {mobileMenuOpen && (
          <div className="min-[1036px]:hidden absolute top-full left-0 w-full px-4 pt-2 z-50">
            <div className="bg-[#0B2F61] rounded-2xl p-6 text-white shadow-2xl flex flex-col space-y-4 border border-blue-900/40">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="navbar py-2 border-b border-blue-800/40 last:border-0 hover:text-blue-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="w-full bg-white text-[#0B2F61] py-2.5 rounded-full flex items-center justify-center gap-2"
                >
                  <span className="navbar font-semibold">Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
