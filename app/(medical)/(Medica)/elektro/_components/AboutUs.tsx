"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-white overflow-hidden text-[#252525]">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-5 border-b border-[#0000003D] gap-6" data-aos="fade-up">
          <div className="md:max-w-[60%]">
            <Typography variant="h3" color="dark" className="font-semibold mb-4">
              Global Expertise Since 1968
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Elektro-mag, founded in 1968, serves the laboratory, medical, and industrial sectors worldwide, with over 400 distributors and a strong reputation in Turkish and international markets.
            </Typography>
          </div>
          <Button
            text="Learn More"
            variant="blue"
            showIcon={true}
            icon={<ArrowRight className="w-4 h-4 text-white" />}
          />
        </div>

        {/* Middle Two Columns Grid */}
        <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center mb-10 pb-5 border-b border-[#0000003D]">

          {/* Left: Image */}
          <div className="col-span-12 lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="w-full relative">
              {/* Assuming the image exists, otherwise keeping a structured container */}
              <img src="/medical/elektro/about.png" alt="Global Expertise" className="w-auto h-auto object-contain" onError={(e) => (e.currentTarget.src = "/adamo/section2.png")} />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6" data-aos="fade-left">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Elektro-mag has built its reputation on a commitment to providing quality products and services while rapidly responding to international needs for innovative and quality products. A primary strategy is superior customer satisfaction. Elektro-mag constantly analyzes market needs in domestic market as well as around the world to develop a full range of products for healthcare, industry, education and business use.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Elektro-mag obtained ISO 9001: 2015 and ISO 13485 : 2016 international quality certificates. Additionally each of Elektro-mag's CE certified products go through constant quality control.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              With an international concentration while maintaining an innovative approach toward products and solutions for its clients, Elektro-mag welcomes you to come see what's new at Elektro-Mag!
            </Typography>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6" data-aos="fade-up">
          <Typography variant="h4" color="dark" className="font-semibold md:max-w-[40%]">
            Innovation, Quality & Global Reach
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed md:max-w-[35%] text-left md:text-right">
            With a global outlook and a focus on innovative solutions, Elektro-mag continues to build lasting relationships with customers and partners worldwide.
          </Typography>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
