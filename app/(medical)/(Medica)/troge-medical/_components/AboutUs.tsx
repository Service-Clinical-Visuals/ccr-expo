"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">
        {/* Top Centered Section Header */}
        <div
          className="flex flex-col items-center text-center gap-4 xl:max-w-[70%] max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="dark" className="font-bold">
            Who We Are
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-gray-600 text-center font-normal xl:max-w-[85%]"
          >
            For nearly 40 years, we have successfully expanded our product range to become a trusted global healthcare solutions provider operating in over 110 countries world-wide. Our philosophy of exclusively supplying authorized wholesalers and carefully selected regional distribution partners with affordable, high-quality products gives us a unique market position.
          </Typography>
        </div>

        {/* Bottom Layout: Image + Overlapping Content Card */}
        <div className="flex flex-col xl:flex-row items-center justify-center w-full relative pt-4">
          {/* Left: Image Container */}
          <div
            className="w-full xl:w-[58%] relative rounded-none overflow-hidden shadow-md"
            data-aos="fade-right"
          >
            <img
              src="/medical/troge-medical/about.webp"
              alt="Troge Medical Healthcare"
              className="w-full h-full object-cover aspect-[4/3] md:aspect-[16/11]"
            />
          </div>

          {/* Right: Overlapping White Card */}
          <div
            className="w-full xl:w-[48%] xl:-ml-20 mt-[-40px] xl:mt-0 relative z-10 bg-white rounded-none shadow-xl border border-gray-100 p-6 sm:p-8 xl:p-10 min-[2500px]:p-14 flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {/* Our Vision */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Typography variant="h3" color="dark" className="!font-bold">
                  Our Vision
                </Typography>
                <div className="w-8 h-1 bg-[var(--color-primary)]" />
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed text-gray-600">
                To become a trusted global healthcare solutions provider, improving access to safe, high-quality, and affordable medical devices and pharmaceuticals while promoting sustainable healthcare worldwide for healthier communities and better patient outcomes.
              </Typography>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Typography variant="h3" color="dark" className="!font-bold">
                  Our Mission
                </Typography>
                <div className="w-8 h-1 bg-[var(--color-primary)]" />
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed text-gray-600">
                To deliver reliable, certified healthcare products through strict quality standards, continuous innovation, and strong global distribution partnerships, ensuring healthcare professionals and communities receive trusted solutions at affordable prices.
              </Typography>
            </div>

            {/* Button */}
            <div className="pt-2">
              <Button
                text="Learn More About Us"
                variant="primary"
                href="#about"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

