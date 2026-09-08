"use client";

import React from "react";
import Container from "./Container";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const QualityProducts2 = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FBF1E6] via-[#FAF1E7] to-[#F8ECE0]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="w-full lg:w-[35%]" data-aos="fade-right">
            <span className="text-[#C99E88]! heading tracking-wide text-sm!">
              Quality Assurance
            </span>

            <div className="mt-2 mb-6">
              <h2 className="heading inline-block">
                Investing Wisely
              </h2>
              <div className="h-[3px] w-14 bg-accent mt-3" />
            </div>

            <div className="space-y-4 mb-8">
              <p className="content text-[15px]! leading-[24px]!">
                When considering an investment in capital equipment for your clinic, you should only purchase from
                reputable companies who are committed to supporting their customers. Those investing in
                technology-based devices should be familiar with the new Medical Device Regulations, and ensure that
                their chosen supplier or distributor is compliant with the new regulations.
              </p>
              <p className="content text-[15px]! leading-[24px]!">
                When purchasing machines, consider what extra services manufacturers can provide, including
                marketing support, and access to resources like business development managers, full technical
                support, and training. Non-surgical face &amp; body systems are high-tech devices that will require
                ongoing maintenance, so it is important to also consider the quality of the manufacturer guarantees
                and service contracts that are offered, in addition to any ongoing costs.
              </p>
            </div>

            <Button text="Know More" href="#about-us" variant="secondary" className="navlink text-white!" />
          </div>

          {/* Right: Video */}
          <div className="w-full lg:w-[65%]" data-aos="fade-left" data-aos-delay="150">
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden relative bg-[#f0f0f0]">
              <DynamicVideoPlayer type="short-2" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default QualityProducts2;
