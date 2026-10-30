"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  { title: "Intuitive Touchscreen Interface", text: "Simplifies ECG acquisition." },
  { title: "Portable and Compact Design", text: "Enables convenient use across clinical environments." },
  { title: "High-Quality ECG Recording", text: "Supports clear cardiac signal acquisition." },
];

export default function Interactive360() {
  return (
    <section
      id="experience-360"
      className="w-full bg-[#F1F4FE] py-12 sm:py-16 xl:py-[76px] min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content (first on mobile/tablet) */}
        <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col items-start" data-aos="fade-left">
          <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            Explore Every Angle
          </Typography>

          <Typography variant="h2" color="dark" className="mb-4 min-[2500px]:mb-7 min-[3800px]:mb-10">
            Discover TouchECG Android in 360°
          </Typography>

          <Typography variant="p" color="dark">
            Experience the TouchECG Android from every angle through an immersive 360° view. Explore its compact
            design, intuitive touchscreen interface, and advanced ECG capabilities, engineered to support efficient
            cardiac examinations and seamless clinical workflows.
          </Typography>

          <ul className="w-full flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 mt-4 min-[2500px]:mt-7 min-[3800px]:mt-10">
            {features.map(({ title, text }) => (
              <li key={title} className="grid grid-cols-[auto_1fr] items-start gap-1.5 min-[2500px]:gap-3 min-[3800px]:gap-4">
                <img
                  src="/medical/cardioline/Vector.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-[18px] h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 mt-0.5 min-[2500px]:mt-1 object-contain"
                />
                <Typography variant="p" color="dark">
                  <Typography variant="span" color="dark" weight="semibold">
                    {title} –
                  </Typography>{" "}
                  {text}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-6 min-[2500px]:mt-10 min-[3800px]:mt-14">
            <Button text="Explore Product" variant="primary" href="#products" />
          </div>
        </div>

        {/* 360° video */}
        <div
          className="order-2 xl:order-1 xl:col-span-7 relative w-full aspect-video xl:aspect-[628/345] overflow-hidden"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
