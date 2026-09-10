"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A2421] pt-16 lg:pt-20 pb-6 ">
      <div className="custom-container flex flex-col gap-10">

        {/* Top Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Column 1: Logo & Socials */}
          <div className="col-span-2 lg:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="w-full inline-block">
              <img src="/moto/skt/footer-logo.png" alt="SKT Logo" className="w-[180px] min-[3800px]:w-[320px] h-auto object-contain object-left" />
            </Link>
            <div className="flex items-center gap-3 min-[3800px]:gap-6 mt-4 min-[3800px]:mt-8">
              <a href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Corporate */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white mb-2 text-xl font-bold">
              Corporate
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'History', 'Our Policies', 'Export Map'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[var(--color-primary)] transition-colors group">
                    <span className="footer-body text-white text-sm group-hover:text-[var(--color-primary)]">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white mb-2 text-xl font-bold">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {['Rotary Shaft Seals', 'Gasket Sets', 'Shaft Bearing & Bushing Group', 'Other Sealing Products'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[var(--color-primary)] transition-colors group">
                    <span className="footer-body text-white text-sm group-hover:text-[var(--color-primary)]">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading text-white mb-2 text-xl font-bold">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+902242434100" className="flex items-start gap-3 min-[3800px]:gap-6 hover:text-[var(--color-primary)] transition-colors group">
                  <Phone className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-[var(--color-primary)] mt-1 min-[3800px]:mt-2" strokeWidth={2.5} />
                  <span className="footer-body text-white text-sm group-hover:text-[var(--color-primary)]">
                    +90 (224) 243 4100
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@skt.com.tr" className="flex items-start gap-3 min-[3800px]:gap-6 hover:text-[var(--color-primary)] transition-colors group">
                  <Mail className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-[var(--color-primary)] mt-1 min-[3800px]:mt-2" strokeWidth={2.5} />
                  <span className="footer-body text-white text-sm group-hover:text-[var(--color-primary)]">
                    info@skt.com.tr
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 min-[3800px]:gap-6">
                  <MapPin className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-[var(--color-primary)] mt-1 min-[3800px]:mt-2 shrink-0" strokeWidth={2.5} />
                  <span className="footer-body text-white text-sm">
                    Minareliçavuş Bursa OSB Mah.<br />
                    Ali Osman Sönmez Blv. No:31<br />
                    16220 Nilüfer - BURSA/TÜRKİYE
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="col-span-2 lg:col-span-3 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="500">
            <h4 className="footer-heading text-white mb-2 text-xl font-bold">
              Subscribe For More Information
            </h4>
            <p className="footer-body text-white text-sm leading-relaxed mb-2">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from SKT Oil Seals
            </p>
            <form className="relative flex items-center w-full bg-white rounded-lg min-[3800px]:rounded-2xl overflow-hidden h-12 min-[3800px]:h-20">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full h-full px-4 min-[3800px]:px-8 outline-none text-black text-sm min-[3800px]:text-2xl"
              />
              <button
                type="submit"
                className="absolute right-1 min-[3800px]:right-2 w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 bg-[var(--color-primary)] rounded-md min-[3800px]:rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-[#171717]" strokeWidth={2} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col items-center justify-center text-center"  >
          <p className="footer-body text-white text-sm">
            Copyright © 2026 SKT Oil Seals, all rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
