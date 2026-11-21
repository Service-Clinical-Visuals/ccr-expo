"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  {
    title: "Versatile Measurement Tools",
    text: "Supports obstetric, urological, vascular, cardiac, and other specialized measurements.",
  },
  {
    title: "Flexible Probe Compatibility",
    text: "Offers linear, convex, and specialized anorectal probes for different examination requirements.",
  },
];

/**
 * ALBIT Applications: on desktop a teal panel runs from the left edge of the page to just
 * past the middle (rounded right corners) holding the copy, and the video card sits on the
 * right, overlapping the panel's edge. Below desktop the panel spans the full width and
 * the video follows the text inside it.
 */
const AlbitApplications = () => {
  return (
    <section
      id="albit-applications"
      className="relative w-full pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      <div className="relative py-10 sm:py-12 xl:py-[3.2vw]">
        {/* Teal panel */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full xl:w-[57.6vw] bg-primary xl:rounded-r-[12px] min-[2500px]:rounded-r-[20px] min-[3800px]:rounded-r-[28px]"
        />

        <div className="relative custom-container grid grid-cols-1 xl:grid-cols-[31.5%_65.5%] xl:justify-between items-center gap-10 sm:gap-12 xl:gap-0">
          {/* Copy */}
          <div className="text-white" data-aos="fade-right">
            <h2 className="pb-4 2xl:pb-5 min-[2500px]:pb-8 border-b border-white/25">
              ALBIT For Advanced Medical Imaging Applications
            </h2>

            <p className="mt-4 2xl:mt-5 min-[2500px]:mt-8 text-white/90">
              The Echo-Son ALBIT is a versatile ultrasound system designed to support general and
              specialized diagnostic examinations across a wide range of medical fields.
            </p>

            <ul className="mt-4 2xl:mt-5 min-[2500px]:mt-8 pb-5 2xl:pb-6 min-[2500px]:pb-9 border-b border-white/25 flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[2500px]:gap-5 text-white/90">
                  <FaCircleCheck
                    aria-hidden
                    className="shrink-0 mt-[0.2em] w-[1.1em] h-[1.1em] text-white"
                  />
                  <span>
                    {item.title} – {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 2xl:mt-6 min-[2500px]:mt-9 text-white/90">
              Suitable for both stationary and portable applications, it supports examinations in
              gynecology, obstetrics, abdominal imaging, urology, vascular assessment, breast and
              thyroid imaging, orthopedics, and other clinical specialties.
            </p>

            <div className="mt-6 2xl:mt-8 min-[2500px]:mt-12">
              <Button text="View Technical Specifications" href="#" variant="white" />
            </div>
          </div>

          {/* Video card */}
          <div
            className="relative w-full aspect-video xl:aspect-[627/356] overflow-hidden bg-[#F2F2F2] rounded-[16px] 2xl:rounded-[20px] min-[2500px]:rounded-[30px] min-[3800px]:rounded-[42px] shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbitApplications;
