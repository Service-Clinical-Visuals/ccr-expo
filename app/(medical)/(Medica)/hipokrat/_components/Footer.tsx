"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="w-full flex flex-col overflow-hidden">
      {/* Main Blue Footer Area */}
      <div className="w-full bg-[#0082CB] text-white py-14 sm:py-16 xl:py-20 min-[2500px]:py-32 min-[3800px]:py-44">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 min-[2500px]:gap-16 min-[3800px]:gap-24 items-start">
            {/* Column 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-5 min-[2500px]:gap-8">
              <Link href="#home" aria-label="Hipokrat">
                <img
                  src="/medical/hipokrat/logo.webp"
                  alt="Hipokrat Logo"
                  className="w-[200px] sm:w-[220px] md:w-[230px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] h-auto brightness-0 invert object-contain"
                />
              </Link>

              <p className="text-white/95 text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[26px] min-[2500px]:leading-[40px] min-[3800px]:leading-[50px] font-normal xl:max-w-[70%] max-w-[90%]">
                Hipokrat is a Turkish medical device company specializing in innovative orthopedic
                implants and surgical solutions, with decades of experience in the healthcare
                industry.
              </p>

              {/* Social Media Links - Figma vector style with 4K scaling */}
              <div className="flex items-center gap-5 min-[2500px]:gap-8 pt-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-white/80 transition-opacity"
                >
                  <Instagram className="w-[28px] h-[28px] min-[2500px]:w-[44px] min-[2500px]:h-[44px] min-[3800px]:w-[58px] min-[3800px]:h-[58px]" strokeWidth={1.9} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-white/80 transition-opacity"
                >
                  <Linkedin className="w-[28px] h-[28px] min-[2500px]:w-[44px] min-[2500px]:h-[44px] min-[3800px]:w-[58px] min-[3800px]:h-[58px]" strokeWidth={1.9} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6">
              <h4 className="text-[18px] min-[2500px]:text-[28px] min-[3800px]:text-[38px] font-semibold text-white font-primary mb-2 min-[2500px]:mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5 min-[2500px]:gap-4">
                <li>
                  <Link
                    href="#home"
                    className="text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white/95 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white/95 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white/95 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#news"
                    className="text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white/95 hover:text-white transition-colors"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-4 min-[2500px]:gap-6">
              <h4 className="text-[18px] min-[2500px]:text-[28px] min-[3800px]:text-[38px] font-semibold text-white font-primary mb-2 min-[2500px]:mb-4">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-3.5 min-[2500px]:gap-6">
                <li>
                  <a
                    href="tel:+905494673702"
                    className="flex items-center gap-3 min-[2500px]:gap-5 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" strokeWidth={2} />
                    <span className="!text-[16px] min-[2500px]:!text-[24px] min-[3800px]:!text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white font-normal">
                      +(90) 549 467 37 02
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@hipokrat.com.tr"
                    className="flex items-center gap-3 min-[2500px]:gap-5 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white" strokeWidth={2} />
                    <span className="!text-[16px] min-[2500px]:!text-[24px] min-[3800px]:!text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white font-normal">
                      info@hipokrat.com.tr
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 min-[2500px]:gap-5">
                  <MapPin className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 text-white mt-1" strokeWidth={2} />
                  <span className="!text-[16px] min-[2500px]:!text-[24px] min-[3800px]:!text-[32px] leading-[28px] min-[2500px]:leading-[42px] text-white font-normal">
                    7407/6 Street No:10
                    <br />
                    35060 Pınarbaşı / İZMİR
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Subscription (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3.5 min-[2500px]:gap-6">
              <h4 className="text-[18px] min-[2500px]:text-[28px] min-[3800px]:text-[38px] font-semibold text-white font-primary mb-1 min-[2500px]:mb-3">
                Subscribe to Newsletter :
              </h4>
              <p className="text-[16px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[26px] min-[2500px]:leading-[38px] text-white/95 font-normal">
                Be the first to know about new collections and exclusive offers.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="footer-subscribe-form mt-2 max-w-sm xl:max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-Mail ID"
                  required
                  className="footer-subscribe-input"
                />
                <button
                  type="submit"
                  className="footer-subscribe-btn"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom White Bar */}
      <div className="w-full bg-white text-[#111111] py-4 sm:py-5 min-[2500px]:py-8 min-[3800px]:py-12 border-t border-gray-100">
        <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-2xl font-normal">
          <p>© 2026 Hipokrat Global All rights reserved.</p>

          <div className="flex items-center gap-6 min-[2500px]:gap-12">
            <Link href="#terms" className="hover:text-[#0082CB] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#privacy" className="hover:text-[#0082CB] transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
