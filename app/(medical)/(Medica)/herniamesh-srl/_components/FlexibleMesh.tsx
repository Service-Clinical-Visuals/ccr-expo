"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const FEATURES = [
  {
    title: "Monofilament Construction",
    text: "Features a defined monofilament structure developed for surgical mesh applications.",
  },
  {
    title: "Flexible Design",
    text: "Provides a flexible mesh configuration that can be adapted to different surgical requirements.",
  },
  {
    title: "Macroporous Structure",
    text: "Features a macroporous design that forms an important characteristic of the mesh.",
  },
  {
    title: "Open & Laparoscopic Use",
    text: "Suitable for different surgical approaches, including open and laparoscopic techniques.",
  },
];

export default function FlexibleMesh() {
  return (
    <section >
      <div className="custom-container xl:px-6 2xl:px-8 grid grid-cols-12 gap-y-10 gap-x-0 min-[64.0625rem]:gap-x-10 xl:gap-12 items-start">
        {/* Left: Heading + Video on blue band */}
        <div className="col-span-12 min-[64.0625rem]:col-span-8 relative isolate">
          {/* Heading (blue band bleeds to the left edge of the screen) */}
          <div className="relative pt-10 sm:pt-12 pb-8 sm:pb-10" data-aos="fade-up">
            <div
              className="absolute inset-y-0 -left-[50vw] -right-[50vw] min-[64.0625rem]:-right-20 xl:-right-30 3xl:-right-40 bg-[#0055A6] min-[64.0625rem]:rounded-tr-2xl -z-10"
              aria-hidden="true"
            />
            <h2 className="section-title font-semibold text-white">
              Flexible Mesh For Hernia Repair
            </h2>
            <p className="section-text mt-3 text-white xl:max-w-[85%]">
              Hermesh 3 is a flexible macroporous mesh made from non-absorbable polypropylene
              monofilament. Its flat design allows surgeons to adapt the prosthesis to the hernia size
              and area requiring reinforcement.
            </p>
          </div>

          {/* Video (top part sits on the blue band) */}
          <div className="relative">
            <div
              className="absolute top-0 h-[17%] -left-[50vw] -right-[50vw] min-[64.0625rem]:-right-16 xl:-right-20 bg-[#0055A6] -z-10"
              aria-hidden="true"
            />
            <div
              className="relative w-full aspect-video rounded-tl-3xl rounded-br-3xl sm:rounded-tl-[40px] sm:rounded-br-[40px] overflow-hidden bg-slate-100 "
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Technology Card */}
        <div
          className="col-span-12 min-[64.0625rem]:col-span-4 min-[64.0625rem]:mt-7 relative z-10"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="rounded-tl-3xl rounded-br-3xl bg-white border border-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.14)] p-6 sm:p-7 xl:p-8">
            <h3 className="section-title1 font-semibold ">
              Advanced Polypropylene Mesh Technology
            </h3>

            <div className="w-full h-px bg-slate-200 my-4 sm:my-5" />

            <p className="card-text ">
              Hermesh 3 is developed using non-absorbable polypropylene monofilament in a flexible
              macroporous mesh structure.
            </p>

            <ul className="mt-5 space-y-4">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0055A6] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <p className="card-text ">
                    {feature.title} – {feature.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="w-full h-px bg-slate-200 my-5 sm:my-6" />

            <p className="card-text ">
              Its design combines material characteristics and customisable geometry to provide a
              versatile solution for different hernia reinforcement procedures.
            </p>

            <div className="mt-6 sm:mt-7">
              <Button href="" variant="primary">
                Discover Hermesh 3
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
