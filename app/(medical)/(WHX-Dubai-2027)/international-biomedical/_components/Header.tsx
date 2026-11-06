"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "Education", id: "education" },
  { name: "Library", id: "library" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [isFull, setIsFull] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Floating (container-width) header over the banner; switches to full width
  // once the page has scrolled past half of the banner video.
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("home");
      const threshold = banner
        ? banner.offsetTop + banner.offsetHeight / 2
        : window.innerHeight / 2;
      setIsFull(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    setMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = document.querySelector("header")?.offsetHeight ?? 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-in-out ${
        isFull ? "pt-1.5 min-[2500px]:pt-3 min-[3800px]:pt-5" : "pt-3 sm:pt-4 min-[2500px]:pt-6 min-[3800px]:pt-10"
      }`}
    >
      <div
        className={`relative mx-auto bg-white rounded-tl-2xl rounded-br-2xl min-[2500px]:rounded-tl-3xl min-[2500px]:rounded-br-3xl min-[3800px]:rounded-tl-[40px] min-[3800px]:rounded-br-[40px] border border-[#E2E2E2] transition-all duration-500 ease-in-out ${
          isFull
            ? "w-[calc(100%-12px)] min-[2500px]:w-[calc(100%-24px)] min-[3800px]:w-[calc(100%-40px)] max-w-full shadow-md"
            : "custom-container shadow-sm"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 h-[60px] 2xl:h-[68px] min-[2500px]:h-[96px] min-[3800px]:h-[136px] transition-all duration-500 ${
            isFull ? "custom-container" : "px-4 sm:px-6 min-[2500px]:px-10 min-[3800px]:px-14"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="shrink-0"
            aria-label="International Biomedical Home"
          >
            <img
              src="/medical/international-biomedical/logo.webp"
              alt="International Biomedical – Celebrating 50 Years of Excellence"
              className="w-[118px] sm:w-[130px] 2xl:w-[150px] min-[2500px]:w-[210px] min-[3800px]:w-[300px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar whitespace-nowrap underline-offset-4 decoration-2 transition-colors duration-200 ${
                    isActive
                      ? "text-primary underline"
                      : "text-[#111111] hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">
              <Button
                text="Get In Touch"
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
              />
            </div>
            <button
              type="button"
              className="xl:hidden p-1 text-primary hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="xl:hidden absolute top-full inset-x-0 mt-2 bg-white border border-[#E5E5E5] rounded-tl-2xl rounded-br-2xl shadow-xl max-h-[calc(100dvh-90px)] overflow-y-auto"
          >
            <nav className="flex flex-col px-5 py-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`navbar py-3 border-b border-gray-100 last:border-0 transition-colors ${
                      isActive ? "text-primary font-medium" : "text-[#111111] hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="sm:hidden pt-4 pb-2">
                <Button
                  text="Get In Touch"
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
