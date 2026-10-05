"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="banner-section"
      className="w-full h-screen min-h-[580px] min-[2500px]:min-h-[900px] min-[3800px]:min-h-[1400px] pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 min-[3800px]:pb-16 bg-white overflow-hidden flex flex-col"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Hero Banner Container */}
        <div
          id="home"
          className="relative w-full h-full flex-1 rounded-[20px] sm:rounded-[24px] md:rounded-[30px] min-[3800px]:rounded-[50px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>


          {/* Banner Content */}
          <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16 min-[3800px]:p-24">
            <div className="xl:max-w-[70%] max-w-[90%] flex flex-col items-start gap-4 sm:gap-6 min-[3800px]:gap-12">
              <Typography
                variant="h1"
                color="white"
                className="leading-tight drop-shadow-md capitalize !font-semibold text-2xl sm:text-3xl md:text-[34px] min-[2500px]:text-[52px] min-[3800px]:text-[72px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Advanced Solutions For Modern Surgical Care
              </Typography>

              <div data-aos="fade-up" data-aos-delay="200">
                <Button
                  text="Explore Products"
                  href="#products"
                  variant="primary"
                  className="text-sm sm:text-base min-[3800px]:text-3xl min-[3800px]:!py-5 min-[3800px]:!px-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
