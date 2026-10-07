"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function CranioSolutions() {
  return (
    <section id="cranio-solutions" className="w-full relative overflow-hidden bg-white">
      <div className="w-full bg-[#003F77] bg-[url('/medical/rebstock/bg.webp')] bg-cover bg-center bg-no-repeat pt-14 sm:pt-16 lg:pt-20 pb-28 sm:pb-36 lg:pb-44">
        <div className="custom-container flex flex-col gap-6 sm:gap-8">
          <div
            className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-center justify-between gap-6 sm:gap-8"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-3 w-full flex-1">
              <Typography
                variant="h2"
                color="white"
                className="!font-semibold capitalize leading-snug"
              >
                Advanced Solutions For Cranio-Maxillofacial Surgery
              </Typography>

              <Typography
                variant="p"
                color="white"
                className="leading-relaxed text-white/90 w-full"
              >
                Rebstock Facial Implants combine precision engineering and dependable performance to support surgeons in facial reconstruction. Designed around anatomical requirements and surgical workflow, the system provides reliable solutions for demanding applications.
              </Typography>
            </div>

            <div className="shrink-0 flex items-center">
              <Button
                text="Discover the Product Range"
                variant="white"
                href="#products"
                className="rounded-none shadow-[0px_3px_8px_rgba(0,0,0,0.24)] !px-6 !py-3 whitespace-nowrap"
              />
            </div>
          </div>

          <div className="w-full h-px bg-white/25 mt-2" />
        </div>
      </div>

      <div className="custom-container -mt-20 sm:-mt-28 lg:-mt-36 pb-16 sm:pb-20 lg:pb-24">
        <div
          className="w-full xl:max-w-[70%] lg:max-w-[80%] mx-auto aspect-video relative overflow-hidden rounded-none shadow-[0px_4px_24px_rgba(0,0,0,0.3)] bg-black"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
