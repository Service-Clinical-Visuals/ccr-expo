"use client";

import React, { useEffect, useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { LuTelescope } from "react-icons/lu";
import Typography from "./Typography";

const highlights = [
  {
    icon: TbTargetArrow,
    title: "Our Mission",
    subtitle: "Redefining Cardiac Care",
    text: "We empower clinicians with advanced solutions that improve outcomes and streamline care, while strengthening provider-patient relationships through impactful technology for better care.",
  },
  // {
  //   icon: LuTelescope,
  //   title: "Our Vision",
  //   subtitle: "Connected Cardiac Diagnostics",
  //   text: "We aim to make precise, connected cardiac diagnostics accessible everywhere, helping healthcare providers detect, decide and act faster for every patient.",
  // },
];

export default function AboutUs() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % highlights.length), 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section id="about" className="w-full py-12 sm:py-16 xl:py-20 2xl:py-20 min-[2500px]:py-28 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-2 items-center gap-10 sm:gap-12 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Image with navy accent blocks (last on mobile/tablet) */}
        <div className="order-2 xl:order-1 w-full flex flex-col gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4" data-aos="fade-right">
          <div className="w-1/2 aspect-[270/66] bg-primary rounded-t-[8px] min-[2500px]:rounded-t-[12px] min-[3800px]:rounded-t-[16px]" />
          <div className="w-full aspect-[535/358] overflow-hidden rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px]">
            <img
              src="/medical/cardioline/section2.webp"
              alt="Clinician reviewing a digital cardiac diagnostic interface"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 ml-auto aspect-[270/66] bg-primary rounded-b-[8px] min-[2500px]:rounded-b-[12px] min-[3800px]:rounded-b-[16px]" />
        </div>

        {/* Heading + content (first on mobile/tablet) */}
        <div className="order-1 xl:order-2 flex flex-col items-start" data-aos="fade-left">
          <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            About Cardioline
          </Typography>

          <Typography variant="h2" color="dark" className="mb-4 min-[2500px]:mb-7 min-[3800px]:mb-10">
            Over 60 Years of Advancing Cardiac Care
          </Typography>

          <div className="flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography variant="p" color="dark">
              Cardioline designs and manufactures advanced cardiac diagnostic equipment and connected healthcare
              solutions. Combining decades of experience with continuous innovation, the company empowers healthcare
              professionals with reliable technology for more efficient, patient-focused cardiac care.
            </Typography>
            <Typography variant="p" color="dark">
              Established in 1962, Cardioline has evolved from a pioneering ECG equipment manufacturer into a provider
              of integrated cardiac diagnostic solutions. Cardioline combines decades of cardiac expertise with
              continuous innovation to develop advanced diagnostic technologies that support clinical precision and
              efficient workflows.
            </Typography>
          </div>

          {/* Mission / vision slider */}
          <div className="w-full sm:w-[94%] sm:mx-auto mt-6 sm:mt-7 min-[2500px]:mt-11 min-[3800px]:mt-14">
            <div className="grid">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    aria-hidden={i !== active}
                    className={`col-start-1 row-start-1 grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10 p-4 sm:p-5 min-[2500px]:p-8 min-[3800px]:p-10 bg-white border border-gray-200 rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="flex items-center justify-center w-16 h-16  sm:w-[76px] sm:h-[76px]  xl:w-20 xl:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-secondary/25">
                      <Icon className="text-secondary w-9 h-9 sm:w-11 sm:h-11 xl:w-18 xl:h-18 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-20 min-[3800px]:h-20" />
                    </div>
                    <div className="flex flex-col">
                      <Typography variant="h3" color="primary">
                        {item.title}
                      </Typography>
                      <Typography variant="h4" color="dark" className="mb-2 sm:mb-3 min-[2500px]:mb-4 min-[3800px]:mb-6">
                        {item.subtitle}
                      </Typography>
                      <Typography variant="p" color="dark">
                        {item.text}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mt-6 sm:mt-7 min-[2500px]:mt-10 min-[3800px]:mt-14">
              {highlights.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => setActive(i)}
                  className={`h-2 min-[2500px]:h-3 min-[3800px]:h-4 rounded-full bg-primary transition-all duration-300 ${i === active
                    ? "w-7 min-[2500px]:w-10 min-[3800px]:w-14"
                    : "w-2 min-[2500px]:w-3 min-[3800px]:w-4"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
