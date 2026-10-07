import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/smi-sutures" },
      { label: "SMI", href: "" },
      { label: "Certificates", href: "" },
      { label: "Contact", href: "" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Medical", href: "" },
      { label: "Dental", href: "" },
      { label: "Ophthalmic", href: "" },
      { label: "Veterinary", href: "" },
    ],
  },
];

const QUALITY_LINKS: FooterLink[] = [
  { label: "ISO 13485", href: "" },
  { label: "EC Certificates", href: "" },
  { label: "Quality Assurance", href: "" },
  { label: "Contact Us", href: "" },
];

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="section-text text-white hover:text-white transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer
      className="pt-14 sm:pt-16 min-[1025px]:pt-15 w-full bg-[#3a5da8] bg-[url('/medical/smi-sutures/bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="custom-container px-0 sm:px-2 min-[1025px]:px-4">
        <div className="grid grid-cols-2 min-[1025px]:grid-cols-12 gap-x-6 gap-y-10 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 min-[1025px]:col-span-4">
            <Link href="/smi-sutures" className="inline-block">
              <img
                src="/medical/smi-sutures/footerlogo.webp"
                alt="SMI - www.sutures.be"
                className="h-20 sm:h-28 min-[1025px]:h-35 xl:h-40 w-auto object-contain"
              />
            </Link>
            <p className="section-text text-white mt-5 max-w-xs">
              SMI develops high-quality surgical sutures for medical, dental, ophthalmic, and veterinary
              applications.
            </p>
          </div>

          {/* Quick Links & Products */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="min-[1025px]:col-span-2">
              <h4 className="card-title font-semibold text-white mb-4">{column.title}</h4>
              <LinkList links={column.links} />
            </div>
          ))}

          {/* Contact */}
          <div className="min-[1025px]:col-span-2">
            <h4 className="card-title  font-semibold text-white mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="" className="section-text flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +32 80 227 292
                </a>
              </li>
              <li>
                <a href="" className="section-text flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@sutures.be
                </a>
              </li>
              <li className="section-text flex items-start gap-3 text-white/90">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Steinerberg 8
                  <br />
                  4780 St.Vith
                  <br />
                  Belgium
                </span>
              </li>
            </ul>
          </div>

          {/* Quality & Support */}
          <div className="min-[1025px]:col-span-2">
            <h4 className="card-title font-semibold text-white mb-4">Quality &amp; Support</h4>
            <LinkList links={QUALITY_LINKS} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/25 mt-12 min-[1025px]:mt-14 py-6 text-center">
          <p className="section-text text-white">
            © {new Date().getFullYear()} SMI. All rights reserved. Imprint. Agence web Digital Vision
          </p>
        </div>
      </div>
    </footer>
  );
}
