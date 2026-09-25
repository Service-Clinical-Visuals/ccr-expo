"use client";

import React, { useState, useEffect } from "react";

interface NavLink {
  name: string;
  id: string;
}

// Navigation items & section anchors
const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Support", id: "accurate-ecg" },
  { name: "Worldwide", id: "gallery" },
  { name: "About", id: "about" },
  { name: "Contacts", id: "contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        className={`header-bar fixed top-0 left-0 w-full z-50 bg-[#273644]/95 backdrop-blur-md transition-all duration-500 ease-in-out flex items-center ${
          isScrolled
            ? "translate-y-0 opacity-100 shadow-lg pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="header-bar custom-container flex items-center justify-between relative z-10">
          <div className="relative h-full flex items-center shrink-0 pr-24 sm:pr-28 md:pr-32 lg:pr-36 xl:pr-40 min-[2500px]:pr-48 min-[3800px]:pr-56 z-20">
            <div
              className="absolute top-0 bottom-0 right-0 bg-white z-0 pointer-events-none header-logo-polygon"
              style={{
                left: "-50vw",
              }}
            />

            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="flex items-center block py-1 cursor-pointer relative z-10"
            >
              <img
                src="/medical/neurosoft/logo.png"
                alt="Neurosoft Logo"
                className="h-[36px] sm:h-[40px] min-[1026px]:h-[44px] min-[2500px]:h-[48px] min-[3800px]:h-[52px] w-auto object-contain mr-2"
              />
            </a>
          </div>

          <nav className="hidden xl:flex items-center gap-6 lg:gap-8 min-[1500px]:gap-10 min-[2500px]:gap-12 min-[3800px]:gap-14 absolute left-1/2 -translate-x-1/2 z-20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`header-nav-link font-baloo text-[17px] min-[2000px]:text-[20px] min-[2500px]:text-[23px] min-[3800px]:text-[26px] leading-normal transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "!text-white font-bold underline underline-offset-8 decoration-2"
                      : "font-medium text-white/90 hover:text-[#0AADF9]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden min-[1026px]:flex items-center gap-3 sm:gap-4 shrink-0 ml-auto z-20">
            <button
              type="button"
              className="header-en-btn font-baloo text-[17px] min-[2000px]:text-[20px] min-[2500px]:text-[23px] min-[3800px]:text-[26px] font-medium text-white hover:text-[#0AADF9] transition-colors px-1"
            >
              EN
            </button>

            <button
              type="button"
              aria-label="Language / Region"
              className="w-[42px] h-[42px] rounded-full bg-[#7B868C]/80 hover:bg-[#7B868C] flex items-center justify-center text-white transition-transform active:scale-95 shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Contact Phone"
              className="w-[42px] h-[42px] rounded-full bg-[#7B868C]/80 hover:bg-[#7B868C] flex items-center justify-center text-white transition-transform active:scale-95 shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </button>

            <button
              type="button"
              className="h-[42px] px-5 rounded-full bg-[#0AADF9] hover:bg-[#0896d8] flex items-center justify-center gap-2 text-white shadow-sm transition-all duration-200 active:scale-95"
            >
              <span className="header-search-text font-baloo font-medium text-[16px] sm:text-[17px] min-[2000px]:text-[19px] min-[2500px]:text-[22px] min-[3800px]:text-[24px]">Search</span>
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 text-white hover:text-[#0AADF9] focus:outline-none ml-auto z-20"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden fixed top-[71px] left-0 w-full h-[calc(100vh-71px)] bg-[#273644] border-t border-white/10 px-6 py-6 space-y-5 shadow-2xl z-50 overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`font-baloo text-[20px] py-1 transition-colors ${
                    activeLink === link.id
                      ? "font-bold text-[#0AADF9] underline underline-offset-4"
                      : "font-medium text-white hover:text-[#0AADF9]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-baloo text-[18px] font-medium text-white">EN</span>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-[#7B868C] flex items-center justify-center text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-[#7B868C] flex items-center justify-center text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="h-[42px] px-6 rounded-full bg-[#0AADF9] flex items-center gap-2 text-white font-baloo font-medium text-[17px]"
              >
                <span>Search</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
