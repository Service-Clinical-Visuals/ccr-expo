"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full flex flex-col bg-[#0B192C] overflow-hidden pt-16 xl:pt-20">
      <div className="custom-container flex flex-col pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 md:gap-6 lg:gap-6 xl:gap-8 items-start">
          {/* Column 1: Company Logo, Intro & Socials */}
          <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 w-full">
            <Link href="#home" className="inline-block w-fit">
              <img
                src="/medical/alsa-apparecchi/logo.webp"
                alt="ALSA Bologna"
                className="h-10 sm:h-12 min-[2500px]:h-16 min-[3800px]:h-20 w-auto object-contain"
              />
            </Link>

            <Typography
              variant="p"
              color="white"
              className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 leading-relaxed font-normal w-full xl:max-w-[85%] max-w-[90%]"
            >
              ALSA is an Italian medical technology company founded in 1932, specializing in advanced
              electrosurgical equipment. With over 90 years of experience, the company is committed to
              precision, innovation, quality, and reliability in modern surgical care.
            </Typography>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white/10 hover:bg-[var(--color-primary)] flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 min-[2500px]:gap-6 col-span-1 md:col-span-1 lg:col-span-2">
            <Typography variant="h3" color="white" className="!font-semibold text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-3xl">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-3 min-[2500px]:gap-4 font-secondary">
              <li>
                <Link
                  href="#home"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4 min-[2500px]:gap-6 col-span-1 md:col-span-1 lg:col-span-2">
            <Typography variant="h3" color="white" className="!font-semibold text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-3xl">
              Products
            </Typography>
            <ul className="flex flex-col gap-3 min-[2500px]:gap-4 font-secondary">
              <li>
                <Link
                  href="#products"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  EXCELL NHP/T
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  EXCELL MCDSe
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  ALSATOM SU MPC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legacy */}
          <div className="flex flex-col gap-4 min-[2500px]:gap-6 col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
            <Typography variant="h3" color="white" className="!font-semibold text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-3xl">
              Legacy
            </Typography>
            <ul className="flex flex-col gap-3 min-[2500px]:gap-4 font-secondary">
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 hover:text-white transition-colors font-normal leading-relaxed"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col gap-4 min-[2500px]:gap-6 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 w-full">
            <Typography variant="h3" color="white" className="!font-semibold text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-3xl">
              Subscribe to Newsletter :
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-sm sm:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-300 leading-relaxed font-normal"
            >
              Stay informed with the latest product launches, industry news, technical updates, and
              innovations
            </Typography>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-2 pt-2 w-full">
              <input
                type="email"
                required
                placeholder="Enter Your E-Mail id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 bg-white text-gray-800 placeholder:text-gray-400 px-4 py-2.5 min-[2500px]:px-6 min-[2500px]:py-4 min-[3800px]:px-8 min-[3800px]:py-5 rounded-full focus:outline-none border border-gray-200"
              />
              <button
                type="submit"
                className="shrink-0 bg-[#1E293B] hover:bg-[#334155] text-white font-primary px-6 py-2.5 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-10 min-[3800px]:py-5 rounded-full font-medium transition-colors cursor-pointer border border-white/10 shadow-sm text-center"
              >
                <span className="button">{subscribed ? "Subscribed" : "Subscribe"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom White Copyright Bar */}
      <div className="w-full bg-white py-4 px-4 text-center border-t border-gray-100">
        <p className="text-[#111111] text-xs sm:text-sm font-secondary font-normal">
          © 2026 ALSA APPARECCHI MEDICALI S.r.l. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
