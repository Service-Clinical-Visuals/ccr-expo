"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
          ? "top-0 bg-white shadow-md py-3 min-[2500px]:py-5 min-[3800px]:py-8"
          : "top-4 sm:top-5 lg:top-6 min-[2500px]:top-8 min-[3800px]:top-12"
      }`}
    >
      <div className="custom-container">
        <div
          className={`w-full bg-white flex items-center justify-between gap-4 transition-all duration-300 ${
            isFixed
              ? "rounded-none px-0"
              : "border border-black/10 rounded-tl-[16px] sm:rounded-tl-[20px] rounded-br-[16px] sm:rounded-br-[20px] rounded-tr-none rounded-bl-none shadow-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6"
          }`}
        >
          {/* Left: Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0"
            aria-label="Fisioline Home"
          >
            <img
              src="/medical/fisioline/logo.webp"
              alt="Fisioline Logo"
              className="h-8 sm:h-9 md:h-10 min-[2500px]:h-[60px] min-[3800px]:h-[100px] w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 min-[2500px]:space-x-12 min-[3800px]:space-x-16 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar relative cursor-pointer py-1.5 transition-colors select-none ${
                    isActive
                      ? "text-[#222D83] !font-bold underline underline-offset-[10px] decoration-2"
                      : "text-gray-800 hover:text-[#222D83] font-medium"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Get In Touch Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-[#222D83] hover:bg-[#1A2368] text-white font-medium px-5 py-2.5 min-[1920px]:px-7 min-[1920px]:py-3 min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 text-sm sm:text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all shadow-sm group"
            >
              <span>Get In Touch</span>
              <img
                src="/medical/fisioline/right_arrow.webp"
                alt="arrow"
                className="w-3.5 sm:w-4 min-[1920px]:w-4.5 min-[2500px]:w-6 min-[3800px]:w-8 h-auto object-contain group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#222D83] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
              ) : (
                <Menu className="w-6 h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`text-base font-medium py-1.5 transition-colors ${
                      isActive
                        ? "text-[#222D83] font-bold border-l-4 border-[#222D83] pl-3"
                        : "text-gray-700 hover:text-[#222D83] pl-3"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-gray-100">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full bg-[#222D83] hover:bg-[#1A2368] text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 text-base transition-colors group"
              >
                <span>Get In Touch</span>
                <img
                  src="/medical/fisioline/right_arrow.webp"
                  alt="arrow"
                  className="w-3.5 sm:w-4 min-[2500px]:w-6 min-[3800px]:w-9 h-auto object-contain group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
