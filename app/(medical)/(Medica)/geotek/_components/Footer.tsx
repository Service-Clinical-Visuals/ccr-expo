"use client";

import React from "react";
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", target: "home" },
    { label: "About Us", target: "about" },
    { label: "Products", target: "catalog" },
    { label: "Resources", target: "solutions" },
    { label: "News", target: "news" },
    { label: "Contact", target: "contact" },
  ];

  const productList = [
    { label: "Biopsy Needles", target: "advanced" },
    { label: "IVF Needles", target: "advanced" },
    { label: "Transperineal Needle Guides", target: "advanced" },
    { label: "Tumor Marking Needles", target: "advanced" },
    { label: "Urology Catheters", target: "advanced" },
    { label: "Ultrasound Needle Guide", target: "advanced" },
  ];

  return (
    <footer
      id="contact"
      className="w-full relative pt-14 sm:pt-18 md:pt-22 pb-10 sm:pb-12 bg-white overflow-hidden"
      style={{
        backgroundImage: "url('/medical/geotek/images/footer_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="custom-container mx-auto relative z-10">
        {/* Main Columns Grid:
            - Small screens (<768px): 2 columns side by side for Quick Links & Products; Contact & Social at bottom
            - Tablet screens (768px to 1025px): 3 columns for links, products, contact; social icons moved to bottom above copyright line
            - Desktop screens (>1025px): 12-column single row layout matching Figma
        */}
        <div className="grid grid-cols-2 min-[768px]:grid-cols-3 min-[1025px]:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 min-[1025px]:gap-6 xl:gap-8 items-start">
          {/* Column 1: Brand Logo & Company Mission Description */}
          <div
            className="col-span-2 min-[768px]:col-span-3 min-[1025px]:col-span-3 flex flex-col items-start"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="cursor-pointer focus:outline-none mb-5 text-left"
              aria-label="Geotek Home"
            >
              <img
                src="/medical/geotek/images/logo.png"
                alt="GEOTEK Healthcare Products"
                width={280}
                height={86}
                className="h-12 sm:h-15 lg:h-18 w-auto object-contain select-none"
              />
            </button>

            <p className="font-baloo font-medium text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-[#4A4A4A] max-w-[390px]">
              GEOTEK is a trusted medical equipment manufacturer focused on delivering high-quality,
              reliable, and innovative healthcare solutions.
            </p>
          </div>

          {/* Column 2: Quick Links (Col 1 of the 2 side-by-side columns on mobile) */}
          <div
            className="col-span-1 min-[768px]:col-span-1 min-[1025px]:col-span-2 flex flex-col items-start"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <h3 className="footer-column-heading font-baloo font-semibold text-[2px] sm:text-[24px] lg:text-[26px] xl:text-[28px] leading-tight text-[#2A2A2A] capitalize mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.target)}
                    className="
                      font-baloo font-medium text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px]
                      text-[#4A4A4A] hover:text-[#468A28] capitalize
                      transition-colors duration-200 cursor-pointer text-left
                    "
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (Col 2 of the 2 side-by-side columns on mobile) */}
          <div
            className="col-span-1 min-[768px]:col-span-1 min-[1025px]:col-span-2 flex flex-col items-start"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <h3 className="footer-column-heading font-baloo font-semibold text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] leading-tight text-[#2A2A2A] capitalize mb-4 sm:mb-5">
              Products
            </h3>
            <ul className="flex flex-col space-y-2 sm:space-y-2.5">
              {productList.map((product) => (
                <li key={product.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(product.target)}
                    className="
                      font-baloo font-medium text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px]
                      text-[#4A4A4A] hover:text-[#468A28]
                      transition-colors duration-200 cursor-pointer text-left
                    "
                  >
                    {product.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div
            className="col-span-2 min-[768px]:col-span-1 min-[1025px]:col-span-3 flex flex-col items-start"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <h3 className="footer-column-heading font-baloo font-semibold text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] leading-tight text-[#2A2A2A] capitalize mb-4 sm:mb-5">
              Contact Us
            </h3>

            {/* Phone Numbers */}
            <div className="flex items-start gap-2.5 sm:gap-3 mb-3">
              <Phone size={19} className="text-[#468A28] shrink-0 mt-0.5" strokeWidth={2} />
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => window.open("tel:+903123959852")}
                  className="font-baloo font-medium text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-[#4A4A4A] hover:text-[#468A28] transition-colors cursor-pointer text-left"
                >
                  +90(312) 395 98 52
                </button>
                <button
                  type="button"
                  onClick={() => window.open("tel:+903125146404")}
                  className="font-baloo font-medium text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-[#4A4A4A] hover:text-[#468A28] transition-colors cursor-pointer text-left"
                >
                  +90(312) 514 64 04
                </button>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-2.5 sm:gap-3 mb-3">
              <Mail size={19} className="text-[#468A28] shrink-0 mt-0.5" strokeWidth={2} />
              <button
                type="button"
                onClick={() => window.open("mailto:info@geotekmedical.com")}
                className="font-baloo font-medium text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-[#4A4A4A] hover:text-[#468A28] transition-colors lowercase cursor-pointer text-left break-all"
              >
                info@geotekmedical.com
              </button>
            </div>

            {/* Physical Address */}
            <div className="flex items-start gap-2.5 sm:gap-3">
              <MapPin size={19} className="text-[#468A28] shrink-0 mt-0.5" strokeWidth={2} />
              <p className="font-baloo font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] text-[#4A4A4A] max-w-[260px]">
                Eskişehir Yolu 42. Km ASO 2 Alcı OSB 2014 Cad No:11 06909-Sincan ANKARA, TÜRKİYE
              </p>
            </div>
          </div>

          {/* Column 5: Social Media Links (Moved to bottom of all columns on tablet & mobile, right above copyright line) */}
          <div
            className="col-span-2 min-[768px]:col-span-3 min-[1025px]:col-span-2 flex flex-col items-start pt-1 min-[768px]:pt-3 min-[1025px]:pt-0"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <h3 className="footer-column-heading font-baloo font-semibold text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] leading-tight text-[#2A2A2A] mb-3 sm:mb-4">
              Social Media Links
            </h3>

            {/* 4 Social Icons: Instagram, YouTube, LinkedIn, X (single horizontal row, never wrapping) */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-nowrap">
              {/* 1. Instagram */}
              <button
                type="button"
                aria-label="Follow Geotek on Instagram"
                onClick={() => window.open("https://www.instagram.com", "_blank")}
                className="
                  w-[41px] h-[41px] rounded-[66px] bg-[#468A28]
                  flex items-center justify-center text-white
                  shadow-[0px_3px_8px_rgba(70,138,40,0.3)]
                  hover:bg-[#38701f] hover:scale-110 active:scale-95
                  transition-all duration-300 cursor-pointer shrink-0
                "
              >
                <Instagram size={19} className="text-white" />
              </button>

              {/* 2. YouTube */}
              <button
                type="button"
                aria-label="Follow Geotek on YouTube"
                onClick={() => window.open("https://www.youtube.com", "_blank")}
                className="
                  w-[41px] h-[41px] rounded-[66px] bg-[#468A28]
                  flex items-center justify-center text-white
                  shadow-[0px_3px_8px_rgba(70,138,40,0.3)]
                  hover:bg-[#38701f] hover:scale-110 active:scale-95
                  transition-all duration-300 cursor-pointer shrink-0
                "
              >
                <Youtube size={19} className="text-white" />
              </button>

              {/* 3. LinkedIn */}
              <button
                type="button"
                aria-label="Follow Geotek on LinkedIn"
                onClick={() => window.open("https://www.linkedin.com", "_blank")}
                className="
                  w-[41px] h-[41px] rounded-[66px] bg-[#468A28]
                  flex items-center justify-center text-white
                  shadow-[0px_3px_8px_rgba(70,138,40,0.3)]
                  hover:bg-[#38701f] hover:scale-110 active:scale-95
                  transition-all duration-300 cursor-pointer shrink-0
                "
              >
                <Linkedin size={19} className="text-white" />
              </button>

              {/* 4. X (Twitter) */}
              <button
                type="button"
                aria-label="Follow Geotek on X"
                onClick={() => window.open("https://www.x.com", "_blank")}
                className="
                  w-[41px] h-[41px] rounded-[66px] bg-[#468A28]
                  flex items-center justify-center text-white
                  shadow-[0px_3px_8px_rgba(70,138,40,0.3)]
                  hover:bg-[#38701f] hover:scale-110 active:scale-95
                  transition-all duration-300 cursor-pointer shrink-0
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Separator Line (Figma Line 1: border 1px solid rgba(0,0,0,0.24)) */}
        <div className="w-full h-[1px] bg-black/[0.24] mt-12 sm:mt-14 mb-6 sm:mb-7" />

        {/* Bottom Copyright Text */}
        <div className="w-full text-center">
          <p className="font-baloo font-medium text-[15px] sm:text-[17px] leading-[26px] text-[#4A4A4A]">
            &copy; 2026, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
