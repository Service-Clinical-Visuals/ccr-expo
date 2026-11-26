"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

/**
 * About Section - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Header:
 *    - Left: Title "About Airblend" + descriptive lead copy.
 *    - Right: CTA Button "Learn More About Us".
 *    - Full-width divider line.
 * 2. 3-Column Asymmetric Content Grid:
 *    - Left Column (Card): Charcoal background (#707070), Swiss quality intro, 3 feature checkmarks with green badges.
 *    - Center Column (Image): Aspect-ratio matched image (about.webp), rounded-[16px].
 *    - Right Column (3 Stacked Cards): "Swiss Quality", "Global Presence", "Integrity".
 * 3. Tablet Responsive Rule:
 *    - 768px-1035px uses a dedicated tablet layout without switching prematurely to desktop.
 *    - Desktop layout strictly takes effect from 1036px onwards via `.airblend-about-grid`.
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Section Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-black/20"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="secondary"
              className="text-2xl sm:text-3xl lg:text-[30px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] font-semibold text-[#2A2A2A]"
            >
              About Airblend
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#4A4A4A]"
            >
              Airblend is a global technology company committed to improving people's lives through innovative products and advanced technological solutions.
            </Typography>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Button
              text="Learn More About Us"
              href="#about"
              variant="primary"
            />
          </div>
        </div>

        {/* 3-Column Content Layout (Desktop >= 1036px, Tablet 768px-1035px, Mobile < 768px) */}
        <div className="w-full mt-8 sm:mt-12">
          <div className="airblend-about-grid">
            {/* Left Card: Charcoal #707070 */}
            <div
              className="bg-[#707070] text-white rounded-[16px] p-6 sm:p-8 xl:p-9 border border-white/50 shadow-md flex flex-col justify-between gap-6"
              data-aos="fade-right"
            >
              <div className="space-y-4">
                <Typography
                  variant="h3"
                  color="white"
                  className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl font-semibold leading-snug"
                >
                  Innovating Technology For A Healthier And More Sustainable Future
                </Typography>
                <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-white/90">
                  Built on a strong heritage of Swiss quality, precision, and industry expertise, Airblend focuses on developing reliable, efficient, and sustainable products. With a presence in more than 30 countries and production facilities across multiple regions, we combine international expertise with local market understanding to serve diverse customer needs.
                </p>
                <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-white/90">
                  Our multicultural team works with a shared commitment to innovation, integrity, collaboration, and environmental responsibility.
                </p>
              </div>

              {/* 3 Check Items */}
              <div className="flex flex-col gap-3.5 pt-2 border-t border-white/20">
                <div className="flex items-start gap-3 2k:gap-5 4k:gap-7">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 rounded-full bg-[#7BC142] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 2k:w-6 2k:h-6 4k:w-9 4k:h-9" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm 2k:text-lg 4k:text-2xl leading-relaxed text-white">
                    <strong className="font-semibold">Global Presence:</strong> Supporting international markets through an extensive distributor network across 30+ countries.
                  </p>
                </div>

                <div className="flex items-start gap-3 2k:gap-5 4k:gap-7">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 rounded-full bg-[#7BC142] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 2k:w-6 2k:h-6 4k:w-9 4k:h-9" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm 2k:text-lg 4k:text-2xl leading-relaxed text-white">
                    <strong className="font-semibold">Integrity &amp; Collaboration:</strong> Building lasting partnerships through transparency, accountability, and shared goals.
                  </p>
                </div>

                <div className="flex items-start gap-3 2k:gap-5 4k:gap-7">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 rounded-full bg-[#7BC142] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 2k:w-6 2k:h-6 4k:w-9 4k:h-9" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm 2k:text-lg 4k:text-2xl leading-relaxed text-white">
                    <strong className="font-semibold">Sustainability:</strong> Promoting renewable energy, green technologies, and environmentally responsible practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column: Hallway Photo (about.webp) */}
            <div
              className="rounded-[16px] overflow-hidden shadow-md border border-gray-200/60 min-h-[380px] sm:min-h-[480px] lg:min-h-[620px]"
              data-aos="fade-up"
            >
              <img
                src="/medical/airblend/about.webp"
                alt="Airblend precision engineering and innovation"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Column: 3 Stacked Cards (charcoal #707070) */}
            <div
              className="flex flex-col justify-between gap-4 sm:gap-6"
              data-aos="fade-left"
            >
              {/* Card 1: Swiss Quality */}
              <div className="bg-[#707070] text-white rounded-[16px] p-6 border border-white/50 shadow-md flex-1 flex flex-col justify-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-semibold mb-2"
                >
                  Swiss Quality
                </Typography>
                <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl leading-relaxed text-white/90">
                  Our heritage of Swiss quality and attention to detail define Airblend products. Driven by innovation, expertise, and excellence.
                </p>
              </div>

              {/* Card 2: Global Presence */}
              <div className="bg-[#707070] text-white rounded-[16px] p-6 border border-white/50 shadow-md flex-1 flex flex-col justify-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-semibold mb-2"
                >
                  Global Presence
                </Typography>
                <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl leading-relaxed text-white/90">
                  Airblend has a global presence with production facilities across multiple regions and distributors in over 30 countries.
                </p>
              </div>

              {/* Card 3: Integrity */}
              <div className="bg-[#707070] text-white rounded-[16px] p-6 border border-white/50 shadow-md flex-1 flex flex-col justify-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-semibold mb-2"
                >
                  Integrity
                </Typography>
                <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl leading-relaxed text-white/90">
                  Trust, Integrity, Accountability, and People form our foundation. Airblend's Code guides responsible business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
