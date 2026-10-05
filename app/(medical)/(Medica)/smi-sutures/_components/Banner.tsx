"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
 <section className="custom-container mt-6 ">
        {/* Rounded Video Hero Box */}
      <div
        className="relative w-full h-screen rounded-3xl overflow-hidden bg-black"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover min-[1025px]:object-fill"
          />
        </div>


        {/* Banner Content (bottom-left) */}
        <div className="relative z-20 h-full grid grid-cols-12 items-end p-6 sm:p-10 xl:p-12 pb-10 sm:pb-14 xl:pb-16">
          <div className="col-span-12 md:col-span-8 min-[1025px]:col-span-6 xl:col-span-5">
            <h1
              className="banner-title font-semibold text-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Recognized As A Global Supplier Of
             High-Quality Surgical Sutures.
            </h1>

            <div
              className="mt-5 sm:mt-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <Button href="#products" variant="primary">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
