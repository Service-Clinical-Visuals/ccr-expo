"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Badge from "./Badge";
import Button from "./Button";
import Typography from "./Typography";

export default function ProductInAction() {
  return (
    <section id="videos" className="w-full bg-[#045a92] py-12 sm:py-16 xl:py-[3.75rem] 2k:py-24 4k:py-32">
      <div className="custom-container flex flex-col split:flex-row split:items-center">
        {/* Video */}
        <div
          className="relative order-2 split:order-1 mt-6 split:mt-0 w-full split:w-[60%] 2xl:w-[66%] shrink-0 aspect-video split:aspect-auto split:self-stretch 2xl:aspect-video 2xl:self-auto rounded-md 2k:rounded-xl 4k:rounded-2xl overflow-hidden bg-white shadow-xl"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text card */}
        <div
          className="order-1 split:order-2 w-full split:flex-1 split:my-8 2xl:my-0 bg-white rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] split:rounded-l-none px-6 sm:px-7 2k:px-10 4k:px-14 py-7 xl:py-8 2k:py-10 4k:py-14 flex flex-col items-start gap-3 xl:gap-4 2k:gap-5 4k:gap-6"
          data-aos="fade-left"
        >
          <Badge text="Product in Action" />
          <Typography variant="h2" color="none" className="text-[var(--color-heading)]">
            Experience the Smoke Evacuator
          </Typography>
          <Typography variant="p" color="muted">
            The Bovie ZSE01 Smoke Evacuator is designed to support surgical smoke evacuation during
            High-Resolution Anoscopy (HRA) procedures. Its high-flow, high-efficiency design helps
            manage surgical smoke, supporting a cleaner and more controlled surgical environment.
          </Typography>
          <Typography variant="p" color="muted">
            Featuring a 35-hour filter and 100–120V power configuration, this unit provides an
            efficient solution for surgical smoke management during HRA procedures. Its high-flow
            design and advanced filtration support consistent smoke evacuation in clinical
            settings.
          </Typography>
          <div className="mt-2 2k:mt-3 4k:mt-4">
            <Button text="Explore More" />
          </div>
        </div>
      </div>
    </section>
  );
}
