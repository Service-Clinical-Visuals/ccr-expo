"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavLink {
  name: string;
  id: string;
  hasDropdown?: boolean;
  /** Only links flagged here are clickable; the rest render as plain text. */
  isLink?: boolean;
  href?: string;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about", isLink: true, href: "/zinnanti-surgical-1/about" },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "Videos", id: "videos" },
  { name: "IFUs", id: "ifus" },
  { name: "Faq", id: "faq" },
  { name: "Contact Us", id: "contact" },
];

const iconBtn =
  "zin-gradient flex items-center justify-center w-10 h-10 2k:w-16 2k:h-16 4k:w-24 4k:h-24 rounded-full text-white shadow-md hover:brightness-110 transition cursor-pointer";

const iconSize =
  "w-[18px] h-[18px] 2k:w-7 2k:h-7 4k:w-10 4k:h-10";

interface HeaderProps {
  /** Home page: keep the header hidden over the hero banner and slide it in once scrolled past. */
  hideUntilScroll?: boolean;
}

export default function Header({ hideUntilScroll = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(!hideUntilScroll);
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
      setIsScrolled(window.scrollY > 20);
      if (!hideUntilScroll) return;
      const hero = document.getElementById("home");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      const show = window.scrollY >= heroBottom - 80;
      setVisible(show);
      if (!show) setMobileMenuOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [hideUntilScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-md" : "shadow-xs"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="h-[72px] sm:h-[80px] lg:h-[86px] 2k:h-[130px] 4k:h-[180px] flex items-center relative z-10">
        <div className="custom-container flex items-center justify-between gap-4 xl:gap-6 w-full">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center shrink-0"
            aria-label="Zinnanti Surgical Home"
          >
            <Logo className="h-10 sm:h-11 lg:h-12 2k:h-[76px] 4k:h-[110px] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-9 2k:gap-14 4k:gap-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              const cls = `inline-flex items-center gap-1 py-2 transition-colors ${
                isActive
                  ? "text-[var(--color-primary-dark)] font-bold"
                  : "text-[var(--color-secondary)] font-normal"
              }`;
              const inner = (
                <>
                  <span className="navbar text-[inherit] font-[inherit] leading-none">{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className="w-4 h-4 2k:w-6 2k:h-6 4k:w-8 4k:h-8"
                      fill="currentColor"
                    />
                  )}
                </>
              );
              return link.isLink ? (
                <Link
                  key={link.name}
                  href={link.href ?? `#${link.id}`}
                  onClick={() => setActiveLink(link.id)}
                  className={`${cls} cursor-pointer hover:text-[var(--color-primary)]`}
                >
                  {inner}
                </Link>
              ) : (
                <span key={link.name} className={`${cls} cursor-default`}>
                  {inner}
                </span>
              );
            })}
          </nav>

          {/* Right: Cart & Search */}
          <div className="flex items-center gap-3 sm:gap-4 2k:gap-6 shrink-0">
            <button type="button" aria-label="Cart" className={`${iconBtn} hidden sm:flex`}>
              <ShoppingCart className={iconSize} fill="currentColor" />
            </button>
            <button type="button" aria-label="Search" className={`${iconBtn} hidden sm:flex`}>
              <Search className={iconSize} strokeWidth={2.5} />
            </button>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="xl:hidden text-[var(--color-secondary)] p-2 focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-2 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            const cls = `flex items-center justify-between py-3 border-b border-gray-100 last:border-0 navbar text-lg transition-colors ${
              isActive ? "text-[var(--color-primary-dark)] font-bold" : "text-[var(--color-secondary)]"
            }`;
            const inner = (
              <>
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
              </>
            );
            return link.isLink ? (
              <Link
                key={link.name}
                href={link.href ?? `#${link.id}`}
                onClick={() => {
                  setActiveLink(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`${cls} hover:text-[var(--color-primary)]`}
              >
                {inner}
              </Link>
            ) : (
              <div key={link.name} className={`${cls} cursor-default`}>
                {inner}
              </div>
            );
          })}

          <div className="pt-4 flex items-center gap-4 sm:hidden">
            <button type="button" aria-label="Cart" className={iconBtn}>
              <ShoppingCart className={iconSize} fill="currentColor" />
            </button>
            <button type="button" aria-label="Search" className={iconBtn}>
              <Search className={iconSize} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
