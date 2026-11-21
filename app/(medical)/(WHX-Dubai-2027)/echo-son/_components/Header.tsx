"use client";

import { useEffect, useState } from "react";
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
  { name: "e-catalogue", id: "e-catalogue" },
  { name: "Create Catalogue", id: "create-catalogue" },
  { name: "Distributors", id: "distributors" },
];

/**
 * Floating header: an inset, rounded bar over the top of the banner. Once the page has
 * scrolled past half of the banner it expands to a full-width bar pinned to the top.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    setMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("header");
    const yOffset = -(header?.offsetHeight ?? 80);
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Expand to full width once half of the banner has scrolled by
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("home");
      const threshold = banner
        ? banner.offsetTop + banner.offsetHeight / 2
        : window.innerHeight / 2;
      setIsFullWidth(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-500 ease-out ${
        isFullWidth ? "px-0 pt-0" : "px-[var(--page-inset)] pt-[var(--header-gap)]"
      }`}
    >
      <div
        className={`bg-white border transition-all duration-500 ease-out ${
          isFullWidth
            ? "rounded-none border-transparent border-b-[#E5E7EB] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            : "rounded-[14px] min-[2500px]:rounded-[22px] min-[3800px]:rounded-[30px] border-[#D9DDE2]"
        }`}
      >
        {/* When full width, the inner padding grows by the page inset so the logo,
            links and CTA stay exactly where they were in the floating bar */}
        <div
          className={`h-[var(--header-h)] transition-[padding] duration-500 ease-out ${
            isFullWidth
              ? "px-[calc(var(--page-inset)+20px)] sm:px-[calc(var(--page-inset)+32px)] xl:px-[calc(var(--page-inset)+2.4vw)]"
              : "px-5 sm:px-8 xl:px-[2.4vw]"
          } flex xl:grid xl:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4 xl:gap-8`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            aria-label="ECHOSON home"
            className="shrink-0 justify-self-start"
          >
            <img
              src="/medical/echo-son/logo.webp"
              alt="ECHOSON Ultrasound Scanners"
              width={213}
              height={36}
              className="block w-[140px] sm:w-[160px] xl:w-[120px] 2xl:w-[150px] min-[1920px]:w-[190px] min-[2500px]:w-[270px] min-[3800px]:w-[380px] h-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main"
            className="hidden xl:flex items-center gap-5 2xl:gap-7 min-[1920px]:gap-9 min-[2500px]:gap-12 min-[3800px]:gap-16"
          >
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`navbar whitespace-nowrap transition-colors duration-200 underline-offset-[5px] min-[2500px]:underline-offset-[10px] decoration-1 min-[2500px]:decoration-2 ${
                    isActive
                      ? "text-primary !font-medium underline"
                      : "text-[#3A3A3A] hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3 justify-self-end">
            {/* Wrapper does the hiding: the Button's own inline-flex would override "hidden" */}
            <div className="hidden sm:block">
              <Button
                text="Get In Touch"
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
              />
            </div>

            <button
              type="button"
              className="xl:hidden p-1 text-[#1A1A1A] hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#E5E7EB] max-h-[calc(100dvh-var(--header-h)-var(--header-gap)*2)] overflow-y-auto">
            <nav aria-label="Mobile" className="flex flex-col px-5 sm:px-8 py-3">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`navbar py-3 border-b border-gray-100 last:border-0 transition-colors ${
                      isActive ? "text-primary !font-medium" : "text-[#3A3A3A] hover:text-primary"
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
