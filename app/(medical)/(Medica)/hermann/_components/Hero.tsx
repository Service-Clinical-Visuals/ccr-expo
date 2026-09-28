"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-[640px] pt-[92px] sm:pt-[102px] lg:pt-[112px] min-[2000px]:pt-[140px] min-[2500px]:pt-[180px] min-[3800px]:pt-[265px] pb-4 sm:pb-6 min-[2000px]:pb-8 min-[3800px]:pb-12 flex flex-col justify-center"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Rounded Hero Card */}
        <div
          className="relative w-full flex-1 rounded-[20px] min-[3800px]:rounded-[40px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-[3800px]:p-24"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-black/10">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Bottom-Left Content */}
          <div
            className="relative z-20 w-full max-w-[90%] xl:max-w-[80%] space-y-4 sm:space-y-6 md:space-y-7 min-[3800px]:space-y-12 pointer-events-auto"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-tight drop-shadow-md capitalize !font-semibold text-white max-w-full xl:max-w-[80%]"
            >
              Solutions For Modern Medical Applications
            </Typography>

            <div>
              <Button
                text="Explore Products"
                variant="primary"
                href="#products"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
