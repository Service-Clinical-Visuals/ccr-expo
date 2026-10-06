"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="w-full py-10 sm:py-14 lg:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-6 sm:gap-8">
        

        <div
          className="w-full bg-[#00425E] border border-white/25 rounded-[30px] md:rounded-[50px] p-6 sm:p-10 min-[1301px]:p-14 text-white shadow-md flex flex-col min-[1301px]:flex-row items-start min-[1301px]:items-center justify-between gap-8"
          data-aos="fade-up"
          data-aos-duration="900"
        >

          <div className="w-full min-[1301px]:max-w-[62%] flex flex-col gap-3 sm:gap-4">
            <Typography variant="h2" color="white" className="font-semibold text-2xl sm:text-3xl md:text-4xl">
              About Katsan
            </Typography>
            <Typography variant="p" color="white" className="text-white/90 text-sm sm:text-base leading-relaxed">
              Founded in 1976 for catgut manufacturing, Katsan Medical Devices is one of the leading synthetic surgical suture manufacturers in Turkey. In addition to surgical thread production, Katsan has expanded its service and product range and also produces laparoscopic surgery supplies, sports surgery, hemostats and surgical mesh.
            </Typography>
          </div>

          <div className="w-full min-[1301px]:w-[35%] flex flex-col items-start min-[1301px]:items-end justify-between gap-5 sm:gap-6 self-stretch min-[1301px]:self-auto">
            <Typography
              variant="h3"
              color="white"
              className="text-left min-[1301px]:text-right font-semibold text-lg sm:text-xl lg:text-2xl leading-snug w-full max-w-[90%] xl:max-w-[70%]"
            >
              Advancing Surgical Care Through Quality & Innovation
            </Typography>
            <div>
              <Button
                text="Learn More"
                href="#products"
                variant="white"
                iconType="arrow-up-right"
                size="compact"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col min-[1301px]:flex-row items-stretch gap-6 sm:gap-8">
          

          <div
            className="w-full min-[1301px]:w-[38%] bg-[#00425E] border border-white/25 rounded-[30px] md:rounded-[50px] p-6 sm:p-10 flex flex-col justify-center gap-7 sm:gap-9 text-white shadow-md"
            data-aos="fade-right"
            data-aos-duration="1000"
          >

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center shrink-0 p-3 sm:p-3.5">
                <img
                  src="/medical/katsan/icon1.png"
                  alt="Quality And Innovation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" color="white" className="font-semibold text-lg sm:text-xl">
                  Quality And Innovation
                </Typography>
                <Typography variant="p" color="white" className="text-white/85 text-xs sm:text-sm leading-relaxed">
                  It is committed to maintaining its leadership in the healthcare industry by maintaining high quality standards and constantly investing in innovation.
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center shrink-0 p-3 sm:p-3.5">
                <img
                  src="/medical/katsan/icon2.png"
                  alt="Global Reach"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" color="white" className="font-semibold text-lg sm:text-xl">
                  Global Reach
                </Typography>
                <Typography variant="p" color="white" className="text-white/85 text-xs sm:text-sm leading-relaxed">
                  Katsan aims to improve the quality of life of patients by offering its products widely around the world.
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center shrink-0 p-3 sm:p-3.5">
                <img
                  src="/medical/katsan/icon3.png"
                  alt="Environmental Responsibility"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h4" color="white" className="font-semibold text-lg sm:text-xl">
                  Environmental Responsibility
                </Typography>
                <Typography variant="p" color="white" className="text-white/85 text-xs sm:text-sm leading-relaxed">
                  We minimize environmental impacts and aim to protect natural resources for sustainability and social benefit.
                </Typography>
              </div>
            </div>
          </div>

          <div
            className="w-full min-[1301px]:w-[62%] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-md border border-black/5 relative min-h-[380px] sm:min-h-[460px] min-[1301px]:min-h-[550px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="/medical/katsan/about.jpg"
              alt="Katsan Medical Devices Exhibition Booth"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ objectPosition: "top" }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
