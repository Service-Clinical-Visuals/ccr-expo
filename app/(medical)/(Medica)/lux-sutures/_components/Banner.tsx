"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Dynamic Video Player Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>


      {/* Banner Content (bottom-left) */}
      <div className="relative z-20 h-full custom-container custom-grid items-end pb-[18vh] sm:pb-[16vh]">
        <div className="col-span-12 md:col-span-8 desk:col-span-6 xl:col-span-5">
          <h1
            className="banner-title font-semibold leading-tight text-white"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Precision in Every Suture.
            <br />
            Confidence in Every Procedure.
          </h1>

          <div
            className="mt-6 sm:mt-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="350"
          >
            <Button href="" variant="secondary">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
