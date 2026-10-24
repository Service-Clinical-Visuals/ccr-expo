"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mb-8 sm:mb-10 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            Welcome to Medical ECONET GmbH
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[1020px] 2xl:max-w-[1200px] min-[2500px]:max-w-[1650px] min-[3800px]:max-w-[2300px]">
            The origins of medical ECONET GmbH date back to 1997. At that time, we operated as the European sales
            branch of Kretztechnik AG, based in Zipf, Austria. Our company was located in Dorsten, on the outskirts
            of the Ruhr area.
          </Typography>
        </div>

        {/* Building image: rounded top-left and bottom-right corners */}
        <div
          className="w-full aspect-[1280/500] lg:aspect-[1308/417] overflow-hidden rounded-tl-[20px] rounded-br-[20px] sm:rounded-tl-[28px] sm:rounded-br-[28px] min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] shadow-[0px_4px_10px_rgba(0,0,0,0.15)] group"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="/medical/medical-econet/section2.webp"
            alt="Medical ECONET GmbH headquarters"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Text + CTA */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 2xl:gap-10 min-[3800px]:gap-16 mt-6 sm:mt-8 2xl:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Typography variant="p" color="muted" className="md:max-w-[65%] lg:max-w-[62%]">
            Today, we are an independent company, unaffiliated with any corporate group, and have successfully
            established ourselves both nationally and internationally as a qualified manufacturer and reliable
            supplier of medical devices.
          </Typography>

          <div className="shrink-0">
            <Button text="Learn More About Us" variant="primary" href="#about" />
          </div>
        </div>
      </div>
    </section>
  );
}
