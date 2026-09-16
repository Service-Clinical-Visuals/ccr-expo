"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">
          {/* Left Column: Content */}
          <div
            className="flex flex-col gap-6 w-full xl:w-1/2"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-[#F6821F]" />
              <Typography
                variant="h4"
                color="primary"
                className="!font-semibold uppercase tracking-wide"
              >
                Who We Are
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              Regenerative Medicine Manufacturing Partner
            </Typography>

            <div className="flex flex-col gap-4 text-left">
              <Typography variant="p" color="muted" className="leading-relaxed">
                STR Biotechnologies is a research-driven manufacturer specializing
                in regenerative medicine, biotechnology, and advanced medical
                devices. With modern manufacturing infrastructure, cleanroom
                facilities, engineering capabilities, and a strong focus on R&D,
                the company develops innovative solutions including PRP, PRF,
                CGF, SVF, exosome, orthobiology, and cellular processing systems.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed">
                Based in Türkiye, STR serves healthcare professionals, clinics,
                distributors, and medical brands across global markets. Its
                commitment to quality, scientific innovation, patient safety,
                and sustainable manufacturing is supported by international
                standards and OEM/Private Label manufacturing capabilities.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed">
                With a strong commitment to quality, innovation, and continuous
                development, STR works closely with healthcare professionals and
                global partners to create practical solutions for evolving
                medical needs. Its flexible OEM and Private Label capabilities
                further enable partners to access customized biotechnology and
                regenerative medicine products designed to meet diverse market
                requirements.
              </Typography>
            </div>

            <div className="pt-2">
              <Button variant="outline-orange" href="#products">
                Know More
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div
            className="w-full xl:w-1/2 relative mt-8 xl:mt-0"
            data-aos="fade-left"
          >
            <div className="relative w-full aspect-[792/544] rounded-[10px] overflow-hidden shadow-md bg-gray-50">
              <img
                src="/medical/str/about.png"
                alt="STR Biotechnologies Manufacturing Facility"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
