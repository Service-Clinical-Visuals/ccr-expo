"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "./Button";

const highlights = [
  {
    title: "CE Marking Experience",
    text: "Medical devices have been CE marked since 2002, demonstrating long-standing experience with European regulatory requirements.",
  },
  {
    title: "30+ Years of Experience",
    text: "With more than three decades of expertise, Echo-Son continues to develop specialized medical ultrasound technologies backed by extensive industry knowledge.",
  },
  {
    title: "30+ Years of Experience",
    text: "With more than three decades of expertise, Echo-Son continues to develop specialized medical ultrasound technologies backed by extensive industry knowledge.",
  },
];

/**
 * About: framed booth photo with an overlapping "30 Years Of Experience" box on the left,
 * company copy + highlight list + CTA on the right. Below desktop the text comes first.
 */
const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-[44%_1fr] items-center gap-12 sm:gap-14 xl:gap-[5vw]">
        {/* Image + experience box */}
        <div
          className="order-2 xl:order-1 relative w-full max-w-[640px] xl:max-w-none mx-auto xl:mx-0 pr-[6%] xl:pr-0"
          data-aos="fade-right"
        >
          <img
            src="/medical/echo-son/abt.webp"
            alt="ECHOSON exhibition booth showing ultrasound scanners"
            width={750}
            height={717}
            className="block w-full h-auto"
          />

          <div className="absolute right-0 xl:-right-[7.5%] bottom-[0.5%] w-[38%] xl:w-[35%] aspect-[150/133] flex items-center justify-center bg-primary border-[5px] sm:border-[6px] min-[2500px]:border-[10px] min-[3800px]:border-[14px] border-white">
            <h3 className="badge-title text-white text-center">
              30 Years Of
              <br />
              Experience
            </h3>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 xl:order-2" data-aos="fade-left">
          <h2 className="text-[#1A1A1A]">About Our Company</h2>

          <p className="mt-3 2xl:mt-4 min-[2500px]:mt-6 text-[#4A4A4A]">
            Echo-Son S.A. is a Polish manufacturer of medical ultrasound systems with more than
            30 years of experience in ultrasound technology. Since 1993, we have been designing
            and manufacturing diagnostic ultrasound equipment for medical applications. We
            combine in-house engineering, long-term technical expertise and practical
            understanding of clinical applications.
          </p>

          <ul className="mt-5 2xl:mt-6 min-[2500px]:mt-9 py-5 2xl:py-6 min-[2500px]:py-9 border-y border-[#D9D9D9] flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-8">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 min-[2500px]:gap-5 text-[#4A4A4A]">
                <FaCircleCheck
                  aria-hidden
                  className="shrink-0 mt-[0.2em] w-[1.1em] h-[1.1em] text-primary"
                />
                <span>
                  {item.title} – {item.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 2xl:mt-6 min-[2500px]:mt-9 text-[#4A4A4A]">
            Echo-Son S.A. is a Polish manufacturer of medical ultrasound systems with more than
            30 years of experience in ultrasound technology. Since 1993, we have been designing
            and manufacturing diagnostic ultrasound equipment for medical applications. We
            combine in-house engineering, long-term technical expertise and practical
            understanding of clinical applications.
          </p>

          <div className="mt-6 2xl:mt-8 min-[2500px]:mt-12">
            <Button text="Learn More About Us" href="#solutions" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
