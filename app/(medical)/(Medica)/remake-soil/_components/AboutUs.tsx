"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      title: "Sustainable Soil Recycling",
      description: "Reuse materials efficiently and responsibly for modern construction.",
    },
    {
      title: "Mobile Mixing Technology",
      description: "Precise on-site material production systems for construction.",
    },
    {
      title: "Custom Formulations",
      description: "Solutions tailored to specific project needs and requirements.",
    },
    {
      title: "Complete Project Support",
      description: "From testing to practical application and project delivery.",
    },
  ];

  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-black overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10">

        <div className="flex flex-col items-center text-center gap-4 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="!font-bold tracking-tight">
            About RMS
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200"
          >
            RMS Remake Soil GmbH combines innovative technology, practical expertise, and sustainable thinking to transform excavated soil and construction materials into valuable resources. From customized liquid soil formulations to mobile mixing technology, RMS provides efficient solutions for modern construction projects.
          </Typography>
        </div>

        <div className="w-full h-px bg-white/30 my-2 sm:my-4" data-aos="fade-in" />

        <div className="flex flex-col min-[1301px]:flex-row items-center justify-between gap-10 min-[1301px]:gap-12 2xl:gap-16 min-[3500px]:gap-20 w-full mt-2">

          <div className="w-full min-[1301px]:w-1/2 flex items-center justify-center shrink-0" data-aos="fade-right">
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] min-[1301px]:aspect-auto min-[1301px]:h-[440px] 2xl:h-[480px] min-[2500px]:h-[640px] min-[3800px]:h-[860px] rounded-[20px] overflow-hidden border border-white/15 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
              <img
                src="/medical/remake-soil/about.png"
                alt="RMS Remake Soil Operations"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 sm:gap-8 w-full min-[1301px]:w-1/2" data-aos="fade-left">
            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-gray-200"
            >
              With its expertise in liquid soil technology, mobile mixing plants, material recycling, and customized formulations, RMS provides practical solutions designed around the specific requirements of each construction project. From material testing and formulation development to on-site mixing and installation, the company supports projects throughout the entire process.
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1C1C1C] border border-white/25 rounded-[10px] p-4 sm:p-5 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-start gap-3.5 hover:border-white/40 transition-colors duration-300"
                >

                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 lg:w-9 lg:h-9 xl:w-9.5 xl:h-9.5 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-13 min-[2500px]:h-13 min-[3500px]:w-16 min-[3500px]:h-16 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#155EEF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5.5 xl:h-5.5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-9 min-[3500px]:h-9 min-[3800px]:w-10 min-[3800px]:h-10 text-white stroke-[3]"
                    />
                  </div>

                  <p className="text-white leading-relaxed">
                    <span className="font-semibold text-white">{feature.title}</span>
                    <span className="text-gray-200"> — {feature.description}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="Discover Our Expertise"
                href="#services"
                variant="primary"
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
