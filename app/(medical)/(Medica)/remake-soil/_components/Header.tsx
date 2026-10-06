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
  { name: "Liquid Soil", id: "liquid-soil" },
  { name: "Mixing Plants", id: "mixing-plants" },
  { name: "Additional Services", id: "services" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "sticky">("initial");
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
      const hero = document.getElementById("home");
      const heroThreshold = hero
        ? hero.offsetTop + hero.offsetHeight - 90
        : window.innerHeight - 90;

      if (scrollY < 40) {
        setHeaderState("initial");
      } else if (scrollY < heroThreshold) {
        setHeaderState("hidden");
      } else {
        setHeaderState("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const isSticky = headerState === "sticky";
  const isHidden = headerState === "hidden";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isSticky
          ? "pt-0 bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-white/15"
          : "pt-3 sm:pt-4 min-[2500px]:pt-6 min-[3800px]:pt-8 bg-transparent"
      }`}
    >
      <div className="custom-container">

        <div
          className={`w-full flex items-center justify-between transition-all duration-300 ${
            isSticky
              ? "py-3 sm:py-3.5 min-[2500px]:py-5 min-[3800px]:py-7 px-0 rounded-none bg-transparent border-0 shadow-none"
              : "bg-black/95 backdrop-blur-md border border-white/20 rounded-[20px] px-5 sm:px-8 py-3 sm:py-3.5 shadow-md shadow-black/20"
          }`}
        >

          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0 cursor-pointer"
            aria-label="Remake Soil Home"
          >
            <img
              src="/medical/remake-soil/logo.png"
              alt="Remake Soil Logo"
              className="h-6 sm:h-7 md:h-8 min-[2500px]:h-11 min-[3800px]:h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden min-[1301px]:flex items-center space-x-7 2xl:space-x-9 min-[2500px]:space-x-14 min-[3800px]:space-x-20 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`relative cursor-pointer py-1 transition-colors navbar text-[16px] sm:text-[17px] min-[2500px]:text-[24px] min-[3500px]:text-[30px] min-[3800px]:text-[32px] ${
                    isActive
                      ? "text-white !font-semibold underline underline-offset-8"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden min-[1301px]:flex items-center shrink-0">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-5 sm:px-6 min-[2500px]:px-8 min-[3500px]:px-10 min-[3800px]:px-12 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3500px]:py-5 min-[3800px]:py-6 rounded-[10px] min-[3500px]:rounded-[14px] bg-white text-[#0C111D] font-primary font-medium text-[16px] sm:text-[17px] min-[2500px]:text-[24px] min-[3500px]:text-[30px] min-[3800px]:text-[32px] hover:bg-gray-100 transition-all duration-300 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] active:scale-95 group"
            >
              <span className="whitespace-nowrap">Get in Touch</span>
              <ArrowRight
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3500px]:w-7 min-[3500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8 ml-2 sm:ml-2.5 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
                strokeWidth={2.2}
              />
            </Link>
          </div>

          <button
            type="button"
            className="min-[1301px]:hidden text-white p-1.5 transition-colors focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            ) : (
              <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`min-[1301px]:hidden fixed ${
            isSticky ? "top-[64px] sm:top-[72px]" : "top-[80px] sm:top-[90px]"
          } left-4 right-4 bg-black/95 backdrop-blur-lg border border-white/20 rounded-[20px] shadow-2xl p-6 flex flex-col space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto animate-in slide-in-from-top-3 duration-200 z-50`}
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="border-b border-white/10 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`block py-2 text-base font-primary ${
                    isActive ? "text-[var(--color-primary)] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              </div>
            );
          })}

          <div className="pt-2">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="flex items-center justify-center w-full px-5 py-3 rounded-[10px] bg-white text-[#0C111D] font-primary font-medium text-base hover:bg-gray-100 transition-colors shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
