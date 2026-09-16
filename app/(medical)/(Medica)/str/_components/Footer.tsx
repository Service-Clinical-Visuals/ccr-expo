"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="w-full bg-white border-t border-[#B8B8B8] flex flex-col">
      {/* Main Section */}
      <div className="custom-container pt-10 sm:pt-12 lg:pt-[50px] pb-10 sm:pb-12 lg:pb-[49px]">
        {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-start justify-between gap-8 lg:gap-6 xl:gap-[40px]">

          {/* Col 1: Logo & Mission (Spans full width on mobile/tablet) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start w-full lg:w-[30%] xl:w-[28%] shrink-0">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/str/logo.png"
                alt="STR Biotechnologies Logo"
                className="w-[141px] min-[2500px]:w-[190px] min-[3800px]:w-[240px] h-auto object-contain object-left"
              />
            </Link>
            <p className="footer-body mt-[20px] lg:mt-[30px] text-[#202020] leading-relaxed">
              STR Biotechnologies is a global medical technology manufacturer
              delivering innovative regenerative medicine, orthobiology, and
              orthopedic solutions, supported by advanced manufacturing,
              scientific expertise, and OEM capabilities.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col items-start w-full shrink-0 lg:w-[110px]">
            <h3 className="footer-heading text-[#202020]">Quick Links</h3>
            <ul className="mt-[20px] lg:mt-[27px] flex flex-col gap-[12px] lg:gap-[15px]">
              {["Home", "Support", "Events", "Contact Us"].map((label, i) => (
                <li key={i}>
                  <Link
                    href={`#${label.toLowerCase().replace(" ", "-")}`}
                    className="footer-body text-[#202020] hover:text-[#F6821F] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col items-start w-full shrink-0 lg:w-[130px]">
            <h3 className="footer-heading text-[#202020]">Products</h3>
            <ul className="mt-[20px] lg:mt-[27px] flex flex-col gap-[12px] lg:gap-[15px] lowercase">
              {["orthobiology", "aesthetics", "therapeutics", "urogynecology", "ozone therapies"].map((label, i) => (
                <li key={i}>
                  <Link
                    href="#products"
                    className="footer-body text-[#202020] hover:text-[#F6821F] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start w-full lg:max-w-[280px] xl:max-w-[300px]">
            <h3 className="footer-heading text-[#202020]">Contact Us</h3>
            <div className="mt-[20px] lg:mt-[27px] flex flex-col gap-[15px] w-full">
              <div className="flex items-start gap-[10px]">
                <MapPin className="w-5 h-5 text-[#202020] shrink-0 mt-[2px]" strokeWidth={1.75} />
                <p className="footer-body text-[#202020]">
                  Pınarçay OSB 20. Cadde No:2/1 Merkez, 19100, Çorum Türkiye
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <Phone className="w-5 h-5 text-[#202020] shrink-0" strokeWidth={1.75} />
                <a
                  href="tel:+905326009834"
                  className="footer-body text-[#202020] hover:text-[#F6821F] transition-colors whitespace-nowrap"
                >
                  +905326009834
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <Mail className="w-5 h-5 text-[#202020] shrink-0" strokeWidth={1.75} />
                <a
                  href="mailto:info@strmedical.com"
                  className="footer-body text-[#202020] hover:text-[#F6821F] transition-colors break-all"
                >
                  info@strmedical.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Stay Updated */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-start w-full lg:max-w-[280px] xl:max-w-[320px]">
            <h3 className="footer-heading text-[#202020] tracking-[-0.02em]">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="mt-[20px] lg:mt-[22px] flex items-center gap-[10px] w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full lg:w-[220px] min-[2500px]:w-[280px] h-[44px] min-[2500px]:h-[52px] px-[16px] lg:px-[20px] border border-[#202020] rounded-[8px] footer-body tracking-[-0.02em] text-[#202020] placeholder:text-[#202020] focus:outline-none focus:border-[#F6821F]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-[50px] lg:w-[64px] min-[2500px]:w-[74px] h-[44px] min-[2500px]:h-[52px] border border-[#202020] rounded-[8px] text-[#202020] hover:bg-[#F6821F] hover:border-[#F6821F] hover:text-white transition-colors cursor-pointer shrink-0 flex items-center justify-center"
              >
                <Send className="w-5 h-5" strokeWidth={1.75} />
              </button>
            </form>
            {subscribed && (
              <span className="mt-2 text-sm text-green-600 font-medium">
                Thank you for subscribing!
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Orange Bar */}
      <div className="w-full bg-[#F6821F] h-[67px] flex items-center justify-center px-4">
        <div className="custom-container text-center">
          <p className="footer-body text-white">
            Tüm hakları saklıdır @2026 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}