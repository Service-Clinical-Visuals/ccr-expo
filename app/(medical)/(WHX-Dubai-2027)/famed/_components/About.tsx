"use client";

import React from "react";
import Button from "./Button";

const images = [
  {
    src: "/medical/famed/abt1.webp",
    alt: "Aerial view of the FAMED Żywiec factory with the mountains behind",
    width: 836,
    height: 551,
  },
  {
    src: "/medical/famed/abt2.webp",
    alt: "FAMED presentation to an audience in front of the company backdrop",
    width: 406,
    height: 551,
  },
  {
    src: "/medical/famed/abt3.webp",
    alt: "FAMED Medical Solutions sign above a waiting area",
    width: 406,
    height: 551,
  },
];

const imageClass =
  "block w-full h-auto rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] ";

/**
 * About: centred heading + intro, a row of three photos (one wide, two portrait),
 * then a closing paragraph with the "Learn More About Us" button.
 */
const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48"
    >
      <div className="custom-container flex flex-col gap-8 xl:gap-7 2xl:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Heading + intro */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 max-w-[880px] xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-[#1A1A1A]">About Famed Żywiec</h2>
          <p className="text-[#4A4A4A]">
            Famed Żywiec is a leading European manufacturer of high quality medical equipment. In
            over 78 years of our history, we have supplied medical facilities with thousands of
            top-quality operating tables, hospital beds, treatment chairs and other equipment.
            Famed products are used by doctors in Poland and more than 120 countries around the
            world, in the most demanding markets and in the most difficult conditions.
          </p>
        </div>

        {/* Photos — one row on desktop (heights match because widths follow each image's
            ratio); below desktop the wide photo sits on top of the two portrait ones */}
        <div className="grid grid-cols-2 xl:grid-cols-[836fr_406fr_406fr] gap-4 sm:gap-5 xl:gap-6 2xl:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={i === 0 ? "col-span-2 xl:col-span-1" : ""}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={imageClass}
              />
            </div>
          ))}
        </div>

        {/* Closing paragraph + CTA */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 xl:gap-10 min-[2500px]:gap-16"
          data-aos="fade-up"
        >
          <p className="text-[#4A4A4A] xl:max-w-[62%]">
            We have built the strength of our brand based on the experience of Żywiec businesses
            and craftsmen who have specialised in this field since the 19th century. A key
            competitive advantage of Famed Żywiec in the dynamically developing medical industry
            is our qualified staff
          </p>
          <div className="shrink-0">
            <Button text="Learn More About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
