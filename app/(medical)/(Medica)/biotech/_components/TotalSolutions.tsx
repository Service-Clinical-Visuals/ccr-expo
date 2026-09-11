"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function TotalSolutions() {
  return (
    <section id="about" className="w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6" data-aos="fade-up">
            <div>
              <Typography variant="h2" color="secondary" className="mb-3">
                Welcome to Biotech Group Total Solutions
              </Typography>
              <div className="w-[247px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] max-w-[60%] h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-[#003470] rounded-[8px]" />
            </div>

            <Typography variant="p" color="muted">
              The Biotech Group is one of the leading German manufacturer and
              distributor of medical products, headquartered in Rheinbrohl,
              Germany. The company works in European Union’s countries, but also
              distributes worldwide. Biotech provides one of the most
              comprehensive portfolios in the world, which includes orthopedics
              joint reconstruction: like hip, knee, shoulder replacement, and
              trauma, pectus, and spinal surgery.
            </Typography>

            <Typography variant="p" color="muted">
              The implants & instruments are designed to advance patient care and
              satisfy the necessary CE and ISO 13485 Quality Assurance
              Requirements. The high quality of the products and our
              customer-oriented approach to the market have made our company
              known and popular. The CE sign and MADE IN GERMANY applies for all
              our products. .
            </Typography>

            <div className="pt-2">
              <Button
                text="Know More"
                href="#contact"
                variant="primary"
                showIcon={false}
              />
            </div>
          </div>

          {/* Right Column: Layered Graphic */}
          <div
            className="lg:col-span-6 xl:col-span-6 relative w-full max-w-[680px] lg:max-w-none mx-auto pb-8 pr-8 sm:pb-10 sm:pr-10"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="absolute inset-0 translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8 lg:translate-x-10 lg:translate-y-8 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-2.5rem)] h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] lg:h-[calc(100%-2rem)] bg-[#003470] rounded-[5px] -z-0" />

            <div className="relative z-10 w-full aspect-[776/516] rounded-[5px] overflow-hidden border border-[#E4E4E4] bg-white shadow-md">
              <img
                src="/medical/biotech/images/about.jpg"
                alt="Welcome to Biotech Group Total Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
