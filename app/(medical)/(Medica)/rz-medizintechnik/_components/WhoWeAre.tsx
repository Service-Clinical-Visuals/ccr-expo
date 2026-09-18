"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Building2, Settings } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="w-full bg-white whoweare-section overflow-hidden"
    >
      <div className="custom-container">
        {/* Exactly 50% Text and 50% Images on Desktop / Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 whoweare-grid items-center w-full">
          {/* Left Column: Text & Features (Half 1: 50%) */}
          <div
            className="w-full flex flex-col items-start text-left whoweare-text-col"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Section Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="font-semibold leading-tight tracking-tight"
            >
              Who Are We?
            </Typography>

            {/* Main Company Introduction */}
            <Typography
              variant="p"
              color="secondary"
              className="leading-relaxed"
            >
              RZ Medizintechnik is a family-owned medical technology company
              based in Tuttlingen, Germany, founded in 1995 by Rainer Zubrod.
              With decades of experience in surgical technology, the company
              develops and supplies high-quality surgical instruments, endoscopy
              systems, visualization solutions, and medical devices for various
              surgical specialties. Combining innovation, precision, and
              practical expertise, RZ Medizintechnik works closely with
              healthcare professionals to provide reliable solutions that support
              modern surgical procedures. The company places strong emphasis on
              quality, regional roots, sustainability, and family-oriented
              values, while continuing to expand its international presence and
              contribute to the advancement of surgical technology.
            </Typography>

            {/* Feature 1: Medical Expertise */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5">
                <Building2
                  className="whoweare-feature-icon"
                  strokeWidth={2}
                />
                <Typography variant="h4" color="primary" className="font-medium">
                  Medical Expertise
                </Typography>
              </div>
              <Typography variant="p" color="secondary" className="leading-relaxed">
                With decades of experience in medical technology, RZ
                Medizintechnik combines extensive surgical knowledge with
                practical expertise to develop instruments, systems, and
                solutions that meet the evolving needs of modern healthcare.
              </Typography>
            </div>

            {/* Feature 2: Precision & Quality */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5">
                <Settings
                  className="whoweare-feature-icon"
                  strokeWidth={2}
                />
                <Typography variant="h4" color="primary" className="font-medium">
                  Precision &amp; Quality
                </Typography>
              </div>
              <Typography variant="p" color="secondary" className="leading-relaxed">
                With decades of experience in medical technology, RZ
                Medizintechnik combines extensive surgical knowledge with
                practical expertise to develop instruments, systems, and
                solutions that meet the evolving needs of modern healthcare.
              </Typography>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button variant="primary" href="#products">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column: Image Grid (Half 2: 50% - 1 large on top, 2 side-by-side below) */}
          <div
            className="w-full flex flex-col whoweare-img-col"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Top Large Facility Image */}
            <div className="w-full whoweare-img-wrapper shadow-md border border-gray-100 bg-[#E5E7EB]">
              <img
                src="/medical/rz-medizintechnik/about1.png"
                alt="RZ Medizintechnik facility"
                className="whoweare-img-top hover:scale-[1.02]"
              />
            </div>

            {/* Bottom 2 Images Side-by-Side */}
            <div className="grid grid-cols-2 whoweare-img-bottom-grid w-full">
              <div className="w-full whoweare-img-wrapper shadow-md border border-gray-100 bg-[#E5E7EB]">
                <img
                  src="/medical/rz-medizintechnik/about2.png"
                  alt="RZ Medizintechnik company team"
                  className="whoweare-img-bottom hover:scale-[1.03]"
                />
              </div>

              <div className="w-full whoweare-img-wrapper shadow-md border border-gray-100 bg-[#E5E7EB]">
                <img
                  src="/medical/rz-medizintechnik/about3.png"
                  alt="RZ Medizintechnik booth team"
                  className="whoweare-img-bottom hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
