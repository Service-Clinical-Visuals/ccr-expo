"use client";

import React from "react";
import Badge from "./Badge";
import Button from "./Button";
import Typography from "./Typography";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 xl:py-20 2k:py-32 4k:py-44 overflow-hidden">
      <div className="custom-container xl:!max-w-[85%] flex flex-col lg:flex-row lg:items-center">
        {/* Image (overlaps the bordered card on large screens) */}
        <div
          className="relative z-10 w-full lg:w-[49%] shrink-0 rounded-xl 2k:rounded-2xl 4k:rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-auto lg:self-stretch lg:my-4 2k:my-6 4k:my-8"
          data-aos="fade-right"
        >
          <img
            src="/medical/zinnanti-surgical-1/who-we-are.webp"
            alt="Zinnanti engineer assembling a surgical device"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Bordered content card */}
        <div
          className="relative w-full lg:w-[57%] mt-6 lg:mt-0 lg:-ml-[6%] border-2 4k:border-4 border-[var(--color-primary)] rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] px-6 sm:px-8 lg:pl-[11%] lg:pr-[4%] py-8 sm:py-10 xl:py-12 2k:py-20 4k:py-28"
          data-aos="fade-left"
        >
          <div className="flex flex-col items-start gap-4 xl:gap-5 2k:gap-8 4k:gap-10">
            <Badge text="Who We Are" />
            <Typography variant="h2" color="none" className="text-[var(--color-heading)]">
              Innovating Surgical Solutions Through <br className="hidden lg:block" />
              Experience &amp; Expertise
            </Typography>
            <Typography variant="p" color="muted">
              We are proud to serve a wide range of medical specialties, including High-Res
              Anoscopy (HRA), Dermatology, Gynecology, Otolaryngology, and Plastic Surgery. Our
              innovative solutions help healthcare providers adapt to evolving regulations while
              improving surgical efficiency. Our patented Smoke-Evac Fusion technology uniquely
              enables the suction of smoke, blood, and fluid directly through the active electrode
              during surgical procedures.
            </Typography>
            <Typography variant="p" color="muted">
              Our advanced devices have been adopted by leading academic medical centers. Through
              partnerships with these centers of excellence, we continue to develop innovative
              surgical solutions that support healthcare professionals and enhance patient care. At
              Zinnanti Surgical Design Group, we are committed to advancing surgery through
              innovation, quality, and a focus on better healthcare outcomes.
            </Typography>
            <div className="mt-2 2k:mt-4 4k:mt-6">
              <Button text="Know About Us" href="/zinnanti-surgical-1/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
