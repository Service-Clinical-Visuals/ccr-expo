"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, Mail, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="w-full bg-[#414047] bg-[url('/medical/yushu/bg4.webp')] bg-cover bg-center bg-no-repeat relative text-white pt-8 sm:pt-10 xl:pt-12 pb-8 overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-8 sm:gap-10 xl:gap-12 w-full">
        {/* Top Columns Section */}
        <div className="footer-row-container grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full">
          {/* Col 1: Logo & Socials */}
          <div className="footer-col-1 col-span-2 md:col-span-1 w-full min-w-0 flex flex-col gap-6 lg:gap-8 items-start">
            <Link href="#home" aria-label="YUSHU Healthcare Home" className="block max-w-full">
              <img
                src="/medical/yushu/logo.webp"
                alt="YŪSHŪ Healthcare Logo"
                className="w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px] min-[1500px]:w-[350px] 2xl:w-[370px] min-[2500px]:w-[540px] min-[3800px]:w-[760px] max-w-full h-auto object-contain brightness-0 invert -ml-[4.3%]"
              />
            </Link>

            <div className="flex flex-col gap-3 items-start pl-3 sm:pl-4 xl:pl-5 min-[2500px]:pl-8 min-[3800px]:pl-12">
              <span className="font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-4xl tracking-wider uppercase text-white">
                Followed Us :
              </span>
              <div className="flex items-center gap-3.5 min-[2500px]:gap-6">
                <a
                  href="#"
                  aria-label="YouTube"
                  className="inline-flex items-center transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <img
                    src="/medical/yushu/yt.webp"
                    alt="YouTube"
                    className="h-7 sm:h-8 min-[2500px]:h-12 min-[3800px]:h-16 w-auto object-contain"
                  />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex items-center transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <img
                    src="/medical/yushu/link.webp"
                    alt="LinkedIn"
                    className="h-7 sm:h-8 min-[2500px]:h-12 min-[3800px]:h-16 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Solid Vertical Divider */}
          <div className="hidden footer-divider-col items-center justify-center self-stretch -translate-x-6 min-[1500px]:-translate-x-12 min-[2500px]:-translate-x-18 min-[3800px]:-translate-x-26">
            <div className="w-[2.5px] bg-[#D9D9D9] h-full min-h-[200px] rounded-full mx-auto"></div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="footer-col-2 col-span-1 w-full min-w-0 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="footer-heading text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl uppercase tracking-wider font-bold"
            >
              USEFUL LINKS
            </Typography>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="block group">
                  <Typography
                    variant="p"
                    color="white"
                    className="footer-body whitespace-nowrap !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                  >
                    Privacy Policy
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="block group">
                  <Typography
                    variant="p"
                    color="white"
                    className="footer-body whitespace-nowrap !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                  >
                    Cookie Policy
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="block group">
                  <Typography
                    variant="p"
                    color="white"
                    className="footer-body whitespace-nowrap !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                  >
                    Site Map
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="footer-col-3 col-span-1 w-full min-w-0 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="footer-heading text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl uppercase tracking-wider font-bold"
            >
              PRODUCTS
            </Typography>
            <ul className="space-y-3">
              <li>
                <Link href="#products" className="block group">
                  <Typography
                    variant="p"
                    color="white"
                    className="footer-body whitespace-nowrap !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                  >
                    ENT
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="block group">
                  <Typography
                    variant="p"
                    color="white"
                    className="footer-body whitespace-nowrap !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                  >
                    Urology
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="block group">
                  <Typography
                    variant="p"
                    color="white"
                    className="footer-body whitespace-nowrap !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                  >
                    Gynecology
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col-4 col-span-2 md:col-span-1 w-full min-w-0 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="footer-heading text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl uppercase tracking-wider font-bold"
            >
              CONTACT INFO
            </Typography>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+390110438523"
                className="flex items-center gap-2.5 text-gray-200 hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors group"
              >
                <Phone className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0" />
                <Typography
                  variant="p"
                  color="white"
                  className="footer-body !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] whitespace-nowrap text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                >
                  +39 011 0438523
                </Typography>
              </a>
              <a
                href="mailto:info@yushuhealthcare.com"
                className="flex items-center gap-2.5 text-gray-200 hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors group"
              >
                <Mail className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0" />
                <Typography
                  variant="p"
                  color="white"
                  className="footer-body !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] whitespace-nowrap text-gray-200 group-hover:text-[var(--color-primary)] font-medium leading-relaxed transition-colors"
                >
                  info@yushuhealthcare.com
                </Typography>
              </a>
            </div>
          </div>

          {/* Col 5: Newsletter Subscribe */}
          <div className="footer-col-5 col-span-2 md:col-span-2 w-full min-w-0 flex flex-col gap-4">
            <Typography
              variant="footer-heading"
              color="white"
              className="footer-heading text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl uppercase tracking-wider font-bold"
            >
              SUBSCRIBE TO YUSHU INSIGHTS
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="footer-body !text-[1.0625rem] min-[2500px]:!text-[1.6rem] min-[3800px]:!text-[2.125rem] text-gray-200 leading-relaxed font-medium"
            >
              Stay up to date on the latest news, new product launches, promotions, and events.
            </Typography>

            {/* Newsletter Input Form */}
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center w-full mt-1">
              <input
                type="email"
                placeholder="E - mail address"
                className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-xl px-4 py-2.5 sm:py-3 text-[1.0625rem] min-[2500px]:text-[1.6rem] min-[3800px]:text-[2.125rem] placeholder:text-[1.0625rem] min-[2500px]:placeholder:text-[1.6rem] min-[3800px]:placeholder:text-[2.125rem] focus:outline-none pr-14 shadow-xs"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 p-2 sm:p-2.5 min-[2500px]:p-4 min-[3800px]:p-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg min-[2500px]:rounded-xl transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" />
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[2.5px] bg-[#D9D9D9] rounded-full"></div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300">
          <p>© 2024 YUSHU Healthcare CF and PI 12824390012</p>
          <p>Videographer Daniele Ragazzini</p>
        </div>
      </div>
    </footer>
  );
}
