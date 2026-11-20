"use client";

import React from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const features = [
  { title: "Remote Monitoring", text: "Allows physicians to follow treatment progress from a distance." },
  { title: "Physician Access", text: "Supports convenient review and monitoring of patient information." },
  { title: "Medical Documentation", text: "Maintains accessible patient treatment history." },
];

/**
 * Integrated Medical Solutions: blue hexagon-pattern section with a header row and round
 * arrow link, then the video beside the "Smarter Remote Patient Monitoring" panel.
 */
const IntegratedSolutions = () => {
  return (
    <section
      id="solutions"
      className="w-full bg-primary bg-[url('/medical/famed/bg1.webp')]  py-12 sm:py-14 xl:py-14 2xl:py-16 min-[2500px]:py-24 min-[3800px]:py-32"
    >
      <div className="custom-container">
        {/* Header row */}
        <div
          className="flex items-start xl:items-center justify-between gap-6 xl:gap-10 min-[2500px]:gap-16 pb-7 2xl:pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 border-b border-white/20"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 2xl:gap-3 min-[2500px]:gap-5 xl:max-w-[60%]">
            <h2 className="text-white">Integrated Medical Solutions – OrthoWheel &amp; OrthoMed</h2>
            <p className="text-white/90">
              OrthoWheel is a patented external activator designed to control the lengthening
              mechanism within the OrthoNail implant. Using a magnetic field, it activates the
              implant&apos;s internal mechanism and supports a controlled bone-lengthening process.
            </p>
          </div>

          <a
            href=""
            aria-label="View OrthoWheel and OrthoMed products"
            className="group shrink-0 flex items-center justify-center rounded-full bg-white text-[#1E2B5C] hover:bg-[#EEF6FD] transition-colors w-16 h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 min-[2500px]:w-[120px] min-[2500px]:h-[120px] min-[3800px]:w-[150px] min-[3800px]:h-[150px]"
          >
            <FiArrowUpRight
              aria-hidden
              strokeWidth={2.5}
              className="w-8 h-8 2xl:w-10 2xl:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-16 min-[3800px]:h-16 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Video + monitoring panel */}
        <div className="grid grid-cols-1 xl:grid-cols-[745fr_360fr] gap-8 xl:gap-7 2xl:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20 items-center pt-7 2xl:pt-8 min-[2500px]:pt-12 min-[3800px]:pt-16">
          {/* Video — after the text below desktop (content first) */}
          <div
            className="order-2 xl:order-none relative w-full aspect-video overflow-hidden rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Monitoring panel */}
          <div className="order-1 xl:order-none flex flex-col items-start text-white" data-aos="fade-left" data-aos-delay="100">
            <h3 className="w-full text-white pb-4 2xl:pb-5 min-[2500px]:pb-7 border-b border-white/20">
              Smarter Remote Patient Monitoring
            </h3>

            <p className="text-white/90 mt-4 2xl:mt-5 min-[2500px]:mt-7">
              OrthoMed is a digital monitoring platform developed to help physicians track patient
              treatment progress remotely. Using RFID technology, it enables regular readings of
              bone growth progress and provides convenient access to treatment records.
            </p>

            <ul className="w-full flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 mt-3 2xl:mt-4 min-[2500px]:mt-6 pb-4 2xl:pb-5 min-[2500px]:pb-7 border-b border-white/20">
              {features.map((f) => (
                <li key={f.title} className="flex items-start gap-3 min-[2500px]:gap-5 text-white/90">
                  <span
                    aria-hidden
                    className="shrink-0 mt-[0.2em] flex items-center justify-center rounded-full bg-white text-primary w-[18px] h-[18px] 2xl:w-5 2xl:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11"
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

            <p className="text-white/90 mt-4 2xl:mt-5 min-[2500px]:mt-7">
              The platform supports communication between healthcare professionals and patients
              while making medical documentation easier to manage.
            </p>

            <Button text="View Products Details" variant="white" className="mt-6 2xl:mt-7 min-[2500px]:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions;
