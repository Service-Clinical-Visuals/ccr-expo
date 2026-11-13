"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
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
      const threshold = heroHeight - 100;

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
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${isHidden
        ? "-translate-y-full opacity-0 pointer-events-none"
        : "translate-y-0 opacity-100 pointer-events-auto"
        } ${isFixed
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 min-[2500px]:py-5 min-[3800px]:py-8 border-b border-gray-100"
          : "top-3 sm:top-4 lg:top-5 min-[2500px]:top-8 min-[3800px]:top-12"
        }`}
    >
      <div className="custom-container">
        <div
          className={`w-full bg-white flex items-center justify-between gap-4 transition-all duration-300 relative ${isFixed
            ? "rounded-none px-0"
            : "border border-gray-200/80 rounded-none shadow-sm px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6"
            }`}
        >
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 z-10"
            aria-label="Troge Medical Home"
          >
            <img
              src="/medical/troge-medical/logo.webp"
              alt="Troge Medical Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-11 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain origin-left transform scale-115 sm:scale-120 md:scale-125 min-[2500px]:scale-135 transition-transform duration-300"
            />
          </Link>

          {/* Middle: Navigation Links (Horizontally Centered in Header) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 absolute left-1/2 -translate-x-1/2 z-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar transition-colors py-1 cursor-pointer select-none text-sm sm:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl ${isActive
                    ? "text-[var(--color-primary)] !font-bold underline underline-offset-8 decoration-2"
                    : "text-gray-700 hover:text-[var(--color-primary)] font-medium"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0 z-10">
            <div className="hidden lg:block">
              <Button
                variant="primary"
                text="Get In Touch"
                href="#contact"
                showIcon={true}
              />
            </div>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              className="lg:hidden text-gray-800 p-1.5 hover:bg-gray-100 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-none shadow-2xl p-5 border border-gray-100 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar py-2.5 border-b border-gray-100 last:border-0 flex items-center justify-between ${isActive
                    ? "text-[var(--color-primary)] !font-bold"
                    : "text-gray-700 hover:text-[var(--color-primary)] font-medium"
                    }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-3 rounded-md font-semibold text-sm shadow-md transition-colors group"
              >
                <span>Get In Touch</span>
                <img
                  src="/medical/troge-medical/white_arrow.webp"
                  alt=""
                  className="w-[14px] h-[10px] min-[2500px]:w-[24px] min-[2500px]:h-[17px] min-[3800px]:w-[34px] min-[3800px]:h-[24px] object-contain group-hover:translate-x-1 transition-transform duration-300"
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
