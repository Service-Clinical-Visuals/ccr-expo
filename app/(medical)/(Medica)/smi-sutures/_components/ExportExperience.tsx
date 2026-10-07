"use client";

import React from "react";
import Button from "./Button";

export default function ExportExperience() {
  return (
    <section className="py-14 sm:py-16 min-[1025px]:py-20">
      <div className="custom-container px-0 sm:px-2 min-[1025px]:px-4">
        {/* Section Heading */}
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-semibold  inline-flex items-center gap-3">
            Recognised Export Experience
            <span className="inline-block w-6 sm:w-7 h-[3px] rounded-full bg-[#3a5da8] flex-shrink-0" />
          </h2>
          <p className="section-text  mt-3">
            SMI has established a strong international presence, exporting its surgical suture products to 120
            countries worldwide and continuing to expand its customer network. This international growth has
            been recognised through the Royal Export Award from the Belgian Foreign Trade Board.
          </p>
        </div>

        {/* Gradient Card (#3B63AA -> #4CB6C8) */}
        <div
          className="mt-10 min-[1025px]:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#3B63AA] to-[#4CB6C8]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="grid grid-cols-1 min-[1025px]:grid-cols-12 gap-3 items-center p-6 sm:p-10 ">
            {/* Text */}
            <div className="min-[1025px]:col-span-5  min-[1025px]:pl-4 xl:pl-6">
              <h3 className="card-title font-semibold text-white inline-flex items-center gap-3">
                World-Wide Recognition
                <span className="inline-block w-5 sm:w-6 h-[3px] rounded-full bg-white flex-shrink-0" />
              </h3>
              <p className="section-text text-white mt-3">
                SMI exports to 120 different countries all over the world, acquiring everyday new customers. This
                performance earned SMI the Royal Export Award from the Belgian Foreign Trade Board.
              </p>
              <div className="mt-6 sm:mt-7">
                <Button href="" variant="white">
                  View in 360°
                </Button>
              </div>
            </div>

            {/* World Map */}
            <div className="min-[1025px]:col-span-7 flex justify-center " data-aos="zoom-in" data-aos-delay="250">
              <img
                src="/medical/smi-sutures/world.webp"
                alt="SMI worldwide export network"
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
