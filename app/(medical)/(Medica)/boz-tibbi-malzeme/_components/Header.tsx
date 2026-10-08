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
  { name: "Corporate", id: "corporate" },
  { name: "Product", id: "products" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "fixed">("top");

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
      const heroEl = document.getElementById("home");
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 100 : window.innerHeight - 100;
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setHeaderState("top");
      } else if (currentScrollY > 20 && currentScrollY < heroBottom) {
        setHeaderState("hidden");
      } else {
        setHeaderState("fixed");
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

  return (
    <>
      <header
        className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ${
          headerState === "hidden"
            ? "top-0 opacity-0 -translate-y-full pointer-events-none"
            : headerState === "fixed"
            ? "top-0 opacity-100 translate-y-0 pointer-events-auto bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
            : "top-3 sm:top-5 min-[3800px]:top-10 opacity-100 translate-y-0 pointer-events-none"
        }`}
      >
        {headerState === "fixed" ? (
          /* Fixed Header */
          <div className="custom-container relative flex items-center justify-between h-[68px] sm:h-[76px] lg:h-[84px] min-[3800px]:h-[230px]">
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center shrink-0 z-10"
              aria-label="Boz Tıbbi Malzeme Home"
            >
              <img
                src="/medical/boz-tibbi-malzeme/logo.webp"
                alt="Boz Tıbbi Malzeme"
                className="h-9 sm:h-12 min-[3800px]:h-[120px] w-auto object-contain origin-left transform scale-110 sm:scale-125 min-[3800px]:scale-130 transition-transform duration-300"
              />
            </Link>

            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-6 lg:space-x-10 min-[3800px]:space-x-20">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar font-overpass transition-all duration-200 capitalize py-1 min-[3800px]:text-3xl ${
                      isActive
                        ? "text-[var(--color-primary)] font-bold underline underline-offset-8 min-[3800px]:underline-offset-[16px]"
                        : "text-[#1E1E1E] hover:text-[var(--color-primary)] font-normal"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="hidden sm:flex items-center z-10">
              <Button
                text="Get In Touch"
                href="#contact"
                variant="primary"
                className="py-2.5 px-5 sm:py-3 sm:px-6 min-[3800px]:py-7 min-[3800px]:px-14 min-[3800px]:text-3xl"
              />
            </div>

            <button
              type="button"
              className="md:hidden text-[#1E1E1E] p-2 focus:outline-none z-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--color-primary)]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1E1E1E]" />
              )}
            </button>
          </div>
        ) : (
          /* Floating Header */
          <div className="custom-container pointer-events-auto">
            <div className="w-full relative bg-white/95 backdrop-blur-md border border-black/20 shadow-[0px_3px_8px_rgba(0,0,0,0.15)] rounded-[20px] sm:rounded-[25px] min-[3800px]:rounded-[50px] h-[64px] sm:h-[74px] lg:h-[84px] min-[3800px]:h-[230px] px-4 sm:px-8 min-[3800px]:px-16 flex items-center justify-between transition-all duration-300">
              <Link
                href="#home"
                onClick={(e) => handleScrollTo(e, "home")}
                className="flex items-center shrink-0 z-10"
                aria-label="Boz Tıbbi Malzeme Home"
              >
                <img
                  src="/medical/boz-tibbi-malzeme/logo.webp"
                  alt="Boz Tıbbi Malzeme"
                  className="h-9 sm:h-12 min-[3800px]:h-[120px] w-auto object-contain origin-left transform scale-110 sm:scale-125 min-[3800px]:scale-130 transition-transform duration-300"
                />
              </Link>

              <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-6 lg:space-x-10 min-[3800px]:space-x-20">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.id;
                  return (
                    <a
                      key={link.name}
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`navbar font-overpass transition-all duration-200 capitalize py-1 min-[3800px]:text-3xl ${
                        isActive
                          ? "text-[var(--color-primary)] font-bold underline underline-offset-8 min-[3800px]:underline-offset-[16px]"
                          : "text-[#1E1E1E] hover:text-[var(--color-primary)] font-normal"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="hidden sm:flex items-center z-10">
                <Button
                  text="Get In Touch"
                  href="#contact"
                  variant="primary"
                  className="py-2.5 px-5 sm:py-3 sm:px-6 min-[3800px]:py-7 min-[3800px]:px-14 min-[3800px]:text-3xl"
                />
              </div>

              <button
                type="button"
                className="md:hidden text-[#1E1E1E] p-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[var(--color-primary)]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#1E1E1E]" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 custom-container pointer-events-auto">
            <div className="bg-white rounded-[20px] shadow-2xl p-6 flex flex-col space-y-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar font-overpass block py-2 capitalize border-b border-gray-100 last:border-0 ${
                      isActive
                        ? "text-[var(--color-primary)] font-bold underline"
                        : "text-gray-800 hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <Button
                  text="Get In Touch"
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
