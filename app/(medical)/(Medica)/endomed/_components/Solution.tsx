"use client";

import Typography from "./Typography";
import SectionTag from "./SectionTag";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solution() {
  return (
    <section
      id="solutions"
      className="w-full bg-[#F9F9FA] bg-[url('/medical/endomed/bg1.png')] bg-cover bg-center bg-no-repeat py-14 md:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44"
    >
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content */}
        <div className="lg:col-span-6 flex flex-col" data-aos="fade-right">
          <SectionTag text="Laparoscopic Surgical Solutions" className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="dark" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Precision Instruments For Minimally Invasive Surgery
          </Typography>

          <Typography variant="p" color="muted" className="mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Endomed Supplies A Comprehensive Range Of Laparoscopic Instruments And Accessories Designed To
            Ensure Precision, Reliability, And Efficiency In Minimally Invasive Surgery. Our Extensive Portfolio
            Includes Trocars, Forceps, Scissors, Veress Needles, And Advanced Endoscopic Systems, Carefully
            Selected To Meet The Demands Of Modern Surgical Procedures And Support Optimal Performance In
            Diverse Clinical Settings.
          </Typography>

          <Typography variant="p" color="muted">
            Backed By Technical Expertise, Continuous Product Development, And Dependable Customer Support,
            Endomed Delivers Practical, High-Quality, And Cost-Effective Solutions For Healthcare Professionals.
            We Are Committed To Meeting The Evolving Needs Of Modern Surgical Techniques And Operating Room
            Environments Through Reliable Products, Innovative Technologies, And Efficient Service. Our Focus On
            Quality, Functionality, And Customer Satisfaction Helps Healthcare Providers Perform Procedures With
            Greater Confidence And Consistency.
          </Typography>
        </div>

        {/* 360 Video */}
        <div className="lg:col-span-6 relative w-full aspect-video overflow-hidden bg-[#EBEBEB]" data-aos="fade-left">
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
