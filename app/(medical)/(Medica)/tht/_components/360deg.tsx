"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full bg-white overflow-hidden pb-16 lg:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48">
      {/* Dark Header Band */}
      <div className="w-full bg-primary pt-12 md:pt-16 lg:pt-20 min-[2500px]:pt-28 min-[3800px]:pt-36">
        <div className="custom-container">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 lg:gap-12 min-[2500px]:gap-20">
            {/* Content (Heading + Text) */}
            <div
              className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 w-full xl:max-w-[60%]"
              data-aos="fade-right"
            >
              <Typography variant="h1" color="white">
                Explore Swing-Mesh<span className="text-white/40" style={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit" }}>®</span> In 360°
              </Typography>

              <Typography variant="p" color="none" className="text-white/85 leading-relaxed">
                Take a closer look at the Swing-Mesh® hernia mesh through an interactive 360° experience. Explore its semi-rigid design, polypropylene monofilament structure, pore configuration, and key features developed for abdominal wall reinforcement.
              </Typography>
            </div>

            {/* CTA */}
            <div className="shrink-0" data-aos="fade-left">
              <Button text="View in 360°" href="#explore360-video" variant="secondary" showIcon={true} />
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-white/20 mt-8 lg:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20" />
        </div>
      </div>

      {/* Video — overlaps dark band into white area */}
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-0 h-[12%] sm:h-[10%] bg-primary" aria-hidden="true" />

        <div className="custom-container relative z-10 pt-6 md:pt-8 min-[2500px]:pt-12 min-[3800px]:pt-16">
          <div
            id="explore360-video"
            className="relative mx-auto w-full xl:w-[88%] aspect-video overflow-hidden rounded-xl md:rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-[40px] bg-[#F5F5F5] shadow-[0_10px_30px_rgba(0,0,0,0.12)] min-[2500px]:shadow-[0_20px_60px_rgba(0,0,0,0.15)] scroll-mt-24"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
