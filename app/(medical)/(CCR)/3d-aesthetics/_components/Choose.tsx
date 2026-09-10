"use client";

import React from "react";
import Container from "./Container";

const reasons = [
  {
    icon: "/moto/3d-aesthetics/choose/1.png",
    text: "Fantastic results to ensure best patient outcomes.",
  },
  {
    icon: "/moto/3d-aesthetics/choose/2.png",
    text: "Value for money with advanced technology, at affordable prices.",
  },
  {
    icon: "/moto/3d-aesthetics/choose/3.png",
    text: "Fast return on investment, with potential to earn £1000's in additional revenue.",
  },
  {
    icon: "/moto/3d-aesthetics/choose/4.png",
    text: "Comprehensive & unrivalled support package from customer service, to training,",
  },
  {
    icon: "/moto/3d-aesthetics/choose/5.png",
    text: "Quality Assurance- we are an EN ISO13485: 2016 certified company,",
  },
  {
    icon: "/moto/3d-aesthetics/choose/6.png",
    text: "Become part of our diverse and growing community championing the best practice in result",
  },
];

const Choose = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="choose">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-accent font-semibold tracking-wide text-sm uppercase" data-aos="fade-up">
            The 3D Aesthetics Difference
          </span>

          <h2 className="heading mt-2 mb-4" data-aos="fade-up" data-aos-delay="50">
            Why Choose{" "}
            <span className="relative inline-block">
              3D
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-accent" />
            </span>{" "}
            Aesthetics?
          </h2>

          <p className="content text-[15px]! leading-[24px]!" data-aos="fade-up" data-aos-delay="100">
            Our unique business model will ensure that you are investing in high specification devices, at the most
            affordable price on the market, allowing you to make a fantastic return on investment from day one.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="flex justify-center">
            <div className="max-w-[80%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, idx) => (
                    <div
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 75}
                    className="flex items-center gap-4 p-6 border border-[#4B5563] rounded-lg"
                    >
                    <img
                        src={reason.icon}
                        alt=""
                        className="w-14 h-14 shrink-0 object-contain"
                    />
                    <p className="content text-[15px]! leading-[22px]!">
                        {reason.text}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Choose;
