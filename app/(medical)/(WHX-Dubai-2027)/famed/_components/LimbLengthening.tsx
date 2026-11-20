"use client";

import React from "react";
import { FiCheck } from "react-icons/fi";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  {
    title: "Precise Bone Lengthening",
    text: "Designed to support controlled lower-limb bone elongation of up to 85 mm.",
  },
  {
    title: "Durable Titanium Construction",
    text: "Uses titanium alloys and ferrite-free materials for its specialized implant design.",
  },
  {
    title: "Advanced Magneto-Mechanical Technology",
    text: "Combines magnetic power transmission with a specialized internal mechanical mechanism.",
  },
];

/**
 * Precision in Limb Lengthening: a blue band across the top, with the video and a white
 * info card sitting over its lower edge. On desktop the video stretches to the card's height.
 */
const LimbLengthening = () => {
  return (
    <section
      id="orthonail"
      className="relative w-full bg-white pt-12 xl:pt-[52px] 2xl:pt-16 min-[2500px]:pt-24 min-[3800px]:pt-32 pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      {/* Blue band behind the top of the cards */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 xl:h-[180px] 2xl:h-[220px] min-[2500px]:h-[330px] min-[3800px]:h-[460px] bg-primary bg-[url('/medical/famed/bg2.webp')] bg-cover bg-center bg-no-repeat"
      />

      <div className="custom-container relative z-10 grid grid-cols-1 xl:grid-cols-[745fr_360fr] gap-6 xl:gap-7 2xl:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20 xl:items-stretch">
        {/* Video — after the card below desktop (content first) */}
        <div
          className="order-2 xl:order-none relative w-full aspect-video  overflow-hidden rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Info card */}
        <div
          className="order-1 xl:order-none flex flex-col items-start bg-white rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_6px_18px_rgba(0,0,0,0.12)] p-5 sm:p-6 2xl:p-7 min-[2500px]:p-11 min-[3800px]:p-16"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3 className="w-full text-[#1A1A1A] pb-3 2xl:pb-4 min-[2500px]:pb-6 border-b border-[#E2E2E2]">
            Precision In Limb Lengthening
          </h3>

          <p className="text-[#4A4A4A] mt-3 2xl:mt-4 min-[2500px]:mt-6">
            OrthoNail is a patented intramedullary implant developed to support precise lower-limb
            bone lengthening through an advanced hybrid magneto-mechanical mechanism.
          </p>

          <ul className="w-full flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 mt-3 2xl:mt-4 min-[2500px]:mt-6 pb-4 2xl:pb-5 min-[2500px]:pb-7 border-b border-[#E2E2E2]">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-3 min-[2500px]:gap-5 text-[#4A4A4A]">
                <span
                  aria-hidden
                  className="shrink-0 mt-[0.2em] flex items-center justify-center rounded-full bg-[#2A3465] text-white w-[18px] h-[18px] 2xl:w-5 2xl:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11"
                >
                  <FiCheck
                    strokeWidth={3.5}
                    className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7"
                  />
                </span>
                <span>
                  {f.title} – {f.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-[#4A4A4A] mt-3 2xl:mt-4 min-[2500px]:mt-6">
            Manufactured using titanium alloys and ferrite-free materials, it uses magnetic power
            transmission to activate its internal lengthening system.
          </p>

          <Button text="View Specifications" className="mt-5 2xl:mt-6 min-[2500px]:mt-10" />
        </div>
      </div>
    </section>
  );
};

export default LimbLengthening;
