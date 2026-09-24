"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="banner-section" className="w-full h-screen min-h-[620px] sm:min-h-[700px] flex flex-col pt-[84px] sm:pt-[96px] md:pt-[100px] lg:pt-[104px] min-[1920px]:pt-[130px] min-[2500px]:pt-[156px] min-[3800px]:pt-[196px] pb-4 sm:pb-6 min-[2000px]:pb-8 min-[2500px]:pb-10 min-[3800px]:pb-14 overflow-hidden">
      <div id="home" className="custom-container h-full flex flex-col flex-1">

        {/* Hero Card */}
        <div
          className="relative w-full h-full flex-1 rounded-[24px] sm:rounded-[30px] min-[2000px]:rounded-[44px] min-[2500px]:rounded-[56px] min-[3800px]:rounded-[72px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-between p-6 sm:p-10 lg:p-14 min-[2000px]:p-20 min-[2500px]:p-28 min-[3800px]:p-40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0 bg-[#006B96]/20">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover lg:object-fill"
            />
          </div>

          {/* Badge */}
          <div className="relative z-20" data-aos="fade-down" data-aos-delay="200">




          </div>

          {/* Hero Content */}
          <div
            className="relative z-20 space-y-5 sm:space-y-7 min-[2000px]:space-y-10 min-[2500px]:space-y-14 min-[3800px]:space-y-20 xl:max-w-[70%] max-w-[90%]"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="font-semibold leading-tight drop-shadow-md capitalize text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] min-[2000px]:text-[64px] min-[2500px]:text-[84px] min-[3800px]:text-[120px]"
            >
              Advancing Electrosurgery With Precision
            </Typography>

            <div>
              <Button
                text="Explore Products"
                variant="primary"
                href="#solutions"
                showIcon={true}
                className="min-[2000px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl min-[2000px]:h-[68px] min-[2500px]:h-[88px] min-[3800px]:h-[120px] min-[2000px]:px-10 min-[2500px]:px-14 min-[3800px]:px-20"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
