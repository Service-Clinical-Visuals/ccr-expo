"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full relative overflow-hidden">
      {/* Top Wave matching Figma curve seamlessly */}
      <div className="w-full overflow-hidden leading-none -mb-[2px] pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 min-[2500px]:h-36 block"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,22 C 250,15 450,20 700,50 C 950,80 1080,95 1200,90 C 1320,85 1380,55 1440,35 L 1440,90 L 0,90 Z"
            fill="#312782"
          />
        </svg>
      </div>

      {/* Main Footer Body with Figma Background */}
      <div className="w-full bg-[#312782] text-white pt-2 sm:pt-3 pb-6 sm:pb-8 min-[2500px]:pb-10">
        <div className="custom-container flex flex-col gap-6 sm:gap-7 min-[2500px]:gap-10">
          {/* Top Logo - Enlarged using transform scale */}
          <div className="flex items-center pb-1">
            <Link href="#home" aria-label="PROMA REHA Home" className="inline-block">
              <img
                src="/medical/proma-reha/footer_logo.webp"
                alt="PROMA REHA Logo"
                className="h-16 sm:h-20 md:h-24 min-[2500px]:h-36 min-[3800px]:h-48 w-auto object-contain object-left transform origin-left scale-125 sm:scale-135 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Dotted HR line below the logo */}
          <div className="border-t border-dashed border-white/20 w-full"></div>

          {/* 4 Main Footer Columns - Layout matching Figma alignments */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-7 lg:gap-6 w-full">
            {/* Column 1: About Company (Left Aligned, ~40% width) */}
            <div className="flex flex-col gap-2 w-full lg:w-[40%] xl:w-[40%] text-left">
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-semibold text-base sm:text-lg min-[2500px]:text-2xl xl:max-w-[70%]"
              >
                ABOUT COMPANY
              </Typography>
              <Typography
                variant="p"
                color="white"
                className="text-white/80 font-secondary text-base min-[2500px]:text-xl leading-relaxed xl:max-w-[70%] max-w-[90%]"
              >
                PROMA REHA Is A Czech Manufacturer Of High-Quality Medical And Nursing Beds,
                Combining Decades Of Experience, Innovative Design And Reliable Craftsmanship To
                Enhance Patient Comfort And Support Healthcare Professionals Worldwide.
              </Typography>
            </div>

            {/* Column 2: Quick Links (Center Aligned, ~20% width) */}
            <div className="flex flex-col items-start lg:items-center gap-2 w-full lg:w-[20%] text-left lg:text-center">
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-semibold text-base sm:text-lg min-[2500px]:text-2xl"
              >
                QUICK LINKS
              </Typography>
              <ul className="flex flex-col items-start lg:items-center gap-1 sm:gap-1.5 font-secondary text-base min-[2500px]:text-xl text-white/80">
                <li>
                  <Link href="#home" className="hover:text-white hover:underline transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white hover:underline transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white hover:underline transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-white hover:underline transition-colors">
                    References
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="hover:text-white hover:underline transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact (Center Aligned, ~20% width) */}
            <div className="flex flex-col items-start lg:items-center gap-2 w-full lg:w-[20%] text-left lg:text-center">
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-semibold text-base sm:text-lg min-[2500px]:text-2xl"
              >
                CONTACT
              </Typography>
              <div className="flex flex-col items-start lg:items-center gap-1 font-secondary text-base min-[2500px]:text-xl text-white/80">
                <a
                  href="tel:+420491112233"
                  className="hover:text-white transition-colors inline-block"
                >
                  <span>+420 491 11 22 33</span>
                </a>
                <a
                  href="mailto:export@promareha.cz"
                  className="hover:text-white transition-colors inline-block"
                >
                  <span>export@promareha.cz</span>
                </a>
              </div>
            </div>

            {/* Column 4: Address (Right Aligned, ~20% width) */}
            <div className="flex flex-col items-start lg:items-end gap-2 w-full lg:w-[20%] text-left lg:text-right">
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-semibold text-base sm:text-lg min-[2500px]:text-2xl"
              >
                ADDRESS
              </Typography>
              <div className="flex flex-col items-start lg:items-end gap-1 font-secondary text-base min-[2500px]:text-xl text-white/80">
                <span>PROMA REHA, S.R.O.</span>
                <span>Riegrova 342</span>
                <span>552 03 Česká Skalice</span>
                <span>Czech Republic</span>
              </div>
            </div>
          </div>

          {/* Certifications & Newsletter Divider Bar matching Figma */}
          <div className="border-t border-dashed border-white/20 pt-5 sm:pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Certifications Stack (Title over 6 badges) */}
            <div className="flex flex-col gap-2 text-left">
              <Typography
                variant="h4"
                color="white"
                className="!font-semibold text-base min-[2500px]:text-2xl shrink-0"
              >
                PROMA REHA Meets The Certifications
              </Typography>

              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <img
                    key={num}
                    src={`/medical/proma-reha/c${num}.webp`}
                    alt={`Certification ${num}`}
                    className="w-12 h-12 sm:w-14 sm:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3500px]:w-32 min-[3500px]:h-32 min-[3800px]:w-36 min-[3800px]:h-36 object-contain hover:scale-105 transition-transform shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Right: Newsletter Row matching Figma pill design */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <span className="text-white font-primary font-semibold text-base min-[2500px]:text-2xl whitespace-nowrap shrink-0">
                Subscribe to Newsletter :
              </span>

              <form
                onSubmit={handleSubscribe}
                className="w-full sm:w-[320px] md:w-[350px] min-[2500px]:w-[500px] min-[3800px]:w-[650px] bg-white rounded-full p-1.5 flex items-center shadow-lg"
              >
                <input
                  type="email"
                  placeholder={subscribed ? "Thank you for subscribing!" : "Enter Your E-Mail id"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full bg-transparent text-[#111111] placeholder-gray-400 outline-none px-4 text-base min-[2500px]:text-xl font-secondary"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--color-primary)] text-white px-6 py-2 min-[2500px]:px-10 min-[2500px]:py-3.5 rounded-full text-base min-[2500px]:text-xl font-medium hover:bg-[var(--color-primary-hover)] transition-colors shrink-0 cursor-pointer shadow-sm active:scale-95 duration-200"
                >
                  {subscribed ? "Done" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Rights & Policy matching Figma */}
          <div className="border-t border-dashed border-white/20 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-white/80 font-secondary text-center sm:text-left">
            <span>© 1990 – 2026 PROMA REHA, S. R. O. All Rights Reserved</span>

            <div className="flex items-center gap-6 sm:gap-8">
              <Link href="#terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
