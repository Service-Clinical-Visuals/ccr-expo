"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#28455c] text-white pt-14 sm:pt-16 md:pt-20 overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.15fr_0.95fr_0.85fr_1.45fr] gap-10 xl:gap-6 2xl:gap-8 pb-12 sm:pb-16">
          {/* Column 1: Company Logo & Description */}
          <div
            className="md:col-span-2 xl:col-auto pr-0 xl:pr-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Link href="/amecath" className="inline-block mb-5">
              <div className="relative w-40 sm:w-44 h-9 sm:h-10">
                <Image
                  src="/medical/amecath/logo.png"
                  alt="AMECATH Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="section-text text-white font-inter leading-relaxed">
              AMECATH is a global medical device manufacturer specializing in
              high-quality catheter solutions for urology, dialysis, and
              intravascular applications. Headquartered in Egypt, the company has
              built a strong international presence, exporting to over 40–55
              countries worldwide. With a focus on innovation, patient safety, and
              compliance with international standards such as CE and FDA, AMECATH
              delivers reliable products that support improved clinical outcomes
              and modern healthcare needs.
            </p>
          </div>

          {/* Quick Links & Products (1 row on mobile screen) */}
          <div className="col-span-1 md:col-span-1 xl:col-auto grid grid-cols-2 gap-6 sm:gap-8 xl:gap-4">
            {/* Quick Links */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h4 className="footer-text font-semibold font-raleway text-white mb-4 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <h4 className="footer-text font-semibold font-raleway text-white mb-4 tracking-wide">
                Products
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors lowercase"
                  >
                    intervascular
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors lowercase"
                  >
                    pediatric
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors lowercase"
                  >
                    dialysis
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors lowercase"
                  >
                    urology
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors lowercase"
                  >
                    accessory
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="section-text text-white hover:text-white/80 font-inter transition-colors lowercase"
                  >
                    oem offering
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div
            className="col-span-1 md:col-span-1 xl:col-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h4 className="footer-text font-semibold font-raleway text-white mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-1" />
                <span className="section-text text-white font-inter leading-snug">
                  Factory Industrial Area
                  <br />
                  B4 PLOT #119 East
                  <br />
                  10th of Ramadan City - Egypt
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="tel:+200554501321"
                  className="section-text text-white font-inter transition-colors"
                >
                  (+20) 055 4501 321
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="mailto:Support@amecathgroup.com"
                  className="section-text text-white font-inter transition-colors"
                >
                  Support@amecathgroup.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay Updated */}
          <div
            className="col-span-1 md:col-span-2 xl:col-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <h4 className="footer-text font-semibold font-raleway text-white mb-4 tracking-wide">
              Stay Updated
            </h4>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="bg-white/5 border border-white/30 rounded-lg px-3 py-2 text-white placeholder:text-slate-400/80 focus:outline-none focus:border-white/80 w-full section-text font-inter"
              />
              <button
                type="submit"
                className="border border-white/40 hover:border-white text-white hover:bg-white/10 rounded-lg px-3 py-2 flex items-center justify-center gap-1.5 transition-colors font-raleway section-text flex-shrink-0 cursor-pointer"
              >
                <span>Send</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="footer-link text-emerald-400 mt-2 font-inter">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div
          className="border-t border-white/15 py-6 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <p className="section-text text-white font-inter">
            All Rights Reserved AMECATH© 2023 Designed And Developed By Vhorus
          </p>
        </div>
      </div>
    </footer>
  );
}
