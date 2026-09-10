"use client";

import React from "react";
import Button from "./Button";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="custom-container">
        <div className="custom-grid-2">
          {/* Left Column: Text & CTA */}
          <div data-aos="fade-right" data-aos-duration="800">
            {/* Kicker / Subtitle */}
            <div className="flex items-center gap-2 mb-3">
              <span className="section-text font-bold text-[#24559c] tracking-normal font-inter">
                &mdash; Who We Are
              </span>
            </div>

            {/* Main Section Title */}
            <h2 className="section-title font-medium font-poppins text-slate-900 tracking-tight mb-5">
              Specialists in the dressing sector since 1895
            </h2>

            {/* Paragraph 1 */}
            <p className="section-text font-inter text-slate-600 font-normal mb-4 leading-relaxed">
              Founded in 1895 in Bologna, Farmac Zabban SpA is today a leading company in the medical devices sector with a broad portfolio of products that meet the growing demands for care, health, and well-being. The company&apos;s key customer segments&mdash;hospitals, nursing homes, pharmacies, pharmaceutical cooperatives and wholesalers, healthcare providers, and laboratories&mdash;appreciate its professionalism and high-quality product range, making it a key player in the national and European medical device market.
            </p>

            {/* Paragraph 2 */}
            <p className="section-text font-inter text-slate-600 font-normal mb-7 leading-relaxed">
              Today, it provides the healthcare industry with a widespread distribution of modern, functional products grouped into various lines: medical dressings, products for hospital wards and operating rooms, diagnostic instruments, orthopedic and healthcare items, protective devices, nutraceuticals, personal hygiene products, and health and wellness products.
            </p>

            {/* Know More Button */}
            <div>
              <Button href="#about-details">know More</Button>
            </div>
          </div>

          {/* Right Column: Building Image */}
          <div
            className="flex items-center justify-center xl:justify-end"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="relative w-full max-w-lg xl:max-w-none">
              <img
                src="/medical/farmac/abt.png"
                alt="Farmac Zabban Headquarters"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
