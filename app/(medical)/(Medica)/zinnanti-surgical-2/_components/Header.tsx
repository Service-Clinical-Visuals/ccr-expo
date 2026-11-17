"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Top Bar (collapses on scroll) */}
      <div
        className={`w-full bg-[var(--color-secondary)] text-white overflow-hidden transition-all duration-500 ease-in-out ${scrolled ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
          }`}
      >
        <div className="custom-container flex items-center justify-between gap-4 py-2.5 sm:py-3 min-[2500px]:py-5 min-[3800px]:py-7">
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
        className={`w-full bg-white border-b border-gray-200 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div className="custom-container flex items-center justify-between gap-4 py-3 sm:py-3.5 min-[2500px]:py-6 min-[3800px]:py-8">
          {/* Logo */}
          <Link
            href={BASE_PATH}
            className="flex items-center shrink-0"
            aria-label="Zinnanti Surgical Home"
          >
            <img
              src="/medical/zinnanti-surgical-2/logo.webp"
              alt="Zinnanti Surgical Design Group Logo"
              className="h-8 sm:h-9 lg:h-10 min-[2500px]:h-16 min-[3800px]:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
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
            className="lg:hidden text-gray-800 p-1.5 hover:bg-gray-100 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[calc(100dvh-120px)] overflow-y-auto">
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
