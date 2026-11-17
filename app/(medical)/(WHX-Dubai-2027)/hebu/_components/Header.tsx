"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Shop", href: "#shop" },
  { label: "Pursue", href: "#expertise" },
  { label: "Career", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(false);

  // Hidden while the banner is in view; slides in once scrolled past it.
  useEffect(() => {
    const onScroll = () => {
      const banner = document.getElementById("banner-section");
      const bannerBottom = banner ? banner.offsetTop + banner.offsetHeight : window.innerHeight;
      if (window.scrollY >= bannerBottom - 80) {
        setVisible(true);
      } else {
        setVisible(false);
        setMobileMenuOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-[var(--dark)] shadow-md transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between gap-6 py-3 xl:py-[0.6vw] min-[1921px]:py-4">
          {/* Logo */}
          <Link href="#home" className="flex items-center flex-shrink-0" aria-label="HEBUmedical Home">
            <img
              src="/medical/hebu/h-logo.webp"
              alt="HEBUmedical"
              className="h-[48px] sm:h-[56px] xl:h-[60px] 2xl:h-[70px] min-[2560px]:h-[96px] min-[3801px]:h-[140px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-12 2xl:gap-[3vw]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`header-link font-head transition-colors hover:text-[var(--primary)] ${active === item.label ? "text-[var(--primary)] font-semibold" : "text-white font-normal"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button href="#contact" variant="yellow" className="hidden sm:inline-flex">
              Contact Us
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:text-[var(--primary)] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mb-4 rounded-2xl bg-[#1C1C1C] border border-white/10 p-5 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`header-link font-head font-medium py-3 border-b border-white/10 last:border-b-0 hover:text-[var(--primary)] ${active === item.label ? "text-[var(--primary)]" : "text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="sm:hidden pt-4">
              <Button href="#contact" variant="yellow" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
