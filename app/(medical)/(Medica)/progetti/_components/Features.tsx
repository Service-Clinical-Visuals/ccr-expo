"use client";

import React from "react";
import Typography from "./Typography";

const Features = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center mb-16 min-[3800px]:mb-32" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 min-[3800px]:gap-8 mb-4 w-full">
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
            <Typography variant="h2" color="dark" className="whitespace-nowrap">
              Essential features
            </Typography>
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-6 min-[3800px]:gap-y-24 items-start relative max-w-[90%] mx-auto ">

          {[
            {
              image: "/medical/progetti/feature1.png",
              text: "Automatically detects a wide range of arrhythmias and recognizes shockable ones, acting quickly and safely."
            },
            {
              image: "/medical/progetti/feature2.png",
              text: "The AED must be intuitive and the commands issued must be clear to best support the rescuer."
            },
            {
              image: "/medical/progetti/feature3.png",
              text: "The AED must be provided with all the certifications and requirements required for electro-medical devices."
            },
            {
              image: "/medical/progetti/feature4.png",
              text: "The company must guarantee the product also in the following years with maintenance plans and software updates."
            },
          ].map((feature, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center px-4 md:px-8 min-[3800px]:px-16 ${idx !== 3 ? 'xl:border-r border-dashed border-gray-400' : ''}`} data-aos="fade-up" data-aos-delay={100 * idx}>
              <div className="h-25 min-[3800px]:h-40 mb-6 min-[3800px]:mb-12 flex items-center justify-center">
                <img src={feature.image} alt="Feature Icon" className="h-full w-auto object-contain" />
              </div>
              <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-2xl leading-relaxed">
                {feature.text}
              </Typography>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;
