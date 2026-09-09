"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-auto h-[100vh]! lg:z-60 pointer-events-none relative overflow-hidden flex items-center bg-primary"
      data-aos="fade-in">
      <div className="absolute w-full inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      <Container className="relative z-20 w-full mt-20 md:mt-[30%] ">
        <div
          className="max-w-2xl text-left space-y-4"
          data-aos="fade-up"
          data-aos-delay="200">
          <Typography variant="h1" className="heading-white mb-6 ">
            INTRODUCING <br />
            BRAND-NEW 3D REFIRM TREATMENT
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
