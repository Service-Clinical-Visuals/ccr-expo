"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const blocks = [
  {
    title: "Our Mission",
    text: "At Zinnanti Surgical Design Group, our mission is to develop innovative, multifunctional surgical devices that address real clinical challenges and meet the evolving needs of healthcare professionals. By combining medical expertise, research, and advanced engineering, we aim to simplify surgical procedures, improve operational efficiency, and deliver practical, reliable solutions that support better clinical workflows.",
  },
  {
    title: "Our Vision",
    text: "Our vision is to become a trusted leader in surgical device innovation by transforming complex clinical challenges into practical and effective solutions. Through continuous research, creative thinking, and advanced product development, we strive to simplify surgical procedures, enhance healthcare professionals' capabilities, and contribute to the advancement of modern surgical care.",
  },
];

/** About page intro: centered heading + image with overlapping Mission / Vision card. */
const AboutMissionVision = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 xl:py-20 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container">
        {/* Intro */}
        <div className="max-w-5xl min-[2500px]:max-w-[110rem] min-[3800px]:max-w-[160rem] mx-auto text-center flex flex-col items-center gap-3 sm:gap-4 min-[2500px]:gap-6">
          <Typography variant="h2" color="dark" className="leading-tight" data-aos="fade-up">
            About Zinnanti Surgical Design Group
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="!font-normal leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are proud to serve a diverse range of medical specialties including High-Res
            Anoscopy (HRA), Dermatology, Gynecology, Otolaryngology, and Plastic Surgery. Our
            comprehensive offerings provide enhancements rather than hindrances to achieve
            compliance with evolving regulations.
          </Typography>
        </div>

        {/* Image + overlapping card */}
        <div className="mt-10 sm:mt-12 xl:mt-14 min-[2500px]:mt-20 min-[3800px]:mt-28 flex flex-col xl:flex-row xl:items-center">
          <div className="w-full xl:w-[57%] relative z-0 order-2 xl:order-none mt-8 xl:mt-0" data-aos="fade-right">
            <img
              src="/medical/zinnanti-surgical-2/abt1.webp"
              alt="Zinnanti Surgical engineer refining a surgical instrument"
              className="w-full h-auto object-contain"
            />
          </div>

          <div
            className="order-1 xl:order-none w-full xl:w-[48%] xl:-ml-[5%] relative z-10 bg-white shadow-[0_6px_28px_rgba(0,0,0,0.14)] p-6 sm:p-8 xl:p-10 min-[2500px]:p-16 min-[3800px]:p-24"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {blocks.map((block, i) => (
              <div
                key={block.title}
                className={
                  i > 0
                    ? "mt-6 pt-6 sm:mt-7 sm:pt-7 min-[2500px]:mt-12 min-[2500px]:pt-12 border-t border-gray-300"
                    : ""
                }
              >
                <div className="flex items-center gap-3 sm:gap-4 min-[2500px]:gap-6">
                  <Typography variant="h3" color="dark" className="!text-[1.35rem] sm:!text-[1.5rem] min-[2500px]:!text-[2.4rem] min-[3800px]:!text-[3.4rem]">
                    {block.title}
                  </Typography>
                  <span
                    aria-hidden
                    className="block w-5 sm:w-6 min-[2500px]:w-10 min-[3800px]:w-14 h-[3px] min-[2500px]:h-[5px] bg-[var(--color-secondary)]"
                  />
                </div>
                <Typography
                  variant="p"
                  color="muted"
                  className="!font-normal leading-relaxed mt-3 sm:mt-4 min-[2500px]:mt-6"
                >
                  {block.text}
                </Typography>
              </div>
            ))}

            <Button text="Learn More About Us" href="#" className="mt-6 sm:mt-7 min-[2500px]:mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
