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
  { name: "Trauma", id: "trauma" },
  { name: "Spine", id: "spine" },
  { name: "Instruments", id: "instruments" },
  { name: "Catalogs", id: "catalogs" },
  { name: "About", id: "about" },
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
        ${isSticky
          ? "pt-0 bg-black/95 border-b border-white/50 pointer-events-auto translate-y-0 opacity-100"
          : `pt-3 sm:pt-4 md:pt-5 pointer-events-none ${isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`
        }
      `}
    >
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all pointer-events-auto">
        {/* Main Navbar Bar */}
        <div
          className={`
            w-full flex items-center justify-between transition-all duration-300 relative
            ${isSticky
              ? "h-[72px] min-[2000px]:h-[100px] min-[3000px]:h-[140px] bg-transparent border-none rounded-none px-0"
              : "h-[72px] min-[2000px]:h-[100px] min-[3000px]:h-[140px] bg-black rounded-[20px] border border-white/50 px-5 sm:px-8 lg:px-10 min-[2000px]:px-14 min-[3000px]:px-20"
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
              src="/medical/seles/logo.png"
              alt="oltho Healthcare"
              width={175}
              height={46}
              className="h-9 sm:h-11 min-[2000px]:h-16 min-[3000px]:h-20 w-auto object-contain select-none"
            />
          </button>

          {/* Center: Desktop Navigation Links (screens >= 1025px) */}
          <nav className="hidden min-[1025px]:flex items-center gap-7 xl:gap-9 min-[2000px]:gap-12 min-[3000px]:gap-16 relative h-full">
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
                        flex items-center gap-1.5 font-orbitron text-[17px] min-[2000px]:text-[24px] min-[3000px]:text-[32px] leading-[1.5]
                        transition-colors duration-200 cursor-pointer
                        ${isActive ? "text-[#DBA018] font-[800] underline decoration-[#DBA018] decoration-2 underline-offset-4" : "text-white font-normal hover:text-[#DBA018]"}
                      `}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-[15px] h-[15px] min-[2000px]:w-[24px] min-[2000px]:h-[24px] min-[3000px]:w-[32px] min-[3000px]:h-[32px] transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[#DBA018]" : "text-white"}`}
                      />
                    </button>

                    {/* Products Dropdown Menu */}
                    <div
                      className={`
                        absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 min-[2000px]:w-80 min-[3000px]:w-96
                        transition-all duration-200
                        ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                      `}
                    >
                      <div className="bg-[#111] rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.5)] border border-[#333] p-2.5 min-[2000px]:p-4 min-[3000px]:p-5 flex flex-col gap-1 min-[2000px]:gap-2 min-[3000px]:gap-3">
                        {productDropdownItems.map((prod) => (
                          <button
                            key={prod.name}
                            type="button"
                            onClick={() => scrollTo(prod.id)}
                            className="w-full text-left px-3.5 min-[2000px]:px-5 min-[3000px]:px-6 py-2 min-[2000px]:py-3 min-[3000px]:py-4 rounded-xl text-[15px] min-[2000px]:text-[20px] min-[3000px]:text-[26px] font-baloo font-medium text-white hover:bg-[#DBA018]/10 hover:text-[#DBA018] transition-colors"
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
                      font-orbitron text-[17px] min-[2000px]:text-[24px] min-[3000px]:text-[32px] leading-[1.5]
                      transition-colors duration-200 cursor-pointer relative
                      ${isActive ? "text-[#DBA018] font-[800] underline decoration-[#DBA018] decoration-2 underline-offset-4" : "text-white font-normal hover:text-[#DBA018]"}
                    `}
                  >
                    {item.name}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right: Desktop CTA Button (screens >= 1025px) */}
          <div className="hidden min-[1025px]:flex items-center">
            <Button
              text="Get in Touch"
              bgColor="#DBA018"
              textColor="#ffffff"
              onClick={() => scrollTo("contact")}
              className="h-[40px] min-[2000px]:h-[60px] min-[3000px]:h-[70px] px-3 min-[2000px]:px-6 min-[3000px]:px-8 py-2 min-[2000px]:py-3 min-[3000px]:py-4 !text-[18px] min-[2000px]:!text-[22px] min-[3000px]:!text-[28px] font-semibold"
            />
          </div>

          {/* Mobile & Tablet Hamburger Toggle (screens < 1025px) */}
          <div className="flex min-[1025px]:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Slide-down Drawer (screens < 1025px) */}
        {mobileOpen && (
          <div className="min-[1025px]:hidden mt-2 w-full bg-black rounded-[20px] border border-[rgba(255,255,255,0.5)] p-6 animate-in fade-in zoom-in-95 duration-200">
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
                      ${isActive ? "bg-[#DBA018]/15 text-[#DBA018] font-bold" : "text-white font-medium hover:bg-gray-800"}
                    `}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#DBA018]" />
                    )}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-gray-800 flex justify-center">
                <Button
                  text="Get in Touch"
                  bgColor="#DBA018"
                  textColor="#ffffff"
                  onClick={() => scrollTo("contact")}
                  className="w-full justify-center !text-[18px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
