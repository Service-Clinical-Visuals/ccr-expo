"use client";

import React from "react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const STATS = [
  { title: "20+ Years", text: "Clinical Research", color: "var(--c-blue)" },
  { title: "4th Gen", text: "Monsoon Ventilator", color: "var(--c-orange)" },
  { title: "THM Campus", text: "Giessen Technology Hub", color: "var(--c-green)" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white py-16 sm:py-20 xl:py-[5.2vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-xl:portrait:grid-cols-1 gap-10 xl:gap-[2.3vw] items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src="/medical/thora/about.webp"
              alt="Thora Tech engineers working on the Monsoon ventilator"
              className="w-full h-auto object-cover rounded-[8px]"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-delay="150">
            <Eyebrow className="mb-4 xl:mb-5">About Thora Tech</Eyebrow>
            <h2 className="section-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-8">
              Driving Medical Innovation Through Engineering Excellence
            </h2>
            <div className="section-text font-inter text-[var(--body)] space-y-4 mb-8 xl:mb-10 text-left lg:text-justify">
              <p>
                Thora Tech combines medical expertise, advanced engineering, and innovative technologies to deliver
                reliable medical solutions. We focus on quality, precision, and innovation to support healthcare
                professionals, meet evolving medical needs, and improve patient care.
              </p>
              <p>
                Specializing in innovative medical technologies for respiratory and cardiovascular healthcare
                applications, we combine research, engineering and development to deliver advanced medical device
                solutions. Through precision manufacturing and continuous technological advancement, we maintain
                high-quality standards while supporting healthcare professionals with reliable products, technical
                expertise and dedicated customer service.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 mb-8 xl:mb-10">
              {STATS.map((s, i) => (
                <div
                  key={s.title}
                  className={`sm:px-[8%] first:sm:pl-0 last:sm:pr-0 ${
                    i < STATS.length - 1 ? "sm:border-r sm:border-[#C8C8C8]" : ""
                  }`}
                >
                  <p className="stat-title font-plex font-semibold mb-2 xl:mb-3" style={{ color: s.color }}>
                    {s.title}
                  </p>
                  <p className="stat-text font-inter text-[var(--nav)]">{s.text}</p>
                </div>
              ))}
            </div>

            <Button href="#service">Discover Our Company</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
