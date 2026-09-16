"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const First = () => {
  return (
    <section id="first" className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/medical/surgival/bg.png"
          alt="Surgival Headquarters"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Content */}
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 max-w-4xl px-4" data-aos="fade-up">

        <Typography variant="h2" color="white" className="leading-tight">
          The First 100% Spanish Manufacturer<br />
          Of Implants And Instruments For Orthopedic Surgery
        </Typography>

        <Typography variant="p" color="white" className="leading-relaxed lg:px-10 xl:max-w-[70%]">
          With over 30 years of history at Surgival we are proud to be one of the pioneering companies in Spain in the manufacture of implants and instruments for orthopedic surgery.
        </Typography>

        <div className="pt-4">
          <Button href="#contact" variant="secondary" text="Talk Later?" />
        </div>

      </div>
    </section>
  );
};

export default First;
