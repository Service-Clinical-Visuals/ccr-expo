"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");

      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Downloads", href: "#downloads" },
    { name: "Pursue", href: "#pursue" },
    { name: "Career", href: "#career" },
    { name: "News", href: "#news" },
  ];

  return (
    <footer
      id="contact"
      className="w-full bg-white flex flex-col overflow-hidden"
    >
      {/* Wave Transition Ribbon above the footer */}
      <div className="w-full overflow-hidden leading-none bg-white -mb-[1px]">
        <svg
          viewBox="0 0 1920 320"
          preserveAspectRatio="none"
          className="w-full footer-wave"
        >
          {/* Light Teal Footer Wave */}
          <path
            d="
              M0 138
              C250 195 450 225 650 235
              C820 243 960 225 1080 180
              C1260 112 1450 76 1640 72
              C1745 70 1835 72 1920 78
              L1920 320
              L0 320
              Z
            "
            fill="#CCEBEC"
          />

          {/* Dark Slate Curved Ribbon */}
          <path
            d="
              M540 225
              C700 232 850 235 980 205
              C1110 175 1180 125 1320 92
              C1490 52 1690 48 1920 48
              L1920 108
              C1690 104 1500 108 1340 138
              C1190 166 1110 214 980 238
              C830 266 680 242 540 225
              Z
            "
            fill="#4C5157"
          />
        </svg>
      </div>

      {/* Main Footer Body */}
      <div className="w-full bg-[#CCEBEC] pt-0 footer-body-section">
        <div className="custom-container">
          <div className="grid grid-cols-2 md:grid-cols-12 lg:flex lg:flex-row items-start justify-between footer-main-grid w-full">
            {/* Col 1: Brand Logo & Company Description & Social Icons */}
            <div className="col-span-2 md:col-span-12 lg:col-span-1 flex flex-col items-start footer-col-items w-full lg:w-[32%] xl:w-[30%] shrink-0">
              <Link href="#home" className="inline-block">
                <img
                  src="/medical/rz-medizintechnik/logo.png"
                  alt="RZ Medizintechnik"
                  className="footer-logo"
                />
              </Link>

              <p className="footer-body">
                We develop innovative medical technology and high-quality
                electrosurgical solutions designed to support precision,
                efficiency, and reliability in modern healthcare. Our products
                combine advanced technology with intuitive operation to meet the
                evolving needs of medical professionals.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center footer-social-wrapper pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon hover:text-[#0099A1] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-full h-full fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon hover:text-[#0099A1] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-full h-full fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line
                      x1="17.5"
                      x2="17.51"
                      y1="6.5"
                      y2="6.5"
                    />
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon hover:text-[#0099A1] transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-[130%] h-full fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="col-span-1 md:col-span-3 lg:col-auto flex flex-col items-start footer-col-items shrink-0">
              <h3 className="footer-heading">
                Quick Links
              </h3>

              <ul className="flex flex-col footer-col-items">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="footer-link hover:text-[#0099A1]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact Us */}
            <div className="col-span-1 md:col-span-4 lg:col-auto flex flex-col items-start footer-col-items shrink-0">
              <h3 className="footer-heading">
                Contact Us
              </h3>

              <div className="flex flex-col footer-col-items text-[#000000]">
                <div className="flex items-center footer-contact-row">
                  <Phone className="footer-contact-icon fill-black text-black shrink-0" />

                  <a
                    href="tel:+49746294700"
                    className="footer-link hover:text-[#0099A1] whitespace-nowrap"
                  >
                    +49 7462 94 70-0
                  </a>
                </div>

                <div className="flex items-center footer-contact-row">
                  {/* Correct Email Icon with visible flap opening */}
                  <svg
                    className="footer-contact-icon fill-black shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>

                  <a
                    href="mailto:info@rz-medizintechnik.com"
                    className="footer-link hover:text-[#0099A1] break-all"
                  >
                    info(at)rz-medizintechnik.com
                  </a>
                </div>

                <div className="flex items-start footer-contact-row">
                  {/* Correct Location Pin Icon with center hole cutout */}
                  <svg
                    className="footer-contact-icon fill-black shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351A24.25 24.25 0 014.07 13.784C2.696 11.9 2 9.99 2 8a10 10 0 1120 0c0 1.99-.696 3.9-2.07 5.784a24.25 24.25 0 01-7.47 8.567.75.75 0 01-.92 0zM12 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="footer-link footer-address-text">
                    Unter Hasslen 20/22
                    <br />
                    78532 Tuttlingen
                    <br />
                    Germany
                  </p>
                </div>
              </div>
            </div>

            {/* Col 4: Newsletter Subscription */}
            <div className="col-span-2 md:col-span-5 lg:col-auto flex flex-col items-start footer-col-items w-full lg:w-[28%] xl:w-[28%] shrink-0">
              <h3 className="footer-heading">
                Subscribe to Newsletter :
              </h3>

              <p className="footer-body">
                Stay informed with the latest product launches, industry news,
                technical updates, and innovations
              </p>

              <form
                onSubmit={handleSubscribe}
                className="footer-form-wrapper mt-1"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-Mail id"
                  required
                  className="footer-input pr-2 flex-1 outline-none min-w-0"
                />

                <button
                  type="submit"
                  className="footer-btn shrink-0"
                >
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <span className="footer-body text-teal-800 font-semibold">
                  Thank you for subscribing!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-white footer-copyright-bar border-t border-gray-200/80">
        <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-3 footer-contact-row text-center sm:text-left">
          <p className="footer-copyright">
            &copy; 2026 RZ Medizintechnik
          </p>

          <div className="flex items-center gap-6 sm:gap-8 footer-contact-row">
            <Link
              href="#privacy"
              className="footer-copyright hover:text-[#0099A1] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#terms"
              className="footer-copyright hover:text-[#0099A1] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}