"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const Sustainability = () => {
  const commitments = [
    {
      title: "Responsible Manufacturing",
      description:
        "TECME promotes responsible manufacturing by improving production efficiency, reducing waste, and minimizing environmental impact while maintaining quality and safety.",
    },
    {
      title: "Resource Efficiency",
      description:
        "We encourage efficient use of energy, raw materials, water, and resources, improving management and reducing waste.",
    },
    {
      title: "Product Quality & Durability",
      description:
        "We develop medical equipment focused on quality, safety, durability, and performance, supporting healthcare professionals with dependable respiratory care solutions.",
    },
    {
      title: "Continuous Innovation",
      description:
        "Through research, technological development, and process improvements, we create medical solutions that support healthcare needs and sustainable production.",
    },
  ];

  return (
    <section id="sustainability" className="w-full py-16 min-[1300px]:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        {/* Top Header (Deleo xl:max-w-[80%] pattern) */}
        <div
          className="flex flex-col items-center text-center gap-4 w-full xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <Typography variant="h2" color="dark" className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl">
              Our Sustainability
            </Typography>
            <div className="w-8 sm:w-10 min-[2500px]:w-14 min-[3800px]:w-20 h-1 sm:h-1.5 min-[2500px]:h-2.5 min-[3800px]:h-4 gradient-accent rounded-full shrink-0" />
          </div>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-base lg:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl w-full xl:max-w-[80%] mx-auto"
          >
            At TECME, we believe that innovation and sustainability go hand in hand. We are committed
            to developing reliable respiratory care technologies while promoting responsible
            manufacturing, efficient resource management, and environmentally conscious practices.
            Through continuous improvement and long-term thinking, we aim to create lasting value for
            healthcare professionals, patients, and future generations.
          </Typography>
        </div>

        {/* 60% | 40% Division on Desktop (1300px and above) */}
        <div className="flex flex-col min-[1300px]:flex-row gap-10 min-[1300px]:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24 items-center min-[1300px]:items-stretch w-full">
          {/* Left Column: 60% Width at 1300px+ (Fills and fits card completely) */}
          <div
            className="w-full min-[1300px]:w-[60%] self-stretch shrink-0 relative rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl border border-gray-100 min-h-[360px] sm:min-h-[440px] min-[1300px]:min-h-full min-[2500px]:min-h-[680px] min-[3800px]:min-h-[900px]"
            data-aos="fade-right"
          >
            <img
              src="/medical/tecme/sustain.webp"
              alt="TECME Sustainability Facility"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: 40% Width at 1300px+ */}
          <div className="w-full min-[1300px]:w-[40%] flex flex-col gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12" data-aos="fade-left">
            <Typography variant="h3" color="dark" className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl !font-semibold">
              Our Sustainability Commitments
            </Typography>

            {/* Checklist */}
            <div className="flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
              {commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <span className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#005EAC] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="muted" className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed">
                    <strong className="font-semibold text-[#2A2A2A]">{item.title}</strong> –{" "}
                    <span>{item.description}</span>
                  </Typography>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-2 min-[2500px]:pt-4 min-[3800px]:pt-6">
              <Button
                text="Our Commitment"
                href="#contact"
                variant="gradient"
                iconType="arrow-up-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
