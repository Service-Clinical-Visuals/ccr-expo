"use client";

import React from "react";
import Container from "./Container";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  {
    title: "Medical-Grade Technology",
    desc: "Built for professionals seeking high-spec, results-driven aesthetic devices.",
  },
  {
    title: "Multi-Platform Versatility",
    desc: "Offer a wide range of in-demand treatments from one compact system.",
  },
  {
    title: "User-Friendly & Intelligent",
    desc: "Smart energy delivery, adjustable settings, and intuitive interfaces for precise control.",
  },
  {
    title: "Training & Ongoing Support",
    desc: "Backed by expert training and aftercare from the trusted 3D-Aesthetics team.",
  },
  {
    title: "Designed for Results",
    desc: "Clinically backed results that drive satisfaction, loyalty, and word-of-mouth growth.",
  },
];

const QualityProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FBF1E6] via-[#FAF1E7] to-[#F8ECE0]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: Video */}
          <div className="w-full lg:w-[65%]" data-aos="fade-right">
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden relative bg-[#f0f0f0]">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-[35%]" data-aos="fade-left" data-aos-delay="150">
            <span className="text-[#C99E88]! heading tracking-wide text-sm!">
              Elite Precision - Elite Technology
            </span>

            <div className="mt-2 mb-6">
              <h2 className="heading inline-block">
                Elite MD
              </h2>
              <div className="h-[3px] w-14 bg-accent mt-3" />
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3" data-aos="fade-up" data-aos-delay={idx * 75}>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <p className="content text-[15px]! leading-[24px]!">
                    <span >{feature.title}</span> – {feature.desc}
                  </p>
                </li>
              ))}
            </ul>

            <Button text="Enquire Now" href="#contact" variant="secondary" className="navlink text-white!" />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default QualityProducts;
