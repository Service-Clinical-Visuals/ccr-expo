"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const footerLinks = {
  products: [
    { name: "Digestive Surgery", href: "#" },
    { name: "Uro-Gynecological Surgery", href: "#" },
  ],
  quickLinks: [
    { name: "Company", href: "#about" },
    { name: "News", href: "#" },
    { name: "We Are Hiring", href: "#" },
    { name: "Quality", href: "#quality" },
  ],
};

const linkClass = "w-fit text-white/85 hover:text-white transition-colors";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="custom-container pt-12 md:pt-14 lg:pt-16 min-[2500px]:pt-24 min-[3800px]:pt-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-8 min-[2500px]:gap-16 items-start">
          {/* Logo (center on tablet+, top on mobile) */}
          <div
            className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 flex justify-center"
            data-aos="fade-up"
          >
            <Link href="/tht" aria-label="THT Bio-Science home">
              <img
                src="/tht/footer-logo.png"
                alt="THT Bio-Science"
                className="w-[200px] sm:w-[240px] lg:w-[293px] min-[2500px]:w-[440px] min-[3800px]:w-[600px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Products */}
          <div
            className="md:col-start-1 md:row-start-1 flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 w-full md:w-fit md:min-w-[11rem] lg:min-w-[12rem] min-[2500px]:min-w-[18rem] min-[3800px]:min-w-[24rem]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col gap-2 min-[2500px]:gap-3">
              <Typography variant="footer-heading" color="white">
                Products
              </Typography>
              <hr className="border-0 h-px bg-white/25" />
            </div>
            <div className="flex flex-col gap-2 min-[2500px]:gap-4 min-[3800px]:gap-5">
              {footerLinks.products.map((link) => (
                <Link key={link.name} href={link.href} className={linkClass}>
                  <Typography variant="footer-body" color="none">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="md:col-start-3 md:row-start-1 md:justify-self-end flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 w-full md:w-fit md:min-w-[11rem] lg:min-w-[12rem] min-[2500px]:min-w-[18rem] min-[3800px]:min-w-[24rem]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-2 min-[2500px]:gap-3">
              <Typography variant="footer-heading" color="white">
                Quick Links
              </Typography>
              <hr className="border-0 h-px bg-white/25" />
            </div>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-8 gap-y-2 min-[2500px]:gap-x-14 min-[2500px]:gap-y-4 min-[3800px]:gap-x-20 min-[3800px]:gap-y-5">
              {footerLinks.quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className={linkClass}>
                  <Typography variant="footer-body" color="none">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 lg:mt-8 min-[2500px]:mt-14 min-[3800px]:mt-20 border-t border-white/40 py-5 md:py-6 min-[2500px]:py-10 min-[3800px]:py-14 flex justify-center">
          <Typography variant="footer-body" color="none" className="text-white/85 text-center">
            © 2026 THT Bio-Science. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
