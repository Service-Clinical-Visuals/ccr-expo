"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="custom-container mt-3 sm:mt-4">
      {/* Rounded Video Hero Box */}
      <div
        className="relative w-full h-[80vh] sm:h-[85vh] xl:h-[calc(100vh-110px)] min-h-[480px] rounded-xl overflow-hidden bg-black shadow-md"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover lg:object-fill min-[64.0625rem]:object-fill"
          />
        </div>

        {/* Banner Content (bottom-left) */}
        <div className="relative z-20 h-full grid grid-cols-12 items-end p-6 sm:p-10 xl:px-12 pb-12 sm:pb-16 xl:pb-24">
          <div className="col-span-12 sm:col-span-10 md:col-span-8 min-[64.0625rem]:col-span-6 xl:col-span-5">
            <h1
              className="banner-title font-semibold text-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              The Future Arises From Changes
              <br />
              In The Present
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
