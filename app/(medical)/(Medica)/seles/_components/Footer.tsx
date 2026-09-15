"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full relative z-10 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full min-h-[350px]">

        {/* Left: Full Height Image */}
        <div className="w-full lg:w-[25%] xl:w-[20%] relative shrink-0">
          <img
            src="/medical/seles/footerimg.png"
            alt="Oltho Building"
            className="absolute inset-0 object-cover object-center grayscale"
          />
        </div>

        {/* Right: Content Container */}
        <div className="flex-1 w-full px-6 sm:px-10 min-[2000px]:px-20 min-[3000px]:px-32 py-12 lg:py-16 min-[2000px]:py-24 min-[3000px]:py-32 flex flex-col justify-between">

          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-6 mb-12">

            {/* Column 1: Quick Links */}
            <div className="flex flex-col gap-4 min-[2000px]:gap-6 min-[3000px]:gap-8">
              <h4 className="font-orbitron font-semibold text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-white mb-2 min-[2000px]:mb-4">
                Quick Links
              </h4>
              <button onClick={() => scrollToTop()} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Trauma</button>
              <button onClick={() => scrollToSection('products')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Spine</button>
              <button onClick={() => scrollToSection('products')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Instruments</button>
              <button onClick={() => scrollToSection('news')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Catalogs</button>
              <button onClick={() => scrollToSection('contact')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Contact</button>
            </div>

            {/* Column 2: Products */}
            <div className="flex flex-col gap-4 min-[2000px]:gap-6 min-[3000px]:gap-8">
              <h4 className="font-orbitron font-semibold text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-white mb-2 min-[2000px]:mb-4">
                Products
              </h4>
              <button onClick={() => scrollToSection('advanced')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Plate Systems</button>
              <button onClick={() => scrollToSection('advanced')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Nail Systems</button>
              <button onClick={() => scrollToSection('advanced')} className="text-left font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">Screw Systems</button>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col gap-5 min-[2000px]:gap-7 min-[3000px]:gap-9">
              <h4 className="font-orbitron font-semibold text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-white mb-2 min-[2000px]:mb-4">
                Contact Us
              </h4>

              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 min-[2000px]:scale-125 min-[3000px]:scale-150 min-[2000px]:mt-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+903124416265" className="font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">
                  +90 312 441 6265
                </a>
              </div>

              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 min-[2000px]:scale-125 min-[3000px]:scale-150 min-[2000px]:mt-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@oltho.com" className="font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white hover:text-[#DBA018] transition-colors">
                  info@oltho.com
                </a>
              </div>

              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 min-[2000px]:scale-125 min-[3000px]:scale-150 min-[2000px]:mt-2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address className="font-baloo text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-white not-italic leading-relaxed">
                  HQ<br />
                  Kızılırmak Mah. Muhsin Yazıcıoğlu Cad.<br />
                  No: 39/A-57<br />
                  Çankaya - Ankara - TURKEY
                </address>
              </div>
            </div>

            {/* Column 4: Logo & Brand Description */}
            <div className="flex flex-col gap-4 min-[2000px]:gap-6 min-[3000px]:gap-8">
              <img
                src="/medical/seles/logo.png"
                alt="oltho logo"
                className="w-auto h-[90px] min-[2000px]:h-[130px] min-[3000px]:h-[170px] object-contain object-left mb-2 min-[2000px]:mb-4 brightness-[5] grayscale"
              />
              <p className="font-baloo text-[16px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] leading-relaxed text-white">
                oltho delivers quality spine, trauma, and CMF solutions focused on patient comfort, precision, and reliable performance for modern orthopedic care.
              </p>
            </div>

          </div>

          {/* Bottom Row */}
          <div>
            <div className="w-full h-px bg-white/30 mb-3 min-[2000px]:mb-5 min-[3000px]:mb-7" />
            <div className="flex items-center justify-between">
              <p className="font-baloo text-[15px] min-[2000px]:text-[20px] min-[3000px]:text-[26px] text-white">
                &copy; CTN 2024, All Rights Reserved.
              </p>

              <button
                onClick={scrollToTop}
                className="w-14 h-14 min-[2000px]:w-20 min-[2000px]:h-20 min-[3000px]:w-24 min-[3000px]:h-24 rounded-full bg-[#DBA018] flex items-center justify-center hover:bg-[#b07d0d] transition-colors shadow-lg"
                aria-label="Scroll to top"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
