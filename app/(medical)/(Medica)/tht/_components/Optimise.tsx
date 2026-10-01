"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "80 g/m² Weight",
    text: "Provides a defined mesh weight suitable for abdominal wall reinforcement and surgical applications.",
  },
  {
    title: "High Tensile Resistance",
    text: "Provides tensile resistance ranging from 129 to 514 N for reliable mechanical performance.",
  },
];

const Optimise = () => {
  return (
    <section id="optimise" className="w-full bg-white overflow-hidden py-16 lg:py-20 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container">
        <div className="relative py-12 md:py-16 lg:py-12 xl:py-14 min-[2500px]:py-20 min-[3800px]:py-28">
          {/* Dark block escaping container to the left edge of the viewport */}
          <div
            className="absolute top-0 bottom-0 -left-[50vw] -right-[50vw] xl:right-[42%] bg-primary xl:rounded-r-[20px] min-[2500px]:rounded-r-[32px] min-[3800px]:rounded-r-[44px] z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-11 gap-10 lg:gap-6 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20 items-center">
            {/* Content */}
            <div className="xl:col-span-4 flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10" data-aos="fade-right">
              <Typography variant="h1" color="white" className="leading-snug">
                Optimised Structure &amp; Mechanical Performance
              </Typography>

              <hr className="border-0 h-px bg-white/20" />

              <Typography variant="p" color="none" className="text-white/85 leading-relaxed">
                Swing-Mesh® combines a controlled porous structure with semi-rigid construction and multidirectional mechanical properties to support abdominal wall reinforcement.
              </Typography>

              <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                {features.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 text-white/85 leading-relaxed">
                    <FaCheckCircle className="shrink-0 text-white w-[1.2em] h-[1.2em] mt-[0.1em]" />
                    <span>
                      {item.title} – {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="border-0 h-px bg-white/20" />

              <Typography variant="p" color="none" className="text-white/85 leading-relaxed">
                With a weight of 80 g/m², thickness of 0.56 mm, and tensile resistance of 129/514 N, the mesh provides a balanced design for different hernia repair applications.
              </Typography>

              <div className="mt-2 min-[2500px]:mt-4">
                <Button text="Discover Swing-Mesh®" href="#explore360" variant="secondary" showIcon={true} />
              </div>
            </div>

            {/* Video */}
            <div
              className="xl:col-span-7 relative w-full aspect-video overflow-hidden rounded-xl md:rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-[40px] bg-secondary shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimise;
