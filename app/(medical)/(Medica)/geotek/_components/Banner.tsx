"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full relative z-10 h-screen h-[100dvh] min-h-0 max-h-[100dvh] flex flex-col pt-[84px] sm:pt-[92px] md:pt-[100px] lg:pt-[108px] pb-3 sm:pb-4 md:pb-5 overflow-hidden"
    >
      <div className="custom-container mx-auto flex-1 min-h-0 h-full flex flex-col">
        {/* Large Rounded Hero Banner Card */}
        <div
          className="
            relative w-full flex-1 min-h-0 h-full rounded-[24px] sm:rounded-[30px] overflow-hidden
            shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
            flex flex-col justify-end
            p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20
          "
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {/* Background Video using "short-3" as instructed */}
          <div className="absolute inset-0 z-0 bg-[#0d160b]">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover aspect-video"
            />
          </div>

          {/* Banner Content (Heading & CTA) */}
          <div
            className="relative z-10 flex flex-col items-start gap-4 sm:gap-6 max-w-[747px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <h1
              className="!text-white text-white font-baloo font-semibold text-[26px] sm:text-[32px] md:text-[38px] xl:text-[40px] leading-[1.3] sm:leading-[1.4] md:leading-[1.5] capitalize drop-shadow-md"
              style={{ color: "#ffffff" }}
            >
              Advanced Wellness & Cryotherapy Devices
            </h1>

            <div className="pt-1">
              <Button
                text="Explore Products"
                variant="primary"
                onClick={scrollToProducts}
                className="h-[43px] px-5 sm:px-6 py-2.5 text-[17px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
