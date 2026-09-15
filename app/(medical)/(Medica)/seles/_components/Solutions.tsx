"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solutions() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-32 min-[3000px]:py-40 bg-[#0A0A0A]">
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">

        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
          <div data-aos="fade-up">
            <h2 className="mb-4 min-[2000px]:mb-8 min-[3000px]:mb-12 capitalize text-center text-white text-[24px] sm:text-[32px] min-[2000px]:text-[44px] min-[3000px]:text-[56px] font-orbitron font-semibold">
              Advanced Fixation & Stability
            </h2>
          </div>

          <p
            className="text-[16px] sm:text-[18px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-[160%] text-[#D1D1D1] max-w-7xl min-[2000px]:max-w-[80%] min-[3000px]:max-w-[70%] mx-auto px-2 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The Proximal Femur Nail - Long is designed to provide reliable internal fixation for proximal femoral fractures, delivering precise alignment, enhanced stability, and effective fracture support while promoting controlled healing and dependable clinical performance.
          </p>

          {/* Divider Line */}
          <div
            className="w-full max-full mx-auto h-px bg-white/20 mt-8 sm:mt-10"
            data-aos="fade-up"
            data-aos-delay="150"
          />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Video */}
          <div
            className="lg:col-span-9 w-full bg-white/5 rounded-[20px] sm:rounded-[30px] overflow-hidden flex items-center justify-center relative aspect-[16/10]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div
            className="lg:col-span-3 w-full flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="mb-6 min-[2000px]:mb-8 min-[3000px]:mb-10 text-white text-[20px] sm:text-[22px] min-[2000px]:text-[32px] min-[3000px]:text-[40px] font-semibold leading-tight capitalize">
              Built For Precision, Durability, And Performance.
            </h3>

            <div className="w-full h-px bg-white/20 mb-6 min-[2000px]:mb-8 min-[3000px]:mb-10" />

            <p className="mb-8 min-[2000px]:mb-10 min-[3000px]:mb-12 text-[#D1D1D1] text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-relaxed">
              Designed to provide secure internal fixation for proximal femoral fractures, supporting accurate alignment and controlled fracture healing.
            </p>

            <div className="flex flex-col gap-6 min-[2000px]:gap-8 min-[3000px]:gap-10 mb-8 min-[2000px]:mb-10 min-[3000px]:mb-12">
              {/* Bullet 1 */}
              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-6 h-6 min-[2000px]:w-8 min-[2000px]:h-8 min-[3000px]:w-10 min-[3000px]:h-10 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0 mt-1 min-[2000px]:mt-2">
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                    <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white font-semibold">Enhanced Stability</strong> – Helps maintain fracture alignment and provides dependable structural support during healing.
                </p>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-6 h-6 min-[2000px]:w-8 min-[2000px]:h-8 min-[3000px]:w-10 min-[3000px]:h-10 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0 mt-1 min-[2000px]:mt-2">
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                    <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[17px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white font-semibold">Precision Fixation</strong> – Engineered for accurate positioning, secure fixation, and effective fracture management.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/20 mb-6 min-[2000px]:mb-8 min-[3000px]:mb-10" />

            <p className="mb-8 min-[2000px]:mb-10 min-[3000px]:mb-12 text-[#D1D1D1] text-[16px] sm:text-[18px] min-[2000px]:text-[26px] min-[3000px]:text-[32px] leading-relaxed">
              The titanium construction combines strength, durability, and lightweight performance for reliable use in modern trauma surgery.
            </p>

            <Button
              text="Explore Fixation Solutions"
              bgColor="#DBA018"
              textColor="#ffffff"
              onClick={scrollToContact}
              className="w-fit px-6 min-[2000px]:px-8 min-[3000px]:px-10 py-2.5 min-[2000px]:py-4 min-[3000px]:py-5 !text-[16px] min-[2000px]:!text-[22px] min-[3000px]:!text-[28px] font-semibold"
            />
          </div>

        </div>
      </div>
    </section>
  );
}