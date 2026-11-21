"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";

/**
 * About Section - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Two-Column Layout:
 *    - Left: Medical display device graphic (`about.webp`) with clean scaling.
 *    - Right: Company history, vision, interactive tab switcher, and CTA.
 * 2. 70% Max-Width Strategy:
 *    - Applied specifically to the headings and subheadings text (`xl:max-w-[70%]`).
 */
const About = () => {
  const [activeTab, setActiveTab] = useState<"technologies" | "social">("technologies");

  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Tablet / Mobile Layout up to 1300px: Heading -> Image -> Story Content. Above 1300px: Two-column layout */}
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-8 lg:gap-12 xl:gap-16 w-full">
          
          {/* Mobile & Tablet Heading Block (visible up to 1300px screens) */}
          <div
            className="min-[1301px]:hidden w-full flex flex-col gap-3 text-left"
            data-aos="fade-up"
          >
            {/* Tag / Eyebrow */}
            <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary">
              ABOUT EMTEL
            </p>

            {/* Section Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
            >
              Over 30 Years of Advancing Medical Technology
            </Typography>
          </div>

          {/* Left Column (Desktop) / Second Item (Mobile & Tablet): Graphic Image Frame */}
          <div
            className="w-full min-[1301px]:w-1/2 flex items-center justify-center"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-[500px] min-[1301px]:max-w-[700px] min-[2500px]:max-w-[1100px] min-[3800px]:max-w-[1500px] aspect-[819/798]">
              <img
                src="/medical/emtel/about.webp"
                alt="EMTEL Patient Monitor Device"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Right Column: Company Story & Features */}
          <div
            className="w-full min-[1301px]:w-1/2 flex flex-col gap-5 sm:gap-6"
            data-aos="fade-left"
          >
            {/* Desktop Heading Block (hidden up to 1300px, visible on desktop min-[1301px]) */}
            <div className="hidden min-[1301px]:flex flex-col gap-3">
              {/* Tag / Eyebrow: 70% max-width on xl */}
              <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%]">
                ABOUT EMTEL
              </p>

              {/* Section Heading: 70% max-width on xl */}
              <Typography
                variant="h2"
                color="dark"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] w-full max-w-full xl:max-w-[70%]"
              >
                Over 30 Years of Advancing Medical Technology
              </Typography>
            </div>

            {/* Descriptive Body Paragraphs: Full natural column width */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-[#0F2744] w-full">
              <p>
                EMTEL, established in 1992, is a leading manufacturer of patient monitors and resuscitation devices in Poland.
              </p>
              <p>
                The patient monitor FX 86, created by Waldemar Sliwa – the founder of our company and defibrillator DEFI CARD Combi II were the first products released by EMTEL.
              </p>
              <p>
                With over 30-year experience in the medical market, our company has won the trust of clinics, district’s, city’s hospitals and Ambulance Service Stations. Our medical devices are successfully utilized in Poland and other countries in Europe, Asia, South America and Australia.
              </p>
              <p>
                EMTEL products have gained recognition at the largest medical fair trades, such as Arab Health in Dubai and Medica in Dusseldorf.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="pt-2 w-full">
              <div className="flex items-center gap-6 border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("technologies")}
                  className={`pb-2.5 font-primary text-base sm:text-lg font-semibold transition-all relative ${
                    activeTab === "technologies"
                      ? "text-[#0F78AF]"
                      : "text-gray-500 hover:text-[#0F78AF]"
                  }`}
                >
                  Technologies
                  {activeTab === "technologies" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#0F78AF] rounded-t-full" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("social")}
                  className={`pb-2.5 font-primary text-base sm:text-lg font-semibold transition-all relative ${
                    activeTab === "social"
                      ? "text-[#0F78AF]"
                      : "text-gray-500 hover:text-[#0F78AF]"
                  }`}
                >
                  Social Engagement
                  {activeTab === "social" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#0F78AF] rounded-t-full" />
                  )}
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="pt-4 text-sm sm:text-base leading-relaxed text-[#0F2744] space-y-2.5 min-h-[100px] w-full">
                {activeTab === "technologies" ? (
                  <>
                    <p className="font-bold text-[#0F2744]">
                      Patient monitors: modular, compact, portable and intensive care systems that make data transmission between monitors and a central station possible.
                    </p>
                    <p className="font-bold text-[#0F2744]">
                      Clinical defibrillators with cardioversion allow for monitoring ECG, arrhythmia, arterial pressure and SpO2. The device received a positive review from the Polish Resuscitation Council.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-[#0F2744]">
                      EMTEL actively supports healthcare education, regional resuscitation initiatives, and equipment donations for emergency services and charitable medical facilities.
                    </p>
                    <p className="font-bold text-[#0F2744]">
                      We collaborate with hospitals and academic clinical centers to continuously improve life-saving technologies based on direct practitioner feedback.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore More"
                variant="primary"
                href="#products"
                className="bg-[#0F78AF] hover:bg-[#0C6492] text-white px-7 py-3 rounded-[20px] font-semibold text-sm sm:text-base"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
