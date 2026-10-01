"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "Standard Polypropylene",
    text: "Made from knitted polypropylene monofilament for dependable surgical use.",
  },
  {
    title: "Versatile Application",
    text: "Suitable for ventral and inguinal hernia treatments through open or laparoscopic surgery.",
  },
];

const Reliable = () => {
  return (
    <section id="reliable" className="w-full bg-primary overflow-hidden py-16 lg:py-20 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-11 gap-10 lg:gap-8 xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24 items-center">
          {/* Video */}
          <div
            className="xl:col-span-7 relative w-full aspect-video overflow-hidden rounded-xl md:rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-[40px] "
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="xl:col-span-4 flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10" data-aos="fade-left" data-aos-delay="150">
            <Typography variant="h1" color="white">
              Reliable Abdominal Wall Support
            </Typography>

            <hr className="border-0 h-px bg-white/20" />

            <Typography variant="p" color="none" className="text-white leading-relaxed">
              Swing-Mesh® is a standard knitted polypropylene monofilament prosthesis designed for abdominal wall reinforcement in ventral and inguinal hernia treatments.
            </Typography>

            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 text-white leading-relaxed">
                  <FaCheckCircle className="shrink-0 text-white w-[1.2em] h-[1.2em] mt-[0.1em]" />
                  <span>
                    {item.title} – {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <hr className="border-0 h-px bg-white/20" />

            <Typography variant="p" color="none" className="text-white leading-relaxed">
              Its porous, semi-rigid structure is developed to support tissue ingrowth while providing an optimal fit for open and laparoscopic procedures.
            </Typography>

            <div className="mt-2 min-[2500px]:mt-4">
              <Button text="Explore Swing-Mesh®" href="#explore360" variant="secondary" showIcon={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reliable;
