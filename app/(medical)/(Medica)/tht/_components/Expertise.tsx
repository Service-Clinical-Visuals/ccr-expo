"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "Practical Innovation",
    text: "Developing medical solutions focused on practical clinical needs and everyday healthcare applications.",
  },
  {
    title: "Healthcare Professional Support",
    text: "Creating practical solutions that support medical teams in their clinical activities.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="w-full bg-[#F5F5F5] overflow-hidden py-16 lg:py-20 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container flex flex-col gap-10 lg:gap-12 min-[2500px]:gap-20 min-[3800px]:gap-24">
        {/* Heading + Text */}
        <div
          className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 items-center text-center w-full lg:max-w-[75%] xl:max-w-[65%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            Expertise That Supports Better Care
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed">
            THT Bio-Science combines medical expertise, practical innovation, and continuous quality monitoring to develop solutions that respond to the evolving needs of patients and healthcare professionals.
          </Typography>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-11 gap-10 lg:gap-6 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20 items-center">
          {/* Image */}
          <div
            className="xl:col-span-7 relative w-full aspect-[1107/676] overflow-hidden rounded-xl md:rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-[40px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            data-aos="fade-right"
          >
            <img src="/tht/section4.png" alt="THT Bio-Science cleanroom manufacturing" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="xl:col-span-4 flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10" data-aos="fade-left" data-aos-delay="150">
            <Typography variant="h2" color="dark" className="leading-snug">
              Practical Innovation Built On Safety &amp; Reliability
            </Typography>

            <hr className="border-0 h-px bg-gray-300" />

            <Typography variant="p" color="muted" className="leading-relaxed">
              THT Bio-Science develops complete ranges of innovative and practical medical solutions designed to meet the needs of patients and healthcare professionals.
            </Typography>

            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 text-[#4A4A4A] leading-relaxed">
                  <FaCheckCircle className="shrink-0 text-primary w-[1.2em] h-[1.2em] mt-[0.1em]" />
                  <span>
                    {item.title} – {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <hr className="border-0 h-px bg-gray-300" />

            <Typography variant="p" color="muted" className="leading-relaxed">
              With a strong focus on safety, reliability, and long-term performance, our approach combines practical design with continuous monitoring throughout the product lifecycle. From initial development to manufacturing and ongoing evaluation, we maintain consistent attention to quality and product performance.
            </Typography>

            <div className="mt-2 min-[2500px]:mt-4">
              <Button
                text="Explore Our Expertise"
                href="#about"
                variant="primary"
                showIcon={true}
                className="shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
