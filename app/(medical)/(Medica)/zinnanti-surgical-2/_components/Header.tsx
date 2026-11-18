"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const BASE_PATH = "/zinnanti-surgical-2";

interface NavLink {
  name: string;
  /** Route to navigate to. Links without an href are placeholders and do nothing. */
  href?: string;
}

const topLinks: NavLink[] = [
  { name: "Home", href: `/` },
  { name: "About", href: `${BASE_PATH}/about` },
  { name: "Products" },
  { name: "FAQ" },
  { name: "Contact Us" },
];

const mainLinks: NavLink[] = [
  { name: "Dermatology" },
  { name: "Gynecology" },
  { name: "High-Res Anoscopy" },
  { name: "Videos" },
  { name: "IFUs" },
];

const NavItem = ({
  link,
  className,
  activeClassName,
  onNavigate,
}: {
  link: NavLink;
  className: string;
  activeClassName?: string;
  onNavigate?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = !!link.href && pathname === link.href;

  if (!link.href) {
    return (
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className={className}
      >
        {link.name}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${isActive && activeClassName ? activeClassName : ""}`}
    >
      {link.name}
    </Link>
  );
};

const Header = () => {
  /**
   * initial — at the top: top bar + nav bar over the banner video
   * hidden  — scrolling through the banner: whole header slides away, video is full screen
   * fixed   — past the banner: only the white nav bar is shown, pinned to the top
   */
  const [headerState, setHeaderState] = useState<"initial" | "hidden" | "fixed">("initial");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // First section of the page (home banner / inner-page banner) decides when the nav returns
      const hero = document.querySelector<HTMLElement>("main > section");
      const threshold = (hero ? hero.offsetHeight : window.innerHeight) - 100;

      if (scrollY <= 30) setHeaderState("initial");
      else if (scrollY < threshold) setHeaderState("hidden");
      else setHeaderState("fixed");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /**
   * Publish the full header height (top bar + nav bar) as --zs-header-h so the
   * first section can sit *below* the header instead of underneath it.
   * Measures the inner rows, so collapsing the top bar or opening the mobile
   * drawer doesn't change the value.
   */
  const topBarRef = useRef<HTMLDivElement>(null);
  const navRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const measure = () => {
      const top = topBarRef.current?.offsetHeight ?? 0;
      const nav = navRowRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--zs-header-h", `${top + nav + 1}px`); // +1 for nav border
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (topBarRef.current) observer.observe(topBarRef.current);
    if (navRowRef.current) observer.observe(navRowRef.current);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--zs-header-h");
    };
  }, []);

  // Keep the header on screen while the mobile menu is open
  const isHidden = headerState === "hidden" && !mobileMenuOpen;
  const isFixed = headerState === "fixed";

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${isHidden
        ? "-translate-y-full opacity-0 pointer-events-none"
        : "translate-y-0 opacity-100 pointer-events-auto"
        }`}
    >
      {/* Top Bar — only in the initial state */}
      <div
        className={`w-full bg-[var(--color-secondary)] text-white overflow-hidden transition-all duration-500 ease-in-out ${isFixed ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
          }`}
      >
        <div
          ref={topBarRef}
          className="custom-container flex items-center justify-between gap-4 py-2.5 sm:py-3 min-[2500px]:py-5 min-[3800px]:py-7"
        >
          <p className="navbar !font-medium text-white truncate">
            News : Anchor Trial New England Journal Of Medicine
          </p>

          <nav className="hidden md:flex items-center gap-6 xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 shrink-0">
            {topLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                className="navbar text-white hover:text-white/70 transition-colors"
                activeClassName="!font-semibold underline underline-offset-4"
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full bg-white border-b border-gray-200 transition-shadow duration-300 ${isFixed ? "shadow-md" : ""
          }`}
      >
        <div
          ref={navRowRef}
          className="custom-container flex items-center justify-between gap-4 py-3 sm:py-3.5 min-[2500px]:py-6 min-[3800px]:py-8"
        >
          {/* Logo */}
          <Link
            href={BASE_PATH}
            className="flex items-center shrink-0"
            aria-label="Zinnanti Surgical Home"
          >
            <img
              src="/medical/zinnanti-surgical-2/logo.webp"
              alt="Zinnanti Surgical Design Group Logo"
              className="h-8 sm:h-9 xl:h-10 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
            {mainLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                className="navbar py-1 text-[#1E1E1E] hover:text-[var(--color-primary)] transition-colors"
                activeClassName="!text-[var(--color-secondary)] !font-semibold"
              />
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="xl:hidden text-gray-800 p-1.5 hover:bg-gray-100 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[calc(100dvh-120px)] overflow-y-auto">
            <div className="custom-container flex flex-col py-4">
              {[...mainLinks, ...topLinks].map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  onNavigate={closeMenu}
                  className="navbar py-3 border-b border-gray-100 last:border-0 text-gray-700 hover:text-[var(--color-primary)]"
                  activeClassName="!text-[var(--color-secondary)] !font-semibold"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
