"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const complicationsList = [
  {
    title: "Inflammation",
    description:
      "May develop as a response of the surrounding tissues to the surgical mesh and can affect the normal healing process.",
  },
  {
    title: "Tissue Disturbances",
    description:
      "Mechanical or physical changes may occur in the tissues surrounding the surgical mesh.",
  },
  {
    title: "Mesh Material Disturbances",
    description:
      "Mechanical issues involving the mesh material may affect its interaction with the surrounding tissue.",
  },
];

export default function Complications() {
  return (
    <section className="w-full py-16 sm:py-20 xl:py-28 bg-[#698A7F] text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12 min-[3800px]:gap-20">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="white"
            className="uppercase !font-bold tracking-wider text-white/95"
          >
            POSSIBLE COMPLICATIONS
          </Typography>

          <Typography
            variant="h2"
            color="white"
            className="uppercase !font-bold text-white"
          >
            POTENTIAL COMPLICATIONS OF WILLOMESH®
          </Typography>
        </div>

        {/* Content Row: Video & Information */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 min-[3800px]:gap-16 w-full">
          {/* Left: Video Player */}
          <div
            className="w-full lg:w-[60%] aspect-video relative rounded-[10px] md:rounded-[14px] min-[3800px]:rounded-[24px] overflow-hidden shadow-2xl bg-black/10"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div
            className="flex flex-col gap-5 sm:gap-6 w-full lg:w-[40%]"
            data-aos="fade-left"
          >
            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-white/95"
            >
              Complications that may occur with any type of surgical mesh include, but are not limited to, inflammation, infection, mechanical disturbances of the surrounding tissue and/or mesh material, and possible adhesions when the mesh is in direct contact with the intestines. These complications may affect the surrounding tissues, the interaction between the mesh and the body, or the normal healing process. The nature and occurrence of complications can vary depending on individual patient factors and the surgical procedure.
            </Typography>

            {/* Complications List */}
            <div className="bg-white rounded-[10px] min-[3800px]:rounded-[20px] p-5 sm:p-6 min-[3800px]:p-10 shadow-sm flex flex-col gap-4 min-[3800px]:gap-7 text-[#333333]">
              {complicationsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[3800px]:gap-5">
                  <img
                    src="/medical/will-pharma/tick.png"
                    alt="Check"
                    className="w-5 min-[2500px]:w-7 min-[3800px]:w-10 h-auto object-contain shrink-0 mt-1"
                  />
                  <p className="leading-relaxed text-[#333333]">
                    <strong className="font-bold text-[#333333]">{item.title}</strong> —{" "}
                    <span className="text-[#333333]">{item.description}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="Learn More"
                href="#complications"
                variant="outline"
                showIcon={false}
                className="!px-7 !py-2.5 min-[3800px]:!py-5 min-[3800px]:!px-14 min-[3800px]:text-3xl border border-white text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
