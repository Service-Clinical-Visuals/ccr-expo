"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-10 min-[3800px]:gap-20 w-full">

          {/* Text Content (Right side on Desktop, Top on Mobile/Tablet) */}
          <div className="flex flex-col gap-6 w-full xl:w-1/2 order-1 xl:order-2" data-aos="fade-left">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-black"></div>
              <Typography variant="h4" color="muted">
                A Work Of Excellence :
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              Deleo's Values & Commitment to Excellence
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Deleo, founded in 2010 and based in Fréjus in the south of France, specializes in the design, manufacture, and marketing of innovative aesthetic medical devices. Deleo is the European leader in cryolipolysis and High Power LED devices, with a presence in over 35 countries. For over 14 years, our brand has been present across the globe, providing concrete, safe solutions entirely designed and manufactured in France. A major player in medical aesthetics, our strong team spirit and commitment to excellence are the keys to our growth.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Deleo responds to the challenges and constant changes in aesthetic medicine. Known and recognized by healthcare and aesthetic professionals, our goal is to solidify our position as a French and European leader thanks to our strong values, innovative technologies, and personalized support.
            </Typography>

            <div className="pt-2">
              <Button text="Know More" variant="primary" href="#about" showIcon={false} />
            </div>
          </div>

          {/* Image Content (Left side on Desktop, Bottom on Mobile/Tablet) */}
          <div className="w-full xl:w-1/2 relative order-2 xl:order-1 mt-8 xl:mt-0" data-aos="fade-right">
            <div className="relative z-10 rounded-sm overflow-hidden ">
              <img src="/medical/deleo/section2.png" alt="Deleo Work of Excellence" className="w-full h-auto object-cover grayscale" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
