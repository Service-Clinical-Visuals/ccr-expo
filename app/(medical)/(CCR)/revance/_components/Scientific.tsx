"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Scientific = () => {
  return (
    <section id="scientific" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* Left Column (Content + Small Images) */}
        <div className="flex flex-col gap-8 lg:col-span-8 order-1 lg:order-1" data-aos="fade-right">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="primary">
                Scientific Innovation Is Our Passion
              </Typography>
              <div className="w-12 h-1 bg-primary hidden md:block"></div>
            </div>
            <Typography variant="p" color="dark" className="leading-relaxed font-medium">
              Our Passion Is To Pioneer Innovative Technologies In Aesthetics, Skincare, And Therapeutics, Driven By Scientific Breakthroughs And Expert Collaboration Through Our Innovation Programs, Shaping Solutions For Evolving Patient And Provider Needs Across The Healthcare And Wellness Landscape.
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed text-sm">
              Our Innovation Combines Advanced Biomedical Research And Cutting-Edge Formulation Science To Develop Next-Generation Medical Devices And Skincare Solutions. By Bringing Together Medical, Biological, Engineering, And Chemical Expertise, We Explore New Concepts, Ingredients, And Technologies While Carefully Evaluating Their Safety, Effectiveness, Stability, And Performance. This Integrated Approach Enables Us To Create Innovative Products That Address Evolving Patient And Provider Needs And Support Better Outcomes And Enhanced Experiences Through Continuous Research, Collaboration, And Scientific Advancement.
            </Typography>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 w-full">
            <div className="w-full aspect-[534/367] overflow-hidden ">
              <img src="/revance/d1.png" alt="Scientist" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[534/367] overflow-hidden ">
              <img src="/revance/d2.png" alt="Laboratory Beakers" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

        {/* Right Column (Large Image + Button) */}
        <div className="flex flex-col gap-6 lg:col-span-4 w-full order-2 lg:order-2" data-aos="fade-left" data-aos-delay="200">
          <div className="w-[90%] xl:w-full aspect-[533/573] overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
            <img src="/revance/d3.png" alt="3D Molecule" className="w-full h-full object-cover" />
          </div>
          <div className="pt-2">
            <Button text="Discover Our Science" href="#science" variant="primary" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Scientific;
