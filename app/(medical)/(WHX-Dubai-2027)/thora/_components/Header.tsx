"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const LANGUAGES = [
  { code: "ENG", label: "English" },
  { code: "DEU", label: "Deutsch" },
];

function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden>
      <rect width="28" height="20" rx="3" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="28" height={20 / 13} fill="#D52B1E" />
      ))}
      <rect width="12" height={(7 * 20) / 13} fill="#1E3A8A" />
    </svg>
  );
}

function FlagDE({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden>
      <rect width="28" height="6.67" fill="#000" />
      <rect y="6.67" width="28" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="28" height="6.67" fill="#FFCE00" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("ENG");
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

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
        setLangOpen(false);
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

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const Flag = lang === "DEU" ? FlagDE : FlagUS;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between gap-6 py-3 xl:py-[1.4vw] min-[1921px]:py-7">
          {/* Logo */}
          <Link href="#home" className="flex items-center flex-shrink-0" aria-label="Thora Tech GmbH Home">
            <img
              src="/medical/thora/h-logo.webp"
              alt="Thora Tech GmbH"
              className="h-[38px] sm:h-[44px] xl:h-[50px] 2xl:h-[56px] min-[2560px]:h-[80px] min-[3801px]:h-[118px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-9 min-[2560px]:gap-14">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`header-link font-plex font-medium transition-colors hover:text-[var(--accent)] ${
                  active === item.label ? "text-[var(--accent)]" : "text-[var(--nav)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((p) => !p)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                className="header-link font-plex font-medium text-[var(--nav)] flex items-center gap-[0.6em] rounded-[8px] border border-[var(--nav)] px-[0.9em] py-[0.45em] sm:px-[1.4em] sm:py-[0.55em] xl:min-w-[9.3em] justify-between hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                <Flag className="w-[1.5em] h-auto rounded-[2px]" />
                <span>{lang}</span>
                <ChevronDown
                  className={`w-[1.1em] h-[1.1em] transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 mt-2 w-full min-w-[150px] bg-white rounded-[8px] border border-slate-200 shadow-lg overflow-hidden z-10"
                >
                  {LANGUAGES.map((l) => {
                    const F = l.code === "DEU" ? FlagDE : FlagUS;
                    return (
                      <li key={l.code}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={lang === l.code}
                          onClick={() => {
                            setLang(l.code);
                            setLangOpen(false);
                          }}
                          className={`header-link font-plex w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-slate-50 cursor-pointer ${
                            lang === l.code ? "text-[var(--accent)]" : "text-[var(--nav)]"
                          }`}
                        >
                          <F className="w-[1.4em] h-auto rounded-[2px]" />
                          {l.code}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 hover:text-[var(--accent)] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mb-4 rounded-2xl bg-white shadow-xl border border-slate-200 p-5 max-h-[75vh] overflow-y-auto">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`header-link font-plex font-medium py-3 border-b border-slate-100 last:border-b-0 hover:text-[var(--accent)] ${
                    active === item.label ? "text-[var(--accent)]" : "text-[var(--nav)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
