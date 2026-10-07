"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
          <div className="flex flex-col gap-4 xl:max-w-[60%]">
            <Typography variant="h2" color="dark" className="leading-tight">
              Our Vision Is Our Mission
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              State-of-the-art technology meets future-oriented ideas &ndash; a special philosophy that will inspire you. Discover unknown possibilities and a company that makes them come true.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button text="Learn More About Us" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="100">
          <img 
            src="/medical/innovations/section2.webp" 
            alt="Innovations Vision and Facilities" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
