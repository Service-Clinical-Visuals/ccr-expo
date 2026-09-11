"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function GermanProject() {
  return (
    <section id="german-project" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <div>
              <Typography variant="h2" color="secondary" className="mb-3">
                New Biotech German Project
              </Typography>
              <div className="w-[247px] max-w-[60%] h-[2px] bg-[#003470] rounded-full" />
            </div>

            <Typography variant="p" color="muted" className="leading-relaxed">
              We are pleased to announced, that Biotech Group reached a new
              milestone, as reported by the Rhein newspaper as well. Biotech’s
              new factory building in Rheinbrohl will open its doors. The office
              section will open on the 1st of April in 2022, the production
              expected to begin in the end of the year 2022. We were looking for
              a building that could be quickly adapted to our needs, with a
              larger lot to allow us to grow in the future.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              To produce implants and instruments for bone surgery, the company
              also needs a production area, rooms for polishing and grinding as
              well as a mechanic workshop, a laundry room, three storage rooms
              for raw materials, for half-finished and finished products. There
              are also two offices for production management and quality
              control, a clean room, and a space for final inspection and
              packaging.
            </Typography>

            <div className="pt-2">
              <Button
                text="Read More"
                href="#contact"
                variant="primary"
                showIcon={false}
                className="w-[123px] h-[42px] min-[2500px]:w-[180px] min-[2500px]:h-[56px] min-[3800px]:w-[240px] min-[3800px]:h-[72px] px-0 flex items-center justify-center font-[var(--font-primary)] font-semibold text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[28px]"
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div
            className="w-full max-w-[580px] lg:max-w-none mx-auto rounded-[8px] overflow-hidden border border-slate-300 shadow-xl bg-slate-100"
            data-aos="fade-left"
          >
            <div className="aspect-[821/585] w-full relative">
              <img
                src="/medical/biotech/images/gm.jpg"
                alt="New Biotech German Project Factory in Rheinbrohl"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/medical/biotech/images/about.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
