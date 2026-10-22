"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Support", id: "support" },
  { name: "Product", id: "products" },
  { name: "About Us", id: "about" },
  { name: "Media", id: "media" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "sticky">("initial");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.getElementById("home");
      const heroThreshold = hero ? hero.offsetTop + hero.offsetHeight - 140 : window.innerHeight - 100;

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

  // Lock body scroll when mobile menu is open
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      } ${
        isSticky
          ? "py-2 lg:py-3 min-[2500px]:py-4 min-[3800px]:py-6 bg-white/95 backdrop-blur-md shadow-md"
          : "pt-3 sm:pt-4 lg:pt-5 min-[2000px]:pt-6 min-[2500px]:pt-7 min-[3800px]:pt-9 bg-transparent"
      }`}
    >
      <div className="custom-container">
        <div className={`w-full flex items-center justify-between bg-white transition-all duration-300 ${
          isSticky
            ? "border border-transparent rounded-none"
            : "border border-[#D9D9D9] rounded-tl-[20px] rounded-br-[20px] min-[2500px]:rounded-tl-[28px] min-[2500px]:rounded-br-[28px] min-[3800px]:rounded-tl-[40px] min-[3800px]:rounded-br-[40px]"
        } pl-6 pr-4 sm:pl-10 sm:pr-8 lg:pl-12 lg:pr-12 min-[2500px]:pl-16 min-[2500px]:pr-16 min-[3800px]:pl-24 min-[3800px]:pr-24`}>
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="block shrink-0 w-[110px] sm:w-[130px] lg:w-[150px] 2xl:w-[175px] min-[2500px]:w-[240px] min-[3800px]:w-[340px] aspect-[196/73] overflow-hidden"
            aria-label="Medical Econet Home"
          >
            {/* The blue mark fills the bar height; the transparent area below it is cropped */}
            <img
              src="/medical/medical-econet/logo.png"
              alt="Medical Econet Logo"
              className="w-full h-full object-cover object-left-top"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 min-[2500px]:space-x-12 min-[3800px]:space-x-16">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-primary)] !font-bold underline underline-offset-4 decoration-2"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center gap-2 min-[3800px]:gap-4 px-5 py-2 2xl:px-6 2xl:py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 rounded-tr-[20px] rounded-bl-[20px] min-[2500px]:rounded-tr-[28px] min-[2500px]:rounded-bl-[28px] min-[3800px]:rounded-tr-[40px] min-[3800px]:rounded-bl-[40px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_4px_10px_rgba(0,0,0,0.18)] transition-all duration-300 group"
            >
              <span className="button whitespace-nowrap text-white">Get In Touch</span>
              <ArrowUpRight
                className="w-4 h-4 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="xl:hidden p-1 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
            ) : (
              <Menu className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`xl:hidden fixed inset-x-4 ${isSticky ? "top-[64px]" : "top-[78px] sm:top-[86px]"} bg-white border border-[rgba(30,30,30,0.25)] rounded-tl-[20px] rounded-br-[20px] shadow-2xl p-6 flex flex-col space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto animate-in slide-in-from-top-3 duration-200 z-50`}>
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <div key={link.name} className="border-b border-gray-100 last:border-0 pb-3">
                <a
                  href={`#${link.id}`}
                  className={`block py-1.5 navbar transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
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
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-tr-[20px] rounded-bl-[20px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_4px_10px_rgba(0,0,0,0.18)] transition-colors group"
            >
              <span className="button whitespace-nowrap text-white">Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
