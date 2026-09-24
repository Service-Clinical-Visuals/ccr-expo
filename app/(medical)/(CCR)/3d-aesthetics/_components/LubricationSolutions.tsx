"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const LubricationSolutions = () => {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-[#FBF1E6] via-[#FAF1E7] to-[#F8ECE0]"
      id="lubrication-solutions"
    >
      <Container>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span
            className="text-[#C99E88]! heading tracking-wide text-sm!"
            data-aos="fade-up"
          >
            360&deg; Experience
          </span>

          <div className="mt-2 mb-4 flex flex-col items-center" data-aos="fade-up" data-aos-delay="50">
            <Typography variant="h2" color="dark" as="h2" className="heading inline-block">
              Advanced Multi-Technology Facial
            </Typography>
            <div className="h-[3px] w-14 bg-accent mt-1.5" />
          </div>

          <Typography
            variant="body"
            data-aos="fade-up"
            data-aos-delay="100"
            className="content"
          >
            The 3D HydrO2 facial combines seven technologies to target anti-ageing, congestion, dullness, pigmentation, and hydration, supporting comprehensive treatments for different skin concerns.</Typography>
        </div>

        {/* 360 Experience Video */}
        <div data-aos="fade-up" data-aos-delay="150" className="w-full justify-center flex">
          <div className="w-[80%] bg-[#f0f0f0] aspect-[16/9] rounded flex items-center justify-center overflow-hidden relative">
            <DynamicVideoPlayer type="360" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LubricationSolutions;
