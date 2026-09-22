"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section id="banner-section" className="custom-container mt-16 sm:mt-20 md:mt-30">
      {/* Rounded Video Hero Container matching Screenshot */}
      <div
        className="relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] min-h-[500px] overflow-hidden bg-black shadow-2xl rounded-sm"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:pb-30">

          {/* Bottom Left Content */}
          <div className="xl:max-w-[50%] flex flex-col gap-5 items-start mb-4">
            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
              <h1 className="h1 text-white mb-6 font-semibold">
                Advancing Healthcare & Industry<br />
                Since 1968
              </h1>
              <Button
                href="#products"
                text="Explore Our Products"
                variant="white"
                showIcon={true}
                icon={<ArrowRight className="w-4 h-4 text-[#112136]" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
