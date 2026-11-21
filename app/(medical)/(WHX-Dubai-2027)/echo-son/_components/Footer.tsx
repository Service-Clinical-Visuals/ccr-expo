"use client";

import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const corporateLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#solutions" },
  { name: "Our News", href: "#news" },
  { name: "Certificates", href: "#" },
];

const productLinks = [
  { name: "Albit Ultrasound Scanner", href: "#products" },
  { name: "Pirop Ophthalmic Scanner", href: "#products" },
  { name: "Pinit Bladder Scanner", href: "#products" },
];

const linkClass = "footer-body text-[#2A2A2A] hover:text-primary transition-colors";
const iconClass =
  "shrink-0 text-primary w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9";

/**
 * Footer: pale-aqua panel with rounded top corners and a teal → dark-teal gradient rim on
 * top, a teal line at the bottom. Logo + intro, Corporate, Products, Contact Us and a
 * newsletter column, then the copyright line.
 */
const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="relative w-full" data-aos="fade-down">
      {/* Thick gradient rim: the padding lets the gradient layer show around the rounded
          top, and the mask fades it out partway down the sides */}
      <div className="relative pt-[5px] px-[5px] min-[2500px]:pt-[8px] min-[2500px]:px-[8px] min-[3800px]:pt-[11px] min-[3800px]:px-[11px]">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-primary to-[#0B3D44] rounded-t-[40px] sm:rounded-t-[56px] xl:rounded-t-[72px] min-[1920px]:rounded-t-[84px] min-[2500px]:rounded-t-[112px] min-[3800px]:rounded-t-[150px] [mask-image:linear-gradient(to_bottom,black_0,black_90px,transparent_180px)] min-[2500px]:[mask-image:linear-gradient(to_bottom,black_0,black_140px,transparent_270px)] min-[3800px]:[mask-image:linear-gradient(to_bottom,black_0,black_190px,transparent_360px)]"
        />
        <div className="relative bg-[#ffffff] rounded-t-[35px] sm:rounded-t-[51px] xl:rounded-t-[67px] min-[1920px]:rounded-t-[79px] min-[2500px]:rounded-t-[104px] min-[3800px]:rounded-t-[139px] overflow-hidden">
          <div className="bg-[#DDFEFF70]">
            <div className="custom-container pt-12 sm:pt-14 2xl:pt-16 min-[2500px]:pt-24 min-[3800px]:pt-32">
              {/* Columns */}
              <div className="grid grid-cols-2 xl:grid-cols-[1.5fr_0.6fr_0.95fr_0.95fr_1.3fr] gap-x-8 gap-y-10 xl:gap-x-[2.2vw] pb-10 2xl:pb-12 min-[2500px]:pb-16 border-b border-[#CFDCDD]">
                {/* Logo + intro */}
                <div className="col-span-2 xl:col-span-1 xl:pr-[3vw]">
                  <a href="#home" aria-label="ECHOSON home" className="inline-block">
                    <img
                      src="/medical/echo-son/logo.webp"
                      alt="ECHOSON Ultrasound Scanners, since 1993"
                      width={213}
                      height={36}
                      className="block w-[200px] 2xl:w-[230px] min-[1920px]:w-[260px] min-[2500px]:w-[380px] min-[3800px]:w-[520px] h-auto"
                    />
                  </a>
                  <p className="footer-body mt-5 2xl:mt-6 min-[2500px]:mt-9 text-[#2A2A2A] max-w-[420px] xl:max-w-none">
                    Echo-Son SA Is A Polish Manufacturer Of Ultrasound Systems With Over 30 Years
                    Of Experience In Ultrasound Technology. Since 1993, We Have Been Designing And
                    Manufacturing Ultrasound Devices For Medical Diagnostics.
                  </p>
                </div>

                {/* Corporate */}
                <div>
                  <h4 className="footer-heading text-[#1A1A1A]">Corporate</h4>
                  <ul className="mt-4 2xl:mt-5 min-[2500px]:mt-8 flex flex-col gap-2.5 2xl:gap-3 min-[2500px]:gap-5">
                    {corporateLinks.map((link) => (
                      <li key={link.name} className="footer-body">
                        <a href={link.href} className={linkClass}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div>
                  <h4 className="footer-heading text-[#1A1A1A]">Products</h4>
                  <ul className="mt-4 2xl:mt-5 min-[2500px]:mt-8 flex flex-col gap-2.5 2xl:gap-3 min-[2500px]:gap-5">
                    {productLinks.map((link) => (
                      <li key={link.name} className="footer-body">
                        <a href={link.href} className={linkClass}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                    <li className="footer-body">
                      <a
                        href="#solutions"
                        className="footer-body !font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-primary transition-colors"
                      >
                        See All
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="footer-heading text-[#1A1A1A]">Contact Us</h4>
                  <ul className="mt-4 2xl:mt-5 min-[2500px]:mt-8 flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6">
                    <li className="footer-body">
                      <a href="" className={`${linkClass} flex items-center gap-3 min-[2500px]:gap-5`}>
                        <Phone aria-hidden strokeWidth={1.75} className={iconClass} />
                        +48 81 886 36 13
                      </a>
                    </li>
                    <li className="footer-body">
                      <a href="" className={`${linkClass} flex items-center gap-3 min-[2500px]:gap-5`}>
                        <Mail aria-hidden strokeWidth={1.75} className={iconClass} />
                        export@echoson.eu
                      </a>
                    </li>
                    <li className="footer-body flex items-start gap-3 min-[2500px]:gap-5 text-[#2A2A2A]">
                      <MapPin aria-hidden strokeWidth={1.75} className={`${iconClass} mt-[0.2em]`} />
                      <address className="not-italic">
                        Ul. Krańcowa 5
                        <br />
                        24-100 Puławy
                      </address>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="footer-heading text-[#1A1A1A]">Subscribe For More Information</h4>
                  <p className="footer-body mt-4 2xl:mt-5 min-[2500px]:mt-8 text-[#2A2A2A]">
                    Stay informed with the latest product launches, industry news, technical
                    updates, and innovations from <strong className="font-semibold">Echo-Son SA</strong>
                  </p>
                  <form
                    onSubmit={handleSubscribe}
                    className="mt-5 2xl:mt-6 min-[2500px]:mt-9 flex items-center gap-2 bg-white rounded-[6px] min-[2500px]:rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.12)] p-1 2xl:p-1.5 min-[2500px]:p-2.5 pl-3 2xl:pl-4 min-[2500px]:pl-6"
                  >
                    <label htmlFor="echoson-newsletter" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="echoson-newsletter"
                      type="email"
                      required
                      placeholder="Email Address...."
                      className="footer-body flex-1 min-w-0 bg-transparent outline-none text-[#1A1A1A] placeholder:text-[#2A2A2A]"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="shrink-0 flex items-center justify-center w-8 h-8 2xl:w-9 2xl:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-[5px] min-[2500px]:rounded-[8px] bg-primary text-white hover:bg-primary-hover transition-colors"
                    >
                      <ArrowRight
                        aria-hidden
                        strokeWidth={2}
                        className="w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10"
                      />
                    </button>
                  </form>
                </div>
              </div>

              {/* Copyright */}
              <p className="footer-body text-center text-[#2A2A2A] py-5 2xl:py-6 min-[2500px]:py-9 min-[3800px]:py-12">
                © Copyright by EchoSon S.A. Design and implementation RSO.pl
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
