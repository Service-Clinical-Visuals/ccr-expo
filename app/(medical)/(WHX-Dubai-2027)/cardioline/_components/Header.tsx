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
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Telemedicine", id: "telemedicine" },
  { name: "Care Settings", id: "care-settings" },
  { name: "News", id: "news" },
];

const barRadius = "rounded-[10px] 2xl:rounded-[12px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px]";
// Full-width bar while docked; side padding keeps the logo/CTA in line with the floating bar's content
const dockedBar =
  "rounded-none px-[calc(4%+1rem)] sm:px-[calc(5%+1.5rem)] xl:px-[calc(10%+1.5rem)] 2xl:px-[calc(10%+33px)] min-[2500px]:px-[calc(10%+3rem)] min-[3800px]:px-[calc(10%+4rem)]";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector("header");
      const yOffset = -((header?.offsetHeight ?? 90) + 16);
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Glass bar over the dark hero; turns solid navy once the hero is scrolled past
    const handleScroll = () => {
      const hero = document.getElementById("home");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 120 : window.innerHeight * 0.8;
      setIsScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Once past the hero the bar turns navy and docks flush to the top of the viewport
  const barBg = isScrolled || mobileMenuOpen ? "bg-primary/95 shadow-lg" : "bg-[#FFFFFF1A]";

  return (
    <header
      className={`fixed left-0 w-full z-50 pointer-events-none transition-[top] duration-300 ${isScrolled
          ? "top-0"
          : "top-4 sm:top-6 xl:top-10 2xl:top-[52px] min-[2500px]:top-[72px] min-[3800px]:top-[104px]"
        }`}
    >
      <div
        className={`relative mx-auto pointer-events-auto transition-[width] duration-300 ${isScrolled ? "w-full" : "w-[92%] sm:w-[90%] xl:w-[80%]"
          }`}
      >
        <div
          className={`h-[54px] sm:h-[58px] min-[2500px]:h-[90px] min-[3800px]:h-[116px] flex items-center justify-between gap-6 backdrop-blur-md transition-[background-color,border-radius,padding] duration-300 ${barBg} ${isScrolled ? dockedBar : `px-4 sm:px-6 2xl:px-[33px] min-[2500px]:px-12 min-[3800px]:px-16 border border-white/15 ${barRadius}`
            }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="shrink-0"
            aria-label="Cardioline Home"
          >
            <img
              src="/(WHX-Dubai-2027)/cardioline/logo.webp"
              alt="Cardioline Logo"
              className="w-[130px] sm:w-[150px] 2xl:w-[175px] min-[2500px]:w-[250px] min-[3800px]:w-[350px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-[31px] min-[2500px]:gap-11 min-[3800px]:gap-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar whitespace-nowrap cursor-pointer transition-colors duration-200 ${isActive ? "text-white !font-bold" : "text-white hover:text-secondary"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center gap-3 min-[3800px]:gap-6 shrink-0">
            <div className="hidden sm:block">
              <Button text="Partner Area" variant="primary" href="#contact" />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="xl:hidden p-1 text-white hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden absolute top-full inset-x-0 mt-2 bg-primary/95 border border-white/15 backdrop-blur-md shadow-xl max-h-[calc(100dvh-100px)] overflow-y-auto ${barRadius}`}
          >
            <nav className="flex flex-col px-4 sm:px-6 py-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar py-3 border-b border-white/10 last:border-0 transition-colors ${isActive ? "text-white !font-bold" : "text-white hover:text-secondary"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* CTA on phones (hidden in the bar there) */}
              <div className="sm:hidden pt-4 pb-2">
                <Button text="Partner Area" variant="primary" href="#contact" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
