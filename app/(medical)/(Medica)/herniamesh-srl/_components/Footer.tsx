import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/herniamesh-srl" },
  { label: "Innovation", href: "" },
  { label: "Production", href: "" },
  { label: "News", href: "" },
];

const PRODUCT_LINKS = [
  { label: "Inguinal And Abdominal Hernias", href: "" },
  { label: "Female Urinary Incontinence And Pelvic Floor Prolapse", href: "" },
];

const INFO_LINKS = [
  { label: "Patient Information", href: "" },
  { label: "Safety & Clinical Performance", href: "" },
  { label: "Privacy Policy", href: "" },
  { label: "Cookie Policy", href: "" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="card-title font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="section-text text-white hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bgimage text-white pt-12 sm:pt-14 pb-6">
      <div className="custom-container xl:px-6 2xl:px-8">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          {/* Brand */}
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <Link href="/herniamesh-srl" className="inline-block">
              <img
                src="/medical/herniamesh-srl/logo.webp"
                alt="Herniamesh Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="footer-link mt-5 text-white max-w-sm">
              Herniamesh® S.r.l. develops and provides specialised medical devices for hernia
              repair, supporting healthcare professionals with quality-focused solutions for
              surgical applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-3 xl:col-span-2 xl:col-start-5">
            <FooterColumn title="Quick Links" links={QUICK_LINKS} />
            <Link
              href=""
              className="section-link inline-block mt-3 text-white underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              See More &gt;&gt;
            </Link>
          </div>

          {/* Products */}
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <FooterColumn title="Products" links={PRODUCT_LINKS} />
          </div>

          {/* Information */}
          <div className="col-span-6 md:col-span-6 xl:col-span-2 xl:col-start-9">
            <FooterColumn title="Information" links={INFO_LINKS} />
          </div>

          {/* Contact Us */}
          <div className="col-span-6 md:col-span-6 xl:col-span-2 xl:col-start-11">
            <h4 className="footer-title font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+390119196236"
                  className="footer-link flex items-start gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+39 011 9196236</span>
                </a>
              </li>
              <li className="footer-link flex items-start gap-3 text-white/90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Via Fratelli Meliga 1/C - 10034 Chivasso (TO) - ITALIA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="w-full h-px bg-white/20 mt-10 sm:mt-12" />
        <p className="section-text text-center text-white mt-5">
          © 2026 Herniamesh® S.r.l. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
