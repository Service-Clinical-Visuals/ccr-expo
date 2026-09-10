"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#16789b] pt-14 lg:pt-16 pb-6 text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12">

        {/* Top Grid: 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8">

          {/* Column 1: Logo & Mission Statement (Span 3) */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-4">
            <Link href="#" className="inline-block">
              <img
                src="/medical/delta-med/logo.png"
                alt="Numantec"
                className="w-[190px] sm:w-[210px] lg:w-[250px] xl:w-[350px] h-auto object-contain object-left"
              />
            </Link>
            <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-outfit max-w-sm">
              Innovative medical solutions designed to support healthcare professionals and improve patient care. With a strong focus on quality, reliability, and innovation, we develop solutions that meet the evolving needs of modern healthcare.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="font-bold text-base sm:text-lg text-white font-outfit">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Who We Are", href: "" },
                { name: "Products", href: "" },
                { name: "Sustainability", href: "" },
                { name: "Quality", href: "" },
                { name: "News", href: "" },
                { name: "Certifications", href: "" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white text-xs sm:text-[13px] transition-colors font-outfit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Info (Span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="font-bold text-base sm:text-lg text-white font-outfit">
              Legal Info
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Code of Ethics", href: "#" },
                { name: "Whistleblowing", href: "#" },
                { name: "Modello 231", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href=""
                    className="text-white/85 hover:text-white text-xs sm:text-[13px] transition-colors font-outfit"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 2) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="font-bold text-base sm:text-lg text-white font-outfit">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href=""
                  className="flex items-center gap-2.5 text-white/85 hover:text-white text-xs sm:text-[13px] transition-colors group font-outfit"
                >
                  <Phone className="w-4 h-4 text-white shrink-0" strokeWidth={2} />
                  <span>+39 (0)375 785915</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-2.5 text-white/85 hover:text-white text-xs sm:text-[13px] transition-colors group font-outfit"
                >
                  <Mail className="w-4 h-4 text-white shrink-0" strokeWidth={2} />
                  <span>deltamedspa@pec.it</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/85 text-xs sm:text-[13px] font-outfit">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="leading-snug">
                    Via Guido Rossa 20 46019<br />
                    Viadana (MN)
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Company Information (Span 3) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="font-bold text-base sm:text-lg text-white font-outfit">
              Company Information
            </h4>
            <ul className="flex flex-col gap-2.5 text-white/85 text-xs sm:text-[13px] leading-relaxed font-outfit">
              <li>Capitale Sociale €1.457.660,</li>
              <li>Capitale Sottoscritto E Versato €1.443.647,00</li>
              <li>C.F. E P.IVA / Reg. Impr. Di Mantova: 01693020206</li>
              <li>REA MN: 175987</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-white/20 flex flex-col items-center justify-center text-center">
          <p className="text-white/80 text-xs sm:text-[13px] font-outfit">
            Copyright © 2026 Delta Med S.p.A. Tutti i diritti sono riservati.
          </p>
        </div>

      </div>
    </footer>
  );
}
