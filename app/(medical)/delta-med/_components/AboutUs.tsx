"use client";

import React from "react";
import Typography from "./Typography";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 md:gap-16">

        {/* Top Text Section */}
        <div className="flex flex-col items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            Technology With A Purpose
          </Typography>
          <div className="w-full xl:max-w-[70%] mx-auto">
            <Typography variant="p" color="muted" className="leading-relaxed">
              The Gradual process through which Numantec acquires diverse and complementary companies is intended to represent the Group&apos;s commitment and solidity with a view to the future. The individual entities operate and cooperate in order to ensure cutting-edge medical and healthcare solutions, minimizing human error and optimizing individual performance, thus making the Numantec Group the next benchmark in the medical and healthcare sector.
            </Typography>
          </div>
        </div>

        {/* Mission / Vision Card + Images */}
        <div className="flex flex-col md:flex-row items-stretch md:gap-6" data-aos="fade-up" data-aos-delay="100">

          {/* Left Card */}
          <div className="w-full md:max-w-[60%]!md:flex-1 min-w-0 bg-white border border-gray-200 rounded-3xl shadow-sm p-8 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 fill-[var(--color-primary)] shrink-0" stroke="white" strokeWidth={2} />
                <Typography variant="h4" color="dark" className="font-bold">
                  Mission
                </Typography>
              </div>
              <Typography variant="p" color="primary" className="font-semibold">
                Helping patients live their everyday lives
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed text-sm">
                Our mission is to improve patients&apos; quality of life and make everyday activities easier through high-performance devices designed around the needs of patients and end users. We focus on developing reliable, innovative, and user-centred solutions that support better healthcare experiences and greater independence.
              </Typography>
            </div>

            <div className="border-t border-gray-100" />

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 fill-[var(--color-primary)] shrink-0" stroke="white" strokeWidth={2} />
                <Typography variant="h4" color="dark" className="font-bold">
                  Vision
                </Typography>
              </div>
              <Typography variant="p" color="primary" className="font-semibold">
                Innovation and cohesion at the core of our work
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed text-sm">
                The different entities that make up Numantec specialize in unique, innovative, and cutting-edge healthcare solutions. This constant commitment enables the Group to position itself as a benchmark in the global market. We listen to healthcare professionals and develop the best solutions to reduce human error and ensure optimal performance, always keeping the end patient at the center.
              </Typography>
            </div>
          </div>

          {/* Images */}
          <div className="flex gap-4 justify-center w-full md:max-w-[40%]!">
            <img
              src="/medical/delta-med/about1.png"
              alt="Healthcare Technology"
              className="w-1/2 object-contain"
            />
            <img
              src="/medical/delta-med/about2.png"
              alt="Patient Care"
              className="w-1/2 object-contain" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
