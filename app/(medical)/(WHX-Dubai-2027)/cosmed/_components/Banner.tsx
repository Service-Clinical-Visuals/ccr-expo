"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  const scrollToNext = () => {
    const nextSection =
      document.getElementById("about") || document.getElementById("products");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      id="banner-section"
      className="relative w-full h-[100dvh] min-h-[560px] overflow-hidden flex flex-col justify-end bg-black"
    >
      {/* Background Dynamic Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
      </div>

      {/* Banner Foreground Content Container */}
      <div className="relative z-20 w-full custom-container px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24 pb-14 sm:pb-20 xl:pb-24 pointer-events-auto">
        <div className="max-w-[95%] flex flex-col items-start gap-5 sm:gap-6">
          {/* Main Tagline Heading */}
          <h1
            className="banner-title font-semibold text-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            Innovative diagnostic solutions for
            <br className="hidden sm:inline" /> respiratory health, performance, and wellness.
          </h1>

          {/* Explore Products CTA */}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="350"
          >
            <Button href="#products" variant="white-blue">
              Explore Products
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
