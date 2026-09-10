"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";

interface NavItem {
  name: string;
  id: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "About us", id: "about" },
  { name: "Products", id: "products", hasDropdown: true },
  { name: "Resources", id: "resources" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
];

const productDropdownItems = [
  { name: "Biopsy Needles", id: "products" },
  { name: "Urology Catheters", id: "products" },
  { name: "Endocavity Needle Guides", id: "products" },
  { name: "Double J Ureteral Stent Sets", id: "stent-360" },
  { name: "Ultrasound Needle Guides", id: "solutions" },
  { name: "Tumor Marking Needles", id: "solutions" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navState, setNavState] = useState<"initial" | "hidden" | "sticky">("initial");

  // Track scroll position to manage navbar visibility and style
  useEffect(() => {
    const handleScroll = () => {
      const bannerEl = document.getElementById("home");
      const bannerBottom = bannerEl
        ? bannerEl.offsetTop + bannerEl.offsetHeight
        : window.innerHeight;

      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        // Initial state: floating pill navbar at the top
        setNavState("initial");
      } else if (currentScrollY < bannerBottom - 80) {
        // Scrolling through banner: hide navbar so banner video is fully visible
        setNavState("hidden");
      } else {
        // Past banner: fitted to screen (top, left, right), following custom container
        setNavState("sticky");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setActiveItem(id);
    setMobileOpen(false);
    setDropdownOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const isSticky = navState === "sticky";
  const isHidden = navState === "hidden";

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300
        ${
          isSticky
            ? "pt-0 bg-white/95 backdrop-blur-md border-b border-[rgba(30,30,30,0.12)] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] pointer-events-auto translate-y-0 opacity-100"
            : `pt-3 sm:pt-4 md:pt-5 pointer-events-none ${
                isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`
        }
      `}
    >
      <div className="custom-container mx-auto pointer-events-auto">
        {/* Main Navbar Bar */}
        <div
          className={`
            w-full flex items-center justify-between transition-all duration-300 relative
            ${
              isSticky
                ? "h-[68px] sm:h-[74px] bg-transparent border-none shadow-none rounded-none px-0"
                : "h-[68px] sm:h-[72px] bg-white rounded-[166px] border border-[rgba(30,30,30,0.25)] shadow-[0px_3px_8px_rgba(0,0,0,0.08)] px-5 sm:px-8 lg:px-10"
            }
          `}
        >
          {/* Left: Brand Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center focus:outline-none cursor-pointer"
            aria-label="Geotek Home"
          >
            <img
              src="/medical/geotek/images/logo.png"
              alt="GEOTEK Healthcare Products"
              width={175}
              height={46}
              className="h-9 sm:h-11 w-auto object-contain select-none"
            />
          </button>

          {/* Center: Desktop Navigation Links (screens >= 1025px) */}
          <nav className="hidden min-[1025px]:flex items-center gap-7 xl:gap-9 relative h-full">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`
                        flex items-center gap-1.5 font-baloo text-[17px] leading-[30px]
                        transition-colors duration-200 cursor-pointer
                        ${isActive ? "text-[#84BB65] font-bold" : "text-[#2A2A2A] font-medium hover:text-[#84BB65]"}
                      `}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[#84BB65]" : "text-[#2A2A2A]"}`}
                      />
                    </button>

                    {/* Active Top Bar Indicator */}
                    {isActive && (
                      <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[37px] h-[5px] bg-[#84BB65] rounded-[68px]" />
                    )}

                    {/* Products Dropdown Menu */}
                    <div
                      className={`
                        absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64
                        transition-all duration-200
                        ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                      `}
                    >
                      <div className="bg-white rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.15)] border border-gray-100 p-2.5 flex flex-col gap-1">
                        {productDropdownItems.map((prod) => (
                          <button
                            key={prod.name}
                            type="button"
                            onClick={() => scrollTo(prod.id)}
                            className="w-full text-left px-3.5 py-2 rounded-xl text-[15px] font-baloo font-medium text-[#2A2A2A] hover:bg-[#84BB65]/10 hover:text-[#468A28] transition-colors"
                          >
                            {prod.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.name} className="relative h-full flex items-center">
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`
                      font-baloo text-[17px] leading-[30px]
                      transition-colors duration-200 cursor-pointer
                      ${isActive ? "text-[#84BB65] font-bold" : "text-[#2A2A2A] font-medium hover:text-[#84BB65]"}
                    `}
                  >
                    {item.name}
                  </button>

                  {/* Active Top Bar Indicator */}
                  {isActive && (
                    <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[37px] h-[5px] bg-[#84BB65] rounded-[68px]" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Desktop CTA Button (screens >= 1025px) */}
          <div className="hidden min-[1025px]:flex items-center">
            <Button
              text="Get In Touch"
              variant="primary"
              onClick={() => scrollTo("contact")}
              className="h-[43px] px-5 py-2.5 text-[17px]"
            />
          </div>

          {/* Mobile & Tablet Hamburger Toggle (screens < 1025px) */}
          <div className="flex min-[1025px]:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-[#2A2A2A] hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Slide-down Drawer (screens < 1025px) */}
        {mobileOpen && (
          <div className="min-[1025px]:hidden mt-2 w-full bg-white rounded-3xl border border-[rgba(30,30,30,0.2)] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`
                      w-full text-left py-2 px-3 rounded-xl font-baloo text-lg
                      flex items-center justify-between transition-colors
                      ${isActive ? "bg-[#84BB65]/15 text-[#468A28] font-bold" : "text-[#2A2A2A] font-medium hover:bg-gray-50"}
                    `}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#84BB65]" />
                    )}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-gray-100 flex justify-center">
                <Button
                  text="Get In Touch"
                  variant="primary"
                  onClick={() => scrollTo("contact")}
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
