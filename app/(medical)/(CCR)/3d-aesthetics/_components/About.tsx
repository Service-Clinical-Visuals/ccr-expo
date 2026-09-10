"use client";

import React from "react";
import Container from "./Container";
import Button from "./Button";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="about-us">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <span
              className="text-[#C99E88]! heading tracking-wide text-sm!"
              data-aos="fade-right"
            >
              About Us
            </span>

            {/* Title */}
            <div className="mt-2 mb-6" data-aos="fade-right" data-aos-delay="50">
              <h2 className="heading inline-block">
                Who We Are
              </h2>
              <div className="h-[3px] w-14 bg-accent mt-3" />
            </div>

            {/* Body paragraphs */}
            <div className="space-y-5 content">
              <p data-aos="fade-up">
                3D Aesthetics, previously n as 3D-lipo Ltd, has been one of the key industry leaders across the beauty
                and aesthetics sectors for over 10 years and has produced many of the most advanced, non-surgical systems
                on the market.
              </p>

              <p data-aos="fade-up" data-aos-delay="100">
                Our award-winning treatments have become some of the most sought-after treatments in the UK and are
                renowned as a credible alternative to surgery. Loved by professionals and regularly featured across the
                press, our brand is favoured by celebrities and the national media. We offer a range of non-surgical
                devices, including machines which offer body contouring and inch loss, advanced facials, laser hair
                removal, tattoo removal and more.
              </p>
            </div>

            <div className="mt-8" data-aos="fade-up" data-aos-delay="150">
              <Button text="Know More" href="#about-us" variant="secondary" className="navlink text-white!" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="150">
            <img
              src="/moto/3d-aesthetics/about.png"
              alt="3D Aesthetics Devices"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
