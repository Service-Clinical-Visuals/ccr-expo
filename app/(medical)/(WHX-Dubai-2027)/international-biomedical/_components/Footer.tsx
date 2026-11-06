"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Tradeshow Schedule", href: "#" },
  { name: "Social Responsibility", href: "#" },
  { name: "Contact Us", href: "#contact" },
];

const products = [
  "Neonatal Transport",
  "Labor & Delivery",
  "Nicu & Nursery",
  "Neuro Nicu",
  "Developmental Care",
];

const socials = [
  { name: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { name: "Instagram", href: "#", Icon: FaInstagram },
  { name: "Facebook", href: "#", Icon: FaFacebookF },
  { name: "YouTube", href: "#", Icon: FaYoutube },
];

const iconClass =
  "shrink-0 w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 mt-[3px] min-[2500px]:mt-1";

const linkClass = "footer-body text-white/90 hover:text-white hover:underline underline-offset-4 transition-colors";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-primary text-white">
      <div className="custom-container pt-12 sm:pt-14 xl:pt-16 min-[2500px]:pt-24 min-[3800px]:pt-36">
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-x-6 gap-y-10 sm:gap-8 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20 pb-10 sm:pb-12 min-[2500px]:pb-16 min-[3800px]:pb-24">
          {/* Brand */}
          <div className="col-span-2 xl:col-span-4 flex flex-col gap-5 sm:gap-6 min-[2500px]:gap-9 min-[3800px]:gap-12" data-aos="fade-up">
            <Link href="#home" aria-label="International Biomedical Home" className="self-start">
              <img
                src="/medical/international-biomedical/logo.webp"
                alt="International Biomedical – Celebrating 50 Years of Excellence"
                className="w-[170px] sm:w-[190px] 2xl:w-[210px] min-[2500px]:w-[300px] min-[3800px]:w-[420px] h-auto object-contain"
              />
            </Link>
            <p className="footer-body text-white max-w-sm  ">
              For 50 years, we have focused on improving newborn care through innovative solutions,
              supported by a global team committed to respect, integrity, and quality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="xl:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading mb-4 sm:mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
              {quickLinks.map((l) => (
                <li key={l.name} className="footer-body">
                  <Link href={l.href} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
              <li className="footer-body">
                <Link href="#" className="footer-body font-semibold text-white underline underline-offset-4 hover:text-white/80 transition-colors">
                  See More &gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading mb-4 sm:mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">Our Products</h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
              {products.map((p) => (
                <li key={p} className="footer-body">
                  <Link href="#products" className={linkClass}>
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading mb-4 sm:mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">Contact Us</h4>
            <ul className="flex flex-col gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
              <li className="footer-body flex items-start gap-2.5 min-[2500px]:gap-4">
                <Phone className={iconClass} />
                <a href="tel:18004335615" className={linkClass}>1-800-433-5615</a>
              </li>
              <li className="footer-body flex items-start gap-2.5 min-[2500px]:gap-4">
                <Mail className={iconClass} />
                <a href="mailto:sales@int-bio.com" className={linkClass}>sales@int-bio.com</a>
              </li>
              <li className="footer-body flex items-start gap-2.5 min-[2500px]:gap-4">
                <MapPin className={iconClass} />
                <span className="footer-body text-white/90">
                  8206 Cross Park Drive
                  <br />
                  Austin, Texas 78754
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="xl:col-span-2 xl:flex xl:flex-col xl:items-end" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading mb-4 sm:mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11 sm:whitespace-nowrap">
              Social Media Links
            </h4>
            <div className="flex flex-wrap items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 2xl:w-9 2xl:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[#111111] hover:bg-secondary hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/25 py-5 sm:py-6 min-[2500px]:py-9 min-[3800px]:py-12 text-center" data-aos="fade-in" data-aos-offset="0" data-aos-delay="200">
          <p className="footer-body text-white">Copyright ©{new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
