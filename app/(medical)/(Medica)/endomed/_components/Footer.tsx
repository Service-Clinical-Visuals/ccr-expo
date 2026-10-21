"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Corporate", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

const productLinks = ["Arthroscopy", "Laparoscopy", "Hysteroscopy", "Cystoscopy", "Bipolar Resector"];

const iconClass = "w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 text-white shrink-0";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full relative overflow-hidden bg-[#0F1A26] bg-[url('/medical/endomed/bg.png')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0F1A26]/85" />

      <div className="relative z-10">
        <div className="custom-container grid grid-cols-2 md:max-lg:grid-cols-4 lg:grid-cols-[395fr_188fr_188fr_310fr_240fr] gap-x-6 gap-y-10 lg:gap-0 pt-12 pb-10 2xl:pt-14 2xl:pb-12 min-[2500px]:pt-20 min-[2500px]:pb-16 min-[3800px]:pt-28 min-[3800px]:pb-24">
          {/* Brand */}
          <div className="col-span-2 md:max-lg:col-span-4 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 lg:pr-[25%]" data-aos="fade-up">
            <Link href="#home" className="inline-block">
              <img
                src="/medical/endomed/logo-white.png"
                alt="Medici by Endomed"
                className="w-[160px] md:w-[180px] 2xl:w-[205px] min-[2500px]:w-[280px] min-[3800px]:w-[400px] h-auto object-contain"
              />
            </Link>
            <Typography variant="footer-body" color="white" className="max-w-[520px] lg:max-w-none">
              Endomed S.r.l. is an Italian medical technology company specializing in endoscopic equipment and
              surgical instruments, delivering precision-focused solutions and technical support for modern
              minimally invasive procedures.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white hover:opacity-70 transition-opacity">
                    <Typography variant="footer-body" color="none">
                      {link.name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white">
              Products
            </Typography>
            <ul className="flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-8">
              {productLinks.map((name) => (
                <li key={name}>
                  <Link href="#products" className="text-white hover:opacity-70 transition-opacity">
                    <Typography variant="footer-body" color="none">
                      {name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 lg:pr-[20%]" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
              <li className="flex items-start gap-3 min-[3800px]:gap-5">
                <MapPin className={iconClass} />
                <Typography variant="footer-body" color="white">
                  ENDOMED SRL
                  <br />
                  Via Ugo La Malfa SNC
                  <br />
                  04020 SPIGNO SATURNIA (LT) | ITALY
                </Typography>
              </li>
              <li className="flex items-center gap-3 min-[3800px]:gap-5">
                <Phone className={iconClass} />
                <Link href="tel:+390771726355" className="text-white hover:opacity-70 transition-opacity">
                  <Typography variant="footer-body" color="none">
                    +39 0771 726355
                  </Typography>
                </Link>
              </li>
              <li className="flex items-center gap-3 min-[3800px]:gap-5">
                <Mail className={iconClass} />
                <Link href="mailto:info@endomedsrl.com" className="text-white hover:opacity-70 transition-opacity">
                  <Typography variant="footer-body" color="none">
                    info@endomedsrl.com
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white">
              Stay Updated
            </Typography>
            <form className="flex items-stretch gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="footer-body min-w-0 flex-1 bg-transparent text-white placeholder:text-white border border-white rounded-[6px] min-[2500px]:rounded-[10px] px-4 py-2 2xl:py-2.5 min-[2500px]:px-6 min-[2500px]:py-4 min-[3800px]:px-8 min-[3800px]:py-6 outline-none focus:border-white/70"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center shrink-0 px-4 min-[2500px]:px-6 min-[3800px]:px-8 border border-white rounded-[6px] min-[2500px]:rounded-[10px] text-white hover:bg-white hover:text-[#0F1A26] transition-colors cursor-pointer"
              >
                <Send className="w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30">
          <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left py-6 2xl:py-8 min-[2500px]:py-10 min-[3800px]:py-14">
            <Typography variant="footer-body" color="white">
              Copyright © 2023 ENDOMED SRL - P. IVA: 02922120593 | Proudly powered by NKEY
            </Typography>
            <div className="flex items-center gap-3 min-[3800px]:gap-6 text-white">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Typography variant="footer-body" color="none">
                  Privacy Policy
                </Typography>
              </Link>
              <Typography variant="footer-body" color="white">
                |
              </Typography>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Typography variant="footer-body" color="none">
                  Cookie Policy
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
