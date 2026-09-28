"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const setOptions = [
  { title: "Short Femoral Condyles Set", text: "Includes four plate lengths ranging from 165–215 mm to support different surgical requirements." },
  { title: "Long Femoral Condyles Set", text: "Provides four plate lengths from 255–345 mm for extended fixation requirements." },
  { title: "Right & Left Versions", text: "Available in dedicated right and left configurations for flexible surgical application." },
  { title: "Dedicated Surgical Instruments", text: "Includes the required instruments and matching components for efficient surgical use." },
];

const Platform = () => {
  return (
    <section id="versatile" className="w-full relative py-16 min-[3800px]:pb-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 min-[1281px]:grid-cols-[1fr_32%] gap-8 min-[1281px]:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-20">

          {/* Left Column: Heading + Video */}
          <div className="flex flex-col">

            {/* Heading block with grey panel behind it */}
            <div className="relative pt-12 min-[1281px]:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-10 min-[3800px]:pb-20" data-aos="fade-up">
              {/* Grey panel – bleeds to the left edge, runs under the card, overlaps the top of the video */}
              <div className="absolute top-0 -bottom-20 min-[2500px]:-bottom-28 min-[3800px]:-bottom-40 -left-[100vw] -right-[100vw] min-[1281px]:-right-[7rem] min-[2500px]:-right-[10rem] min-[3800px]:-right-[14rem] bg-[#575656] min-[1281px]:rounded-tr-[2rem] min-[3800px]:rounded-tr-[4rem] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'url("/medical/innovations/bg.png")', backgroundSize: "cover", backgroundPosition: "center" }}
                />
              </div>

              <div className="relative z-10 max-w-3xl min-[3800px]:max-w-[110rem]">
                <Typography variant="h2" color="white" className="mb-4 min-[3800px]:mb-8 leading-tight">
                  Versatile Femoral Condyle Fixation
                </Typography>
                <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                  The tifix&reg; Femoral Condyles system provides flexible plate and screw options for different surgical requirements. All plate holes are compatible with both locking and conventional screws.
                </Typography>
              </div>
            </div>

            {/* Video */}
            <div className="relative z-10 w-full aspect-video overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] min-[2500px]:rounded-tl-[3.5rem] min-[2500px]:rounded-br-[3.5rem] min-[3800px]:rounded-tl-[5rem] min-[3800px]:rounded-br-[5rem] shadow-[0_6px_20px_rgba(0,0,0,0.18)] bg-[#252525]" data-aos="fade-up" data-aos-delay="100">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div className="relative z-20 min-[1281px]:mt-9  min-[3800px]:mt-20 bg-white border border-[var(--color-primary)]/15 rounded-tl-[2.5rem] rounded-br-[2.5rem] min-[1281px]:rounded-tl-[3rem] min-[1281px]:rounded-br-[3rem] min-[2500px]:rounded-tl-[4rem] min-[2500px]:rounded-br-[4rem] min-[3800px]:rounded-tl-[5.5rem] min-[3800px]:rounded-br-[5.5rem] shadow-[0_4px_14px_rgba(0,0,0,0.1)] p-7 md:max-[1280px]:p-10 min-[1281px]:px-7 min-[1281px]:py-10 min-[2500px]:p-12 min-[3800px]:p-16 block md:max-[1280px]:grid md:max-[1280px]:grid-cols-2 md:max-[1280px]:gap-x-10 md:max-[1280px]:content-start" data-aos="fade-left" data-aos-delay="200">

            <Typography variant="h3" color="dark" weight="semibold" className="md:max-[1280px]:col-span-2 pb-4 min-[3800px]:pb-8 border-b border-gray-300">
              Complete Surgical Set Options
            </Typography>

            {/* Tablet: intro, summary & button on the left, points on the right */}
            <Typography variant="p" color="muted" className="md:max-[1280px]:col-start-1 md:max-[1280px]:row-start-2 mt-4 min-[1281px]:mt-5 min-[3800px]:mt-8 text-sm leading-relaxed">
              The tifix&reg; Femoral Condyles surgery sets provide a comprehensive selection of plates, matching screws, and dedicated instruments for different surgical requirements.
            </Typography>

            <ul className="md:max-[1280px]:col-start-2 md:max-[1280px]:row-start-2 md:max-[1280px]:row-span-3 mt-6 md:max-[1280px]:mt-4 min-[3800px]:mt-12 flex flex-col gap-4 min-[3800px]:gap-8 pb-6 md:max-[1280px]:pb-0 min-[3800px]:pb-12 border-b md:max-[1280px]:border-b-0 border-gray-300">
              {setOptions.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[3800px]:gap-6">
                  <FaCircleCheck className="mt-0.5 shrink-0 text-[var(--color-primary)] w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
                  <Typography variant="p" color="muted" className="text-sm leading-relaxed">
                    {item.title} – {item.text}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography variant="p" color="muted" className="md:max-[1280px]:col-start-1 md:max-[1280px]:row-start-3 mt-6 md:max-[1280px]:mt-4 md:max-[1280px]:pt-4 md:max-[1280px]:border-t border-gray-300 min-[3800px]:mt-12 text-sm leading-relaxed">
              The short set includes four plate lengths from 165&ndash;215 mm, while the long set ranges from 255&ndash;345 mm, with right and left versions and matching screws and instruments.
            </Typography>

            <div className="md:max-[1280px]:col-start-1 md:max-[1280px]:row-start-4 mt-8 md:max-[1280px]:mt-6 min-[3800px]:mt-16">
              <Button text="View Product Details" href="#versatile" variant="primary" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Platform;
